import { site, absoluteUrl, canIndex } from "./site.js";

export function pageMetadata({
  title,
  description,
  path = "/",
  image = "/images/social/directory.png",
}) {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: canIndex, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
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
    "@type": "Organization",
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
      addressRegion: agency.location.stateCode,
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
        name: `${agency.name} — Shopify agency`,
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
