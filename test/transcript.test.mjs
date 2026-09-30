import test from 'node:test';
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdtemp, readFile, writeFile, appendFile, stat, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const exec = promisify(execFile);
const bridge = resolve('bin/omp-bridge');
const modules = process.env.DINOTTY_TEST_MODULES;
const { SessionParser, searchableText } = await import(pathToFileURL(join(modules, 'sessionParser.mjs')));
const { loadSessionIncremental, clearSessionCache } = await import(pathToFileURL(join(modules, 'sessionLoader.mjs')));
const header = { type: 'session', id: 'synthetic-session', cwd: '/synthetic/工作' };
const line = (record) => JSON.stringify(record);
const message = (id, text, role = 'user', cost) => ({
  type: 'message', id, timestamp: 1_000,
  message: { role, timestamp: 1_000, model: 'fixture-model', provider: 'fixture-provider', content: [{ type: 'text', text }], ...(cost === undefined ? {} : { usage: { totalTokens: 42, cost: { total: cost } } }) }
});

async function fixture(records, run, terminated = true) {
  const dir = await mkdtemp(join(tmpdir(), 'dinotty-transcript-'));
  const file = join(dir, 'fixture.jsonl');
  await writeFile(file, records.map(line).join('\n') + (terminated ? '\n' : ''));
  const invoke = async (args) => {
    try {
      const result = await exec(process.execPath, [bridge, ...args], { env: { ...process.env, TMPDIR: dir, TEMP: dir, TMP: dir }, maxBuffer: 32 * 1024 * 1024 });
      return { code: 0, stdout: result.stdout };
    } catch (error) {
      return { code: error.code, stdout: error.stdout || '' };
    }
  };
  const ctx = {
    exec: { run: invoke },
    workspace: { stat: async (name) => { const value = await stat(name); return { size: value.size, modified: value.mtimeMs, is_dir: value.isDirectory() }; } }
  };
  try {
    await run({ file, dir, invoke, ctx });
  } finally {
    clearSessionCache();
    await rm(dir, { recursive: true, force: true });
  }
}

test('chunks preserve large variable records, UTF-8 bytes and final unterminated lines', async () => {
  const records = [header, message('short', 'First 🌍'), message('large', '界🙂'.repeat(230_000)), message('last', 'EOF é🙂')];
  await fixture(records, async ({ file, invoke }) => {
    const original = await readFile(file);
    const parser = new SessionParser();
    let offset = 0;
    const contents = [];
    for (let count = 0; count < 20; count += 1) {
      const response = await invoke(['chunk', file, String(offset), '131071']);
      assert.equal(response.code, 0);
      const chunk = JSON.parse(response.stdout);
      assert.equal(chunk.start, offset);
      assert.equal(Buffer.byteLength(chunk.content), chunk.end - chunk.start);
      assert.ok(chunk.end > offset);
      contents.push(Buffer.from(chunk.content));
      parser.push(chunk.content, chunk.eof);
      offset = chunk.end;
      if (chunk.eof) break;
    }
    assert.deepEqual(Buffer.concat(contents), original);
    assert.deepEqual(parser.messages.map((item) => item.id), ['short', 'large', 'last']);
    assert.equal(parser.messages[1].text, records[2].message.content[0].text);
    const end = JSON.parse((await invoke(['chunk', file, String(original.length), '4096'])).stdout);
    assert.equal(end.start, original.length);
    assert.equal(end.content, '');
    assert.equal(end.eof, true);
  }, false);
});

test('chunks at exact boundaries do not repeat the previous record', async () => {
  await fixture([header, message('one', '🧭 one'), message('two', '🧭 two')], async ({ file, invoke }) => {
    const start = Buffer.byteLength(line(header) + '\n');
    const bytes = Buffer.byteLength(line(message('one', '🧭 one')) + '\n');
    const first = JSON.parse((await invoke(['chunk', file, String(start), String(bytes)])).stdout);
    assert.equal(first.start, start);
    assert.equal(first.end, start + bytes);
    assert.equal(JSON.parse(first.content).id, 'one');
    const second = JSON.parse((await invoke(['chunk', file, String(first.end), String(bytes)])).stdout);
    assert.equal(JSON.parse(second.content).id, 'two');
  });
});

test('tail paging reaches every unique older record beyond the previous 1500 limit', async () => {
  const expected = Array.from({ length: 1700 }, (_, index) => `row-${index}`);
  const records = [header, message('charged', 'Earlier expensive turn', 'assistant', 1.25), ...expected.map((id) => message(id, `${id} ${'a'.repeat(1600)}`)), message('latest', 'Latest inexpensive turn', 'assistant', 0.05)];
  await fixture(records, async ({ file, ctx }) => {
    let loaded = await loadSessionIncremental(ctx, file, { tailBytes: 48 * 1024 });
    assert.equal(loaded.metricsExact, true);
    assert.equal(loaded.totalCost, 1.3);
    assert.equal(loaded.turns, 2);
    assert.equal(loaded.sessionId, header.id);
    assert.equal(loaded.cwd, header.cwd);
    assert.equal(loaded.droppedHead, true);
    const before = loaded.messages.map((item) => item.id);
    while (loaded.startOffset > 0) {
      const previous = loaded;
      loaded = await loadSessionIncremental(ctx, file, { before: loaded, tailBytes: 400 * 1024 });
      assert.ok(loaded.startOffset < previous.startOffset);
      assert.deepEqual(loaded.messages.slice(-before.length).map((item) => item.id), before);
      assert.equal(loaded.totalCost, 1.3);
    }
    assert.deepEqual(loaded.messages.map((item) => item.id), ['charged', ...expected, 'latest']);
    assert.equal(loaded.loadedBytes, loaded.fileSize);
  });
});

