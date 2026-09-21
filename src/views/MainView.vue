<template>
  <div class="omp-app">
    <header class="omp-app__bar">
      <div class="omp-app__brand">
        <Icon name="bot" :size="18" class="omp-app__brand-icon" />
        <span class="omp-app__brand-name">OMP Pilot</span>
        <span class="omp-app__version">v{{ version }}</span>
      </div>

      <nav class="omp-app__tabs" role="tablist" aria-label="OMP Pilot sections">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          role="tab"
          class="omp-app__tab"
          :class="{ 'is-active': activeTab === tab.id }"
          :aria-selected="activeTab === tab.id"
          @click="activeTab = tab.id"
        >
          <Icon :name="tab.icon" :size="14" />
          <span>{{ tab.label }}</span>
          <span v-if="tab.badge" class="omp-app__badge">{{ tab.badge }}</span>
        </button>
      </nav>

      <div class="omp-app__bar-actions">
        <select v-model="launchPresetId" class="omp-field omp-field--compact" aria-label="Launch profile">
          <option v-for="preset in presets" :key="preset.id" :value="preset.id">
            {{ preset.label }}
          </option>
        </select>
        <button type="button" class="omp-btn omp-btn--primary" @click="launchTab">
          <Icon name="play" :size="13" />
          <span>New OMP tab</span>
        </button>
      </div>
    </header>

    <main class="omp-app__body">
      <section v-show="activeTab === 'sessions'" class="omp-pane omp-pane--sessions">
        <aside class="omp-sessions">
          <div class="omp-sessions__head">
            <div class="omp-field omp-field--search">
              <Icon name="search" :size="13" />
              <input v-model="sessionQuery" type="search" placeholder="Filter sessions" aria-label="Filter sessions" />
            </div>
            <button
              type="button"
              class="omp-icon-btn"
              :class="{ 'is-busy': sessionsLoading }"
              title="Reload session list"
              @click="reloadSessions"
            >
              <Icon name="refresh" :size="13" />
            </button>
          </div>

          <label class="omp-toggle">
            <input v-model="onlyCurrentWorkspace" type="checkbox" @change="reloadSessions" />
            <span>This workspace only</span>
          </label>

          <div class="omp-sessions__list" role="listbox" aria-label="OMP sessions">
            <p v-if="sessionsLoading" class="omp-hint">Loading sessions...</p>
            <p v-else-if="!filteredSessions.length" class="omp-hint">
              No transcripts found. Start OMP in a terminal tab and it will show up here.
            </p>
            <button
              v-for="item in filteredSessions"
              :key="item.path"
              type="button"
              role="option"
              class="omp-session"
              :class="{ 'is-active': selectedPath === item.path }"
              :aria-selected="selectedPath === item.path"
              @click="selectSession(item.path)"
            >
              <span class="omp-session__title">
                <Icon name="file-text" :size="12" />
                {{ displayName(item.path) }}
              </span>
              <span class="omp-session__meta">
                <span>{{ workspaceOf(item.path) }}</span>
                <span>{{ relativeTime(item.modified) }}</span>
              </span>
            </button>
          </div>
        </aside>

        <div class="omp-transcript">
          <template v-if="session">
            <header class="omp-transcript__head">
              <div class="omp-transcript__meta">
                <span class="omp-tag"><Icon name="cpu" :size="12" />{{ session.model }}</span>
                <span class="omp-tag"><Icon name="layers" :size="12" />{{ session.totalTokens.toLocaleString() }} tok</span>
                <span class="omp-tag omp-tag--cost"><Icon name="activity" :size="12" />{{ session.totalCost.toFixed(3) }} USD</span>
                <span class="omp-tag"><Icon name="message-square" :size="12" />{{ session.messages.length }} entries</span>
              </div>
              <div class="omp-transcript__tools">
                <div class="omp-field omp-field--search">
                  <Icon name="search" :size="12" />
                  <input v-model="transcriptQuery" type="search" placeholder="Filter turns" aria-label="Filter turns" />
                </div>
                <button type="button" class="omp-btn" title="Copy the transcript as Markdown" @click="copyTranscript">
                  <Icon name="copy" :size="12" />
                  <span>Copy</span>
                </button>
                <button type="button" class="omp-btn" title="Open this workspace in a new OMP tab" @click="resumeSession">
                  <Icon name="external-link" :size="12" />
                  <span>Open</span>
                </button>
              </div>
            </header>

            <p v-if="session.truncated" class="omp-banner">
              This transcript is larger than the host file preview limit, so only the first part is rendered.
              Live metrics in the HUD are still exact.
            </p>

            <div class="omp-turns">
              <p v-if="!visibleMessages.length" class="omp-hint">No turn matches that filter.</p>
              <article
                v-for="message in visibleMessages"
                :key="message.id"
                class="omp-turn"
                :class="`omp-turn--${message.role}`"
              >
                <header class="omp-turn__head">
                  <span class="omp-turn__role">
                    <Icon :name="roleIcon(message.role)" :size="13" />
                    {{ roleLabel(message.role) }}
                  </span>
                  <span class="omp-turn__time">{{ clockTime(message.timestamp) }}</span>
                </header>

                <details v-if="message.thinking" class="omp-fold">
                  <summary>Reasoning</summary>
                  <pre class="omp-code">{{ message.thinking }}</pre>
                </details>

                <pre v-if="message.text" class="omp-turn__text">{{ message.text }}</pre>

                <div v-if="message.images.length" class="omp-turn__images">
                  <button
                    v-for="(image, index) in message.images"
                    :key="index"
                    type="button"
                    class="omp-thumb"
                    @click="lightbox = image"
                  >
                    <img :src="image" alt="Attachment" loading="lazy" />
                  </button>
                </div>

                <details
                  v-for="call in message.toolCalls || []"
                  :key="call.id"
                  class="omp-fold omp-fold--tool"
                  :class="{ 'is-error': call.isError }"
                >
                  <summary>
                    <span class="omp-fold__name">{{ call.name }}</span>
                    <span v-if="call.intent" class="omp-fold__intent">{{ call.intent }}</span>
                    <span class="omp-fold__state">{{ call.isError ? 'failed' : 'ok' }}</span>
                  </summary>
                  <p class="omp-fold__label">Arguments</p>
                  <pre class="omp-code">{{ pretty(call.arguments) }}</pre>
                  <template v-if="call.result">
                    <p class="omp-fold__label">Result</p>
                    <pre class="omp-code">{{ call.result }}</pre>
                  </template>
                </details>
              </article>
            </div>
          </template>

          <div v-else class="omp-empty">
            <Icon name="history" :size="28" />
            <p>Select a session on the left to read its transcript.</p>
          </div>
        </div>
      </section>

      <section v-show="activeTab === 'skills'" class="omp-pane omp-pane--skills">
        <div class="omp-skills__head">
          <div class="omp-field omp-field--search omp-field--grow">
            <Icon name="search" :size="14" />
            <input v-model="skillQuery" type="search" placeholder="Search skills by name or intent" aria-label="Search skills" />
          </div>
          <button type="button" class="omp-icon-btn" title="Reload skills" @click="reloadSkills">
            <Icon name="refresh" :size="13" />
          </button>
        </div>

        <div class="omp-chips">
          <button
            v-for="category in skillCategories"
            :key="category"
            type="button"
            class="omp-chip"
            :class="{ 'is-active': skillCategory === category }"
            @click="skillCategory = category"
          >
            {{ category }}
          </button>
        </div>

        <div class="omp-skills__body">
          <div class="omp-skills__grid">
            <p v-if="skillsLoading" class="omp-hint">Indexing skills...</p>
            <p v-else-if="!filteredSkills.length" class="omp-hint">No skill matches that search.</p>
            <button
              v-for="skill in filteredSkills"
              :key="skill.id"
              type="button"
              class="omp-skill"
              :class="{ 'is-active': selectedSkill?.id === skill.id }"
              @click="selectedSkill = skill"
            >
              <span class="omp-skill__title">
                <Icon name="book" :size="13" />
                {{ skill.name }}
              </span>
              <span class="omp-skill__desc">{{ skill.description }}</span>
              <span class="omp-skill__tags">
                <span class="omp-chip omp-chip--tiny">{{ skill.category }}</span>
                <span class="omp-chip omp-chip--tiny">{{ skill.source }}</span>
              </span>
            </button>
          </div>

          <aside v-if="selectedSkill" class="omp-skill-detail">
            <header>
              <h3>{{ selectedSkill.name }}</h3>
              <button type="button" class="omp-btn omp-btn--primary" @click="useSkill(selectedSkill.name)">
                <Icon name="terminal" :size="12" />
                <span>Inject</span>
              </button>
            </header>
            <p class="omp-skill-detail__desc">{{ selectedSkill.description }}</p>
            <pre class="omp-code omp-code--tall">{{ selectedSkill.body || 'This skill has no body.' }}</pre>
          </aside>
        </div>
      </section>

      <section v-show="activeTab === 'profiles'" class="omp-pane omp-pane--profiles">
        <header class="omp-profiles__head">
          <h2>Profiles</h2>
          <p>Discovered from the OMP agent directory. Launch one into a new tab or a split pane.</p>
        </header>

        <div class="omp-profiles__grid">
          <article v-for="preset in presets" :key="preset.id" class="omp-profile" :class="{ 'is-default': preset.isDefault }">
            <header>
              <span class="omp-profile__icon"><Icon name="zap" :size="16" /></span>
              <div>
                <h3>{{ preset.label }}</h3>
                <code>{{ preset.fileName }}</code>
              </div>
            </header>
            <div class="omp-profile__actions">
              <button type="button" class="omp-btn omp-btn--primary" @click="launchWith(preset, 'new-tab')">
                <Icon name="play" :size="12" />
                <span>New tab</span>
              </button>
              <button type="button" class="omp-btn" @click="launchWith(preset, 'split-v')">
                <Icon name="split-vertical" :size="12" />
                <span>Split right</span>
              </button>
              <button type="button" class="omp-btn" @click="launchWith(preset, 'split-h')">
                <Icon name="split-horizontal" :size="12" />
                <span>Split down</span>
              </button>
            </div>
          </article>
        </div>
      </section>
    </main>

    <div v-if="lightbox" class="omp-lightbox" role="dialog" aria-modal="true" @click="lightbox = null">
      <button type="button" class="omp-lightbox__close" aria-label="Close image">
        <Icon name="x" :size="18" />
      </button>
      <img :src="lightbox" alt="Attachment preview" @click.stop />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import type { PluginContext } from '../types/dinotty';
