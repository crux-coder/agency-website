export interface FaqItem {
  question: string;
  answer: string;
}

// Rendered on /usluge and mirrored as FAQPage JSON-LD — keep both in sync by
// editing only this file.
export const faq: FaqItem[] = [
  {
    question: 'Koliko košta izrada web stranice u BiH?',
    answer:
      'Jednostavna stranica-vizitka kod nas košta od 600 KM, kompletna stranica za firmu oko 1.200 KM, a web shop od 2.500 KM. Tačnu cijenu dobijete u besplatnoj ponudi, prije početka rada.',
  },
  {
    question: 'Koliko traje izrada web stranice?',
    answer:
      'Stranica-vizitka je gotova za oko sedmicu dana, standardna stranica za firmu za 2–3 sedmice, a web shop za 4–6 sedmica. Najviše zavisi od toga koliko brzo pripremimo tekstove i fotografije.',
  },
  {
    question: 'Da li radite samo u Sarajevu?',
    answer:
      'Ne. Radimo s firmama iz cijele Bosne i Hercegovine — Sarajeva, Tuzle, Zenice, Mostara, Banje Luke, Bihaća i drugih gradova. Sastanci su uživo ili online, kako vam odgovara.',
  },
  {
    question: 'Hoće li moja stranica biti na Googleu?',
    answer:
      'Da. Svaka stranica se gradi s lokalnim SEO-om: pravilnim naslovima, strukturiranim podacima i brzim učitavanjem. Prijavljujemo je Googleu i povezujemo s vašim Google Business profilom, kako biste se pojavljivali u pretragama u vašem gradu.',
  },
  {
    question: 'Mogu li sam mijenjati sadržaj stranice?',
    answer:
      'Možete. Pokažemo vam kako da mijenjate tekstove, slike i blog. Ako ne želite da se time bavite, izmjene radimo mi u okviru paketa održavanja.',
  },
  {
    question: 'Šta mi treba za početak?',
    answer:
      'Dovoljan je kratak razgovor o vašem poslu. Logo, fotografije i tekstove možemo pripremiti zajedno — ako ih nemate, pomažemo i s tim.',
  },
];
