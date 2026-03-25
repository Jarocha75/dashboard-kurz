export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const kriminalistikaContent = {
  hero: {
    badge: 'S',
    title: 'Kriminalistika',
    subtitle: 'Preukaz typu S · Kriminalistika',
    description: 'Test obsahuje 13 otázok. Vyberte jednu správnu odpoveď pri každej otázke.',
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
    text: 'Do kategórie pyrotechnických stôp patrí:',
    options: {
      A: 'Zbrane.',
      B: 'Strelivo.',
      C: 'Munícia.',
    },
    correct: 'C',
  },
  {
    id: 2,
    text: 'Mechanoskopia je:',
    options: {
      A: 'Metóda kriminalistickej taktiky zaoberajúca sa hlavne identifikáciou zanechaných stôp po nástrojoch na mieste činu.',
      B: 'Metóda kriminalistickej techniky zaoberajúca sa hlavne identifikáciou zanechaných stôp po obuvi na mieste činu.',
      C: 'Metóda kriminalistickej techniky zaoberajúca sa hlavne identifikáciou zanechaných stôp po nástrojoch na mieste činu.',
    },
    correct: 'C',
  },
  {
    id: 3,
    text: 'Odorologickou stopou môže byť osoba:',
    options: {
      A: 'Individuálne identifikovaná.',
      B: 'Typovo identifikovaná.',
      C: 'Druhovo identifikovaná.',
    },
    correct: 'A',
  },
  {
    id: 4,
    text: 'Kriminalistika je:',
    options: {
      A: 'Odbor, ktorý skúma páchateľa, jeho motív a spôsob páchania trestného činu.',
      B: 'Odbor, ktorý sa zaoberá odhaľovaním trestných činov a priestupkov.',
      C: 'Odbor, ktorý sa zaoberá odhaľovaním trestných činov.',
    },
    correct: 'C',
  },
  {
    id: 5,
    text: 'Podľa Trestného poriadku môže vykonať obhliadku:',
    options: {
      A: 'Len orgán činný v trestnom konaní a prokurátor.',
      B: 'Len orgán činný v trestnom konaní.',
      C: 'Orgán činný v trestnom konaní a v konaní pred súdom súd.',
    },
    correct: 'C',
  },
  {
    id: 6,
    text: 'Pamäťové stopy:',
    options: {
      A: 'Nie sú ovplyvnené vzdialenosťou od objektu, dĺžkou jeho pozorovania, poveternostnými podmienkami a topografickými podmienkami.',
      B: 'Sú ovplyvnené vzdialenosťou od objektu, dĺžkou jeho pozorovania, poveternostnými podmienkami, topografické podmienky na pozorovanie nemajú vplyv.',
      C: 'Sú ovplyvnené vzdialenosťou od pozorovaného objektu, dĺžkou jeho pozorovania, poveternostnými podmienkami a topografickými podmienkami.',
    },
    correct: 'C',
  },
  {
    id: 7,
    text: 'Konfrontácia sa vykonáva za účelom:',
    options: {
      A: 'Odstránenia závažných rozporov vo výpovediach tým, že sú tieto osoby postavené pri výsluchu navzájom tvárou v tvár.',
      B: 'Doplnenia alebo overenia údajov dôležitých pre trestné konanie, ktoré sa vzťahujú na miesto činu.',
      C: 'Preverenia relevantných informácii na mieste činu.',
    },
    correct: 'A',
  },
  {
    id: 8,
    text: 'Daktyloskopické stopy sa vyznačujú:',
    options: {
      A: 'Vekovo nestálou individuálnosťou, nemennosťou a neodstrániteľnosťou.',
      B: 'Individuálnosťou, nemennosťou a neodstrániteľnosťou.',
      C: 'Čiastočnou individuálnosťou, nemennosťou a neodstrániteľnosťou.',
    },
    correct: 'B',
  },
  {
    id: 9,
    text: 'Stopy delíme na:',
    options: {
      A: 'Materiálne a pamäťové.',
      B: 'Latentné a markantné.',
      C: 'Materiálne, plošné a plastické.',
    },
    correct: 'A',
  },
  {
    id: 10,
    text: 'Zdrojom informácií o vonkajších znakoch objektov pri ich opise je:',
    options: {
      A: 'Osoba, ktorá zaznamenáva údaje.',
      B: 'Osoba, ktorá poskytuje údaje.',
      C: 'Opisovaný objekt.',
    },
    correct: 'C',
  },
  {
    id: 11,
    text: 'Plošné stopy vznikajú tým, že:',
    options: {
      A: 'Objekt, ktorý stopu vytvára, čiastočne deformuje plochu na ktorú pôsobí.',
      B: 'Objekt, ktorý stopu vytvára, nedeformuje plochu na ktorú pôsobí.',
      C: 'Objekt, ktorý stopu vytvára, deformuje plochu na ktorú pôsobí.',
    },
    correct: 'B',
  },
  {
    id: 12,
    text: 'Kriminalistická identifikácia je:',
    options: {
      A: 'Proces, ktorým sa zaisťuje relevantná stopa na mieste činu.',
      B: 'Proces, ktorým sa určuje vzťah medzi stopou a objektom, ktorý stopu reálne vytvoril.',
      C: 'Proces, ktorým sa určuje postup orgánov činných v trestnom konaní za účelom zistenia a poznania všetkých skutočností dôležitých pre trestné konanie.',
    },
    correct: 'B',
  },
  {
    id: 13,
    text: 'Na mieste protiprávnej udalosti zamestnanec poverený výkonom fyzickej ochrany:',
    options: {
      A: 'Musí zbrane sa tam nachádzajúce za účelom zamedzenia ich straty preniesť na strážne stanovisko.',
      B: 'Nemôže zbrane sa tam nachádzajúce za účelom zamedzenia ich straty preniesť na strážne stanovisko.',
      C: 'Môže zbrane sa tam nachádzajúce za účelom zamedzenia ich straty preniesť na strážne stanovisko.',
    },
    correct: 'B',
  },
]
