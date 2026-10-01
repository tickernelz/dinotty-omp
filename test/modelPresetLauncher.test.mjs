import assert from 'node:assert/strict';
import test from 'node:test';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const modules = process.env.DINOTTY_TEST_MODULES;
const launcher = await import(pathToFileURL(join(modules, 'tmuxLauncher.mjs')));
const presets = [
  { id: 'default', label: 'default', modelRoles: { default: 'provider/a' }, defaultThinkingLevel: 'auto', isDefault: true },
  { id: 'sub2api-gpt61', label: 'sub2api-gpt61', modelRoles: { default: 'provider/b' }, defaultThinkingLevel: 'xhigh', isDefault: false }
];

function context() {
  const sent = [];
  const notifications = [];
  const timers = [];
  let probes = 0;
  globalThis.window = {
    setTimeout(callback) {
      timers.push(callback);
      return timers.length;
    }
  };
  const ctx = {
    terminal: {
      activePaneId: () => 'pane-a',
      activeCwd: () => '/workspace',
      send: (paneId, text) => sent.push([paneId, text])
    },
    exec: {
      run: async () => {
        probes += 1;
        const running = probes >= 2;
        return {
          code: 0,
          stdout: JSON.stringify({
            cwd: '/workspace',
            sessionFile: running ? '/session.jsonl' : '',
            isRunning: true,
            state: running ? 'running' : 'starting',
            summary: null
          }),
          stderr: ''
        };
      }
    },
    ui: { notify: (text) => notifications.push(text) }
  };
  return { ctx, sent, notifications, timers };
}

for (const preset of presets) {
  test(`active-pane launch applies ${preset.id} exactly once after readiness`, async () => {
    const fake = context();
    assert.deepEqual(launcher.buildOmpArgs(preset), []);
    assert.equal(launcher.buildPresetSwitchCommand(preset), `/modelpreset switch ${preset.id}\n`);
    assert.equal(await launcher.launchOmpInActivePane(fake.ctx, preset), true);
    assert.deepEqual(fake.sent, [['pane-a', "'omp'\n"]]);
    await fake.timers.shift()();
    await Promise.resolve();
    assert.equal(fake.sent.length, 1);
    await fake.timers.shift()();
    await Promise.resolve();
    assert.deepEqual(fake.sent.at(-1), ['pane-a', `/modelpreset switch ${preset.id}\n`]);
    assert.equal(fake.sent.filter((entry) => entry[1].startsWith('/modelpreset')).length, 1);
    assert.equal(fake.timers.length, 0);
  });
}
