<template>
  <section
    class="omp-hud"
    :class="[`is-${pane.state}`, { 'is-collapsed': collapsed, 'is-dragging': dragging }]"
    role="status"
    aria-live="polite"
  >
    <header class="omp-hud__bar">
      <div class="omp-hud__grip" data-drag-handle title="Drag to move">
        <Icon name="bot" :size="15" class="omp-hud__logo" />
        <span class="omp-hud__name">OMP</span>
        <span class="omp-hud__beacon" :class="beaconClass" :title="statusLabel"></span>
        <span v-if="collapsed" class="omp-hud__peek">{{ peekText }}</span>
      </div>

      <div class="omp-hud__tools" @pointerdown.stop @mousedown.stop>
        <button
          type="button"
          class="omp-hud__icon"
          :title="collapsed ? 'Expand panel' : 'Collapse panel'"
          :aria-expanded="!collapsed"
          @pointerdown.stop
          @mousedown.stop
          @click.stop="collapsed = !collapsed"
        >
          <Icon :name="collapsed ? 'chevron-down' : 'chevron-up'" :size="13" />
        </button>
      </div>
    </header>

    <div v-show="!collapsed" class="omp-hud__body">
      <template v-if="pane.state === 'running' && pane.summary">
        <div class="omp-hud__row">
          <span class="omp-hud__chip" :title="`Model: ${pane.summary.model}`">
            <Icon name="cpu" :size="12" />
            <span class="omp-hud__chip-text">{{ shortModel }}</span>
          </span>
          <span class="omp-hud__chip" :title="`Thinking level: ${pane.summary.thinkingLevel}`">
            <Icon name="zap" :size="12" />
            <span class="omp-hud__chip-text">{{ pane.summary.thinkingLevel }}</span>
          </span>
        </div>

        <div class="omp-hud__row">
          <span class="omp-hud__chip" :title="`${pane.summary.totalTokens.toLocaleString()} context tokens`">
            <Icon name="layers" :size="12" />
            <span class="omp-hud__chip-text">{{ compactTokens }}</span>
          </span>
          <span class="omp-hud__chip is-cost" :title="`Session cost ${pane.summary.totalCost.toFixed(4)} USD`">
            <Icon name="activity" :size="12" />
            <span class="omp-hud__chip-text">{{ pane.summary.totalCost.toFixed(2) }} USD</span>
          </span>
        </div>

        <p class="omp-hud__status">
          <span class="omp-hud__status-dot" :class="beaconClass"></span>
          {{ statusLabel }}
          <span class="omp-hud__turns">{{ pane.summary.turns }} turns</span>
        </p>

        <div class="omp-hud__actions">
          <button type="button" class="omp-hud__action" title="Open the session explorer" @click="openExplorer">
            <Icon name="history" :size="14" />
            <span>Explorer</span>
          </button>
          <button
            type="button"
            class="omp-hud__action"
            :disabled="!tmuxAvailable"
            :title="tmuxAvailable ? 'Enter tmux copy-mode to scroll history' : 'tmux was not found on this host'"
            @click="copyMode"
          >
            <Icon name="terminal" :size="14" />
            <span>Scroll</span>
          </button>
          <button type="button" class="omp-hud__action" title="Open a split pane running OMP" @click="split">
            <Icon name="split-vertical" :size="14" />
            <span>Split</span>
          </button>
        </div>
      </template>

      <template v-else-if="pane.state === 'starting' || !settled">
        <div class="omp-hud__placeholder">
          <span class="omp-hud__spinner" aria-hidden="true"></span>
          <p class="omp-hud__placeholder-title">{{ settled ? 'Starting OMP' : 'Reading session' }}</p>
          <p class="omp-hud__placeholder-note">Waiting for the first turn in {{ workspaceName }}</p>
        </div>
      </template>

      <template v-else>
        <div class="omp-hud__placeholder">
          <Icon name="info" :size="18" class="omp-hud__placeholder-icon" />
          <p class="omp-hud__placeholder-title">No OMP session here</p>
          <p class="omp-hud__placeholder-note">Pick a profile and start one in this pane.</p>
        </div>

        <div class="omp-hud__launch">
          <label class="omp-hud__label" for="omp-hud-preset">Profile</label>
          <select
            id="omp-hud-preset"
            v-model="selectedPresetId"
            class="omp-hud__select"
            :disabled="presetsLoading"
            @change="rememberPreset"
          >
            <option v-for="preset in presets" :key="preset.id" :value="preset.id">
              {{ preset.label }}
            </option>
          </select>
          <button
            type="button"
            class="omp-hud__launch-btn"
            :disabled="presetsLoading || launching"
            title="Run OMP in the active pane"
            @click="launchHere"
          >
            <Icon name="play" :size="12" />
            <span>{{ launching ? 'Starting' : 'Launch' }}</span>
          </button>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import type { Disposable, PluginContext } from '../types/dinotty';
