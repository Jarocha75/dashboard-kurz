export type CourseData = {
  type: string;
  title: string;
  subtitle: string;
  description: string;
  lessons: number;
  duration: string;
  href: string;
};

export type InfoCardData = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export const HERO = {
  title: "Vitajte v SBS Akademii",
  subtitle:
    "Pripravte sa na získanie preukazu odbornej spôsobilosti podľa zákona č. 473/2005 Z.z. Absolvujte kurz online, kedykoľvek a odkiaľkoľvek.",
} as const;

export const SECTIONS = {
  courses: "Dostupné kurzy",
  infoCards: "Užitočné informácie",
} as const;

export const courses: CourseData[] = [
  {
    type: "S",
    title: "Preukaz typu S",
    subtitle: "pre osoby poverené výkonom fyzickej ochrany a pátrania",
    description:
      "Základný kurz pre fyzickú ochranu osôb a majetku. Po absolvovaní budete pripravení na odbornú skúšku pred MV SR.",
    lessons: 12,
    duration: "24 hodín",
    href: "/kurzy/s",
  },
  {
    type: "P",
    title: "Preukaz typu P",
    subtitle:
      "pre osoby poverené výkonom fyzickej ochrany, pátrania, odbornej prípravy a poradenstva a pre prevádzkovateľov",
    description:
      "Rozšírený kurz pre vedúcich pracovníkov SBS. Nadstavba na typ S — organizácia, riadenie a zodpovednosť.",
    lessons: 8,
    duration: "16 hodín",
    href: "/kurzy/p",
  },
];

export const infoCards: InfoCardData[] = [
  {
    icon: "📋",
    title: "Zákon o SBS",
    description:
      "Zákon č. 473/2005 Z.z. o poskytovaní služieb v oblasti súkromnej bezpečnosti",
    href: "/zakon",
  },
  {
    icon: "🏢",
    title: "O firme",
    description: "Charakteristika spoločnosti, licencie a oblasti pôsobenia",
    href: "/o-firme",
  },
  {
    icon: "❓",
    title: "Časté otázky",
    description:
      "Odpovede na najčastejšie otázky týkajúce sa preukazov a skúšok",
    href: "/faq",
  },
];
