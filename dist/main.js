const p = window.__DINOTTY_VUE__;
if (!p)
  throw new Error("host vue bridge missing: window.__DINOTTY_VUE__ not assigned");
const T = p.ref;
p.reactive;
const E = p.computed;
p.watch;
const de = p.onMounted;
p.onUnmounted;
const Le = p.onBeforeUnmount;
p.nextTick;
p.h;
const Gt = p.defineComponent;
p.getCurrentInstance;
const f = p.toDisplayString, O = p.normalizeClass;
p.normalizeStyle;
const g = p.openBlock, v = p.createElementBlock, o = p.createElementVNode, Ae = p.createBlock, k = p.createVNode, x = p.createCommentVNode, j = p.createTextVNode;
p.withCtx;
const X = p.withDirectives, nt = p.withModifiers;
p.withKeys;
const Ht = p.vModelText, pe = p.vModelSelect, ze = p.vModelCheckbox;
p.vModelRadio;
const Oe = p.vShow, Re = p.mergeProps, F = p.renderList;
p.renderSlot;
p.resolveComponent;
p.resolveDirective;
const Ne = p.resolveDynamicComponent;
p.resolveTransitionHooks;
p.setBlockTracking;
p.useSlots;
p.useAttrs;
p.isRef;
const De = p.unref;
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
const L = p.Fragment;
p.Static;
p.Text;
p.Comment;
const Xt = {
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
}, Fe = ["width", "height"], He = /* @__PURE__ */ Gt({
  __name: "Icon",
  props: {
    name: {},
    size: { default: 16 },
    class: { default: "" }
  },
  setup(t) {
    const e = t, s = E(() => e.size), n = E(() => e.class), a = E(() => Xt[e.name] || Xt.info);
    return (i, r) => (g(), v("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: s.value,
      height: s.value,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: O(["omp-svg-icon", n.value]),
      "aria-hidden": "true"
    }, [
      (g(!0), v(L, null, F(a.value, (c, y) => (g(), Ae(Ne(c.tag), Re({ key: y }, { ref_for: !0 }, c.attrs), null, 16))), 128))
    ], 10, Fe));
  }
}), Jt = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, a] of e)
    s[n] = a;
  return s;
}, S = /* @__PURE__ */ Jt(He, [["__scopeId", "data-v-35ecedfe"]]), V = {
  cwd: "",
  sessionFile: "",
  isRunning: !1,
  state: "inactive",
  summary: null
};
function Be(t) {
  return !(!t || typeof t != "object" || !("model" in t) || typeof t.model != "string" || !("provider" in t) || typeof t.provider != "string" || !("thinkingLevel" in t) || typeof t.thinkingLevel != "string" || !("status" in t) || !["idle", "thinking", "running_tool", "error"].includes(String(t.status)) || !("totalTokens" in t) || typeof t.totalTokens != "number" || !Number.isSafeInteger(t.totalTokens) || t.totalTokens < 0 || !("turns" in t) || typeof t.turns != "number" || !Number.isSafeInteger(t.turns) || t.turns < 0 || !("totalCost" in t) || typeof t.totalCost != "number" || !Number.isFinite(t.totalCost) || t.totalCost < 0);
}
async function me(t, e) {
  const s = e?.paneId ?? t.terminal.activePaneId() ?? "", n = e?.cwd ?? t.terminal.activeCwd() ?? "";
  try {
    const a = await t.exec.run(["pane", s, n]);
    if (a.code !== 0 || !a.stdout.trim()) return V;
    const i = JSON.parse(a.stdout.trim());
    return !i || typeof i != "object" || !("cwd" in i) || typeof i.cwd != "string" || !("sessionFile" in i) || typeof i.sessionFile != "string" || !("isRunning" in i) || typeof i.isRunning != "boolean" || !("state" in i) || i.state !== "inactive" && i.state !== "starting" && i.state !== "running" || i.state === "inactive" != !i.isRunning || !("summary" in i) || i.summary !== null && !Be(i.summary) ? V : {
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
function je(t) {
  const e = t.replace(/\\/g, "/").split("/").pop() || t, s = e.match(/^(\d{4}-\d{2}-\d{2})T(\d{2})-(\d{2})-(\d{2})/);
  return s ? `${s[1]} ${s[2]}:${s[3]}:${s[4]}` : e.replace(/\.jsonl$/, "");
}
function Ue(t) {
  const e = t.replace(/\\/g, "/").split("/"), s = e[e.length - 2] || "";
  return s ? s.replace(/^-/, "").replace(/-/g, "/") || "home" : "workspace";
}
function Ve(t, e = Date.now()) {
  if (!t) return "unknown";
  const s = e - t, n = Math.round(s / 6e4);
  if (n < 1) return "just now";
  if (n < 60) return `${n}m ago`;
  const a = Math.round(n / 60);
  return a < 24 ? `${a}h ago` : `${Math.round(a / 24)}d ago`;
}
async function Ye(t, e, s) {
  const n = e.includes("\\") ? "\\" : "/", a = [];
  if (s)
    a.push([e, s].join(n));
  else
    try {
      const c = await t.workspace.readDir(e);
      for (const y of c.entries)
        y.is_dir && y.name.startsWith("-") && a.push([e, y.name].join(n));
    } catch {
      return [];
    }
  const i = Date.now(), r = [];
  for (const c of a)
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
        r.push({
          path: h,
          name: d.name,
          modified: m,
          displayName: je(h),
          workspace: Ue(h),
          ageLabel: Ve(m, i)
        });
      }
    } catch {
    }
  return r.sort((c, y) => y.modified - c.modified || y.name.localeCompare(c.name)), r;
}
class We {
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
    const n = this.tail + e, a = n.lastIndexOf(`
`);
    if (a < 0) {
      this.tail = s ? "" : n, s && n.trim() && this.applyLine(n.trim());
      return;
    }
    const i = n.slice(0, a);
    this.tail = n.slice(a + 1);
    for (const r of i.split(`
`)) {
      const c = r.trim();
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
    const a = n.timestamp || this.updatedAt || Date.now();
    if (n.role === "assistant") {
      this.turns += 1;
      let i = "", r = "";
      const c = [], y = n.content;
      if (Array.isArray(y))
        for (const d of y) {
          const h = d;
          if (h?.type === "text") i += `${h.text || ""}
`;
          else if (h?.type === "thinking") r += `${h.thinking || h.text || ""}
`;
          else if (h?.type === "toolCall") {
            const m = h.arguments ?? {}, w = {
              id: h.id || `call-${this.messages.length}-${c.length}`,
              name: h.name || "tool",
              arguments: m,
              argumentsLabel: Ge(m),
              intent: h.intent
            };
            c.push(w), this.pending.set(w.id, w);
          }
        }
      this.messages.push({
        id: s.id || `msg-${a}-${this.messages.length}`,
        role: "assistant",
        text: i.trim(),
        images: [],
        timestamp: a,
        timeLabel: Bt(a),
        cost: n.usage?.cost?.total,
        totalTokens: n.usage?.totalTokens,
        thinking: r.trim() || void 0,
        toolCalls: c.length ? c : void 0,
        searchText: ""
      }), this.trim();
      return;
    }
    if (n.role === "user") {
      let i = "";
      const r = [], c = n.content;
      if (Array.isArray(c))
        for (const y of c) {
          const d = y;
          d?.type === "text" ? i += `${d.text || ""}
` : d?.type === "image" && (d.url ? r.push(d.url) : d.data && r.push(`data:${d.mediaType || "image/png"};base64,${d.data}`));
        }
      else typeof c == "string" && (i = c);
      this.messages.push({
        id: s.id || `msg-${a}-${this.messages.length}`,
        role: "user",
        text: i.trim(),
        images: r,
        timestamp: a,
        timeLabel: Bt(a),
        searchText: ""
      }), this.trim();
      return;
    }
    if (n.role === "toolResult") {
      let i = "";
      const r = n.content;
      if (Array.isArray(r))
        for (const d of r) {
          const h = d;
          h?.type === "text" && (i += `${h.text || ""}
`);
        }
      else typeof r == "string" && (i = r);
      const c = n.toolCallId, y = c ? this.pending.get(c) : void 0;
      if (y && c) {
        y.result = i.trim(), y.isError = !!n.isError, this.pending.delete(c);
        for (const d of this.messages)
          d.toolCalls?.includes(y) && (d.searchText = "");
      } else
        this.messages.push({
          id: s.id || `msg-${a}-${this.messages.length}`,
          role: "toolResult",
          text: i.trim(),
          images: [],
          timestamp: a,
          timeLabel: Bt(a),
          toolCallId: c,
          isError: !!n.isError,
          searchText: ""
        }), this.trim();
    }
  }
}
function Bt(t) {
  if (!t) return "";
  const e = new Date(t);
  return `${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}`;
}
function Ge(t) {
  if (typeof t == "string") return t;
  try {
    return JSON.stringify(t, null, 2);
  } catch {
    return String(t);
  }
}
function Je(t) {
  const e = [t.text];
  if (t.thinking && e.push(t.thinking), t.toolCalls)
    for (const s of t.toolCalls)
      e.push(s.name), s.intent && e.push(s.intent), s.result && e.push(s.result);
  return t.searchText = e.join(" ").toLowerCase(), t.searchText;
}
const Ke = 2 * 1024 * 1024, Ze = 6 * 1024 * 1024, qe = 1024 * 1024, Qe = 6, Y = /* @__PURE__ */ new Map();
function Xe(t, e, s, n = 0) {
  return `${t}\0${e}\0${s}\0${n}`;
}
async function ts(t, e, s, n) {
  try {
    const a = await t.exec.run(["chunk", e, String(s), String(n)]);
    if (a.code !== 0 || !a.stdout.trim()) return null;
    const i = JSON.parse(a.stdout.trim());
    return i.error || typeof i != "object" || i === null || typeof i.start != "number" || typeof i.end != "number" || typeof i.size != "number" || typeof i.eof != "boolean" || typeof i.content != "string" ? null : i;
  } catch {
    return null;
  }
}
async function es(t, e) {
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
function ss(t, e, s, n, a) {
  return {
    ...t.stats(),
    filePath: e,
    messages: t.messages.slice(),
    droppedHead: n > 0 || t.droppedHead,
    startOffset: n,
    loadedBytes: a,
    fileSize: s,
    metricsExact: !1
  };
}
function te(t) {
  return t.map((e) => ({
    ...e,
    toolCalls: e.toolCalls?.map((s) => ({ ...s }))
  }));
}
function ns(t) {
  const e = /* @__PURE__ */ new Map(), s = [];
  for (const n of t) {
    for (const a of n.toolCalls || []) e.set(a.id, { call: a, message: n });
    if (n.role === "toolResult" && n.toolCallId) {
      const a = e.get(n.toolCallId);
      if (a) {
        a.call.result = n.text, a.call.isError = !!n.isError, a.message.searchText = "";
        continue;
      }
    }
    s.push(n);
  }
  return s;
}
function os(t, e, s, n) {
  let a = null;
  for (const i of Y.values())
    i.data.filePath === t && i.size === e && i.mtime === s && i.data.startOffset > 0 && i.data.loadedBytes < n && (!a || i.data.loadedBytes > a.loadedBytes) && (a = i.data);
  return a;
}
async function as(t, e, s, n, a) {
  const i = new We({ keepMessages: Number.MAX_SAFE_INTEGER });
  let r = s, c = null, y = s, d = 0;
  for (; ; ) {
    const h = await ts(t, e, r, qe);
    if (!h) return null;
    c ??= h, d === 0 && (y = h.start);
    let m = h.content, w = h.end;
    if (a !== void 0 && h.start >= a) break;
    if (a !== void 0 && w > a) {
      const P = new TextEncoder().encode(m);
      m = new TextDecoder().decode(P.subarray(0, Math.max(0, a - h.start))), w = a;
    }
    const C = new TextEncoder().encode(m).byteLength;
    if (!C && w <= r) return null;
    if (i.push(m, h.eof || a !== void 0 && w >= a), d += C, w <= r || h.eof || a !== void 0 && w >= a || d >= n) break;
    r = h.end;
  }
  return { parser: i, metadata: c, startOffset: y, loadedBytes: d };
}
function is(t, e) {
  return e && (t.model = e.model, t.provider = e.provider, t.totalTokens = e.totalTokens, t.totalCost = e.totalCost, t.turns = e.turns, t.metricsExact = !0), t;
}
async function ee(t, e, s = {}) {
  const n = await t.workspace.stat(e).catch(() => null);
  if (!n || n.is_dir) return null;
  const a = Math.max(1, s.tailBytes ?? Ke), i = Math.max(1, s.historyBytes ?? Ze), r = s.before ?? os(e, n.size, n.modified || 0, a), c = Xe(e, a, i, r?.startOffset || 0), y = Y.get(c);
  if (y && y.mtime === (n.modified || 0) && y.size === n.size)
    return Y.delete(c), Y.set(c, y), y.data;
  const d = r ? Math.min(r.startOffset, n.size) : void 0, h = d === void 0 ? Math.max(0, n.size - a) : Math.max(0, d - i), m = await as(t, e, h, i, d);
  if (!m) return null;
  let w;
  if (r) {
    const C = ns([...te(m.parser.messages), ...te(r.messages)]);
    w = {
      ...r,
      messages: C,
      droppedHead: m.startOffset > 0 || m.parser.droppedHead || r.droppedHead,
      startOffset: m.startOffset,
      loadedBytes: m.loadedBytes + r.loadedBytes,
      fileSize: n.size,
      metricsExact: !1
    }, !w.sessionId && m.parser.sessionId && (w.sessionId = m.parser.sessionId), !w.cwd && m.parser.cwd && (w.cwd = m.parser.cwd);
  } else
    w = ss(m.parser, e, n.size, m.startOffset, m.loadedBytes), !w.sessionId && m.metadata?.sessionId && (w.sessionId = m.metadata.sessionId), !w.cwd && m.metadata?.cwd && (w.cwd = m.metadata.cwd);
  for (is(w, await es(t, e)), Y.set(c, { mtime: n.modified || 0, size: n.size, data: w }); Y.size > Qe; ) Y.delete(Y.keys().next().value);
  return w;
}
function rs() {
  Y.clear();
}
const Kt = {
  cwd: "",
  sessionFile: "",
  isRunning: !1,
  state: "inactive",
  summary: null
}, ls = 250, cs = 3e4, us = 2500, ds = 3e3, Zt = 600, I = /* @__PURE__ */ new Set();
let A = null, R = Kt, at = "", yt = null, _t = null, Lt = null, it = null, jt = null, Ut = "", $t = 0, J = 0, W = null, Pt = -1, xt = "", et = !1, K = !1, rt = null, tt = -1 / 0, At = "";
function he(t) {
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
function Ot() {
  if (typeof document < "u" && document.hidden) return !1;
  for (const t of I)
    if (!t.subscriber.visible || t.subscriber.visible()) return !0;
  return !1;
}
function fe() {
  for (const t of I)
    if (!t.disposed)
      try {
        t.subscriber.listener?.(R);
      } catch {
      }
}
function Rt() {
  yt !== null && (clearTimeout(yt), yt = null);
}
function ps() {
  rt !== null && (clearTimeout(rt), rt = null);
}
function ge() {
  _t !== null && (clearTimeout(_t), _t = null);
}
function ve() {
  ge(), !(!A || I.size === 0) && (_t = setTimeout(() => {
    if (_t = null, A && I.size > 0 && Ot()) {
      const t = A.terminal.activePaneId() || "";
      t !== at && bt(t);
    }
    ve();
  }, ls));
}
function qt() {
  $t += 1, jt?.dispose(), jt = null, Ut = "";
}
function se() {
  if (Rt(), !A || I.size === 0 || W) return;
  const t = Date.now(), e = R.summary?.status, s = R.state === "starting" ? ds : e === "thinking" || e === "running_tool" ? us : R.sessionFile ? cs : 0;
  if (!et && s === 0) return;
  const n = et ? K ? 0 : Math.max(0, tt + Zt - t) : Math.max(0, tt + s - t);
  Ot() && (yt = setTimeout(() => {
    yt = null, Z(K);
  }, n));
}
function ms() {
  const t = A;
  if (!t || I.size === 0) return;
  const e = R.sessionFile, s = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\")), n = s > 0 ? e.slice(0, s) : "";
  if (n === Ut || (qt(), !n || typeof t.workspace.watch != "function")) return;
  Ut = n;
  const a = $t, i = (r) => r.replace(/\\/g, "/");
  try {
    const r = t.workspace.watch(n, (c) => {
      A !== t || I.size === 0 || a !== $t || c.type === "file_event" && (c.path && i(c.path) !== i(R.sessionFile) || (et = !0, W && (K = !0, rt === null && Ot() && (rt = setTimeout(() => {
        rt = null, Z(!0);
      }, Zt))), Z(!1)));
    });
    Promise.resolve(r).then((c) => {
      if (A !== t || I.size === 0 || a !== $t) {
        c?.dispose();
        return;
      }
      jt = c;
    }).catch(() => {
    });
  } catch {
  }
}
function bt(t) {
  const e = A;
  if (!e || I.size === 0 || t === at) return;
  J += 1, at = t, R = {
    ...Kt,
    cwd: e.terminal.activeCwd() || "",
    isRunning: !0,
    state: "starting"
  }, At = he(R), tt = -1 / 0, qt(), et = !0, K = !0, fe();
  const s = J;
  if ((e.terminal.activePaneId() || "") === t) {
    Z(!0);
    return;
  }
  queueMicrotask(() => {
    if (A !== e || I.size === 0 || s !== J) return;
    const a = e.terminal.activePaneId() || t;
    if (a !== at) {
      bt(a);
      return;
    }
    Z(!0);
  });
}
function Z(t = !1) {
  const e = A;
  if (!e || I.size === 0) return Promise.resolve();
  const s = e.terminal.activePaneId() || "";
  if (s !== at)
    return bt(s), W || Promise.resolve();
  if (et = !0, K ||= t, W && Pt === J && xt === s) return W;
  if (!Ot() || !K && Date.now() - tt < Zt)
    return se(), Promise.resolve();
  Rt();
  const n = { paneId: s, cwd: e.terminal.activeCwd() || "" }, a = J;
  et = !1, K = !1;
  const i = me(e, n).then((r) => {
    if (A !== e || I.size === 0 || a !== J) return;
    const c = e.terminal.activePaneId() || "";
    if (c !== n.paneId) {
      bt(c);
      return;
    }
    tt = Date.now();
    const y = he(r);
    R = r, ms(), y !== At && (At = y, fe());
  }).catch(() => {
    A === e && a === J && (tt = Date.now());
  }).finally(() => {
    W === i && (W = null, Pt = -1, xt = "", se());
  });
  return W = i, Pt = a, xt = n.paneId, Promise.resolve();
}
function ye() {
  J += 1, Rt(), ps(), ge(), Lt?.dispose(), Lt = null, qt(), it && typeof document < "u" && document.removeEventListener("visibilitychange", it), it = null, A = null, W = null, Pt = -1, xt = "", et = !1, K = !1, R = Kt, at = "", At = "", tt = -1 / 0;
}
function _e(t, e) {
  A = t;
  const s = { subscriber: e, disposed: !1 };
  return I.add(s), !Lt && typeof t.terminal.onDidChangeActivePane == "function" && (Lt = t.terminal.onDidChangeActivePane((n) => {
    A !== t || I.size === 0 || bt(n || t.terminal.activePaneId() || "");
  })), typeof document < "u" && !it && (it = () => {
    document.hidden ? Rt() : Z(!0);
  }, document.addEventListener("visibilitychange", it)), ve(), e.listener?.(R), Z(!0), {
    dispose() {
      s.disposed || (s.disposed = !0, I.delete(s), I.size === 0 && ye());
    }
  };
}
function Et() {
  return R;
}
function hs() {
  I.clear(), ye();
}
let ft = null, ot = null;
function fs(t) {
  return /^[A-Za-z]:[\\/]/.test(t) || t.includes("\\");
}
function It(t, ...e) {
  const s = fs(t) ? "\\" : "/";
  return [t.replace(/[\\/]+$/, ""), ...e].join(s);
}
async function St(t) {
  if (ft) return ft;
  if (ot) return ot;
  ot = (async () => {
    try {
      const s = await t.exec.run(["doctor"]);
      if (s.code === 0 && s.stdout.trim())
        return ft = JSON.parse(s.stdout.trim()), ft;
    } catch {
    }
    return null;
  })();
  const e = await ot;
  return ot = null, e;
}
function gs() {
  ft = null, ot = null;
}
const vs = [
  { category: "verification", match: /\b(test|verify|prove|gate|benchmark|regression|audit)\b/ },
  { category: "diagnostics", match: /\b(diagnos|debug|triage|trace|investigat|root cause)\b/ },
  { category: "delivery", match: /\b(deploy|release|ship|publish|rollout|ci|pipeline|merge)\b/ },
  { category: "authoring", match: /\b(write|author|document|readme|spec|plan|design)\b/ }
];
let gt = [], Vt = 0;
const ys = 6e4;
function _s(t, e) {
  const s = `${t} ${e}`.toLowerCase();
  for (const n of vs)
    if (n.match.test(s)) return n.category;
  return "general";
}
function ws(t) {
  const e = t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!e) return { name: "", description: "", body: t };
  let s = "", n = "";
  for (const a of e[1].split(/\r?\n/)) {
    const i = a.match(/^name:\s*(.+)$/);
    i && (s = i[1].trim().replace(/^['"]|['"]$/g, ""));
    const r = a.match(/^description:\s*(.+)$/);
    r && (n = r[1].trim().replace(/^['"]|['"]$/g, ""));
  }
  return { name: s, description: n, body: e[2] };
}
async function bs(t) {
  const e = await St(t), s = [];
  return e?.ompHome ? (s.push({ label: "managed", path: It(e.ompHome, "managed-skills") }), s.push({ label: "project", path: It(e.ompHome, "skills") })) : (s.push({ label: "managed", path: "~/.omp/agent/managed-skills" }), s.push({ label: "project", path: "~/.omp/agent/skills" })), e?.home ? s.push({ label: "user", path: It(e.home, ".agents", "skills") }) : s.push({ label: "user", path: "~/.agents/skills" }), s;
}
async function Yt(t, e = !1) {
  const s = Date.now();
  if (!e && gt.length && s - Vt < ys) return gt;
  const n = await bs(t), a = n[0]?.path.includes("\\") ? "\\" : "/", i = /* @__PURE__ */ new Map();
  for (const r of n) {
    let c;
    try {
      c = await t.workspace.readDir(r.path);
    } catch {
      continue;
    }
    for (const y of c.entries) {
      if (!y.is_dir) continue;
      const d = [r.path, y.name, "SKILL.md"].join(a);
      try {
        const h = await t.workspace.readFile(d);
        if (!h.content) continue;
        const { name: m, description: w, body: C } = ws(h.content), P = m || y.name;
        if (i.has(P)) continue;
        i.set(P, {
          id: P,
          name: P,
          description: w || "No description provided.",
          category: _s(P, w),
          source: r.label,
          filePath: d,
          body: C
        });
      } catch {
      }
    }
  }
  return gt = [...i.values()].sort((r, c) => r.name.localeCompare(c.name)), Vt = s, gt;
}
function ks(t, e, s = "all") {
  const a = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return t.filter((i) => {
    if (s !== "all" && i.category !== s) return !1;
    if (!a.length) return !0;
    const r = `${i.name} ${i.description}`.toLowerCase();
    return a.every((c) => r.includes(c));
  });
}
function we(t, e) {
  const s = t.terminal.activePaneId();
  return s ? (t.terminal.send(s, `/skill ${e}
`), t.ui.notify(`Injected skill ${e}`, "info"), !0) : (t.ui.notify("No active terminal pane to inject into", "warn"), !1);
}
function Ss() {
  gt = [], Vt = 0;
}
const Ms = 20, ne = 500, Ts = 750;
function oe(t, e) {
  const n = t.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean), r = `omp-${(n[n.length - 1] || "workspace").replace(/[^a-zA-Z0-9_-]+/g, "_").slice(0, 32) || "workspace"}`;
  return e ? `${r}-${e}` : r;
}
function be(t) {
  return [];
}
function Cs(t) {
  return t ? `/modelpreset switch ${t.id}
` : "";
}
function vt(t) {
  return `'${t.replace(/'/g, "'\\''")}'`;
}
function Wt(t, e, s, n) {
  if (!n) return;
  let a = 0;
  const i = async () => {
    if (a >= Ms) {
      t.ui.notify(`OMP preset ${n.id} was not applied before startup timeout`, "warn");
      return;
    }
    a += 1;
    const r = await me(t, { paneId: e, cwd: s });
    if (r.isRunning && (r.state === "starting" || r.state === "running")) {
      const c = Cs(n);
      c && window.setTimeout(() => {
        t.terminal.send(e, c), t.ui.notify(`OMP preset ${n.id} applied`, "info");
      }, Ts);
      return;
    }
    window.setTimeout(() => void i(), ne);
  };
  window.setTimeout(() => void i(), ne);
}
async function wt(t, e = {}) {
  const s = await St(t), n = e.cwd || t.terminal.activeCwd() || s?.home || ".", a = e.target || "new-tab", i = be(e.preset), r = e.preset?.id || lt, c = !!s?.tmux && s?.platform !== "win32", y = ["omp", ...i].map(vt).join(" "), d = `${y}; exec "$SHELL"`;
  if (a === "new-tab") {
    const P = Math.random().toString(36).slice(2, 10), U = oe(n, P), H = c ? ["tmux", "new-session", "-s", U, "-c", n, "sh", "-c", d] : ["omp", ...i], N = await t.terminal.createTerminalTab({
      cwd: n,
      argv: H,
      title: `OMP: ${r}`
    });
    return Wt(t, N, n, e.preset), t.ui.notify(
      c ? `OMP started in tmux session ${U}` : `OMP started with preset ${r}`,
      "info"
    ), N;
  }
  const h = await t.terminal.splitTerminalPane({
    direction: a === "split-h" ? "horizontal" : "vertical",
    cwd: n
  });
  if (!h)
    return t.ui.notify("Split failed: no active terminal tab", "warn"), null;
  const m = h.replace(/[^a-zA-Z0-9_-]+/g, "").slice(0, 8) || Math.random().toString(36).slice(2, 10), w = oe(n, m), C = c ? `tmux new-session -s ${vt(w)} -c ${vt(n)} sh -c ${vt(d)}` : y;
  return t.terminal.send(h, `${C}
`), Wt(t, h, n, e.preset), t.ui.notify(`OMP started in a split pane with preset ${r}`, "info"), h;
}
async function $s(t, e) {
  const s = t.terminal.activePaneId();
  if (!s)
    return t.ui.notify("No active terminal pane to launch into", "warn"), !1;
  const n = t.terminal.activeCwd() || "", a = ["omp", ...be()].map(vt).join(" ");
  return t.terminal.send(s, `${a}
`), Wt(t, s, n, e), t.ui.notify(`Launching OMP with preset ${e?.id || lt}`, "info"), !0;
}
async function ke(t) {
  const e = await St(t);
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
const lt = "default";
function Ps(t) {
  if (!t || typeof t != "object" || Array.isArray(t) || !("id" in t) || typeof t.id != "string" || !/^[A-Za-z][A-Za-z0-9_-]*$/.test(t.id) || !("modelRoles" in t) || !t.modelRoles || typeof t.modelRoles != "object" || Array.isArray(t.modelRoles) || !("defaultThinkingLevel" in t) || typeof t.defaultThinkingLevel != "string") return null;
  const e = {};
  for (const [s, n] of Object.entries(t.modelRoles)) {
    if (typeof n != "string") return null;
    e[s] = n;
  }
  return {
    id: t.id,
    label: t.id,
    modelRoles: e,
    defaultThinkingLevel: t.defaultThinkingLevel,
    isDefault: t.id === lt
  };
}
async function zt(t) {
  try {
    const e = await t.exec.run(["model-presets"]);
    if (e.code !== 0 || !e.stdout.trim()) return [];
    const s = JSON.parse(e.stdout.trim());
    if (!Array.isArray(s)) return [];
    const n = [];
    for (const a of s) {
      const i = Ps(a);
      i && n.push(i);
    }
    return n.sort((a, i) => a.isDefault !== i.isDefault ? a.isDefault ? -1 : 1 : a.id.localeCompare(i.id));
  } catch {
    return [];
  }
}
function ae(t, e, s) {
  return e.map((n) => ({
    label: n.label,
    detail: `${Object.keys(n.modelRoles).length} model roles · thinking ${n.defaultThinkingLevel}`,
    icon: "zap",
    action: () => {
      wt(t, { preset: n, target: s });
    }
  }));
}
const xs = { class: "omp-app" }, Es = { class: "omp-app__bar" }, Is = { class: "omp-app__brand" }, Ls = { class: "omp-app__version" }, As = {
  class: "omp-app__tabs",
  role: "tablist",
  "aria-label": "OMP Pilot sections"
}, zs = ["aria-selected", "onClick"], Os = {
  key: 0,
  class: "omp-app__badge"
}, Rs = { class: "omp-app__bar-actions" }, Ns = ["value"], Ds = { class: "omp-app__body" }, Fs = {
  key: 0,
  class: "omp-pane omp-pane--sessions"
}, Hs = { class: "omp-sessions" }, Bs = { class: "omp-sessions__head" }, js = { class: "omp-field omp-field--search" }, Us = { class: "omp-toggle" }, Vs = {
  class: "omp-sessions__list",
  role: "listbox",
  "aria-label": "OMP sessions"
}, Ys = {
  key: 0,
  class: "omp-hint"
}, Ws = {
  key: 1,
  class: "omp-hint"
}, Gs = ["aria-selected", "onClick"], Js = { class: "omp-session__title" }, Ks = { class: "omp-session__meta" }, Zs = { class: "omp-transcript" }, qs = { class: "omp-transcript__head" }, Qs = { class: "omp-transcript__meta" }, Xs = { class: "omp-tag" }, tn = { class: "omp-tag" }, en = { class: "omp-tag omp-tag--cost" }, sn = { class: "omp-tag" }, nn = { class: "omp-transcript__tools" }, on = { class: "omp-field omp-field--search" }, an = {
  key: 0,
  class: "omp-banner omp-banner--action"
}, rn = ["disabled"], ln = { class: "omp-turns" }, cn = {
  key: 0,
  class: "omp-hint"
}, un = {
  key: 1,
  class: "omp-hint"
}, dn = { class: "omp-turn__head" }, pn = { class: "omp-turn__role" }, mn = { class: "omp-turn__time" }, hn = {
  key: 0,
  class: "omp-fold"
}, fn = { class: "omp-code" }, gn = {
  key: 1,
  class: "omp-turn__text"
}, vn = {
  key: 2,
  class: "omp-turn__images"
}, yn = ["onClick"], _n = ["src"], wn = { class: "omp-fold__name" }, bn = {
  key: 0,
  class: "omp-fold__intent"
}, kn = { class: "omp-fold__state" }, Sn = { class: "omp-code" }, Mn = { class: "omp-code" }, Tn = {
  key: 1,
  class: "omp-empty"
}, Cn = {
  key: 1,
  class: "omp-pane omp-pane--skills"
}, $n = { class: "omp-skills__head" }, Pn = { class: "omp-field omp-field--search omp-field--grow" }, xn = { class: "omp-chips" }, En = ["onClick"], In = { class: "omp-skills__body" }, Ln = { class: "omp-skills__grid" }, An = {
  key: 0,
  class: "omp-hint"
}, zn = {
  key: 1,
  class: "omp-hint"
}, On = ["onClick"], Rn = { class: "omp-skill__title" }, Nn = { class: "omp-skill__desc" }, Dn = { class: "omp-skill__tags" }, Fn = { class: "omp-chip omp-chip--tiny" }, Hn = { class: "omp-chip omp-chip--tiny" }, Bn = {
  key: 0,
  class: "omp-skill-detail"
}, jn = { class: "omp-skill-detail__desc" }, Un = { class: "omp-code omp-code--tall" }, Vn = {
  key: 2,
  class: "omp-pane omp-pane--profiles"
}, Yn = { class: "omp-profiles__grid" }, Wn = { class: "omp-profile__icon" }, Gn = { class: "omp-profile__actions" }, Jn = ["onClick"], Kn = ["onClick"], Zn = ["onClick"], qn = ["src"], Qn = 6 * 1024 * 1024, Ct = 200, Xn = /* @__PURE__ */ Gt({
  __name: "MainView",
  props: {
    api: {}
  },
  setup(t) {
    const e = t, s = "1.1.2", n = ["all", "verification", "diagnostics", "delivery", "authoring", "general"], a = T("sessions"), i = T(""), r = T([]), c = T(!0), y = T(""), d = T(!0), h = T(""), m = T(null), w = T(!1), C = T(!1), P = T(Ct), U = T(""), H = T(null);
    let N = 0;
    const D = T([]), G = T(!0), ct = T(""), ut = T("all"), z = T(null), q = T([]), st = T(lt), Nt = E(() => [
      { id: "sessions", label: "Sessions", icon: "message-square", badge: r.value.length },
      { id: "skills", label: "Skills", icon: "book", badge: D.value.length },
      { id: "profiles", label: "Model presets", icon: "zap", badge: q.value.length }
    ]), Mt = E(() => {
      const b = y.value.trim().toLowerCase();
      return b ? r.value.filter((u) => u.path.toLowerCase().includes(b)) : r.value;
    }), dt = E(() => {
      if (!m.value) return [];
      const b = U.value.trim().toLowerCase();
      return b ? m.value.messages.filter((u) => Je(u).includes(b)) : m.value.messages;
    }), Tt = E(() => {
      const b = dt.value;
      return b.length > P.value ? b.slice(b.length - P.value) : b;
    }), pt = E(() => Math.max(0, dt.value.length - Tt.value.length)), M = E(() => ks(D.value, ct.value, ut.value)), _ = E(
      () => q.value.find((b) => b.id === st.value) || null
    );
    function B(b) {
      return b === "user" ? "terminal" : b === "assistant" ? "bot" : "code";
    }
    function Q(b) {
      return b === "user" ? "You" : b === "assistant" ? "Agent" : "Tool";
    }
    async function Dt() {
      c.value = !0;
      try {
        if (!i.value) {
          const u = await St(e.api);
          i.value = u?.ompHome ? It(u.ompHome, "sessions") : "~/.omp/agent/sessions";
        }
        let b;
        if (d.value) {
          const u = Et().sessionFile;
          if (!u) {
            r.value = [], h.value = "", m.value = null;
            return;
          }
          const l = u.replace(/\\/g, "/").split("/");
          b = l[l.length - 2];
        }
        r.value = await Ye(e.api, i.value, b), r.value.length && !r.value.some((u) => u.path === h.value) && await Qt(r.value[0].path);
      } finally {
        c.value = !1;
      }
    }
    async function Qt(b) {
      const u = ++N;
      h.value = b, P.value = Ct, w.value = !0;
      try {
        const l = await ee(e.api, b);
        u === N && h.value === b && (m.value = l);
      } finally {
        u === N && (w.value = !1);
      }
    }
    async function Me() {
      const b = m.value, u = N;
      if (!(!b || b.startOffset <= 0 || C.value)) {
        C.value = !0;
        try {
          const l = await ee(e.api, b.filePath, {
            historyBytes: Qn,
            before: b
          });
          u === N && m.value === b && h.value === b.filePath && (m.value = l);
        } finally {
          u === N && (C.value = !1);
        }
      }
    }
    async function Te() {
      G.value = !0;
      try {
        D.value = await Yt(e.api), !z.value && D.value.length && (z.value = D.value[0]);
      } finally {
        G.value = !1;
      }
    }
    async function Ce() {
      G.value = !0;
      try {
        D.value = await Yt(e.api, !0), !z.value && D.value.length && (z.value = D.value[0]);
      } finally {
        G.value = !1;
      }
    }
    function $e(b) {
      we(e.api, b);
    }
    async function Ft(b, u) {
      await wt(e.api, { preset: b, target: u });
    }
    async function Pe() {
      await wt(e.api, { preset: _.value, target: "new-tab" });
    }
    async function xe() {
      m.value && await wt(e.api, {
        preset: _.value,
        target: "new-tab",
        cwd: m.value.cwd || void 0
      });
    }
    async function Ee() {
      if (!m.value) return;
      const b = m.value.messages.map((u) => `### ${Q(u.role)}

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
    return de(async () => {
      await Promise.all([
        zt(e.api).then((b) => {
          q.value = b;
        }),
        Dt(),
        Te()
      ]);
    }), (b, u) => (g(), v("div", xs, [
      o("header", Es, [
        o("div", Is, [
          k(S, {
            name: "bot",
            size: 18,
            class: "omp-app__brand-icon"
          }),
          u[10] || (u[10] = o("span", { class: "omp-app__brand-name" }, "OMP Pilot", -1)),
          o("span", Ls, "v" + f(De(s)), 1)
        ]),
        o("nav", As, [
          (g(!0), v(L, null, F(Nt.value, (l) => (g(), v("button", {
            key: l.id,
            type: "button",
            role: "tab",
            class: O(["omp-app__tab", { "is-active": a.value === l.id }]),
            "aria-selected": a.value === l.id,
            onClick: ($) => a.value = l.id
          }, [
            k(S, {
              name: l.icon,
              size: 14
            }, null, 8, ["name"]),
            o("span", null, f(l.label), 1),
            l.badge ? (g(), v("span", Os, f(l.badge), 1)) : x("", !0)
          ], 10, zs))), 128))
        ]),
        o("div", Rs, [
          X(o("select", {
            "onUpdate:modelValue": u[0] || (u[0] = (l) => st.value = l),
            class: "omp-field omp-field--compact",
            "aria-label": "Launch model preset"
          }, [
            (g(!0), v(L, null, F(q.value, (l) => (g(), v("option", {
              key: l.id,
              value: l.id
            }, f(l.label), 9, Ns))), 128))
          ], 512), [
            [pe, st.value]
          ]),
          o("button", {
            type: "button",
            class: "omp-btn omp-btn--primary",
            onClick: Pe
          }, [
            k(S, {
              name: "play",
              size: 13
            }),
            u[11] || (u[11] = o("span", null, "New OMP tab", -1))
          ])
        ])
      ]),
      o("main", Ds, [
        a.value === "sessions" ? (g(), v("section", Fs, [
          o("aside", Hs, [
            o("div", Bs, [
              o("div", js, [
                k(S, {
                  name: "search",
                  size: 13
                }),
                X(o("input", {
                  "onUpdate:modelValue": u[1] || (u[1] = (l) => y.value = l),
                  type: "search",
                  placeholder: "Filter sessions",
                  "aria-label": "Filter sessions"
                }, null, 512), [
                  [Ht, y.value]
                ])
              ]),
              o("button", {
                type: "button",
                class: O(["omp-icon-btn", { "is-busy": c.value }]),
                title: "Reload session list",
                onClick: Dt
              }, [
                k(S, {
                  name: "refresh",
                  size: 13
                })
              ], 2)
            ]),
            o("label", Us, [
              X(o("input", {
                "onUpdate:modelValue": u[2] || (u[2] = (l) => d.value = l),
                type: "checkbox",
                onChange: Dt
              }, null, 544), [
                [ze, d.value]
              ]),
              u[12] || (u[12] = o("span", null, "This workspace only", -1))
            ]),
            o("div", Vs, [
              c.value ? (g(), v("p", Ys, "Loading sessions...")) : Mt.value.length ? x("", !0) : (g(), v("p", Ws, " No transcripts found. Start OMP in a terminal tab and it will show up here. ")),
              (g(!0), v(L, null, F(Mt.value, (l) => (g(), v("button", {
                key: l.path,
                type: "button",
                role: "option",
                class: O(["omp-session", { "is-active": h.value === l.path }]),
                "aria-selected": h.value === l.path,
                onClick: ($) => Qt(l.path)
              }, [
                o("span", Js, [
                  k(S, {
                    name: "file-text",
                    size: 12
                  }),
                  j(" " + f(l.displayName), 1)
                ]),
                o("span", Ks, [
                  o("span", null, f(l.workspace), 1),
                  o("span", null, f(l.ageLabel), 1)
                ])
              ], 10, Gs))), 128))
            ])
          ]),
          o("div", Zs, [
            m.value ? (g(), v(L, { key: 0 }, [
              o("header", qs, [
                o("div", Qs, [
                  o("span", Xs, [
                    k(S, {
                      name: "cpu",
                      size: 12
                    }),
                    j(f(m.value.model), 1)
                  ]),
                  o("span", tn, [
                    k(S, {
                      name: "layers",
                      size: 12
                    }),
                    j(f(m.value.totalTokens.toLocaleString()) + " tok", 1)
                  ]),
                  o("span", en, [
                    k(S, {
                      name: "activity",
                      size: 12
                    }),
                    j(f(m.value.totalCost.toFixed(3)) + " USD" + f(m.value.metricsExact ? "" : " loaded"), 1)
                  ]),
                  o("span", sn, [
                    k(S, {
                      name: "message-square",
                      size: 12
                    }),
                    j(f(m.value.messages.length) + " entries", 1)
                  ])
                ]),
                o("div", nn, [
                  o("div", on, [
                    k(S, {
                      name: "search",
                      size: 12
                    }),
                    X(o("input", {
                      "onUpdate:modelValue": u[3] || (u[3] = (l) => U.value = l),
                      type: "search",
                      placeholder: "Filter turns",
                      "aria-label": "Filter turns"
                    }, null, 512), [
                      [Ht, U.value]
                    ])
                  ]),
                  o("button", {
                    type: "button",
                    class: "omp-btn",
                    title: "Copy the transcript as Markdown",
                    onClick: Ee
                  }, [
                    k(S, {
                      name: "copy",
                      size: 12
                    }),
                    u[13] || (u[13] = o("span", null, "Copy", -1))
                  ]),
                  o("button", {
                    type: "button",
                    class: "omp-btn",
                    title: "Open this workspace in a new OMP tab",
                    onClick: xe
                  }, [
                    k(S, {
                      name: "external-link",
                      size: 12
                    }),
                    u[14] || (u[14] = o("span", null, "Open", -1))
                  ])
                ])
              ]),
              m.value.droppedHead ? (g(), v("div", an, [
                o("span", null, " Showing the last " + f((m.value.loadedBytes / 1048576).toFixed(1)) + " MB of " + f((m.value.fileSize / 1048576).toFixed(1)) + " MB (" + f(m.value.turns) + " turns" + f(m.value.metricsExact ? "" : " in loaded window") + "). ", 1),
                o("button", {
                  type: "button",
                  class: "omp-btn",
                  disabled: C.value,
                  onClick: Me
                }, [
                  k(S, {
                    name: "history",
                    size: 12
                  }),
                  o("span", null, f(C.value ? "Loading" : "Load earlier"), 1)
                ], 8, rn)
              ])) : x("", !0),
              o("div", ln, [
                w.value ? (g(), v("p", cn, "Reading transcript...")) : dt.value.length ? x("", !0) : (g(), v("p", un, "No turn matches that filter.")),
                pt.value ? (g(), v("button", {
                  key: 2,
                  type: "button",
                  class: "omp-btn omp-btn--wide",
                  onClick: u[4] || (u[4] = (l) => P.value += Ct)
                }, [
                  k(S, {
                    name: "chevron-up",
                    size: 12
                  }),
                  o("span", null, "Show " + f(Math.min(pt.value, Ct)) + " earlier turns (" + f(pt.value) + " hidden)", 1)
                ])) : x("", !0),
                (g(!0), v(L, null, F(Tt.value, (l) => (g(), v("article", {
                  key: l.id,
                  class: O(["omp-turn", `omp-turn--${l.role}`])
                }, [
                  o("header", dn, [
                    o("span", pn, [
                      k(S, {
                        name: B(l.role),
                        size: 13
                      }, null, 8, ["name"]),
                      j(" " + f(Q(l.role)), 1)
                    ]),
                    o("span", mn, f(l.timeLabel), 1)
                  ]),
                  l.thinking ? (g(), v("details", hn, [
                    u[15] || (u[15] = o("summary", null, "Reasoning", -1)),
                    o("pre", fn, f(l.thinking), 1)
                  ])) : x("", !0),
                  l.text ? (g(), v("pre", gn, f(l.text), 1)) : x("", !0),
                  l.images.length ? (g(), v("div", vn, [
                    (g(!0), v(L, null, F(l.images, ($, Ie) => (g(), v("button", {
                      key: Ie,
                      type: "button",
                      class: "omp-thumb",
                      onClick: (Vo) => H.value = $
                    }, [
                      o("img", {
                        src: $,
                        alt: "Attachment",
                        loading: "lazy"
                      }, null, 8, _n)
                    ], 8, yn))), 128))
                  ])) : x("", !0),
                  (g(!0), v(L, null, F(l.toolCalls || [], ($) => (g(), v("details", {
                    key: $.id,
                    class: O(["omp-fold omp-fold--tool", { "is-error": $.isError }])
                  }, [
                    o("summary", null, [
                      o("span", wn, f($.name), 1),
                      $.intent ? (g(), v("span", bn, f($.intent), 1)) : x("", !0),
                      o("span", kn, f($.isError ? "failed" : "ok"), 1)
                    ]),
                    u[17] || (u[17] = o("p", { class: "omp-fold__label" }, "Arguments", -1)),
                    o("pre", Sn, f($.argumentsLabel), 1),
                    $.result ? (g(), v(L, { key: 0 }, [
                      u[16] || (u[16] = o("p", { class: "omp-fold__label" }, "Result", -1)),
                      o("pre", Mn, f($.result), 1)
                    ], 64)) : x("", !0)
                  ], 2))), 128))
                ], 2))), 128))
              ])
            ], 64)) : (g(), v("div", Tn, [
              k(S, {
                name: "history",
                size: 28
              }),
              u[18] || (u[18] = o("p", null, "Select a session on the left to read its transcript.", -1))
            ]))
          ])
        ])) : x("", !0),
        a.value === "skills" ? (g(), v("section", Cn, [
          o("div", $n, [
            o("div", Pn, [
              k(S, {
                name: "search",
                size: 14
              }),
              X(o("input", {
                "onUpdate:modelValue": u[5] || (u[5] = (l) => ct.value = l),
                type: "search",
                placeholder: "Search skills by name or intent",
                "aria-label": "Search skills"
              }, null, 512), [
                [Ht, ct.value]
              ])
            ]),
            o("button", {
              type: "button",
              class: "omp-icon-btn",
              title: "Reload skills",
              onClick: Ce
            }, [
              k(S, {
                name: "refresh",
                size: 13
              })
            ])
          ]),
          o("div", xn, [
            (g(), v(L, null, F(n, (l) => o("button", {
              key: l,
              type: "button",
              class: O(["omp-chip", { "is-active": ut.value === l }]),
              onClick: ($) => ut.value = l
            }, f(l), 11, En)), 64))
          ]),
          o("div", In, [
            o("div", Ln, [
              G.value ? (g(), v("p", An, "Indexing skills...")) : M.value.length ? x("", !0) : (g(), v("p", zn, "No skill matches that search.")),
              (g(!0), v(L, null, F(M.value, (l) => (g(), v("button", {
                key: l.id,
                type: "button",
                class: O(["omp-skill", { "is-active": z.value?.id === l.id }]),
                onClick: ($) => z.value = l
              }, [
                o("span", Rn, [
                  k(S, {
                    name: "book",
                    size: 13
                  }),
                  j(" " + f(l.name), 1)
                ]),
                o("span", Nn, f(l.description), 1),
                o("span", Dn, [
                  o("span", Fn, f(l.category), 1),
                  o("span", Hn, f(l.source), 1)
                ])
              ], 10, On))), 128))
            ]),
            z.value ? (g(), v("aside", Bn, [
              o("header", null, [
                o("h3", null, f(z.value.name), 1),
                o("button", {
                  type: "button",
                  class: "omp-btn omp-btn--primary",
                  onClick: u[6] || (u[6] = (l) => $e(z.value.name))
                }, [
                  k(S, {
                    name: "terminal",
                    size: 12
                  }),
                  u[19] || (u[19] = o("span", null, "Inject", -1))
                ])
              ]),
              o("p", jn, f(z.value.description), 1),
              o("pre", Un, f(z.value.body || "This skill has no body."), 1)
            ])) : x("", !0)
          ])
        ])) : x("", !0),
        a.value === "profiles" ? (g(), v("section", Vn, [
          u[23] || (u[23] = o("header", { class: "omp-profiles__head" }, [
            o("h2", null, "Model presets"),
            o("p", null, [
              j("Loaded from OMP global "),
              o("code", null, "modelPresets"),
              j(". Apply one to a new tab or split pane.")
            ])
          ], -1)),
          o("div", Yn, [
            (g(!0), v(L, null, F(q.value, (l) => (g(), v("article", {
              key: l.id,
              class: O(["omp-profile", { "is-default": l.isDefault }])
            }, [
              o("header", null, [
                o("span", Wn, [
                  k(S, {
                    name: "zap",
                    size: 16
                  })
                ]),
                o("div", null, [
                  o("h3", null, f(l.label), 1),
                  o("code", null, f(Object.keys(l.modelRoles).length) + " model roles · thinking " + f(l.defaultThinkingLevel), 1)
                ])
              ]),
              o("div", Gn, [
                o("button", {
                  type: "button",
                  class: "omp-btn omp-btn--primary",
                  onClick: ($) => Ft(l, "new-tab")
                }, [
                  k(S, {
                    name: "play",
                    size: 12
                  }),
                  u[20] || (u[20] = o("span", null, "New tab", -1))
                ], 8, Jn),
                o("button", {
                  type: "button",
                  class: "omp-btn",
                  onClick: ($) => Ft(l, "split-v")
                }, [
                  k(S, {
                    name: "split-vertical",
                    size: 12
                  }),
                  u[21] || (u[21] = o("span", null, "Split right", -1))
                ], 8, Kn),
                o("button", {
                  type: "button",
                  class: "omp-btn",
                  onClick: ($) => Ft(l, "split-h")
                }, [
                  k(S, {
                    name: "split-horizontal",
                    size: 12
                  }),
                  u[22] || (u[22] = o("span", null, "Split down", -1))
                ], 8, Zn)
              ])
            ], 2))), 128))
          ])
        ])) : x("", !0)
      ]),
      H.value ? (g(), v("div", {
        key: 0,
        class: "omp-lightbox",
        role: "dialog",
        "aria-modal": "true",
        onClick: u[9] || (u[9] = (l) => H.value = null)
      }, [
        o("button", {
          type: "button",
          class: "omp-lightbox__close",
          "aria-label": "Close image",
          onClick: u[7] || (u[7] = (l) => H.value = null)
        }, [
          k(S, {
            name: "x",
            size: 18
          })
        ]),
        o("img", {
          src: H.value,
          alt: "Attachment preview",
          onClick: u[8] || (u[8] = nt(() => {
          }, ["stop"]))
        }, null, 8, qn)
      ])) : x("", !0)
    ]));
  }
}), to = /* @__PURE__ */ Jt(Xn, [["__scopeId", "data-v-1955e927"]]), eo = { class: "omp-hud__bar" }, so = {
  class: "omp-hud__grip",
  "data-drag-handle": "",
  title: "Drag to move"
}, no = ["title"], oo = {
  key: 0,
  class: "omp-hud__peek"
}, ao = ["title", "aria-expanded"], io = { class: "omp-hud__body" }, ro = { class: "omp-hud__row" }, lo = ["title"], co = { class: "omp-hud__chip-text" }, uo = ["title"], po = { class: "omp-hud__chip-text" }, mo = { class: "omp-hud__row" }, ho = ["title"], fo = { class: "omp-hud__chip-text" }, go = ["title"], vo = { class: "omp-hud__chip-text" }, yo = { class: "omp-hud__status" }, _o = { class: "omp-hud__turns" }, wo = { class: "omp-hud__actions" }, bo = ["disabled", "title"], ko = {
  key: 1,
  class: "omp-hud__placeholder"
}, So = { class: "omp-hud__placeholder-title" }, Mo = { class: "omp-hud__placeholder-note" }, To = { class: "omp-hud__placeholder" }, Co = { class: "omp-hud__launch" }, $o = ["disabled"], Po = ["value"], xo = ["disabled"], ie = "dinotty-omp.preset", re = "dinotty-omp.presets", Eo = 12e3, Io = /* @__PURE__ */ Gt({
  __name: "MiniHudOverlay",
  props: {
    api: {},
    dragging: { type: Boolean }
  },
  setup(t) {
    const e = t, s = T(!1), n = T(!1), a = T(!0), i = T(!0), r = T([]), c = T(lt), d = T({ cwd: "", sessionFile: "", isRunning: !1, state: "inactive", summary: null }), h = T(!1);
    let m = 0, w, C = !1;
    const P = [], U = E(
      () => r.value.find((M) => M.id === c.value) || null
    ), H = E(() => {
      const _ = (d.value.summary?.model || "").split("/").pop() || "omp";
      return _.length > 18 ? `${_.slice(0, 17)}...` : _;
    }), N = E(() => {
      const M = d.value.summary?.totalTokens || 0;
      return M >= 1e6 ? `${(M / 1e6).toFixed(1)}M tok` : M >= 1e3 ? `${Math.round(M / 1e3)}k tok` : `${M} tok`;
    }), D = E(() => {
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
    }), G = E(() => d.value.state === "inactive" ? "is-inactive" : d.value.state === "starting" ? "is-starting" : `is-${d.value.summary?.status || "idle"}`), ct = E(() => {
      const M = d.value.cwd;
      if (!M) return "this pane";
      const _ = M.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean);
      return _[_.length - 1] || M;
    }), ut = E(() => d.value.state === "inactive" ? "Inactive" : d.value.state === "starting" ? "Starting" : `${H.value} · ${d.value.summary?.totalCost.toFixed(2) || "0.00"} USD`);
    function z() {
      try {
        const M = localStorage.getItem(re), _ = M ? JSON.parse(M) : [];
        return Array.isArray(_) ? _ : [];
      } catch {
        return [];
      }
    }
    function q(M) {
      try {
        localStorage.setItem(re, JSON.stringify(M));
      } catch {
      }
    }
    function st() {
      try {
        localStorage.setItem(ie, c.value);
      } catch {
      }
    }
    function Nt(M) {
      if (!C) {
        if (h.value = !0, M.state === "inactive" && n.value && Date.now() < m) {
          d.value = { ...M, state: "starting" };
          return;
        }
        (M.state !== "inactive" || Date.now() >= m) && (n.value = !1), d.value = M;
      }
    }
    function Mt() {
      e.api.open();
    }
    async function dt() {
      await ke(e.api);
    }
    async function Tt() {
      await wt(e.api, { preset: U.value, target: "split-v" });
    }
    async function pt() {
      !await $s(e.api, U.value) || C || (st(), n.value = !0, d.value = { ...d.value, state: "starting", summary: null }, m = Date.now() + Eo, w !== void 0 && window.clearTimeout(w), w = window.setTimeout(() => {
        w = void 0, C || Z(!0);
      }, 600));
    }
    return de(async () => {
      try {
        const Q = localStorage.getItem(ie);
        Q && (c.value = Q);
      } catch {
      }
      const M = z();
      M.length && (r.value = M, a.value = !1), P.push(
        _e(e.api, {
          listener: Nt,
          visible: () => !s.value
        })
      );
      const _ = await St(e.api);
      if (C) return;
      i.value = _ ? _.tmux : !0;
      const B = await zt(e.api);
      C || (r.value = B, q(r.value), r.value.some((Q) => Q.id === c.value) || (c.value = lt), a.value = !1);
    }), Le(() => {
      C = !0, w !== void 0 && (window.clearTimeout(w), w = void 0);
      for (const M of P)
        try {
          M.dispose();
        } catch {
        }
      P.length = 0;
    }), (M, _) => (g(), v("section", {
      class: O(["omp-hud", [`is-${d.value.state}`, { "is-collapsed": s.value, "is-dragging": t.dragging }]]),
      role: "status",
      "aria-live": "polite"
    }, [
      o("header", eo, [
        o("div", so, [
          k(S, {
            name: "bot",
            size: 15,
            class: "omp-hud__logo"
          }),
          _[6] || (_[6] = o("span", { class: "omp-hud__name" }, "OMP", -1)),
          o("span", {
            class: O(["omp-hud__beacon", G.value]),
            title: D.value
          }, null, 10, no),
          s.value ? (g(), v("span", oo, f(ut.value), 1)) : x("", !0)
        ]),
        o("div", {
          class: "omp-hud__tools",
          onPointerdown: _[3] || (_[3] = nt(() => {
          }, ["stop"])),
          onMousedown: _[4] || (_[4] = nt(() => {
          }, ["stop"]))
        }, [
          o("button", {
            type: "button",
            class: "omp-hud__icon",
            title: s.value ? "Expand panel" : "Collapse panel",
            "aria-expanded": !s.value,
            onPointerdown: _[0] || (_[0] = nt(() => {
            }, ["stop"])),
            onMousedown: _[1] || (_[1] = nt(() => {
            }, ["stop"])),
            onClick: _[2] || (_[2] = nt((B) => s.value = !s.value, ["stop"]))
          }, [
            k(S, {
              name: s.value ? "chevron-down" : "chevron-up",
              size: 13
            }, null, 8, ["name"])
          ], 40, ao)
        ], 32)
      ]),
      X(o("div", io, [
        d.value.state === "running" && d.value.summary ? (g(), v(L, { key: 0 }, [
          o("div", ro, [
            o("span", {
              class: "omp-hud__chip",
              title: `Model: ${d.value.summary.model}`
            }, [
              k(S, {
                name: "cpu",
                size: 12
              }),
              o("span", co, f(H.value), 1)
            ], 8, lo),
            o("span", {
              class: "omp-hud__chip",
              title: `Thinking level: ${d.value.summary.thinkingLevel}`
            }, [
              k(S, {
                name: "zap",
                size: 12
              }),
              o("span", po, f(d.value.summary.thinkingLevel), 1)
            ], 8, uo)
          ]),
          o("div", mo, [
            o("span", {
              class: "omp-hud__chip",
              title: `${d.value.summary.totalTokens.toLocaleString()} context tokens`
            }, [
              k(S, {
                name: "layers",
                size: 12
              }),
              o("span", fo, f(N.value), 1)
            ], 8, ho),
            o("span", {
              class: "omp-hud__chip is-cost",
              title: `Session cost ${d.value.summary.totalCost.toFixed(4)} USD`
            }, [
              k(S, {
                name: "activity",
                size: 12
              }),
              o("span", vo, f(d.value.summary.totalCost.toFixed(2)) + " USD", 1)
            ], 8, go)
          ]),
          o("p", yo, [
            o("span", {
              class: O(["omp-hud__status-dot", G.value])
            }, null, 2),
            j(" " + f(D.value) + " ", 1),
            o("span", _o, f(d.value.summary.turns) + " turns", 1)
          ]),
          o("div", wo, [
            o("button", {
              type: "button",
              class: "omp-hud__action",
              title: "Open the session explorer",
              onClick: Mt
            }, [
              k(S, {
                name: "history",
                size: 14
              }),
              _[7] || (_[7] = o("span", null, "Explorer", -1))
            ]),
            o("button", {
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
              _[8] || (_[8] = o("span", null, "Scroll", -1))
            ], 8, bo),
            o("button", {
              type: "button",
              class: "omp-hud__action",
              title: "Open a split pane running OMP",
              onClick: Tt
            }, [
              k(S, {
                name: "split-vertical",
                size: 14
              }),
              _[9] || (_[9] = o("span", null, "Split", -1))
            ])
          ])
        ], 64)) : d.value.state === "starting" || !h.value ? (g(), v("div", ko, [
          _[10] || (_[10] = o("span", {
            class: "omp-hud__spinner",
            "aria-hidden": "true"
          }, null, -1)),
          o("p", So, f(h.value ? "Starting OMP" : "Reading session"), 1),
          o("p", Mo, "Waiting for the first turn in " + f(ct.value), 1)
        ])) : (g(), v(L, { key: 2 }, [
          o("div", To, [
            k(S, {
              name: "info",
              size: 18,
              class: "omp-hud__placeholder-icon"
            }),
            _[11] || (_[11] = o("p", { class: "omp-hud__placeholder-title" }, "No OMP session here", -1)),
            _[12] || (_[12] = o("p", { class: "omp-hud__placeholder-note" }, "Pick a model preset and start one in this pane.", -1))
          ]),
          o("div", Co, [
            _[13] || (_[13] = o("label", {
              class: "omp-hud__label",
              for: "omp-hud-preset"
            }, "Model preset", -1)),
            X(o("select", {
              id: "omp-hud-preset",
              "onUpdate:modelValue": _[5] || (_[5] = (B) => c.value = B),
              class: "omp-hud__select",
              disabled: a.value,
              onChange: st
            }, [
              (g(!0), v(L, null, F(r.value, (B) => (g(), v("option", {
                key: B.id,
                value: B.id
              }, f(B.label), 9, Po))), 128))
            ], 40, $o), [
              [pe, c.value]
            ]),
            o("button", {
              type: "button",
              class: "omp-hud__launch-btn",
              disabled: a.value || n.value,
              title: "Run OMP in the active pane",
              onClick: pt
            }, [
              k(S, {
                name: "play",
                size: 12
              }),
              o("span", null, f(n.value ? "Starting" : "Launch"), 1)
            ], 8, xo)
          ])
        ], 64))
      ], 512), [
        [Oe, !s.value]
      ])
    ], 2));
  }
}), Lo = /* @__PURE__ */ Jt(Io, [["__scopeId", "data-v-30d2ca9a"]]);
function Ao(t) {
  const e = _e(t, {});
  return {
    series: {
      id: "dinotty-omp:session",
      label: "OMP session cost",
      scale: "auto",
      statusIcon: "Bot",
      defaultVisible: !0,
      current: () => {
        const n = Et().summary;
        return n ? n.totalCost : null;
      },
      statusText: () => {
        const n = Et();
        if (n.state === "inactive") return null;
        const a = n.summary;
        if (n.state === "starting" || !a) return "OMP: starting";
        const i = a.model.split("/").pop() || "omp";
        return `OMP ${i.length > 16 ? `${i.slice(0, 15)}...` : i} ${a.totalCost.toFixed(2)} USD`;
      },
      detail: () => {
        const n = Et();
        if (n.state === "inactive")
          return [{ label: "State", value: "No OMP session in this tab" }];
        const a = n.summary;
        return a ? [
          { label: "Model", value: a.model },
          { label: "Provider", value: a.provider },
          { label: "Thinking", value: a.thinkingLevel },
          { label: "Status", value: a.status.replace("_", " ") },
          { label: "Context tokens", value: a.totalTokens.toLocaleString() },
          { label: "Assistant turns", value: String(a.turns) },
          { label: "Session cost", value: `${a.totalCost.toFixed(4)} USD` },
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
const zo = 244, mt = 12, Oo = 560;
function Ro() {
  return typeof window > "u" || typeof window.innerWidth != "number" ? 1280 : Number.isFinite(window.innerWidth) && window.innerWidth > 0 ? window.innerWidth : 1280;
}
function No() {
  const t = Ro();
  return t < Oo ? { x: mt, y: mt } : { x: Math.max(mt, t - zo - mt), y: mt };
}
const Se = "dinotty:overlay-pos:dinotty-omp:dinotty-omp:hud", le = "dinotty-omp:overlay-pos-migrated:v1", Do = 44, Fo = 120, ce = 244, ue = 12;
function Ho() {
  try {
    const t = localStorage.getItem(Se);
    if (!t) return null;
    const e = JSON.parse(t);
    return typeof e?.x != "number" || typeof e?.y != "number" || !Number.isFinite(e.x) || !Number.isFinite(e.y) ? null : { x: e.x, y: e.y };
  } catch {
    return null;
  }
}
function Bo(t, e, s) {
  return t.x < 0 || t.y < 0 || t.x > e || t.y > s ? !0 : t.y >= Do ? !1 : t.x >= e - ce - ue && t.x <= e - ce + ue || t.x > e - Fo;
}
function jo(t) {
  if (typeof window > "u") return;
  const e = window.innerWidth, s = window.innerHeight;
  if (!Number.isFinite(e) || !Number.isFinite(s) || e <= 0 || s <= 0 || e >= 560) return;
  try {
    if (localStorage.getItem(le)) return;
  } catch {
    return;
  }
  const n = Ho();
  if (!(!n || !Bo(n, e, s)))
    try {
      localStorage.setItem(Se, JSON.stringify(t)), localStorage.setItem(le, "1");
    } catch {
    }
}
let kt = [];
function ht(t) {
  kt.push(() => t.dispose());
}
function Yo(t) {
  kt = [], ht(
    t.commands.register("omp.open-session-viewer", () => {
      t.open();
    })
  ), ht(
    t.commands.register("omp.tmux-copymode", () => {
      ke(t);
    })
  ), ht(
    t.commands.registerQuickPick("omp.quick-launch", {
      title: "OMP: launch a model preset in a new tab",
      items: async () => ae(t, await zt(t), "new-tab")
    })
  ), ht(
    t.commands.registerQuickPick("omp.split-launch", {
      title: "OMP: launch a model preset in a split pane",
      items: async () => ae(t, await zt(t), "split-v")
    })
  ), ht(
    t.commands.registerQuickPick("omp.skill-palette", {
      title: "OMP: search skills and inject one",
      items: async () => (await Yt(t)).map((a) => ({
        label: a.name,
        detail: a.description,
        icon: "book",
        action: () => {
          we(t, a.name);
        }
      }))
    })
  );
  const e = Ao(t);
  kt.push(() => e.dispose());
  const s = No();
  return jo(s), {
    component: to,
    overlay: [
      {
        id: "dinotty-omp:hud",
        component: Lo,
        dragHandle: "grip",
        interactive: !0,
        defaultPosition: s
      }
    ],
    monitor: { series: [e.series] },
    dispose: Uo
  };
}
function Uo() {
  for (const t of kt)
    try {
      t();
    } catch {
    }
  kt = [], rs(), hs(), Ss(), gs();
}
export {
  Yo as activate,
  Uo as deactivate
};
