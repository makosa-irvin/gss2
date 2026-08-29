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

  if (/\s+$/m.test(text)) {
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

if (violations.length) {
  console.error('\nRepository quality checks failed:\n');
  for (const violation of violations) console.error(` - ${violation}`);
  console.error('\nFix these issues before merging.\n');
  process.exit(1);
}

console.log(`Repository quality checks passed for ${tracked.length} tracked files.`);
