// Prices are template placeholders in convertible marks (KM / BAM).
// Adjust them to your real offer before going live.
export interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export const plans: Plan[] = [
  {
    name: 'Start',
    price: '600',
    period: 'jednokratno',
    description: 'Jednostavna stranica-vizitka za zanatlije i male firme koje tek kreću online.',
    features: [
      'Jedna stranica (landing)',
      'Prilagođeno mobitelima',
      'Kontakt forma, poziv i Viber dugme',
      'Osnovni lokalni SEO',
      'Hosting i domena .ba prva godina',
    ],
    highlighted: false,
  },
  {
    name: 'Biznis',
    price: '1.200',
    period: 'jednokratno',
    description: 'Najčešći izbor: kompletna web stranica koja se rangira u vašem gradu.',
    features: [
      'Do 8 podstranica',
      'Napredni lokalni SEO i schema',
      'Postavljanje Google Business profila',
      'Blog za vijesti i savjete',
      'Hosting i domena .ba prva godina',
      '3 mjeseca besplatnog održavanja',
    ],
    highlighted: true,
  },
  {
    name: 'Web shop',
    price: '2.500',
    period: 'od, jednokratno',
    description: 'Online prodaja za trgovine i proizvođače koji dostavljaju širom BiH.',
    features: [
      'Sve iz paketa Biznis',
      'Katalog proizvoda i narudžbe',
      'Plaćanje pouzećem i karticom',
      'Obuka za upravljanje shopom',
      '6 mjeseci besplatnog održavanja',
    ],
    highlighted: false,
  },
];
