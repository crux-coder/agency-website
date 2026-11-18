import { site } from './site';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

// Placeholder bio — rewrite it in your own words.
export const team: TeamMember[] = [
  {
    name: site.founder,
    role: 'Osnivač, web developer',
    bio: 'Radim direktno s vama, od prvog razgovora do objave stranice. Bez posrednika, bez agencijskog žargona — samo stranica koja radi za vaš posao.',
    initials: 'JM',
  },
];

export interface Value {
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    title: 'Rezultati, ne samo dizajn',
    description:
      'Lijepa stranica koju niko ne nađe ne vrijedi ništa. Svaka stranica se gradi da donese pozive, upite i nove klijente.',
  },
  {
    title: 'Jasne cijene u KM',
    description:
      'Cijenu znate prije početka rada. Bez skrivenih troškova, bez iznenađenja na fakturi.',
  },
  {
    title: 'Lokalno i dostupno',
    description:
      'Razumijemo lokalno tržište i lokalne klijente. Dostupni smo na telefon, Viber i e-mail — na vašem jeziku.',
  },
];
