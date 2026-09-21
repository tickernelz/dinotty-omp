<template>
  <div class="omp-app">
    <header class="omp-navbar">
      <div class="omp-brand">
        <Icon name="bot" :size="20" class="omp-brand-icon" />
        <span class="omp-brand-title">OMP Pilot</span>
        <span class="omp-brand-version">v1.0.0</span>
      </div>

      <nav class="omp-nav-tabs">
        <button
          type="button"
          class="omp-nav-tab"
          :class="{ active: currentTab === 'sessions' }"
          @click="currentTab = 'sessions'"
        >
          <Icon name="message-square" :size="15" />
          <span>Sessions & Traces</span>
        </button>

        <button
          type="button"
          class="omp-nav-tab"
          :class="{ active: currentTab === 'skills' }"
          @click="currentTab = 'skills'"
        >
          <Icon name="book" :size="15" />
          <span>Skill Matrix</span>
          <span v-if="skills.length" class="omp-tab-badge">{{ skills.length }}</span>
        </button>

        <button
          type="button"
          class="omp-nav-tab"
          :class="{ active: currentTab === 'presets' }"
          @click="currentTab = 'presets'"
        >
          <Icon name="zap" :size="15" />
          <span>Presets & Profiles</span>
        </button>
      </nav>

      <div class="omp-nav-actions">
        <button
          type="button"
          class="omp-btn omp-btn-primary"
          title="Launch default OMP session in new tab"
          @click="quickLaunchDefault"
        >
          <Icon name="play" :size="14" />
          <span>Launch OMP</span>
        </button>
      </div>
    </header>

    <main class="omp-content">
      <section v-show="currentTab === 'sessions'" class="omp-tab-pane omp-sessions-pane">
        <div class="omp-sessions-sidebar">
          <div class="omp-sidebar-search">
            <Icon name="search" :size="14" class="omp-search-icon" />
            <input
              v-model="sessionQuery"
              type="text"
              class="omp-input"
              placeholder="Search session files..."
            />
            <button
              type="button"
              class="omp-icon-btn"
              title="Refresh session list"
              @click="refreshSessions"
            >
              <Icon name="refresh" :size="13" />
            </button>
          </div>

          <div class="omp-sidebar-list">
            <div
              v-for="file in filteredSessionFiles"
              :key="file"
              class="omp-session-card"
              :class="{ active: selectedSessionPath === file }"
              @click="selectSession(file)"
            >
              <div class="omp-session-card-head">
                <Icon name="file-text" :size="13" />
                <span class="omp-session-file-name">{{ extractSessionName(file) }}</span>
              </div>
              <div class="omp-session-card-sub">
                <span>{{ extractWorkspace(file) }}</span>
              </div>
            </div>
            <div v-if="!filteredSessionFiles.length" class="omp-empty-hint">
              No session files found for current filter.
            </div>
          </div>
        </div>

        <div class="omp-transcript-panel">
          <div v-if="activeSession" class="omp-transcript-container">
            <header class="omp-transcript-header">
              <div class="omp-header-meta">
                <div class="omp-meta-badge">
                  <Icon name="terminal" :size="13" />
                  <span>{{ activeSession.model }}</span>
                </div>
                <div class="omp-meta-badge">
                  <Icon name="cpu" :size="13" />
                  <span>{{ activeSession.provider }}</span>
                </div>
                <div class="omp-meta-badge omp-meta-cost">
                  <Icon name="zap" :size="13" />
                  <span>${{ activeSession.totalCost.toFixed(4) }}</span>
                </div>
                <div class="omp-meta-badge">
                  <Icon name="layers" :size="13" />
                  <span>{{ activeSession.totalTokens.toLocaleString() }} tok</span>
                </div>
              </div>

              <div class="omp-header-actions">
                <div class="omp-search-box">
                  <Icon name="search" :size="13" />
                  <input
                    v-model="transcriptFilter"
                    type="text"
                    class="omp-mini-input"
                    placeholder="Filter turns..."
                  />
                </div>
                <button
                  type="button"
                  class="omp-btn"
                  title="Resume this session in new terminal tab"
                  @click="resumeInTerminal"
                >
                  <Icon name="play" :size="13" />
                  <span>Resume</span>
                </button>
                <button
                  type="button"
                  class="omp-btn"
                  title="Copy session transcript as Markdown"
                  @click="copyTranscript"
                >
                  <Icon name="copy" :size="13" />
                  <span>Copy</span>
                </button>
              </div>
            </header>

            <div class="omp-turns-stream">
              <div
                v-for="msg in filteredMessages"
                :key="msg.id"
                class="omp-turn-message"
                :class="msg.role"
              >
                <div class="omp-turn-author">
                  <div class="omp-author-badge">
                    <Icon :name="msg.role === 'user' ? 'terminal' : msg.role === 'assistant' ? 'bot' : 'code'" :size="14" />
                    <span class="omp-author-label">{{ msg.role.toUpperCase() }}</span>
                  </div>
                  <span class="omp-turn-time">{{ formatTime(msg.timestamp) }}</span>
                </div>

                <div v-if="msg.thinking" class="omp-thinking-card">
                  <button
                    type="button"
                    class="omp-thinking-toggle"
                    @click="expandedThinking[msg.id] = !expandedThinking[msg.id]"
                  >
                    <Icon :name="expandedThinking[msg.id] ? 'chevron-down' : 'chevron-right'" :size="13" />
                    <span>Thought Process</span>
                  </button>
                  <pre v-show="expandedThinking[msg.id]" class="omp-thinking-body">{{ msg.thinking }}</pre>
                </div>

                <div v-if="msg.text" class="omp-turn-body">
                  <pre class="omp-text-content">{{ msg.text }}</pre>
                </div>

                <div v-if="msg.images && msg.images.length" class="omp-turn-images">
                  <img
                    v-for="(img, idx) in msg.images"
                    :key="idx"
                    :src="img"
                    alt="Artifact"
                    class="omp-rendered-image"
                    @click="lightboxImage = img"
                  />
                </div>

                <div v-if="msg.toolCalls && msg.toolCalls.length" class="omp-tools-list">
                  <div
                    v-for="tool in msg.toolCalls"
                    :key="tool.id"
                    class="omp-tool-card"
                    :class="{ error: tool.isError }"
                  >
                    <div
                      class="omp-tool-header"
                      @click="expandedTools[tool.id] = !expandedTools[tool.id]"
                    >
                      <div class="omp-tool-title">
                        <Icon :name="expandedTools[tool.id] ? 'chevron-down' : 'chevron-right'" :size="13" />
                        <span class="omp-tool-name">{{ tool.name }}</span>
                        <span v-if="tool.intent" class="omp-tool-intent">{{ tool.intent }}</span>
                      </div>
                      <span v-if="tool.isError" class="omp-tool-status error">Failed</span>
                      <span v-else class="omp-tool-status success">Success</span>
                    </div>

                    <div v-show="expandedTools[tool.id]" class="omp-tool-details">
                      <div class="omp-tool-section">
                        <div class="omp-section-label">Arguments:</div>
                        <pre class="omp-code-snippet">{{ formatJson(tool.arguments) }}</pre>
                      </div>
                      <div v-if="tool.result" class="omp-tool-section">
                        <div class="omp-section-label">Result:</div>
                        <pre class="omp-code-snippet">{{ tool.result }}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="omp-empty-state">
            <Icon name="history" :size="32" class="omp-empty-icon" />
            <p>Select a session file from the left to view the interactive turn stream.</p>
          </div>
        </div>
      </section>

      <section v-show="currentTab === 'skills'" class="omp-tab-pane omp-skills-pane">
        <div class="omp-skills-toolbar">
          <div class="omp-search-box omp-search-large">
            <Icon name="search" :size="15" />
            <input
              v-model="skillSearchQuery"
              type="text"
              class="omp-input"
              placeholder="Search 600+ skills by name, intent, or keywords..."
            />
          </div>

          <div class="omp-category-pills">
            <button
              v-for="cat in categories"
              :key="cat"
              type="button"
              class="omp-pill"
              :class="{ active: selectedCategory === cat }"
              @click="selectedCategory = cat"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <div class="omp-skills-layout">
          <div class="omp-skills-grid">
            <div
              v-for="skill in filteredSkills"
              :key="skill.id"
              class="omp-skill-card"
              :class="{ selected: selectedSkill?.id === skill.id }"
              @click="selectedSkill = skill"
            >
              <div class="omp-skill-card-top">
                <Icon name="book" :size="15" class="omp-skill-icon" />
                <span class="omp-skill-name">{{ skill.name }}</span>
                <span class="omp-skill-category-badge">{{ skill.category }}</span>
              </div>
              <p class="omp-skill-desc">{{ skill.description }}</p>
              <div class="omp-skill-actions">
                <button
                  type="button"
                  class="omp-btn omp-btn-sm"
                  title="Inject /skill command into active terminal"
                  @click.stop="injectSkill(skill.name)"
                >
                  <Icon name="terminal" :size="12" />
                  <span>Inject</span>
                </button>
              </div>
            </div>
          </div>

          <div v-if="selectedSkill" class="omp-skill-preview">
            <div class="omp-preview-header">
              <div class="omp-preview-title-group">
                <Icon name="book" :size="18" />
                <h3>{{ selectedSkill.name }}</h3>
              </div>
              <button
                type="button"
                class="omp-btn omp-btn-primary omp-btn-sm"
                @click="injectSkill(selectedSkill.name)"
              >
                <Icon name="terminal" :size="13" />
                <span>Inject into Active Terminal</span>
              </button>
            </div>
            <p class="omp-preview-desc">{{ selectedSkill.description }}</p>
            <div class="omp-preview-body">
              <pre class="omp-skill-body-text">{{ selectedSkill.body || 'No extended documentation available.' }}</pre>
            </div>
          </div>
        </div>
      </section>

      <section v-show="currentTab === 'presets'" class="omp-tab-pane omp-presets-pane">
        <div class="omp-presets-header">
          <h2>Configured Profiles & Presets</h2>
          <p>Discovered profiles from ~/.omp/agent/config.*.yml. Launch directly in isolated tmux sessions.</p>
        </div>

        <div class="omp-presets-grid">
          <div
            v-for="preset in presets"
            :key="preset.id"
            class="omp-preset-card"
            :class="{ 'is-default': preset.isDefault }"
          >
            <div class="omp-preset-top">
              <div class="omp-preset-icon-wrap">
                <Icon name="zap" :size="18" />
              </div>
              <div>
                <h3 class="omp-preset-title">{{ preset.name }}</h3>
                <span class="omp-preset-path">{{ preset.configPath }}</span>
              </div>
            </div>

            <div class="omp-preset-buttons">
              <button
                type="button"
                class="omp-btn omp-btn-primary"
                @click="launchPreset(preset.id, 'new-tab')"
              >
                <Icon name="play" :size="13" />
                <span>Launch Tab</span>
              </button>
              <button
                type="button"
                class="omp-btn"
                @click="launchPreset(preset.id, 'split-v')"
              >
                <Icon name="split-vertical" :size="13" />
                <span>Split Vertical</span>
              </button>
              <button
                type="button"
                class="omp-btn"
                @click="launchPreset(preset.id, 'split-h')"
              >
                <Icon name="split-horizontal" :size="13" />
                <span>Split Horizontal</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div v-if="lightboxImage" class="omp-lightbox" @click="lightboxImage = null">
      <div class="omp-lightbox-content" @click.stop>
        <button
          type="button"
          class="omp-lightbox-close"
          @click="lightboxImage = null"
        >
          <Icon name="x" :size="18" />
        </button>
        <img :src="lightboxImage" alt="Zoomed view" class="omp-lightbox-img" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { PluginContext } from '../types/dinotty';
