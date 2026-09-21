import type { Component, Ref, UnwrapRef, VNode } from 'vue'
export type MonitorSeriesScale = 'percent' | 'auto'
export interface MonitorSeriesDetailRow { … }
export interface MonitorSeries { … }
export interface OverlayContribution { … }
export type PluginLocale = 'en' | 'zh'
export interface PluginContext { … }
export interface PluginEvent { … }
export interface ExecOptions { … }
export interface ExecResult { … }
export interface SpawnHandle { … }
export interface ProcessStartOptions { … }
export interface ProcessInfo { … }
export interface ProcessHandle { … }
export interface QuickPickItem { … }
export interface QuickPickOptions { … }
export interface Disposable {
  dispose(): void
}
export interface KeyboardAppActionOptions {
  autoEnter?: boolean
}
export interface KeyboardModifiers { … }
export interface KeyboardHistorySuggestion { … }
export interface KeyboardHostEventMap { … }
export interface KeyboardIncomingEventMap { … }
export interface KeyboardContext { … }
export interface KeyboardContribution { … }
export interface PluginExports { … }
export interface PluginManifest { … }
export declare function activate(context: PluginContext): PluginExports | void | Promise<PluginExports | void>
export declare function deactivate(): void
[…364ln elided; re-read needed ranges, e.g. dinotty-omp/src/types/dinotty.d.ts:5-8,12-16]
