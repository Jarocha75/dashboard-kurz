export type Predmet = {
  id: string;
  nazov: string;
  hodiny: number;
};

export const kurzSContent = {
  hero: {
    badge: "S",
    title: "Preukaz typu S",
    subtitle: "pre osoby poverené výkonom fyzickej ochrany a pátrania",
    description:
      "Odborná príprava na skúšku odbornej spôsobilosti podľa § 4 vyhlášky MV SR č. 634/2005 Z.z.",
  },
  stats: {
    predmety: "predmetov",
    celkovo: "vyučovacích hodín celkom",
    zdroj: "§ 4 vyhlášky MV SR č. 634/2005 Z.z.",
  },
  section: {
    title: "Osnova odbornej prípravy",
    hodiny: "vyuč. hod.",
  },
} as const;

export const predmety: Predmet[] = [
  {
    id: "a",
    nazov:
      "Základy právneho poriadku Slovenskej republiky, Ústava Slovenskej republiky a právna úprava ľudských práv a slobôd",
    hodiny: 2,
  },
  {
    id: "b",
    nazov:
      "Všeobecne záväzné právne predpisy týkajúce sa poskytovania služieb v oblasti súkromnej bezpečnosti",
    hodiny: 20,
  },
  {
    id: "c",
    nazov: "Základy trestného práva",
    hodiny: 6,
  },
  {
    id: "d",
    nazov: "Základy kriminalistiky",
    hodiny: 6,
  },
  {
    id: "e",
    nazov: "Zákon o priestupkoch",
    hodiny: 3,
  },
  {
    id: "f",
    nazov:
      "Zákon o Policajnom zbore, zákon o obecnej polícii, zákon o Vojenskej polícii a zákon o Slovenskej informačnej službe",
    hodiny: 6,
  },
  {
    id: "g",
    nazov:
      "Teória taktiky a techniky vykonávania zásahov a riešenie modelových situácií",
    hodiny: 20,
  },
  {
    id: "h",
    nazov: "Poskytovanie prvej pomoci",
    hodiny: 8,
  },
  {
    id: "i",
    nazov: "Požiarna príprava",
    hodiny: 5,
  },
  {
    id: "j",
    nazov:
      "Všeobecne záväzné právne predpisy týkajúce sa ochrany osobných údajov",
    hodiny: 2,
  },
];

export const celkovyPocetHodin = predmety.reduce((sum, p) => sum + p.hodiny, 0);
