const p = window.__DINOTTY_VUE__;
if (!p)
  throw new Error("host vue bridge missing: window.__DINOTTY_VUE__ not assigned");
const T = p.ref;
p.reactive;
const E = p.computed;
p.watch;
const me = p.onMounted;
p.onUnmounted;
const ze = p.onBeforeUnmount;
p.nextTick;
p.h;
const Gt = p.defineComponent;
p.getCurrentInstance;
const f = p.toDisplayString, R = p.normalizeClass;
p.normalizeStyle;
const g = p.openBlock, v = p.createElementBlock, a = p.createElementVNode, Oe = p.createBlock, k = p.createVNode, I = p.createCommentVNode, j = p.createTextVNode;
p.withCtx;
const X = p.withDirectives, st = p.withModifiers;
p.withKeys;
const Ht = p.vModelText, he = p.vModelSelect, Re = p.vModelCheckbox;
p.vModelRadio;
const Ne = p.vShow, De = p.mergeProps, F = p.renderList;
p.renderSlot;
p.resolveComponent;
p.resolveDirective;
const Fe = p.resolveDynamicComponent;
p.resolveTransitionHooks;
p.setBlockTracking;
p.useSlots;
p.useAttrs;
p.isRef;
const He = p.unref;
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
const A = p.Fragment;
p.Static;
p.Text;
p.Comment;
const te = {
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
}, Be = ["width", "height"], je = /* @__PURE__ */ Gt({
  __name: "Icon",
  props: {
    name: {},
    size: { default: 16 },
    class: { default: "" }
  },
  setup(t) {
    const e = t, s = E(() => e.size), n = E(() => e.class), o = E(() => te[e.name] || te.info);
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
      class: R(["omp-svg-icon", n.value]),
      "aria-hidden": "true"
    }, [
      (g(!0), v(A, null, F(o.value, (c, y) => (g(), Oe(Fe(c.tag), De({ key: y }, { ref_for: !0 }, c.attrs), null, 16))), 128))
    ], 10, Be));
  }
}), Jt = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, o] of e)
    s[n] = o;
  return s;
}, S = /* @__PURE__ */ Jt(je, [["__scopeId", "data-v-35ecedfe"]]), V = {
  cwd: "",
  sessionFile: "",
  isRunning: !1,
  state: "inactive",
  summary: null
};
function Ve(t) {
  return !(!t || typeof t != "object" || !("model" in t) || typeof t.model != "string" || !("provider" in t) || typeof t.provider != "string" || !("thinkingLevel" in t) || typeof t.thinkingLevel != "string" || !("status" in t) || !["idle", "thinking", "running_tool", "error"].includes(String(t.status)) || !("totalTokens" in t) || typeof t.totalTokens != "number" || !Number.isSafeInteger(t.totalTokens) || t.totalTokens < 0 || !("turns" in t) || typeof t.turns != "number" || !Number.isSafeInteger(t.turns) || t.turns < 0 || !("totalCost" in t) || typeof t.totalCost != "number" || !Number.isFinite(t.totalCost) || t.totalCost < 0);
}
async function fe(t, e) {
  const s = e?.paneId ?? t.terminal.activePaneId() ?? "", n = e?.cwd ?? t.terminal.activeCwd() ?? "";
  try {
    const o = await t.exec.run(["pane", s, n]);
    if (o.code !== 0 || !o.stdout.trim()) return V;
    const i = JSON.parse(o.stdout.trim());
    return !i || typeof i != "object" || !("cwd" in i) || typeof i.cwd != "string" || !("sessionFile" in i) || typeof i.sessionFile != "string" || !("isRunning" in i) || typeof i.isRunning != "boolean" || !("state" in i) || i.state !== "inactive" && i.state !== "starting" && i.state !== "running" || i.state === "inactive" != !i.isRunning || !("summary" in i) || i.summary !== null && !Ve(i.summary) ? V : {
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
function Ue(t) {
  const e = t.replace(/\\/g, "/").split("/").pop() || t, s = e.match(/^(\d{4}-\d{2}-\d{2})T(\d{2})-(\d{2})-(\d{2})/);
  return s ? `${s[1]} ${s[2]}:${s[3]}:${s[4]}` : e.replace(/\.jsonl$/, "");
}
function Ye(t) {
  const e = t.replace(/\\/g, "/").split("/"), s = e[e.length - 2] || "";
  return s ? s.replace(/^-/, "").replace(/-/g, "/") || "home" : "workspace";
}
function We(t, e = Date.now()) {
  if (!t) return "unknown";
  const s = e - t, n = Math.round(s / 6e4);
  if (n < 1) return "just now";
  if (n < 60) return `${n}m ago`;
  const o = Math.round(n / 60);
  return o < 24 ? `${o}h ago` : `${Math.round(o / 24)}d ago`;
}
async function Ge(t, e, s) {
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
  const i = Date.now(), r = [];
  for (const c of o)
    try {
      const y = await t.workspace.readDir(c);
      for (const u of y.entries) {
        if (u.is_dir || !u.name.endsWith(".jsonl") || u.name.startsWith("__") || !/^\d{4}-\d{2}-\d{2}T/.test(u.name)) continue;
        const h = [c, u.name].join(n);
        let m = 0;
        try {
          m = (await t.workspace.stat(h)).modified || 0;
        } catch {
        }
        r.push({
          path: h,
          name: u.name,
          modified: m,
          displayName: Ue(h),
          workspace: Ye(h),
          ageLabel: We(m, i)
        });
      }
    } catch {
    }
  return r.sort((c, y) => y.modified - c.modified || y.name.localeCompare(c.name)), r;
}
class Je {
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
    const o = n.timestamp || this.updatedAt || Date.now();
    if (n.role === "assistant") {
      this.turns += 1;
      let i = "", r = "";
      const c = [], y = n.content;
      if (Array.isArray(y))
        for (const u of y) {
          const h = u;
          if (h?.type === "text") i += `${h.text || ""}
`;
          else if (h?.type === "thinking") r += `${h.thinking || h.text || ""}
`;
          else if (h?.type === "toolCall") {
            const m = h.arguments ?? {}, _ = {
              id: h.id || `call-${this.messages.length}-${c.length}`,
              name: h.name || "tool",
              arguments: m,
              argumentsLabel: Ze(m),
              intent: h.intent
            };
            c.push(_), this.pending.set(_.id, _);
          }
        }
      this.messages.push({
        id: s.id || `msg-${o}-${this.messages.length}`,
        role: "assistant",
        text: i.trim(),
        images: [],
        timestamp: o,
        timeLabel: Bt(o),
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
          const u = y;
          u?.type === "text" ? i += `${u.text || ""}
` : u?.type === "image" && (u.url ? r.push(u.url) : u.data && r.push(`data:${u.mediaType || "image/png"};base64,${u.data}`));
        }
      else typeof c == "string" && (i = c);
      this.messages.push({
        id: s.id || `msg-${o}-${this.messages.length}`,
        role: "user",
        text: i.trim(),
        images: r,
        timestamp: o,
        timeLabel: Bt(o),
        searchText: ""
      }), this.trim();
      return;
    }
    if (n.role === "toolResult") {
      let i = "";
      const r = n.content;
      if (Array.isArray(r))
        for (const u of r) {
          const h = u;
          h?.type === "text" && (i += `${h.text || ""}
`);
        }
      else typeof r == "string" && (i = r);
      const c = n.toolCallId, y = c ? this.pending.get(c) : void 0;
      if (y && c) {
        y.result = i.trim(), y.isError = !!n.isError, this.pending.delete(c);
        for (const u of this.messages)
          u.toolCalls?.includes(y) && (u.searchText = "");
      } else
        this.messages.push({
          id: s.id || `msg-${o}-${this.messages.length}`,
          role: "toolResult",
          text: i.trim(),
          images: [],
          timestamp: o,
          timeLabel: Bt(o),
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
function Ze(t) {
  if (typeof t == "string") return t;
  try {
    return JSON.stringify(t, null, 2);
  } catch {
    return String(t);
  }
}
function Ke(t) {
  const e = [t.text];
  if (t.thinking && e.push(t.thinking), t.toolCalls)
    for (const s of t.toolCalls)
      e.push(s.name), s.intent && e.push(s.intent), s.result && e.push(s.result);
  return t.searchText = e.join(" ").toLowerCase(), t.searchText;
}
const qe = 2 * 1024 * 1024, Qe = 6 * 1024 * 1024, Xe = 1024 * 1024, ts = 6, U = /* @__PURE__ */ new Map();
function es(t, e, s, n = 0) {
  return `${t}\0${e}\0${s}\0${n}`;
}
async function ss(t, e, s, n) {
  try {
    const o = await t.exec.run(["chunk", e, String(s), String(n)]);
    if (o.code !== 0 || !o.stdout.trim()) return null;
    const i = JSON.parse(o.stdout.trim());
    return i.error || typeof i != "object" || i === null || typeof i.start != "number" || typeof i.end != "number" || typeof i.size != "number" || typeof i.eof != "boolean" || typeof i.content != "string" ? null : i;
  } catch {
    return null;
  }
}
async function ns(t, e) {
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
function os(t, e, s, n, o) {
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
function ee(t) {
  return t.map((e) => ({
    ...e,
    toolCalls: e.toolCalls?.map((s) => ({ ...s }))
  }));
}
function as(t) {
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
function is(t, e, s, n) {
  let o = null;
  for (const i of U.values())
    i.data.filePath === t && i.size === e && i.mtime === s && i.data.startOffset > 0 && i.data.loadedBytes < n && (!o || i.data.loadedBytes > o.loadedBytes) && (o = i.data);
  return o;
}
async function rs(t, e, s, n, o) {
  const i = new Je({ keepMessages: Number.MAX_SAFE_INTEGER });
  let r = s, c = null, y = s, u = 0;
  for (; ; ) {
    const h = await ss(t, e, r, Xe);
    if (!h) return null;
    c ??= h, u === 0 && (y = h.start);
    let m = h.content, _ = h.end;
    if (o !== void 0 && h.start >= o) break;
    if (o !== void 0 && _ > o) {
      const P = new TextEncoder().encode(m);
      m = new TextDecoder().decode(P.subarray(0, Math.max(0, o - h.start))), _ = o;
    }
    const C = new TextEncoder().encode(m).byteLength;
    if (!C && _ <= r) return null;
    if (i.push(m, h.eof || o !== void 0 && _ >= o), u += C, _ <= r || h.eof || o !== void 0 && _ >= o || u >= n) break;
    r = h.end;
  }
  return { parser: i, metadata: c, startOffset: y, loadedBytes: u };
}
function ls(t, e) {
  return e && (t.model = e.model, t.provider = e.provider, t.totalTokens = e.totalTokens, t.totalCost = e.totalCost, t.turns = e.turns, t.metricsExact = !0), t;
}
async function se(t, e, s = {}) {
  const n = await t.workspace.stat(e).catch(() => null);
  if (!n || n.is_dir) return null;
  const o = Math.max(1, s.tailBytes ?? qe), i = Math.max(1, s.historyBytes ?? Qe), r = s.before ?? is(e, n.size, n.modified || 0, o), c = es(e, o, i, r?.startOffset || 0), y = U.get(c);
  if (y && y.mtime === (n.modified || 0) && y.size === n.size)
    return U.delete(c), U.set(c, y), y.data;
  const u = r ? Math.min(r.startOffset, n.size) : void 0, h = u === void 0 ? Math.max(0, n.size - o) : Math.max(0, u - i), m = await rs(t, e, h, i, u);
  if (!m) return null;
  let _;
  if (r) {
    const C = as([...ee(m.parser.messages), ...ee(r.messages)]);
    _ = {
      ...r,
      messages: C,
      droppedHead: m.startOffset > 0 || m.parser.droppedHead || r.droppedHead,
      startOffset: m.startOffset,
      loadedBytes: m.loadedBytes + r.loadedBytes,
      fileSize: n.size,
      metricsExact: !1
    }, !_.sessionId && m.parser.sessionId && (_.sessionId = m.parser.sessionId), !_.cwd && m.parser.cwd && (_.cwd = m.parser.cwd);
  } else
    _ = os(m.parser, e, n.size, m.startOffset, m.loadedBytes), !_.sessionId && m.metadata?.sessionId && (_.sessionId = m.metadata.sessionId), !_.cwd && m.metadata?.cwd && (_.cwd = m.metadata.cwd);
  for (ls(_, await ns(t, e)), U.set(c, { mtime: n.modified || 0, size: n.size, data: _ }); U.size > ts; ) U.delete(U.keys().next().value);
  return _;
}
function cs() {
  U.clear();
}
const Zt = {
  cwd: "",
  sessionFile: "",
  isRunning: !1,
  state: "inactive",
  summary: null
}, us = 250, ds = 3e4, ps = 2500, ms = 3e3, hs = 3e3, Kt = 600, x = /* @__PURE__ */ new Set();
let L = null, N = Zt, ot = "", yt = null, _t = null, At = null, at = null, jt = null, Vt = "", $t = 0, J = 0, Y = null, Pt = -1, It = "", rt = !1, Z = !1, it = null, tt = -1 / 0, Lt = "";
function ge(t) {
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
  for (const t of x)
    if (!t.subscriber.visible || t.subscriber.visible()) return !0;
  return !1;
}
function ve() {
  for (const t of x)
    if (!t.disposed)
      try {
        t.subscriber.listener?.(N);
      } catch {
      }
}
function Rt() {
  yt !== null && (clearTimeout(yt), yt = null);
}
function fs() {
  it !== null && (clearTimeout(it), it = null);
}
function ye() {
  _t !== null && (clearTimeout(_t), _t = null);
}
function _e() {
  ye(), !(!L || x.size === 0) && (_t = setTimeout(() => {
    if (_t = null, L && x.size > 0 && Ot()) {
      const t = L.terminal.activePaneId() || "";
      t !== ot && bt(t);
    }
    _e();
  }, us));
}
function qt() {
  $t += 1, jt?.dispose(), jt = null, Vt = "";
}
function ne() {
  if (Rt(), !L || x.size === 0 || Y) return;
  const t = Date.now(), e = N.summary?.status, s = N.state === "starting" ? hs : e === "thinking" || e === "running_tool" ? ps : N.sessionFile ? ds : ms, n = rt ? Z ? 0 : Math.max(0, tt + Kt - t) : Math.max(0, tt + s - t);
  Ot() && (yt = setTimeout(() => {
    yt = null, K(Z);
  }, n));
}
function gs() {
  const t = L;
  if (!t || x.size === 0) return;
  const e = N.sessionFile, s = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\")), n = s > 0 ? e.slice(0, s) : "";
  if (n === Vt || (qt(), !n || typeof t.workspace.watch != "function")) return;
  Vt = n;
  const o = $t, i = (r) => r.replace(/\\/g, "/");
  try {
    const r = t.workspace.watch(n, (c) => {
      L !== t || x.size === 0 || o !== $t || c.type === "file_event" && (c.path && i(c.path) !== i(N.sessionFile) || (rt = !0, Y && (Z = !0, it === null && Ot() && (it = setTimeout(() => {
        it = null, K(!0);
      }, Kt))), K(!1)));
    });
    Promise.resolve(r).then((c) => {
      if (L !== t || x.size === 0 || o !== $t) {
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
  const e = L;
  if (!e || x.size === 0 || t === ot) return;
  J += 1, ot = t, N = {
    ...Zt,
    cwd: e.terminal.activeCwd() || "",
    isRunning: !0,
    state: "starting"
  }, Lt = ge(N), tt = -1 / 0, qt(), rt = !0, Z = !0, ve();
  const s = J;
  if ((e.terminal.activePaneId() || "") === t) {
    K(!0);
    return;
  }
  queueMicrotask(() => {
    if (L !== e || x.size === 0 || s !== J) return;
    const o = e.terminal.activePaneId() || t;
    if (o !== ot) {
      bt(o);
      return;
    }
    K(!0);
  });
}
function K(t = !1) {
  const e = L;
  if (!e || x.size === 0) return Promise.resolve();
  const s = e.terminal.activePaneId() || "";
  if (s !== ot)
    return bt(s), Y || Promise.resolve();
  if (rt = !0, Z ||= t, Y && Pt === J && It === s) return Y;
  if (!Ot() || !Z && Date.now() - tt < Kt)
    return ne(), Promise.resolve();
  Rt();
  const n = { paneId: s, cwd: e.terminal.activeCwd() || "" }, o = J;
  rt = !1, Z = !1;
  const i = fe(e, n).then((r) => {
    if (L !== e || x.size === 0 || o !== J) return;
    const c = e.terminal.activePaneId() || "";
    if (c !== n.paneId) {
      bt(c);
      return;
    }
    tt = Date.now();
    const y = ge(r);
    N = r, gs(), y !== Lt && (Lt = y, ve());
  }).catch(() => {
    L === e && o === J && (tt = Date.now());
  }).finally(() => {
    Y === i && (Y = null, Pt = -1, It = "", ne());
  });
  return Y = i, Pt = o, It = n.paneId, Promise.resolve();
}
function we() {
  J += 1, Rt(), fs(), ye(), At?.dispose(), At = null, qt(), at && typeof document < "u" && document.removeEventListener("visibilitychange", at), at = null, L = null, Y = null, Pt = -1, It = "", rt = !1, Z = !1, N = Zt, ot = "", Lt = "", tt = -1 / 0;
}
function be(t, e) {
  L = t;
  const s = { subscriber: e, disposed: !1 };
  return x.add(s), !At && typeof t.terminal.onDidChangeActivePane == "function" && (At = t.terminal.onDidChangeActivePane((n) => {
    L !== t || x.size === 0 || bt(n || t.terminal.activePaneId() || "");
  })), typeof document < "u" && !at && (at = () => {
    document.hidden ? Rt() : K(!0);
  }, document.addEventListener("visibilitychange", at)), _e(), e.listener?.(N), K(!0), {
    dispose() {
      s.disposed || (s.disposed = !0, x.delete(s), x.size === 0 && we());
    }
  };
}
function Et() {
  return N;
}
function vs() {
  x.clear(), we();
}
let ft = null, nt = null;
function ys(t) {
  return /^[A-Za-z]:[\\/]/.test(t) || t.includes("\\");
}
function xt(t, ...e) {
  const s = ys(t) ? "\\" : "/";
  return [t.replace(/[\\/]+$/, ""), ...e].join(s);
}
async function St(t) {
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
function _s() {
  ft = null, nt = null;
}
const ws = [
  { category: "verification", match: /\b(test|verify|prove|gate|benchmark|regression|audit)\b/ },
  { category: "diagnostics", match: /\b(diagnos|debug|triage|trace|investigat|root cause)\b/ },
  { category: "delivery", match: /\b(deploy|release|ship|publish|rollout|ci|pipeline|merge)\b/ },
  { category: "authoring", match: /\b(write|author|document|readme|spec|plan|design)\b/ }
];
let gt = [], Ut = 0;
const bs = 6e4;
function ks(t, e) {
  const s = `${t} ${e}`.toLowerCase();
  for (const n of ws)
    if (n.match.test(s)) return n.category;
  return "general";
}
function Ss(t) {
  const e = t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!e) return { name: "", description: "", body: t };
  let s = "", n = "";
  for (const o of e[1].split(/\r?\n/)) {
    const i = o.match(/^name:\s*(.+)$/);
    i && (s = i[1].trim().replace(/^['"]|['"]$/g, ""));
    const r = o.match(/^description:\s*(.+)$/);
    r && (n = r[1].trim().replace(/^['"]|['"]$/g, ""));
  }
  return { name: s, description: n, body: e[2] };
}
async function Ms(t) {
  const e = await St(t), s = [];
  return e?.ompHome ? (s.push({ label: "managed", path: xt(e.ompHome, "managed-skills") }), s.push({ label: "project", path: xt(e.ompHome, "skills") })) : (s.push({ label: "managed", path: "~/.omp/agent/managed-skills" }), s.push({ label: "project", path: "~/.omp/agent/skills" })), e?.home ? s.push({ label: "user", path: xt(e.home, ".agents", "skills") }) : s.push({ label: "user", path: "~/.agents/skills" }), s;
}
async function Yt(t, e = !1) {
  const s = Date.now();
  if (!e && gt.length && s - Ut < bs) return gt;
  const n = await Ms(t), o = n[0]?.path.includes("\\") ? "\\" : "/", i = /* @__PURE__ */ new Map();
  for (const r of n) {
    let c;
    try {
      c = await t.workspace.readDir(r.path);
    } catch {
      continue;
    }
    for (const y of c.entries) {
      if (!y.is_dir) continue;
      const u = [r.path, y.name, "SKILL.md"].join(o);
      try {
        const h = await t.workspace.readFile(u);
        if (!h.content) continue;
        const { name: m, description: _, body: C } = Ss(h.content), P = m || y.name;
        if (i.has(P)) continue;
        i.set(P, {
          id: P,
          name: P,
          description: _ || "No description provided.",
          category: ks(P, _),
          source: r.label,
          filePath: u,
          body: C
        });
      } catch {
      }
    }
  }
  return gt = [...i.values()].sort((r, c) => r.name.localeCompare(c.name)), Ut = s, gt;
}
function Ts(t, e, s = "all") {
  const o = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return t.filter((i) => {
    if (s !== "all" && i.category !== s) return !1;
    if (!o.length) return !0;
    const r = `${i.name} ${i.description}`.toLowerCase();
    return o.every((c) => r.includes(c));
  });
}
function ke(t, e) {
  const s = t.terminal.activePaneId();
  return s ? (t.terminal.send(s, `/skill ${e}
`), t.ui.notify(`Injected skill ${e}`, "info"), !0) : (t.ui.notify("No active terminal pane to inject into", "warn"), !1);
}
function Cs() {
  gt = [], Ut = 0;
}
const $s = 20, oe = 500, Ps = 750;
function ae(t, e) {
  const n = t.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean), r = `omp-${(n[n.length - 1] || "workspace").replace(/[^a-zA-Z0-9_-]+/g, "_").slice(0, 32) || "workspace"}`;
  return e ? `${r}-${e}` : r;
}
function Se(t) {
  return [];
}
function Is(t) {
  return t ? `/modelpreset switch ${t.id}
` : "";
}
function vt(t) {
  return `'${t.replace(/'/g, "'\\''")}'`;
}
function ie(t) {
  const e = t.replace(/\\/g, "/").replace(/\/+$/, "");
  return /^[A-Za-z]:/.test(e) ? e.toLowerCase() : e;
}
async function Qt(t) {
  try {
    const e = await t.exec.run(["live-omp-clients"]);
    if (e.code !== 0 || !e.stdout.trim()) return [];
    const s = JSON.parse(e.stdout.trim());
    if (!Array.isArray(s)) return [];
    const n = [];
    for (const o of s)
      !o || typeof o != "object" || Array.isArray(o) || !("pid" in o) || typeof o.pid != "number" || !Number.isSafeInteger(o.pid) || o.pid <= 0 || !("projectDir" in o) || typeof o.projectDir != "string" || n.push({ pid: o.pid, projectDir: o.projectDir });
    return n;
  } catch {
    return [];
  }
}
function Wt(t, e, s, n, o) {
  if (!n) return;
  const i = new Set(o.map((u) => u.pid)), r = ie(s);
  let c = 0;
  const y = async () => {
    if (c >= $s) {
      t.ui.notify(`OMP preset ${n.id} was not applied before startup timeout`, "warn");
      return;
    }
    c += 1;
    const [u, h] = await Promise.all([
      fe(t, { paneId: e, cwd: s }),
      Qt(t)
    ]);
    if (h.some(
      (_) => !i.has(_.pid) && ie(_.projectDir) === r
    )) {
      const _ = Is(n);
      _ && window.setTimeout(() => {
        t.terminal.send(e, _), t.ui.notify(`OMP preset ${n.id} applied`, "info");
      }, Ps);
      return;
    }
    window.setTimeout(() => void y(), oe);
  };
  window.setTimeout(() => void y(), oe);
}
async function wt(t, e = {}) {
  const s = await St(t), n = e.cwd || t.terminal.activeCwd() || s?.home || ".", o = e.target || "new-tab", i = Se(e.preset), r = e.preset?.id || lt, c = !!s?.tmux && s?.platform !== "win32", y = await Qt(t), u = ["omp", ...i].map(vt).join(" "), h = `${u}; exec "$SHELL"`;
  if (o === "new-tab") {
    const W = Math.random().toString(36).slice(2, 10), D = ae(n, W), H = c ? ["tmux", "new-session", "-s", D, "-c", n, "sh", "-c", h] : ["omp", ...i], z = await t.terminal.createTerminalTab({
      cwd: n,
      argv: H,
      title: `OMP: ${r}`
    });
    return Wt(t, z, n, e.preset, y), t.ui.notify(
      c ? `OMP started in tmux session ${D}` : `OMP started with preset ${r}`,
      "info"
    ), z;
  }
  const m = await t.terminal.splitTerminalPane({
    direction: o === "split-h" ? "horizontal" : "vertical",
    cwd: n
  });
  if (!m)
    return t.ui.notify("Split failed: no active terminal tab", "warn"), null;
  const _ = m.replace(/[^a-zA-Z0-9_-]+/g, "").slice(0, 8) || Math.random().toString(36).slice(2, 10), C = ae(n, _), P = c ? `tmux new-session -s ${vt(C)} -c ${vt(n)} sh -c ${vt(h)}` : u;
  return t.terminal.send(m, `${P}
`), Wt(t, m, n, e.preset, y), t.ui.notify(`OMP started in a split pane with preset ${r}`, "info"), m;
}
async function Es(t, e) {
  const s = t.terminal.activePaneId();
  if (!s)
    return t.ui.notify("No active terminal pane to launch into", "warn"), !1;
  const n = t.terminal.activeCwd() || "", o = await Qt(t), i = ["omp", ...Se()].map(vt).join(" ");
  return t.terminal.send(s, `${i}
`), Wt(t, s, n, e, o), t.ui.notify(`Launching OMP with preset ${e?.id || lt}`, "info"), !0;
}
async function Me(t) {
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
function xs(t) {
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
    for (const o of s) {
      const i = xs(o);
      i && n.push(i);
    }
    return n.sort((o, i) => o.isDefault !== i.isDefault ? o.isDefault ? -1 : 1 : o.id.localeCompare(i.id));
  } catch {
    return [];
  }
}
function re(t, e, s) {
  return e.map((n) => ({
    label: n.label,
    detail: `${Object.keys(n.modelRoles).length} model roles · thinking ${n.defaultThinkingLevel}`,
    icon: "zap",
    action: () => {
      wt(t, { preset: n, target: s });
    }
  }));
}
const As = { class: "omp-app" }, Ls = { class: "omp-app__bar" }, zs = { class: "omp-app__brand" }, Os = { class: "omp-app__version" }, Rs = {
  class: "omp-app__tabs",
  role: "tablist",
  "aria-label": "OMP Pilot sections"
}, Ns = ["aria-selected", "onClick"], Ds = {
  key: 0,
  class: "omp-app__badge"
}, Fs = { class: "omp-app__bar-actions" }, Hs = ["value"], Bs = { class: "omp-app__body" }, js = {
  key: 0,
  class: "omp-pane omp-pane--sessions"
}, Vs = { class: "omp-sessions" }, Us = { class: "omp-sessions__head" }, Ys = { class: "omp-field omp-field--search" }, Ws = { class: "omp-toggle" }, Gs = {
  class: "omp-sessions__list",
  role: "listbox",
  "aria-label": "OMP sessions"
}, Js = {
  key: 0,
  class: "omp-hint"
}, Zs = {
  key: 1,
  class: "omp-hint"
}, Ks = ["aria-selected", "onClick"], qs = { class: "omp-session__title" }, Qs = { class: "omp-session__meta" }, Xs = { class: "omp-transcript" }, tn = { class: "omp-transcript__head" }, en = { class: "omp-transcript__meta" }, sn = { class: "omp-tag" }, nn = { class: "omp-tag" }, on = { class: "omp-tag omp-tag--cost" }, an = { class: "omp-tag" }, rn = { class: "omp-transcript__tools" }, ln = { class: "omp-field omp-field--search" }, cn = {
  key: 0,
  class: "omp-banner omp-banner--action"
}, un = ["disabled"], dn = { class: "omp-turns" }, pn = {
  key: 0,
  class: "omp-hint"
}, mn = {
  key: 1,
  class: "omp-hint"
}, hn = { class: "omp-turn__head" }, fn = { class: "omp-turn__role" }, gn = { class: "omp-turn__time" }, vn = {
  key: 0,
  class: "omp-fold"
}, yn = { class: "omp-code" }, _n = {
  key: 1,
  class: "omp-turn__text"
}, wn = {
  key: 2,
  class: "omp-turn__images"
}, bn = ["onClick"], kn = ["src"], Sn = { class: "omp-fold__name" }, Mn = {
  key: 0,
  class: "omp-fold__intent"
}, Tn = { class: "omp-fold__state" }, Cn = { class: "omp-code" }, $n = { class: "omp-code" }, Pn = {
  key: 1,
  class: "omp-empty"
}, In = {
  key: 1,
  class: "omp-pane omp-pane--skills"
}, En = { class: "omp-skills__head" }, xn = { class: "omp-field omp-field--search omp-field--grow" }, An = { class: "omp-chips" }, Ln = ["onClick"], zn = { class: "omp-skills__body" }, On = { class: "omp-skills__grid" }, Rn = {
  key: 0,
  class: "omp-hint"
}, Nn = {
  key: 1,
  class: "omp-hint"
}, Dn = ["onClick"], Fn = { class: "omp-skill__title" }, Hn = { class: "omp-skill__desc" }, Bn = { class: "omp-skill__tags" }, jn = { class: "omp-chip omp-chip--tiny" }, Vn = { class: "omp-chip omp-chip--tiny" }, Un = {
  key: 0,
  class: "omp-skill-detail"
}, Yn = { class: "omp-skill-detail__desc" }, Wn = { class: "omp-code omp-code--tall" }, Gn = {
  key: 2,
  class: "omp-pane omp-pane--profiles"
}, Jn = { class: "omp-profiles__grid" }, Zn = { class: "omp-profile__icon" }, Kn = { class: "omp-profile__actions" }, qn = ["onClick"], Qn = ["onClick"], Xn = ["onClick"], to = ["src"], eo = 6 * 1024 * 1024, Ct = 200, so = /* @__PURE__ */ Gt({
  __name: "MainView",
  props: {
    api: {}
  },
  setup(t) {
    const e = t, s = "1.1.2", n = ["all", "verification", "diagnostics", "delivery", "authoring", "general"], o = T("sessions"), i = T(""), r = T([]), c = T(!0), y = T(""), u = T(!0), h = T(""), m = T(null), _ = T(!1), C = T(!1), P = T(Ct), W = T(""), D = T(null);
    let H = 0;
    const z = T([]), G = T(!0), ct = T(""), ut = T("all"), O = T(null), q = T([]), et = T(lt), Nt = E(() => [
      { id: "sessions", label: "Sessions", icon: "message-square", badge: r.value.length },
      { id: "skills", label: "Skills", icon: "book", badge: z.value.length },
      { id: "profiles", label: "Model presets", icon: "zap", badge: q.value.length }
    ]), Mt = E(() => {
      const b = y.value.trim().toLowerCase();
      return b ? r.value.filter((d) => d.path.toLowerCase().includes(b)) : r.value;
    }), dt = E(() => {
      if (!m.value) return [];
      const b = W.value.trim().toLowerCase();
      return b ? m.value.messages.filter((d) => Ke(d).includes(b)) : m.value.messages;
    }), Tt = E(() => {
      const b = dt.value;
      return b.length > P.value ? b.slice(b.length - P.value) : b;
    }), pt = E(() => Math.max(0, dt.value.length - Tt.value.length)), M = E(() => Ts(z.value, ct.value, ut.value)), w = E(
      () => q.value.find((b) => b.id === et.value) || null
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
          const d = await St(e.api);
          i.value = d?.ompHome ? xt(d.ompHome, "sessions") : "~/.omp/agent/sessions";
        }
        let b;
        if (u.value) {
          const d = Et().sessionFile;
          if (!d) {
            r.value = [], h.value = "", m.value = null;
            return;
          }
          const l = d.replace(/\\/g, "/").split("/");
          b = l[l.length - 2];
        }
        r.value = await Ge(e.api, i.value, b), r.value.length && !r.value.some((d) => d.path === h.value) && await Xt(r.value[0].path);
      } finally {
        c.value = !1;
      }
    }
    async function Xt(b) {
      const d = ++H;
      h.value = b, P.value = Ct, _.value = !0;
      try {
        const l = await se(e.api, b);
        d === H && h.value === b && (m.value = l);
      } finally {
        d === H && (_.value = !1);
      }
    }
    async function Ce() {
      const b = m.value, d = H;
      if (!(!b || b.startOffset <= 0 || C.value)) {
        C.value = !0;
        try {
          const l = await se(e.api, b.filePath, {
            historyBytes: eo,
            before: b
          });
          d === H && m.value === b && h.value === b.filePath && (m.value = l);
        } finally {
          d === H && (C.value = !1);
        }
      }
    }
    async function $e() {
      G.value = !0;
      try {
        z.value = await Yt(e.api), !O.value && z.value.length && (O.value = z.value[0]);
      } finally {
        G.value = !1;
      }
    }
    async function Pe() {
      G.value = !0;
      try {
        z.value = await Yt(e.api, !0), !O.value && z.value.length && (O.value = z.value[0]);
      } finally {
        G.value = !1;
      }
    }
    function Ie(b) {
      ke(e.api, b);
    }
    async function Ft(b, d) {
      await wt(e.api, { preset: b, target: d });
    }
    async function Ee() {
      await wt(e.api, { preset: w.value, target: "new-tab" });
    }
    async function xe() {
      m.value && await wt(e.api, {
        preset: w.value,
        target: "new-tab",
        cwd: m.value.cwd || void 0
      });
    }
    async function Ae() {
      if (!m.value) return;
      const b = m.value.messages.map((d) => `### ${Q(d.role)}

${d.text}
`).join(`
---

`);
      try {
        await navigator.clipboard.writeText(b), e.api.ui.notify("Transcript copied to the clipboard", "info");
      } catch {
        e.api.ui.notify("The browser refused clipboard access", "warn");
      }
    }
    return me(async () => {
      await Promise.all([
        zt(e.api).then((b) => {
          q.value = b;
        }),
        Dt(),
        $e()
      ]);
    }), (b, d) => (g(), v("div", As, [
      a("header", Ls, [
        a("div", zs, [
          k(S, {
            name: "bot",
            size: 18,
            class: "omp-app__brand-icon"
          }),
          d[10] || (d[10] = a("span", { class: "omp-app__brand-name" }, "OMP Pilot", -1)),
          a("span", Os, "v" + f(He(s)), 1)
        ]),
        a("nav", Rs, [
          (g(!0), v(A, null, F(Nt.value, (l) => (g(), v("button", {
            key: l.id,
            type: "button",
            role: "tab",
            class: R(["omp-app__tab", { "is-active": o.value === l.id }]),
            "aria-selected": o.value === l.id,
            onClick: ($) => o.value = l.id
          }, [
            k(S, {
              name: l.icon,
              size: 14
            }, null, 8, ["name"]),
            a("span", null, f(l.label), 1),
            l.badge ? (g(), v("span", Ds, f(l.badge), 1)) : I("", !0)
          ], 10, Ns))), 128))
        ]),
        a("div", Fs, [
          X(a("select", {
            "onUpdate:modelValue": d[0] || (d[0] = (l) => et.value = l),
            class: "omp-field omp-field--compact",
            "aria-label": "Launch model preset"
          }, [
            (g(!0), v(A, null, F(q.value, (l) => (g(), v("option", {
              key: l.id,
              value: l.id
            }, f(l.label), 9, Hs))), 128))
          ], 512), [
            [he, et.value]
          ]),
          a("button", {
            type: "button",
            class: "omp-btn omp-btn--primary",
            onClick: Ee
          }, [
            k(S, {
              name: "play",
              size: 13
            }),
            d[11] || (d[11] = a("span", null, "New OMP tab", -1))
          ])
        ])
      ]),
      a("main", Bs, [
        o.value === "sessions" ? (g(), v("section", js, [
          a("aside", Vs, [
            a("div", Us, [
              a("div", Ys, [
                k(S, {
                  name: "search",
                  size: 13
                }),
                X(a("input", {
                  "onUpdate:modelValue": d[1] || (d[1] = (l) => y.value = l),
                  type: "search",
                  placeholder: "Filter sessions",
                  "aria-label": "Filter sessions"
                }, null, 512), [
                  [Ht, y.value]
                ])
              ]),
              a("button", {
                type: "button",
                class: R(["omp-icon-btn", { "is-busy": c.value }]),
                title: "Reload session list",
                onClick: Dt
              }, [
                k(S, {
                  name: "refresh",
                  size: 13
                })
              ], 2)
            ]),
            a("label", Ws, [
              X(a("input", {
                "onUpdate:modelValue": d[2] || (d[2] = (l) => u.value = l),
                type: "checkbox",
                onChange: Dt
              }, null, 544), [
                [Re, u.value]
              ]),
              d[12] || (d[12] = a("span", null, "This workspace only", -1))
            ]),
            a("div", Gs, [
              c.value ? (g(), v("p", Js, "Loading sessions...")) : Mt.value.length ? I("", !0) : (g(), v("p", Zs, " No transcripts found. Start OMP in a terminal tab and it will show up here. ")),
              (g(!0), v(A, null, F(Mt.value, (l) => (g(), v("button", {
                key: l.path,
                type: "button",
                role: "option",
                class: R(["omp-session", { "is-active": h.value === l.path }]),
                "aria-selected": h.value === l.path,
                onClick: ($) => Xt(l.path)
              }, [
                a("span", qs, [
                  k(S, {
                    name: "file-text",
                    size: 12
                  }),
                  j(" " + f(l.displayName), 1)
                ]),
                a("span", Qs, [
                  a("span", null, f(l.workspace), 1),
                  a("span", null, f(l.ageLabel), 1)
                ])
              ], 10, Ks))), 128))
            ])
          ]),
          a("div", Xs, [
            m.value ? (g(), v(A, { key: 0 }, [
              a("header", tn, [
                a("div", en, [
                  a("span", sn, [
                    k(S, {
                      name: "cpu",
                      size: 12
                    }),
                    j(f(m.value.model), 1)
                  ]),
                  a("span", nn, [
                    k(S, {
                      name: "layers",
                      size: 12
                    }),
                    j(f(m.value.totalTokens.toLocaleString()) + " tok", 1)
                  ]),
                  a("span", on, [
                    k(S, {
                      name: "activity",
                      size: 12
                    }),
                    j(f(m.value.totalCost.toFixed(3)) + " USD" + f(m.value.metricsExact ? "" : " loaded"), 1)
                  ]),
                  a("span", an, [
                    k(S, {
                      name: "message-square",
                      size: 12
                    }),
                    j(f(m.value.messages.length) + " entries", 1)
                  ])
                ]),
                a("div", rn, [
                  a("div", ln, [
                    k(S, {
                      name: "search",
                      size: 12
                    }),
                    X(a("input", {
                      "onUpdate:modelValue": d[3] || (d[3] = (l) => W.value = l),
                      type: "search",
                      placeholder: "Filter turns",
                      "aria-label": "Filter turns"
                    }, null, 512), [
                      [Ht, W.value]
                    ])
                  ]),
                  a("button", {
                    type: "button",
                    class: "omp-btn",
                    title: "Copy the transcript as Markdown",
                    onClick: Ae
                  }, [
                    k(S, {
                      name: "copy",
                      size: 12
                    }),
                    d[13] || (d[13] = a("span", null, "Copy", -1))
                  ]),
                  a("button", {
                    type: "button",
                    class: "omp-btn",
                    title: "Open this workspace in a new OMP tab",
                    onClick: xe
                  }, [
                    k(S, {
                      name: "external-link",
                      size: 12
                    }),
                    d[14] || (d[14] = a("span", null, "Open", -1))
                  ])
                ])
              ]),
              m.value.droppedHead ? (g(), v("div", cn, [
                a("span", null, " Showing the last " + f((m.value.loadedBytes / 1048576).toFixed(1)) + " MB of " + f((m.value.fileSize / 1048576).toFixed(1)) + " MB (" + f(m.value.turns) + " turns" + f(m.value.metricsExact ? "" : " in loaded window") + "). ", 1),
                a("button", {
                  type: "button",
                  class: "omp-btn",
                  disabled: C.value,
                  onClick: Ce
                }, [
                  k(S, {
                    name: "history",
                    size: 12
                  }),
                  a("span", null, f(C.value ? "Loading" : "Load earlier"), 1)
                ], 8, un)
              ])) : I("", !0),
              a("div", dn, [
                _.value ? (g(), v("p", pn, "Reading transcript...")) : dt.value.length ? I("", !0) : (g(), v("p", mn, "No turn matches that filter.")),
                pt.value ? (g(), v("button", {
                  key: 2,
                  type: "button",
                  class: "omp-btn omp-btn--wide",
                  onClick: d[4] || (d[4] = (l) => P.value += Ct)
                }, [
                  k(S, {
                    name: "chevron-up",
                    size: 12
                  }),
                  a("span", null, "Show " + f(Math.min(pt.value, Ct)) + " earlier turns (" + f(pt.value) + " hidden)", 1)
                ])) : I("", !0),
                (g(!0), v(A, null, F(Tt.value, (l) => (g(), v("article", {
                  key: l.id,
                  class: R(["omp-turn", `omp-turn--${l.role}`])
                }, [
                  a("header", hn, [
                    a("span", fn, [
                      k(S, {
                        name: B(l.role),
                        size: 13
                      }, null, 8, ["name"]),
                      j(" " + f(Q(l.role)), 1)
                    ]),
                    a("span", gn, f(l.timeLabel), 1)
                  ]),
                  l.thinking ? (g(), v("details", vn, [
                    d[15] || (d[15] = a("summary", null, "Reasoning", -1)),
                    a("pre", yn, f(l.thinking), 1)
                  ])) : I("", !0),
                  l.text ? (g(), v("pre", _n, f(l.text), 1)) : I("", !0),
                  l.images.length ? (g(), v("div", wn, [
                    (g(!0), v(A, null, F(l.images, ($, Le) => (g(), v("button", {
                      key: Le,
                      type: "button",
                      class: "omp-thumb",
                      onClick: (Go) => D.value = $
                    }, [
                      a("img", {
                        src: $,
                        alt: "Attachment",
                        loading: "lazy"
                      }, null, 8, kn)
                    ], 8, bn))), 128))
                  ])) : I("", !0),
                  (g(!0), v(A, null, F(l.toolCalls || [], ($) => (g(), v("details", {
                    key: $.id,
                    class: R(["omp-fold omp-fold--tool", { "is-error": $.isError }])
                  }, [
                    a("summary", null, [
                      a("span", Sn, f($.name), 1),
                      $.intent ? (g(), v("span", Mn, f($.intent), 1)) : I("", !0),
                      a("span", Tn, f($.isError ? "failed" : "ok"), 1)
                    ]),
                    d[17] || (d[17] = a("p", { class: "omp-fold__label" }, "Arguments", -1)),
                    a("pre", Cn, f($.argumentsLabel), 1),
                    $.result ? (g(), v(A, { key: 0 }, [
                      d[16] || (d[16] = a("p", { class: "omp-fold__label" }, "Result", -1)),
                      a("pre", $n, f($.result), 1)
                    ], 64)) : I("", !0)
                  ], 2))), 128))
                ], 2))), 128))
              ])
            ], 64)) : (g(), v("div", Pn, [
              k(S, {
                name: "history",
                size: 28
              }),
              d[18] || (d[18] = a("p", null, "Select a session on the left to read its transcript.", -1))
            ]))
          ])
        ])) : I("", !0),
        o.value === "skills" ? (g(), v("section", In, [
          a("div", En, [
            a("div", xn, [
              k(S, {
                name: "search",
                size: 14
              }),
              X(a("input", {
                "onUpdate:modelValue": d[5] || (d[5] = (l) => ct.value = l),
                type: "search",
                placeholder: "Search skills by name or intent",
                "aria-label": "Search skills"
              }, null, 512), [
                [Ht, ct.value]
              ])
            ]),
            a("button", {
              type: "button",
              class: "omp-icon-btn",
              title: "Reload skills",
              onClick: Pe
            }, [
              k(S, {
                name: "refresh",
                size: 13
              })
            ])
          ]),
          a("div", An, [
            (g(), v(A, null, F(n, (l) => a("button", {
              key: l,
              type: "button",
              class: R(["omp-chip", { "is-active": ut.value === l }]),
              onClick: ($) => ut.value = l
            }, f(l), 11, Ln)), 64))
          ]),
          a("div", zn, [
            a("div", On, [
              G.value ? (g(), v("p", Rn, "Indexing skills...")) : M.value.length ? I("", !0) : (g(), v("p", Nn, "No skill matches that search.")),
              (g(!0), v(A, null, F(M.value, (l) => (g(), v("button", {
                key: l.id,
                type: "button",
                class: R(["omp-skill", { "is-active": O.value?.id === l.id }]),
                onClick: ($) => O.value = l
              }, [
                a("span", Fn, [
                  k(S, {
                    name: "book",
                    size: 13
                  }),
                  j(" " + f(l.name), 1)
                ]),
                a("span", Hn, f(l.description), 1),
                a("span", Bn, [
                  a("span", jn, f(l.category), 1),
                  a("span", Vn, f(l.source), 1)
                ])
              ], 10, Dn))), 128))
            ]),
            O.value ? (g(), v("aside", Un, [
              a("header", null, [
                a("h3", null, f(O.value.name), 1),
                a("button", {
                  type: "button",
                  class: "omp-btn omp-btn--primary",
                  onClick: d[6] || (d[6] = (l) => Ie(O.value.name))
                }, [
                  k(S, {
                    name: "terminal",
                    size: 12
                  }),
                  d[19] || (d[19] = a("span", null, "Inject", -1))
                ])
              ]),
              a("p", Yn, f(O.value.description), 1),
              a("pre", Wn, f(O.value.body || "This skill has no body."), 1)
            ])) : I("", !0)
          ])
        ])) : I("", !0),
        o.value === "profiles" ? (g(), v("section", Gn, [
          d[23] || (d[23] = a("header", { class: "omp-profiles__head" }, [
            a("h2", null, "Model presets"),
            a("p", null, [
              j("Loaded from OMP global "),
              a("code", null, "modelPresets"),
              j(". Apply one to a new tab or split pane.")
            ])
          ], -1)),
          a("div", Jn, [
            (g(!0), v(A, null, F(q.value, (l) => (g(), v("article", {
              key: l.id,
              class: R(["omp-profile", { "is-default": l.isDefault }])
            }, [
              a("header", null, [
                a("span", Zn, [
                  k(S, {
                    name: "zap",
                    size: 16
                  })
                ]),
                a("div", null, [
                  a("h3", null, f(l.label), 1),
                  a("code", null, f(Object.keys(l.modelRoles).length) + " model roles · thinking " + f(l.defaultThinkingLevel), 1)
                ])
              ]),
              a("div", Kn, [
                a("button", {
                  type: "button",
                  class: "omp-btn omp-btn--primary",
                  onClick: ($) => Ft(l, "new-tab")
                }, [
                  k(S, {
                    name: "play",
                    size: 12
                  }),
                  d[20] || (d[20] = a("span", null, "New tab", -1))
                ], 8, qn),
                a("button", {
                  type: "button",
                  class: "omp-btn",
                  onClick: ($) => Ft(l, "split-v")
                }, [
                  k(S, {
                    name: "split-vertical",
                    size: 12
                  }),
                  d[21] || (d[21] = a("span", null, "Split right", -1))
                ], 8, Qn),
                a("button", {
                  type: "button",
                  class: "omp-btn",
                  onClick: ($) => Ft(l, "split-h")
                }, [
                  k(S, {
                    name: "split-horizontal",
                    size: 12
                  }),
                  d[22] || (d[22] = a("span", null, "Split down", -1))
                ], 8, Xn)
              ])
            ], 2))), 128))
          ])
        ])) : I("", !0)
      ]),
      D.value ? (g(), v("div", {
        key: 0,
        class: "omp-lightbox",
        role: "dialog",
        "aria-modal": "true",
        onClick: d[9] || (d[9] = (l) => D.value = null)
      }, [
        a("button", {
          type: "button",
          class: "omp-lightbox__close",
          "aria-label": "Close image",
          onClick: d[7] || (d[7] = (l) => D.value = null)
        }, [
          k(S, {
            name: "x",
            size: 18
          })
        ]),
        a("img", {
          src: D.value,
          alt: "Attachment preview",
          onClick: d[8] || (d[8] = st(() => {
          }, ["stop"]))
        }, null, 8, to)
      ])) : I("", !0)
    ]));
  }
}), no = /* @__PURE__ */ Jt(so, [["__scopeId", "data-v-1955e927"]]), oo = { class: "omp-hud__bar" }, ao = {
  class: "omp-hud__grip",
  "data-drag-handle": "",
  title: "Drag to move"
}, io = ["title"], ro = {
  key: 0,
  class: "omp-hud__peek"
}, lo = ["title", "aria-expanded"], co = { class: "omp-hud__body" }, uo = { class: "omp-hud__row" }, po = ["title"], mo = { class: "omp-hud__chip-text" }, ho = ["title"], fo = { class: "omp-hud__chip-text" }, go = { class: "omp-hud__row" }, vo = ["title"], yo = { class: "omp-hud__chip-text" }, _o = ["title"], wo = { class: "omp-hud__chip-text" }, bo = { class: "omp-hud__status" }, ko = { class: "omp-hud__turns" }, So = { class: "omp-hud__actions" }, Mo = ["disabled", "title"], To = {
  key: 1,
  class: "omp-hud__placeholder"
}, Co = { class: "omp-hud__placeholder-title" }, $o = { class: "omp-hud__placeholder-note" }, Po = { class: "omp-hud__placeholder" }, Io = { class: "omp-hud__launch" }, Eo = ["disabled"], xo = ["value"], Ao = ["disabled"], le = "dinotty-omp.preset", ce = "dinotty-omp.presets", Lo = 12e3, zo = /* @__PURE__ */ Gt({
  __name: "MiniHudOverlay",
  props: {
    api: {},
    dragging: { type: Boolean }
  },
  setup(t) {
    const e = t, s = T(!1), n = T(!1), o = T(!0), i = T(!0), r = T([]), c = T(lt), u = T({ cwd: "", sessionFile: "", isRunning: !1, state: "inactive", summary: null }), h = T(!1);
    let m = 0, _, C = !1;
    const P = [], W = E(
      () => r.value.find((M) => M.id === c.value) || null
    ), D = E(() => {
      const w = (u.value.summary?.model || "").split("/").pop() || "omp";
      return w.length > 18 ? `${w.slice(0, 17)}...` : w;
    }), H = E(() => {
      const M = u.value.summary?.totalTokens || 0;
      return M >= 1e6 ? `${(M / 1e6).toFixed(1)}M tok` : M >= 1e3 ? `${Math.round(M / 1e3)}k tok` : `${M} tok`;
    }), z = E(() => {
      if (u.value.state === "inactive") return "Inactive";
      if (u.value.state === "starting") return "Starting";
      switch (u.value.summary?.status) {
        case "running_tool":
          return "Running a tool";
        case "thinking":
          return "Thinking";
        case "error":
          return "Last tool failed";
        default:
          return "Waiting for you";
      }
    }), G = E(() => u.value.state === "inactive" ? "is-inactive" : u.value.state === "starting" ? "is-starting" : `is-${u.value.summary?.status || "idle"}`), ct = E(() => {
      const M = u.value.cwd;
      if (!M) return "this pane";
      const w = M.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean);
      return w[w.length - 1] || M;
    }), ut = E(() => u.value.state === "inactive" ? "Inactive" : u.value.state === "starting" ? "Starting" : `${D.value} · ${u.value.summary?.totalCost.toFixed(2) || "0.00"} USD`);
    function O() {
      try {
        const M = localStorage.getItem(ce), w = M ? JSON.parse(M) : [];
        return Array.isArray(w) ? w : [];
      } catch {
        return [];
      }
    }
    function q(M) {
      try {
        localStorage.setItem(ce, JSON.stringify(M));
      } catch {
      }
    }
    function et() {
      try {
        localStorage.setItem(le, c.value);
      } catch {
      }
    }
    function Nt(M) {
      if (!C) {
        if (h.value = !0, M.state === "inactive" && n.value && Date.now() < m) {
          u.value = { ...M, state: "starting" };
          return;
        }
        (M.state !== "inactive" || Date.now() >= m) && (n.value = !1), u.value = M;
      }
    }
    function Mt() {
      e.api.open();
    }
    async function dt() {
      await Me(e.api);
    }
    async function Tt() {
      await wt(e.api, { preset: W.value, target: "split-v" });
    }
    async function pt() {
      !await Es(e.api, W.value) || C || (et(), n.value = !0, u.value = { ...u.value, state: "starting", summary: null }, m = Date.now() + Lo, _ !== void 0 && window.clearTimeout(_), _ = window.setTimeout(() => {
        _ = void 0, C || K(!0);
      }, 600));
    }
    return me(async () => {
      try {
        const Q = localStorage.getItem(le);
        Q && (c.value = Q);
      } catch {
      }
      const M = O();
      M.length && (r.value = M, o.value = !1), P.push(
        be(e.api, {
          listener: Nt,
          visible: () => !s.value
        })
      );
      const w = await St(e.api);
      if (C) return;
      i.value = w ? w.tmux : !0;
      const B = await zt(e.api);
      C || (r.value = B, q(r.value), r.value.some((Q) => Q.id === c.value) || (c.value = lt), o.value = !1);
    }), ze(() => {
      C = !0, _ !== void 0 && (window.clearTimeout(_), _ = void 0);
      for (const M of P)
        try {
          M.dispose();
        } catch {
        }
      P.length = 0;
    }), (M, w) => (g(), v("section", {
      class: R(["omp-hud", [`is-${u.value.state}`, { "is-collapsed": s.value, "is-dragging": t.dragging }]]),
      role: "status",
      "aria-live": "polite"
    }, [
      a("header", oo, [
        a("div", ao, [
          k(S, {
            name: "bot",
            size: 15,
            class: "omp-hud__logo"
          }),
          w[6] || (w[6] = a("span", { class: "omp-hud__name" }, "OMP", -1)),
          a("span", {
            class: R(["omp-hud__beacon", G.value]),
            title: z.value
          }, null, 10, io),
          s.value ? (g(), v("span", ro, f(ut.value), 1)) : I("", !0)
        ]),
        a("div", {
          class: "omp-hud__tools",
          onPointerdown: w[3] || (w[3] = st(() => {
          }, ["stop"])),
          onMousedown: w[4] || (w[4] = st(() => {
          }, ["stop"]))
        }, [
          a("button", {
            type: "button",
            class: "omp-hud__icon",
            title: s.value ? "Expand panel" : "Collapse panel",
            "aria-expanded": !s.value,
            onPointerdown: w[0] || (w[0] = st(() => {
            }, ["stop"])),
            onMousedown: w[1] || (w[1] = st(() => {
            }, ["stop"])),
            onClick: w[2] || (w[2] = st((B) => s.value = !s.value, ["stop"]))
          }, [
            k(S, {
              name: s.value ? "chevron-down" : "chevron-up",
              size: 13
            }, null, 8, ["name"])
          ], 40, lo)
        ], 32)
      ]),
      X(a("div", co, [
        u.value.state === "running" && u.value.summary ? (g(), v(A, { key: 0 }, [
          a("div", uo, [
            a("span", {
              class: "omp-hud__chip",
              title: `Model: ${u.value.summary.model}`
            }, [
              k(S, {
                name: "cpu",
                size: 12
              }),
              a("span", mo, f(D.value), 1)
            ], 8, po),
            a("span", {
              class: "omp-hud__chip",
              title: `Thinking level: ${u.value.summary.thinkingLevel}`
            }, [
              k(S, {
                name: "zap",
                size: 12
              }),
              a("span", fo, f(u.value.summary.thinkingLevel), 1)
            ], 8, ho)
          ]),
          a("div", go, [
            a("span", {
              class: "omp-hud__chip",
              title: `${u.value.summary.totalTokens.toLocaleString()} context tokens`
            }, [
              k(S, {
                name: "layers",
                size: 12
              }),
              a("span", yo, f(H.value), 1)
            ], 8, vo),
            a("span", {
              class: "omp-hud__chip is-cost",
              title: `Session cost ${u.value.summary.totalCost.toFixed(4)} USD`
            }, [
              k(S, {
                name: "activity",
                size: 12
              }),
              a("span", wo, f(u.value.summary.totalCost.toFixed(2)) + " USD", 1)
            ], 8, _o)
          ]),
          a("p", bo, [
            a("span", {
              class: R(["omp-hud__status-dot", G.value])
            }, null, 2),
            j(" " + f(z.value) + " ", 1),
            a("span", ko, f(u.value.summary.turns) + " turns", 1)
          ]),
          a("div", So, [
            a("button", {
              type: "button",
              class: "omp-hud__action",
              title: "Open the session explorer",
              onClick: Mt
            }, [
              k(S, {
                name: "history",
                size: 14
              }),
              w[7] || (w[7] = a("span", null, "Explorer", -1))
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
              w[8] || (w[8] = a("span", null, "Scroll", -1))
            ], 8, Mo),
            a("button", {
              type: "button",
              class: "omp-hud__action",
              title: "Open a split pane running OMP",
              onClick: Tt
            }, [
              k(S, {
                name: "split-vertical",
                size: 14
              }),
              w[9] || (w[9] = a("span", null, "Split", -1))
            ])
          ])
        ], 64)) : u.value.state === "starting" || !h.value ? (g(), v("div", To, [
          w[10] || (w[10] = a("span", {
            class: "omp-hud__spinner",
            "aria-hidden": "true"
          }, null, -1)),
          a("p", Co, f(h.value ? "Starting OMP" : "Reading session"), 1),
          a("p", $o, "Waiting for the first turn in " + f(ct.value), 1)
        ])) : (g(), v(A, { key: 2 }, [
          a("div", Po, [
            k(S, {
              name: "info",
              size: 18,
              class: "omp-hud__placeholder-icon"
            }),
            w[11] || (w[11] = a("p", { class: "omp-hud__placeholder-title" }, "No OMP session here", -1)),
            w[12] || (w[12] = a("p", { class: "omp-hud__placeholder-note" }, "Pick a model preset and start one in this pane.", -1))
          ]),
          a("div", Io, [
            w[13] || (w[13] = a("label", {
              class: "omp-hud__label",
              for: "omp-hud-preset"
            }, "Model preset", -1)),
            X(a("select", {
              id: "omp-hud-preset",
              "onUpdate:modelValue": w[5] || (w[5] = (B) => c.value = B),
              class: "omp-hud__select",
              disabled: o.value,
              onChange: et
            }, [
              (g(!0), v(A, null, F(r.value, (B) => (g(), v("option", {
                key: B.id,
                value: B.id
              }, f(B.label), 9, xo))), 128))
            ], 40, Eo), [
              [he, c.value]
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
              a("span", null, f(n.value ? "Starting" : "Launch"), 1)
            ], 8, Ao)
          ])
        ], 64))
      ], 512), [
        [Ne, !s.value]
      ])
    ], 2));
  }
}), Oo = /* @__PURE__ */ Jt(zo, [["__scopeId", "data-v-30d2ca9a"]]);
function Ro(t) {
  const e = be(t, {});
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
        const o = n.summary;
        if (n.state === "starting" || !o) return "OMP: starting";
        const i = o.model.split("/").pop() || "omp";
        return `OMP ${i.length > 16 ? `${i.slice(0, 15)}...` : i} ${o.totalCost.toFixed(2)} USD`;
      },
      detail: () => {
        const n = Et();
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
const No = 244, mt = 12, Do = 560;
function Fo() {
  return typeof window > "u" || typeof window.innerWidth != "number" ? 1280 : Number.isFinite(window.innerWidth) && window.innerWidth > 0 ? window.innerWidth : 1280;
}
function Ho() {
  const t = Fo();
  return t < Do ? { x: mt, y: mt } : { x: Math.max(mt, t - No - mt), y: mt };
}
const Te = "dinotty:overlay-pos:dinotty-omp:dinotty-omp:hud", ue = "dinotty-omp:overlay-pos-migrated:v1", Bo = 44, jo = 120, de = 244, pe = 12;
function Vo() {
  try {
    const t = localStorage.getItem(Te);
    if (!t) return null;
    const e = JSON.parse(t);
    return typeof e?.x != "number" || typeof e?.y != "number" || !Number.isFinite(e.x) || !Number.isFinite(e.y) ? null : { x: e.x, y: e.y };
  } catch {
    return null;
  }
}
function Uo(t, e, s) {
  return t.x < 0 || t.y < 0 || t.x > e || t.y > s ? !0 : t.y >= Bo ? !1 : t.x >= e - de - pe && t.x <= e - de + pe || t.x > e - jo;
}
function Yo(t) {
  if (typeof window > "u") return;
  const e = window.innerWidth, s = window.innerHeight;
  if (!Number.isFinite(e) || !Number.isFinite(s) || e <= 0 || s <= 0 || e >= 560) return;
  try {
    if (localStorage.getItem(ue)) return;
  } catch {
    return;
  }
  const n = Vo();
  if (!(!n || !Uo(n, e, s)))
    try {
      localStorage.setItem(Te, JSON.stringify(t)), localStorage.setItem(ue, "1");
    } catch {
    }
}
let kt = [];
function ht(t) {
  kt.push(() => t.dispose());
}
function Jo(t) {
  kt = [], ht(
    t.commands.register("omp.open-session-viewer", () => {
      t.open();
    })
  ), ht(
    t.commands.register("omp.tmux-copymode", () => {
      Me(t);
    })
  ), ht(
    t.commands.registerQuickPick("omp.quick-launch", {
      title: "OMP: launch a model preset in a new tab",
      items: async () => re(t, await zt(t), "new-tab")
    })
  ), ht(
    t.commands.registerQuickPick("omp.split-launch", {
      title: "OMP: launch a model preset in a split pane",
      items: async () => re(t, await zt(t), "split-v")
    })
  ), ht(
    t.commands.registerQuickPick("omp.skill-palette", {
      title: "OMP: search skills and inject one",
      items: async () => (await Yt(t)).map((o) => ({
        label: o.name,
        detail: o.description,
        icon: "book",
        action: () => {
          ke(t, o.name);
        }
      }))
    })
  );
  const e = Ro(t);
  kt.push(() => e.dispose());
  const s = Ho();
  return Yo(s), {
    component: no,
    overlay: [
      {
        id: "dinotty-omp:hud",
        component: Oo,
        dragHandle: "grip",
        interactive: !0,
        defaultPosition: s
      }
    ],
    monitor: { series: [e.series] },
    dispose: Wo
  };
}
function Wo() {
  for (const t of kt)
    try {
      t();
    } catch {
    }
  kt = [], cs(), vs(), Cs(), _s();
}
export {
  Jo as activate,
  Wo as deactivate
};
