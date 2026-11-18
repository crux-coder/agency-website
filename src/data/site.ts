/**
 * Global site metadata and navigation.
 * Keeping this in one place avoids copy-pasted strings across layouts.
 *
 * PLACEHOLDERS: name, contact details, address and geo coordinates are
 * template values — replace them with your real business data before going
 * live. Local SEO (Google Business profil, JSON-LD) depends on the name,
 * address and phone (NAP) being identical everywhere they appear online.
 */
export const site = {
  name: 'Lokalni Web',
  tagline: 'Web stranice koje lokalnim firmama donose klijente.',
  description:
    'Izrada web stranica za lokalne firme u Bosni i Hercegovini. Brze, moderne i SEO optimizovane stranice za zanatlije, restorane, salone, ordinacije i male biznise — od Sarajeva do Banje Luke.',
  founder: 'Jasmin Mustafić',
  email: 'info@example.com',
  phone: '+387 61 000 000',
  address: {
    street: 'Ulica i broj',
    city: 'Sarajevo',
    // Locative form used after "u" (u Sarajevu).
    cityLocative: 'Sarajevu',
    // Genitive form used after "iz" (iz Sarajeva).
    cityGenitive: 'Sarajeva',
    postalCode: '71000',
    region: 'Kanton Sarajevo',
    country: 'BA',
    countryName: 'Bosna i Hercegovina',
  },
  // Approximate centre of Sarajevo — replace with your office coordinates.
  geo: { latitude: 43.8563, longitude: 18.4131 },
  hours: {
    display: ['Pon–Pet · 09:00–17:00', 'Sub · 10:00–14:00'],
    schema: ['Mo-Fr 09:00-17:00', 'Sa 10:00-14:00'],
  },
  priceRange: '600 KM – 3.500 KM',
  // Used by the sitemap and canonical URLs. Keep in sync with astro.config.mjs.
  url: 'https://example.com',
  locale: 'bs_BA',
  lang: 'bs',
} as const;

/** Address on a single line, e.g. for the footer. */
export const addressLine = `${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.countryName}`;

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Početna', href: '/' },
  { label: 'Usluge', href: '/usluge' },
  { label: 'O nama', href: '/o-nama' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
];

/** Primary call to action, reused in the navbar and CTA bands. */
export const primaryCta = { label: 'Besplatna ponuda', href: '/kontakt' };