import Icon from '../components/Icon.vue';
import { readPaneSession, type PaneSession } from '../services/sessionResolver';
import { discoverPresets, DEFAULT_PRESET_ID, type PresetItem } from '../services/presetService';
import { getHostInfo } from '../services/hostInfo';
import { launchOmp, launchOmpInActivePane, toggleCopyMode } from '../services/tmuxLauncher';

const PRESET_STORAGE_KEY = 'dinotty-omp.preset';
const PRESET_CACHE_KEY = 'dinotty-omp.presets';
const SNAPSHOT_KEY_PREFIX = 'dinotty-omp.snapshot.';
const SNAPSHOT_TTL_MS = 120000;
const POLL_INTERVAL_MS = 2000;
const LAUNCH_GRACE_MS = 12000;

const props = defineProps<{ api: PluginContext; dragging?: boolean }>();

const collapsed = ref(false);
const launching = ref(false);
const presetsLoading = ref(true);
const tmuxAvailable = ref(true);
const presets = ref<PresetItem[]>([]);
const selectedPresetId = ref(DEFAULT_PRESET_ID);

const pane = ref<PaneSession>(restoreSnapshot());
const settled = ref(pane.value.state !== 'inactive');

let timer: ReturnType<typeof setInterval> | null = null;
let launchDeadline = 0;
const disposables: Disposable[] = [];

const selectedPreset = computed(
  () => presets.value.find((item) => item.id === selectedPresetId.value) || null
);

const shortModel = computed(() => {
  const model = pane.value.summary?.model || '';
  const leaf = model.split('/').pop() || 'omp';
  return leaf.length > 18 ? `${leaf.slice(0, 17)}...` : leaf;
});