import Icon from '../components/Icon.vue';
import type { IconName } from '../utils/icons';
import {
  listSessionFiles,
  loadSession,
  readPaneSession,
  sessionDisplayName,
  workspaceLabel,
  type ParsedSession
} from '../services/sessionResolver';
import { filterSkills, injectSkill, loadAllSkills, type SkillItem } from '../services/skillService';
import { discoverPresets, DEFAULT_PRESET_ID, type PresetItem } from '../services/presetService';
import { getHostInfo, joinHostPath } from '../services/hostInfo';
import { launchOmp, type LaunchTarget } from '../services/tmuxLauncher';

const props = defineProps<{ api: PluginContext }>();

const version = '1.0.0';
const skillCategories = ['all', 'verification', 'diagnostics', 'delivery', 'authoring', 'general'];

const activeTab = ref<'sessions' | 'skills' | 'profiles'>('sessions');
const sessionsRoot = ref('');
const sessions = ref<Array<{ path: string; name: string; modified: number }>>([]);
const sessionsLoading = ref(true);
const sessionQuery = ref('');
const onlyCurrentWorkspace = ref(true);
const selectedPath = ref('');
const session = ref<ParsedSession | null>(null);
const transcriptQuery = ref('');
const lightbox = ref<string | null>(null);

const skills = ref<SkillItem[]>([]);
const skillsLoading = ref(true);
const skillQuery = ref('');
const skillCategory = ref('all');
const selectedSkill = ref<SkillItem | null>(null);

