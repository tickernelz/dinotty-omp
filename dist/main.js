const p = window.__DINOTTY_VUE__;
if (!p)
  throw new Error("host vue bridge missing: window.__DINOTTY_VUE__ not assigned");
const C = p.ref;
p.reactive;
const P = p.computed;
p.watch;
const re = p.onMounted;
p.onUnmounted;
const $e = p.onBeforeUnmount;
p.nextTick;
p.h;
const jt = p.defineComponent;
p.getCurrentInstance;
const g = p.toDisplayString, A = p.normalizeClass;
p.normalizeStyle;
const f = p.openBlock, v = p.createElementBlock, a = p.createElementVNode, Te = p.createBlock, k = p.createVNode, I = p.createCommentVNode, G = p.createTextVNode;
p.withCtx;
const Z = p.withDirectives, st = p.withModifiers;
p.withKeys;
const Dt = p.vModelText, ce = p.vModelSelect, xe = p.vModelCheckbox;
p.vModelRadio;
const Ie = p.vShow, Pe = p.mergeProps, N = p.renderList;
p.renderSlot;
p.resolveComponent;
p.resolveDirective;
const Ee = p.resolveDynamicComponent;
p.resolveTransitionHooks;
p.setBlockTracking;
p.useSlots;
p.useAttrs;
p.isRef;
const Le = p.unref;
p.toRef;
p.toRefs;
p.customRef;
p.triggerRef;
p.shallowRef;
p.shallowReactive;
p.readonly;
p.proxyRefs;
p.markRaw;
p.toRaw;
p.effectScope;
p.EffectScope;
p.watchEffect;
p.watchPostEffect;
p.watchSyncEffect;
p.Teleport;
p.Suspense;
p.KeepAlive;
p.Transition;
p.TransitionGroup;
const E = p.Fragment;
p.Static;
p.Text;
p.Comment;
const Zt = {
  bot: [
    { tag: "path", attrs: { d: "M12 8V4H8" } },
    { tag: "rect", attrs: { width: "16", height: "12", x: "4", y: "8", rx: "2" } },
    { tag: "path", attrs: { d: "M2 14h2" } },
    { tag: "path", attrs: { d: "M20 14h2" } },
    { tag: "path", attrs: { d: "M15 13v2" } },
    { tag: "path", attrs: { d: "M9 13v2" } }
  ],
  terminal: [
    { tag: "polyline", attrs: { points: "4 17 10 11 4 5" } },
    { tag: "line", attrs: { x1: "12", x2: "20", y1: "19", y2: "19" } }
  ],
  layers: [
    { tag: "path", attrs: { d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" } },
    { tag: "path", attrs: { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" } },
    { tag: "path", attrs: { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" } }
  ],
  "split-horizontal": [
    { tag: "rect", attrs: { width: "18", height: "18", x: "3", y: "3", rx: "2" } },
    { tag: "path", attrs: { d: "M3 12h18" } }
  ],
  "split-vertical": [
    { tag: "rect", attrs: { width: "18", height: "18", x: "3", y: "3", rx: "2" } },
    { tag: "path", attrs: { d: "M12 3v18" } }
  ],
  copy: [
    { tag: "rect", attrs: { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" } },
    { tag: "path", attrs: { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" } }
  ],
  check: [
    { tag: "path", attrs: { d: "M20 6 9 17l-5-5" } }
  ],
  x: [
    { tag: "path", attrs: { d: "M18 6 6 18" } },
    { tag: "path", attrs: { d: "m6 6 12 12" } }
  ],
  "chevron-down": [
    { tag: "path", attrs: { d: "m6 9 6 6 6-6" } }
  ],
  "chevron-right": [
    { tag: "path", attrs: { d: "m9 18 6-6-6-6" } }
  ],
  "chevron-up": [
    { tag: "path", attrs: { d: "m18 15-6-6-6 6" } }
  ],
  search: [
    { tag: "circle", attrs: { cx: "11", cy: "11", r: "8" } },
    { tag: "path", attrs: { d: "m21 21-4.3-4.3" } }
  ],
  book: [
    { tag: "path", attrs: { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" } },
    { tag: "path", attrs: { d: "M6 6h10" } },
    { tag: "path", attrs: { d: "M6 10h10" } }
  ],
  zap: [
    { tag: "path", attrs: { d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" } }
  ],
  history: [
    { tag: "path", attrs: { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" } },
    { tag: "path", attrs: { d: "M3 3v5h5" } },
    { tag: "path", attrs: { d: "M12 7v5l4 2" } }
  ],
  play: [
    { tag: "polygon", attrs: { points: "6 3 20 12 6 21 6 3" } }
  ],
  "external-link": [
    { tag: "path", attrs: { d: "M15 3h6v6" } },
    { tag: "path", attrs: { d: "M10 14 21 3" } },
    { tag: "path", attrs: { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" } }
  ],
  refresh: [
    { tag: "path", attrs: { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" } },
    { tag: "path", attrs: { d: "M3 3v5h5" } },
    { tag: "path", attrs: { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" } },
    { tag: "path", attrs: { d: "M16 16h5v5" } }
  ],
  cpu: [
    { tag: "rect", attrs: { width: "16", height: "16", x: "4", y: "4", rx: "2" } },
    { tag: "rect", attrs: { width: "6", height: "6", x: "9", y: "9", rx: "1" } },
    { tag: "path", attrs: { d: "M15 2v2" } },
    { tag: "path", attrs: { d: "M15 20v2" } },
    { tag: "path", attrs: { d: "M2 15h2" } },
    { tag: "path", attrs: { d: "M2 9h2" } },
    { tag: "path", attrs: { d: "M20 15h2" } },
    { tag: "path", attrs: { d: "M20 9h2" } },
    { tag: "path", attrs: { d: "M9 2v2" } },
    { tag: "path", attrs: { d: "M9 20v2" } }
  ],
  "message-square": [
    { tag: "path", attrs: { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" } }
  ],
  "file-text": [
    { tag: "path", attrs: { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" } },
    { tag: "path", attrs: { d: "M14 2v4a2 2 0 0 0 2 2h4" } },
    { tag: "path", attrs: { d: "M10 9H8" } },
    { tag: "path", attrs: { d: "M16 13H8" } },
    { tag: "path", attrs: { d: "M16 17H8" } }
  ],
  folder: [
    { tag: "path", attrs: { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" } }
  ],
  info: [
    { tag: "circle", attrs: { cx: "12", cy: "12", r: "10" } },
    { tag: "path", attrs: { d: "M12 16v-4" } },
    { tag: "path", attrs: { d: "M12 8h.01" } }
  ],
  "alert-triangle": [
    { tag: "path", attrs: { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" } },
    { tag: "path", attrs: { d: "M12 9v4" } },
    { tag: "path", attrs: { d: "M12 17h.01" } }
  ],
  "grip-vertical": [
    { tag: "circle", attrs: { cx: "9", cy: "12", r: "1" } },
    { tag: "circle", attrs: { cx: "9", cy: "5", r: "1" } },
    { tag: "circle", attrs: { cx: "9", cy: "19", r: "1" } },
    { tag: "circle", attrs: { cx: "15", cy: "12", r: "1" } },
    { tag: "circle", attrs: { cx: "15", cy: "5", r: "1" } },
    { tag: "circle", attrs: { cx: "15", cy: "19", r: "1" } }
  ],
  filter: [
    { tag: "polygon", attrs: { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" } }
  ],
  activity: [
    { tag: "path", attrs: { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" } }
  ],
  wallet: [
    { tag: "path", attrs: { d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" } },
    { tag: "path", attrs: { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" } }
  ],
  code: [
    { tag: "polyline", attrs: { points: "16 18 22 12 16 6" } },
    { tag: "polyline", attrs: { points: "8 6 2 12 8 18" } }
  ]
}, ze = ["width", "height"], Ae = /* @__PURE__ */ jt({
  __name: "Icon",
  props: {
    name: {},
    size: { default: 16 },
    class: { default: "" }
  },
  setup(t) {
    const e = t, s = P(() => e.size), n = P(() => e.class), o = P(() => Zt[e.name] || Zt.info);
    return (i, l) => (f(), v("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: s.value,
      height: s.value,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: A(["omp-svg-icon", n.value]),
      "aria-hidden": "true"
    }, [
      (f(!0), v(E, null, N(o.value, (c, y) => (f(), Te(Ee(c.tag), Pe({ key: y }, { ref_for: !0 }, c.attrs), null, 16))), 128))
    ], 10, ze));
  }
}), Wt = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, o] of e)
    s[n] = o;
  return s;
}, S = /* @__PURE__ */ Wt(Ae, [["__scopeId", "data-v-35ecedfe"]]), V = {
  cwd: "",
  sessionFile: "",
  isRunning: !1,
  state: "inactive",
  summary: null
};
function Oe(t) {
  return !(!t || typeof t != "object" || !("model" in t) || typeof t.model != "string" || !("provider" in t) || typeof t.provider != "string" || !("thinkingLevel" in t) || typeof t.thinkingLevel != "string" || !("status" in t) || !["idle", "thinking", "running_tool", "error"].includes(String(t.status)) || !("totalTokens" in t) || typeof t.totalTokens != "number" || !Number.isSafeInteger(t.totalTokens) || t.totalTokens < 0 || !("turns" in t) || typeof t.turns != "number" || !Number.isSafeInteger(t.turns) || t.turns < 0 || !("totalCost" in t) || typeof t.totalCost != "number" || !Number.isFinite(t.totalCost) || t.totalCost < 0);
}
async function Ne(t, e) {
  const s = e?.paneId ?? t.terminal.activePaneId() ?? "", n = e?.cwd ?? t.terminal.activeCwd() ?? "";
  try {
    const o = await t.exec.run(["pane", s, n]);
    if (o.code !== 0 || !o.stdout.trim()) return V;
    const i = JSON.parse(o.stdout.trim());
    return !i || typeof i != "object" || !("cwd" in i) || typeof i.cwd != "string" || !("sessionFile" in i) || typeof i.sessionFile != "string" || !("isRunning" in i) || typeof i.isRunning != "boolean" || !("state" in i) || i.state !== "inactive" && i.state !== "starting" && i.state !== "running" || i.state === "inactive" != !i.isRunning || !("summary" in i) || i.summary !== null && !Oe(i.summary) ? V : {
      cwd: i.cwd,
      sessionFile: i.sessionFile,
      isRunning: i.isRunning,
      state: i.state,
      summary: i.summary
    };
  } catch {
    return V;
  }
}
function De(t) {
  const e = t.replace(/\\/g, "/").split("/").pop() || t, s = e.match(/^(\d{4}-\d{2}-\d{2})T(\d{2})-(\d{2})-(\d{2})/);
  return s ? `${s[1]} ${s[2]}:${s[3]}:${s[4]}` : e.replace(/\.jsonl$/, "");
}
function Re(t) {
  const e = t.replace(/\\/g, "/").split("/"), s = e[e.length - 2] || "";
  return s ? s.replace(/^-/, "").replace(/-/g, "/") || "home" : "workspace";
}
function Fe(t, e = Date.now()) {
  if (!t) return "unknown";
  const s = e - t, n = Math.round(s / 6e4);
  if (n < 1) return "just now";
  if (n < 60) return `${n}m ago`;
  const o = Math.round(n / 60);
  return o < 24 ? `${o}h ago` : `${Math.round(o / 24)}d ago`;
}
async function He(t, e, s) {
  const n = e.includes("\\") ? "\\" : "/", o = [];
  if (s)
    o.push([e, s].join(n));
  else
    try {
      const c = await t.workspace.readDir(e);
      for (const y of c.entries)
        y.is_dir && y.name.startsWith("-") && o.push([e, y.name].join(n));
    } catch {
      return [];
    }
  const i = Date.now(), l = [];
  for (const c of o)
    try {
      const y = await t.workspace.readDir(c);
      for (const d of y.entries) {
        if (d.is_dir || !d.name.endsWith(".jsonl") || d.name.startsWith("__") || !/^\d{4}-\d{2}-\d{2}T/.test(d.name)) continue;
        const h = [c, d.name].join(n);
        let m = 0;
        try {
          m = (await t.workspace.stat(h)).modified || 0;
        } catch {
        }
        l.push({
          path: h,
          name: d.name,
          modified: m,
          displayName: De(h),
          workspace: Re(h),
          ageLabel: Fe(m, i)
        });
      }
    } catch {
    }
  return l.sort((c, y) => y.modified - c.modified || y.name.localeCompare(c.name)), l;
}
class Be {
  messages = [];
  sessionId = "";
  cwd = "";
  model = "unknown";
  provider = "unknown";
  totalTokens = 0;
  totalCost = 0;
  updatedAt = 0;
  turns = 0;
  droppedHead = !1;
  pending = /* @__PURE__ */ new Map();
  tail = "";
  keepMessages;
  countUsage;
  constructor(e = {}) {
    this.keepMessages = e.keepMessages ?? 1500, this.countUsage = e.countUsage ?? !0;
  }
  push(e, s) {
    if (!e && !s && !this.tail) return;
    const n = this.tail + e, o = n.lastIndexOf(`
`);
    if (o < 0) {
      this.tail = s ? "" : n, s && n.trim() && this.applyLine(n.trim());
      return;
    }
    const i = n.slice(0, o);
    this.tail = n.slice(o + 1);
    for (const l of i.split(`
`)) {
      const c = l.trim();
      c && this.applyLine(c);
    }
    s && this.tail.trim() ? (this.applyLine(this.tail.trim()), this.tail = "") : s && (this.tail = "");
  }
  stats() {
    return {
      sessionId: this.sessionId,
      cwd: this.cwd,
      model: this.model,
      provider: this.provider,
      totalTokens: this.totalTokens,
      totalCost: this.totalCost,
      updatedAt: this.updatedAt,
      turns: this.turns
    };
  }
  trim() {
    this.messages.length <= this.keepMessages || (this.messages.splice(0, this.messages.length - this.keepMessages), this.droppedHead = !0);
  }
  applyLine(e) {
    let s;
    try {
      s = JSON.parse(e);
    } catch {
      return;
    }
    if (!s || typeof s != "object" || Array.isArray(s)) return;
    if (typeof s.timestamp == "number" ? s.timestamp : typeof s.timestamp == "string" ? Date.parse(s.timestamp) : Number.NaN, s.type === "session") {
      this.sessionId = s.id || this.sessionId, this.cwd = s.cwd || this.cwd;
      return;
    }
    if (s.type === "model_change") {
      s.model && (this.model = String(s.model)), s.provider && (this.provider = String(s.provider));
      return;
    }
    if (s.type === "custom" && s.customType === "tool_execution_start") {
      const i = s.data?.toolCallId;
      i && !this.pending.has(i) && this.pending.set(i, {
        id: i,
        name: s.data?.toolName || "tool",
        arguments: {},
        argumentsLabel: "",
        intent: s.data?.intent
      });
      return;
    }
    if (s.type !== "message") return;
    const n = s.message;
    if (!n || typeof n != "object" || Array.isArray(n)) return;
    n.model && (this.model = String(n.model)), n.provider && (this.provider = String(n.provider)), this.countUsage && (typeof n.usage?.totalTokens == "number" && (this.totalTokens = n.usage.totalTokens), typeof n.usage?.cost?.total == "number" && (this.totalCost += n.usage.cost.total));
    const o = n.timestamp || this.updatedAt || Date.now();
    if (n.role === "assistant") {
      this.turns += 1;
      let i = "", l = "";
      const c = [], y = n.content;
      if (Array.isArray(y))
        for (const d of y) {
          const h = d;
          if (h?.type === "text") i += `${h.text || ""}
`;
          else if (h?.type === "thinking") l += `${h.thinking || h.text || ""}
`;
          else if (h?.type === "toolCall") {
            const m = h.arguments ?? {}, w = {
              id: h.id || `call-${this.messages.length}-${c.length}`,
              name: h.name || "tool",
              arguments: m,
              argumentsLabel: Ue(m),
              intent: h.intent
            };
            c.push(w), this.pending.set(w.id, w);
          }
        }
      this.messages.push({
        id: s.id || `msg-${o}-${this.messages.length}`,
        role: "assistant",
        text: i.trim(),
        images: [],
        timestamp: o,
        timeLabel: Rt(o),
        cost: n.usage?.cost?.total,
        totalTokens: n.usage?.totalTokens,
        thinking: l.trim() || void 0,
        toolCalls: c.length ? c : void 0,
        searchText: ""
      }), this.trim();
      return;
    }
    if (n.role === "user") {
      let i = "";
      const l = [], c = n.content;
      if (Array.isArray(c))
        for (const y of c) {
          const d = y;
          d?.type === "text" ? i += `${d.text || ""}
` : d?.type === "image" && (d.url ? l.push(d.url) : d.data && l.push(`data:${d.mediaType || "image/png"};base64,${d.data}`));
        }
      else typeof c == "string" && (i = c);
      this.messages.push({
        id: s.id || `msg-${o}-${this.messages.length}`,
        role: "user",
        text: i.trim(),
        images: l,
        timestamp: o,
        timeLabel: Rt(o),
        searchText: ""
      }), this.trim();
      return;
    }
    if (n.role === "toolResult") {
      let i = "";
      const l = n.content;
      if (Array.isArray(l))
        for (const d of l) {
          const h = d;
          h?.type === "text" && (i += `${h.text || ""}
`);
        }
      else typeof l == "string" && (i = l);
      const c = n.toolCallId, y = c ? this.pending.get(c) : void 0;
      if (y && c) {
        y.result = i.trim(), y.isError = !!n.isError, this.pending.delete(c);
        for (const d of this.messages)
          d.toolCalls?.includes(y) && (d.searchText = "");
      } else
        this.messages.push({
          id: s.id || `msg-${o}-${this.messages.length}`,
          role: "toolResult",
          text: i.trim(),
          images: [],
          timestamp: o,
          timeLabel: Rt(o),
          toolCallId: c,
          isError: !!n.isError,
          searchText: ""
        }), this.trim();
    }
  }
}
function Rt(t) {
  if (!t) return "";
  const e = new Date(t);
  return `${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}`;
}
function Ue(t) {
  if (typeof t == "string") return t;
  try {
    return JSON.stringify(t, null, 2);
  } catch {
    return String(t);
  }
}
function Ve(t) {
  const e = [t.text];
  if (t.thinking && e.push(t.thinking), t.toolCalls)
    for (const s of t.toolCalls)
      e.push(s.name), s.intent && e.push(s.intent), s.result && e.push(s.result);
  return t.searchText = e.join(" ").toLowerCase(), t.searchText;
}
const je = 2 * 1024 * 1024, We = 6 * 1024 * 1024, Ye = 1024 * 1024, Ge = 6, j = /* @__PURE__ */ new Map();
function Je(t, e, s, n = 0) {
  return `${t}\0${e}\0${s}\0${n}`;
}
async function Ke(t, e, s, n) {
  try {
    const o = await t.exec.run(["chunk", e, String(s), String(n)]);
    if (o.code !== 0 || !o.stdout.trim()) return null;
    const i = JSON.parse(o.stdout.trim());
    return i.error || typeof i != "object" || i === null || typeof i.start != "number" || typeof i.end != "number" || typeof i.size != "number" || typeof i.eof != "boolean" || typeof i.content != "string" ? null : i;
  } catch {
    return null;
  }
}
async function qe(t, e) {
  const s = await t.exec.run(["file-metrics", e]).catch(() => null);
  if (!s || s.code !== 0 || !s.stdout.trim()) return null;
  try {
    const n = JSON.parse(s.stdout.trim());
    return n.error || typeof n != "object" || n === null ? null : {
      sessionId: "",
      cwd: "",
      model: typeof n.model == "string" ? n.model : "unknown",
      provider: typeof n.provider == "string" ? n.provider : "unknown",
      totalTokens: typeof n.totalTokens == "number" ? n.totalTokens : 0,
      totalCost: typeof n.totalCost == "number" ? n.totalCost : 0,
      updatedAt: 0,
      turns: typeof n.turns == "number" ? n.turns : 0
    };
  } catch {
    return null;
  }
}
function Ze(t, e, s, n, o) {
  return {
    ...t.stats(),
    filePath: e,
    messages: t.messages.slice(),
    droppedHead: n > 0 || t.droppedHead,
    startOffset: n,
    loadedBytes: o,
    fileSize: s,
    metricsExact: !1
  };
}
function Qt(t) {
  return t.map((e) => ({
    ...e,
    toolCalls: e.toolCalls?.map((s) => ({ ...s }))
  }));
}
function Qe(t) {
  const e = /* @__PURE__ */ new Map(), s = [];
  for (const n of t) {
    for (const o of n.toolCalls || []) e.set(o.id, { call: o, message: n });
    if (n.role === "toolResult" && n.toolCallId) {
      const o = e.get(n.toolCallId);
      if (o) {
        o.call.result = n.text, o.call.isError = !!n.isError, o.message.searchText = "";
        continue;
      }
    }
    s.push(n);
  }
  return s;
}
function Xe(t, e, s, n) {
  let o = null;
  for (const i of j.values())
    i.data.filePath === t && i.size === e && i.mtime === s && i.data.startOffset > 0 && i.data.loadedBytes < n && (!o || i.data.loadedBytes > o.loadedBytes) && (o = i.data);
  return o;
}
async function ts(t, e, s, n, o) {
  const i = new Be({ keepMessages: Number.MAX_SAFE_INTEGER });
  let l = s, c = null, y = s, d = 0;
  for (; ; ) {
    const h = await Ke(t, e, l, Ye);
    if (!h) return null;
    c ??= h, d === 0 && (y = h.start);
    let m = h.content, w = h.end;
    if (o !== void 0 && h.start >= o) break;
    if (o !== void 0 && w > o) {
      const x = new TextEncoder().encode(m);
      m = new TextDecoder().decode(x.subarray(0, Math.max(0, o - h.start))), w = o;
    }
    const $ = new TextEncoder().encode(m).byteLength;
    if (!$ && w <= l) return null;
    if (i.push(m, h.eof || o !== void 0 && w >= o), d += $, w <= l || h.eof || o !== void 0 && w >= o || d >= n) break;
    l = h.end;
  }
  return { parser: i, metadata: c, startOffset: y, loadedBytes: d };
}
function es(t, e) {
  return e && (t.model = e.model, t.provider = e.provider, t.totalTokens = e.totalTokens, t.totalCost = e.totalCost, t.turns = e.turns, t.metricsExact = !0), t;
}
async function Xt(t, e, s = {}) {
  const n = await t.workspace.stat(e).catch(() => null);
  if (!n || n.is_dir) return null;
  const o = Math.max(1, s.tailBytes ?? je), i = Math.max(1, s.historyBytes ?? We), l = s.before ?? Xe(e, n.size, n.modified || 0, o), c = Je(e, o, i, l?.startOffset || 0), y = j.get(c);
  if (y && y.mtime === (n.modified || 0) && y.size === n.size)
    return j.delete(c), j.set(c, y), y.data;
  const d = l ? Math.min(l.startOffset, n.size) : void 0, h = d === void 0 ? Math.max(0, n.size - o) : Math.max(0, d - i), m = await ts(t, e, h, i, d);
  if (!m) return null;
  let w;
  if (l) {
    const $ = Qe([...Qt(m.parser.messages), ...Qt(l.messages)]);
    w = {
      ...l,
      messages: $,
      droppedHead: m.startOffset > 0 || m.parser.droppedHead || l.droppedHead,
      startOffset: m.startOffset,
      loadedBytes: m.loadedBytes + l.loadedBytes,
      fileSize: n.size,
      metricsExact: !1
    }, !w.sessionId && m.parser.sessionId && (w.sessionId = m.parser.sessionId), !w.cwd && m.parser.cwd && (w.cwd = m.parser.cwd);
  } else
    w = Ze(m.parser, e, n.size, m.startOffset, m.loadedBytes), !w.sessionId && m.metadata?.sessionId && (w.sessionId = m.metadata.sessionId), !w.cwd && m.metadata?.cwd && (w.cwd = m.metadata.cwd);
  for (es(w, await qe(t, e)), j.set(c, { mtime: n.modified || 0, size: n.size, data: w }); j.size > Ge; ) j.delete(j.keys().next().value);
  return w;
}
function ss() {
  j.clear();
}
const Yt = {
  cwd: "",
  sessionFile: "",
  isRunning: !1,
  state: "inactive",
  summary: null
}, ns = 3e4, as = 3e3, Gt = 600, L = /* @__PURE__ */ new Set();
let D = null, R = Yt, It = "", yt = null, Pt = null, ot = null, Ft = null, Ht = "", Ct = 0, at = 0, W = null, $t = -1, Tt = "", X = !1, J = !1, it = null, Q = -1 / 0, Et = "";
function ue(t) {
  const e = t.summary;
  return [
    t.cwd,
    t.sessionFile,
    t.state,
    t.isRunning ? "1" : "0",
    e ? e.model : "",
    e ? e.provider : "",
    e ? e.thinkingLevel : "",
    e ? e.status : "",
    e ? e.totalTokens : "",
    e ? e.turns : "",
    e ? e.totalCost : ""
  ].join("\0");
}
function Jt() {
  if (typeof document < "u" && document.hidden) return !1;
  for (const t of L)
    if (!t.subscriber.visible || t.subscriber.visible()) return !0;
  return !1;
}
function de() {
  for (const t of L)
    if (!t.disposed)
      try {
        t.subscriber.listener?.(R);
      } catch {
      }
}
function zt() {
  yt !== null && (clearTimeout(yt), yt = null);
}
function os() {
  it !== null && (clearTimeout(it), it = null);
}
function Kt() {
  Ct += 1, Ft?.dispose(), Ft = null, Ht = "";
}
function te() {
  if (zt(), !D || L.size === 0 || W) return;
  const t = R.state === "starting" ? as : R.sessionFile ? ns : 0;
  if (!X && t === 0) return;
  const e = X ? J ? 0 : Math.max(0, Q + Gt - Date.now()) : Math.max(0, Q + t - Date.now());
  Jt() && (yt = setTimeout(() => {
    yt = null, tt(J);
  }, e));
}
function is() {
  const t = D;
  if (!t || L.size === 0) return;
  const e = R.sessionFile, s = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\")), n = s > 0 ? e.slice(0, s) : "";
  if (n === Ht || (Kt(), !n || typeof t.workspace.watch != "function")) return;
  Ht = n;
  const o = Ct, i = (l) => l.replace(/\\/g, "/");
  try {
    const l = t.workspace.watch(n, (c) => {
      D !== t || L.size === 0 || o !== Ct || c.type === "file_event" && (c.path && i(c.path) !== i(R.sessionFile) || (X = !0, W && (J = !0, it === null && Jt() && (it = setTimeout(() => {
        it = null, tt(!0);
      }, Gt))), tt(!1)));
    });
    Promise.resolve(l).then((c) => {
      if (D !== t || L.size === 0 || o !== Ct) {
        c?.dispose();
        return;
      }
      Ft = c;
    }).catch(() => {
    });
  } catch {
  }
}
function Bt(t) {
  !D || L.size === 0 || t === It || (at += 1, It = t, R = Yt, Et = ue(R), Q = -1 / 0, Kt(), X = !0, J = !0, de(), tt(!0));
}
function tt(t = !1) {
  const e = D;
  if (!e || L.size === 0) return Promise.resolve();
  const s = e.terminal.activePaneId() || "";
  if (s !== It)
    return Bt(s), W || Promise.resolve();
  if (X = !0, J ||= t, W && $t === at && Tt === s) return W;
  if (!Jt() || !J && Date.now() - Q < Gt)
    return te(), Promise.resolve();
  zt();
  const n = { paneId: s, cwd: e.terminal.activeCwd() || "" }, o = at;
  X = !1, J = !1;
  const i = Ne(e, n).then((l) => {
    if (D !== e || L.size === 0 || o !== at) return;
    const c = e.terminal.activePaneId() || "";
    if (c !== n.paneId) {
      Bt(c);
      return;
    }
    Q = Date.now();
    const y = ue(l);
    R = l, is(), y !== Et && (Et = y, de());
  }).catch(() => {
    D === e && o === at && (Q = Date.now());
  }).finally(() => {
    W === i && (W = null, $t = -1, Tt = "", te());
  });
  return W = i, $t = o, Tt = n.paneId, Promise.resolve();
}
function pe() {
  at += 1, zt(), os(), Pt?.dispose(), Pt = null, Kt(), ot && typeof document < "u" && document.removeEventListener("visibilitychange", ot), ot = null, D = null, W = null, $t = -1, Tt = "", X = !1, J = !1, R = Yt, It = "", Et = "", Q = -1 / 0;
}
function me(t, e) {
  D = t;
  const s = { subscriber: e, disposed: !1 };
  return L.add(s), !Pt && typeof t.terminal.onDidChangeActivePane == "function" && (Pt = t.terminal.onDidChangeActivePane((n) => {
    D !== t || L.size === 0 || Bt(n || t.terminal.activePaneId() || "");
  })), typeof document < "u" && !ot && (ot = () => {
    document.hidden ? zt() : tt(!0);
  }, document.addEventListener("visibilitychange", ot)), e.listener?.(R), tt(!0), {
    dispose() {
      s.disposed || (s.disposed = !0, L.delete(s), L.size === 0 && pe());
    }
  };
}
function xt() {
  return R;
}
function ls() {
  L.clear(), pe();
}
let ft = null, nt = null;
function rs(t) {
  return /^[A-Za-z]:[\\/]/.test(t) || t.includes("\\");
}
function lt(t, ...e) {
  const s = rs(t) ? "\\" : "/";
  return [t.replace(/[\\/]+$/, ""), ...e].join(s);
}
async function rt(t) {
  if (ft) return ft;
  if (nt) return nt;
  nt = (async () => {
    try {
      const s = await t.exec.run(["doctor"]);
      if (s.code === 0 && s.stdout.trim())
        return ft = JSON.parse(s.stdout.trim()), ft;
    } catch {
    }
    return null;
  })();
  const e = await nt;
  return nt = null, e;
}
function cs() {
  ft = null, nt = null;
}
const us = [
  { category: "verification", match: /\b(test|verify|prove|gate|benchmark|regression|audit)\b/ },
  { category: "diagnostics", match: /\b(diagnos|debug|triage|trace|investigat|root cause)\b/ },
  { category: "delivery", match: /\b(deploy|release|ship|publish|rollout|ci|pipeline|merge)\b/ },
  { category: "authoring", match: /\b(write|author|document|readme|spec|plan|design)\b/ }
];
let gt = [], Ut = 0;
const ds = 6e4;
function ps(t, e) {
  const s = `${t} ${e}`.toLowerCase();
  for (const n of us)
    if (n.match.test(s)) return n.category;
  return "general";
}
function ms(t) {
  const e = t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!e) return { name: "", description: "", body: t };
  let s = "", n = "";
  for (const o of e[1].split(/\r?\n/)) {
    const i = o.match(/^name:\s*(.+)$/);
    i && (s = i[1].trim().replace(/^['"]|['"]$/g, ""));
    const l = o.match(/^description:\s*(.+)$/);
    l && (n = l[1].trim().replace(/^['"]|['"]$/g, ""));
  }
  return { name: s, description: n, body: e[2] };
}
async function hs(t) {
  const e = await rt(t), s = [];
  return e?.ompHome ? (s.push({ label: "managed", path: lt(e.ompHome, "managed-skills") }), s.push({ label: "project", path: lt(e.ompHome, "skills") })) : (s.push({ label: "managed", path: "~/.omp/agent/managed-skills" }), s.push({ label: "project", path: "~/.omp/agent/skills" })), e?.home ? s.push({ label: "user", path: lt(e.home, ".agents", "skills") }) : s.push({ label: "user", path: "~/.agents/skills" }), s;
}
async function Vt(t, e = !1) {
  const s = Date.now();
  if (!e && gt.length && s - Ut < ds) return gt;
  const n = await hs(t), o = n[0]?.path.includes("\\") ? "\\" : "/", i = /* @__PURE__ */ new Map();
  for (const l of n) {
    let c;
    try {
      c = await t.workspace.readDir(l.path);
    } catch {
      continue;
    }
    for (const y of c.entries) {
      if (!y.is_dir) continue;
      const d = [l.path, y.name, "SKILL.md"].join(o);
      try {
        const h = await t.workspace.readFile(d);
        if (!h.content) continue;
        const { name: m, description: w, body: $ } = ms(h.content), x = m || y.name;
        if (i.has(x)) continue;
        i.set(x, {
          id: x,
          name: x,
          description: w || "No description provided.",
          category: ps(x, w),
          source: l.label,
          filePath: d,
          body: $
        });
      } catch {
      }
    }
  }
  return gt = [...i.values()].sort((l, c) => l.name.localeCompare(c.name)), Ut = s, gt;
}
function fs(t, e, s = "all") {
  const o = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return t.filter((i) => {
    if (s !== "all" && i.category !== s) return !1;
    if (!o.length) return !0;
    const l = `${i.name} ${i.description}`.toLowerCase();
    return o.every((c) => l.includes(c));
  });
}
function he(t, e) {
  const s = t.terminal.activePaneId();
  return s ? (t.terminal.send(s, `/skill ${e}
`), t.ui.notify(`Injected skill ${e}`, "info"), !0) : (t.ui.notify("No active terminal pane to inject into", "warn"), !1);
}
function gs() {
  gt = [], Ut = 0;
}
function ee(t, e) {
  const n = t.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean), l = `omp-${(n[n.length - 1] || "workspace").replace(/[^a-zA-Z0-9_-]+/g, "_").slice(0, 32) || "workspace"}`;
  return e ? `${l}-${e}` : l;
}
function fe(t) {
  return !t || t.isDefault || t.id === wt ? [] : [`--config=${t.configPath}`];
}
function vt(t) {
  return `'${t.replace(/'/g, "'\\''")}'`;
}
async function _t(t, e = {}) {
  const s = await rt(t), n = e.cwd || t.terminal.activeCwd() || s?.home || ".", o = e.target || "new-tab", i = fe(e.preset), l = e.preset && !e.preset.isDefault ? e.preset.id : "default", c = !!s?.tmux && s?.platform !== "win32", y = ["omp", ...i].map(vt).join(" "), d = `${y}; exec "$SHELL"`;
  if (o === "new-tab") {
    const x = Math.random().toString(36).slice(2, 10), U = ee(n, x), F = c ? ["tmux", "new-session", "-s", U, "-c", n, "sh", "-c", d] : ["omp", ...i], H = await t.terminal.createTerminalTab({
      cwd: n,
      argv: F,
      title: `OMP: ${l}`
    });
    return t.ui.notify(
      c ? `OMP started in tmux session ${U}` : `OMP started with profile ${l}`,
      "info"
    ), H;
  }
  const h = await t.terminal.splitTerminalPane({
    direction: o === "split-h" ? "horizontal" : "vertical",
    cwd: n
  });
  if (!h)
    return t.ui.notify("Split failed: no active terminal tab", "warn"), null;
  const m = h.replace(/[^a-zA-Z0-9_-]+/g, "").slice(0, 8) || Math.random().toString(36).slice(2, 10), w = ee(n, m), $ = c ? `tmux new-session -s ${vt(w)} -c ${vt(n)} sh -c ${vt(d)}` : y;
  return t.terminal.send(h, `${$}
`), t.ui.notify(`OMP started in a split pane with profile ${l}`, "info"), h;
}
async function vs(t, e) {
  const s = t.terminal.activePaneId();
  if (!s)
    return t.ui.notify("No active terminal pane to launch into", "warn"), !1;
  const o = ["omp", ...fe(e)].map(vt).join(" ");
  return t.terminal.send(s, `${o}
`), t.ui.notify(
    `Launching OMP with profile ${e && !e.isDefault ? e.id : "default"}`,
    "info"
  ), !0;
}
async function ge(t) {
  const e = await rt(t);
  if (e && !e.tmux) {
    t.ui.notify("Copy-mode needs tmux, which was not found on this host", "warn");
    return;
  }
  const s = t.terminal.activePaneId();
  if (!s) {
    t.ui.notify("No active terminal pane", "warn");
    return;
  }
  t.terminal.send(s, "["), t.ui.notify("Tmux copy-mode active. Scroll freely, press q to exit.", "info");
}
const wt = "default";
async function Lt(t) {
  const s = (await rt(t))?.ompHome || "~/.omp/agent", n = [
    {
      id: wt,
      label: "Default profile",
      fileName: "config.yml",
      configPath: lt(s, "config.yml"),
      isDefault: !0
    }
  ];
  try {
    const o = await t.workspace.readDir(s);
    for (const i of o.entries) {
      if (i.is_dir) continue;
      const l = i.name.match(/^config\.(.+)\.ya?ml$/);
      l && n.push({
        id: l[1],
        label: l[1],
        fileName: i.name,
        configPath: lt(s, i.name),
        isDefault: !1
      });
    }
  } catch {
  }
  return n.sort((o, i) => o.isDefault !== i.isDefault ? o.isDefault ? -1 : 1 : o.id.localeCompare(i.id)), n;
}
function se(t, e, s) {
  return e.map((n) => ({
    label: n.isDefault ? "Default profile" : n.id,
    detail: n.configPath,
    icon: "zap",
    action: () => {
      _t(t, { preset: n, target: s });
    }
  }));
}
const ys = { class: "omp-app" }, _s = { class: "omp-app__bar" }, ws = { class: "omp-app__brand" }, bs = { class: "omp-app__version" }, ks = {
  class: "omp-app__tabs",
  role: "tablist",
  "aria-label": "OMP Pilot sections"
}, Ss = ["aria-selected", "onClick"], Ms = {
  key: 0,
  class: "omp-app__badge"
}, Cs = { class: "omp-app__bar-actions" }, $s = ["value"], Ts = { class: "omp-app__body" }, xs = {
  key: 0,
  class: "omp-pane omp-pane--sessions"
}, Is = { class: "omp-sessions" }, Ps = { class: "omp-sessions__head" }, Es = { class: "omp-field omp-field--search" }, Ls = { class: "omp-toggle" }, zs = {
  class: "omp-sessions__list",
  role: "listbox",
  "aria-label": "OMP sessions"
}, As = {
  key: 0,
  class: "omp-hint"
}, Os = {
  key: 1,
  class: "omp-hint"
}, Ns = ["aria-selected", "onClick"], Ds = { class: "omp-session__title" }, Rs = { class: "omp-session__meta" }, Fs = { class: "omp-transcript" }, Hs = { class: "omp-transcript__head" }, Bs = { class: "omp-transcript__meta" }, Us = { class: "omp-tag" }, Vs = { class: "omp-tag" }, js = { class: "omp-tag omp-tag--cost" }, Ws = { class: "omp-tag" }, Ys = { class: "omp-transcript__tools" }, Gs = { class: "omp-field omp-field--search" }, Js = {
  key: 0,
  class: "omp-banner omp-banner--action"
}, Ks = ["disabled"], qs = { class: "omp-turns" }, Zs = {
  key: 0,
  class: "omp-hint"
}, Qs = {
  key: 1,
  class: "omp-hint"
}, Xs = { class: "omp-turn__head" }, tn = { class: "omp-turn__role" }, en = { class: "omp-turn__time" }, sn = {
  key: 0,
  class: "omp-fold"
}, nn = { class: "omp-code" }, an = {
  key: 1,
  class: "omp-turn__text"
}, on = {
  key: 2,
  class: "omp-turn__images"
}, ln = ["onClick"], rn = ["src"], cn = { class: "omp-fold__name" }, un = {
  key: 0,
  class: "omp-fold__intent"
}, dn = { class: "omp-fold__state" }, pn = { class: "omp-code" }, mn = { class: "omp-code" }, hn = {
  key: 1,
  class: "omp-empty"
}, fn = {
  key: 1,
  class: "omp-pane omp-pane--skills"
}, gn = { class: "omp-skills__head" }, vn = { class: "omp-field omp-field--search omp-field--grow" }, yn = { class: "omp-chips" }, _n = ["onClick"], wn = { class: "omp-skills__body" }, bn = { class: "omp-skills__grid" }, kn = {
  key: 0,
  class: "omp-hint"
}, Sn = {
  key: 1,
  class: "omp-hint"
}, Mn = ["onClick"], Cn = { class: "omp-skill__title" }, $n = { class: "omp-skill__desc" }, Tn = { class: "omp-skill__tags" }, xn = { class: "omp-chip omp-chip--tiny" }, In = { class: "omp-chip omp-chip--tiny" }, Pn = {
  key: 0,
  class: "omp-skill-detail"
}, En = { class: "omp-skill-detail__desc" }, Ln = { class: "omp-code omp-code--tall" }, zn = {
  key: 2,
  class: "omp-pane omp-pane--profiles"
}, An = { class: "omp-profiles__grid" }, On = { class: "omp-profile__icon" }, Nn = { class: "omp-profile__actions" }, Dn = ["onClick"], Rn = ["onClick"], Fn = ["onClick"], Hn = ["src"], Bn = 6 * 1024 * 1024, Mt = 200, Un = /* @__PURE__ */ jt({
  __name: "MainView",
  props: {
    api: {}
  },
  setup(t) {
    const e = t, s = "1.1.2", n = ["all", "verification", "diagnostics", "delivery", "authoring", "general"], o = C("sessions"), i = C(""), l = C([]), c = C(!0), y = C(""), d = C(!0), h = C(""), m = C(null), w = C(!1), $ = C(!1), x = C(Mt), U = C(""), F = C(null);
    let H = 0;
    const O = C([]), Y = C(!0), ct = C(""), ut = C("all"), z = C(null), K = C([]), et = C(wt), At = P(() => [
      { id: "sessions", label: "Sessions", icon: "message-square", badge: l.value.length },
      { id: "skills", label: "Skills", icon: "book", badge: O.value.length },
      { id: "profiles", label: "Profiles", icon: "zap", badge: K.value.length }
    ]), kt = P(() => {
      const b = y.value.trim().toLowerCase();
      return b ? l.value.filter((u) => u.path.toLowerCase().includes(b)) : l.value;
    }), dt = P(() => {
      if (!m.value) return [];
      const b = U.value.trim().toLowerCase();
      return b ? m.value.messages.filter((u) => Ve(u).includes(b)) : m.value.messages;
    }), St = P(() => {
      const b = dt.value;
      return b.length > x.value ? b.slice(b.length - x.value) : b;
    }), pt = P(() => Math.max(0, dt.value.length - St.value.length)), M = P(() => fs(O.value, ct.value, ut.value)), _ = P(
      () => K.value.find((b) => b.id === et.value) || null
    );
    function B(b) {
      return b === "user" ? "terminal" : b === "assistant" ? "bot" : "code";
    }
    function q(b) {
      return b === "user" ? "You" : b === "assistant" ? "Agent" : "Tool";
    }
    async function Ot() {
      c.value = !0;
      try {
        if (!i.value) {
          const u = await rt(e.api);
          i.value = u?.ompHome ? lt(u.ompHome, "sessions") : "~/.omp/agent/sessions";
        }
        let b;
        if (d.value) {
          const u = xt().sessionFile;
          if (!u) {
            l.value = [], h.value = "", m.value = null;
            return;
          }
          const r = u.replace(/\\/g, "/").split("/");
          b = r[r.length - 2];
        }
        l.value = await He(e.api, i.value, b), l.value.length && !l.value.some((u) => u.path === h.value) && await qt(l.value[0].path);
      } finally {
        c.value = !1;
      }
    }
    async function qt(b) {
      const u = ++H;
      h.value = b, x.value = Mt, w.value = !0;
      try {
        const r = await Xt(e.api, b);
        u === H && h.value === b && (m.value = r);
      } finally {
        u === H && (w.value = !1);
      }
    }
    async function ye() {
      const b = m.value, u = H;
      if (!(!b || b.startOffset <= 0 || $.value)) {
        $.value = !0;
        try {
          const r = await Xt(e.api, b.filePath, {
            historyBytes: Bn,
            before: b
          });
          u === H && m.value === b && h.value === b.filePath && (m.value = r);
        } finally {
          u === H && ($.value = !1);
        }
      }
    }
    async function _e() {
      Y.value = !0;
      try {
        O.value = await Vt(e.api), !z.value && O.value.length && (z.value = O.value[0]);
      } finally {
        Y.value = !1;
      }
    }
    async function we() {
      Y.value = !0;
      try {
        O.value = await Vt(e.api, !0), !z.value && O.value.length && (z.value = O.value[0]);
      } finally {
        Y.value = !1;
      }
    }
    function be(b) {
      he(e.api, b);
    }
    async function Nt(b, u) {
      await _t(e.api, { preset: b, target: u });
    }
    async function ke() {
      await _t(e.api, { preset: _.value, target: "new-tab" });
    }
    async function Se() {
      m.value && await _t(e.api, {
        preset: _.value,
        target: "new-tab",
        cwd: m.value.cwd || void 0
      });
    }
    async function Me() {
      if (!m.value) return;
      const b = m.value.messages.map((u) => `### ${q(u.role)}

${u.text}
`).join(`
---

`);
      try {
        await navigator.clipboard.writeText(b), e.api.ui.notify("Transcript copied to the clipboard", "info");
      } catch {
        e.api.ui.notify("The browser refused clipboard access", "warn");
      }
    }
    return re(async () => {
      await Promise.all([
        Lt(e.api).then((b) => {
          K.value = b;
        }),
        Ot(),
        _e()
      ]);
    }), (b, u) => (f(), v("div", ys, [
      a("header", _s, [
        a("div", ws, [
          k(S, {
            name: "bot",
            size: 18,
            class: "omp-app__brand-icon"
          }),
          u[10] || (u[10] = a("span", { class: "omp-app__brand-name" }, "OMP Pilot", -1)),
          a("span", bs, "v" + g(Le(s)), 1)
        ]),
        a("nav", ks, [
          (f(!0), v(E, null, N(At.value, (r) => (f(), v("button", {
            key: r.id,
            type: "button",
            role: "tab",
            class: A(["omp-app__tab", { "is-active": o.value === r.id }]),
            "aria-selected": o.value === r.id,
            onClick: (T) => o.value = r.id
          }, [
            k(S, {
              name: r.icon,
              size: 14
            }, null, 8, ["name"]),
            a("span", null, g(r.label), 1),
            r.badge ? (f(), v("span", Ms, g(r.badge), 1)) : I("", !0)
          ], 10, Ss))), 128))
        ]),
        a("div", Cs, [
          Z(a("select", {
            "onUpdate:modelValue": u[0] || (u[0] = (r) => et.value = r),
            class: "omp-field omp-field--compact",
            "aria-label": "Launch profile"
          }, [
            (f(!0), v(E, null, N(K.value, (r) => (f(), v("option", {
              key: r.id,
              value: r.id
            }, g(r.label), 9, $s))), 128))
          ], 512), [
            [ce, et.value]
          ]),
          a("button", {
            type: "button",
            class: "omp-btn omp-btn--primary",
            onClick: ke
          }, [
            k(S, {
              name: "play",
              size: 13
            }),
            u[11] || (u[11] = a("span", null, "New OMP tab", -1))
          ])
        ])
      ]),
      a("main", Ts, [
        o.value === "sessions" ? (f(), v("section", xs, [
          a("aside", Is, [
            a("div", Ps, [
              a("div", Es, [
                k(S, {
                  name: "search",
                  size: 13
                }),
                Z(a("input", {
                  "onUpdate:modelValue": u[1] || (u[1] = (r) => y.value = r),
                  type: "search",
                  placeholder: "Filter sessions",
                  "aria-label": "Filter sessions"
                }, null, 512), [
                  [Dt, y.value]
                ])
              ]),
              a("button", {
                type: "button",
                class: A(["omp-icon-btn", { "is-busy": c.value }]),
                title: "Reload session list",
                onClick: Ot
              }, [
                k(S, {
                  name: "refresh",
                  size: 13
                })
              ], 2)
            ]),
            a("label", Ls, [
              Z(a("input", {
                "onUpdate:modelValue": u[2] || (u[2] = (r) => d.value = r),
                type: "checkbox",
                onChange: Ot
              }, null, 544), [
                [xe, d.value]
              ]),
              u[12] || (u[12] = a("span", null, "This workspace only", -1))
            ]),
            a("div", zs, [
              c.value ? (f(), v("p", As, "Loading sessions...")) : kt.value.length ? I("", !0) : (f(), v("p", Os, " No transcripts found. Start OMP in a terminal tab and it will show up here. ")),
              (f(!0), v(E, null, N(kt.value, (r) => (f(), v("button", {
                key: r.path,
                type: "button",
                role: "option",
                class: A(["omp-session", { "is-active": h.value === r.path }]),
                "aria-selected": h.value === r.path,
                onClick: (T) => qt(r.path)
              }, [
                a("span", Ds, [
                  k(S, {
                    name: "file-text",
                    size: 12
                  }),
                  G(" " + g(r.displayName), 1)
                ]),
                a("span", Rs, [
                  a("span", null, g(r.workspace), 1),
                  a("span", null, g(r.ageLabel), 1)
                ])
              ], 10, Ns))), 128))
            ])
          ]),
          a("div", Fs, [
            m.value ? (f(), v(E, { key: 0 }, [
              a("header", Hs, [
                a("div", Bs, [
                  a("span", Us, [
                    k(S, {
                      name: "cpu",
                      size: 12
                    }),
                    G(g(m.value.model), 1)
                  ]),
                  a("span", Vs, [
                    k(S, {
                      name: "layers",
                      size: 12
                    }),
                    G(g(m.value.totalTokens.toLocaleString()) + " tok", 1)
                  ]),
                  a("span", js, [
                    k(S, {
                      name: "activity",
                      size: 12
                    }),
                    G(g(m.value.totalCost.toFixed(3)) + " USD" + g(m.value.metricsExact ? "" : " loaded"), 1)
                  ]),
                  a("span", Ws, [
                    k(S, {
                      name: "message-square",
                      size: 12
                    }),
                    G(g(m.value.messages.length) + " entries", 1)
                  ])
                ]),
                a("div", Ys, [
                  a("div", Gs, [
                    k(S, {
                      name: "search",
                      size: 12
                    }),
                    Z(a("input", {
                      "onUpdate:modelValue": u[3] || (u[3] = (r) => U.value = r),
                      type: "search",
                      placeholder: "Filter turns",
                      "aria-label": "Filter turns"
                    }, null, 512), [
                      [Dt, U.value]
                    ])
                  ]),
                  a("button", {
                    type: "button",
                    class: "omp-btn",
                    title: "Copy the transcript as Markdown",
                    onClick: Me
                  }, [
                    k(S, {
                      name: "copy",
                      size: 12
                    }),
                    u[13] || (u[13] = a("span", null, "Copy", -1))
                  ]),
                  a("button", {
                    type: "button",
                    class: "omp-btn",
                    title: "Open this workspace in a new OMP tab",
                    onClick: Se
                  }, [
                    k(S, {
                      name: "external-link",
                      size: 12
                    }),
                    u[14] || (u[14] = a("span", null, "Open", -1))
                  ])
                ])
              ]),
              m.value.droppedHead ? (f(), v("div", Js, [
                a("span", null, " Showing the last " + g((m.value.loadedBytes / 1048576).toFixed(1)) + " MB of " + g((m.value.fileSize / 1048576).toFixed(1)) + " MB (" + g(m.value.turns) + " turns" + g(m.value.metricsExact ? "" : " in loaded window") + "). ", 1),
                a("button", {
                  type: "button",
                  class: "omp-btn",
                  disabled: $.value,
                  onClick: ye
                }, [
                  k(S, {
                    name: "history",
                    size: 12
                  }),
                  a("span", null, g($.value ? "Loading" : "Load earlier"), 1)
                ], 8, Ks)
              ])) : I("", !0),
              a("div", qs, [
                w.value ? (f(), v("p", Zs, "Reading transcript...")) : dt.value.length ? I("", !0) : (f(), v("p", Qs, "No turn matches that filter.")),
                pt.value ? (f(), v("button", {
                  key: 2,
                  type: "button",
                  class: "omp-btn omp-btn--wide",
                  onClick: u[4] || (u[4] = (r) => x.value += Mt)
                }, [
                  k(S, {
                    name: "chevron-up",
                    size: 12
                  }),
                  a("span", null, "Show " + g(Math.min(pt.value, Mt)) + " earlier turns (" + g(pt.value) + " hidden)", 1)
                ])) : I("", !0),
                (f(!0), v(E, null, N(St.value, (r) => (f(), v("article", {
                  key: r.id,
                  class: A(["omp-turn", `omp-turn--${r.role}`])
                }, [
                  a("header", Xs, [
                    a("span", tn, [
                      k(S, {
                        name: B(r.role),
                        size: 13
                      }, null, 8, ["name"]),
                      G(" " + g(q(r.role)), 1)
                    ]),
                    a("span", en, g(r.timeLabel), 1)
                  ]),
                  r.thinking ? (f(), v("details", sn, [
                    u[15] || (u[15] = a("summary", null, "Reasoning", -1)),
                    a("pre", nn, g(r.thinking), 1)
                  ])) : I("", !0),
                  r.text ? (f(), v("pre", an, g(r.text), 1)) : I("", !0),
                  r.images.length ? (f(), v("div", on, [
                    (f(!0), v(E, null, N(r.images, (T, Ce) => (f(), v("button", {
                      key: Ce,
                      type: "button",
                      class: "omp-thumb",
                      onClick: (La) => F.value = T
                    }, [
                      a("img", {
                        src: T,
                        alt: "Attachment",
                        loading: "lazy"
                      }, null, 8, rn)
                    ], 8, ln))), 128))
                  ])) : I("", !0),
                  (f(!0), v(E, null, N(r.toolCalls || [], (T) => (f(), v("details", {
                    key: T.id,
                    class: A(["omp-fold omp-fold--tool", { "is-error": T.isError }])
                  }, [
                    a("summary", null, [
                      a("span", cn, g(T.name), 1),
                      T.intent ? (f(), v("span", un, g(T.intent), 1)) : I("", !0),
                      a("span", dn, g(T.isError ? "failed" : "ok"), 1)
                    ]),
                    u[17] || (u[17] = a("p", { class: "omp-fold__label" }, "Arguments", -1)),
                    a("pre", pn, g(T.argumentsLabel), 1),
                    T.result ? (f(), v(E, { key: 0 }, [
                      u[16] || (u[16] = a("p", { class: "omp-fold__label" }, "Result", -1)),
                      a("pre", mn, g(T.result), 1)
                    ], 64)) : I("", !0)
                  ], 2))), 128))
                ], 2))), 128))
              ])
            ], 64)) : (f(), v("div", hn, [
              k(S, {
                name: "history",
                size: 28
              }),
              u[18] || (u[18] = a("p", null, "Select a session on the left to read its transcript.", -1))
            ]))
          ])
        ])) : I("", !0),
        o.value === "skills" ? (f(), v("section", fn, [
          a("div", gn, [
            a("div", vn, [
              k(S, {
                name: "search",
                size: 14
              }),
              Z(a("input", {
                "onUpdate:modelValue": u[5] || (u[5] = (r) => ct.value = r),
                type: "search",
                placeholder: "Search skills by name or intent",
                "aria-label": "Search skills"
              }, null, 512), [
                [Dt, ct.value]
              ])
            ]),
            a("button", {
              type: "button",
              class: "omp-icon-btn",
              title: "Reload skills",
              onClick: we
            }, [
              k(S, {
                name: "refresh",
                size: 13
              })
            ])
          ]),
          a("div", yn, [
            (f(), v(E, null, N(n, (r) => a("button", {
              key: r,
              type: "button",
              class: A(["omp-chip", { "is-active": ut.value === r }]),
              onClick: (T) => ut.value = r
            }, g(r), 11, _n)), 64))
          ]),
          a("div", wn, [
            a("div", bn, [
              Y.value ? (f(), v("p", kn, "Indexing skills...")) : M.value.length ? I("", !0) : (f(), v("p", Sn, "No skill matches that search.")),
              (f(!0), v(E, null, N(M.value, (r) => (f(), v("button", {
                key: r.id,
                type: "button",
                class: A(["omp-skill", { "is-active": z.value?.id === r.id }]),
                onClick: (T) => z.value = r
              }, [
                a("span", Cn, [
                  k(S, {
                    name: "book",
                    size: 13
                  }),
                  G(" " + g(r.name), 1)
                ]),
                a("span", $n, g(r.description), 1),
                a("span", Tn, [
                  a("span", xn, g(r.category), 1),
                  a("span", In, g(r.source), 1)
                ])
              ], 10, Mn))), 128))
            ]),
            z.value ? (f(), v("aside", Pn, [
              a("header", null, [
                a("h3", null, g(z.value.name), 1),
                a("button", {
                  type: "button",
                  class: "omp-btn omp-btn--primary",
                  onClick: u[6] || (u[6] = (r) => be(z.value.name))
                }, [
                  k(S, {
                    name: "terminal",
                    size: 12
                  }),
                  u[19] || (u[19] = a("span", null, "Inject", -1))
                ])
              ]),
              a("p", En, g(z.value.description), 1),
              a("pre", Ln, g(z.value.body || "This skill has no body."), 1)
            ])) : I("", !0)
          ])
        ])) : I("", !0),
        o.value === "profiles" ? (f(), v("section", zn, [
          u[23] || (u[23] = a("header", { class: "omp-profiles__head" }, [
            a("h2", null, "Profiles"),
            a("p", null, "Discovered from the OMP agent directory. Launch one into a new tab or a split pane.")
          ], -1)),
          a("div", An, [
            (f(!0), v(E, null, N(K.value, (r) => (f(), v("article", {
              key: r.id,
              class: A(["omp-profile", { "is-default": r.isDefault }])
            }, [
              a("header", null, [
                a("span", On, [
                  k(S, {
                    name: "zap",
                    size: 16
                  })
                ]),
                a("div", null, [
                  a("h3", null, g(r.label), 1),
                  a("code", null, g(r.fileName), 1)
                ])
              ]),
              a("div", Nn, [
                a("button", {
                  type: "button",
                  class: "omp-btn omp-btn--primary",
                  onClick: (T) => Nt(r, "new-tab")
                }, [
                  k(S, {
                    name: "play",
                    size: 12
                  }),
                  u[20] || (u[20] = a("span", null, "New tab", -1))
                ], 8, Dn),
                a("button", {
                  type: "button",
                  class: "omp-btn",
                  onClick: (T) => Nt(r, "split-v")
                }, [
                  k(S, {
                    name: "split-vertical",
                    size: 12
                  }),
                  u[21] || (u[21] = a("span", null, "Split right", -1))
                ], 8, Rn),
                a("button", {
                  type: "button",
                  class: "omp-btn",
                  onClick: (T) => Nt(r, "split-h")
                }, [
                  k(S, {
                    name: "split-horizontal",
                    size: 12
                  }),
                  u[22] || (u[22] = a("span", null, "Split down", -1))
                ], 8, Fn)
              ])
            ], 2))), 128))
          ])
        ])) : I("", !0)
      ]),
      F.value ? (f(), v("div", {
        key: 0,
        class: "omp-lightbox",
        role: "dialog",
        "aria-modal": "true",
        onClick: u[9] || (u[9] = (r) => F.value = null)
      }, [
        a("button", {
          type: "button",
          class: "omp-lightbox__close",
          "aria-label": "Close image",
          onClick: u[7] || (u[7] = (r) => F.value = null)
        }, [
          k(S, {
            name: "x",
            size: 18
          })
        ]),
        a("img", {
          src: F.value,
          alt: "Attachment preview",
          onClick: u[8] || (u[8] = st(() => {
          }, ["stop"]))
        }, null, 8, Hn)
      ])) : I("", !0)
    ]));
  }
}), Vn = /* @__PURE__ */ Wt(Un, [["__scopeId", "data-v-1254bca8"]]), jn = { class: "omp-hud__bar" }, Wn = {
  class: "omp-hud__grip",
  "data-drag-handle": "",
  title: "Drag to move"
}, Yn = ["title"], Gn = {
  key: 0,
  class: "omp-hud__peek"
}, Jn = ["title", "aria-expanded"], Kn = { class: "omp-hud__body" }, qn = { class: "omp-hud__row" }, Zn = ["title"], Qn = { class: "omp-hud__chip-text" }, Xn = ["title"], ta = { class: "omp-hud__chip-text" }, ea = { class: "omp-hud__row" }, sa = ["title"], na = { class: "omp-hud__chip-text" }, aa = ["title"], oa = { class: "omp-hud__chip-text" }, ia = { class: "omp-hud__status" }, la = { class: "omp-hud__turns" }, ra = { class: "omp-hud__actions" }, ca = ["disabled", "title"], ua = {
  key: 1,
  class: "omp-hud__placeholder"
}, da = { class: "omp-hud__placeholder-title" }, pa = { class: "omp-hud__placeholder-note" }, ma = { class: "omp-hud__placeholder" }, ha = { class: "omp-hud__launch" }, fa = ["disabled"], ga = ["value"], va = ["disabled"], ne = "dinotty-omp.preset", ae = "dinotty-omp.presets", ya = 12e3, _a = /* @__PURE__ */ jt({
  __name: "MiniHudOverlay",
  props: {
    api: {},
    dragging: { type: Boolean }
  },
  setup(t) {
    const e = t, s = C(!1), n = C(!1), o = C(!0), i = C(!0), l = C([]), c = C(wt), d = C({ cwd: "", sessionFile: "", isRunning: !1, state: "inactive", summary: null }), h = C(!1);
    let m = 0, w, $ = !1;
    const x = [], U = P(
      () => l.value.find((M) => M.id === c.value) || null
    ), F = P(() => {
      const _ = (d.value.summary?.model || "").split("/").pop() || "omp";
      return _.length > 18 ? `${_.slice(0, 17)}...` : _;
    }), H = P(() => {
      const M = d.value.summary?.totalTokens || 0;
      return M >= 1e6 ? `${(M / 1e6).toFixed(1)}M tok` : M >= 1e3 ? `${Math.round(M / 1e3)}k tok` : `${M} tok`;
    }), O = P(() => {
      if (d.value.state === "inactive") return "Inactive";
      if (d.value.state === "starting") return "Starting";
      switch (d.value.summary?.status) {
        case "running_tool":
          return "Running a tool";
        case "thinking":
          return "Thinking";
        case "error":
          return "Last tool failed";
        default:
          return "Waiting for you";
      }
    }), Y = P(() => d.value.state === "inactive" ? "is-inactive" : d.value.state === "starting" ? "is-starting" : `is-${d.value.summary?.status || "idle"}`), ct = P(() => {
      const M = d.value.cwd;
      if (!M) return "this pane";
      const _ = M.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean);
      return _[_.length - 1] || M;
    }), ut = P(() => d.value.state === "inactive" ? "Inactive" : d.value.state === "starting" ? "Starting" : `${F.value} · ${d.value.summary?.totalCost.toFixed(2) || "0.00"} USD`);
    function z() {
      try {
        const M = localStorage.getItem(ae), _ = M ? JSON.parse(M) : [];
        return Array.isArray(_) ? _ : [];
      } catch {
        return [];
      }
    }
    function K(M) {
      try {
        localStorage.setItem(ae, JSON.stringify(M));
      } catch {
      }
    }
    function et() {
      try {
        localStorage.setItem(ne, c.value);
      } catch {
      }
    }
    function At(M) {
      if (!$) {
        if (h.value = !0, M.state === "inactive" && n.value && Date.now() < m) {
          d.value = { ...M, state: "starting" };
          return;
        }
        (M.state !== "inactive" || Date.now() >= m) && (n.value = !1), d.value = M;
      }
    }
    function kt() {
      e.api.open();
    }
    async function dt() {
      await ge(e.api);
    }
    async function St() {
      await _t(e.api, { preset: U.value, target: "split-v" });
    }
    async function pt() {
      !await vs(e.api, U.value) || $ || (et(), n.value = !0, d.value = { ...d.value, state: "starting", summary: null }, m = Date.now() + ya, w !== void 0 && window.clearTimeout(w), w = window.setTimeout(() => {
        w = void 0, $ || tt(!0);
      }, 600));
    }
    return re(async () => {
      try {
        const q = localStorage.getItem(ne);
        q && (c.value = q);
      } catch {
      }
      const M = z();
      M.length && (l.value = M, o.value = !1), x.push(
        me(e.api, {
          listener: At,
          visible: () => !s.value
        })
      );
      const _ = await rt(e.api);
      if ($) return;
      i.value = _ ? _.tmux : !0;
      const B = await Lt(e.api);
      $ || (l.value = B, K(l.value), l.value.some((q) => q.id === c.value) || (c.value = wt), o.value = !1);
    }), $e(() => {
      $ = !0, w !== void 0 && (window.clearTimeout(w), w = void 0);
      for (const M of x)
        try {
          M.dispose();
        } catch {
        }
      x.length = 0;
    }), (M, _) => (f(), v("section", {
      class: A(["omp-hud", [`is-${d.value.state}`, { "is-collapsed": s.value, "is-dragging": t.dragging }]]),
      role: "status",
      "aria-live": "polite"
    }, [
      a("header", jn, [
        a("div", Wn, [
          k(S, {
            name: "bot",
            size: 15,
            class: "omp-hud__logo"
          }),
          _[6] || (_[6] = a("span", { class: "omp-hud__name" }, "OMP", -1)),
          a("span", {
            class: A(["omp-hud__beacon", Y.value]),
            title: O.value
          }, null, 10, Yn),
          s.value ? (f(), v("span", Gn, g(ut.value), 1)) : I("", !0)
        ]),
        a("div", {
          class: "omp-hud__tools",
          onPointerdown: _[3] || (_[3] = st(() => {
          }, ["stop"])),
          onMousedown: _[4] || (_[4] = st(() => {
          }, ["stop"]))
        }, [
          a("button", {
            type: "button",
            class: "omp-hud__icon",
            title: s.value ? "Expand panel" : "Collapse panel",
            "aria-expanded": !s.value,
            onPointerdown: _[0] || (_[0] = st(() => {
            }, ["stop"])),
            onMousedown: _[1] || (_[1] = st(() => {
            }, ["stop"])),
            onClick: _[2] || (_[2] = st((B) => s.value = !s.value, ["stop"]))
          }, [
            k(S, {
              name: s.value ? "chevron-down" : "chevron-up",
              size: 13
            }, null, 8, ["name"])
          ], 40, Jn)
        ], 32)
      ]),
      Z(a("div", Kn, [
        d.value.state === "running" && d.value.summary ? (f(), v(E, { key: 0 }, [
          a("div", qn, [
            a("span", {
              class: "omp-hud__chip",
              title: `Model: ${d.value.summary.model}`
            }, [
              k(S, {
                name: "cpu",
                size: 12
              }),
              a("span", Qn, g(F.value), 1)
            ], 8, Zn),
            a("span", {
              class: "omp-hud__chip",
              title: `Thinking level: ${d.value.summary.thinkingLevel}`
            }, [
              k(S, {
                name: "zap",
                size: 12
              }),
              a("span", ta, g(d.value.summary.thinkingLevel), 1)
            ], 8, Xn)
          ]),
          a("div", ea, [
            a("span", {
              class: "omp-hud__chip",
              title: `${d.value.summary.totalTokens.toLocaleString()} context tokens`
            }, [
              k(S, {
                name: "layers",
                size: 12
              }),
              a("span", na, g(H.value), 1)
            ], 8, sa),
            a("span", {
              class: "omp-hud__chip is-cost",
              title: `Session cost ${d.value.summary.totalCost.toFixed(4)} USD`
            }, [
              k(S, {
                name: "activity",
                size: 12
              }),
              a("span", oa, g(d.value.summary.totalCost.toFixed(2)) + " USD", 1)
            ], 8, aa)
          ]),
          a("p", ia, [
            a("span", {
              class: A(["omp-hud__status-dot", Y.value])
            }, null, 2),
            G(" " + g(O.value) + " ", 1),
            a("span", la, g(d.value.summary.turns) + " turns", 1)
          ]),
          a("div", ra, [
            a("button", {
              type: "button",
              class: "omp-hud__action",
              title: "Open the session explorer",
              onClick: kt
            }, [
              k(S, {
                name: "history",
                size: 14
              }),
              _[7] || (_[7] = a("span", null, "Explorer", -1))
            ]),
            a("button", {
              type: "button",
              class: "omp-hud__action",
              disabled: !i.value,
              title: i.value ? "Enter tmux copy-mode to scroll history" : "tmux was not found on this host",
              onClick: dt
            }, [
              k(S, {
                name: "terminal",
                size: 14
              }),
              _[8] || (_[8] = a("span", null, "Scroll", -1))
            ], 8, ca),
            a("button", {
              type: "button",
              class: "omp-hud__action",
              title: "Open a split pane running OMP",
              onClick: St
            }, [
              k(S, {
                name: "split-vertical",
                size: 14
              }),
              _[9] || (_[9] = a("span", null, "Split", -1))
            ])
          ])
        ], 64)) : d.value.state === "starting" || !h.value ? (f(), v("div", ua, [
          _[10] || (_[10] = a("span", {
            class: "omp-hud__spinner",
            "aria-hidden": "true"
          }, null, -1)),
          a("p", da, g(h.value ? "Starting OMP" : "Reading session"), 1),
          a("p", pa, "Waiting for the first turn in " + g(ct.value), 1)
        ])) : (f(), v(E, { key: 2 }, [
          a("div", ma, [
            k(S, {
              name: "info",
              size: 18,
              class: "omp-hud__placeholder-icon"
            }),
            _[11] || (_[11] = a("p", { class: "omp-hud__placeholder-title" }, "No OMP session here", -1)),
            _[12] || (_[12] = a("p", { class: "omp-hud__placeholder-note" }, "Pick a profile and start one in this pane.", -1))
          ]),
          a("div", ha, [
            _[13] || (_[13] = a("label", {
              class: "omp-hud__label",
              for: "omp-hud-preset"
            }, "Profile", -1)),
            Z(a("select", {
              id: "omp-hud-preset",
              "onUpdate:modelValue": _[5] || (_[5] = (B) => c.value = B),
              class: "omp-hud__select",
              disabled: o.value,
              onChange: et
            }, [
              (f(!0), v(E, null, N(l.value, (B) => (f(), v("option", {
                key: B.id,
                value: B.id
              }, g(B.label), 9, ga))), 128))
            ], 40, fa), [
              [ce, c.value]
            ]),
            a("button", {
              type: "button",
              class: "omp-hud__launch-btn",
              disabled: o.value || n.value,
              title: "Run OMP in the active pane",
              onClick: pt
            }, [
              k(S, {
                name: "play",
                size: 12
              }),
              a("span", null, g(n.value ? "Starting" : "Launch"), 1)
            ], 8, va)
          ])
        ], 64))
      ], 512), [
        [Ie, !s.value]
      ])
    ], 2));
  }
}), wa = /* @__PURE__ */ Wt(_a, [["__scopeId", "data-v-29405565"]]);
function ba(t) {
  const e = me(t, {});
  return {
    series: {
      id: "dinotty-omp:session",
      label: "OMP session cost",
      scale: "auto",
      statusIcon: "Bot",
      defaultVisible: !0,
      current: () => {
        const n = xt().summary;
        return n ? n.totalCost : null;
      },
      statusText: () => {
        const n = xt();
        if (n.state === "inactive") return null;
        const o = n.summary;
        if (n.state === "starting" || !o) return "OMP: starting";
        const i = o.model.split("/").pop() || "omp";
        return `OMP ${i.length > 16 ? `${i.slice(0, 15)}...` : i} ${o.totalCost.toFixed(2)} USD`;
      },
      detail: () => {
        const n = xt();
        if (n.state === "inactive")
          return [{ label: "State", value: "No OMP session in this tab" }];
        const o = n.summary;
        return o ? [
          { label: "Model", value: o.model },
          { label: "Provider", value: o.provider },
          { label: "Thinking", value: o.thinkingLevel },
          { label: "Status", value: o.status.replace("_", " ") },
          { label: "Context tokens", value: o.totalTokens.toLocaleString() },
          { label: "Assistant turns", value: String(o.turns) },
          { label: "Session cost", value: `${o.totalCost.toFixed(4)} USD` },
          { label: "Workspace", value: n.cwd || "unknown" }
        ] : [
          { label: "State", value: "Starting" },
          { label: "Workspace", value: n.cwd || "unknown" }
        ];
      }
    },
    dispose() {
      e.dispose();
    }
  };
}
const ka = 244, mt = 12, Sa = 560;
function Ma() {
  return typeof window > "u" || typeof window.innerWidth != "number" ? 1280 : Number.isFinite(window.innerWidth) && window.innerWidth > 0 ? window.innerWidth : 1280;
}
function Ca() {
  const t = Ma();
  return t < Sa ? { x: mt, y: mt } : { x: Math.max(mt, t - ka - mt), y: mt };
}
const ve = "dinotty:overlay-pos:dinotty-omp:dinotty-omp:hud", oe = "dinotty-omp:overlay-pos-migrated:v1", $a = 44, Ta = 120, ie = 244, le = 12;
function xa() {
  try {
    const t = localStorage.getItem(ve);
    if (!t) return null;
    const e = JSON.parse(t);
    return typeof e?.x != "number" || typeof e?.y != "number" || !Number.isFinite(e.x) || !Number.isFinite(e.y) ? null : { x: e.x, y: e.y };
  } catch {
    return null;
  }
}
function Ia(t, e, s) {
  return t.x < 0 || t.y < 0 || t.x > e || t.y > s ? !0 : t.y >= $a ? !1 : t.x >= e - ie - le && t.x <= e - ie + le || t.x > e - Ta;
}
function Pa(t) {
  if (typeof window > "u") return;
  const e = window.innerWidth, s = window.innerHeight;
  if (!Number.isFinite(e) || !Number.isFinite(s) || e <= 0 || s <= 0 || e >= 560) return;
  try {
    if (localStorage.getItem(oe)) return;
  } catch {
    return;
  }
  const n = xa();
  if (!(!n || !Ia(n, e, s)))
    try {
      localStorage.setItem(ve, JSON.stringify(t)), localStorage.setItem(oe, "1");
    } catch {
    }
}
let bt = [];
function ht(t) {
  bt.push(() => t.dispose());
}
function za(t) {
  bt = [], ht(
    t.commands.register("omp.open-session-viewer", () => {
      t.open();
    })
  ), ht(
    t.commands.register("omp.tmux-copymode", () => {
      ge(t);
    })
  ), ht(
    t.commands.registerQuickPick("omp.quick-launch", {
      title: "OMP: launch a profile in a new tab",
      items: async () => se(t, await Lt(t), "new-tab")
    })
  ), ht(
    t.commands.registerQuickPick("omp.split-launch", {
      title: "OMP: launch a profile in a split pane",
      items: async () => se(t, await Lt(t), "split-v")
    })
  ), ht(
    t.commands.registerQuickPick("omp.skill-palette", {
      title: "OMP: search skills and inject one",
      items: async () => (await Vt(t)).map((o) => ({
        label: o.name,
        detail: o.description,
        icon: "book",
        action: () => {
          he(t, o.name);
        }
      }))
    })
  );
  const e = ba(t);
  bt.push(() => e.dispose());
  const s = Ca();
  return Pa(s), {
    component: Vn,
    overlay: [
      {
        id: "dinotty-omp:hud",
        component: wa,
        dragHandle: "grip",
        interactive: !0,
        defaultPosition: s
      }
    ],
    monitor: { series: [e.series] },
    dispose: Ea
  };
}
function Ea() {
  for (const t of bt)
    try {
      t();
    } catch {
    }
  bt = [], ss(), ls(), gs(), cs();
}
export {
  za as activate,
  Ea as deactivate
};
