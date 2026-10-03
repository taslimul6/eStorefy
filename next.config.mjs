import { fileURLToPath } from "node:url";

/** Keep historical URLs working without creating duplicate indexable pages. */
const nextConfig = {
  poweredByHeader: false,
  // Bound build concurrency as city collections grow.
  experimental: { cpus: 2, staticGenerationMaxConcurrency: 2 },
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      ...[
        "/shopify-agency-newyork",
        "/shopify-agency-newyouk",
        "/home/Shopify-agency-in-newYork",
        "/home/shopify-agency-in-newyork",
      ].flatMap((source) => [
        { source, destination: "/shopify-agency-in-newyork", permanent: true },
        {
          source: `${source}/:agencySlug`,
          destination: "/shopify-agency-in-newyork/:agencySlug",
          permanent: true,
        },
      ]),
    ];
  },
};
export default nextConfig;
