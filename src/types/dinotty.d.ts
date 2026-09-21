import type { Component, Ref, UnwrapRef, VNode } from 'vue'
export type MonitorSeriesScale = 'percent' | 'auto'
export interface MonitorSeriesDetailRow {
  label: string
  value: string
}
export interface MonitorSeries {
  id: string
  label: string
  scale?: MonitorSeriesScale
  color?: string
  current?: () => number | null
  multiSeries?: () => Array<{ label?: string; value: number | null; color?: string }>
  statusText?: () => string | null
  statusIcon?: string
  detail?: () => MonitorSeriesDetailRow[]
  defaultVisible?: boolean
  visible?: () => boolean
}
export interface OverlayContribution {
  id: string
  component: Component
  interactive?: boolean
  dragHandle?: 'whole' | 'grip'
  defaultPosition?:
    | { x: number; y: number }
    | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  visible?: () => boolean
  defaultVisible?: boolean
}
export type PluginLocale = 'en' | 'zh'
export interface PluginContext {
  reactive: <T extends object>(target: T) => UnwrapRef<T>
  ref: <T>(value: T) => Ref<T>
  computed: <T>(getter: () => T) => Ref<T>
  watch: typeof import('vue').watch
  onMounted: typeof import('vue').onMounted
  onUnmounted: typeof import('vue').onUnmounted
  h: typeof import('vue').h
  i18n: {
    getLocale(): PluginLocale
    onDidChangeLocale(callback: (locale: PluginLocale) => void): Disposable
  }
  exec: {
    run(args: string[], options?: ExecOptions): Promise<ExecResult>
    spawn(args: string[], options?: ProcessStartOptions): SpawnHandle
  }
  terminal: {
    send(paneId: string, data: string): void
    activePaneId(): string | null
    onDidChangeActivePane(callback: (paneId: string | null) => void): Disposable
    activeCwd(): string | null
    listPanes(): Array<{ id: string; title: string; active: boolean }>
    onOutput(callback: (paneId: string, data: string) => void): Disposable
    createTab(command?: string): Promise<string>
    createTerminalTab(opts: { cwd: string; argv: string[]; title?: string }): Promise<string>
    splitTerminalPane(opts?: {
      direction?: 'horizontal' | 'vertical'
      cwd?: string
    }): Promise<string | null>
  }
  settings: {
    get(): Record<string, any>
    onDidChange(callback: (settings: Record<string, any>) => void): Disposable
  }
  storage: {
    get<T = any>(key: string): Promise<T | undefined>
    set(key: string, value: any): Promise<void>
    delete(key: string): Promise<void>
    list(): Promise<string[]>
  }
  commands: {
    register(id: string, handler: () => void): Disposable
    registerQuickPick(id: string, options: QuickPickOptions): Disposable
  }
  ui: {
    notify(message: string, level?: 'info' | 'warn' | 'error', title?: string): void
    confirm(message: string): Promise<boolean>
  }
  open(): void
  process: {
    start(args: string[], options?: ProcessStartOptions): Promise<ProcessHandle>
    list(): Promise<ProcessInfo[]>
    stop(pid: number): Promise<void>
    stopAll(): Promise<void>
  }
  events: {
    subscribe<T = unknown>(
      eventName: string,
      handler: (data: T, e: PluginEvent) => void,
    ): Disposable
    emit(
      eventName: string,
      data: unknown,
      opts?: { target_plugin_id?: string },
    ): void
  }
  workspace: {
    readDir(path: string): Promise<{
      path: string
      entries: Array<{ name: string; is_dir: boolean; size: number }>
    }>
    readFile(path: string): Promise<{
      kind: string
      content: string | null
      truncated: boolean
      language: string | null
    }>
    writeFile(path: string, content: string): Promise<void>
    stat(path: string): Promise<{
      size: number
      is_dir: boolean
      modified: number | null
    }>
    watch(
      path: string,
      cb: (event: {
        type: 'file_event' | 'error'
        path?: string
        kind?: string
        message?: string
      }) => void,
    ): Disposable
    mkdir(path: string): Promise<void>
    delete(path: string): Promise<void>
    rename(path: string, newName: string): Promise<void>
    move(src: string, dest: string): Promise<void>
  }
  assetUrl(relativePath: string): string
  fetchAsset(relativePath: string, init?: RequestInit): Promise<Response>
}
export interface PluginEvent {
  event_name: string
  data: unknown
  source_pane_id?: string
  plugin_id?: string
  target_plugin_id?: string
}
export interface ExecOptions {
  cwd?: string
  env?: Record<string, string>
  timeout?: number
}
export interface ExecResult {
  code: number
  stdout: string
  stderr: string
}
export interface SpawnHandle {
  stdout: ReadableStream<string>
  stderr: ReadableStream<string>
  kill(): void
}
export interface ProcessStartOptions {
  cwd?: string
  env?: Record<string, string>
}
export interface ProcessInfo {
  pid: number
  command: string
  args: string[]
  state: 'running' | 'exited'
  exitCode?: number
}
export interface ProcessHandle {
  info: ProcessInfo
  stop(): Promise<void>
}
export interface QuickPickItem {
  label: string
  detail?: string
  icon?: string
  action: () => void
}
export interface QuickPickOptions {
  title: string
  items: () => QuickPickItem[] | Promise<QuickPickItem[]>
}
export interface Disposable {
  dispose(): void
}
export interface KeyboardAppActionOptions {
  autoEnter?: boolean
}
export interface KeyboardModifiers {
  ctrl: 'off' | 'once' | 'locked'
  shift: 'off' | 'once' | 'locked'
  alt: 'off' | 'once' | 'locked'
  meta: 'off' | 'once' | 'locked'
}
export interface KeyboardHistorySuggestion {
  command: string
  frequency: number
}
export interface KeyboardHostEventMap {
  'app-action': { id: string; options?: KeyboardAppActionOptions }
  'bookmarks': undefined
  'dismiss': undefined
  'typing-change': { focused: boolean }
  'modifier-change': { modifiers: KeyboardModifiers }
  'focus-xterm': undefined
  'paste-text': { text: string }
  'toggle-ime': undefined
  'upload-status': { saved?: string[]; error?: string; [key: string]: unknown }
}
export interface KeyboardIncomingEventMap {
  'modifiers-consumed': { paneId: string; modifiers?: KeyboardModifiers }
}
export interface KeyboardContext {
  version: number
  visible: Ref<boolean>
  activePaneId: Ref<string | null>
  send(target: 'active' | 'broadcast' | string, data: string): Promise<void>
  setDesiredHeight(h: number): void
  onViewportResize(
    cb: (info: { height: number; offsetTop: number; baseline: number }) => void,
  ): Disposable
  i18n: PluginContext['i18n'] & {
    t(key: string, params?: Record<string, string | number>): string
  }
  settingsData: Record<string, any>
  onDidChangeSettings(cb: (settings: Record<string, any>) => void): Disposable
  events: {
    emit<K extends keyof KeyboardHostEventMap>(event: K, data: KeyboardHostEventMap[K]): void
    on<K extends keyof KeyboardIncomingEventMap>(
      event: K,
      cb: (data: KeyboardIncomingEventMap[K]) => void,
    ): Disposable
  }
  nativeImeOpen: Ref<boolean>
  setNativeImeOpen(open: boolean): void
  history: {
    suggestions: Ref<KeyboardHistorySuggestion[]>
    fetchSuggestions(prefix?: string, limit?: number): Promise<KeyboardHistorySuggestion[]>
    fetchDebounced(prefix?: string): void
    deleteSuggestion(command: string): Promise<void>
  }
  selectedPath: Ref<string | null>
}
export interface KeyboardContribution {
  component: Component
  id?: string
  desiredHeight?: number | 'auto'
  defaultEnabled?: boolean
}
export interface PluginExports {
  component?: Component
  dispose?: () => void
  monitor?: { series: MonitorSeries[] }
  keyboard?: KeyboardContribution
  overlay?: OverlayContribution[]
}
export interface PluginManifest {
  id: string
  name: string
  version: string
  minAppVersion?: string
  description?: string
  icon?: string
  entry?: string
  bin?: {
    mode: string
    entry?: string
    entries?: Record<string, string>
    lifecycle?: {
      scope?: 'ui' | 'host'
      stdinLease?: boolean
      shutdownDeadlineMs?: number
      forceKillAfterMs?: number
    }
  }
  commands?: Array<{ id: string; title: string }>
  styles?: string
  permissions?: string[]
  category?: string
  targets?: string[]
  showInToolbar?: boolean
  keyboardApiVersion?: number
}
export declare function activate(context: PluginContext): PluginExports | void | Promise<PluginExports | void>
export declare function deactivate(): void
