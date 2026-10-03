import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { getAllCityAgencies } from "../lib/agencies.js";

const root = fileURLToPath(new URL("../public/images/", import.meta.url));
const escape = (text) =>
  text.replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[
        character
      ],
  );
await mkdir(`${root}/logos`, { recursive: true });
await mkdir(`${root}/agencies`, { recursive: true });
const agencies = new Map(getAllCityAgencies().map((agency) => [agency.id, agency]));
for (const agency of agencies.values()) {
  const initials = escape(
    agency.name
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0])
      .join(""),
  );
  const title = escape(agency.name);
  // Directory artwork is deliberately distinct from an official business logo.
  const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><title>${title} — directory monogram</title><rect width="160" height="160" rx="24" fill="#143b2f"/><path d="M109 0H160V51Z" fill="#245740"/><text x="80" y="103" text-anchor="middle" font-family="Arial,sans-serif" font-size="60" font-weight="700" fill="#c7f479">${initials}</text><circle cx="132" cy="132" r="6" fill="#c7f479"/></svg>`;
  const cover = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360"><title>${title} — directory cover artwork</title><g fill="none" stroke="#6e8d68" stroke-width="2" opacity=".6"><circle cx="550" cy="190" r="150"/><circle cx="550" cy="190" r="105"/><circle cx="550" cy="190" r="60"/><path d="M410 360L620 0M335 360L545 0"/></g><circle cx="490" cy="175" r="25" fill="#c7f479" opacity=".5"/></svg>`;
  await writeFile(`${root}/logos/${agency.id}.svg`, logo);
  await writeFile(`${root}/agencies/${agency.id}.svg`, cover);
}
console.log(`Generated artwork for ${agencies.size} agency IDs.`);
