import { describe, it, expect } from 'vitest';
import { execFileSync } from 'node:child_process';
import { existsSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(currentDir, '..');
const distDir = path.join(repoRoot, 'dist');

// Verifies WRK-1978:AC-005: `npm run build` succeeds after the Windows 11
// Fluent restyle, with no change to calculation results or error states
// (covered separately by evaluator.test.js's unchanged behavior assertions).
// @ac:AC-005
describe('production build', () => {
  it('completes successfully and emits the expected bundle', () => {
    rmSync(distDir, { recursive: true, force: true });

    execFileSync('npm', ['run', 'build'], { cwd: repoRoot, stdio: 'pipe' });

    expect(existsSync(distDir)).toBe(true);
    expect(existsSync(path.join(distDir, 'index.html'))).toBe(true);
  }, 60000);
});
