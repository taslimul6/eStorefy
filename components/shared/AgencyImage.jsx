"use client";
import { useEffect, useRef, useState } from "react";

/** Broken or missing remote logos always resolve to a local branded thumbnail. */
export default function AgencyImage({ agency, className = "", cover = false }) {
  const [failedSource, setFailedSource] = useState(null);
  const imageRef = useRef(null);
  const fallback = `/images/${cover ? "agencies" : "logos"}/${agency.id}.svg`;
  const remote =
    !cover &&
    agency.logoType !== "generated_placeholder" &&
    /^https?:\/\//.test(agency.logoUrl || "")
      ? agency.logoUrl
      : null;
  const failed = remote !== null && failedSource === remote;
  useEffect(() => {
    // A cached network failure may occur before React attaches the error handler.
    if (remote && imageRef.current?.complete && imageRef.current.naturalWidth === 0) {
      setFailedSource(remote);
    }
  }, [remote]);
  return (
    <img
      ref={imageRef}
      className={`agency-image ${className}`}
      src={failed ? fallback : remote || fallback}
      alt={
        cover
          ? `${agency.name} — eStorefy profile artwork`
          : `${agency.name} ${remote && !failed ? "website icon" : "profile artwork"}`
      }
      width={cover ? 640 : 160}
      height={cover ? 360 : 160}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (remote && !failed) setFailedSource(remote);
      }}
    />
  );
}
