export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const okruh1Content = {
  hero: {
    badge: 'S',
    title: 'Okruh 1 — súkromná bezpečnosť',
    subtitle: 'Preukaz typu S · Súkromná bezpečnosť',
    description: 'Test obsahuje 25 otázok. Vyberte jednu správnu odpoveď pri každej otázke.',
  },
  backHref: '/testy/s/sukromna-bezpecnost',
  backLabel: '← Späť na okruhy',
  submitLabel: 'Vyhodnoť test',
  result: {
    score: 'Výsledok:',
    of: 'z',
    correct: 'správnych odpovedí',
    passed: 'Úspešne ste zvládli test!',
    failed: 'Skúste to ešte raz.',
    passMark: 20,
  },
} as const

export const questions: Question[] = [
  {
    id: 1,
    text: 'Zdravotnú spôsobilosť osoba podľa zákona o súkromnej bezpečnosti preukazuje:',
    options: {
      A: 'Lekárskym osvedčením, ktorého súčasťou nie je psychologické vyšetrenie.',
      B: 'Lekárskym posudkom, ktorého súčasťou je psychologické vyšetrenie.',
      C: 'Lekárskym posudkom, ktorého súčasťou je psychiatrické vyšetrenie.',
    },
    correct: 'B',
  },
  {
    id: 2,
    text: 'Medzi formy detektívnej služby nepatrí:',
    options: {
      A: 'Monitorovanie pohybu a konania osoby v chránenom objekte, na chránenom mieste alebo v ich okolí.',
      B: 'Získavanie údajov o protiprávnom konaní ohrozujúcom obchodné tajomstvo.',
      C: 'Hľadanie osoby.',
    },
    correct: 'A',
  },
  {
    id: 3,
    text: 'Obchôdzkou sa rozumie priamy výkon, pri ktorom sa zabezpečujú tieto činnosti:',
    options: {
      A: 'Ochrana majetku na verejne prístupnom mieste, ochrana majetku na inom než verejne prístupnom mieste a monitorovanie pohybu a konania osoby striedavým premiestňovaním sa osoby poverenej výkonom fyzickej ochrany v tom istom chránenom objekte alebo na tom istom chránenom mieste.',
      B: 'Ochrana majetku na verejne prístupnom mieste, ochrana majetku na inom než verejne prístupnom mieste a zabezpečovanie poriadku na mieste zhromažďovania osôb striedavým premiestňovaním sa osoby poverenej výkonom fyzickej ochrany v tom istom chránenom objekte alebo na tom istom chránenom mieste.',
      C: 'Ochrana majetku na verejne prístupnom mieste, ochrana majetku na inom než verejne prístupnom mieste a zabezpečovanie poriadku na mieste zhromažďovania osôb premiestňovaním sa osoby poverenej výkonom fyzickej ochrany medzi chránenými objektmi alebo medzi chránenými miestami.',
    },
    correct: 'A',
  },
  {
    id: 4,
    text: 'Odborne spôsobilou osobou je na účely zákona o súkromnej bezpečnosti iba:',
    options: {
      A: 'Osoba, ktorá dosiahla vek ustanovený pre danú činnosť a je držiteľom preukazu odbornej spôsobilosti.',
      B: 'Osoba, ktorá dosiahla vzdelanie ustanovené pre danú činnosť a je držiteľom osvedčenia o vykonaní kvalifikačnej skúšky.',
      C: 'Osoba, ktorá dosiahla vzdelanie ustanovené pre danú činnosť a je držiteľom preukazu odbornej spôsobilosti.',
    },
    correct: 'C',
  },
  {
    id: 5,
    text: 'Vecným bezpečnostným prostriedkom je podľa zákona o súkromnej bezpečnosti:',
    options: {
      A: 'Len vec, ktorá je určená na to, aby sa použila ako zbraň alebo vec na zastavenie, prípadne obmedzenie pohybu osoby, zvieraťa alebo vozidla alebo na obmedzenie funkcie iného technického zariadenia.',
      B: 'Vec vrátane zvieraťa, ktorá je určená na to, aby sa použila ako zbraň alebo vec na zastavenie, prípadne obmedzenie pohybu osoby, zvieraťa alebo vozidla alebo na obmedzenie funkcie iného technického zariadenia.',
      C: 'Vec vrátane zvieraťa, ktorá je určená na to, aby sa použila ako zbraň alebo vec len na obmedzenie pohybu osoby, zvieraťa alebo vozidla alebo na obmedzenie funkcie iného technického zariadenia.',
    },
    correct: 'B',
  },
  {
    id: 6,
    text: 'Dokladom o vzdelaní sú tieto všetky listiny:',
    options: {
      A: 'Diplom o ukončení vysokoškolského štúdia a vysvedčenie o ukončení štúdia.',
      B: 'Diplom o ukončení štúdia a osvedčenie o vykonaní kvalifikačnej skúšky.',
      C: 'Diplom o ukončení vysokoškolského štúdia, vysvedčenie o ukončení štúdia, doklad o ukončení odbornej prípravy alebo osvedčenie o vykonaní kvalifikačnej skúšky.',
    },
    correct: 'C',
  },
  {
    id: 7,
    text: 'Druhy bezpečnostnej služby sú:',
    options: {
      A: 'Strážna služba, profesionálna cezhraničná preprava eurovej hotovosti cestnou dopravou, detektívna služba a odborná príprava a poradenstvo.',
      B: 'Strážna služba, detektívna služba, odborná príprava a poradenstvo a technická služba.',
      C: 'Technická služba, profesionálna cezhraničná preprava eurovej hotovosti cestnou dopravou, strážna služba a vlastná ochrana.',
    },
    correct: 'A',
  },
  {
    id: 8,
    text: 'Zdravotnou spôsobilosťou podľa zákona o súkromnej bezpečnosti sa rozumie:',
    options: {
      A: 'Telesná spôsobilosť a psychická spôsobilosť na vykonávanie činností súvisiacich s prevádzkovaním bezpečnostnej služby a technickej služby.',
      B: 'Telesná spôsobilosť a psychická spôsobilosť na vykonávanie činností súvisiacich s prevádzkovaním bezpečnostnej služby, ak ju zákon o súkromnej bezpečnosti vyžaduje.',
      C: 'Telesná spôsobilosť a psychiatrická spôsobilosť na vykonávanie činností súvisiacich s prevádzkovaním bezpečnostnej služby, ak ju zákon o súkromnej bezpečnosti vyžaduje.',
    },
    correct: 'B',
  },
  {
    id: 9,
    text: 'Poskytovanie služieb v oblasti súkromnej bezpečnosti, výkon štátneho dozoru Ministerstvom vnútra Slovenskej republiky a kontroly Policajným zborom v oblasti súkromnej bezpečnosti upravuje:',
    options: {
      A: 'Zákon č. 475/2005 Z. z.',
      B: 'Zákon č. 453/2005 Z. z.',
      C: 'Zákon č. 473/2005 Z. z.',
    },
    correct: 'C',
  },
  {
    id: 10,
    text: 'Za spoľahlivú osobu sa na účely zákona o súkromnej bezpečnosti nepovažuje ten, kto:',
    options: {
      A: 'Bol právoplatne odsúdený za niektorý z úmyselných trestných činov a od vykonania trestu neuplynuli tri roky.',
      B: 'Bol právoplatne odsúdený za niektorý z trestných činov a od vykonania trestu neuplynuli dva roky.',
      C: 'Bol právoplatne odsúdený za niektorý z úmyselných trestných činov a od vykonania trestu uplynuli dva roky.',
    },
    correct: 'A',
  },
  {
    id: 11,
    text: 'Medzi formy strážnej služby nepatrí:',
    options: {
      A: 'Monitorovanie činnosti osoby v uzavretom priestore alebo na uzavretom mieste.',
      B: 'Ochrana majetku na inom než verejne prístupnom mieste.',
      C: 'Vypracúvanie plánu ochrany.',
    },
    correct: 'A',
  },
  {
    id: 12,
    text: 'Doklad obdobný odpisu z registra trestov:',
    options: {
      A: 'Predloží iba osoba, ktorá sa za posledných desať rokov nepretržite zdržiavala viac ako päť mesiacov mimo územia Slovenskej republiky.',
      B: 'Predloží iba osoba, ktorá sa za posledných päť rokov nepretržite zdržiavala viac ako šesť mesiacov mimo územia Slovenskej republiky.',
      C: 'Predloží iba osoba, ktorá sa za posledných desať rokov nepretržite zdržiavala viac ako šesť mesiacov mimo územia Slovenskej republiky.',
    },
    correct: 'C',
  },
  {
    id: 13,
    text: 'Za bezúhonnú osobu sa na účely zákona o súkromnej bezpečnosti:',
    options: {
      A: 'Nepovažuje ani ten, komu súd alebo správny orgán uložil zákaz činnosti, ktorá súvisí s činnosťou alebo ktorá je obsahom pracovnoprávneho vzťahu podľa zákona o súkromnej bezpečnosti, do skončenia výkonu zákazu činnosti.',
      B: 'Nepovažuje ani ten, komu súd alebo prokuratúra uložili zákaz činnosti, ktorá súvisí s činnosťou alebo ktorá je obsahom pracovnoprávneho vzťahu podľa zákona o súkromnej bezpečnosti, do skončenia výkonu zákazu činnosti.',
      C: 'Považuje aj ten, komu súd alebo správny orgán uložil zákaz činnosti, ktorá súvisí s činnosťou alebo ktorá je obsahom pracovnoprávneho vzťahu podľa zákona o súkromnej bezpečnosti, do skončenia výkonu zákazu činnosti.',
    },
    correct: 'A',
  },
  {
    id: 14,
    text: 'Za spoľahlivú osobu sa na účely zákona o súkromnej bezpečnosti nepovažuje ten, kto bol v posledných dvoch rokoch uznaný vinným z priestupku:',
    options: {
      A: 'Proti občianskemu spolunažívaniu spáchaného úmyselným narušením občianskeho spolunažívania vyhrážaním ujmou na zdraví.',
      B: 'Na úseku používania výbušnín.',
      C: 'Na úseku strelných zbraní a streliva, za ktorý mu bola uložená pokuta do 100 eur.',
    },
    correct: 'B',
  },
  {
    id: 15,
    text: 'Za bezúhonnú osobu sa na účely zákona o súkromnej bezpečnosti:',
    options: {
      A: 'Okrem osoby, na ktorú sa hľadí, ako by nebola odsúdená, nepovažuje ten, kto bol právoplatne odsúdený za úmyselný trestný čin alebo za iný trestný čin, za ktorý mu bol uložený nepodmienečný trest odňatia slobody v dĺžke viac ako 12 mesiacov.',
      B: 'Okrem osoby, na ktorú sa hľadí, ako by nebola odsúdená, nepovažuje ten, kto bol neprávoplatne odsúdený za úmyselný trestný čin alebo za iný trestný čin, za ktorý mu bol uložený nepodmienečný trest odňatia slobody v dĺžke viac ako 12 mesiacov.',
      C: 'Okrem osoby, na ktorú sa hľadí, ako by nebola odsúdená, nepovažuje ten, kto bol právoplatne odsúdený za úmyselný trestný čin alebo za iný trestný čin, za ktorý mu bol uložený nepodmienečný trest odňatia slobody v dĺžke do 12 mesiacov.',
    },
    correct: 'A',
  },
  {
    id: 16,
    text: 'Zásahom je činnosť:',
    options: {
      A: 'Osoby poverenej výkonom fyzickej ochrany alebo pátrania, pri ktorej sa zasahuje do práv a slobôd inej osoby.',
      B: 'Len osoby poverenej výkonom pátrania, pri ktorej sa zasahuje do práv a slobôd inej osoby.',
      C: 'Len osoby poverenej výkonom fyzickej ochrany, pri ktorej sa zasahuje do základných práv a slobôd inej osoby.',
    },
    correct: 'A',
  },
  {
    id: 17,
    text: 'Iným technickým prostriedkom je podľa zákona o súkromnej bezpečnosti:',
    options: {
      A: 'Stroj alebo prístroj, ktorý sa používa iba na plnenie úloh odbornej prípravy a poradenstva, fyzickej ochrany alebo pátrania.',
      B: 'Stroj alebo prístroj, ktorý sa používa iba na plnenie úloh obchôdzky, stráženia, alebo odbornej prípravy a poradenstva.',
      C: 'Stroj alebo prístroj, ktorý sa používa iba na plnenie úloh fyzickej ochrany, technickej služby alebo odbornej prípravy a poradenstva.',
    },
    correct: 'A',
  },
  {
    id: 18,
    text: 'Bezpečnostnou praxou sa rozumejú tieto činnosti:',
    options: {
      A: 'Fyzická ochrana, pátranie, odborná príprava a poradenstvo na tieto činnosti.',
      B: 'Fyzická ochrana, pátranie, poradenstvo na tieto činnosti a vlastná ochrana.',
      C: 'Fyzická ochrana, pátranie, odborná príprava na tieto činnosti a technická služba.',
    },
    correct: 'A',
  },
  {
    id: 19,
    text: 'Osoba je podľa zákona o súkromnej bezpečnosti povinná podrobiť sa posúdeniu zdravotnej spôsobilosti:',
    options: {
      A: 'Každé dva roky, ak nie je v záveroch predchádzajúceho lekárskeho posudku ustanovená kratšia lehota; psychologické vyšetrenie sa v tomto prípade vyžaduje, iba ak tak určí lekár, ktorý posudzuje zdravotnú spôsobilosť.',
      B: 'Každé dva roky, ak nie je v záveroch predchádzajúceho lekárskeho posudku ustanovená dlhšia lehota; psychologické vyšetrenie sa v tomto prípade vyžaduje, iba ak tak určí lekár, ktorý posudzuje zdravotnú spôsobilosť.',
      C: 'Každý rok, ak nie je v záveroch predchádzajúceho lekárskeho posudku ustanovená kratšia lehota; psychologické vyšetrenie sa v tomto prípade vyžaduje, iba ak tak určí lekár, ktorý posudzuje psychologickú spôsobilosť.',
    },
    correct: 'A',
  },
  {
    id: 20,
    text: 'Za spoľahlivú osobu sa na účely zákona o súkromnej bezpečnosti nepovažuje ten, kto:',
    options: {
      A: 'Je trestne stíhaný za akýkoľvek trestný čin.',
      B: 'Je trestne stíhaný za úmyselný trestný čin.',
      C: 'Je trestne stíhaný za nedbanlivostný trestný čin.',
    },
    correct: 'B',
  },
  {
    id: 21,
    text: 'Verejne prístupným miestom podľa zákona o súkromnej bezpečnosti je:',
    options: {
      A: 'Každé miesto, kde vstup osobám nie je zakázaný.',
      B: 'Každé miesto, kde vstup osobám je zakázaný s výnimkou osôb, ktorým je umožnený na základe vydaného povolenia.',
      C: 'Každé miesto, kde vstup osobám je zakázaný po nesplnení určených podmienok majiteľom alebo správcom takéhoto miesta.',
    },
    correct: 'A',
  },
  {
    id: 22,
    text: 'Strážením sa rozumie priamy výkon činností prítomnosťou osoby poverenej výkonom fyzickej ochrany na strážnom stanovisku v chránenom objekte, na chránenom mieste alebo pri chránenej osobe, alebo pri chránenom majetku, kde tieto činnosti má vykonávať, medzi ktoré patrí:',
    options: {
      A: 'Prevádzkovanie zabezpečovacieho systému alebo poplachového systému, prevádzkovanie ich častí, vyhodnocovanie narušenia chráneného objektu alebo chráneného miesta.',
      B: 'Profesionálna cezhraničná preprava eurovej hotovosti cestnou dopravou, ochrana majetku na verejne prístupnom mieste, ochrana majetku na inom než verejne prístupnom mieste, ochrana osoby, ochrana majetku a osoby pri preprave, ochrana prepravy majetku a osoby, zabezpečovanie poriadku na mieste zhromažďovania osôb a monitorovanie pohybu a konania osoby v chránenom objekte, na chránenom mieste alebo v ich okolí.',
      C: 'Vypracúvanie plánu ochrany, získavanie údajov, ktoré môžu slúžiť ako dôkazný prostriedok v konaní pred súdom alebo správnym orgánom, získavanie údajov o osobnom stave fyzickej osoby a získavanie informácií o konaní fyzickej osoby alebo právnickej osoby alebo o ich majetkových pomeroch.',
    },
    correct: 'B',
  },
  {
    id: 23,
    text: 'Fyzickou ochranou sa rozumejú tieto činnosti:',
    options: {
      A: 'Obchôdzka, stráženie, prevádzkovanie zabezpečovacieho systému alebo poplachového systému a priame riadenie a kontrola týchto činností.',
      B: 'Obchôdzka, stráženie, prevádzkovanie zabezpečovacieho systému alebo poplachového systému okrem priameho riadenia týchto činností.',
      C: 'Obchôdzka, stráženie, prevádzkovanie zabezpečovacieho systému alebo poplachového systému okrem priamej kontroly týchto činností.',
    },
    correct: 'A',
  },
  {
    id: 24,
    text: 'Zákon o súkromnej bezpečnosti v znení neskorších predpisov sa nevzťahuje na prevádzkovanie činností, ktoré sú bezpečnostnou službou, ak ich vykonávajú pre vlastnú potrebu tieto subjekty:',
    options: {
      A: 'Štátny orgán, Národná banka Slovenska, ozbrojené sily Slovenskej republiky, ozbrojený bezpečnostný zbor, ozbrojený zbor, záchranný zbor alebo stráž zriadená zákonom, diplomatická misia alebo konzulárny úrad, alebo orgán územnej samosprávy pri plnení úloh verejnej správy.',
      B: 'Múzeá a galérie, školské samosprávy a iné školské inštitúcie, prevádzkovatelia športovísk a športových zariadení a zariadení slúžiacich na iný verejno-prospešný účel.',
      C: 'Výrobné prevádzky významných zahraničných investorov, prevádzkovatelia systémov verejného parkovania, prevádzkovatelia vodárenských stavieb a zariadení, prevádzkovatelia zariadení, ktoré sú súčasťou hospodárskej mobilizácie.',
    },
    correct: 'A',
  },
  {
    id: 25,
    text: 'Držiteľ preukazu odbornej spôsobilosti typu P nemôže vykonávať túto činnosť:',
    options: {
      A: 'Odborná príprava a poradenstvo.',
      B: 'Profesionálna cezhraničná preprava eurovej hotovosti cestnou dopravou.',
      C: 'Fyzická ochrana a pátranie.',
    },
    correct: 'B',
  },
]
