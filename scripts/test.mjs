import { execFile } from 'node:child_process';
import { readdir, rm } from 'node:fs/promises';
import { promisify } from 'node:util';
import { build } from 'vite';

const exec = promisify(execFile);
const root = new URL('..', import.meta.url).pathname;
const modules = new URL('../.tmp-test-dist/', import.meta.url).pathname;
const tests = (await readdir(new URL('../test/', import.meta.url)))
  .filter((name) => name.endsWith('.test.mjs'))
  .map((name) => new URL(`../test/${name}`, import.meta.url).pathname);

try {
  await build({ configFile: new URL('../vite.config.test.ts', import.meta.url).pathname });
  await exec(process.execPath, ['--test', ...tests], {
    cwd: root,
    env: { ...process.env, DINOTTY_TEST_MODULES: modules },
    maxBuffer: 64 * 1024 * 1024
  });
} finally {
  await rm(modules, { recursive: true, force: true });
}
