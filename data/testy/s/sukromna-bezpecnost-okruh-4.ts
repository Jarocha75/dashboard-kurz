export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const okruh4Content = {
  hero: {
    badge: 'S',
    title: 'Okruh 4 — súkromná bezpečnosť',
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
    text: 'Identifikačný preukaz:',
    options: {
      A: 'Na výkon fyzickej ochrany má označenie S, na výkon profesionálnej cezhraničnej prepravy eurovej hotovosti cestnou dopravou má označenie CIT, na výkon pátrania má označenie D a na odbornú prípravu a poradenstvo má označenie O.',
      B: 'Na výkon fyzickej ochrany má označenie S, na výkon profesionálnej cezhraničnej prepravy eurovej hotovosti cestnou dopravou má označenie CID, na výkon pátrania má označenie D a na odbornú prípravu a poradenstvo má označenie O.',
      C: 'Na výkon fyzickej ochrany má označenie S, na výkon profesionálnej cezhraničnej prepravy eurovej hotovosti cestnou dopravou má označenie CIT, na výkon pátrania má označenie P a na odbornú prípravu a poradenstvo má označenie O.',
    },
    correct: 'A',
  },
  {
    id: 2,
    text: 'Priestupku na úseku súkromnej bezpečnosti sa dopustí ten, kto:',
    options: {
      A: 'Nepredloží čestné vyhlásenie ako uchádzač o zamestnanie, že nespĺňa podmienky bezúhonnosti a spoľahlivosti.',
      B: 'Nepredloží čestné vyhlásenie ako uchádzač o zamestnanie, že spĺňa podmienky bezúhonnosti a spoľahlivosti.',
      C: 'Nepredloží čestné vyhlásenie ako uchádzač o zamestnanie, že spĺňa podmienky bezúhonnosti, spoľahlivosti a telesnej spôsobilosti.',
    },
    correct: 'B',
  },
  {
    id: 3,
    text: 'Orgán dozoru a orgán kontroly:',
    options: {
      A: 'Rozhodnú o tom, že osoba poverená výkonom fyzickej ochrany a pátrania sa môže opätovne podrobiť posúdeniu zdravotnej spôsobilosti, ak sú o jej zdravotnom stave dôvodné pochybnosti.',
      B: 'Rozhodnú o tom, že osoba poverená výkonom fyzickej ochrany a pátrania je povinná opätovne sa podrobiť posúdeniu zdravotnej spôsobilosti, ak sú o jej zdravotnom stave dôvodné pochybnosti.',
      C: 'Nie sú oprávnené rozhodnúť o tom, že osoba poverená výkonom fyzickej ochrany, pátrania je povinná opätovne sa podrobiť posúdeniu zdravotnej spôsobilosti, ak sú o jej zdravotnom stave dôvodné pochybnosti.',
    },
    correct: 'B',
  },
  {
    id: 4,
    text: 'Kontrolór je pri výkone štátneho dozoru alebo kontroly oprávnený:',
    options: {
      A: 'Vyžadovať od kontrolovaného subjektu a jeho zamestnancov len poskytnutie prvopisov dokladov a iných písomností, údajov vrátane iných nosičov informácií, robiť si z nich overené kópie a vykonávať s nimi pomocné úkony súvisiace s výkonom štátneho dozoru, kontroly alebo kontroly činnosti.',
      B: 'Vyžadovať od kontrolovaného subjektu a jeho zamestnancov poskytnutie prvopisov dokladov a iných písomností, vyjadrení, informácií vrátane technických nosičov dát, robiť si z nich kópie a vykonávať s nimi potrebné úkony súvisiace s výkonom štátneho dozoru, kontroly alebo kontroly činnosti.',
      C: 'Vyžadovať len od kontrolovaného subjektu poskytnutie prvopisov dokladov a iných písomností, vyjadrení, informácií vrátane technických nosičov dát, robiť si z nich kópie a vykonávať s nimi potrebné úkony súvisiace s výkonom štátneho dozoru, kontroly alebo kontroly činnosti.',
    },
    correct: 'B',
  },
  {
    id: 5,
    text: 'V inšpekčnej knihe dozoru sú:',
    options: {
      A: 'Dva po sebe nasledujúce listy označené rovnakým poradovým číslom. Uvádza sa v nej záznam o výkone štátneho dozoru, kontroly alebo kontroly činnosti. Inšpekčná kniha dozoru sa vedie v knihe s pevnou nerozoberateľnou väzbou.',
      B: 'Dva po sebe nasledujúce listy označené rozdielnym poradovým číslom. Uvádza sa v nej záznam o výkone štátneho dozoru, kontroly alebo kontroly činnosti. Inšpekčná kniha dozoru sa vedie v knihe s pevnou nerozoberateľnou väzbou.',
      C: 'Dva po sebe nasledujúce listy označené rovnakým poradovým číslom. Uvádza sa v nej záznam o výkone štátneho dozoru, kontroly alebo kontroly činnosti. Inšpekčná kniha dozoru sa vedie v knihe s mäkkou rozoberateľnou väzbou.',
    },
    correct: 'A',
  },
  {
    id: 6,
    text: 'Znak bezpečnostnej služby:',
    options: {
      A: 'Je v kontrastnom vyhotovení k rovnošate alebo inému odevu používanému pri výkone fyzickej ochrany a umiestňuje sa viditeľne na pravú stranu rovnošaty alebo iného odevu používaného pri výkone fyzickej ochrany vo výške pŕs, pričom sa nesmie vzájomne prekrývať s iným označením na rovnošate alebo inom odeve používanom pri výkone fyzickej ochrany.',
      B: 'Je v kontrastnom vyhotovení k rovnošate alebo inému odevu používanému pri výkone fyzickej ochrany a umiestňuje sa viditeľne na ľavú stranu rovnošaty alebo iného odevu používaného pri výkone fyzickej ochrany vo výške pŕs, pričom sa nesmie vzájomne prekrývať s iným označením na rovnošate alebo inom odeve používanom pri výkone fyzickej ochrany.',
      C: 'Nemusí byť v kontrastnom vyhotovení k rovnošate alebo inému odevu používanému pri výkone fyzickej ochrany a umiestňuje sa viditeľne na ľavú stranu rovnošaty alebo iného odevu používaného pri výkone fyzickej ochrany vo výške pŕs, pričom sa nesmie vzájomne prekrývať s iným označením na rovnošate alebo inom odeve používanom pri výkone fyzickej ochrany.',
    },
    correct: 'B',
  },
  {
    id: 7,
    text: 'Celkový rozsah odbornej prípravy na skúšku odbornej spôsobilosti typu S je:',
    options: {
      A: '78 hodín.',
      B: '80 hodín.',
      C: '70 hodín.',
    },
    correct: 'A',
  },
  {
    id: 8,
    text: 'O povinnosti osoby poverenej výkonom fyzickej ochrany opätovne sa podrobiť posúdeniu zdravotnej spôsobilosti, ak sú o jej zdravotnom stave dôvodné pochybnosti, rozhodne:',
    options: {
      A: 'Orgán dozoru alebo orgán kontroly.',
      B: 'Len orgán dozoru.',
      C: 'Len orgán kontroly.',
    },
    correct: 'A',
  },
  {
    id: 9,
    text: 'Ak sa preukaz odbornej spôsobilosti odňal:',
    options: {
      A: 'Možno nový preukaz odbornej spôsobilosti vydať najskôr po uplynutí troch rokov a až po absolvovaní odbornej prípravy a úspešnom vykonaní skúšky.',
      B: 'Možno nový preukaz odbornej spôsobilosti vydať najskôr po uplynutí piatich rokov a až po absolvovaní odbornej prípravy a úspešnom vykonaní skúšky.',
      C: 'Možno nový preukaz odbornej spôsobilosti vydať najskôr po uplynutí piatich rokov bez absolvovania odbornej prípravy a úspešného vykonania skúšky.',
    },
    correct: 'B',
  },
  {
    id: 10,
    text: 'Priestupku na úseku súkromnej bezpečnosti sa dopustí ten, kto:',
    options: {
      A: 'Ako zamestnanec nepredloží len prevádzkovateľovi bezpečnostnej služby doklady alebo čestné vyhlásenie preukazujúce jeho zdravotnú spôsobilosť.',
      B: 'Ako zamestnanec predloží prevádzkovateľovi bezpečnostnej služby alebo prevádzkovateľovi technickej služby čestné vyhlásenie preukazujúce jeho bezúhonnosť.',
      C: 'Ako zamestnanec nepredloží prevádzkovateľovi bezpečnostnej služby alebo prevádzkovateľovi technickej služby doklady alebo čestné vyhlásenie preukazujúce jeho bezúhonnosť.',
    },
    correct: 'C',
  },
  {
    id: 11,
    text: 'Platnosť preukazu odbornej spôsobilosti je:',
    options: {
      A: 'Päť rokov.',
      B: 'Neobmedzená.',
      C: 'Desať rokov.',
    },
    correct: 'C',
  },
  {
    id: 12,
    text: 'Ak bolo rozhodnuté, že osoba poverená výkonom pátrania je povinná podrobiť sa preskúšaniu odbornej spôsobilosti, ak sú dôvodné pochybnosti o jej odbornej úrovni:',
    options: {
      A: 'Absolvovanie odbornej prípravy sa nevyžaduje.',
      B: 'Absolvovanie odbornej prípravy sa vyžaduje.',
      C: 'Absolvovanie odbornej prípravy sa nevyžaduje okrem zákonom stanovených dôvodov.',
    },
    correct: 'A',
  },
  {
    id: 13,
    text: 'Orgán dozoru alebo orgán kontroly:',
    options: {
      A: 'Rozhodnú o odňatí preukazu odbornej spôsobilosti, osobe ktorá nie je bezúhonná.',
      B: 'Rozhodnú o odňatí preukazu odbornej spôsobilosti, osobe ktorá bola trestne stíhaná za úmyselný trestný čin, ak odo dňa nadobudnutia právoplatnosti rozhodnutia o schválení zmieru uplynuli tri roky.',
      C: 'Rozhodnú o odňatí preukazu odbornej spôsobilosti, osobe ktorá bola trestne stíhaná za úmyselný trestný, ak odo dňa skúšobnej doby od právoplatnosti podmienečného zastavenia trestného stíhania neuplynuli tri roky.',
    },
    correct: 'A',
  },
  {
    id: 14,
    text: 'Do evidencie služieb sa zapisuje:',
    options: {
      A: 'Dátum služby, druh služby s uvedením jej formy, časové vymedzenie služby, miesto výkonu služby, priezvisko, meno, titul a číslo identifikačného preukazu osoby poverenej výkonom fyzickej ochrany, pričom údaje musia byť vyplnené najmenej tri hodiny pred začatím výkonu služby.',
      B: 'Dátum služby, druh služby s uvedením jej formy, časové vymedzenie služby, miesto výkonu služby, priezvisko, meno, titul a číslo identifikačného preukazu osoby poverenej výkonom fyzickej ochrany, pričom údaje musia byť vyplnené najmenej šesť hodín pred začatím výkonu služby.',
      C: 'Dátum služby, druh služby s uvedením jej formy, časové vymedzenie služby, miesto výkonu služby, priezvisko, meno, titul a číslo identifikačného preukazu osoby poverenej výkonom fyzickej ochrany, pričom údaje musia byť vyplnené najmenej päť hodín pred začatím výkonu služby.',
    },
    correct: 'B',
  },
  {
    id: 15,
    text: 'Orgán dozoru a orgán kontroly:',
    options: {
      A: 'Môžu rozhodnúť o tom, že osobe preukaz odbornej spôsobilosti, ktorý bol zadržaný z dôvodu, že jeho platnosť zanikla, nebude vrátený do konečného rozhodnutia vo veci.',
      B: 'Rozhodnú o tom, že osobe preukaz odbornej spôsobilosti, ktorý bol zadržaný z dôvodu, že jeho platnosť zanikla, nebude vrátený do konečného rozhodnutia vo veci.',
      C: 'Sú oprávnené rozhodnúť o tom, že osobe preukaz odbornej spôsobilosti, ktorý bol zadržaný z dôvodu, že jeho platnosť zanikla, nebude vrátený do konečného rozhodnutia vo veci.',
    },
    correct: 'B',
  },
  {
    id: 16,
    text: 'Orgán dozoru a orgán kontroly rozhodnú o tom, že:',
    options: {
      A: 'Osoba ktorá je trestne stíhaná za úmyselný trestný čin, nie je povinná im odovzdať preukaz odbornej spôsobilosti do konečného rozhodnutia vo veci podľa osobitného predpisu.',
      B: 'Osoba ktorá je trestne stíhaná za úmyselný trestný čin, je povinná im odovzdať preukaz odbornej spôsobilosti do konečného rozhodnutia vo veci podľa osobitného predpisu.',
      C: 'Osoba ktorá je trestne stíhaná za akýkoľvek trestný čin, je povinná im odovzdať preukaz odbornej spôsobilosti do konečného rozhodnutia vo veci podľa osobitného predpisu.',
    },
    correct: 'B',
  },
  {
    id: 17,
    text: 'Kontrolór sa pred začatím štátneho dozoru alebo kontroly preukáže preukazom kontrolóra a služobným preukazom:',
    options: {
      A: 'Len osobe oprávnenej konať za kontrolovaný subjekt.',
      B: 'Osobe oprávnenej konať za kontrolovaný subjekt alebo zamestnancovi kontrolovaného subjektu prítomnému na mieste výkonu štátneho dozoru alebo kontroly.',
      C: 'Osobe oprávnenej konať za kontrolovaný subjekt a všetkým zamestnancom kontrolovaného subjektu.',
    },
    correct: 'B',
  },
  {
    id: 18,
    text: 'Priestupku na úseku súkromnej bezpečnosti sa dopustí ten, kto:',
    options: {
      A: 'Sa pri výkone fyzickej ochrany, pátrania, odbornej prípravy a poradenstva vydáva za policajta alebo za inú osobu, ktorá plní úlohy verejnej správy.',
      B: 'Ako osoba poverená výkonom fyzickej ochrany alebo pátrania, si na mieste, o ktorom sa predpokladá, že na ňom došlo k prevádzkovej nehode, pracovnému úrazu alebo k inej mimoriadnej udalosti, počína tak, aby žiadnym spôsobom nesťažovala vyšetrovanie.',
      C: 'Má viditeľne umiestnený identifikačný preukaz jeho prednou stranou obsahujúcou povinné údaje na ľavej strane odevu v oblasti pŕs.',
    },
    correct: 'A',
  },
  {
    id: 19,
    text: 'V evidencii zásahov sa okrem iného vedú tieto povinné údaje:',
    options: {
      A: 'Dátum služby a druh služby s uvedením jej formy, presné časové vymedzenie zásahu, presné miesto a dôvod zásahu, priezvisko, meno, titul, adresu pobytu a číslo preukazu odbornej spôsobilosti osoby, ktorá zásah vykonala alebo sa na ňom zúčastnila, vecné bezpečnostné prostriedky alebo iné technické prostriedky použité pri zásahu.',
      B: 'Dátum služby a druh služby s uvedením jej formy, presné časové vymedzenie zásahu, presné miesto a dôvod zásahu, len osobné údaje osoby, ktorá zásah vykonala a donucovacie prostriedky použité pri zásahu.',
      C: 'Dátum služby a rozsah služby, približné časové vymedzenie zásahu, opis miesta a dôvod zákroku, meno, adresu pobytu a číslo identifikačného preukazu osoby, ktorá zásah vykonala, vecné bezpečnostné prostriedky alebo iné technické prostriedky použité pri zásahu.',
    },
    correct: 'A',
  },
  {
    id: 20,
    text: 'Ak zamestnanec prevádzkovateľa bezpečnostnej alebo technickej služby nesplní povinnosť oznámiť každú zmenu skutočností rozhodujúcich na posúdenie bezúhonnosti a spoľahlivosti:',
    options: {
      A: 'Dopustí sa priestupku podľa zákona o priestupkoch.',
      B: 'Dopustí sa správneho deliktu na úseku súkromnej bezpečnosti.',
      C: 'Dopustí sa priestupku na úseku súkromnej bezpečnosti.',
    },
    correct: 'C',
  },
  {
    id: 21,
    text: 'Orgán dozoru a orgán kontroly:',
    options: {
      A: 'Rozhodnú o tom, že osoba poverená výkonom fyzickej ochrany a pátrania je povinná podrobiť sa preskúšaniu odbornej spôsobilosti, ak sú dôvodné pochybnosti o jej odbornej úrovni; rozhodnutie o nariadení preskúšania musí byť vydané do 15 dní od zistenia dôvodov na jeho vydanie.',
      B: 'Nie sú oprávnené rozhodnúť o tom, že osoba poverená výkonom fyzickej ochrany a pátrania je povinná podrobiť sa preskúšaniu odbornej spôsobilosti, ak sú dôvodné pochybnosti o jej odbornej úrovni; rozhodnutie o nariadení preskúšania musí byť vydané do 30 dní od zistenia dôvodov na jeho vydanie.',
      C: 'Rozhodnú o tom, že osoba poverená výkonom fyzickej ochrany a pátrania je povinná podrobiť sa preskúšaniu odbornej spôsobilosti, ak sú dôvodné pochybnosti o jej odbornej úrovni; rozhodnutie o nariadení preskúšania musí byť vydané do 30 dní od zistenia dôvodov na jeho vydanie.',
    },
    correct: 'C',
  },
  {
    id: 22,
    text: 'Vyučovacia hodina odbornej prípravy na skúšku odbornej spôsobilosti typu S trvá:',
    options: {
      A: '45 minút, pri prednáške možno spojiť dve vyučovacie hodiny do jedného celku.',
      B: '45 minút, pri prednáške nemožno spojiť vyučovacie hodiny.',
      C: '45 minút, pri prednáške možno spojiť viac ako dve vyučovacie hodiny do jedného celku.',
    },
    correct: 'A',
  },
  {
    id: 23,
    text: 'Priestupku na úseku súkromnej bezpečnosti sa dopustí ten, kto:',
    options: {
      A: 'Bez licencie vykonáva činnosť, ktorá je bezpečnostnou službou alebo technickou službou.',
      B: 'Bez licencie vykonáva činnosť, ktorá je len bezpečnostnou službou alebo vlastnou ochranou.',
      C: 'Bez licencie vykonáva činnosť, ktorá je len strážnou službou alebo detektívnou službou.',
    },
    correct: 'A',
  },
  {
    id: 24,
    text: 'Kontrolór je pri výkone štátneho dozoru, kontroly alebo kontroly činnosti oprávnený:',
    options: {
      A: 'Ukladať kontrolovanému subjektu úlohy a pokyny smerujúce k zmene organizačnej štruktúry kontrolovaného subjektu pri zistení opakovaných nedostatkov z jeho strany pri výkone štátneho dozoru, kontroly alebo kontroly činnosti.',
      B: 'Vyžadovať súčinnosť kontrolovaného subjektu, jeho zamestnancov, ako aj ďalších štátnych orgánov a organizácií, fyzických osôb a právnických osôb, pričom je každý povinný súčinnosť poskytnúť.',
      C: 'Vyžadovať výmaz kontrolovaného subjektu z obchodného registra po zistení závažných nedostatkov zo strany kontrolovaného subjektu pri výkone štátneho dozoru, kontroly alebo kontroly činnosti.',
    },
    correct: 'B',
  },
  {
    id: 25,
    text: 'Odborná príprava na skúšku odbornej spôsobilosti typu S sa vykonáva aj z týchto predmetov:',
    options: {
      A: 'Ústava Slovenskej republiky a právna úprava ľudských práv a slobôd, viktimológia, základy občianskeho práva, teória policajno-bezpečnostných činností, zákon o Zbore väzenskej a justičnej stráže, základy správneho práva.',
      B: 'Ústava Slovenskej republiky a právna úprava ľudských práv a slobôd, kriminológia, základy správneho práva, teória operatívno-pátracej činnosti, základy policajno-bezpečnostných vied, taktika vyjednávania, zákon o finančnej správe Slovenskej republiky.',
      C: 'Ústava Slovenskej republiky a právna úprava ľudských práv a slobôd, všeobecne záväzné právne predpisy týkajúce sa poskytovania služieb v oblasti súkromnej bezpečnosti, zákon o priestupkoch, zákon o Policajnom zbore, zákon o obecnej polícii, zákon o Vojenskej polícii, zákon o Slovenskej informačnej službe, základy trestného práva.',
    },
    correct: 'C',
  },
]