import Icon from '../components/Icon.vue';
import { findSessionFiles, getSession, type ParsedSession } from '../services/sessionResolver';
import { loadAllSkills, filterSkills, injectSkillIntoActiveTerminal, type SkillItem } from '../services/skillService';
import { discoverPresets, type PresetItem } from '../services/presetService';
import { launchOmp } from '../services/tmuxLauncher';

const props = defineProps<{
  api: PluginContext;
}>();

const currentTab = ref<'sessions' | 'skills' | 'presets'>('sessions');

const sessionFiles = ref<string[]>([]);
const sessionQuery = ref('');
const selectedSessionPath = ref<string | null>(null);
const activeSession = ref<ParsedSession | null>(null);
const transcriptFilter = ref('');
const expandedThinking = ref<Record<string, boolean>>({});
const expandedTools = ref<Record<string, boolean>>({});
const lightboxImage = ref<string | null>(null);

const skills = ref<SkillItem[]>([]);
const skillSearchQuery = ref('');
const selectedCategory = ref('all');
const selectedSkill = ref<SkillItem | null>(null);
const categories = ['all', 'verification', 'diagnostics', 'devops', 'workspaces', 'general'];

const presets = ref<PresetItem[]>([]);

const filteredSessionFiles = computed(() => {
  const q = sessionQuery.value.trim().toLowerCase();
  if (!q) return sessionFiles.value;
  return sessionFiles.value.filter((f) => f.toLowerCase().includes(q));
});

