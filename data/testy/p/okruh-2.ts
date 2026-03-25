export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const okruh2PContent = {
  hero: {
    badge: 'P',
    title: 'Cvičné otázky — Okruh 2',
    subtitle: 'Preukaz typu P · Okruh 2',
    description: 'Test obsahuje 40 otázok. Vyberte jednu správnu odpoveď pri každej otázke.',
  },
  backHref: '/testy/p',
  backLabel: '← Späť na oblasti testovania',
  submitLabel: 'Vyhodnoť test',
  result: {
    score: 'Výsledok:',
    of: 'z',
    correct: 'správnych odpovedí',
    passed: 'Úspešne ste zvládli test!',
    failed: 'Skúste to ešte raz.',
    passMark: 36,
  },
} as const

export const questions: Question[] = [
  {
    id: 1,
    text: 'Spracúvať osobné údaje, ktoré odhaľujú rasový alebo etnický pôvod, politické názory, náboženskú vieru alebo svetonázor, členstvo v politických stranách alebo politických hnutiach, členstvo v odborových organizáciách a údaje týkajúce sa zdravia alebo pohlavného života:',
    options: {
      A: 'Je zakázané.',
      B: 'Je úplne povolené.',
      C: 'Je povolené za účelom vykonávania fyzickej ochrany alebo pátrania podľa zákona o súkromnej bezpečnosti.',
    },
    correct: 'A',
  },
  {
    id: 2,
    text: 'Kontrolovaný subjekt:',
    options: {
      A: 'Môže v určenej lehote zaslať písomné vyjadrenie k zisteniam štátneho dozoru alebo kontroly, ktoré sú uvedené v zázname o kontrole.',
      B: 'Je povinný v určenej lehote zaslať písomné vyjadrenie k zisteniam štátneho dozoru alebo kontroly, ktoré sú uvedené v zázname o kontrole.',
      C: 'Nie je povinný v určenej lehote zaslať písomné vyjadrenie k zisteniam štátneho dozoru alebo kontroly, ktoré sú uvedené v zázname o kontrole.',
    },
    correct: 'B',
  },
  {
    id: 3,
    text: 'Fyzickú ochranu, pátranie, odbornú prípravu a poradenstvo nesmie vykonávať osoba:',
    options: {
      A: 'Ktorá vzhľadom na chorobu alebo ovplyvnenie po požití liekov alebo iných látok znižujúcich jej schopnosť konať, alebo z iných podobných príčin neposkytuje záruku, že bude riadne plniť všetky svoje povinnosti a počínať si tak, aby neohrozila okolie.',
      B: 'Ktorá vzhľadom na svoj zdravotný stav poskytuje záruku, že bude riadne plniť všetky svoje povinnosti a počínať si tak, aby neohrozila okolie.',
      C: 'Ktorá vzhľadom na chorobu alebo ovplyvnenie po použití liekov alebo iných látok znižujúcich jej schopnosť konať, alebo z iných podobných príčin poskytuje záruku, že bude riadne plniť všetky svoje povinnosti a počínať si tak, aby neohrozila okolie.',
    },
    correct: 'A',
  },
  {
    id: 4,
    text: 'Krajské riaditeľstvo Policajného zboru rozhodne o odňatí licencie na prevádzkovanie bezpečnostnej služby, ak:',
    options: {
      A: 'Prevádzkovateľ nezačal vykonávať aspoň jednu povolenú činnosť do dvoch rokov odo dňa nadobudnutia právoplatnosti rozhodnutia o udelení licencie na prevádzkovanie bezpečnostnej služby.',
      B: 'Prevádzkovateľ zabezpečí ochranu osoby, ktorá uskutočňuje vypratanie bytu, nebytového priestoru alebo odňatie hnuteľnej veci bez vykonateľného rozhodnutia orgánu príslušného podľa osobitného predpisu.',
      C: 'Prevádzkovateľ zamestnáva osobu, ktorá nespĺňa podmienku bezúhonnosti alebo spoľahlivosti, viac ako tri mesiace odo dňa, keď sa dozvedel, že zamestnanec nespĺňa podmienku bezúhonnosti alebo spoľahlivosti.',
    },
    correct: 'B',
  },
  {
    id: 5,
    text: 'Priestupok je spáchaný z nedbanlivosti, ak páchateľ:',
    options: {
      A: 'Chcel svojím konaním porušiť alebo ohroziť záujem chránený zákonom.',
      B: 'Vedel, že svojím konaním môže porušiť alebo ohroziť záujem chránený zákonom, a pre prípad, že ho poruší alebo ohrozí, bol s tým uzrozumený.',
      C: 'Vedel, že môže svojím konaním porušiť alebo ohroziť záujem chránený zákonom, ale bez primeraných dôvodov sa spoliehal na to, že tento záujem neporuší alebo neohrozí.',
    },
    correct: 'C',
  },
  {
    id: 6,
    text: 'Prevádzkovateľ je povinný oznámiť príslušnému orgánu zmenu:',
    options: {
      A: 'Všetkých údajov, ktoré uviedol v žiadosti o udelenie licencie na prevádzkovanie bezpečnostnej služby, a doložiť o tom doklady, ako aj doložiť zmenu dokladov, ktoré pripojil k žiadosti o udelenie licencie na prevádzkovanie bezpečnostnej služby, najneskôr do 15 dní pred vykonaním týchto zmien.',
      B: 'Všetkých údajov, ktoré uviedol v žiadosti o udelenie licencie na prevádzkovanie bezpečnostnej služby, a doložiť o tom doklady, ako aj doložiť zmenu dokladov, ktoré pripojil k žiadosti o udelenie licencie na prevádzkovanie bezpečnostnej služby, najneskôr do 15 dní po vykonaní týchto zmien.',
      C: 'Všetkých údajov, ktoré uviedol v žiadosti o udelenie licencie na prevádzkovanie bezpečnostnej služby, a doložiť o tom doklady, ako aj doložiť zmenu dokladov, ktoré pripojil k žiadosti o udelenie licencie na prevádzkovanie bezpečnostnej služby najneskôr do 30 dní po vykonaní týchto zmien.',
    },
    correct: 'B',
  },
  {
    id: 7,
    text: 'Prevádzkovateľ je povinný na účely zákona o súkromnej bezpečnosti viesť v sídle právnickej osoby alebo v mieste činnosti fyzickej osoby evidenciu zmlúv o poskytovaní bezpečnostnej služby a:',
    options: {
      A: 'Uschovávať ju päť rokov od skončenia zmluvného plnenia.',
      B: 'Uschovávať ju tri roky od skončenia zmluvného plnenia.',
      C: 'Uschovávať ju najmenej päť rokov od skončenia zmluvného plnenia.',
    },
    correct: 'A',
  },
  {
    id: 8,
    text: 'Ministerstvo vnútra Slovenskej republiky alebo krajské riaditeľstvo Policajného zboru uloží pokutu právnickej osobe alebo fyzickej osobe podnikateľovi, ktorý:',
    options: {
      A: 'S licenciou na vykonávanie strážnej služby vykonáva vlastnú ochranu.',
      B: 'Uvedie nepravdivé informácie v správe o činnosti bezpečnostnej služby.',
      C: 'Poveruje výkonom fyzickej ochrany, pátrania, odbornej prípravy a poradenstva osoby, ktoré spĺňajú podmienky bezúhonnosti a spoľahlivosti.',
    },
    correct: 'B',
  },
  {
    id: 9,
    text: 'Podľa Ústavy Slovenskej republiky je územie Slovenskej republiky:',
    options: {
      A: 'Jednotné a deliteľné iba v prípade, ak to ustanovuje osobitný zákon.',
      B: 'Jednotné a deliteľné.',
      C: 'Jednotné a nedeliteľné.',
    },
    correct: 'C',
  },
  {
    id: 10,
    text: 'Keď policajt vykonáva služobný zákrok, je povinný, ak to povaha a okolnosti dovoľujú, použiť výzvu:',
    options: {
      A: 'Zodpovedajúcu zákroku.',
      B: 'Zodpovedajúcu páchateľovi, najmä jeho fyzickým a psychickým schopnostiam.',
      C: 'Zodpovedajúcu povahe poškodeného.',
    },
    correct: 'A',
  },
  {
    id: 11,
    text: 'Čo rozumieme pod pojmom viktimológia?',
    options: {
      A: 'Vedecká disciplína zaoberajúca sa obeťami trestných činov.',
      B: 'Osobitná vedná disciplína, ktorá sa zaoberá zákonom o priestupkoch.',
      C: 'Vedecká disciplína nezaoberajúca sa obeťami trestných činov.',
    },
    correct: 'A',
  },
  {
    id: 12,
    text: 'Priestupku na úseku všeobecnej vnútornej správy sa dopustí ten:',
    options: {
      A: 'Kto neúmyselne poškodí, zneužije alebo zneváži štátny symbol alebo iný symbol chránený všeobecne záväzným právnym predpisom.',
      B: 'Kto neúmyselne naruší občianske spolunažívanie.',
      C: 'Kto úmyselne poškodí, zneužije alebo zneváži štátny symbol alebo iný symbol chránený všeobecne záväzným právnym predpisom.',
    },
    correct: 'C',
  },
  {
    id: 13,
    text: 'Spôsobilosť mať práva a povinnosti majú:',
    options: {
      A: 'Len právnické osoby.',
      B: 'Fyzické osoby a právnické osoby.',
      C: 'Len fyzické osoby, právnické osoby nie.',
    },
    correct: 'B',
  },
  {
    id: 14,
    text: 'Ak sa na základe zmeny rozhodnutia o udelení licencie na prevádzkovanie bezpečnostnej služby vydá nová licencia na prevádzkovanie bezpečnostnej služby:',
    options: {
      A: 'Prevádzkovateľ je povinný predchádzajúcu licenciu na prevádzkovanie bezpečnostnej služby vrátiť krajskému riaditeľstvu Policajného zboru najneskôr pri doručení novej licencie na prevádzkovanie bezpečnostnej služby.',
      B: 'Prevádzkovateľ je povinný predchádzajúcu licenciu na prevádzkovanie bezpečnostnej služby vrátiť krajskému riaditeľstvu Policajného zboru až po doručení novej licencie na prevádzkovanie bezpečnostnej služby.',
      C: 'Prevádzkovateľ môže predchádzajúcu licenciu na prevádzkovanie bezpečnostnej služby vrátiť krajskému riaditeľstvu Policajného zboru najneskôr po doručení novej licencie na prevádzkovanie bezpečnostnej služby.',
    },
    correct: 'A',
  },
  {
    id: 15,
    text: 'Medzi biologické stopy nepatrí:',
    options: {
      A: 'Software stolného počítača.',
      B: 'Krv zvieraťa.',
      C: 'Krv človeka.',
    },
    correct: 'A',
  },
  {
    id: 16,
    text: 'Podľa zákona o Policajnom zbore Policajný zbor:',
    options: {
      A: 'Poskytuje ochranu a pomoc ohrozenému svedkovi a nechránenému svedkovi.',
      B: 'Poskytuje iba pomoc ohrozenému svedkovi a chránenému svedkovi.',
      C: 'Poskytuje ochranu a pomoc ohrozenému svedkovi a chránenému svedkovi.',
    },
    correct: 'C',
  },
  {
    id: 17,
    text: 'Fyzická osoba, ktorá je prevádzkovateľom:',
    options: {
      A: 'Nesmie byť držiteľom iného oprávnenia prevádzkovať bezpečnostnú službu a nesmie byť ani štatutárnym orgánom alebo členom štatutárneho orgánu inej právnickej osoby, ktorá je držiteľom oprávnenia prevádzkovať bezpečnostnú službu.',
      B: 'Nesmie byť držiteľom iného oprávnenia prevádzkovať bezpečnostnú službu, ale môže byť štatutárnym orgánom alebo členom štatutárneho orgánu inej právnickej osoby, ktorá je držiteľom oprávnenia prevádzkovať bezpečnostnú službu.',
      C: 'Môže byť držiteľom iného oprávnenia prevádzkovať bezpečnostnú službu a môže byť štatutárnym orgánom alebo členom štatutárneho orgánu inej právnickej osoby, ktorá je držiteľom oprávnenia prevádzkovať bezpečnostnú službu.',
    },
    correct: 'A',
  },
  {
    id: 18,
    text: 'Čo rozumieme pod pojmom kriminológia?',
    options: {
      A: 'Podporovanie kriminality extrémistickými skupinami.',
      B: 'Špecifická vedná disciplína, ktorá sa zaoberá biologickými stopami.',
      C: 'Osobitná vedná disciplína, ktorá sa zaoberá kriminalitou ako sociálnym javom.',
    },
    correct: 'C',
  },
  {
    id: 19,
    text: 'Evidencia osôb poverených výkonom fyzickej ochrany, evidencia služieb, evidencia zásahov, záznam o zásahu a inšpekčná kniha dozoru sa vedú počas celej doby prevádzkovania strážnej služby a uschovávajú sa:',
    options: {
      A: 'V sídle alebo v mieste činnosti prevádzkovateľa päť nasledujúcich rokov po vykonaní posledného zápisu.',
      B: 'V sídle alebo v mieste činnosti prevádzkovateľa najmenej päť nasledujúcich rokov po vykonaní posledného zápisu.',
      C: 'V sídle alebo v mieste činnosti prevádzkovateľa tri nasledujúce roky po vykonaní posledného zápisu.',
    },
    correct: 'A',
  },
  {
    id: 20,
    text: 'Podľa Ústavy Slovenskej republiky v Slovenskej republike vykonávajú súdnictvo:',
    options: {
      A: 'Nestranné súdy, avšak ich činnosť môže obmedziť Organizácia spojených národov.',
      B: 'Nezávislé súdy, v rámci ich členenia podľa samosprávnych obvodov.',
      C: 'Nezávislé nestranné súdy.',
    },
    correct: 'C',
  },
  {
    id: 21,
    text: 'Priestupku proti majetku sa dopustí ten:',
    options: {
      A: 'Kto úmyselne spôsobí škodu na cudzom majetku krádežou.',
      B: 'Kto úmyselne a aj z nedbanlivosti spôsobí škodu na cudzom majetku krádežou.',
      C: 'Kto neúmyselne spôsobí škodu na cudzom majetku krádežou.',
    },
    correct: 'A',
  },
  {
    id: 22,
    text: 'Krajské riaditeľstvo Policajného zboru vydá rozhodnutie o zmene rozhodnutia o udelení licencie na prevádzkovanie bezpečnostnej služby:',
    options: {
      A: 'Ak sa zmeny týkajú rozsahu činností v rámci jedného druhu bezpečnostnej služby, to neplatí na dodatočné určenie podmienok alebo zmenu podmienok prevádzkovania bezpečnostnej služby.',
      B: 'Ak sa zmeny týkajú rozsahu činností v rámci jedného druhu bezpečnostnej služby, to platí aj na dodatočné určenie podmienok alebo zmenu podmienok prevádzkovania bezpečnostnej služby.',
      C: 'Ak sa zmeny týkajú rozsahu činností v rámci viacerých druhov bezpečnostnej služby, to platí aj na dodatočné určenie podmienok alebo zmenu podmienok prevádzkovania bezpečnostnej služby.',
    },
    correct: 'B',
  },
  {
    id: 23,
    text: 'V krajnej núdzi sa odvracia:',
    options: {
      A: 'Trvajúci útok na záujem chránený Trestným zákonom.',
      B: 'Nebezpečenstvo priamo hroziace záujmu chránenému Trestným zákonom.',
      C: 'Priamo hroziaci a súčasne aj trvajúci útok.',
    },
    correct: 'B',
  },
  {
    id: 24,
    text: 'Ak prevádzkovateľ opakovane závažným spôsobom porušuje povinnosti ustanovené zákonom o súkromnej bezpečnosti alebo inými všeobecne záväznými právnymi predpismi alebo ak opakovane závažným spôsobom porušuje povinnosti uložené v rozhodnutiach alebo opatreniach Ministerstva vnútra Slovenskej republiky alebo krajského riaditeľstva Policajného zboru:',
    options: {
      A: 'Krajské riaditeľstvo Policajného zboru rozhodne o odňatí licencie na prevádzkovanie bezpečnostnej služby.',
      B: 'Krajské riaditeľstvo Policajného zboru rozhodne o trvalom odňatí licencie na prevádzkovanie bezpečnostnej služby.',
      C: 'Krajské riaditeľstvo Policajného zboru rozhodne o zániku oprávnenia prevádzkovať bezpečnostnú službu.',
    },
    correct: 'B',
  },
  {
    id: 25,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri vykonávaní služby na strážnom stanovisku do vchodu pre motorové vozidlá chráneného objektu chce vstúpiť nákladné motorové vozidlo. Aké máte v tejto situácii oprávnenie podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Technickými prostriedkami zaznamenám vstup alebo výstup z chráneného objektu iba vozidla podozrivého z protiprávnej činnosti. Iné vozidlá nie som oprávnený zaznamenávať.',
      B: 'Mám oprávnenie zaznamenať technickým prostriedkom vstup alebo výstup nákladného motorového vozidla do alebo z chráneného objektu.',
      C: 'Nemám oprávnenie zaznamenať technickým prostriedkom vstup alebo výstup nákladného motorového vozidla do alebo z chráneného objektu.',
    },
    correct: 'B',
  },
  {
    id: 26,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri vykonávaní obchôdzky v chránenom objekte ste našli usmrtenú osobu. Aký je správny postup v tejto situácii podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Som povinný neodkladne ohlásiť usmrtenú osobu najbližšiemu útvaru Policajného zboru a následne prevádzkovateľovi a budem si počínať tak, aby som žiadnym spôsobom nesťažil vyšetrovanie.',
      B: 'Som povinný neodkladne ohlásiť usmrtenú osobu Policajnému zboru a z miesta odídem spísať záznam pre prevádzkovateľa.',
      C: 'Som povinný ohlásiť smrť tejto osoby prevádzkovateľovi a zároveň vykonám predbežnú obhliadku miesta úmrtia.',
    },
    correct: 'A',
  },
  {
    id: 27,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri vykonávaní služby na strážnom stanovisku pri vchode pre motorové vozidlá chráneného objektu, chce vyjsť príslušník Policajného zboru v služobnej rovnošate, ktorý vedie služobné motorové vozidlo a uviedol, že do chráneného objektu vstúpil na služobný účel. Aké máte v tejto situácii oprávnenie podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Umožním príslušníkovi Policajného zboru vystúpiť z chráneného objektu firmy, ale najskôr si overím u jeho nadriadených, či do objektu vstupoval za služobným účelom.',
      B: 'Umožním príslušníkovi Policajného zboru vystúpiť z chráneného objektu firmy, pričom nie som v tejto situácii oprávnený presvedčiť sa, či v dopravnom prostriedku alebo na dopravnom prostriedku nemá predmety pochádzajúce z protiprávnej činnosti súvisiacej s chráneným objektom firmy.',
      C: 'Som oprávnený presvedčiť sa, či osoba vystupujúca z chráneného objektu nemá v dopravnom prostriedku predmety pochádzajúce z protiprávnej činnosti súvisiacej s chráneným objektom a tieto mu odobrať, aj keď ide o príslušníka Policajného zboru.',
    },
    correct: 'B',
  },
  {
    id: 28,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri vykonávaní služby v priestoroch chráneného objektu banky, do ktorej je vstup so zbraňou zakázaný chce vstúpiť ozbrojený príslušník Policajného zboru v služobnej rovnošate, ktorý uvedie, že do banky vstupuje za súkromným účelom. Aký je v tejto situácii správny postup podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Nie som oprávnený zakázať tomuto príslušníkovi Policajného zboru vstup do chráneného objektu banky, aj keď nevstupuje do tohto chráneného objektu na služobný účel.',
      B: 'Som oprávnený zakázať tomuto príslušníkovi Policajného zboru vstup do chráneného objektu banky, nakoľko nevstupuje do tohto chráneného objektu na služobný účel.',
      C: 'Nakoľko sa jedná o príslušníka Policajného zboru, tohto ihneď vpustím do chráneného objektu banky.',
    },
    correct: 'B',
  },
  {
    id: 29,
    text: 'Fyzická osoba, ktorá má najmenej 15 % majetkový podiel v právnickej osobe:',
    options: {
      A: 'Musí spĺňať podmienky bezúhonnosti, spoľahlivosti, zdravotnej spôsobilosti a požadovanej odbornej spôsobilosti.',
      B: 'Musí spĺňať podmienky bezúhonnosti a spoľahlivosti.',
      C: 'Musí spĺňať podmienky bezúhonnosti, spoľahlivosti a zdravotnej spôsobilosti.',
    },
    correct: 'B',
  },
  {
    id: 30,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri vykonávaní obchôdzky v chránenom objekte skladu s výpočtovou technikou ste spozorovali, že tento sklad zatápa unikajúca voda. Ako môžete v tejto situácii postupovať?',
    options: {
      A: 'Môžem odvrátiť priamo hroziace nebezpečenstvo unikajúcej vody v budove skladu napríklad násilným prekonaním prekážok v budove, pričom mnou spôsobená škoda alebo iný následok môže byť zjavne závažnejší, ako ten ktorý hrozí len zo súhlasom prevádzkovateľa.',
      B: 'Ak sa nedá odvrátiť nebezpečenstvo inak, môžem odvrátiť priamo hroziace nebezpečenstvo unikajúcej vody v sklade napríklad násilným prekonaním prekážok v sklade, pričom však mnou spôsobená škoda alebo iný následok nesmie byť zjavne závažnejší, ako ten ktorý hrozí úplným alebo čiastočným zatopením budovy skladu.',
      C: 'Nesmiem odvrátiť priamo hroziace nebezpečenstvo unikajúcej vody v budove skladu nakoľko mnou spôsobená škoda na skladovanej výpočtovej technike bude vždy závažnejšia ako tá, ktorá hrozí úplným alebo čiastočným zatopením budovy skladu.',
    },
    correct: 'B',
  },
  {
    id: 31,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri výkone stráženia chráneného objektu ste spozorovali zamestnanca chráneného objektu, ktorý úmyselne kopol do sklenenej výplne dverí budovy, ktorú týmto svojim konaním rozbil. Aké máte v tejto situácii oprávnenie podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Nemám oprávnenie vyžadovať preukázanie totožnosti zamestnanca, ktorý kopol do sklenenej výplne dverí, aj keď bol pristihnutý pri páchaní priestupku alebo trestného činu, ktorý súvisí s výkonom fyzickej ochrany, avšak mám oprávnenie zavolať políciu.',
      B: 'Mám oprávnenie vyžadovať preukázanie totožnosti zamestnanca, ktorý kopol do sklenenej výplne dverí, nakoľko bol pristihnutý pri páchaní priestupku alebo trestného činu, ktorý súvisí s výkonom fyzickej ochrany.',
      C: 'Vzhľadom na pracovné povinnosti zamestnanca využijem svoje oprávnenia až pri výstupe zamestnanca z chráneného objektu, tohto obmedzím na osobnej slobode a následne zavolám políciu, ktorá zistí jeho totožnosť.',
    },
    correct: 'B',
  },
  {
    id: 32,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri obchôdzke v chránenom objekte budovy skladu žieravín ste zistili, že z jednej z nádob uniká väčšie množstvo žieraviny na zem. Aký je v tejto situácii správny postup podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Som povinný počínať si tak, aby som zásadným spôsobom nesťažil vyšetrovanie, najmä do dvadsiatich štyroch hodín ohlásiť udalosť prevádzkovateľovi.',
      B: 'Som povinný túto udalosť ohlásiť len prevádzkovateľovi.',
      C: 'Som povinný počínať si tak, aby som žiadnym spôsobom nesťažil vyšetrovanie, najmä zamedziť ďalším škodlivým následkom udalosti.',
    },
    correct: 'C',
  },
  {
    id: 33,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri vykonávaní stráženia v chránenom objekte obchodného domu na Vás útočí jeden zo zákazníkov. Ako môžete v tejto situácii postupovať?',
    options: {
      A: 'Môžem odvrátiť hroziaci alebo trvajúci útok zákazníka proti mne, pričom moja obrana proti zákazníkovi smie byť celkom zjavne neprimeraná jeho útoku len so súhlasom prevádzkovateľa, ak vec neznesie odklad, súhlas prevádzkovateľa môže byť daný aj dodatočne.',
      B: 'Môžem odvrátiť hroziaci alebo trvajúci útok zákazníka proti mne, pričom moja obrana proti zákazníkovi nesmie byť celkom zjavne neprimeraná jeho útoku.',
      C: 'Môžem odvrátiť hroziaci alebo trvajúci útok zákazníka proti mne, pričom mojou obranou proti zákazníkovi mu nesmie byť spôsobená ťažká ujma na jeho zdraví.',
    },
    correct: 'B',
  },
  {
    id: 34,
    text: 'Krajské riaditeľstvo Policajného zboru neudelí licenciu na prevádzkovanie bezpečnostnej služby fyzickej osobe, pokiaľ nespĺňa všetky podmienky spoľahlivosti. Podmienkou spoľahlivosti je okrem iných aj, že:',
    options: {
      A: 'Fyzická osoba preukázateľne nadmerne nepožíva alkoholické nápoje alebo preukázateľne nepožíva omamné látky, psychotropné látky alebo prípravky, ktorých požívanie môže vyvolať závislosť osôb od nich.',
      B: 'Fyzickej osobe nebola právoplatne uložená pokuta za ktorýkoľvek priestupok.',
      C: 'Fyzická osoba poskytuje záruku, že bude pri vykonávaní činností podľa zákona o súkromnej bezpečnosti dodržiavať všeobecne záväzné právne predpisy, povinnosti vyplývajúce z rozhodnutí a iných opatrení vydaných podľa zákona o súkromnej bezpečnosti a že bude túto činnosť vykonávať poctivo.',
    },
    correct: 'A',
  },
  {
    id: 35,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri obchôdzke v chránenom objekte ste spozorovali otvorené dvere na jednej z kancelárií so zjavne vylomeným zámkom na týchto dverách. Po nahliadnutí do tejto kancelárie ste zistili, že sú v nej porozhadzované predmety a na stole chýba výpočtová technika. Aký je v tejto situácii správny postup podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Som povinný počínať si tak, aby som zásadným spôsobom nesťažil vyšetrovanie, najmä zaistiť a zadokumentovať stopy v kancelárii a tieto neodkladne odovzdať najbližšiemu útvaru Policajného zboru.',
      B: 'Som povinný počínať si tak, aby som žiadnym spôsobom nesťažil vyšetrovanie, najmä zamedziť prístupu nepovolaných osôb na miesto protiprávnej udalosti.',
      C: 'Som povinný neodkladne uzamknúť dvere kancelárie, ak to nie je možné privolať službu oprávnenú vykonávať opravy uzamykacích mechanizmov.',
    },
    correct: 'B',
  },
  {
    id: 36,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri výkone stráženia na strážnom stanovisku chce do chráneného objektu vstúpiť jeho zamestnanec. Pre zamestnancov chráneného objektu platí zákaz vstupu pod vplyvom alkoholu. U tohto zamestnanca bolo zistené, že nie je pod vplyvom alkoholu. Aký je v tejto situácii správny postup podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Po zistení, že zamestnanec chráneného objektu nie je pod vplyvom alkoholu tomuto zamestnancovi neumožním vstup do chráneného objektu.',
      B: 'Po zistení, že zamestnanec chráneného objektu nie je pod vplyvom alkoholu tomuto zamestnancovi umožním vstup do chráneného objektu až po vykonaní odberu na zistenie alkoholu v krvi.',
      C: 'Po zistení, že zamestnanec chráneného objektu nie je pod vplyvom alkoholu tomuto zamestnancovi umožním vstup do chráneného objektu.',
    },
    correct: 'C',
  },
  {
    id: 37,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri vykonávaní služby na strážnom stanovisku vjazd pre dopravné prostriedky do chráneného objektu chce vojsť osobné motorové vozidlo. Aké máte v tejto situácii oprávnenie podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Nemám oprávnenie viesť evidenciu o vstupe alebo výstupe dopravného prostriedku v chránenom objekte, ale som oprávnený vyžadovať preukázanie totožnosti osôb v dopravnom prostriedku.',
      B: 'Mám oprávnenie viesť evidenciu o vstupe alebo výstupe dopravného prostriedku v chránenom objekte, ale nie som oprávnený vyžadovať preukázanie totožnosti osôb v dopravnom prostriedku.',
      C: 'Mám oprávnenie viesť evidenciu o vstupe alebo výstupe dopravného prostriedku do alebo z chráneného objektu a na tento účel som oprávnený vyžadovať preukázanie totožnosti osôb v dopravnom prostriedku.',
    },
    correct: 'C',
  },
  {
    id: 38,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri výkone stráženia v chránenom objekte na strážnom stanovisku ste pristihli osobu pri pokuse o neoprávnený výstup. Aké máte v tejto situácii oprávnenie podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Nie som oprávnený neznámu osobu predviesť na strážne stanovisko, ale túto po zistení totožnosti zapíšem do evidencie vstupu a výstupu z chráneného objektu a následne ju prepustím.',
      B: 'Som oprávnený na čas nevyhnutný, do príchodu policajta, Vojenskej polície alebo obecnej polície, predviesť na strážne stanovisko neznámu osobu, ktorá nie je oprávnená na výstup z chráneného objektu budovy.',
      C: 'Som oprávnený na čas nevyhnutný, do príchodu majiteľa chráneného objektu, predviesť na strážne stanovisko osobu, ktorá bola pristihnutá pri páchaní priestupku alebo bezprostredne po spáchaní priestupku.',
    },
    correct: 'B',
  },
  {
    id: 39,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri výkone obchôdzky ste spozorovali v chránenom objekte nepovolanú osobu. Aké máte v tejto situácii oprávnenie podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Som oprávnený vyviesť nepovolanú osobu do miesta sídla prevádzky bezpečnostnej služby.',
      B: 'Som oprávnený predviesť nepovolanú osobu na najbližší útvar Policajného zboru.',
      C: 'Som oprávnený vyviesť nepovolanú osobu z chráneného objektu.',
    },
    correct: 'C',
  },
  {
    id: 40,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri vykonávaní služby na strážnom stanovisku pri vchode do bytového domu chce do neho vstúpiť príslušník obecnej polície v služobnej rovnošate, ktorý uviedol, že do chráneného objektu potrebuje vstúpiť na služobný účel. Aký je v tejto situácii správny postup podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Umožním vstup do chráneného objektu príslušníkovi obecnej polície, nakoľko do chráneného objektu vstupuje na služobný účel.',
      B: 'Umožním vstup do chráneného objektu príslušníkovi obecnej polície, nakoľko do chráneného objektu vstupuje na služobný účel, ale až po preukázaní služobného účelu dokladom od jeho nadriadeného.',
      C: 'Neumožním vstup do chráneného objektu príslušníkovi obecnej polície, aj napriek tomu, že tam vstupuje na služobný účel.',
    },
    correct: 'A',
  },
]
