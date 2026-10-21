# eStorefy exit-intent popup

This release adds the design supplied in preview.html to the v6.1 production site. Only app/layout.jsx changes among existing application files: it imports the scoped popup CSS/component and mounts the component once. Existing page markup, CSS, datasets, routes, SEO configuration, analytics and CTA destinations remain unchanged.

The offer uses the supplied text, artwork, responsive layout, terms and sponsored Shopify link. Demo navigation, the preview button and immediate demo opening are excluded.

## Behavior

- Desktop devices with a fine pointer and hover: arms eight seconds after hydration; opens when the cursor leaves the document through the top edge.
- Displays once per tab session, including navigation/reloads when sessionStorage is available. Blocked storage falls back to once per mounted document.
- Does not interrupt another open dialog or show in a background tab.
- Native modal dialog provides keyboard focus containment, Escape dismissal and background isolation. The close button, “I'll keep exploring”, backdrop click and CTA dismiss the offer; scrolling and prior focus are restored.
- Touch-only/mobile devices retain the supplied responsive popup design but do not receive a timed popup. They do not have a reliable cursor-based exit signal; no timer, back-button interception or forced navigation is added.

`components/marketing/ExitIntentOffer.jsx` owns the supplied markup. `styles/exit-intent.css` scopes styles and design variables to #ef-offer. `lib/exit-intent.js` owns the trigger/session behavior. Constants at the top of that file control the delay and session storage key.

Deploy this full project ZIP through the existing Next.js production workflow to activate the popup. It is not published automatically by creating the ZIP.

## Validation

The exit-intent controller has six tests for its eight-second gate, top-edge detection, session suppression, focus/scroll restoration, other-dialog protection, touch/hidden-tab handling, blocked storage and cleanup. The complete existing test suite is also run. Production HTML verifies the offer starts closed, has working label/description IDs, contains the supplied CTA and omits the demo. The existing SEO audit is reproduced and the original data report retained unchanged. A file-by-file comparison against v6.1 ensures no existing file other than the layout hookup is changed. Browser visual verification was not available in this environment.
