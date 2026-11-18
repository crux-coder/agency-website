/**
 * Cities served — each one gets a local landing page at
 * /izrada-web-stranica/<slug>/ targeting searches such as
 * "izrada web stranica Tuzla".
 *
 * Keep the intro text genuinely different per city: near-duplicate city pages
 * are treated by Google as doorway pages and can hurt rankings.
 */
export interface City {
  slug: string;
  /** Nominative, e.g. "Banja Luka". */
  name: string;
  /** Locative used after "u", e.g. "Banjoj Luci". */
  locative: string;
  region: string;
  intro: string;
  /** Typical local businesses we build for — used for internal copy. */
  industries: string[];
}

export const cities: City[] = [
  {
    slug: 'sarajevo',
    name: 'Sarajevo',
    locative: 'Sarajevu',
    region: 'Kanton Sarajevo',
    intro:
      'Sarajevo je najkonkurentnije tržište u BiH: kada neko ukuca „stomatolog Sarajevo” ili „frizer Grbavica”, na prvoj stranici je samo nekoliko firmi. Gradimo stranice koje se bore za ta mjesta — po općinama i kvartovima, od Starog Grada do Ilidže.',
    industries: ['stomatološke ordinacije', 'restorani i kafići', 'frizerski i kozmetički saloni', 'apartmani i turizam'],
  },
  {
    slug: 'tuzla',
    name: 'Tuzla',
    locative: 'Tuzli',
    region: 'Tuzlanski kanton',
    intro:
      'Tuzla i okolina — Lukavac, Živinice, Gračanica, Srebrenik — imaju snažnu zanatsku i proizvodnu scenu kojoj često nedostaje samo dobra web stranica. Pomažemo lokalnim firmama da ih kupci nađu prije konkurencije.',
    industries: ['auto servisi i vulkanizeri', 'građevinske firme', 'proizvođači i radionice', 'ugostiteljski objekti'],
  },
  {
    slug: 'zenica',
    name: 'Zenica',
    locative: 'Zenici',
    region: 'Zeničko-dobojski kanton',
    intro:
      'U Zenici i okolnim mjestima — Kaknju, Visokom, Zavidovićima — ljudi i dalje najviše biraju majstore i usluge po preporuci. Dobra stranica i Google profil su danas ta preporuka: prvo što klijent vidi prije nego što vas pozove.',
    industries: ['majstori i zanatlije', 'fizioterapija i zdravstvo', 'trgovine', 'privatne škole i kursevi'],
  },
  {
    slug: 'mostar',
    name: 'Mostar',
    locative: 'Mostaru',
    region: 'Hercegovačko-neretvanski kanton',
    intro:
      'Mostar živi od lokalnih klijenata, ali i od turista koji pretražuju na engleskom i drugim jezicima. Pravimo stranice koje rade za oba — za domaće goste i za one koji tek planiraju dolazak u Hercegovinu.',
    industries: ['smještaj i apartmani', 'restorani', 'turističke agencije i ture', 'vinarije i lokalni proizvođači'],
  },
  {
    slug: 'banja-luka',
    name: 'Banja Luka',
    locative: 'Banjoj Luci',
    region: 'Republika Srpska',
    intro:
      'Banja Luka ima sve više malih firmi i startupa koji se takmiče za iste klijente na Googleu. Brza stranica, jasna ponuda i dobro sređen Google Business profil prave razliku između poziva i propuštene prilike.',
    industries: ['ordinacije i saloni', 'IT i uslužne firme', 'teretane i sportski klubovi', 'trgovine'],
  },
  {
    slug: 'bihac',
    name: 'Bihać',
    locative: 'Bihaću',
    region: 'Unsko-sanski kanton',
    intro:
      'Bihać i Una privlače sve više gostiju iz zemlje i dijaspore. Firmama iz Unsko-sanskog kantona pravimo stranice koje se nađu i kada domaći traže uslugu i kada gosti iz inostranstva planiraju odmor.',
    industries: ['rafting i outdoor turizam', 'smještaj', 'ugostiteljstvo', 'lokalne usluge'],
  },
];
