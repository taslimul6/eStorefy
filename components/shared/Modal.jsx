"use client";
import { useEffect, useId, useRef } from "react";

/** Native dialogs provide focus trapping, Escape dismissal and focus restoration. */
export default function Modal({ open, onClose, title, children, className = "", id }) {
  const ref = useRef(null);
  const titleId = useId();
  useEffect(() => {
    const dialog = ref.current;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);
  function handleBackdrop(event) {
    if (event.target !== ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      onClose();
  }
  return (
    <dialog
      ref={ref}
      id={id}
      className={className}
      aria-labelledby={titleId}
      onCancel={onClose}
      onClose={onClose}
      onClick={handleBackdrop}
    >
      <button className="close" onClick={onClose} aria-label="Close dialog">
        ×
      </button>
      <h2 id={titleId}>{title}</h2>
      {children}
    </dialog>
  );
}
