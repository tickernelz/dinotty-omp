import type { Disposable, PluginContext } from '../types/dinotty';
import { readPaneSession, type PaneSession, type PaneSessionRequest } from './sessionResolver';

export const EMPTY_PANE_SESSION: PaneSession = {
  cwd: '',
  sessionFile: '',
  isRunning: false,
  state: 'inactive',
  summary: null
};

const SETTLED_SAFETY_MS = 30_000;
const STARTING_SAFETY_MS = 3_000;
const MIN_REFRESH_GAP_MS = 600;

export interface PaneSessionSubscriber {
  listener?: (session: PaneSession) => void;
  visible?: () => boolean;
}

interface Subscription {
  subscriber: PaneSessionSubscriber;
  disposed: boolean;
}

const subscriptions = new Set<Subscription>();

let ctxRef: PluginContext | null = null;
let current: PaneSession = EMPTY_PANE_SESSION;
let currentPaneId = '';
let timer: ReturnType<typeof setTimeout> | null = null;
let paneListener: Disposable | null = null;
let visibilityListener: (() => void) | null = null;
let watchListener: Disposable | null = null;
let watchedDir = '';
let watchEpoch = 0;
let generation = 0;
let inFlight: Promise<void> | null = null;
let inFlightGeneration = -1;
let inFlightPaneId = '';
let dirty = false;
let forcePending = false;
let trailingTimer: ReturnType<typeof setTimeout> | null = null;
let lastRefreshAt = -Infinity;
let lastSignature = '';

function signatureOf(session: PaneSession): string {
  const summary = session.summary;
  return [
    session.cwd,
    session.sessionFile,
    session.state,
    session.isRunning ? '1' : '0',
    summary ? summary.model : '',
    summary ? summary.provider : '',
    summary ? summary.thinkingLevel : '',
    summary ? summary.status : '',
    summary ? summary.totalTokens : '',
    summary ? summary.turns : '',
    summary ? summary.totalCost : ''
  ].join('\u0000');
}

function isVisible(): boolean {
  if (typeof document !== 'undefined' && document.hidden) return false;
  for (const item of subscriptions) {
    if (!item.subscriber.visible || item.subscriber.visible()) return true;
  }
  return false;
}

function emit(): void {
  for (const item of subscriptions) {
    if (item.disposed) continue;
    try {
      item.subscriber.listener?.(current);
    } catch {}
  }
}

function clearTimer(): void {
  if (timer === null) return;
  clearTimeout(timer);
  timer = null;
}

function clearTrailingTimer(): void {
  if (trailingTimer === null) return;
  clearTimeout(trailingTimer);
  trailingTimer = null;
}

function disposeWatch(): void {
  watchEpoch += 1;
  watchListener?.dispose();
  watchListener = null;
  watchedDir = '';
}
function scheduleNext(): void {
  clearTimer();
  if (!ctxRef || subscriptions.size === 0 || inFlight) return;
  const safety = current.state === 'starting'
    ? STARTING_SAFETY_MS
    : current.sessionFile ? SETTLED_SAFETY_MS : 0;
  if (!dirty && safety === 0) return;
  const delay = dirty
    ? forcePending ? 0 : Math.max(0, lastRefreshAt + MIN_REFRESH_GAP_MS - Date.now())
    : Math.max(0, lastRefreshAt + safety - Date.now());
  if (!isVisible()) return;
  timer = setTimeout(() => {
    timer = null;
    void refreshPaneSession(forcePending);
  }, delay);
}

function ensureWatch(): void {
  const ctx = ctxRef;
  if (!ctx || subscriptions.size === 0) return;
  const file = current.sessionFile;
  const cut = Math.max(file.lastIndexOf('/'), file.lastIndexOf('\\'));
  const next = cut > 0 ? file.slice(0, cut) : '';
  if (next === watchedDir) return;
  disposeWatch();
  if (!next || typeof ctx.workspace.watch !== 'function') return;
  watchedDir = next;
  const epoch = watchEpoch;
  const normalize = (path: string): string => path.replace(/\\/g, '/');
  try {
    const result: Disposable | Promise<Disposable> = ctx.workspace.watch(next, (event) => {
      if (ctxRef !== ctx || subscriptions.size === 0 || epoch !== watchEpoch) return;
      if (event.type !== 'file_event') return;
      if (event.path && normalize(event.path) !== normalize(current.sessionFile)) return;
      dirty = true;
      if (inFlight) {
        forcePending = true;
        if (trailingTimer === null && isVisible()) {
          trailingTimer = setTimeout(() => {
            trailingTimer = null;
            void refreshPaneSession(true);
          }, MIN_REFRESH_GAP_MS);
        }
      }
      void refreshPaneSession(false);
    });
    void Promise.resolve(result).then((disposable) => {
      if (ctxRef !== ctx || subscriptions.size === 0 || epoch !== watchEpoch) {
        disposable?.dispose();
        return;
      }
      watchListener = disposable;
    }).catch(() => {});
  } catch {}
}

