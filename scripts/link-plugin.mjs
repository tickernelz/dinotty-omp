#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PLUGIN_ID = 'dinotty-omp';
const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pluginsDir = path.join(os.homedir(), '.dinotty', 'plugins');
const target = path.join(pluginsDir, PLUGIN_ID);
const remove = process.argv.includes('--remove');

function describe(where) {
  try {
    const stat = fs.lstatSync(where);
    if (stat.isSymbolicLink()) return `symlink -> ${fs.readlinkSync(where)}`;
    if (stat.isDirectory()) return 'directory';
    return 'file';
  } catch {
    return null;
  }
}

function fail(message) {
  process.stderr.write(`${message}\n`);
  process.exit(1);
}

if (remove) {
  const kind = describe(target);
  if (!kind) {
    process.stdout.write(`nothing to remove at ${target}\n`);
    process.exit(0);
  }
  if (kind === 'directory') {
    fail(`refusing to delete a real directory at ${target}; remove it manually if intended`);
  }
  fs.unlinkSync(target);
  process.stdout.write(`unlinked ${target}\n`);
  process.exit(0);
}

if (!fs.existsSync(path.join(projectDir, 'dist', 'main.js'))) {
  fail('dist/main.js is missing; run "pnpm build" first');
}

fs.mkdirSync(pluginsDir, { recursive: true });

const existing = describe(target);
if (existing && existing.startsWith('symlink')) {
  fs.unlinkSync(target);
} else if (existing) {
  fail(`${target} already exists as a ${existing}; remove it before linking`);
}

try {
  fs.symlinkSync(projectDir, target, 'junction');
  process.stdout.write(`linked ${target} -> ${projectDir}\n`);
} catch (error) {
  if (error && error.code === 'EPERM') {
    fail(
      'symlink creation was denied. On Windows either enable Developer Mode, run the terminal as Administrator, or copy this folder into ' +
        target
    );
  }
  throw error;
}
