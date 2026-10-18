"use client";
import { useState } from "react";
export default function AppImage({ src, name, screenshot = false }) {
  const [failed, setFailed] = useState(false);
  return src && !failed ? (
    <img
      className={screenshot ? "apps-screenshot" : "apps-logo"}
      src={src}
      alt={screenshot ? `${name} listing screenshot` : `${name} logo`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  ) : screenshot ? null : (
    <span className="apps-logo apps-monogram" aria-hidden="true">
      {name?.slice(0, 1)}
    </span>
  );
}