function switchPane(paneId: string): void {
  if (!ctxRef || subscriptions.size === 0 || paneId === currentPaneId) return;
  generation += 1;
  currentPaneId = paneId;
  current = {
    ...EMPTY_PANE_SESSION,
    cwd: ctxRef.terminal.activeCwd() || '',
    isRunning: true,
    state: 'starting'
  };
  lastSignature = signatureOf(current);
  lastRefreshAt = -Infinity;
  disposeWatch();
  dirty = true;
  forcePending = true;
  emit();
  void refreshPaneSession(true);
}

export function refreshPaneSession(force = false): Promise<void> {
  const ctx = ctxRef;
  if (!ctx || subscriptions.size === 0) return Promise.resolve();
  const paneId = ctx.terminal.activePaneId() || '';
  if (paneId !== currentPaneId) {
    switchPane(paneId);
    return inFlight || Promise.resolve();
  }
  dirty = true;
  forcePending ||= force;
  if (inFlight && inFlightGeneration === generation && inFlightPaneId === paneId) return inFlight;
  if (!isVisible() || (!forcePending && Date.now() - lastRefreshAt < MIN_REFRESH_GAP_MS)) {
    scheduleNext();
    return Promise.resolve();
  }
  clearTimer();
  const request: PaneSessionRequest = { paneId, cwd: ctx.terminal.activeCwd() || '' };
  const epoch = generation;
  dirty = false;
  forcePending = false;
  const pending = readPaneSession(ctx, request).then((next) => {
    if (ctxRef !== ctx || subscriptions.size === 0 || epoch !== generation) return;
    const activePaneId = ctx.terminal.activePaneId() || '';
    if (activePaneId !== request.paneId) {
      switchPane(activePaneId);
      return;
    }
    lastRefreshAt = Date.now();
    const signature = signatureOf(next);
    current = next;
    ensureWatch();
    if (signature !== lastSignature) {
      lastSignature = signature;
      emit();
    }
  }).catch(() => {
    if (ctxRef === ctx && epoch === generation) lastRefreshAt = Date.now();
  }).finally(() => {
    if (inFlight !== pending) return;
    inFlight = null;
    inFlightGeneration = -1;
    inFlightPaneId = '';
    scheduleNext();
  });
  inFlight = pending;
  inFlightGeneration = epoch;
  inFlightPaneId = request.paneId;
  return Promise.resolve();
}

function stopRuntime(): void {
  generation += 1;
  clearTimer();
  clearTrailingTimer();
  paneListener?.dispose();
  paneListener = null;
  disposeWatch();
  if (visibilityListener && typeof document !== 'undefined') {
    document.removeEventListener('visibilitychange', visibilityListener);
  }
  visibilityListener = null;
  ctxRef = null;
  inFlight = null;
  inFlightGeneration = -1;
  inFlightPaneId = '';
  dirty = false;
  forcePending = false;
  current = EMPTY_PANE_SESSION;
  currentPaneId = '';
  lastSignature = '';
  lastRefreshAt = -Infinity;
}

export function subscribePaneSession(
  ctx: PluginContext,
  subscriber: PaneSessionSubscriber
): Disposable {
  ctxRef = ctx;
  const subscription: Subscription = { subscriber, disposed: false };
  subscriptions.add(subscription);
  if (!paneListener && typeof ctx.terminal.onDidChangeActivePane === 'function') {
    paneListener = ctx.terminal.onDidChangeActivePane((paneId) => {
      if (ctxRef !== ctx || subscriptions.size === 0) return;
      switchPane(paneId || ctx.terminal.activePaneId() || '');
    });
  }
  if (typeof document !== 'undefined' && !visibilityListener) {
    visibilityListener = () => {
      if (!document.hidden) void refreshPaneSession(true);
      else clearTimer();
    };
    document.addEventListener('visibilitychange', visibilityListener);
  }
  subscriber.listener?.(current);
  void refreshPaneSession(true);

  return {
    dispose() {
      if (subscription.disposed) return;
      subscription.disposed = true;
      subscriptions.delete(subscription);
      if (subscriptions.size === 0) stopRuntime();
    }
  };
}

export function peekPaneSession(): PaneSession {
  return current;
}

export function resetPaneSession(): void {
  subscriptions.clear();
  stopRuntime();
}