export type NavItem = { href: string; label: string; badge?: string }

export const navLinks: NavItem[] = [
  { href: '/o-firme', label: 'O firme' },
  { href: '/zakon', label: 'Legislatíva' },
]

export const sluzbyLinks: NavItem[] = [
  { href: '/sluzby/strazna-sluzba', label: 'Strážna služba' },
  { href: '/sluzby/detektivna-sluzba', label: 'Detektívna služba' },
  { href: '/sluzby/odborna-priprava', label: 'Odborná príprava a poradenstvo' },
]

export const courseLinks: NavItem[] = [
  { href: '/kurzy/s', label: 'Preukaz typu S', badge: 'S' },
  { href: '/kurzy/p', label: 'Preukaz typu P', badge: 'P' },
]

export const testLinks: NavItem[] = [
  { href: '/testy/s', label: 'Preukaz typu S', badge: 'S' },
  { href: '/testy/p', label: 'Preukaz typu P', badge: 'P' },
]

export const NAV = {
  signIn: 'Prihlásiť sa',
  signInHref: '/prihlasenie',
  signOut: 'Odhlásiť sa',
  signOutCallbackUrl: '/',
  adminBadge: 'ADMIN',
  mobileMenuAriaLabel: 'Otvoriť menu',
} as const
