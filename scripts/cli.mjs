#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PLUGIN_ID = 'dinotty-omp';
const PAYLOAD = ['plugin.json', 'dist', 'bin'];
const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function parseArgs(argv) {
  const args = { command: 'install', dir: '' };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--dir') {
      args.dir = argv[index + 1] || '';
      index += 1;
    } else if (token.startsWith('--dir=')) {
      args.dir = token.slice('--dir='.length);
    } else if (!token.startsWith('-')) {
      args.command = token;
    }
  }
  return args;
}

function pluginsRoot(override) {
  if (override) return path.resolve(override);
  if (process.env.DINOTTY_PLUGINS_DIR) return path.resolve(process.env.DINOTTY_PLUGINS_DIR);
  return path.join(os.homedir(), '.dinotty', 'plugins');
}

function classify(target) {
  try {
    const stat = fs.lstatSync(target);
    if (stat.isSymbolicLink()) return 'symlink';
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

function requireBuild() {
  const entry = path.join(packageRoot, 'dist', 'main.js');
  if (!fs.existsSync(entry)) {
    fail('dist/main.js is missing. Run "pnpm build" before installing from a source checkout.');
  }
}

function copyPayload(target) {
  fs.mkdirSync(target, { recursive: true });
  for (const item of PAYLOAD) {
    const from = path.join(packageRoot, item);
    if (!fs.existsSync(from)) continue;
    const to = path.join(target, item);
    fs.rmSync(to, { recursive: true, force: true });
    fs.cpSync(from, to, { recursive: true });
  }

  const bridge = path.join(target, 'bin', 'omp-bridge');
  if (fs.existsSync(bridge) && process.platform !== 'win32') {
    fs.chmodSync(bridge, 0o755);
  }
}

function install(dirOverride) {
  requireBuild();
  const root = pluginsRoot(dirOverride);
  const target = path.join(root, PLUGIN_ID);
  const existing = classify(target);

  if (existing === 'symlink') {
    fs.unlinkSync(target);
  } else if (existing === 'file') {
    fail(`${target} exists as a file. Remove it and try again.`);
  }

  copyPayload(target);
  process.stdout.write(`Installed ${PLUGIN_ID} into ${target}\n`);
  process.stdout.write('Reload the Dinotty browser tab to activate it.\n');
}

function uninstall(dirOverride) {
  const target = path.join(pluginsRoot(dirOverride), PLUGIN_ID);
  const existing = classify(target);
  if (!existing) {
    process.stdout.write(`Nothing installed at ${target}\n`);
    return;
  }
  fs.rmSync(target, { recursive: true, force: true });
  process.stdout.write(`Removed ${target}\n`);
}

function link(dirOverride) {
  requireBuild();
  const root = pluginsRoot(dirOverride);
  const target = path.join(root, PLUGIN_ID);
  const existing = classify(target);

  if (existing === 'directory') {
    fail(`${target} is a real directory. Run "unlink" or remove it before linking.`);
  }
  if (existing === 'symlink') {
    fs.unlinkSync(target);
  }

  fs.mkdirSync(root, { recursive: true });

  try {
    fs.symlinkSync(packageRoot, target, 'junction');
    process.stdout.write(`Linked ${target} to ${packageRoot}\n`);
  } catch (error) {
    if (error && error.code === 'EPERM') {
      fail(
        'Symlink creation was denied. Enable Developer Mode on Windows, run the shell as Administrator, or use "install" to copy instead.'
      );
    }
    throw error;
  }
}

function usage() {
  process.stdout.write(
    [
      'Usage: dinotty-omp <command> [--dir <plugins-directory>]',
      '',
      'Commands:',
      '  install    Copy the built plugin into the Dinotty plugins directory (default)',
      '  uninstall  Remove the installed plugin',
      '  link       Symlink a source checkout for development',
      '  unlink     Alias of uninstall',
      '  where      Print the resolved plugins directory',
      '',
      'The directory resolves from --dir, then DINOTTY_PLUGINS_DIR, then the home directory.',
      ''
    ].join('\n')
  );
}

const { command, dir } = parseArgs(process.argv.slice(2));

switch (command) {
  case 'install':
    install(dir);
    break;
  case 'uninstall':
  case 'unlink':
    uninstall(dir);
    break;
  case 'link':
    link(dir);
    break;
  case 'where':
    process.stdout.write(`${path.join(pluginsRoot(dir), PLUGIN_ID)}\n`);
    break;
  case 'help':
    usage();
    break;
  default:
    process.stderr.write(`Unknown command: ${command}\n`);
    usage();
    process.exit(1);
}
