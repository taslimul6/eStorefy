import test from "node:test";
import assert from "node:assert/strict";
import { installExitIntent, EXIT_INTENT_SESSION_KEY } from "../lib/exit-intent.js";

function fixture({ persisted = false, blocked = false } = {}) {
  const doc = new EventTarget();
  const win = new EventTarget();
  const dialog = new EventTarget();
  let now = 0;
  let desktop = true;
  let otherModal = false;
  let opens = 0;
  let focusReturns = 0;
  const storage = new Map(persisted ? [[EXIT_INTENT_SESSION_KEY, "1"]] : []);
  Object.assign(doc, {
    visibilityState: "visible",
    body: {},
    documentElement: { style: { overflow: "auto" } },
    activeElement: { isConnected: true, focus: () => focusReturns++ },
    querySelector: () => (otherModal ? {} : null),
  });
  Object.assign(win, {
    Date: { now: () => now },
    matchMedia: () => ({ matches: desktop }),
    sessionStorage: {
      getItem(key) {
        if (blocked) throw new Error("Storage blocked");
        return storage.get(key);
      },
      setItem(key, value) {
        if (blocked) throw new Error("Storage blocked");
        storage.set(key, value);
      },
    },
  });
  Object.assign(dialog, {
    open: false,
    showModal() {
      this.open = true;
      opens++;
    },
    close() {
      this.open = false;
      this.dispatchEvent(new Event("close"));
    },
    querySelector: () => ({ focus() {} }),
  });
  const controller = installExitIntent(dialog, { window: win, document: doc });
  return {
    doc,
    win,
    dialog,
    controller,
    storage,
    advance(ms) {
      now = ms;
    },
    mobile() {
      desktop = false;
    },
    modal(open) {
      otherModal = open;
    },
    get opens() {
      return opens;
    },
    get focusReturns() {
      return focusReturns;
    },
    exit({ clientY = 0, relatedTarget = null } = {}) {
      const e = new Event("mouseout");
      Object.assign(e, { clientY, relatedTarget });
      doc.dispatchEvent(e);
    },
  };
}

test("offer stays closed on load, arms after eight seconds and only opens on top-edge exit", () => {
  const f = fixture();
  assert.equal(f.opens, 0);
  f.exit();
  assert.equal(f.opens, 0);
  f.advance(8000);
  f.exit({ clientY: 100 });
  f.exit({ relatedTarget: {} });
  assert.equal(f.opens, 0);
  f.exit();
  assert.equal(f.opens, 1);
  assert.equal(f.doc.documentElement.style.overflow, "hidden");
  assert.equal(f.storage.get(EXIT_INTENT_SESSION_KEY), "1");
  f.controller.cleanup();
});
test("dismissal restores scroll and focus, and suppresses repeated offers in this session", () => {
  const f = fixture();
  f.advance(8000);
  f.exit();
  f.controller.close();
  assert.equal(f.doc.documentElement.style.overflow, "auto");
  assert.equal(f.focusReturns, 1);
  f.exit();
  assert.equal(f.opens, 1);
  f.controller.cleanup();
  const next = fixture({ persisted: true });
  next.advance(9000);
  next.exit();
  assert.equal(next.opens, 0);
  next.controller.cleanup();
});
test("exit intent does not interrupt another modal, touch devices or hidden tabs", () => {
  const f = fixture();
  f.advance(9000);
  f.modal(true);
  f.exit();
  assert.equal(f.opens, 0);
  f.modal(false);
  f.doc.visibilityState = "hidden";
  f.exit();
  assert.equal(f.opens, 0);
  f.controller.cleanup();
  const mobile = fixture();
  mobile.advance(9000);
  mobile.mobile();
  mobile.exit();
  assert.equal(mobile.opens, 0);
  mobile.controller.cleanup();
});
test("blocked browser storage does not break dismissal or once-per-document suppression", () => {
  const f = fixture({ blocked: true });
  f.advance(9000);
  f.exit();
  f.controller.close();
  f.exit();
  assert.equal(f.opens, 1);
  f.controller.cleanup();
});
test("navigation closes the popup and unmount cleanup restores the page and removes listeners", () => {
  const f = fixture();
  f.advance(9000);
  f.exit();
  f.win.dispatchEvent(new Event("popstate"));
  assert.equal(f.dialog.open, false);
  assert.equal(f.doc.documentElement.style.overflow, "auto");
  f.controller.cleanup();
  const other = fixture();
  other.advance(9000);
  other.controller.cleanup();
  other.exit();
  assert.equal(other.opens, 0);
  const open = fixture();
  open.advance(9000);
  open.exit();
  open.controller.cleanup();
  assert.equal(open.dialog.open, false);
  assert.equal(open.doc.documentElement.style.overflow, "auto");
});
test("older browsers without dialog support leave the page functional", () => {
  const controller = installExitIntent({});
  assert.doesNotThrow(() => {
    controller.close();
    controller.cleanup();
  });
});
