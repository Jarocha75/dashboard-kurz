export type TestKategoria = {
  id: string
  nazov: string
  pocetOtazok: number
  href: string
}

export const testySContent = {
  hero: {
    badge: 'S',
    title: 'On-line testy — Preukaz typu S',
    subtitle: 'pre osoby poverené výkonom fyzickej ochrany a pátrania',
    description: 'Precvičte si znalosti z jednotlivých oblastí pred skúškou odbornej spôsobilosti.',
  },
  section: {
    title: 'Oblasti testovania',
    otazok: 'otázok',
    spustit: 'Spustiť test',
  },
} as const

export const kategorie: TestKategoria[] = [
  {
    id: 'sukromna-bezpecnost',
    nazov: 'Súkromná bezpečnosť',
    pocetOtazok: 100,
    href: '/testy/s/sukromna-bezpecnost',
  },
  {
    id: 'priestupkove-pravo',
    nazov: 'Priestupkové právo',
    pocetOtazok: 10,
    href: '/testy/s/priestupkove-pravo',
  },
  {
    id: 'trestne-pravo',
    nazov: 'Trestné právo',
    pocetOtazok: 27,
    href: '/testy/s/trestne-pravo',
  },
  {
    id: 'ustava-sr',
    nazov: 'Ústava SR a ZĽPS',
    pocetOtazok: 12,
    href: '/testy/s/ustava-sr',
  },
  {
    id: 'kriminalistika',
    nazov: 'Kriminalistika',
    pocetOtazok: 13,
    href: '/testy/s/kriminalistika',
  },
  {
    id: 'policajny-zbor',
    nazov: 'Policajný zbor',
    pocetOtazok: 15,
    href: '/testy/s/policajny-zbor',
  },
  {
    id: 'obecna-policia',
    nazov: 'Obecná polícia',
    pocetOtazok: 9,
    href: '/testy/s/obecna-policia',
  },
  {
    id: 'vojenska-policia',
    nazov: 'Vojenská polícia',
    pocetOtazok: 5,
    href: '/testy/s/vojenska-policia',
  },
  {
    id: 'ochrana-osobnych-udajov',
    nazov: 'Ochrana osobných údajov',
    pocetOtazok: 7,
    href: '/testy/s/ochrana-osobnych-udajov',
  },
  {
    id: 'slovenska-informacna-sluzba',
    nazov: 'Slovenská informačná služba',
    pocetOtazok: 2,
    href: '/testy/s/slovenska-informacna-sluzba',
  },
]
