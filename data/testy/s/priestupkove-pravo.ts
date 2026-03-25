export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const priestupkyContent = {
  hero: {
    badge: 'S',
    title: 'Priestupkové právo',
    subtitle: 'Preukaz typu S · Priestupkové právo',
    description: 'Test obsahuje 10 otázok. Vyberte jednu správnu odpoveď pri každej otázke.',
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
    passMark: 8,
  },
} as const

export const questions: Question[] = [
  {
    id: 1,
    text: 'Na zodpovednosť za priestupok:',
    options: {
      A: 'Je potrebné len úmyselné zavinenie.',
      B: 'Stačí zavinenie z nedbanlivosti, ak zákon o priestupkoch výslovne neustanoví, že je potrebné úmyselné zavinenie.',
      C: 'Stačí zavinenie úmyselné, ak zákon o priestupkoch výslovne neustanoví, že je potrebné zavinenie z nedbanlivosti.',
    },
    correct: 'B',
  },
  {
    id: 2,
    text: 'Priestupky prejednáva:',
    options: {
      A: 'Orgán činný v trestnom konaní.',
      B: 'Správny orgán.',
      C: 'Súd.',
    },
    correct: 'B',
  },
  {
    id: 3,
    text: 'Pokarhanie nemožno uložiť spolu s:',
    options: {
      A: 'Zákazom činnosti.',
      B: 'Pokutou.',
      C: 'Prepadnutím veci.',
    },
    correct: 'B',
  },
  {
    id: 4,
    text: 'Priestupok nemožno prejednať:',
    options: {
      A: 'Ak od jeho spáchania uplynuli dva roky.',
      B: 'Ak od jeho spáchania neuplynul jeden rok.',
      C: 'Ak od jeho spáchania uplynul jeden rok.',
    },
    correct: 'A',
  },
  {
    id: 5,
    text: 'Za priestupok možno uložiť tieto ochranné opatrenia:',
    options: {
      A: 'Obmedzujúce opatrenie a zhabanie veci.',
      B: 'Zákaz činnosti a obmedzujúce opatrenie.',
      C: 'Obmedzujúce opatrenie a prepadnutie veci.',
    },
    correct: 'A',
  },
  {
    id: 6,
    text: 'Priestupky sú upravené:',
    options: {
      A: 'Len v zákone o súkromnej bezpečnosti.',
      B: 'Len v zákone o priestupkoch.',
      C: 'V zákone o priestupkoch alebo v iných zákonoch.',
    },
    correct: 'C',
  },
  {
    id: 7,
    text: 'Za priestupok:',
    options: {
      A: 'Nie je zodpovedný ten, kto v čase jeho spáchania nedovŕšil osemnásty rok svojho veku.',
      B: 'Je zodpovedný ten, kto v čase jeho spáchania nedovŕšil pätnásty rok svojho veku.',
      C: 'Nie je zodpovedný ten, kto v čase jeho spáchania nedovŕšil štrnásty rok svojho veku.',
    },
    correct: 'C',
  },
  {
    id: 8,
    text: 'Priestupkom nie je konanie, ktorým niekto odvracia:',
    options: {
      A: 'Primeraným spôsobom priamo hroziaci útok na záujem chránený zákonom alebo nebezpečenstvo priamo hroziace záujmu chránenému zákonom o priestupkoch, ak týmto konaním nebol spôsobený zrejme rovnako závažný následok ako ten, ktorý hrozil, a toto nebezpečenstvo nebolo možné v danej situácii odstrániť inak.',
      B: 'Primeraným spôsobom len nebezpečenstvo hroziace záujmu chránenému zákonom o priestupkoch, ak týmto konaním bol spôsobený zrejme rovnako závažný následok ako ten, ktorý hrozil, a toto nebezpečenstvo nebolo možné v danej situácii odstrániť inak.',
      C: 'Primeraným spôsobom len priamo hroziaci útok na záujem chránený zákonom o priestupkoch, ak týmto konaním bol spôsobený zrejme rovnako závažný následok ako ten, ktorý hrozil, a toto nebezpečenstvo bolo možné v danej situácii odstrániť inak.',
    },
    correct: 'A',
  },
  {
    id: 9,
    text: 'Priestupkom je:',
    options: {
      A: 'Zavinené konanie, ktoré len porušuje záujem spoločnosti a je za priestupok výslovne označené v zákone o priestupkoch alebo v inom zákone, ak nejde o iný správny delikt postihnuteľný podľa osobitných právnych predpisov, alebo o trestný čin.',
      B: 'Zavinené konanie, ktoré porušuje alebo ohrozuje záujem spoločnosti a je za priestupok výslovne označené v zákone o priestupkoch alebo v inom zákone, ak nejde o iný správny delikt postihnuteľný podľa osobitných právnych predpisov, alebo o trestný čin.',
      C: 'Zavinené konanie, ktoré porušuje alebo ohrozuje záujem spoločnosti a nie je za priestupok výslovne označené v zákone o priestupkoch alebo v inom zákone, ale má znaky trestného činu.',
    },
    correct: 'B',
  },
  {
    id: 10,
    text: 'Za priestupok možno uložiť tieto sankcie:',
    options: {
      A: 'Pokarhanie, pokutu, zákaz činnosti a prepadnutie veci.',
      B: 'Dohovor, pokutu, zhabanie veci a zákaz činnosti.',
      C: 'Pokutu, zákaz činnosti, pokarhanie a zhabanie veci.',
    },
    correct: 'A',
  },
]
