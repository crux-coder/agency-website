import { cities } from '../data/cities';
import { site } from '../data/site';

type Schema = Record<string, unknown>;

const businessId = `${site.url}/#business`;

/** Reference to the business node, for use inside other schema objects. */
export const businessRef: Schema = { '@id': businessId };

/**
 * The agency as a local business (ProfessionalService ⊂ LocalBusiness).
 * NAP data comes from site.ts — keep it identical to your Google Business profil.
 */
export function businessSchema(): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': businessId,
    name: site.name,
    description: site.description,
    url: site.url,
    logo: `${site.url}/favicon.svg`,
    image: `${site.url}/og-image.png`,
    email: site.email,
    telephone: site.phone,
    priceRange: site.priceRange,
    currenciesAccepted: 'BAM',
    knowsLanguage: ['bs', 'hr', 'sr', 'en'],
    founder: { '@type': 'Person', name: site.founder },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHours: site.hours.schema,
    areaServed: [
      { '@type': 'Country', name: site.address.countryName },
      ...cities.map((city) => ({ '@type': 'City', name: city.name })),
    ],
  };
}

export function websiteSchema(): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: 'bs-BA',
    publisher: businessRef,
  };
}

/** Breadcrumbs from [label, path] pairs, starting after "Početna". */
export function breadcrumbSchema(items: [string, string][]): Schema {
  const all: [string, string][] = [['Početna', '/'], ...items];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map(([name, path], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: new URL(path, site.url).toString(),
    })),
  };
}
