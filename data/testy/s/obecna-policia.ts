export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const obecnaPoliciContent = {
  hero: {
    badge: 'S',
    title: 'Obecná polícia',
    subtitle: 'Preukaz typu S · Obecná polícia',
    description: 'Test obsahuje 9 otázok. Vyberte jednu správnu odpoveď pri každej otázke.',
  },
  backHref: '/testy/s',
  backLabel: '← Späť na oblasti testovania',
  submitLabel: 'Vyhodnoť test',
  result: {
    score: 'Výsledok:',
    of: 'z',
    correct: 'správnych odpovedí',
    passed: 'Úspešne ste zvládli test!',
    failed: 'Skúste to ešte raz.',
    passMark: 7,
  },
} as const

export const questions: Question[] = [
  {
    id: 1,
    text: 'Použiť zbraň:',
    options: {
      A: 'Je príslušník obecnej polície oprávnený len v prípade nutnej obrany, v prípade krajnej núdze potrebuje súhlas náčelníka obecnej polície.',
      B: 'Nie je príslušník obecnej polície oprávnený v prípade nutnej obrany a krajnej núdze.',
      C: 'Je príslušník obecnej polície oprávnený v prípade nutnej obrany a krajnej núdze.',
    },
    correct: 'C',
  },
  {
    id: 2,
    text: 'Príslušník obecnej polície je pri plnení úloh oprávnený:',
    options: {
      A: 'Presvedčiť sa, či ten, koho zadržiavajú alebo predvádzajú, nie je ozbrojený alebo či nemá pri sebe inú vec, ktorou by mohol ohroziť život alebo zdravie, prípadne takú vec odobrať; odobratú vec alebo zbraň vráti osobe po vykonaní tohto oprávnenia.',
      B: 'Presvedčiť sa, či ten, koho zadržiavajú alebo predvádzajú, nie je ozbrojený alebo či nemá pri sebe inú vec, ktorou by mohol ohroziť život alebo zdravie, prípadne takú vec odobrať; odobratú vec alebo zbraň odovzdá najbližšiemu útvaru Policajného zboru spolu so zadržanou alebo predvedenou osobou.',
      C: 'Presvedčiť sa, či ten, koho zadržiavajú alebo predvádzajú, nie je ozbrojený alebo či nemá na sebe inú vec, ktorou by mohol ohroziť svoj život alebo zdravie.',
    },
    correct: 'B',
  },
  {
    id: 3,
    text: 'Pri zabránení výtržnosti, ruvačke, úmyselnému poškodzovaniu majetku alebo inému hrubému správaniu, ktorým je porušovaný verejný poriadok je príslušník obecnej polície oprávnený použiť:',
    options: {
      A: 'Len hmaty, chvaty, údery a kopy sebaobrany.',
      B: 'Hmaty, chvaty, údery a kopy sebaobrany, slzotvorné prostriedky a obušok.',
      C: 'Hmaty, chvaty, údery a kopy sebaobrany a techniky na priame prekonanie odporu alebo odvrátenie úteku.',
    },
    correct: 'B',
  },
  {
    id: 4,
    text: 'Príslušník obecnej polície je pri plnení úloh:',
    options: {
      A: 'Oprávnený zadržať osobu pristihnutú pri páchaní alebo bezprostredne po spáchaní priestupku a hneď ju odovzdať najbližšiemu útvaru Policajného zboru.',
      B: 'Oprávnený zadržať osobu pristihnutú pri páchaní alebo bezprostredne po spáchaní trestného činu a hneď ju odovzdať najbližšiemu útvaru Policajného zboru.',
      C: 'Oprávnený zadržať osobu pristihnutú pri páchaní alebo po spáchaní trestného činu a po spísaní zápisnice o výsluchu podozrivého ju odovzdať najbližšiemu útvaru Policajného zboru.',
    },
    correct: 'B',
  },
  {
    id: 5,
    text: 'Obecná polícia:',
    options: {
      A: 'Nie je poriadkový útvar pôsobiaci pri zabezpečovaní obecných vecí verejného poriadku, ochrany životného prostredia v obci a plnení úloh vyplývajúcich zo všeobecne záväzných nariadení obce, z uznesení obecného zastupiteľstva a z rozhodnutí starostu obce.',
      B: 'Je poriadkový útvar pôsobiaci pri zabezpečovaní obecných vecí verejného poriadku, ochrany životného prostredia v obci a plnení úloh vyplývajúcich zo všeobecne záväzných nariadení obce, z uznesení obecného zastupiteľstva a z rozhodnutí starostu obce.',
      C: 'Je poriadkový útvar pôsobiaci len pri zabezpečovaní obecných vecí verejného poriadku, ochrany životného prostredia v obci a plnení úloh vyplývajúcich zo všeobecne záväzných nariadení obce.',
    },
    correct: 'B',
  },
  {
    id: 6,
    text: 'Príslušník obecnej polície pri plnení úloh:',
    options: {
      A: 'Je povinný oznámiť v prípade, že bol spáchaný trestný čin, vec Policajnému zboru alebo prokurátorovi a podľa povahy veci tiež zamedziť vstupu nepovolaných osôb na miesto činu.',
      B: 'Môže oznámiť v prípade, že bol spáchaný trestný čin, vec Policajnému zboru alebo prokurátorovi a podľa povahy veci môže tiež zamedziť vstupu nepovolaných osôb na miesto činu.',
      C: 'Je povinný oznámiť v prípade, že bol spáchaný trestný čin, vec len Policajnému zboru a podľa povahy veci tiež zamedziť vstupu zúčastnených osôb na miesto činu.',
    },
    correct: 'A',
  },
  {
    id: 7,
    text: 'Medzi základné úlohy obecnej polície nepatrí:',
    options: {
      A: 'Dbá o dodržiavanie poriadku, čistoty a hygieny v uliciach, iných verejných priestranstvách a verejne prístupných miestach.',
      B: 'Doručuje písomnosti, ak tak určí prokurátor.',
      C: 'Dbá o ochranu životného prostredia v obci.',
    },
    correct: 'B',
  },
  {
    id: 8,
    text: 'Príslušník obecnej polície:',
    options: {
      A: 'Je povinný vyzvať osobu pristihnutú pri páchaní priestupku, od ktorej je požadované vysvetlenie, aby preukázala svoju totožnosť; osoba je povinná výzve vyhovieť.',
      B: 'Je oprávnený vyzvať osobu pristihnutú pri páchaní priestupku, od ktorej je požadované vysvetlenie, aby preukázala svoju totožnosť; osoba je povinná výzve vyhovieť.',
      C: 'Je oprávnený vyzvať osobu pristihnutú pri páchaní priestupku, od ktorej je požadované vysvetlenie, aby preukázala svoju totožnosť; osoba nie je povinná výzve vyhovieť.',
    },
    correct: 'B',
  },
  {
    id: 9,
    text: 'Príslušník obecnej polície preukazuje príslušnosť k obecnej polícii:',
    options: {
      A: 'Rovnošatou príslušníka obecnej polície s viditeľne umiestneným obdĺžnikovým znakom obecnej polície, identifikačným odznakom obecnej polície, preukazom príslušníka obecnej polície ako aj ústnym vyhlásením „obecná polícia" alebo „mestská polícia".',
      B: 'Rovnošatou príslušníka obecnej polície s viditeľne umiestneným kruhovým znakom obecnej polície, identifikačným odznakom obecnej polície, preukazom príslušníka obecnej polície ako aj ústnym vyhlásením „obecná polícia" alebo „mestská polícia".',
      C: 'Rovnošatou príslušníka obecnej polície s viditeľne umiestneným štvorcovým znakom obecnej polície, identifikačným odznakom obecnej polície ako aj preukazom príslušníka obecnej polície.',
    },
    correct: 'B',
  },
]