const presets = ref<PresetItem[]>([]);
const launchPresetId = ref(DEFAULT_PRESET_ID);

const tabs = computed(() => [
  { id: 'sessions' as const, label: 'Sessions', icon: 'message-square' as IconName, badge: sessions.value.length },
  { id: 'skills' as const, label: 'Skills', icon: 'book' as IconName, badge: skills.value.length },
  { id: 'profiles' as const, label: 'Profiles', icon: 'zap' as IconName, badge: presets.value.length }
]);

const filteredSessions = computed(() => {
  const needle = sessionQuery.value.trim().toLowerCase();
  if (!needle) return sessions.value;
  return sessions.value.filter((item) => item.path.toLowerCase().includes(needle));
});

const visibleMessages = computed(() => {
  if (!session.value) return [];
  const needle = transcriptQuery.value.trim().toLowerCase();
  if (!needle) return session.value.messages;
  return session.value.messages.filter((message) => {
    if (message.text.toLowerCase().includes(needle)) return true;
    if (message.thinking?.toLowerCase().includes(needle)) return true;
    return (message.toolCalls || []).some((call) => call.name.toLowerCase().includes(needle));
  });
});

const filteredSkills = computed(() => filterSkills(skills.value, skillQuery.value, skillCategory.value));

const selectedPresetForLaunch = computed(
  () => presets.value.find((item) => item.id === launchPresetId.value) || null
);

