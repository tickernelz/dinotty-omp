<template>
  <div class="omp-hud" :class="{ 'is-collapsed': isCollapsed, 'is-dragging': dragging }">
    <div class="omp-hud-header">
      <div class="omp-hud-title-group" data-drag-handle>
        <Icon name="bot" :size="15" class="omp-hud-bot-icon" />
        <span class="omp-hud-brand">OMP</span>
        <span class="omp-hud-status-beacon" :class="sessionState.status"></span>
        <span v-if="isCollapsed" class="omp-hud-collapsed-summary">
          {{ formatModel(sessionState.model) }} · {{ formatTokens(sessionState.totalTokens) }}
        </span>
      </div>
      <div class="omp-hud-controls" @pointerdown.stop @mousedown.stop>
        <button
          type="button"
          class="omp-hud-icon-btn"
          :title="isCollapsed ? 'Expand HUD' : 'Collapse HUD'"
          @pointerdown.stop
          @mousedown.stop
          @click.stop="isCollapsed = !isCollapsed"
        >
          <Icon :name="isCollapsed ? 'chevron-down' : 'chevron-up'" :size="13" />
        </button>
      </div>
    </div>

    <div v-show="!isCollapsed" class="omp-hud-body">
      <div class="omp-hud-metric-row">
        <div class="omp-hud-chip" :title="'Model: ' + sessionState.model">
          <Icon name="terminal" :size="12" />
          <span class="omp-hud-chip-text">{{ formatModel(sessionState.model) }}</span>
        </div>
        <div class="omp-hud-chip" :title="'Provider: ' + sessionState.provider">
          <Icon name="cpu" :size="12" />
          <span class="omp-hud-chip-text">{{ sessionState.provider }}</span>
        </div>
      </div>

      <div class="omp-hud-metric-row">
        <div class="omp-hud-chip">
          <Icon name="layers" :size="12" />
          <span class="omp-hud-chip-text">{{ formatTokens(sessionState.totalTokens) }} tok</span>
        </div>
        <div class="omp-hud-chip omp-hud-chip-cost">
          <Icon name="zap" :size="12" />
          <span class="omp-hud-chip-text">${{ sessionState.totalCost.toFixed(3) }}</span>
        </div>
      </div>

      <div class="omp-hud-actions">
        <button
          type="button"
          class="omp-hud-action-btn"
          title="Open Visual Session Explorer"
          @click="openExplorer"
        >
          <Icon name="history" :size="13" />
          <span>Explorer</span>
        </button>

        <button
          type="button"
          class="omp-hud-action-btn"
          title="Toggle Tmux Copy-Mode (scroll up)"
          @click="toggleCopy"
        >
          <Icon name="terminal" :size="13" />
          <span>Copy-Mode</span>
        </button>

        <button
          type="button"
          class="omp-hud-action-btn"
          title="Split Pane with OMP"
          @click="splitPane"
        >
          <Icon name="split-vertical" :size="13" />
          <span>Split</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import type { PluginContext, Disposable } from '../types/dinotty';
import Icon from '../components/Icon.vue';
import { resolveActiveSessionInfo, getSession } from '../services/sessionResolver';
import { toggleCopyMode, launchOmp } from '../services/tmuxLauncher';

const props = defineProps<{
  api: PluginContext;
  dragging?: boolean;
}>();

const isCollapsed = ref(false);
const sessionState = ref({
  model: 'gemini-3.8-flash',
  provider: 'sub2api-agy',
  totalTokens: 0,
  totalCost: 0,
  status: 'idle' as 'idle' | 'thinking' | 'running_tool' | 'error'
});

let refreshTimer: ReturnType<typeof setInterval> | null = null;
const disposables: Disposable[] = [];

function formatModel(name: string): string {
  if (!name || name === 'unknown') return 'OMP Agent';
  const parts = name.split('/');
  const leaf = parts[parts.length - 1];
  return leaf.length > 16 ? leaf.slice(0, 15) + '..' : leaf;
}

function formatTokens(count: number): string {
  if (!count) return '0';
  if (count >= 1000000) return (count / 1000000).toFixed(1) + 'm';
  if (count >= 1000) return Math.round(count / 1000) + 'k';
  return String(count);
}

async function updateState() {
  try {
    const info = await resolveActiveSessionInfo(props.api);
    if (info && info.sessionPath) {
      const parsed = await getSession(props.api.workspace, info.sessionPath);
      if (parsed) {
        sessionState.value = {
          model: parsed.model,
          provider: parsed.provider,
          totalTokens: parsed.totalTokens,
          totalCost: parsed.totalCost,
          status: parsed.status
        };
      }
    }
  } catch {}
}

