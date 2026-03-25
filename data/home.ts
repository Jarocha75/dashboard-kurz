export type Vyhoda = {
  icon: string;
  title: string;
  text: string;
};

export type KurzTermin = {
  typ: string;
  nazov: string;
  od: string;
  do: string;
  miesta: number;
};

export type KontaktLink = {
  label: string;
  href: string;
};

export const HERO = {
  badge: "On-line vzdelávanie SBS",
  title: "Chcete pracovať",
  titleHighlight: "v SBS?",
  description:
    'U nás môžete získať preukaz odbornej spôsobilosti typu „S" alebo „P" absolvovaním kurzu on-line — v kľude, bez stresu a z pohodlia domova.',
  descriptionCta: "Neváhajte a prihláste sa!",
  ctaTerminy: "Zobraziť termíny kurzov",
  ctaKontakt: "Kontaktovať nás",
} as const;

export const vyhody: Vyhoda[] = [
  {
    icon: "🏠",
    title: "Z pohodlia domova",
    text: "Študujte online, kedykoľvek a odkiaľkoľvek. Žiadne dochádzanie.",
  },
  {
    icon: "📋",
    title: "Bez zbytočného stresu",
    text: "Vlastné tempo štúdia, prehľadné materiály a cvičné testy.",
  },
  {
    icon: "🎓",
    title: "Osvedčenie o absolvovaní kurzu",
    text: "Po úspešnom absolvovaní Vám vydáme osvedčenie o absolvovaní kurzu a prihlásime na skúšku odbornej spôsobilosti.",
  },
];

export const TERMINY_SECTION = {
  title: "Najbližšie termíny kurzov",
  subtitle: "Miesta sú obmedzené — prihláste sa vopred.",
  footnote:
    "Ďalšie termíny budú zverejnené priebežne. Sledujte nás alebo nás kontaktujte.",
  ctaPrihlasit: "Prihlásiť sa",
} as const;

export const kurzTerminy: KurzTermin[] = [
  {
    typ: "S",
    nazov: 'Kurz typ „S" — Strážna služba',
    od: "11. marca 2026",
    do: "18. marca 2026",
    miesta: 15,
  },
];

export const KONTAKT_SECTION = {
  title: "Kontaktujte nás",
  subtitle: "Máte otázky? Vyplňte formulár a ozveme sa vám do 24 hodín.",
  altText: "Alebo nás kontaktujte priamo:",
} as const;

export const kontaktLinks: KontaktLink[] = [
  { label: 'Kurz typ „S"', href: "/kurzy/s" },
  { label: 'Kurz typ „P"', href: "/kurzy/p" },
  { label: "Prihlásiť sa do kurzu", href: "/prihlasenie" },
];
