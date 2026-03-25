export type Predmet = {
  id: string;
  nazov: string;
  hodiny: number;
};

export const kurzPContent = {
  hero: {
    badge: "P",
    title: "Preukaz typu P",
    subtitle:
      "pre osoby poverené výkonom fyzickej ochrany, pátrania, odbornej prípravy a poradenstva a pre prevádzkovateľov",
    description:
      "Odborná príprava na skúšku odbornej spôsobilosti podľa § 5 vyhlášky MV SR č. 634/2005 Z.z.",
  },
  stats: {
    predmety: "predmetov",
    celkovo: "vyučovacích hodín celkom",
    zdroj: "§ 5 vyhlášky MV SR č. 634/2005 Z.z.",
  },
  section: {
    title: "Osnova odbornej prípravy",
    hodiny: "vyuč. hod.",
  },
} as const;

export const predmety: Predmet[] = [
  {
    id: "a",
    nazov: "Základy právneho poriadku Slovenskej republiky",
    hodiny: 5,
  },
  {
    id: "b",
    nazov: "Ústava Slovenskej republiky a právna úprava ľudských práv a slobôd",
    hodiny: 4,
  },
  {
    id: "c",
    nazov:
      "Všeobecne záväzné právne predpisy týkajúce sa poskytovania služieb v oblasti súkromnej bezpečnosti",
    hodiny: 26,
  },
  {
    id: "d",
    nazov: "Základy trestného práva",
    hodiny: 8,
  },
  {
    id: "e",
    nazov: "Základy kriminalistiky a kriminológie",
    hodiny: 6,
  },
  {
    id: "f",
    nazov: "Zákon o priestupkoch a správny poriadok",
    hodiny: 8,
  },
  {
    id: "g",
    nazov:
      "Zákon o Policajnom zbore, zákon o obecnej polícii, zákon o Vojenskej polícii a zákon o Slovenskej informačnej službe",
    hodiny: 10,
  },
  {
    id: "h",
    nazov:
      "Teória taktiky a techniky vykonávania zásahov a riešenie modelových situácií",
    hodiny: 15,
  },
  {
    id: "i",
    nazov: "Poskytovanie prvej pomoci",
    hodiny: 8,
  },
  {
    id: "j",
    nazov: "Požiarna príprava",
    hodiny: 5,
  },
  {
    id: "k",
    nazov:
      "Všeobecne záväzné právne predpisy týkajúce sa ochrany osobných údajov",
    hodiny: 5,
  },
];

export const celkovyPocetHodin = predmety.reduce((sum, p) => sum + p.hodiny, 0);
