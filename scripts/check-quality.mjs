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

// Prevent new scattered UI hardcoding without making legacy cleanup a prerequisite.
// In pull requests GitHub supplies GITHUB_BASE_REF; we inspect only added lines.
const baseRef = process.env.GITHUB_BASE_REF;
if (baseRef) {
  try {
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
  } catch {
    violations.push(`Could not compare UI additions against origin/${baseRef}; ensure checkout has base-branch history`);
  }
}

if (violations.length) {
  console.error('\nRepository quality checks failed:\n');
  for (const violation of [...new Set(violations)]) console.error(` - ${violation}`);
  console.error('\nFix these issues before merging. Use an explicit quality-allow-hardcoded comment only for a reviewed exception.\n');
  process.exit(1);
}

console.log(`Repository quality checks passed for ${tracked.length} tracked files.`);
