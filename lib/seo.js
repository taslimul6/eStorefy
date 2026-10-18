import { site, absoluteUrl } from "./site.js";

/** Normalize whitespace and trim at a word boundary without padding missing claims. */
export function seoText(value, maxLength = 165) {
  const clean = String(value || "")
    .replace(/\s+/g, " ")
    .trim();
  if (clean.length <= maxLength) return clean;
  const shortened = clean.slice(0, maxLength - 1);
  const stop = shortened.lastIndexOf(" ");
  return `${stop > maxLength * 0.6 ? shortened.slice(0, stop) : shortened}…`;
}
export function pageMetadata({
  title,
  description,
  path = "/",
  image = "/images/social/directory.png",
  keywords = [],
}) {
  const url = absoluteUrl(path);
  const cleanTitle = seoText(title, 140);
  const cleanDescription = seoText(
    description ||
      `${cleanTitle}. Explore the eStorefy Shopify directory, compare published information and review the cited sources.`,
  );
  const words = [
    ...new Set(
      [cleanTitle, ...keywords, "eStorefy"].map((v) => seoText(v, 90)).filter(Boolean),
    ),
  ].slice(0, 12);
  return {
    title: cleanTitle,
    description: cleanDescription,
    keywords: words,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: cleanTitle,
      description: cleanDescription,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: cleanTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description: cleanDescription,
      images: [absoluteUrl(image)],
    },
    publisher: site.name,
  };
}
export function providerMetadata(agency, city) {
  const type =
    {
      agency: "Shopify Agency",
      independent_developer: "Shopify Developer",
      freelancer: "Shopify Freelancer",
      consultant_expert: "Shopify Consultant",
    }[agency.entityType] || "Shopify Expert";
  const services = agency.services.slice(0, 3);
  const description = `${agency.name} in the ${city.name}, ${city.country} provider directory. ${services.length ? `Explore ${services.join(", ")}, ` : "Compare "}location evidence, published pricing and sources.`;
  return pageMetadata({
    title: `${agency.name} — ${type} in ${city.name}, ${city.country}`,
    description,
    path: agency.canonicalPath,
    keywords: [
      agency.name,
      `${type} ${city.name}`,
      `Shopify experts ${city.country}`,
      ...services,
      `${agency.name} services`,
      `${agency.name} pricing`,
    ],
  });
}
export function breadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
export function directorySchema(agencies, title, path) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    url: absoluteUrl(path),
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListUnordered",
      numberOfItems: agencies.length,
      itemListElement: agencies.map((agency, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: agency.name,
        url: absoluteUrl(agency.profilePath),
      })),
    },
  };
}
export function agencySchema(agency, city) {
  const url = absoluteUrl(agency.canonicalPath || agency.profilePath);
  // Third-party ratings stay visibly attributed; do not republish them as our own aggregateRating.
  const organization = {
    "@type": ["independent_developer", "freelancer", "consultant_expert"].includes(
      agency.entityType,
    )
      ? "Person"
      : "Organization",
    "@id": `${url}#agency`,
    name: agency.name,
    description: agency.description,
    ...(agency.website ? { url: agency.website } : {}),
    ...(agency.contact.email ? { email: agency.contact.email } : {}),
    ...(agency.contact.phone ? { telephone: agency.contact.phone } : {}),
  };
  if (agency.location.streetAddress)
    organization.address = {
      "@type": "PostalAddress",
      streetAddress: agency.location.streetAddress,
      addressLocality: agency.location.borough || agency.cityName,
      addressRegion: agency.location.stateCode || agency.location.region,
      postalCode: agency.location.postalCode || undefined,
      addressCountry: agency.location.countryCode,
    };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": url,
        url,
        name: `${agency.name} — Shopify service provider`,
        dateModified: agency.dataQuality.observedAt,
        mainEntity: { "@id": `${url}#agency` },
      },
      organization,
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: `Shopify agencies in ${city.name}`, path: `/${city.route}` },
        { name: agency.name, path: agency.profilePath },
      ]),
    ],
  };
}

export function faqSchema(questions) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}
