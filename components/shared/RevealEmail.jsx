"use client";
import { useState } from "react";
export default function RevealEmail() {
  const [show, setShow] = useState(false);
  return (
    <div className="contact-reveal">
      <button
        className="apps-button"
        type="button"
        onClick={() => setShow(true)}
        aria-expanded={show}
        aria-controls="contact-email"
      >
        {show ? "Email revealed" : "Reveal email address ↗"}
      </button>
      <div id="contact-email" aria-live="polite">
        {show && (
          <p>
            <a href="mailto:ads.taslimul@gmail.com">ads.taslimul@gmail.com</a>
          </p>
        )}
      </div>
    </div>
  );
}
