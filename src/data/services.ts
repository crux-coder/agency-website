export interface Service {
  title: string;
  description: string;
  details: string[];
  format: string;
}

export const services: Service[] = [
  {
    title: 'Izrada web stranica',
    description:
      'Moderna, brza web stranica po mjeri vaše firme — dizajnirana da posjetioce pretvori u pozive, upite i rezervacije.',
    details: ['Prilagođeno mobitelima', 'Do 8 podstranica', 'Kontakt forma i Google mapa'],
    format: 'Gotovo za 2–3 sedmice',
  },
  {
    title: 'Lokalni SEO',
    description:
      'Pojavite se kada neko u vašem gradu ukuca „frizer Sarajevo” ili „vodoinstalater Tuzla”. Optimizujemo stranicu za lokalne pretrage na Googleu.',
    details: ['Istraživanje ključnih riječi', 'Strukturirani podaci (schema)', 'Tehnička SEO provjera'],
    format: 'Uključeno u svaki paket',
  },
  {
    title: 'Google Business profil',
    description:
      'Postavljanje i optimizacija vašeg profila na Google mapama — radno vrijeme, fotografije, usluge i recenzije na jednom mjestu.',
    details: ['Otvaranje i verifikacija', 'Kategorije i opis usluga', 'Savjeti za recenzije'],
    format: 'Jednokratno postavljanje',
  },
  {
    title: 'Web shop',
    description:
      'Online prodaja za lokalne trgovine i proizvođače: katalog proizvoda, narudžbe, plaćanje pouzećem ili karticom i dostava širom BiH.',
    details: ['Jednostavno upravljanje proizvodima', 'Plaćanje pouzećem i karticom', 'Obavijesti o narudžbama'],
    format: 'Gotovo za 4–6 sedmica',
  },
  {
    title: 'Redizajn postojeće stranice',
    description:
      'Imate staru, sporu stranicu koja ne radi na mobitelu? Prenosimo sadržaj na novi, brz dizajn bez gubitka pozicija na Googleu.',
    details: ['Analiza postojeće stranice', 'Preusmjeravanja (301) bez gubitka SEO', 'Novi, brži dizajn'],
    format: 'Gotovo za 2–4 sedmice',
  },
  {
    title: 'Održavanje i hosting',
    description:
      'Brinemo o hostingu, sigurnosnim kopijama, ažuriranjima i sitnim izmjenama teksta i slika, da se vi možete baviti svojim poslom.',
    details: ['Hosting i SSL certifikat', 'Izmjene sadržaja po potrebi', 'Mjesečni izvještaj posjeta'],
    format: 'Mjesečna pretplata',
  },
];

export interface ProcessStep {
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Besplatan razgovor',
    description: 'Upoznamo vaš posao, klijente i konkurenciju u vašem gradu. Dobijete jasnu ponudu bez obaveze.',
  },
  {
    title: 'Dizajn i sadržaj',
    description: 'Pripremimo dizajn i tekstove optimizovane za pretrage koje vaši klijenti zaista kucaju.',
  },
  {
    title: 'Izrada i testiranje',
    description: 'Stranica se gradi, testira na mobitelima i ubrzava. Vi pregledate i tražite izmjene.',
  },
  {
    title: 'Objava i Google',
    description: 'Objavimo stranicu, prijavimo je Googleu i povežemo s vašim Google Business profilom.',
  },
];
