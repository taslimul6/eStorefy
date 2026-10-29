# Fix Cloudflare deploy: WORKER_SELF_REFERENCE binding not found

## Problem
Deploy fails with `Service binding 'WORKER_SELF_REFERENCE' references Worker 'estorefy-agency-directory' which was not found`. The binding target name comes from the project/package name (`estorefy-agency-directory`), but the actual deployed Worker is `estorefy-next`.

## Plan
1. Add `wrangler.toml` (or `wrangler.jsonc`) at repo root with:
   - `name = "estorefy-next"`
   - a `services` binding `WORKER_SELF_REFERENCE` pointing to `service = "estorefy-next"`.
2. Update `package.json` `name` to `estorefy-next` for consistency with the deployed Worker.
3. Re-run deploy and verify binding resolves.

## Alternative
Rename the deployed Worker to `estorefy-agency-directory` in Cloudflare dashboard instead; not recommended since build target is `estorefy-next`.

## Validation
- `wrangler deploy` succeeds without code 10143.
- Worker responds and self-reference binding resolves at runtime.
