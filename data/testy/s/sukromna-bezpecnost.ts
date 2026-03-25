export type Okruh = {
  id: string
  nazov: string
  pocetOtazok: number
  href: string
}

export const sukromnaPageContent = {
  hero: {
    badge: 'S',
    title: 'Súkromná bezpečnosť',
    subtitle: 'Preukaz typu S — oblasť testovania',
    description: 'Vyberte okruh a precvičte si znalosti pred skúškou odbornej spôsobilosti.',
  },
  section: {
    title: 'Okruhy testovania',
    otazok: 'otázok',
    spustit: 'Spustiť test',
  },
} as const

export const okruhy: Okruh[] = [
  {
    id: 'okruh-1',
    nazov: 'Okruh 1 — súkromná bezpečnosť',
    pocetOtazok: 25,
    href: '/testy/s/sukromna-bezpecnost/okruh-1',
  },
  {
    id: 'okruh-2',
    nazov: 'Okruh 2 — súkromná bezpečnosť',
    pocetOtazok: 25,
    href: '/testy/s/sukromna-bezpecnost/okruh-2',
  },
  {
    id: 'okruh-3',
    nazov: 'Okruh 3 — súkromná bezpečnosť',
    pocetOtazok: 25,
    href: '/testy/s/sukromna-bezpecnost/okruh-3',
  },
  {
    id: 'okruh-4',
    nazov: 'Okruh 4 — súkromná bezpečnosť',
    pocetOtazok: 25,
    href: '/testy/s/sukromna-bezpecnost/okruh-4',
  },
]
