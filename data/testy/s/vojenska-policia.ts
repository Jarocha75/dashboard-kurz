export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const vojenskaPoliciContent = {
  hero: {
    badge: 'S',
    title: 'Vojenská polícia',
    subtitle: 'Preukaz typu S · Vojenská polícia',
    description: 'Test obsahuje 5 otázok. Vyberte jednu správnu odpoveď pri každej otázke.',
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
    passMark: 4,
  },
} as const

export const questions: Question[] = [
  {
    id: 1,
    text: 'Pôsobnosť Vojenskej polície sa vzťahuje:',
    options: {
      A: 'Na osoby, ktoré sa nachádzajú v objektoch Ministerstva obrany Slovenskej republiky a vojenských objektoch, priestoroch a miestach, kde prebiehajú vojenské operácie alebo vojenské akcie.',
      B: 'Na osoby, ktoré sa nachádzajú mimo objektov Ministerstva obrany Slovenskej republiky a vojenských objektoch, priestoroch a miestach, kde prebiehajú vojenské operácie alebo vojenské akcie.',
      C: 'Len na vojakov, ktorí sa nachádzajú v objektoch Ministerstva obrany Slovenskej republiky a vojenských objektoch, priestoroch a miestach, kde prebiehajú vojenské operácie alebo vojenské akcie.',
    },
    correct: 'A',
  },
  {
    id: 2,
    text: 'Vojenský policajt je oprávnený:',
    options: {
      A: 'Prezerať civilné vozidlá, ktoré nie sú vedené vojakmi.',
      B: 'Prezerať všetky vozidlá.',
      C: 'Prezerať vozidlá vedené vojakmi a vojenské vozidlá.',
    },
    correct: 'C',
  },
  {
    id: 3,
    text: 'Oprávnenie požadovať potrebné informácie:',
    options: {
      A: 'Je oprávnený vojenský policajt od osoby, ktorá môže prispieť k objasneniu skutočnosti dôležitej aj na odhalenie priestupku a na zaistenie jeho páchateľa.',
      B: 'Je oprávnený vojenský policajt len od vojaka, ktorý môže prispieť k objasneniu skutočnosti dôležitej na odhalenie trestného činu a na zistenie jeho páchateľa.',
      C: 'Je oprávnený vojenský policajt od osoby, ktorá môže prispieť k objasneniu skutočnosti dôležitej na odhalenie trestného činu a na zistenie jeho páchateľa.',
    },
    correct: 'C',
  },
  {
    id: 4,
    text: 'Pri dohľade nad bezpečnosťou a plynulosťou cestnej premávky:',
    options: {
      A: 'Pri riadení cestnej premávky vojenských vozidiel, motorových vozidiel a nemotorových vozidiel na pozemných komunikáciách alebo pri ich zastavovaní nemá vojenský policajt rovnaké oprávnenie ako policajt Policajného zboru.',
      B: 'Pri riadení cestnej premávky len vojenských vozidiel na pozemných komunikáciách alebo pri ich zastavovaní má vojenský policajt rovnaké oprávnenie ako policajt Policajného zboru.',
      C: 'Pri riadení cestnej premávky vojenských vozidiel, motorových vozidiel a nemotorových vozidiel na pozemných komunikáciách alebo pri ich zastavovaní má vojenský policajt rovnaké oprávnenie ako policajt Policajného zboru.',
    },
    correct: 'C',
  },
  {
    id: 5,
    text: 'V záujme zabezpečenia obrany a bezpečnosti štátu sa:',
    options: {
      A: 'Zakazuje vstupovať s povolením do chráneného vojenského objektu, ktorý chráni Vojenská polícia alebo dozorná služba, alebo strážna služba ozbrojených síl Slovenskej republiky.',
      B: 'Zakazuje vstupovať bez povolenia do chráneného vojenského objektu, ktorý chráni Vojenská polícia alebo dozorná služba, alebo strážna služba ozbrojených síl Slovenskej republiky.',
      C: 'Umožňuje vstupovať bez povolenia do chráneného vojenského objektu, ktorý chráni Vojenská polícia alebo dozorná služba, alebo strážna služba ozbrojených síl Slovenskej republiky.',
    },
    correct: 'B',
  },
]
