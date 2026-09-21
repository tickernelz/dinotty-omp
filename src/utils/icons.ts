export type IconName =
  | 'bot'
  | 'terminal'
  | 'layers'
  | 'split-horizontal'
  | 'split-vertical'
  | 'copy'
  | 'check'
  | 'x'
  | 'chevron-down'
  | 'chevron-right'
  | 'chevron-up'
  | 'search'
  | 'book'
  | 'zap'
  | 'history'
  | 'play'
  | 'external-link'
  | 'refresh'
  | 'cpu'
  | 'message-square'
  | 'file-text'
  | 'folder'
  | 'info'
  | 'alert-triangle'
  | 'grip-vertical'
  | 'filter'
  | 'code'
  | 'activity'
  | 'wallet';

export interface SvgElementDef {
  tag: 'path' | 'circle' | 'rect' | 'line' | 'polyline' | 'polygon';
  attrs: Record<string, string>;
}

export const ICON_DEFINITIONS: Record<IconName, SvgElementDef[]> = {
  bot: [
    { tag: 'path', attrs: { d: 'M12 8V4H8' } },
    { tag: 'rect', attrs: { width: '16', height: '12', x: '4', y: '8', rx: '2' } },
    { tag: 'path', attrs: { d: 'M2 14h2' } },
    { tag: 'path', attrs: { d: 'M20 14h2' } },
    { tag: 'path', attrs: { d: 'M15 13v2' } },
    { tag: 'path', attrs: { d: 'M9 13v2' } }
  ],
  terminal: [
    { tag: 'polyline', attrs: { points: '4 17 10 11 4 5' } },
    { tag: 'line', attrs: { x1: '12', x2: '20', y1: '19', y2: '19' } }
  ],
  layers: [
    { tag: 'path', attrs: { d: 'm12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z' } },
    { tag: 'path', attrs: { d: 'm22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65' } },
    { tag: 'path', attrs: { d: 'm22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65' } }
  ],
  'split-horizontal': [
    { tag: 'rect', attrs: { width: '18', height: '18', x: '3', y: '3', rx: '2' } },
    { tag: 'path', attrs: { d: 'M3 12h18' } }
  ],
  'split-vertical': [
    { tag: 'rect', attrs: { width: '18', height: '18', x: '3', y: '3', rx: '2' } },
    { tag: 'path', attrs: { d: 'M12 3v18' } }
  ],
  copy: [
    { tag: 'rect', attrs: { width: '14', height: '14', x: '8', y: '8', rx: '2', ry: '2' } },
    { tag: 'path', attrs: { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' } }
  ],
  check: [
    { tag: 'path', attrs: { d: 'M20 6 9 17l-5-5' } }
  ],
  x: [
    { tag: 'path', attrs: { d: 'M18 6 6 18' } },
    { tag: 'path', attrs: { d: 'm6 6 12 12' } }
  ],
  'chevron-down': [
    { tag: 'path', attrs: { d: 'm6 9 6 6 6-6' } }
  ],
  'chevron-right': [
    { tag: 'path', attrs: { d: 'm9 18 6-6-6-6' } }
  ],
  'chevron-up': [
    { tag: 'path', attrs: { d: 'm18 15-6-6-6 6' } }
  ],
  search: [
    { tag: 'circle', attrs: { cx: '11', cy: '11', r: '8' } },
    { tag: 'path', attrs: { d: 'm21 21-4.3-4.3' } }
  ],
  book: [
    { tag: 'path', attrs: { d: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z' } },
    { tag: 'path', attrs: { d: 'M6 6h10' } },
    { tag: 'path', attrs: { d: 'M6 10h10' } }
  ],
  zap: [
    { tag: 'path', attrs: { d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z' } }
  ],
  history: [
    { tag: 'path', attrs: { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' } },
    { tag: 'path', attrs: { d: 'M3 3v5h5' } },
    { tag: 'path', attrs: { d: 'M12 7v5l4 2' } }
  ],
  play: [
    { tag: 'polygon', attrs: { points: '6 3 20 12 6 21 6 3' } }
  ],
  'external-link': [
    { tag: 'path', attrs: { d: 'M15 3h6v6' } },
    { tag: 'path', attrs: { d: 'M10 14 21 3' } },
    { tag: 'path', attrs: { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' } }
  ],
  refresh: [
    { tag: 'path', attrs: { d: 'M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' } },
    { tag: 'path', attrs: { d: 'M3 3v5h5' } },
    { tag: 'path', attrs: { d: 'M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16' } },
    { tag: 'path', attrs: { d: 'M16 16h5v5' } }
  ],
  cpu: [
    { tag: 'rect', attrs: { width: '16', height: '16', x: '4', y: '4', rx: '2' } },
    { tag: 'rect', attrs: { width: '6', height: '6', x: '9', y: '9', rx: '1' } },
    { tag: 'path', attrs: { d: 'M15 2v2' } },
    { tag: 'path', attrs: { d: 'M15 20v2' } },
    { tag: 'path', attrs: { d: 'M2 15h2' } },
    { tag: 'path', attrs: { d: 'M2 9h2' } },
    { tag: 'path', attrs: { d: 'M20 15h2' } },
    { tag: 'path', attrs: { d: 'M20 9h2' } },
    { tag: 'path', attrs: { d: 'M9 2v2' } },
    { tag: 'path', attrs: { d: 'M9 20v2' } }
  ],
  'message-square': [
    { tag: 'path', attrs: { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' } }
  ],
  'file-text': [
    { tag: 'path', attrs: { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' } },
    { tag: 'path', attrs: { d: 'M14 2v4a2 2 0 0 0 2 2h4' } },
    { tag: 'path', attrs: { d: 'M10 9H8' } },
    { tag: 'path', attrs: { d: 'M16 13H8' } },
    { tag: 'path', attrs: { d: 'M16 17H8' } }
  ],
  folder: [
    { tag: 'path', attrs: { d: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z' } }
  ],
  info: [
    { tag: 'circle', attrs: { cx: '12', cy: '12', r: '10' } },
    { tag: 'path', attrs: { d: 'M12 16v-4' } },
    { tag: 'path', attrs: { d: 'M12 8h.01' } }
  ],
  'alert-triangle': [
    { tag: 'path', attrs: { d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z' } },
    { tag: 'path', attrs: { d: 'M12 9v4' } },
    { tag: 'path', attrs: { d: 'M12 17h.01' } }
  ],
  'grip-vertical': [
    { tag: 'circle', attrs: { cx: '9', cy: '12', r: '1' } },
    { tag: 'circle', attrs: { cx: '9', cy: '5', r: '1' } },
    { tag: 'circle', attrs: { cx: '9', cy: '19', r: '1' } },
    { tag: 'circle', attrs: { cx: '15', cy: '12', r: '1' } },
    { tag: 'circle', attrs: { cx: '15', cy: '5', r: '1' } },
    { tag: 'circle', attrs: { cx: '15', cy: '19', r: '1' } }
  ],
  filter: [
    { tag: 'polygon', attrs: { points: '22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' } }
  ],
  activity: [
    { tag: 'path', attrs: { d: 'M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2' } }
  ],
  wallet: [
    { tag: 'path', attrs: { d: 'M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1' } },
    { tag: 'path', attrs: { d: 'M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4' } }
  ],
  code: [
    { tag: 'polyline', attrs: { points: '16 18 22 12 16 6' } },
    { tag: 'polyline', attrs: { points: '8 6 2 12 8 18' } }
  ]
};