const filteredMessages = computed(() => {
  if (!activeSession.value) return [];
  const q = transcriptFilter.value.trim().toLowerCase();
  if (!q) return activeSession.value.messages;
  return activeSession.value.messages.filter((m) => {
    return m.text.toLowerCase().includes(q) || (m.thinking && m.thinking.toLowerCase().includes(q));
  });
});

const filteredSkills = computed(() => {
  return filterSkills(skills.value, skillSearchQuery.value, selectedCategory.value);
});

function extractSessionName(filePath: string): string {
  const parts = filePath.split('/');
  return parts[parts.length - 1] || filePath;
}

function extractWorkspace(filePath: string): string {
  const parts = filePath.split('/');
  if (parts.length >= 2) {
    return parts[parts.length - 2];
  }
  return 'Workspace';
}

function formatTime(ts: number): string {
  if (!ts) return '';
  return new Date(ts).toLocaleTimeString();
}

function formatJson(val: unknown): string {
  if (typeof val === 'string') return val;
  try {
    return JSON.stringify(val, null, 2);
  } catch {
    return String(val);
  }
}

async function refreshSessions() {
  const cwd = props.api.terminal.activeCwd() || '/home/zhafron/Projects';
  sessionFiles.value = await findSessionFiles(props.api.workspace, cwd);
  if (sessionFiles.value.length > 0 && !selectedSessionPath.value) {
    await selectSession(sessionFiles.value[0]);
  }
}

