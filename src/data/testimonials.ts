// PLACEHOLDERS: these are example testimonials so the layout has content.
// Replace them with real quotes from real clients (with their permission)
// before going live — or remove the section until you have some.
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Primjer recenzije: od kada imamo novu stranicu, klijenti nas pronalaze na Googleu i zovu direktno sa stranice. Sve je završeno brzo i bez komplikacija.',
    name: 'Ime klijenta',
    role: 'Frizerski salon, Sarajevo',
    initials: 'IK',
  },
  {
    quote:
      'Primjer recenzije: konačno imamo stranicu koja radi na mobitelu. Jelovnik i rezervacije su na jednom mjestu, a gosti to primijete.',
    name: 'Ime klijenta',
    role: 'Restoran, Mostar',
    initials: 'IK',
  },
  {
    quote:
      'Primjer recenzije: dobili smo jasnu ponudu u KM, bez skrivenih troškova. Google Business profil je sređen i sada imamo više poziva.',
    name: 'Ime klijenta',
    role: 'Auto servis, Tuzla',
    initials: 'IK',
  },
];
