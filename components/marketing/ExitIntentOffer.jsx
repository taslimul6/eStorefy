"use client";
import { useEffect, useRef } from "react";
import { installExitIntent } from "@/lib/exit-intent";
import { PARTNER_REDIRECT_URL } from "@/lib/cta";

/** The uploaded design, with its demo page and auto-open behavior removed. */
export default function ExitIntentOffer() {
  const dialogRef = useRef(null);
  const controllerRef = useRef(null);
  useEffect(() => {
    const controller = installExitIntent(dialogRef.current);
    controllerRef.current = controller;
    return () => {
      controller.cleanup();
      controllerRef.current = null;
    };
  }, []);
  function closeOffer() {
    controllerRef.current?.close();
  }
  function handleBackdrop(event) {
    const dialog = dialogRef.current;
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (
      event.clientX < box.left ||
      event.clientX > box.right ||
      event.clientY < box.top ||
      event.clientY > box.bottom
    )
      closeOffer();
  }
  return (
    <dialog
      ref={dialogRef}
      id="ef-offer"
      aria-labelledby="ef-title"
      aria-describedby="ef-description"
      onClick={handleBackdrop}
    >
      <div className="ef-card">
        <button
          type="button"
          className="ef-close"
          onClick={closeOffer}
          aria-label="Close offer"
        >
          ×
        </button>

        <section className="ef-art" aria-label="eStorefy">
          <div className="ef-brand">
            eStorefy<span>.</span>
          </div>
          <p className="ef-art-title">
            Small start.
            <br />
            <em>Big possibilities.</em>
          </p>
          <div className="ef-orbit" aria-hidden="true"></div>
          <div className="ef-store" aria-hidden="true">
            <div className="ef-store-nav">
              <span>SLOW STUDIO</span>
              <span className="ef-store-dots">☰ &nbsp; ◦</span>
            </div>
            <div className="ef-product">
              <div className="ef-product-title">
                Good things.
                <br />
                Made by you.
              </div>
              <small>A LITTLE IDEA. A WHOLE NEW STORE.</small>
              <div className="ef-bottle"></div>
            </div>
            <div className="ef-store-footer">
              <span>YOUR BRAND. YOUR WAY.</span>
              <span>EXPLORE ↗</span>
            </div>
            <div className="ef-sticker">
              <span>YOUR</span>
              <b>NEXT</b>
              <span>CHAPTER ↗</span>
            </div>
          </div>
          <div className="ef-art-note">
            <span>✳</span> From “what if” to your own online store.
          </div>
        </section>

        <section className="ef-content">
          <div className="ef-kicker">Before you go</div>
          <h2 id="ef-title">
            Your store idea
            <br />
            deserves <em>a start.</em>
          </h2>
          <p className="ef-description" id="ef-description">
            Try Shopify for free.
            <br />
            Then keep building for just
          </p>

          <div className="ef-price">
            <div className="ef-price-main">
              <sup>US$</sup>1
            </div>
            <div className="ef-price-detail">
              <strong>/ month</strong>
              <span>with the introductory offer</span>
            </div>
          </div>

          <div className="ef-credit">
            <span className="ef-gift" aria-hidden="true">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8h18v4H3zM5 12v9h14v-9M12 8v13" />
                <path d="M12 8H8a3 3 0 1 1 3-3l1 3Zm0 0h4a3 3 0 1 0-3-3l-1 3Z" />
              </svg>
            </span>
            <p>
              Plus, earn up to <strong>US$7,000</strong>
              <br />
              in credits as you sell.
            </p>
          </div>

          <a
            className="ef-cta"
            onClick={closeOffer}
            href={PARTNER_REDIRECT_URL}
            target="_blank"
            rel="sponsored noopener noreferrer"
          >
            <span>Start my free Shopify trial</span>
            <span className="ef-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <p className="ef-caption">Your idea. Your brand. Your next chapter.</p>
          <button type="button" className="ef-dismiss" onClick={closeOffer}>
            I'll keep exploring
          </button>
          <p className="ef-terms">
            Introductory pricing and credits are subject to Shopify’s eligibility, region
            and offer terms. Standard pricing applies after the promotional period. We may
            earn a commission through this link.
          </p>
        </section>
      </div>
    </dialog>
  );
}
