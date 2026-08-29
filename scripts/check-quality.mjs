import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const tracked = execFileSync('git', ['ls-files'], { encoding: 'utf8' })
  .split(/\r?\n/)
  .filter(Boolean);

const violations = [];
const sourceFiles = tracked.filter((file) => /\.(?:ts|tsx|js|jsx|mjs|cjs|json|md|yml|yaml)$/.test(file));

for (const file of sourceFiles) {
  const text = readFileSync(file, 'utf8');

  if (/^(?:<{7}|={7}|>{7})/m.test(text)) {
    violations.push(`${file}: contains unresolved merge-conflict markers`);
  }

  if (/[ \t]+$/m.test(text)) {
    violations.push(`${file}: contains trailing whitespace`);
  }
}

// A green suite must mean the committed tests actually ran. Vitest/Jest-style
// .skip/.todo/.only (and xit/xdescribe aliases) can otherwise leave important
// coverage silently disabled while CI still reports success. Conditional
// skip/run helpers are also blocked unless the file carries the reviewed
// quality-allow-test-skip escape hatch.
const testFiles = tracked.filter((file) =>
  /(?:^|\/)(?:__tests__\/.*|[^/]+\.(?:test|spec))\.(?:ts|tsx|js|jsx|mjs|cjs)$/.test(file),
);
for (const file of testFiles) {
  const text = readFileSync(file, 'utf8');
  if (text.includes('quality-allow-test-skip')) continue;

  if (/\b(?:describe|it|test)\.(?:skip|todo|only|skipIf|runIf)\s*\(/.test(text)) {
    violations.push(`${file}: contains skipped, conditional, todo, or focused tests`);
  }
  if (/\b(?:xdescribe|xit|xtest)\s*\(/.test(text)) {
    violations.push(`${file}: contains disabled xdescribe/xit/xtest tests`);
  }
}

const forbiddenTrackedFiles = tracked.filter((file) => {
  if (/\.env\.example$/.test(file)) return false;
  if (/\.env\.(?:example|sample|template)$/.test(file)) return false;
  return /(^|\/)\.env(?:\.|$)/.test(file);
});

for (const file of forbiddenTrackedFiles) {
  violations.push(`${file}: environment files with real values must not be committed`);
}

const privateKeyFiles = tracked.filter((file) => /\.(?:pem|p12|pfx|key)$/i.test(file));
for (const file of privateKeyFiles) {
  violations.push(`${file}: private key/certificate material must not be committed`);
}

// PR-only policy checks can compare against the integration branch without
// penalizing legacy code that predates this engineering baseline.
const baseRef = process.env.GITHUB_BASE_REF;
if (baseRef) {
  try {
    const changedFiles = execFileSync(
      'git',
      ['diff', '--name-only', `origin/${baseRef}...HEAD`],
      { encoding: 'utf8' },
    )
      .split(/\r?\n/)
      .filter(Boolean);

    // Drizzle schema changes must travel with reviewable SQL. This prevents
    // deploying code that expects a database shape nobody has migrated.
    if (
      changedFiles.includes('server/src/db/schema.ts') &&
      !changedFiles.some((file) => /^server\/src\/db\/migrations\/\d+.*\.sql$/.test(file))
    ) {
      violations.push('server/src/db/schema.ts changed without a versioned SQL migration');
    }

    const diff = execFileSync(
      'git',
      ['diff', `origin/${baseRef}...HEAD`, '--unified=0', '--', 'src'],
      { encoding: 'utf8' },
    );

    let currentFile = '';
    for (const line of diff.split(/\r?\n/)) {
      if (line.startsWith('+++ b/')) {
        currentFile = line.slice(6);
        continue;
      }
      if (!line.startsWith('+') || line.startsWith('+++')) continue;
      if (!/^(?:src\/components|src\/views|src\/admin)\//.test(currentFile)) continue;
      if (/(?:^|\/)__tests__\//.test(currentFile) || /\.test\.[^.]+$/.test(currentFile)) continue;
      if (line.includes('quality-allow-hardcoded')) continue;

      const added = line.slice(1);
      if (/https?:\/\//.test(added)) {
        violations.push(`${currentFile}: new external URL literal should be centralized in config/data`);
      }
      if (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(added)) {
        violations.push(`${currentFile}: new email literal should come from shared company/contact config`);
      }
      if (/\b(?:tel:|wa\.me\/|whatsapp)/i.test(added) && /[+\d][\d\s()-]{6,}/.test(added)) {
        violations.push(`${currentFile}: new phone/WhatsApp literal should come from shared company/contact config`);
      }
      if (/\[(?:#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8}))\]/i.test(added)) {
        violations.push(`${currentFile}: new arbitrary hex color should use an existing semantic design token/class`);
      }
    }

    // Runtime configuration has a single validated boundary. New production
    // code should consume server/src/config/env.ts rather than spreading
    // unvalidated process.env reads throughout routes/services/middleware.
    const serverDiff = execFileSync(
      'git',
      ['diff', `origin/${baseRef}...HEAD`, '--unified=0', '--', 'server/src'],
      { encoding: 'utf8' },
    );

    currentFile = '';
    for (const line of serverDiff.split(/\r?\n/)) {
      if (line.startsWith('+++ b/')) {
        currentFile = line.slice(6);
        continue;
      }
      if (!line.startsWith('+') || line.startsWith('+++')) continue;
      if (!line.includes('process.env')) continue;
      if (currentFile === 'server/src/config/env.ts') continue;
      if (/^server\/src\/db\/(?:seed|migrate)\.ts$/.test(currentFile)) continue;
      if (/^server\/src\/test\//.test(currentFile) || /\.test\.ts$/.test(currentFile)) continue;

      violations.push(`${currentFile}: new runtime process.env access must go through server/src/config/env.ts`);
    }
  } catch {
    violations.push(`Could not compare changes against origin/${baseRef}; ensure checkout has base-branch history`);
  }
}

if (violations.length) {
  console.error('\nRepository quality checks failed:\n');
  for (const violation of [...new Set(violations)]) console.error(` - ${violation}`);
  console.error('\nFix these issues before merging. Use an explicit quality-allow-hardcoded or quality-allow-test-skip marker only for a reviewed exception.\n');
  process.exit(1);
}

console.log(`Repository quality checks passed for ${tracked.length} tracked files.`);
