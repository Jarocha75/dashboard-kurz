export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const slovenskaInformacnaSluzbaContent = {
  hero: {
    badge: 'S',
    title: 'Slovenská informačná služba',
    subtitle: 'Preukaz typu S · Slovenská informačná služba',
    description: 'Test obsahuje 2 otázky. Vyberte jednu správnu odpoveď pri každej otázke.',
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
    passMark: 2,
  },
} as const

export const questions: Question[] = [
  {
    id: 1,
    text: 'Príslušník Slovenskej informačnej služby:',
    options: {
      A: 'Preukazuje svoju príslušnosť k informačnej službe len služobným preukazom s evidenčným číslom.',
      B: 'Preukazuje svoju príslušnosť k informačnej službe služobným preukazom s evidenčným číslom a ústnym vyhlásením „Slovenská informačná služba".',
      C: 'Preukazuje svoju príslušnosť k informačnej službe služobným preukazom pričom je povinný oznámiť svoje meno, priezvisko a funkciu.',
    },
    correct: 'B',
  },
  {
    id: 2,
    text: 'Slovenská informačná služba je oprávnená v rozsahu svojej pôsobnosti:',
    options: {
      A: 'Požadovať len od štátnych a iných orgánov a právnických osôb poskytnutie pomoci, podkladov a informácií, ktoré môžu prispieť k objasneniu skutočností dôležitých na plnenie ich úloh.',
      B: 'Požadovať od štátnych a iných orgánov, právnických osôb a fyzických osôb poskytnutie pomoci, podkladov a informácií, ktoré môžu prispieť k objasneniu skutočností dôležitých na plnenie ich úloh.',
      C: 'Vynucovať od štátnych a iných orgánov, právnických osôb a fyzických osôb poskytnutie pomoci, podkladov a informácií, ktoré môžu prispieť k objasneniu skutočností dôležitých na plnenie ich úloh.',
    },
    correct: 'B',
  },
]
