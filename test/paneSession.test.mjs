import assert from 'node:assert/strict';
import test from 'node:test';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const modulePath = join(process.env.DINOTTY_TEST_MODULES, 'paneSession.mjs');
const paneSession = await import(pathToFileURL(modulePath).href);
const realNow = Date.now;
const realSetTimeout = globalThis.setTimeout;
const realClearTimeout = globalThis.clearTimeout;
let clock = 0;
let timerId = 0;
let timers = [];

function installClock() {
  clock = 0;
  timerId = 0;
  timers = [];
  Date.now = () => clock;
  globalThis.setTimeout = (callback, delay = 0) => {
    const id = ++timerId;
    timers.push({ id, at: clock + delay, callback });
    return id;
  };
  globalThis.clearTimeout = (id) => {
    timers = timers.filter((timer) => timer.id !== id);
  };
}

async function advance(ms) {
  clock += ms;
  for (;;) {
    const due = timers.filter((timer) => timer.at <= clock);
    if (!due.length) break;
    timers = timers.filter((timer) => timer.at > clock);
    for (const timer of due) timer.callback();
    await flush();
  }
}

function restoreClock() {
  Date.now = realNow;
  globalThis.setTimeout = realSetTimeout;
  globalThis.clearTimeout = realClearTimeout;
  timers = [];
}

function session(cwd, cost, state = 'running', status = 'idle') {
  return {
    cwd,
    sessionFile: state === 'inactive' ? '' : `${cwd}/.omp/session.jsonl`,
    isRunning: state !== 'inactive',
    state,
    summary: state === 'running' ? {
      model: 'model',
      provider: 'provider',
      thinkingLevel: 'auto',
      totalTokens: 10,
      totalCost: cost,
      turns: 1,
      status
    } : null
  };
}

function context() {
  let paneId = 'A';
  let cwd = '/a';
  const paneListeners = [];
  const watches = [];
  const calls = [];
  const pending = [];
  const ctx = {
    reactive: (value) => value,
    ref: (value) => ({ value }),
    computed: (getter) => ({ get value() { return getter(); } }),
    watch: () => ({ dispose() {} }),
    onMounted: () => {},
    onUnmounted: () => {},
    h: () => null,
    i18n: { getLocale: () => 'en', onDidChangeLocale: () => ({ dispose() {} }) },
    exec: {
      run(args) {
        calls.push(args);
        return new Promise((resolve) => pending.push({ args, resolve }));
      },
      spawn: () => ({ stdout: null, stderr: null, kill() {} })
    },
    terminal: {
      activePaneId: () => paneId,
      activeCwd: () => cwd,
      onDidChangeActivePane: (callback) => {
        paneListeners.push(callback);
        return { dispose() {} };
      },
      send() {},
      listPanes: () => [],
      onOutput: () => ({ dispose() {} }),
      createTab: async () => '',
      createTerminalTab: async () => '',
      splitTerminalPane: async () => null
    },
    workspace: {
      watch(path, callback) {
        watches.push({ path, callback });
        return { dispose() {} };
      },
      readDir: async () => ({ path: '', entries: [] }),
      readFile: async () => ({ kind: 'text', content: '', truncated: false, language: null }),
      writeFile: async () => {},
      stat: async () => ({ size: 0, is_dir: false, modified: 0 }),
      mkdir: async () => {},
      delete: async () => {},
      rename: async () => {},
      move: async () => {}
    },
    settings: { get: () => ({}), onDidChange: () => ({ dispose() {} }) },
    storage: { get: async () => undefined, set: async () => {}, delete: async () => {}, list: async () => [] },
    commands: { register: () => ({ dispose() {} }), registerQuickPick: () => ({ dispose() {} }) },
    ui: { notify() {}, confirm: async () => true },
    open() {},
    process: { start: async () => null, list: async () => [], stop: async () => {}, stopAll: async () => {} },
    events: { subscribe: () => ({ dispose() {} }), emit() {} },
    assetUrl: (value) => value,
    fetchAsset: async () => new Response()
  };
  return {
    ctx,
    calls,
    watches,
    pending,
    switchPane(nextPaneId, nextCwd) {
      paneId = nextPaneId;
      cwd = nextCwd;
      paneListeners[0]?.(nextPaneId);
    },
    setPane(nextPaneId, nextCwd) {
      paneId = nextPaneId;
      cwd = nextCwd;
    },
    resolve(nextPaneId, value) {
      const index = pending.findIndex((item) => item.args[1] === nextPaneId);
      assert.notEqual(index, -1);
      pending.splice(index, 1)[0].resolve({ code: 0, stdout: JSON.stringify(value), stderr: '' });
    }
  };
}