async function selectSession(filePath: string) {
  selectedSessionPath.value = filePath;
  activeSession.value = await getSession(props.api.workspace, filePath);
}

function quickLaunchDefault() {
  void launchOmp(props.api, { preset: 'default', target: 'new-tab' });
}

function resumeInTerminal() {
  if (!activeSession.value) return;
  void launchOmp(props.api, {
    preset: 'default',
    target: 'new-tab',
    cwd: activeSession.value.cwd
  });
}

function copyTranscript() {
  if (!activeSession.value) return;
  const md = activeSession.value.messages
    .map((m) => `### ${m.role.toUpperCase()}\n\n${m.text}\n`)
    .join('\n---\n\n');
  void navigator.clipboard.writeText(md);
  props.api.ui.notify('Transcript copied to clipboard', 'info');
}

function injectSkill(name: string) {
  injectSkillIntoActiveTerminal(props.api, name);
}

function launchPreset(id: string, target: 'new-tab' | 'split-h' | 'split-v') {
  void launchOmp(props.api, { preset: id, target });
}

onMounted(async () => {
  await refreshSessions();
  skills.value = await loadAllSkills(props.api.workspace);
  if (skills.value.length > 0) {
    selectedSkill.value = skills.value[0];
  }
  presets.value = await discoverPresets(props.api.workspace);
});
</script>

