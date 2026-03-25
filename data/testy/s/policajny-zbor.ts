export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const policajnyZborContent = {
  hero: {
    badge: 'S',
    title: 'Policajný zbor',
    subtitle: 'Preukaz typu S · Policajný zbor',
    description: 'Test obsahuje 15 otázok. Vyberte jednu správnu odpoveď pri každej otázke.',
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
    passMark: 12,
  },
} as const

export const questions: Question[] = [
  {
    id: 1,
    text: 'Pri vstupe do objektov, kde je vstup kontrolovaný oprávnenou osobou, alebo ak je o to pri služobnom zákroku požiadaný:',
    options: {
      A: 'Príslušník Policajného zboru v služobnej rovnošate s identifikačným číslom alebo v civilnom odeve preukazuje svoju príslušnosť podľa okolností ústnym vyhlásením.',
      B: 'Príslušník Policajného zboru v služobnej rovnošate s identifikačným číslom preukazuje svoju príslušnosť tiež služobným preukazom a podľa okolností tiež ústnym vyhlásením.',
      C: 'Príslušník Policajného zboru v civilnom odeve s identifikačným číslom preukazuje svoju príslušnosť len ústnym vyhlásením.',
    },
    correct: 'B',
  },
  {
    id: 2,
    text: 'Pri vykonávaní služobnej činnosti je príslušník Policajného zboru:',
    options: {
      A: 'Povinný dbať na česť, vážnosť a dôstojnosť osoby i na svoju vlastnú a pripustiť, aby v súvislosti s touto jeho činnosťou vznikla osobe bezdôvodná ujma a aby prípadný zásah do jej práv a slobôd prekročil mieru nevyhnutnú na dosiahnutie účelu sledovaného jeho služobnou činnosťou.',
      B: 'Povinný dbať na česť, vážnosť a dôstojnosť osoby i na svoju vlastnú a nepripustiť, aby v súvislosti s touto jeho činnosťou vznikla osobe bezdôvodná ujma a aby prípadný zásah do jej práv a slobôd prekročil mieru nevyhnutnú na dosiahnutie účelu sledovaného jeho služobnou činnosťou.',
      C: 'Povinný dbať na česť, vážnosť a dôstojnosť osoby i na svoju vlastnú a nepripustiť, aby v súvislosti s touto jeho činnosťou nevznikla osobe bezdôvodná ujma a aby prípadný zásah do jej práv a slobôd neprekročil mieru nutnú na dosiahnutie účelu sledovaného jeho služobnou činnosťou.',
    },
    correct: 'B',
  },
  {
    id: 3,
    text: 'Ak osoba vyzvaná na preukázanie svojej totožnosti dokladom totožnosti:',
    options: {
      A: 'Ju odmietne preukázať, príslušník Policajného zboru nie je oprávnený takúto osobu predviesť na útvar Policajného zboru za účelom zistenia jej totožnosti.',
      B: 'Ju odmietne preukázať, príslušník Policajného zboru je oprávnený takúto osobu predviesť na útvar Policajného zboru za účelom zistenia jej totožnosti.',
      C: 'Ju neodmietne preukázať, príslušník Policajného zboru je oprávnený takúto osobu predviesť na útvar Policajného zboru za účelom zistenia jej totožnosti.',
    },
    correct: 'B',
  },
  {
    id: 4,
    text: 'Pri pátraní po páchateľoch úmyselných trestných činov, hľadaných osobách, zbraniach, strelive, výbušninách, omamných a psychotropných látkach a jedoch alebo po veciach pochádzajúcich z trestnej činnosti, prípadne súvisiacich s trestnou činnosťou:',
    options: {
      A: 'Nie sú príslušníci Policajného zboru oprávnení uzatvoriť verejne prístupné miesta a vykonať ich prehliadku s cieľom zistiť, či sa uvedené osoby alebo veci v nich nenachádzajú.',
      B: 'Sú príslušníci Policajného zboru oprávnení uzatvoriť verejne prístupné miesta a vykonať ich prehliadku s cieľom zistiť, či sa uvedené osoby alebo veci v nich nenachádzajú.',
      C: 'Sú príslušníci Policajného zboru oprávnení uzatvoriť iné ako verejne prístupné miesta a vykonať ich obhliadku s cieľom zistiť, či sa podozrivé osoby alebo veci v nich nenachádzajú.',
    },
    correct: 'B',
  },
  {
    id: 5,
    text: 'Pri vykonávaní služobného zákroku je príslušník Policajného zboru:',
    options: {
      A: 'Povinný vždy ihneď použiť výzvu zodpovedajúcu zákroku.',
      B: 'Povinný, ak to povaha a okolnosti dovoľujú, doručiť písomne osobe výzvu zodpovedajúcu zákroku.',
      C: 'Povinný, ak to povaha a okolnosti dovoľujú, použiť výzvu zodpovedajúcu zákroku.',
    },
    correct: 'C',
  },
  {
    id: 6,
    text: 'Pri preukazovaní príslušnosti k Policajnému zboru:',
    options: {
      A: 'Nesmie príslušník Policajného zboru služobný preukaz alebo odznak služby kriminálnej polície alebo finančnej polície vydať z rúk; na požiadanie umožní nahliadnutie ich prednej strany.',
      B: 'Môže príslušník Policajného zboru služobný preukaz alebo odznak služby kriminálnej polície alebo finančnej polície vydať z rúk.',
      C: 'Nesmie príslušník Policajného zboru služobný preukaz alebo odznak služby kriminálnej polície alebo finančnej polície vydať z rúk; na požiadanie ich predloží k nahliadnutiu z oboch strán.',
    },
    correct: 'A',
  },
  {
    id: 7,
    text: 'Príslušník Policajného zboru je oprávnený zaistiť osobu:',
    options: {
      A: 'Pristihnutú pri páchaní priestupku alebo iného správneho deliktu, ak je dôvodná obava, že v ňom bude pokračovať, alebo ak je to nevyhnutne potrebné na riadne zistenie alebo objasnenie veci.',
      B: 'Pristihnutú po páchaní správneho deliktu, ak existuje pochybnosť o tom, že v ňom bude pokračovať, alebo ak to nie je nevyhnutne potrebné na riadne zistenie alebo objasnenie veci.',
      C: 'Pristihnutú pri páchaní priestupku alebo iného správneho deliktu, ak nie je dôvodná obava, že v ňom bude pokračovať, alebo aj keď to nie je nevyhnutne potrebné na riadne zistenie alebo objasnenie veci.',
    },
    correct: 'A',
  },
  {
    id: 8,
    text: 'Na vykonanie potrebných úkonov:',
    options: {
      A: 'Je príslušník Policajného zboru oprávnený zaistiť vec, ak má podozrenie, že tá súvisí so spáchaním trestného činu alebo priestupku a jej zaistenie je potrebné na zistenie skutkového stavu veci alebo na rozhodnutie orgánu v konaní o priestupku alebo ak ide o vec, po ktorej pátra polícia iného štátu.',
      B: 'Je príslušník Policajného zboru oprávnený zaistiť vec, ak má podozrenie, že tá súvisí so spáchaním trestného činu alebo priestupku a jej zaistenie je bezúčelné na zistenie skutkového stavu veci alebo na rozhodnutie orgánu v konaní o priestupku alebo ak ide o vec, po ktorej nepátra polícia iného štátu.',
      C: 'Je príslušník Policajného zboru oprávnený zaistiť vec, aj keď nemá podozrenie, že tá súvisí so spáchaním trestného činu alebo priestupku a jej zaistenie nie je potrebné na zistenie skutkového stavu veci alebo na rozhodnutie orgánu v konaní o priestupku alebo ak ide o vec, po ktorej nepátra polícia iného štátu.',
    },
    correct: 'A',
  },
  {
    id: 9,
    text: 'Príslušník Policajného zboru:',
    options: {
      A: 'Nie je pri vykonávaní služobnej činnosti spojenej so zásahom do práv alebo slobôd osoby povinný túto osobu hneď, ako je to možné, poučiť o jej právach.',
      B: 'Je pri vykonávaní služobnej činnosti spojenej so zásahom do práv alebo slobôd osoby povinný túto osobu hneď, ako je to možné, poučiť o jej právach.',
      C: 'Je pri vykonávaní služobnej činnosti spojenej so zásahom do práv alebo slobôd osoby povinný túto osobu poučiť do dvadsiatich štyroch hodín o jej právach.',
    },
    correct: 'B',
  },
  {
    id: 10,
    text: 'Príslušník Policajného zboru v občianskom odeve:',
    options: {
      A: 'Podľa svojho uváženia preukazuje príslušnosť k Policajnému zboru pred začatím služobného zákroku ústnym vyhlásením a služobným preukazom alebo odznakom služby kriminálnej polície, alebo finančnej polície.',
      B: 'Povinne preukazuje príslušnosť k Policajnému zboru pred začatím služobného zákroku ústnym vyhlásením, alebo služobným preukazom, alebo odznakom služby kriminálnej polície, alebo finančnej polície.',
      C: 'Povinne preukazuje príslušnosť k Policajnému zboru pred začatím služobného zákroku ústnym vyhlásením a služobným preukazom alebo odznakom služby kriminálnej polície, alebo finančnej polície.',
    },
    correct: 'C',
  },
  {
    id: 11,
    text: 'Všetkými spôsobmi, ktorými príslušník Policajného zboru preukazuje príslušnosť k Policajnému zboru sú:',
    options: {
      A: 'Služobným preukazom, odznakom služby kriminálnej polície, alebo finančnej polície, alebo ústnym vyhlásením „Polícia".',
      B: 'Služobnou rovnošatou s identifikačným číslom, služobným preukazom, odznakom služby kriminálnej polície, alebo finančnej polície, alebo ústnym vyhlásením „Polícia".',
      C: 'Služobnou rovnošatou s identifikačným číslom, služobným preukazom, odznakom služby kriminálnej polície, alebo finančnej polície.',
    },
    correct: 'B',
  },
  {
    id: 12,
    text: 'V prípade potreby príslušník Policajného zboru:',
    options: {
      A: 'Je oprávnený vyzvať osobu, aby sa len v čase voľna dostavila na útvar Policajného zboru na spísanie zápisnice o podaní vysvetlenia alebo, ak ide o objasňovanie priestupku, na spísanie záznamu alebo zapísania výsledkov úkonov do správy o výsledku objasňovania priestupku.',
      B: 'Je oprávnený vyzvať osobu, aby sa ihneď alebo v určenom čase dostavila na útvar Policajného zboru na spísanie zápisnice o podaní vysvetlenia alebo, ak ide o objasňovanie priestupku, na spísanie záznamu alebo zapísania výsledkov úkonov do správy o výsledku objasňovania priestupku.',
      C: 'Nie je oprávnený vyzvať osobu, aby sa ihneď alebo v určenom čase dostavila na útvar Policajného zboru na spísanie zápisnice o podaní vysvetlenia alebo, ak ide o objasňovanie priestupku, na spísanie záznamu alebo zapísania výsledkov úkonov do správy o výsledku objasňovania priestupku.',
    },
    correct: 'B',
  },
  {
    id: 13,
    text: 'Od osoby, ktorá môže prispieť k objasňovaniu skutočnosti dôležitej na odhalenie trestného činu a na zistenie jeho páchateľa:',
    options: {
      A: 'Je príslušník Policajného zboru oprávnený požadovať potrebné informácie, a to aj od osoby ktorá ho upozornila, že by tým porušila zákonom uloženú alebo uznanú povinnosť mlčanlivosti.',
      B: 'Nie je príslušník Policajného zboru oprávnený požadovať potrebné informácie.',
      C: 'Je príslušník Policajného zboru oprávnený požadovať potrebné informácie.',
    },
    correct: 'C',
  },
  {
    id: 14,
    text: 'Príslušník Policajného zboru:',
    options: {
      A: 'Je povinný pred služobným zákrokom preukázať svoju príslušnosť k Policajnému zboru, ak to povaha a okolnosti služobného zákroku dovoľujú.',
      B: 'Nie je povinný pred služobným zákrokom preukázať svoju príslušnosť k Policajnému zboru, aj keď to povaha a okolnosti služobného zákroku dovoľujú.',
      C: 'Je povinný vždy pred služobným zákrokom preukázať svoju príslušnosť k Policajnému zboru.',
    },
    correct: 'A',
  },
  {
    id: 15,
    text: 'U osoby proti ktorej príslušník Policajného zboru vykonáva služobný zákrok:',
    options: {
      A: 'Nie je oprávnený sa presvedčiť, či nemá pri sebe zbraň, a ak ju má, odňať ju.',
      B: 'Je oprávnený sa presvedčiť, či nemá pri sebe zbraň, a ak ju má, odňať ju.',
      C: 'Je oprávnený sa presvedčiť, či nemá pri sebe zbraň, a ak ju má, nemôže ju odňať.',
    },
    correct: 'B',
  },
]
