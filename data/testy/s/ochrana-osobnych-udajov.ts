export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const ochranaOsobnychUdajovContent = {
  hero: {
    badge: 'S',
    title: 'Ochrana osobných údajov',
    subtitle: 'Preukaz typu S · Ochrana osobných údajov',
    description: 'Test obsahuje 7 otázok. Vyberte jednu správnu odpoveď pri každej otázke.',
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
    passMark: 6,
  },
} as const

export const questions: Question[] = [
  {
    id: 1,
    text: 'Ochrana osobných údajov:',
    options: {
      A: 'Sa môžu získavať len na konkrétne určený, výslovne uvedený a oprávnený účel a nesmú sa ďalej spracúvať spôsobom, ktorý nie je zlučiteľný s týmto účelom.',
      B: 'Sa môžu získavať len na konkrétne určený, výslovne uvedený a oprávnený účel, pričom sa môžu ďalej spracúvať aj spôsobom, ktorý nie je zlučiteľný s týmto účelom.',
      C: 'Sa môžu získavať len na konkrétne určený, výslovne uvedený a oprávnený účel a môžu sa ďalej spracúvať spôsobom, ktorý je zlučiteľný s iným účelom.',
    },
    correct: 'A',
  },
  {
    id: 2,
    text: 'Prevádzkovateľ je povinný pri získavaní osobných údajov poskytnúť dotknutej osobe informáciu o:',
    options: {
      A: 'Nemožnosti svoj súhlas odvolať.',
      B: 'Práve po roku svoj súhlas odvolať.',
      C: 'Práve kedykoľvek svoj súhlas odvolať.',
    },
    correct: 'C',
  },
  {
    id: 3,
    text: 'Osobné údaje musia byť uchovávané vo forme, ktorá umožňuje identifikáciu dotknutej osoby:',
    options: {
      A: 'Aj dlhšie, kým je to potrebné na účel, na ktorý sa osobné údaje spracúvajú.',
      B: 'Najneskôr dovtedy, kým je to potrebné na účel, na ktorý sa osobné údaje spracúvajú.',
      C: 'Neobmedzene.',
    },
    correct: 'B',
  },
  {
    id: 4,
    text: 'Spracúvanie osobných údajov:',
    options: {
      A: 'Nie je zákonné, ak dotknutá osoba vyjadrila súhlas so spracúvaním svojich osobných údajov aspoň na jeden konkrétny účel.',
      B: 'Je zákonné, ak dotknutá osoba vyjadrila súhlas so spracúvaním svojich osobných údajov aspoň na tri konkrétne účely.',
      C: 'Je zákonné, ak dotknutá osoba vyjadrila súhlas so spracúvaním svojich osobných údajov aspoň na jeden konkrétny účel.',
    },
    correct: 'C',
  },
  {
    id: 5,
    text: 'Prevádzkovateľ a sprostredkovateľ:',
    options: {
      A: 'Je povinný zachovávať mlčanlivosť o osobných údajoch, ktoré spracúva, pričom mlčanlivosť trvá aj po ukončení spracúvania osobných údajov.',
      B: 'Je povinný zachovávať mlčanlivosť o osobných údajoch, aj ktoré nespracúva, pričom mlčanlivosť trvá aj po ukončení spracúvania osobných údajov.',
      C: 'Je povinný zachovávať mlčanlivosť o osobných údajoch, ktoré spracúva, pričom mlčanlivosť zaniká po ukončení spracúvania osobných údajov.',
    },
    correct: 'A',
  },
  {
    id: 6,
    text: 'Súhlas so spracúvaním osobných údajov je:',
    options: {
      A: 'Vážny a slobodne daný prejav vôle dotknutej osoby určený v prílohe zákona vo forme prehlásenia a jednoznačného potvrdzujúceho úkonu.',
      B: 'Akýkoľvek prejav vôle dotknutej osoby vo forme vyhlásenia alebo jednoznačného potvrdzujúceho úkonu.',
      C: 'Akýkoľvek vážny a slobodne daný, konkrétny, informovaný a jednoznačný prejav vôle dotknutej osoby vo forme vyhlásenia alebo jednoznačného potvrdzujúceho úkonu.',
    },
    correct: 'C',
  },
  {
    id: 7,
    text: 'Sprostredkovateľ a každá osoba konajúca za prevádzkovateľa alebo sprostredkovateľa:',
    options: {
      A: 'Ktorá má prístup k osobným údajom, nemôže spracúvať tieto osobné údaje na základe pokynov prevádzkovateľa.',
      B: 'Ktorá má prístup k osobným údajom, môže spracúvať tieto osobné údaje na základe pokynov dotknutej osoby.',
      C: 'Ktorá má prístup k osobným údajom, môže spracúvať tieto osobné údaje na základe pokynov prevádzkovateľa.',
    },
    correct: 'C',
  },
]
