export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const trestneContent = {
  hero: {
    badge: 'S',
    title: 'Trestné právo',
    subtitle: 'Preukaz typu S · Trestné právo',
    description: 'Test obsahuje 27 otázok. Vyberte jednu správnu odpoveď pri každej otázke.',
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
    passMark: 22,
  },
} as const

export const questions: Question[] = [
  {
    id: 1,
    text: 'Súd môže zahladiť odsúdenie, ak odsúdený viedol po výkone alebo odpustení trestu, alebo po premlčaní jeho výkonu riadny život nepretržite po dobu najmenej:',
    options: {
      A: 'Desať rokov, ak ide o odsúdenie na trest odňatia slobody prevyšujúci päť rokov.',
      B: 'Desať rokov, ak ide o odsúdenie na trest odňatia slobody neprevyšujúci tri roky.',
      C: 'Desať rokov, ak ide o odsúdenie na trest odňatia slobody neprevyšujúci päť rokov.',
    },
    correct: 'A',
  },
  {
    id: 2,
    text: 'Trestný čin je spáchaný násilím, ak páchateľ:',
    options: {
      A: 'Použije na jeho spáchanie len hrozbu fyzického násilia proti telesnej integrite inej osoby alebo ak je spáchaný na osobe, ktorú páchateľ uviedol do stavu bezbrannosti ľsťou, alebo ak páchateľ použil násilie proti veci iného.',
      B: 'Použije na jeho spáchanie fyzické násilie proti telesnej integrite inej osoby alebo ak je spáchaný na osobe, ktorú páchateľ uviedol do stavu bezbrannosti ľsťou, alebo ak páchateľ použil násilie proti veci iného.',
      C: 'Použije na jeho spáchanie psychické násilie proti telesnej integrite inej osoby alebo ak je spáchaný na osobe, ktorú páchateľ uviedol do stavu bezbrannosti ľsťou, alebo ak páchateľ použil násilie proti veci iného.',
    },
    correct: 'B',
  },
  {
    id: 3,
    text: 'Medzi okolnosti vylučujúce protiprávnosť patrí:',
    options: {
      A: 'Len krajná núdza.',
      B: 'Krajná núdza a nutná obrana.',
      C: 'Použitie zbrane poškodeným.',
    },
    correct: 'B',
  },
  {
    id: 4,
    text: 'Trestný čin je spáchaný z nedbanlivosti, ak páchateľ:',
    options: {
      A: 'Vedel, že svojim konaním môže spôsobom uvedeným v Trestnom zákone porušiť alebo ohroziť záujem chránený týmto zákonom, hoci o tom vzhľadom na okolnosti a na svoje osobné pomery vedieť nemal a nemohol.',
      B: 'Nevedel, že svojim konaním môže spôsobom uvedeným v Trestnom zákone porušiť alebo ohroziť záujem chránený týmto zákonom, hoci o tom vzhľadom na okolnosti a na svoje osobné pomery vedieť mal a mohol.',
      C: 'Nevedel, že svojim konaním nemôže spôsobom uvedeným v Trestnom zákone porušiť alebo ohroziť záujem chránený týmto zákonom, hoci o tom vzhľadom na okolnosti a na svoje osobné pomery vedieť mal a mohol.',
    },
    correct: 'B',
  },
  {
    id: 5,
    text: 'K zahladeniu dochádza ich vykonaním len pri trestoch:',
    options: {
      A: 'Trest domáceho väzenia, trest zákazu činnosti, peňažný trest, trest odňatia slobody, trest zákazu pobytu.',
      B: 'Trest domáceho väzenia, trest zákazu činnosti, peňažný trest, trest prepadnutia veci, trest zákazu pobytu.',
      C: 'Trest domáceho väzenia, trest zákazu činnosti, trest odňatia slobody, trest prepadnutia veci, trest zákazu pobytu.',
    },
    correct: 'B',
  },
  {
    id: 6,
    text: 'Nutná obrana je:',
    options: {
      A: 'Čin inak trestný, ktorým niekto odvracia priamo hroziaci alebo trvajúci útok na záujem chránený Trestným zákonom.',
      B: 'Čin inak trestný, ktorým niekto odvracia len hroziaci útok na záujem chránený Trestným zákonom.',
      C: 'Čin inak trestný, ktorým niekto odvracia nebezpečenstvo priamo hroziace záujmu chránenému Trestným zákonom.',
    },
    correct: 'A',
  },
  {
    id: 7,
    text: 'Konanie, ktoré bezprostredne smeruje k dokonaniu trestného činu, ktorého sa páchateľ dopustil v úmysle spáchať trestný čin, ak nedošlo k dokonaniu trestného činu, je:',
    options: {
      A: 'Vykonanie trestného činu.',
      B: 'Pokus trestného činu.',
      C: 'Dokonanie trestného činu.',
    },
    correct: 'B',
  },
  {
    id: 8,
    text: 'Osobnú prehliadku môže podľa Trestného poriadku vykonať:',
    options: {
      A: 'Každý kto zadrží osobu pri páchaní trestného činu.',
      B: 'Osoba poverená výkonom fyzickej ochrany pri pristihnutí osoby páchajúcej priestupok.',
      C: 'Orgán, ktorý ju nariadil, alebo na jeho príkaz policajt.',
    },
    correct: 'C',
  },
  {
    id: 9,
    text: 'Zbraňou sa podľa Trestného zákona rozumie:',
    options: {
      A: 'Len strelná zbraň, trestný čin je spáchaný so zbraňou aj vtedy, ak páchateľ použije napodobneninu zbrane alebo ju má pri sebe s úmyslom, aby bola považovaná za pravú.',
      B: 'Každá vec, ktorou možno urobiť útok proti telu miernejším, trestný čin je spáchaný so zbraňou len vtedy, ak páchateľ nepoužije napodobneninu zbrane alebo ju nemá pri sebe s úmyslom, aby bola považovaná za pravú.',
      C: 'Každá vec, ktorou možno urobiť útok proti telu dôraznejším, trestný čin je spáchaný so zbraňou aj vtedy, ak páchateľ použije napodobneninu zbrane alebo ju má pri sebe s úmyslom, aby bola považovaná za pravú.',
    },
    correct: 'C',
  },
  {
    id: 10,
    text: 'Krajná núdza je:',
    options: {
      A: 'Čin inak trestný, ktorým niekto odvracia nebezpečenstvo nehroziace záujmu chránenému Trestným zákonom.',
      B: 'Čin inak trestný, ktorým niekto odvracia nebezpečenstvo priamo hroziace záujmu chránenému Trestným zákonom.',
      C: 'Čin inak trestný, ktorým niekto odvracia priamo hroziaci alebo trvajúci útok na záujem chránený Trestným zákonom.',
    },
    correct: 'B',
  },
  {
    id: 11,
    text: 'Súd môže zahladiť odsúdenie, ak odsúdený viedol po výkone alebo odpustení trestu, alebo po premlčaní jeho výkonu riadny život nepretržite po dobu najmenej:',
    options: {
      A: 'Päť rokov, ak ide o odsúdenie na trest odňatia slobody neprevyšujúci jeden rok.',
      B: 'Tri roky, ak ide o odsúdenie na trest odňatia slobody prevyšujúci jeden rok.',
      C: 'Tri roky, ak ide o odsúdenie na trest odňatia slobody neprevyšujúci jeden rok.',
    },
    correct: 'C',
  },
  {
    id: 12,
    text: 'Páchateľom trestného činu môže byť:',
    options: {
      A: 'Len právnická osoba.',
      B: 'Fyzická osoba a právnická osoba za podmienok ustanovených osobitným predpisom.',
      C: 'Len fyzická osoba.',
    },
    correct: 'B',
  },
  {
    id: 13,
    text: 'Rozdelenie trestných činov z hľadiska zavinenia podľa Trestného zákona:',
    options: {
      A: 'Úmyselné a nedbanlivostné.',
      B: 'Prečin, zločin a obzvlášť závažný zločin.',
      C: 'Úmyselné a nezavinené.',
    },
    correct: 'A',
  },
  {
    id: 14,
    text: 'Obzvlášť závažný zločin je:',
    options: {
      A: 'Úmyselný trestný čin, za ktorý Trestný zákon ustanovuje trest odňatia slobody s dolnou hranicou trestnej sadzby najmenej desať rokov.',
      B: 'Úmyselný trestný čin, za ktorý Trestný zákon ustanovuje trest odňatia slobody s hornou hranicou trestnej sadzby najmenej sedem rokov.',
      C: 'Úmyselný trestný čin, za ktorý Trestný zákon ustanovuje trest odňatia slobody s dolnou hranicou trestnej sadzby do desať rokov.',
    },
    correct: 'A',
  },
  {
    id: 15,
    text: 'Prečin je:',
    options: {
      A: 'Trestný čin spáchaný len z nedbanlivosti, za ktorý Trestný zákon ustanovuje trest odňatia slobody s hornou hranicou trestnej sadzby neprevyšujúcou päť rokov.',
      B: 'Trestný čin spáchaný z nedbanlivosti alebo úmyselný trestný čin, za ktorý Trestný zákon ustanovuje trest odňatia slobody s hornou hranicou trestnej sadzby prevyšujúcou päť rokov.',
      C: 'Trestný čin spáchaný z nedbanlivosti alebo úmyselný trestný čin, za ktorý Trestný zákon ustanovuje trest odňatia slobody s hornou hranicou trestnej sadzby neprevyšujúcou päť rokov.',
    },
    correct: 'C',
  },
  {
    id: 16,
    text: 'Zločin je:',
    options: {
      A: 'Úmyselný trestný čin, za ktorý Trestný zákon ustanovuje trest odňatia slobody s hornou hranicou trestnej sadzby neprevyšujúcou päť rokov.',
      B: 'Úmyselný trestný čin, za ktorý Trestný zákon ustanovuje trest odňatia slobody s hornou hranicou trestnej sadzby prevyšujúcou päť rokov.',
      C: 'Úmyselný trestný čin, za ktorý Trestný zákon ustanovuje trest odňatia slobody s hornou hranicou trestnej sadzby prevyšujúcou tri roky.',
    },
    correct: 'B',
  },
  {
    id: 17,
    text: 'Účastníkom na dokonanom trestnom čine alebo na jeho pokuse sú:',
    options: {
      A: 'Organizátor, návodca, objednávateľ, pomocník a spolupáchateľ.',
      B: 'Organizátor, návodca, objednávateľ a nadržovateľ.',
      C: 'Organizátor, návodca, objednávateľ a pomocník.',
    },
    correct: 'C',
  },
  {
    id: 18,
    text: 'Trestný čin je spáchaný vlámaním, ak páchateľ:',
    options: {
      A: 'Vnikol do uzavretého priestoru nedovoleným prekonaním uzamknutia alebo prekonaním inej zabezpečovacej prekážky použitím sily alebo ľsťou.',
      B: 'Vnikol do neuzavretého priestoru bez použitia sily.',
      C: 'Vnikol do uzavretého priestoru bez prekonania uzamknutia alebo prekonania inej zabezpečovacej prekážky.',
    },
    correct: 'A',
  },
  {
    id: 19,
    text: 'Druhy trestných činov z hľadiska závažnosti sú:',
    options: {
      A: 'Úmyselné a nedbanlivostné.',
      B: 'Prečin a zločin.',
      C: 'Úmyselné a neúmyselné.',
    },
    correct: 'B',
  },
  {
    id: 20,
    text: 'Ak bol trestný čin spáchaný spoločným konaním dvoch alebo viacerých páchateľov:',
    options: {
      A: 'Zodpovedá z nich len ten, kto sa na páchaní trestného činu podieľal viac.',
      B: 'Zodpovedá každý z nich, ako keby trestný čin spáchal sám.',
      C: 'Zodpovedá každý z nich podľa individuálnej závažnosti ich konania.',
    },
    correct: 'B',
  },
  {
    id: 21,
    text: 'Konfrontácia je:',
    options: {
      A: 'Špecifická metóda kriminalistického objasňovania pri znovu poznávaní osôb, zvierat alebo vecí.',
      B: 'Odovzdávanie informácií pracovníkom súkromnej bezpečnostnej služby polícii.',
      C: 'Špecifická metóda kriminalistického objasňovania, ktorá je založená na odstránení závažných rozporov vo výpovediach osôb tým, že sú tieto osoby postavené navzájom tvárou v tvár.',
    },
    correct: 'C',
  },
  {
    id: 22,
    text: 'Trestný čin je spáchaný úmyselne, ak páchateľ:',
    options: {
      A: 'Nevedel, že svojím konaním môže porušiť alebo ohroziť záujem chránený Trestným zákonom, a pre prípad, že ho spôsobí, bol s tým uzrozumený.',
      B: 'Vedel, že svojím konaním môže porušiť alebo ohroziť záujem chránený Trestným zákonom, a pre prípad, že ho spôsobí, bol s tým uzrozumený.',
      C: 'Vedel, že svojím konaním môže porušiť alebo ohroziť záujem chránený Trestným zákonom, a pre prípad, že ho spôsobí, s tým nebol uzrozumený.',
    },
    correct: 'B',
  },
  {
    id: 23,
    text: 'Nepríčetný je ten, kto:',
    options: {
      A: 'Pre duševnú poruchu v čase spáchania činu inak trestného nemohol rozpoznať jeho protiprávnosť, ale mohol ovládať svoje konanie.',
      B: 'Pre duševnú poruchu v čase spáchania činu inak trestného nemohol rozpoznať jeho protiprávnosť alebo ovládať svoje konanie.',
      C: 'Pre duševnú poruchu v čase spáchania činu inak trestného mohol rozpoznať jeho protiprávnosť alebo ovládať svoje konanie.',
    },
    correct: 'B',
  },
  {
    id: 24,
    text: 'Trestný čin je:',
    options: {
      A: 'Čin nebezpečný pre spoločnosť, ktorého znaky sú uvedené v zákone, ak tento zákon neustanovuje inak.',
      B: 'Protiprávny čin, ktorého znaky sú uvedené v Trestom poriadku, ak tento zákon neustanovuje inak.',
      C: 'Protiprávny čin, ktorého znaky sú uvedené v Trestnom zákone, ak tento zákon neustanovuje inak.',
    },
    correct: 'C',
  },
  {
    id: 25,
    text: 'Ublížením na zdraví sa na účely Trestného zákona rozumie také poškodenie zdravia iného, ktoré:',
    options: {
      A: 'Si objektívne vyžiadalo lekárske vyšetrenie, ošetrenie alebo liečenie, počas ktorého bol len na krátky čas sťažený obvyklý jeho spôsob života.',
      B: 'Si objektívne vyžiadalo lekárske vyšetrenie, ošetrenie alebo liečenie, počas ktorého bol nie len na krátky čas sťažený obvyklý jeho spôsob života.',
      C: 'Si objektívne vyžiadalo lekárske vyšetrenie, ošetrenie alebo liečenie, počas ktorého nebol sťažený obvyklý spôsob jeho života.',
    },
    correct: 'B',
  },
  {
    id: 26,
    text: 'Z hľadiska veku nie je trestne zodpovedný ten, kto:',
    options: {
      A: 'V čase spáchania činu inak trestného nedovŕšil pätnásty rok svojho veku, pre trestný čin sexuálneho zneužívania podľa § 201 Trestného zákona nie je trestne zodpovedný, kto v čase spáchania činu nedovŕšil štrnásty rok svojho veku.',
      B: 'V čase spáchania činu inak trestného nedovŕšil štrnásty rok svojho veku, pre trestný čin sexuálneho zneužívania podľa § 201 Trestného zákona je trestne zodpovedný, kto v čase spáchania činu nedovŕšil pätnásty rok svojho veku.',
      C: 'V čase spáchania činu inak trestného nedovŕšil štrnásty rok svojho veku, pre trestný čin sexuálneho zneužívania podľa § 201 Trestného zákona nie je trestne zodpovedný, kto v čase spáchania činu nedovŕšil pätnásty rok svojho veku.',
    },
    correct: 'C',
  },
  {
    id: 27,
    text: 'Trestný čin je spáchaný so zbraňou, ak:',
    options: {
      A: 'Páchateľ použije zbraň len na útok, alebo ju má na taký účel pri sebe.',
      B: 'Páchateľ alebo bez jeho vedomia niektorý zo spolupáchateľov použije zbraň na útok, na prekonanie alebo zamedzenie odporu alebo ju má na taký účel pri sebe.',
      C: 'Páchateľ alebo s jeho vedomím niektorý zo spolupáchateľov použije zbraň na útok, na prekonanie alebo zamedzenie odporu alebo ju má na taký účel pri sebe.',
    },
    correct: 'C',
  },
]
