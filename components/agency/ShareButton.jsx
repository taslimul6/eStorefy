"use client";
import { useState } from "react";
export default function ShareButton({ url }) {
  const [message, setMessage] = useState("");
  async function share() {
    try {
      await navigator.clipboard.writeText(url);
      setMessage("Profile URL copied");
    } catch {
      setMessage(url);
    }
  }
  return (
    <>
      <button className="btn ghost small" onClick={share}>
        Share
      </button>
      {message && (
        <div className="toast" role="status" onClick={() => setMessage("")}>
          {message}
          <button
            className="close"
            aria-label="Dismiss message"
            onClick={() => setMessage("")}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