async function flush() {
  await Promise.resolve();
  await Promise.resolve();
}

test.beforeEach(installClock);
test.afterEach(() => {
  paneSession.resetPaneSession();
  restoreClock();
});

test('clears the old pane and rejects a late response after switching panes', async () => {
  const fake = context();
  const snapshots = [];
  paneSession.subscribePaneSession(fake.ctx, { listener: (value) => snapshots.push(value) });
  assert.equal(fake.calls.length, 1);
  fake.switchPane('B', '/b');
  assert.equal(paneSession.peekPaneSession().cwd, '/b');
  assert.equal(paneSession.peekPaneSession().state, 'starting');
  assert.equal(fake.calls.length, 2);
  fake.resolve('A', session('/a', 1));
  await flush();
  assert.equal(paneSession.peekPaneSession().cwd, '/b');
  fake.resolve('B', session('/b', 2));
  await flush();
  assert.equal(paneSession.peekPaneSession().cwd, '/b');
  assert.equal(snapshots.at(-1).summary.totalCost, 2);
});
test('detects silent pane changes with the cheap pane-id check', async () => {
  const fake = context();
  paneSession.subscribePaneSession(fake.ctx, {});
  fake.resolve('A', session('/a', 1));
  await flush();
  fake.setPane('B', '/b');
  await advance(249);
  assert.equal(fake.calls.length, 1);
  await advance(1);
  assert.equal(fake.calls.length, 2);
  fake.resolve('B', session('/b', 2));
  await flush();
  assert.equal(paneSession.peekPaneSession().cwd, '/b');
});

test('re-probes inactive panes and active OMP states on short safety bounds', async () => {
  const fake = context();
  paneSession.subscribePaneSession(fake.ctx, {});
  fake.resolve('A', session('/a', 0, 'inactive'));
  await flush();
  await advance(2_999);
  assert.equal(fake.calls.length, 1);
  await advance(1);
  assert.equal(fake.calls.length, 2);
  fake.resolve('A', session('/a', 1, 'running', 'running_tool'));
  await flush();
  await advance(2_499);
  assert.equal(fake.calls.length, 2);
  await advance(1);
  assert.equal(fake.calls.length, 3);
});

test('does not repopulate the store when a request resolves after dispose', async () => {
  const fake = context();
  const subscription = paneSession.subscribePaneSession(fake.ctx, {});
  subscription.dispose();
  fake.resolve('A', session('/a', 1));
  await flush();
  assert.equal(paneSession.peekPaneSession().cwd, '');
});

test('filters unrelated watch events and keeps a trailing refresh for a coalesced write', async () => {
  const fake = context();
  const snapshots = [];
  paneSession.subscribePaneSession(fake.ctx, { listener: (value) => snapshots.push(value) });
  fake.resolve('A', session('/a', 1));
  await flush();
  assert.equal(fake.watches.length, 1);
  fake.watches[0].callback({ type: 'file_event', path: '/a/.omp/other.jsonl' });
  await flush();
  assert.equal(fake.calls.length, 1);
  fake.watches[0].callback({ type: 'file_event', path: '/a/.omp/session.jsonl' });
  await advance(600);
  assert.equal(fake.calls.length, 2);
  fake.watches[0].callback({ type: 'file_event', path: '/a/.omp/session.jsonl' });
  fake.resolve('A', session('/a', 2));
  await flush();
  await advance(600);
  assert.equal(fake.calls.length, 3);
  fake.resolve('A', session('/a', 3));
  await flush();
  assert.equal(snapshots.at(-1).summary.totalCost, 3);
});
test('uses bounded startup and settled safety delays', async () => {
  const fake = context();
  paneSession.subscribePaneSession(fake.ctx, {});
  fake.resolve('A', session('/a', 0, 'starting'));
  await flush();
  assert.equal(fake.calls.length, 1);
  await advance(2_999);
  assert.equal(fake.calls.length, 1);
  await advance(1);
  assert.equal(fake.calls.length, 2);
  fake.resolve('A', session('/a', 1));
  await flush();
  await advance(29_999);
  assert.equal(fake.calls.length, 2);
  await advance(1);
  assert.equal(fake.calls.length, 3);
});


test('keeps hidden subscribers from probing until visible', async () => {
  const fake = context();
  let visible = false;
  paneSession.subscribePaneSession(fake.ctx, { visible: () => visible });
  await flush();
  assert.equal(fake.calls.length, 0);
  visible = true;
  await paneSession.refreshPaneSession(true);
  assert.equal(fake.calls.length, 1);
  fake.resolve('A', session('/a', 1));
  await flush();
  assert.equal(paneSession.peekPaneSession().cwd, '/a');
});
