import assert from 'node:assert/strict';
import { test } from 'node:test';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const modules = process.env.DINOTTY_TEST_MODULES;
if (!modules) throw new Error('DINOTTY_TEST_MODULES is required');

const layout = await import(pathToFileURL(join(modules, 'overlayLayout.mjs')).href);
const position = await import(pathToFileURL(join(modules, 'overlayPosition.mjs')).href);

const positionKey = 'dinotty:overlay-pos:dinotty-omp:dinotty-omp:hud';
const migrationKey = 'dinotty-omp:overlay-pos-migrated:v1';

function installBrowser(width, height) {
  const values = new Map();
  globalThis.window = { innerWidth: width, innerHeight: height };
  globalThis.localStorage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, String(value))
  };
  return values;
}

test('mobile defaults stay finite and avoid the top-right safe area', () => {
  installBrowser(390, 844);
  assert.deepEqual(layout.defaultOverlayPosition(), { x: 12, y: 12 });
  installBrowser(1280, 900);
  assert.deepEqual(layout.defaultOverlayPosition(), { x: 1024, y: 12 });
});

test('mobile migration moves the legacy right-aligned default once', () => {
  const values = installBrowser(390, 844);
  values.set(positionKey, JSON.stringify({ x: 146, y: 0 }));
  position.migrateStoredOverlayPosition({ x: 12, y: 12 });
  assert.deepEqual(JSON.parse(values.get(positionKey)), { x: 12, y: 12 });
  assert.equal(values.get(migrationKey), '1');
  values.set(positionKey, JSON.stringify({ x: 60, y: 180 }));
  position.migrateStoredOverlayPosition({ x: 12, y: 12 });
  assert.deepEqual(JSON.parse(values.get(positionKey)), { x: 60, y: 180 });
});

test('desktop and deliberate mobile positions remain unchanged', () => {
  let values = installBrowser(1280, 900);
  values.set(positionKey, JSON.stringify({ x: 1024, y: 12 }));
  position.migrateStoredOverlayPosition({ x: 1024, y: 12 });
  assert.equal(values.get(migrationKey), undefined);
  assert.deepEqual(JSON.parse(values.get(positionKey)), { x: 1024, y: 12 });

  values = installBrowser(390, 844);
  values.set(positionKey, JSON.stringify({ x: 24, y: 80 }));
  position.migrateStoredOverlayPosition({ x: 12, y: 12 });
  assert.equal(values.get(migrationKey), undefined);
  assert.deepEqual(JSON.parse(values.get(positionKey)), { x: 24, y: 80 });
});