const compactTokens = computed(() => {
  const value = pane.value.summary?.totalTokens || 0;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M tok`;
  if (value >= 1_000) return `${Math.round(value / 1_000)}k tok`;
  return `${value} tok`;
});

const statusLabel = computed(() => {
  if (pane.value.state === 'inactive') return 'Inactive';
  if (pane.value.state === 'starting') return 'Starting';
  switch (pane.value.summary?.status) {
    case 'running_tool':
      return 'Running a tool';
    case 'thinking':
      return 'Thinking';
    case 'error':
      return 'Last tool failed';
    default:
      return 'Waiting for you';
  }
});

const beaconClass = computed(() => {
  if (pane.value.state === 'inactive') return 'is-inactive';
  if (pane.value.state === 'starting') return 'is-starting';
  return `is-${pane.value.summary?.status || 'idle'}`;
});

const workspaceName = computed(() => {
  const cwd = pane.value.cwd;
  if (!cwd) return 'this pane';
  const segments = cwd.replace(/[\\/]+$/, '').split(/[\\/]/).filter(Boolean);
  return segments[segments.length - 1] || cwd;
});

const peekText = computed(() => {
  if (pane.value.state === 'inactive') return 'Inactive';
  if (pane.value.state === 'starting') return 'Starting';
  return `${shortModel.value} · ${pane.value.summary?.totalCost.toFixed(2) || '0.00'} USD`;
});

function snapshotKey(): string {
  return SNAPSHOT_KEY_PREFIX + (props.api.terminal.activePaneId() || 'active');
}

function restoreSnapshot(): PaneSession {
  const empty: PaneSession = { cwd: '', sessionFile: '', isRunning: false, state: 'inactive', summary: null };
  try {
    const raw = localStorage.getItem(snapshotKey());
    if (!raw) return empty;
    const stored = JSON.parse(raw) as { at: number; pane: PaneSession };
    if (!stored || Date.now() - stored.at > SNAPSHOT_TTL_MS) return empty;
    if (typeof stored.pane?.state !== 'string') return empty;
    return stored.pane;
  } catch {
    return empty;
  }
}

function persistSnapshot(value: PaneSession): void {
  try {
    localStorage.setItem(snapshotKey(), JSON.stringify({ at: Date.now(), pane: value }));
  } catch {}
}

function restorePresets(): PresetItem[] {
  try {
    const raw = localStorage.getItem(PRESET_CACHE_KEY);
    const stored = raw ? (JSON.parse(raw) as PresetItem[]) : [];
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function persistPresets(items: PresetItem[]): void {
  try {
    localStorage.setItem(PRESET_CACHE_KEY, JSON.stringify(items));
  } catch {}
}

function rememberPreset(): void {
  try {
    localStorage.setItem(PRESET_STORAGE_KEY, selectedPresetId.value);
  } catch {}
}

async function refresh(): Promise<void> {
  const next = await readPaneSession(props.api);
  settled.value = true;

  if (next.state === 'inactive' && launching.value && Date.now() < launchDeadline) {
    pane.value = { ...next, state: 'starting' };
    persistSnapshot(pane.value);
    return;
  }

  if (next.state !== 'inactive') {
    launching.value = false;
  } else if (Date.now() >= launchDeadline) {
    launching.value = false;
  }

  pane.value = next;
  persistSnapshot(next);
}

function openExplorer(): void {
  props.api.open();
}

async function copyMode(): Promise<void> {
  await toggleCopyMode(props.api);
}

async function split(): Promise<void> {
  await launchOmp(props.api, { preset: selectedPreset.value, target: 'split-v' });
}

async function launchHere(): Promise<void> {
  const started = await launchOmpInActivePane(props.api, selectedPreset.value);
  if (!started) return;
  rememberPreset();
  launching.value = true;
  launchDeadline = Date.now() + LAUNCH_GRACE_MS;
  pane.value = { ...pane.value, state: 'starting', summary: null };
  window.setTimeout(() => void refresh(), 600);
}

onMounted(async () => {
  try {
    const stored = localStorage.getItem(PRESET_STORAGE_KEY);
    if (stored) selectedPresetId.value = stored;
  } catch {}

  const cached = restorePresets();
  if (cached.length) {
    presets.value = cached;
    presetsLoading.value = false;
  }

  const host = await getHostInfo(props.api);
  tmuxAvailable.value = host ? host.tmux : true;

  presets.value = await discoverPresets(props.api);
  persistPresets(presets.value);
  if (!presets.value.some((item) => item.id === selectedPresetId.value)) {
    selectedPresetId.value = DEFAULT_PRESET_ID;
  }
  presetsLoading.value = false;

  await refresh();
  timer = setInterval(() => void refresh(), POLL_INTERVAL_MS);

  if (typeof props.api.terminal.onDidChangeActivePane === 'function') {
    disposables.push(props.api.terminal.onDidChangeActivePane(() => void refresh()));
  }
});

onBeforeUnmount(() => {
  if (timer) clearInterval(timer);
  for (const item of disposables) {
    try {
      item.dispose();
    } catch {}
  }
});
</script>

<style scoped>
.omp-hud {
  width: 244px;
  border: 1px solid var(--border, #27272a);
  border-radius: var(--radius, 10px);
  background: color-mix(in srgb, var(--bg-elevated, #18181b) 94%, transparent);
  backdrop-filter: blur(10px);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.42);
  color: var(--fg, #e4e4e7);
  font-size: 12px;
  line-height: 1.45;
  user-select: none;
  overflow: hidden;
}

.omp-hud.is-collapsed {
  width: auto;
  min-width: 168px;
  max-width: 264px;
}

.omp-hud.is-dragging {
  border-color: var(--accent, #3b82f6);
}

.omp-hud__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding: 7px 8px;
  border-bottom: 1px solid var(--border, #27272a);
  background: color-mix(in srgb, var(--bg, #09090b) 55%, transparent);
}

.omp-hud.is-collapsed .omp-hud__bar {
  border-bottom: none;
}

.omp-hud__grip {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  min-width: 0;
  cursor: grab;
  touch-action: none;
}

.omp-hud__grip:active {
  cursor: grabbing;
}

.omp-hud__logo {
  color: var(--accent, #3b82f6);
  flex-shrink: 0;
}

.omp-hud__name {
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.08em;
}

.omp-hud__peek {
  font-size: 10px;
  color: var(--fg-muted, #a1a1aa);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.omp-hud__beacon,
.omp-hud__status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  display: inline-block;
  background: #52525b;
}

.omp-hud__beacon.is-idle,
.omp-hud__status-dot.is-idle {
  background: #3b82f6;
  box-shadow: 0 0 6px rgba(59, 130, 246, 0.65);
}

.omp-hud__beacon.is-thinking,
.omp-hud__status-dot.is-thinking {
  background: #10b981;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.75);
  animation: omp-pulse 1.4s ease-in-out infinite;
}

.omp-hud__beacon.is-running_tool,
.omp-hud__status-dot.is-running_tool {
  background: #f59e0b;
  box-shadow: 0 0 8px rgba(245, 158, 11, 0.75);
  animation: omp-pulse 0.9s ease-in-out infinite;
}

.omp-hud__beacon.is-error,
.omp-hud__status-dot.is-error {
  background: #ef4444;
  box-shadow: 0 0 8px rgba(239, 68, 68, 0.75);
}

.omp-hud__beacon.is-starting,
.omp-hud__status-dot.is-starting {
  background: #a78bfa;
  animation: omp-pulse 1.1s ease-in-out infinite;
}

.omp-hud__beacon.is-inactive,
.omp-hud__status-dot.is-inactive {
  background: #52525b;
}

@keyframes omp-pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.4);
    opacity: 0.6;
  }
}

.omp-hud__tools {
  display: flex;
  align-items: center;
  pointer-events: auto;
}

.omp-hud__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border: none;
  border-radius: 5px;
  background: transparent;
  color: var(--fg-muted, #71717a);
  cursor: pointer;
}

.omp-hud__icon:hover {
  color: var(--fg, #fafafa);
  background: rgba(255, 255, 255, 0.12);
}

.omp-hud__body {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 9px;
}

.omp-hud__row {
  display: flex;
  gap: 6px;
}

.omp-hud__chip {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 7px;
  border: 1px solid var(--border, #27272a);
  border-radius: 6px;
  background: var(--bg, #09090b);
  color: var(--fg-muted, #a1a1aa);
  font-size: 10px;
}

.omp-hud__chip.is-cost {
  color: var(--accent, #60a5fa);
  font-weight: 600;
}

.omp-hud__chip-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.omp-hud__status {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  font-size: 10px;
  color: var(--fg-muted, #a1a1aa);
}

.omp-hud__turns {
  margin-left: auto;
  opacity: 0.75;
}

.omp-hud__actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
}

.omp-hud__action {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 6px 4px;
  border: 1px solid var(--border, #27272a);
  border-radius: 6px;
  background: var(--bg, #09090b);
  color: var(--fg, #e4e4e7);
  font-size: 10px;
  cursor: pointer;
  transition: background 0.12s ease, border-color 0.12s ease;
}

.omp-hud__action:hover:not(:disabled) {
  background: color-mix(in srgb, var(--accent, #3b82f6) 20%, transparent);
  border-color: var(--accent, #3b82f6);
  color: #fff;
}

.omp-hud__action:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.omp-hud__placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 6px 2px 2px;
  text-align: center;
}

.omp-hud__placeholder-icon {
  color: var(--fg-muted, #71717a);
}

.omp-hud__placeholder-title {
  margin: 0;
  font-size: 11px;
  font-weight: 600;
}

.omp-hud__placeholder-note {
  margin: 0;
  font-size: 10px;
  color: var(--fg-muted, #71717a);
}

.omp-hud__spinner {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid var(--border, #3f3f46);
  border-top-color: var(--accent, #3b82f6);
  animation: omp-spin 0.8s linear infinite;
}

@keyframes omp-spin {
  to {
    transform: rotate(360deg);
  }
}

.omp-hud__launch {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 6px;
}

.omp-hud__label {
  font-size: 10px;
  color: var(--fg-muted, #71717a);
}

.omp-hud__select {
  min-width: 0;
  padding: 4px 6px;
  border: 1px solid var(--border, #27272a);
  border-radius: 6px;
  background: var(--bg, #09090b);
  color: var(--fg, #e4e4e7);
  font-size: 10px;
  cursor: pointer;
}

.omp-hud__select:focus-visible {
  outline: 2px solid var(--accent, #3b82f6);
  outline-offset: 1px;
}

.omp-hud__launch-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px 9px;
  border: none;
  border-radius: 6px;
  background: var(--accent, #3b82f6);
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
}

.omp-hud__launch-btn:hover:not(:disabled) {
  background: #2563eb;
}

.omp-hud__launch-btn:disabled {
  opacity: 0.55;
  cursor: progress;
}
</style>