test('parser retains late tool results and makes them searchable after an earlier search', () => {
  const parser = new SessionParser();
  parser.push(line({ type: 'message', id: 'assistant', message: { role: 'assistant', content: [{ type: 'toolCall', id: 'call-1', name: 'lookup', arguments: { topic: 'unicode' } }] } }) + '\n', false);
  assert.equal(searchableText(parser.messages[0]).includes('resultneedle'), false);
  parser.push('null\n[]\n42\n{"type":"message","message":null}\n' + line({ type: 'message', id: 'result', message: { role: 'toolResult', toolCallId: 'call-1', content: [{ type: 'text', text: 'ResultNeedle 界' }] } }), true);
  assert.equal(parser.messages.length, 1);
  assert.equal(parser.messages[0].toolCalls[0].result, 'ResultNeedle 界');
  assert.equal(searchableText(parser.messages[0]).includes('resultneedle'), true);
});

test('earlier paging associates tool results whose calls were outside the first tail', async () => {
  const records = [header, { type: 'message', id: 'call-turn', message: { role: 'assistant', content: [{ type: 'toolCall', id: 'older-call', name: 'lookup', arguments: {} }] } }, message('padding', 'p'.repeat(20_000)), { type: 'message', id: 'tool-result', message: { role: 'toolResult', toolCallId: 'older-call', content: 'Found the needle' } }];
  await fixture(records, async ({ file, ctx }) => {
    const tail = await loadSessionIncremental(ctx, file, { tailBytes: 200 });
    const complete = await loadSessionIncremental(ctx, file, { before: tail, tailBytes: 30_000 });
    assert.deepEqual(complete.messages.map((item) => item.id), ['call-turn', 'padding']);
    assert.equal(complete.messages[0].toolCalls[0].result, 'Found the needle');
    assert.equal(searchableText(complete.messages[0]).includes('needle'), true);
  });
});

test('exact metrics count unterminated EOF once and reset on rewrites and truncation', async () => {
  await fixture([header, message('one', 'First', 'assistant', 0.2)], async ({ file, invoke }) => {
    const metrics = async () => JSON.parse((await invoke(['file-metrics', file])).stdout);
    assert.equal((await metrics()).totalCost, 0.2);
    assert.equal((await metrics()).totalCost, 0.2);
    await appendFile(file, '\n' + line(message('two', 'Second', 'assistant', 0.3)));
    assert.equal((await metrics()).totalCost, 0.5);
    assert.equal((await metrics()).turns, 2);
    const rewritten = (await readFile(file, 'utf8')).replace('"total":0.2', '"total":0.7');
    await writeFile(file, rewritten);
    assert.equal((await metrics()).totalCost, 1);
    await writeFile(file, line(header) + '\n');
    assert.equal((await metrics()).totalCost, 0);
    assert.equal((await metrics()).turns, 0);
  }, false);
});

test('parallel session metrics keep independent totals', async () => {
  await fixture([header, message('one', 'First', 'assistant', 0.4)], async ({ file, dir, invoke }) => {
    const other = join(dir, 'other.jsonl');
    await writeFile(other, line(message('two', 'Second', 'assistant', 0.8)) + '\n');
    const results = await Promise.all([invoke(['file-metrics', file]), invoke(['file-metrics', other])]);
    assert.deepEqual(results.map((result) => JSON.parse(result.stdout).totalCost), [0.4, 0.8]);
    await appendFile(file, line(message('three', 'Third', 'assistant', 0.1)) + '\n');
    assert.equal(JSON.parse((await invoke(['file-metrics', file])).stdout).totalCost, 0.5);
    assert.equal(JSON.parse((await invoke(['file-metrics', other])).stdout).totalCost, 0.8);
  });
});

test('metric failures mark tail-window totals as nonexact', async () => {
  await fixture([header, message('one', 'First', 'assistant', 0.4), message('two', 'Second', 'assistant', 0.6)], async ({ file, ctx }) => {
    const run = ctx.exec.run;
    ctx.exec.run = async (args) => args[0] === 'file-metrics' ? { code: 1, stdout: JSON.stringify({ error: 'unavailable' }) } : run(args);
    const loaded = await loadSessionIncremental(ctx, file, { tailBytes: 50 });
    assert.equal(loaded.metricsExact, false);
    assert.equal(loaded.totalCost, 0.6);
    assert.equal(loaded.turns, 1);
  });
});

test('unreadable bridge files return errors and loader rejects failed chunk reads', async () => {
  await fixture([header], async ({ file, dir, invoke, ctx }) => {
    const missing = await invoke(['chunk', join(dir, 'missing.jsonl'), '0', '4096']);
    assert.notEqual(missing.code, 0);
    assert.equal(typeof JSON.parse(missing.stdout).error, 'string');
    const directory = await invoke(['chunk', dir, '0', '4096']);
    assert.notEqual(directory.code, 0);
    assert.equal(typeof JSON.parse(directory.stdout).error, 'string');
    ctx.exec.run = async () => { throw new Error('exec unavailable'); };
    assert.equal(await loadSessionIncremental(ctx, file), null);
  });
});