<style scoped>
.omp-app {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg, #09090b);
  color: var(--fg, #e4e4e7);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow: hidden;
}

.omp-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: color-mix(in srgb, var(--bg-elevated, #18181b) 95%, transparent);
  border-bottom: 1px solid var(--border, #27272a);
}

.omp-brand {
  display: flex;
  align-items: center;
  gap: 8px;
}

.omp-brand-icon {
  color: var(--accent, #3b82f6);
}

.omp-brand-title {
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.05em;
}

.omp-brand-version {
  font-size: 10px;
  color: var(--fg-muted, #71717a);
  background: var(--border, #27272a);
  padding: 1px 6px;
  border-radius: 4px;
}

.omp-nav-tabs {
  display: flex;
  gap: 6px;
}

.omp-nav-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--fg-muted, #a1a1aa);
  border-radius: var(--radius, 6px);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.omp-nav-tab:hover {
  color: var(--fg, #fafafa);
  background: rgba(255, 255, 255, 0.04);
}

.omp-nav-tab.active {
  color: #fff;
  background: var(--border, #27272a);
  border-color: rgba(255, 255, 255, 0.1);
}

.omp-tab-badge {
  font-size: 10px;
  background: color-mix(in srgb, var(--accent, #3b82f6) 25%, transparent);
  color: var(--accent, #60a5fa);
  padding: 1px 6px;
  border-radius: 10px;
}

.omp-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--border, #27272a);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius, 6px);
  color: var(--fg, #e4e4e7);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.12s ease;
}

.omp-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.omp-btn-primary {
  background: var(--accent, #3b82f6);
  color: #fff;
  border-color: transparent;
}

.omp-btn-primary:hover {
  background: #2563eb;
}

.omp-btn-sm {
  padding: 4px 8px;
  font-size: 11px;
}

.omp-content {
  flex: 1;
  overflow: hidden;
  display: flex;
}

.omp-tab-pane {
  flex: 1;
  height: 100%;
  display: flex;
  overflow: hidden;
}

.omp-sessions-pane {
  display: flex;
}

.omp-sessions-sidebar {
  width: 280px;
  border-right: 1px solid var(--border, #27272a);
  display: flex;
  flex-direction: column;
  background: color-mix(in srgb, var(--bg, #09090b) 98%, transparent);
}

.omp-sidebar-search {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-bottom: 1px solid var(--border, #27272a);
}

.omp-input {
  flex: 1;
  background: var(--bg, #18181b);
  border: 1px solid var(--border, #27272a);
  border-radius: var(--radius, 4px);
  padding: 5px 8px;
  color: var(--fg, #fff);
  font-size: 12px;
  outline: none;
}

.omp-input:focus {
  border-color: var(--accent, #3b82f6);
}

.omp-icon-btn {
  background: transparent;
  border: none;
  color: var(--fg-muted, #71717a);
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.omp-icon-btn:hover {
  color: var(--fg, #fff);
  background: rgba(255, 255, 255, 0.08);
}

.omp-sidebar-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.omp-session-card {
  padding: 8px 10px;
  background: var(--bg-elevated, #18181b);
  border: 1px solid var(--border, #27272a);
  border-radius: var(--radius, 6px);
  cursor: pointer;
  transition: all 0.12s ease;
}

.omp-session-card:hover {
  border-color: rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
}

.omp-session-card.active {
  border-color: var(--accent, #3b82f6);
  background: color-mix(in srgb, var(--accent, #3b82f6) 12%, transparent);
}

.omp-session-card-head {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  font-size: 12px;
}

.omp-session-file-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.omp-session-card-sub {
  margin-top: 4px;
  font-size: 10px;
  color: var(--fg-muted, #71717a);
}

.omp-transcript-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--bg, #09090b);
  overflow: hidden;
}

.omp-transcript-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.omp-transcript-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: 1px solid var(--border, #27272a);
  background: color-mix(in srgb, var(--bg-elevated, #18181b) 95%, transparent);
}

.omp-header-meta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.omp-meta-badge {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 3px 8px;
  background: var(--border, #27272a);
  border-radius: 4px;
  font-size: 11px;
  color: var(--fg-muted, #a1a1aa);
}

.omp-meta-cost {
  color: var(--accent, #60a5fa);
  font-weight: 600;
}

.omp-header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.omp-search-box {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  background: var(--bg, #09090b);
  border: 1px solid var(--border, #27272a);
  border-radius: 4px;
  color: var(--fg-muted, #71717a);
}

.omp-mini-input {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 11px;
  outline: none;
  width: 110px;
}

.omp-turns-stream {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.omp-turn-message {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 14px;
  border-radius: var(--radius, 8px);
  border: 1px solid var(--border, #27272a);
  background: var(--bg-elevated, #18181b);
}

.omp-turn-message.user {
  border-left: 3px solid #3b82f6;
  background: color-mix(in srgb, #3b82f6 5%, var(--bg-elevated, #18181b));
}

.omp-turn-message.assistant {
  border-left: 3px solid #10b981;
}

.omp-turn-message.toolResult {
  border-left: 3px solid #f59e0b;
}

.omp-turn-author {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.omp-author-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--fg, #fafafa);
}

.omp-turn-time {
  font-size: 10px;
  color: var(--fg-muted, #71717a);
}

.omp-thinking-card {
  border: 1px dashed var(--border, #27272a);
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);
  padding: 6px 8px;
}

.omp-thinking-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  color: var(--fg-muted, #a1a1aa);
  font-size: 11px;
  cursor: pointer;
}

.omp-thinking-body {
  margin-top: 6px;
  padding: 8px;
  background: #000;
  border-radius: 4px;
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11px;
  color: #a1a1aa;
  white-space: pre-wrap;
  max-height: 200px;
  overflow-y: auto;
}

.omp-text-content {
  font-family: inherit;
  font-size: 13px;
  line-height: 1.6;
  white-space: pre-wrap;
  margin: 0;
}

.omp-turn-images {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
}

.omp-rendered-image {
  max-width: 280px;
  max-height: 180px;
  border-radius: 6px;
  border: 1px solid var(--border, #27272a);
  cursor: pointer;
  object-fit: cover;
  transition: transform 0.12s ease;
}

.omp-rendered-image:hover {
  transform: scale(1.02);
}

.omp-tools-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 4px;
}

.omp-tool-card {
  border: 1px solid var(--border, #27272a);
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.omp-tool-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 8px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.02);
}

.omp-tool-header:hover {
  background: rgba(255, 255, 255, 0.05);
}

.omp-tool-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
}

.omp-tool-name {
  font-family: ui-monospace, Menlo, monospace;
  font-weight: 600;
  color: var(--accent, #60a5fa);
}

.omp-tool-intent {
  color: var(--fg-muted, #71717a);
  font-size: 11px;
}

.omp-tool-status {
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 4px;
}

.omp-tool-status.success {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
}

.omp-tool-status.error {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

.omp-tool-details {
  padding: 8px;
  border-top: 1px solid var(--border, #27272a);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.omp-section-label {
  font-size: 10px;
  color: var(--fg-muted, #71717a);
  margin-bottom: 2px;
}

.omp-code-snippet {
  margin: 0;
  padding: 6px 8px;
  background: #000;
  border-radius: 4px;
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11px;
  color: #d4d4d8;
  white-space: pre-wrap;
  max-height: 180px;
  overflow-y: auto;
}

.omp-empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--fg-muted, #71717a);
  gap: 12px;
}

.omp-empty-hint {
  font-size: 11px;
  color: var(--fg-muted, #71717a);
  text-align: center;
  padding: 16px 0;
}

.omp-skills-pane {
  flex-direction: column;
  padding: 16px;
  gap: 12px;
}

.omp-skills-toolbar {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.omp-search-large {
  padding: 8px 12px;
}

.omp-search-large input {
  font-size: 13px;
}

.omp-category-pills {
  display: flex;
  gap: 6px;
  overflow-x: auto;
}

.omp-pill {
  padding: 4px 10px;
  background: var(--bg-elevated, #18181b);
  border: 1px solid var(--border, #27272a);
  border-radius: 12px;
  color: var(--fg-muted, #a1a1aa);
  font-size: 11px;
  cursor: pointer;
  text-transform: capitalize;
}

.omp-pill:hover {
  color: #fff;
}

.omp-pill.active {
  background: var(--accent, #3b82f6);
  border-color: transparent;
  color: #fff;
}

.omp-skills-layout {
  flex: 1;
  display: flex;
  gap: 16px;
  overflow: hidden;
}

.omp-skills-grid {
  flex: 1;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 10px;
  align-content: start;
}

.omp-skill-card {
  background: var(--bg-elevated, #18181b);
  border: 1px solid var(--border, #27272a);
  border-radius: var(--radius, 6px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;
  transition: all 0.12s ease;
}

.omp-skill-card:hover {
  border-color: rgba(255, 255, 255, 0.2);
}

.omp-skill-card.selected {
  border-color: var(--accent, #3b82f6);
  background: color-mix(in srgb, var(--accent, #3b82f6) 8%, transparent);
}

.omp-skill-card-top {
  display: flex;
  align-items: center;
  gap: 6px;
}

.omp-skill-name {
  font-weight: 600;
  font-size: 12px;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.omp-skill-category-badge {
  font-size: 9px;
  background: rgba(255, 255, 255, 0.06);
  padding: 2px 5px;
  border-radius: 4px;
  color: var(--fg-muted, #71717a);
  text-transform: uppercase;
}

.omp-skill-desc {
  font-size: 11px;
  color: var(--fg-muted, #a1a1aa);
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.omp-skill-actions {
  display: flex;
  justify-content: flex-end;
}

.omp-skill-preview {
  width: 360px;
  background: var(--bg-elevated, #18181b);
  border: 1px solid var(--border, #27272a);
  border-radius: var(--radius, 8px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
}

.omp-preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.omp-preview-title-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.omp-preview-title-group h3 {
  margin: 0;
  font-size: 15px;
}

.omp-preview-desc {
  font-size: 12px;
  color: var(--fg-muted, #a1a1aa);
  margin: 0;
}

.omp-preview-body {
  flex: 1;
  overflow-y: auto;
  background: #000;
  border-radius: 6px;
  padding: 12px;
  border: 1px solid var(--border, #27272a);
}

.omp-skill-body-text {
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11px;
  color: #d4d4d8;
  white-space: pre-wrap;
  margin: 0;
}

.omp-presets-pane {
  flex-direction: column;
  padding: 24px;
  gap: 20px;
  overflow-y: auto;
}

.omp-presets-header h2 {
  margin: 0 0 6px 0;
  font-size: 18px;
}

.omp-presets-header p {
  margin: 0;
  font-size: 13px;
  color: var(--fg-muted, #a1a1aa);
}

.omp-presets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.omp-preset-card {
  background: var(--bg-elevated, #18181b);
  border: 1px solid var(--border, #27272a);
  border-radius: var(--radius, 8px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
}

.omp-preset-card.is-default {
  border-color: var(--accent, #3b82f6);
  background: color-mix(in srgb, var(--accent, #3b82f6) 6%, var(--bg-elevated, #18181b));
}

.omp-preset-top {
  display: flex;
  gap: 12px;
}

.omp-preset-icon-wrap {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent, #3b82f6);
}

.omp-preset-title {
  margin: 0 0 4px 0;
  font-size: 14px;
}

.omp-preset-path {
  font-size: 10px;
  color: var(--fg-muted, #71717a);
  word-break: break-all;
}

.omp-preset-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.omp-lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.omp-lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.omp-lightbox-close {
  position: absolute;
  top: -36px;
  right: 0;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
}

.omp-lightbox-img {
  max-width: 100%;
  max-height: 85vh;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
}
</style>
