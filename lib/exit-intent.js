export const EXIT_INTENT_SESSION_KEY = "estorefy-shopify-offer-shown";
export const EXIT_INTENT_DELAY_MS = 8000;

/** Desktop top-edge intent, once per tab session. No on-load or mobile timer popup. */
export function installExitIntent(
  dialog,
  {
    window: win = globalThis.window,
    document: doc = globalThis.document,
    delayMs = EXIT_INTENT_DELAY_MS,
  } = {},
) {
  if (!dialog || typeof dialog.showModal !== "function") {
    return { close() {}, cleanup() {} };
  }
  let shown = false;
  let previousFocus = null;
  let previousOverflow;
  let locked = false;
  const readyAt = win.Date.now() + delayMs;
  try {
    shown = win.sessionStorage.getItem(EXIT_INTENT_SESSION_KEY) === "1";
  } catch {
    /* Blocked storage still permits one offer in this document. */
  }

  function restorePage() {
    if (locked) {
      doc.documentElement.style.overflow = previousOverflow;
      locked = false;
    }
    const target = previousFocus;
    previousFocus = null;
    if (
      target?.isConnected &&
      target !== doc.body &&
      typeof target.focus === "function"
    ) {
      target.focus({ preventScroll: true });
    }
  }
  function close() {
    if (dialog.open) dialog.close();
  }
  function handleExit(event) {
    if (
      shown ||
      dialog.open ||
      win.Date.now() < readyAt ||
      doc.visibilityState !== "visible"
    )
      return;
    if (!win.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (event.relatedTarget || event.clientY > 0) return;
    // Do not interrupt project briefs or any other open modal.
    if (doc.querySelector('dialog[open], [role="dialog"][aria-modal="true"]')) return;
    previousFocus = doc.activeElement;
    try {
      dialog.showModal();
    } catch {
      previousFocus = null;
      return;
    }
    previousOverflow = doc.documentElement.style.overflow;
    doc.documentElement.style.overflow = "hidden";
    locked = true;
    shown = true;
    try {
      win.sessionStorage.setItem(EXIT_INTENT_SESSION_KEY, "1");
    } catch {
      /* Keep in-memory suppression. */
    }
    dialog.querySelector(".ef-close")?.focus({ preventScroll: true });
  }
  doc.addEventListener("mouseout", handleExit);
  dialog.addEventListener("close", restorePage);
  win.addEventListener("popstate", close);
  win.addEventListener("pagehide", close);
  return {
    close,
    cleanup() {
      doc.removeEventListener("mouseout", handleExit);
      win.removeEventListener("popstate", close);
      win.removeEventListener("pagehide", close);
      dialog.removeEventListener("close", restorePage);
      close();
      restorePage();
    },
  };
}
