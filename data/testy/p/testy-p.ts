export type TestKategoria = {
  id: string
  nazov: string
  pocetOtazok: number
  href: string
}

export const testyPContent = {
  hero: {
    badge: 'P',
    title: 'On-line testy — Preukaz typu P',
    subtitle: 'pre osoby poverené výkonom fyzickej ochrany, pátrania, odbornej prípravy a poradenstva a pre prevádzkovateľov',
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
    id: 'okruh-1',
    nazov: 'Cvičné otázky — Okruh 1',
    pocetOtazok: 40,
    href: '/testy/p/okruh-1',
  },
  {
    id: 'okruh-2',
    nazov: 'Cvičné otázky — Okruh 2',
    pocetOtazok: 40,
    href: '/testy/p/okruh-2',
  },
  {
    id: 'okruh-3',
    nazov: 'Cvičné otázky — Okruh 3',
    pocetOtazok: 40,
    href: '/testy/p/okruh-3',
  },
  {
    id: 'okruh-4',
    nazov: 'Cvičné otázky — Okruh 4',
    pocetOtazok: 40,
    href: '/testy/p/okruh-4',
  },
]
