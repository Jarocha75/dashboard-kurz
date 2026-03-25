export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const ustavaContent = {
  hero: {
    badge: 'S',
    title: 'Ústava SR a ZĽPS',
    subtitle: 'Preukaz typu S · Ústava SR a základné ľudské práva a slobody',
    description: 'Test obsahuje 12 otázok. Vyberte jednu správnu odpoveď pri každej otázke.',
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
    passMark: 10,
  },
} as const

export const questions: Question[] = [
  {
    id: 1,
    text: 'Povinnosti možno ukladať:',
    options: {
      A: 'Zákonom alebo na základe zákona, v jeho medziach a pri zachovaní základných práv a slobôd.',
      B: 'Zákonom alebo na základe zákona, aj nad jeho medze pri zachovaní základných práv a slobôd.',
      C: 'Zákonom alebo na základe zákona, v jeho medziach bez zachovania základných práv a slobôd.',
    },
    correct: 'A',
  },
  {
    id: 2,
    text: 'Každý občan má právo:',
    options: {
      A: 'Na slobodný prístup na územie Slovenskej republiky. Občana nemožno nútiť, aby opustil vlasť, ale možno ho vyhostiť.',
      B: 'Na slobodný prístup na územie Slovenskej republiky. Občana možno nútiť, aby opustil vlasť, ale nemožno ho vyhostiť.',
      C: 'Na slobodný prístup na územie Slovenskej republiky. Občana nemožno nútiť, aby opustil vlasť, a nemožno ho vyhostiť.',
    },
    correct: 'C',
  },
  {
    id: 3,
    text: 'Právo slobodne sa združovať:',
    options: {
      A: 'Sa zaručuje. Každý sa musí spolu s inými združovať v spolkoch, spoločnostiach alebo iných združeniach.',
      B: 'Sa nezaručuje. Každý sa môže spolu s niektorými združovať v spolkoch, spoločnostiach alebo iných združeniach.',
      C: 'Sa zaručuje. Každý má právo spolu s inými sa združovať v spolkoch, spoločnostiach alebo iných združeniach.',
    },
    correct: 'C',
  },
  {
    id: 4,
    text: 'Podľa Ústavy Slovenskej republiky:',
    options: {
      A: 'Každý môže konať, čo nie je zákonom zakázané, a nikoho nemožno nútiť, aby konal niečo, čo zákon neukladá.',
      B: 'Každý môže konať, čo je zákonom zakázané, a nikoho nemožno nútiť, aby konal niečo, čo zákon neukladá.',
      C: 'Každý môže konať, čo nie je zákonom zakázané, a nikoho nemožno nútiť, aby konal niečo, čo zákon ukladá.',
    },
    correct: 'A',
  },
  {
    id: 5,
    text: 'Tomu kto uplatňuje svoje základné práva a slobody:',
    options: {
      A: 'Môže byť spôsobená ujma na jeho právach.',
      B: 'Nesmie byť spôsobená ujma na jeho právach.',
      C: 'Môže inému spôsobiť ujmu na jeho právach.',
    },
    correct: 'B',
  },
  {
    id: 6,
    text: 'Každý:',
    options: {
      A: 'Sa môže rozhodnúť chrániť a zveľaďovať životné prostredie a kultúrne dedičstvo.',
      B: 'Je povinný chrániť a decimovať životné prostredie a kultúrne dedičstvo.',
      C: 'Je povinný chrániť a zveľaďovať životné prostredie a kultúrne dedičstvo.',
    },
    correct: 'C',
  },
  {
    id: 7,
    text: 'Zamestnanci majú právo na spravodlivé a uspokojujúce pracovné podmienky. Zákon im zabezpečuje:',
    options: {
      A: 'Najnižšiu prípustnú dĺžku pracovného času.',
      B: 'Právo na odmenu za vykonanú prácu, dostatočnú na to, aby im umožnila len nadštandardnú životnú úroveň.',
      C: 'Právo na odmenu za vykonanú prácu, dostatočnú na to, aby im umožnila dôstojnú životnú úroveň.',
    },
    correct: 'C',
  },
  {
    id: 8,
    text: 'Štátnymi symbolmi Slovenskej republiky sú:',
    options: {
      A: 'Štátny znak, štátna vlajka, štátna hymna a štátna ústava.',
      B: 'Štátny znak, štátna vlajka, štátna pečať a štátna hymna.',
      C: 'Štátny erb, štátna pečať, štátna hymna, a štátna zástava.',
    },
    correct: 'B',
  },
  {
    id: 9,
    text: 'Každý sa môže domáhať:',
    options: {
      A: 'Zákonom ustanoveným postupom svojho práva na závislom a predpojatom súde a v prípadoch ustanovených zákonom na inom orgáne Slovenskej republiky.',
      B: 'Zákonom ustanoveným postupom svojho práva na príslušnom tendenčnom súde a v prípadoch ustanovených zákonom na inom orgáne Slovenskej republiky.',
      C: 'Zákonom ustanoveným postupom svojho práva na nezávislom a nestrannom súde a v prípadoch ustanovených zákonom na inom orgáne Slovenskej republiky.',
    },
    correct: 'C',
  },
  {
    id: 10,
    text: 'Základné práva a slobody:',
    options: {
      A: 'Nie sú neodňateľné, nescudziteľné, nepremlčateľné a nezrušiteľné.',
      B: 'Sú len neodňateľné, nepremlčateľné a nezrušiteľné.',
      C: 'Sú neodňateľné, nescudziteľné, nepremlčateľné a nezrušiteľné.',
    },
    correct: 'C',
  },
  {
    id: 11,
    text: 'Každý má právo vyjadrovať svoje názory týmito spôsobmi:',
    options: {
      A: 'Slovom, písmom, tlačou, obrazom alebo iným spôsobom, ako aj slobodne vyhľadávať, prijímať a rozširovať idey a informácie bez ohľadu na hranice štátu, pričom sa cenzúra zakazuje.',
      B: 'Slovom, písmom, tlačou, obrazom alebo iným spôsobom, ako aj vyhľadávať, prijímať a rozširovať niektoré idey a informácie, len s ohľadom na hranice štátu, pričom sa cenzúra zakazuje.',
      C: 'Slovom, písmom, tlačou, obrazom alebo iným spôsobom, ako aj slobodne vyhľadávať, prijímať a rozširovať idey a informácie bez ohľadu na hranice štátu, pričom sa cenzúra povoľuje.',
    },
    correct: 'A',
  },
  {
    id: 12,
    text: 'Každý má právo:',
    options: {
      A: 'Na zasahovanie do ľudskej dôstojnosti, osobnej cti, dobrej povesti a na ochranu mena.',
      B: 'Na zachovanie ľudskej dôstojnosti, osobnej cti, dobrej povesti a na ochranu mena.',
      C: 'Zasahovať do ľudskej dôstojnosti, osobnej cti, dobrej povesti a ochrany mena.',
    },
    correct: 'B',
  },
]