function openExplorer() {
  props.api.open();
}

function toggleCopy() {
  toggleCopyMode(props.api);
}

function splitPane() {
  void launchOmp(props.api, { target: 'split-v' });
}

onMounted(() => {
  void updateState();
  refreshTimer = setInterval(updateState, 2000);

  if (props.api.terminal.onDidChangeActivePane) {
    disposables.push(
      props.api.terminal.onDidChangeActivePane(() => {
        void updateState();
      })
    );
  }
});

onBeforeUnmount(() => {
  if (refreshTimer) clearInterval(refreshTimer);
  for (const d of disposables) {
    try {
      d.dispose();
    } catch {}
  }
});
</script>

<style scoped>
.omp-hud {
  width: 220px;
  background: color-mix(in srgb, var(--bg-elevated, #18181b) 92%, transparent);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border, #27272a);
  border-radius: var(--radius, 8px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);
  color: var(--fg, #e4e4e7);
  font-size: 12px;
  user-select: none;
  overflow: hidden;
  transition: width 0.15s ease, opacity 0.15s ease;
}

.omp-hud.is-dragging {
  border-color: var(--accent, #3b82f6);
  box-shadow: 0 6px 24px rgba(59, 130, 246, 0.3);
}

.omp-hud.is-collapsed {
  width: auto;
  min-width: 170px;
  max-width: 260px;
}

.omp-hud.is-collapsed .omp-hud-body {
  display: none !important;
}

.omp-hud-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 8px;
  background: color-mix(in srgb, var(--bg, #09090b) 60%, transparent);
  border-bottom: 1px solid var(--border, #27272a);
}

.omp-hud.is-collapsed .omp-hud-header {
  border-bottom: none;
}

.omp-hud-title-group {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  cursor: grab;
  touch-action: none;
}

.omp-hud-title-group:active {
  cursor: grabbing;
}

.omp-hud-collapsed-summary {
  font-size: 10px;
  color: var(--fg-muted, #a1a1aa);
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.omp-hud-bot-icon {
  color: var(--accent, #3b82f6);
}

.omp-hud-brand {
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.05em;
  color: var(--fg, #f4f4f5);
}

.omp-hud-status-beacon {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  display: inline-block;
}

.omp-hud-status-beacon.idle {
  background: #3b82f6;
  box-shadow: 0 0 6px rgba(59, 130, 246, 0.7);
}

.omp-hud-status-beacon.thinking {
  background: #10b981;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.9);
  animation: omp-beacon-pulse 1.2s infinite ease-in-out;
}

.omp-hud-status-beacon.running_tool {
  background: #f59e0b;
  box-shadow: 0 0 8px rgba(245, 158, 11, 0.9);
  animation: omp-beacon-pulse 0.8s infinite ease-in-out;
}

.omp-hud-status-beacon.error {
  background: #ef4444;
  box-shadow: 0 0 8px rgba(239, 68, 68, 0.9);
}

@keyframes omp-beacon-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.35);
    opacity: 0.65;
  }
}

.omp-hud-controls {
  display: flex;
  align-items: center;
  gap: 4px;
  pointer-events: auto;
}

.omp-hud-icon-btn {
  background: transparent;
  border: none;
  color: var(--fg-muted, #71717a);
  cursor: pointer;
  padding: 3px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
}

.omp-hud-icon-btn:hover {
  color: var(--fg, #fafafa);
  background: rgba(255, 255, 255, 0.12);
}

.omp-hud-body {
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.omp-hud-metric-row {
  display: flex;
  gap: 6px;
}

.omp-hud-chip {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  background: var(--bg, #18181b);
  border: 1px solid var(--border, #27272a);
  border-radius: 4px;
  color: var(--fg-muted, #a1a1aa);
  font-size: 10px;
  overflow: hidden;
}

.omp-hud-chip-text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.omp-hud-chip-cost {
  color: var(--accent, #60a5fa);
  font-weight: 600;
}

.omp-hud-actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  margin-top: 2px;
}

.omp-hud-action-btn {
  background: var(--bg, #18181b);
  border: 1px solid var(--border, #27272a);
  border-radius: 4px;
  color: var(--fg, #e4e4e7);
  padding: 5px 4px;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  cursor: pointer;
  transition: all 0.12s ease;
}

.omp-hud-action-btn:hover {
  background: color-mix(in srgb, var(--accent, #3b82f6) 18%, transparent);
  border-color: var(--accent, #3b82f6);
  color: #fff;
}
</style>
