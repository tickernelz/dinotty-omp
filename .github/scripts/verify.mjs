#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const artifactsOnly = args.includes('--artifacts-only');
const installedIndex = args.indexOf('--installed');
const installedRoot = installedIndex >= 0 ? args[installedIndex + 1] : '';

const failures = [];

function requireFile(target, label) {
  if (!fs.existsSync(target)) {
    failures.push(`${label} is missing: ${target}`);
    return false;
  }
  const size = fs.statSync(target).size;
  if (size === 0) {
    failures.push(`${label} is empty: ${target}`);
    return false;
  }
  console.log(`ok ${label} ${target} (${size} bytes)`);
  return true;
}

function readJson(target) {
  try {
    return JSON.parse(fs.readFileSync(target, 'utf8'));
  } catch (error) {
    failures.push(`${target} is not valid JSON: ${error.message}`);
    return null;
  }
}

function checkInstalled(root) {
  const manifest = readJson(path.join(root, 'plugin.json'));
  if (!manifest) return;
  for (const key of ['entry', 'styles']) {
    requireFile(path.join(root, manifest[key]), `installed ${key}`);
  }
  requireFile(path.join(root, manifest.bin.entry), 'installed bridge');
  requireFile(path.join(root, manifest.bin.entries['windows-x86_64']), 'installed windows bridge');
}

function checkRepository() {
  const manifest = readJson('plugin.json');
  const pkg = readJson('package.json');
  if (!manifest || !pkg) return;

  if (!artifactsOnly && manifest.version !== pkg.version) {
    failures.push(`version mismatch: plugin.json ${manifest.version} vs package.json ${pkg.version}`);
  }

  requireFile(manifest.entry, 'manifest entry');
  requireFile(manifest.styles, 'manifest styles');
  requireFile(manifest.bin.entry, 'bridge');
  requireFile(manifest.bin.entries['windows-x86_64'], 'windows bridge');

  if (artifactsOnly) return;

  const declared = new Set(manifest.commands.map((command) => command.id));
  const source = fs.readFileSync('src/main.ts', 'utf8');
  for (const id of declared) {
    if (!source.includes(`'${id}'`)) {
      failures.push(`command ${id} is declared in plugin.json but never registered in src/main.ts`);
    }
  }

  for (const entry of pkg.files) {
    if (!fs.existsSync(entry)) {
      failures.push(`package.json files entry does not exist: ${entry}`);
    }
  }

  if (pkg.publishConfig?.access !== 'public') {
    failures.push('publishConfig.access must be public for a scoped package');
  }
}

if (installedRoot) {
  checkInstalled(installedRoot);
} else {
  checkRepository();
}

if (failures.length) {
  console.error('');
  for (const failure of failures) console.error(`FAIL ${failure}`);
  process.exit(1);
}

console.log('all checks passed');