function displayName(filePath: string): string {
  return sessionDisplayName(filePath);
}

function workspaceOf(filePath: string): string {
  return workspaceLabel(filePath);
}

function clockTime(value: number): string {
  if (!value) return '';
  return new Date(value).toLocaleTimeString();
}

function relativeTime(value: number): string {
  if (!value) return '';
  const delta = Date.now() - value;
  const minutes = Math.round(delta / 60000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}

function roleIcon(role: string): IconName {
  if (role === 'user') return 'terminal';
  if (role === 'assistant') return 'bot';
  return 'code';
}

function roleLabel(role: string): string {
  if (role === 'user') return 'You';
  if (role === 'assistant') return 'Agent';
  return 'Tool';
}

function pretty(value: unknown): string {
  if (typeof value === 'string') return value;
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

async function reloadSessions(): Promise<void> {
  sessionsLoading.value = true;
  try {
    if (!sessionsRoot.value) {
      const host = await getHostInfo(props.api);
      sessionsRoot.value = host?.ompHome ? joinHostPath(host.ompHome, 'sessions') : '~/.omp/agent/sessions';
    }

    let slug: string | undefined;
    if (onlyCurrentWorkspace.value) {
      const pane = await readPaneSession(props.api);
      if (pane.sessionFile) {
        const parts = pane.sessionFile.replace(/\\/g, '/').split('/');
        slug = parts[parts.length - 2];
      }
    }

    sessions.value = await listSessionFiles(props.api, sessionsRoot.value, slug);
    if (sessions.value.length && !sessions.value.some((item) => item.path === selectedPath.value)) {
      await selectSession(sessions.value[0].path);
    }
  } finally {
    sessionsLoading.value = false;
  }
}

async function selectSession(filePath: string): Promise<void> {
  selectedPath.value = filePath;
  session.value = await loadSession(props.api, filePath);
}

async function reloadSkills(): Promise<void> {
  skillsLoading.value = true;
  try {
    skills.value = await loadAllSkills(props.api, true);
    if (!selectedSkill.value && skills.value.length) selectedSkill.value = skills.value[0];
  } finally {
    skillsLoading.value = false;
  }
}

function useSkill(name: string): void {
  injectSkill(props.api, name);
}

async function launchWith(preset: PresetItem, target: LaunchTarget): Promise<void> {
  await launchOmp(props.api, { preset, target });
}

async function launchTab(): Promise<void> {
  await launchOmp(props.api, { preset: selectedPresetForLaunch.value, target: 'new-tab' });
}

async function resumeSession(): Promise<void> {
  if (!session.value) return;
  await launchOmp(props.api, {
    preset: selectedPresetForLaunch.value,
    target: 'new-tab',
    cwd: session.value.cwd || undefined
  });
}

async function copyTranscript(): Promise<void> {
  if (!session.value) return;
  const markdown = session.value.messages
    .map((message) => `### ${roleLabel(message.role)}\n\n${message.text}\n`)
    .join('\n---\n\n');
  try {
    await navigator.clipboard.writeText(markdown);
    props.api.ui.notify('Transcript copied to the clipboard', 'info');
  } catch {
    props.api.ui.notify('The browser refused clipboard access', 'warn');
  }
}

onMounted(async () => {
  presets.value = await discoverPresets(props.api);
  await reloadSessions();
  await reloadSkills();
});
</script>

<style scoped>
.omp-app {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  background: var(--bg, #09090b);
  color: var(--fg, #e4e4e7);
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  font-size: 13px;
}

.omp-app__bar {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 8px 14px;
  border-bottom: 1px solid var(--border, #27272a);
  background: color-mix(in srgb, var(--bg-elevated, #18181b) 96%, transparent);
}

.omp-app__brand {
  display: flex;
  align-items: center;
  gap: 7px;
}

.omp-app__brand-icon {
  color: var(--accent, #3b82f6);
}

.omp-app__brand-name {
  font-weight: 700;
  letter-spacing: 0.04em;
}

.omp-app__version {
  padding: 1px 6px;
  border-radius: 999px;
  background: var(--border, #27272a);
  color: var(--fg-muted, #a1a1aa);
  font-size: 10px;
}

.omp-app__tabs {
  display: flex;
  gap: 4px;
  flex: 1;
  min-width: 0;
  overflow-x: auto;
}

.omp-app__tab {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 7px;
  background: transparent;
  color: var(--fg-muted, #a1a1aa);
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
}

.omp-app__tab:hover {
  color: var(--fg, #fafafa);
  background: rgba(255, 255, 255, 0.05);
}

.omp-app__tab.is-active {
  color: #fff;
  background: var(--border, #27272a);
  border-color: rgba(255, 255, 255, 0.1);
}

.omp-app__badge {
  padding: 0 6px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--accent, #3b82f6) 28%, transparent);
  color: var(--accent, #93c5fd);
  font-size: 10px;
}

.omp-app__bar-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.omp-app__body {
  flex: 1;
  min-height: 0;
  display: flex;
}

.omp-pane {
  flex: 1;
  min-height: 0;
  display: flex;
}

.omp-pane--skills,
.omp-pane--profiles {
  flex-direction: column;
  gap: 12px;
  padding: 14px;
  overflow-y: auto;
}

.omp-sessions {
  width: 272px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  border-right: 1px solid var(--border, #27272a);
}

.omp-sessions__head {
  display: flex;
  gap: 6px;
  align-items: center;
}

.omp-sessions__list {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.omp-session {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 9px;
  border: 1px solid var(--border, #27272a);
  border-radius: 8px;
  background: var(--bg-elevated, #18181b);
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.omp-session:hover {
  border-color: rgba(255, 255, 255, 0.2);
}

.omp-session.is-active {
  border-color: var(--accent, #3b82f6);
  background: color-mix(in srgb, var(--accent, #3b82f6) 14%, transparent);
}

.omp-session__title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
}

.omp-session__meta {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 10px;
  color: var(--fg-muted, #71717a);
}

.omp-transcript {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.omp-transcript__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  padding: 9px 14px;
  border-bottom: 1px solid var(--border, #27272a);
}

.omp-transcript__meta,
.omp-transcript__tools {
  display: flex;
  align-items: center;
  gap: 7px;
  flex-wrap: wrap;
}

.omp-tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 8px;
  border-radius: 6px;
  background: var(--border, #27272a);
  color: var(--fg-muted, #a1a1aa);
  font-size: 11px;
}

.omp-tag--cost {
  color: var(--accent, #93c5fd);
  font-weight: 600;
}

.omp-banner {
  margin: 10px 14px 0;
  padding: 7px 10px;
  border: 1px solid color-mix(in srgb, #f59e0b 45%, transparent);
  border-radius: 7px;
  background: color-mix(in srgb, #f59e0b 12%, transparent);
  color: #fcd34d;
  font-size: 11px;
}

.omp-turns {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 14px;
  scroll-behavior: smooth;
}

.omp-turn {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 11px 13px;
  border: 1px solid var(--border, #27272a);
  border-left-width: 3px;
  border-radius: 9px;
  background: var(--bg-elevated, #18181b);
}

.omp-turn--user {
  border-left-color: #3b82f6;
}

.omp-turn--assistant {
  border-left-color: #10b981;
}

.omp-turn--toolResult {
  border-left-color: #f59e0b;
}

.omp-turn__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.omp-turn__role {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.omp-turn__time {
  font-size: 10px;
  color: var(--fg-muted, #71717a);
}

.omp-turn__text {
  margin: 0;
  font-family: inherit;
  font-size: 13px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
}

.omp-turn__images {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.omp-thumb {
  padding: 0;
  border: 1px solid var(--border, #27272a);
  border-radius: 8px;
  background: none;
  cursor: zoom-in;
  overflow: hidden;
}

.omp-thumb img {
  display: block;
  max-width: 220px;
  max-height: 150px;
  object-fit: cover;
}

.omp-fold {
  border: 1px solid var(--border, #27272a);
  border-radius: 7px;
  background: rgba(0, 0, 0, 0.28);
}

.omp-fold.is-error {
  border-color: color-mix(in srgb, #ef4444 55%, transparent);
}

.omp-fold summary {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 9px;
  font-size: 11px;
  cursor: pointer;
}

.omp-fold__name {
  font-family: ui-monospace, Menlo, monospace;
  font-weight: 600;
  color: var(--accent, #93c5fd);
}

.omp-fold__intent {
  color: var(--fg-muted, #71717a);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.omp-fold__state {
  margin-left: auto;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--fg-muted, #a1a1aa);
}

.omp-fold.is-error .omp-fold__state {
  color: #fca5a5;
}

.omp-fold__label {
  margin: 6px 9px 2px;
  font-size: 10px;
  color: var(--fg-muted, #71717a);
}

.omp-code {
  margin: 0 9px 9px;
  padding: 8px 10px;
  border-radius: 6px;
  background: #000;
  color: #d4d4d8;
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 260px;
  overflow: auto;
}

.omp-code--tall {
  margin: 0;
  max-height: none;
  flex: 1;
}

.omp-skills__head {
  display: flex;
  gap: 8px;
  align-items: center;
}

.omp-skills__body {
  flex: 1;
  min-height: 0;
  display: flex;
  gap: 14px;
}

.omp-skills__grid {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 9px;
  align-content: start;
}

.omp-skill {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
  border: 1px solid var(--border, #27272a);
  border-radius: 9px;
  background: var(--bg-elevated, #18181b);
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.omp-skill:hover {
  border-color: rgba(255, 255, 255, 0.22);
}

.omp-skill.is-active {
  border-color: var(--accent, #3b82f6);
  background: color-mix(in srgb, var(--accent, #3b82f6) 10%, transparent);
}

.omp-skill__title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
}

.omp-skill__desc {
  font-size: 11px;
  line-height: 1.45;
  color: var(--fg-muted, #a1a1aa);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.omp-skill__tags {
  display: flex;
  gap: 5px;
}

.omp-skill-detail {
  width: 340px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 13px;
  border: 1px solid var(--border, #27272a);
  border-radius: 10px;
  background: var(--bg-elevated, #18181b);
  min-height: 0;
}

.omp-skill-detail header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.omp-skill-detail h3 {
  margin: 0;
  font-size: 14px;
}

.omp-skill-detail__desc {
  margin: 0;
  font-size: 12px;
  color: var(--fg-muted, #a1a1aa);
}

.omp-profiles__head h2 {
  margin: 0 0 4px;
  font-size: 16px;
}

.omp-profiles__head p {
  margin: 0;
  font-size: 12px;
  color: var(--fg-muted, #a1a1aa);
}

.omp-profiles__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(262px, 1fr));
  gap: 12px;
}

.omp-profile {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 13px;
  border: 1px solid var(--border, #27272a);
  border-radius: 10px;
  background: var(--bg-elevated, #18181b);
}

.omp-profile.is-default {
  border-color: var(--accent, #3b82f6);
}

.omp-profile header {
  display: flex;
  gap: 10px;
  align-items: center;
}

.omp-profile__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  color: var(--accent, #3b82f6);
}

.omp-profile h3 {
  margin: 0 0 2px;
  font-size: 13px;
}

.omp-profile code {
  font-size: 10px;
  color: var(--fg-muted, #71717a);
}

.omp-profile__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.omp-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 7px;
  background: var(--border, #27272a);
  color: var(--fg, #e4e4e7);
  font-size: 11px;
  cursor: pointer;
}

.omp-btn:hover {
  background: rgba(255, 255, 255, 0.11);
  color: #fff;
}

.omp-btn--primary {
  border-color: transparent;
  background: var(--accent, #3b82f6);
  color: #fff;
  font-weight: 600;
}

.omp-btn--primary:hover {
  background: #2563eb;
}

.omp-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: 1px solid var(--border, #27272a);
  border-radius: 7px;
  background: var(--bg-elevated, #18181b);
  color: var(--fg-muted, #a1a1aa);
  cursor: pointer;
}

.omp-icon-btn:hover {
  color: #fff;
}

.omp-icon-btn.is-busy {
  opacity: 0.5;
}

.omp-field {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 8px;
  border: 1px solid var(--border, #27272a);
  border-radius: 7px;
  background: var(--bg-elevated, #18181b);
  color: var(--fg-muted, #71717a);
}

.omp-field--grow {
  flex: 1;
}

.omp-field--search {
  flex: 1;
  min-width: 0;
}

.omp-field input {
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  color: var(--fg, #fafafa);
  font-size: 11px;
}

.omp-field--compact {
  padding: 5px 8px;
  color: var(--fg, #e4e4e7);
  font-size: 11px;
  cursor: pointer;
}

.omp-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--fg-muted, #a1a1aa);
  cursor: pointer;
}

.omp-chips {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.omp-chip {
  padding: 3px 10px;
  border: 1px solid var(--border, #27272a);
  border-radius: 999px;
  background: var(--bg-elevated, #18181b);
  color: var(--fg-muted, #a1a1aa);
  font-size: 11px;
  text-transform: capitalize;
  cursor: pointer;
}

.omp-chip.is-active {
  border-color: transparent;
  background: var(--accent, #3b82f6);
  color: #fff;
}

.omp-chip--tiny {
  padding: 1px 7px;
  font-size: 9px;
  cursor: default;
}

.omp-hint {
  margin: 10px 0;
  font-size: 11px;
  color: var(--fg-muted, #71717a);
  text-align: center;
}

.omp-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--fg-muted, #71717a);
  font-size: 12px;
}

.omp-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: rgba(0, 0, 0, 0.88);
}

.omp-lightbox img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
}

.omp-lightbox__close {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  cursor: pointer;
}

@media (max-width: 860px) {
  .omp-pane--sessions {
    flex-direction: column;
  }

  .omp-sessions {
    width: auto;
    border-right: none;
    border-bottom: 1px solid var(--border, #27272a);
    max-height: 40%;
  }

  .omp-skills__body {
    flex-direction: column;
  }

  .omp-skill-detail {
    width: auto;
    max-height: 45vh;
  }
}
</style>
