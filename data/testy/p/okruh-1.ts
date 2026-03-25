export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const okruh1PContent = {
  hero: {
    badge: 'P',
    title: 'Cvičné otázky — Okruh 1',
    subtitle: 'Preukaz typu P · Okruh 1',
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
    text: 'Akreditovaná osoba vo vykonávaní odbornej prípravy:',
    options: {
      A: 'Môže pokračovať aj bez potvrdenia zmien Ministerstvom vnútra Slovenskej republiky alebo bez zmeny rozhodnutia o udelení akreditácie.',
      B: 'Môže pokračovať až po potvrdení zmien Ministerstvom vnútra Slovenskej republiky alebo po zmene rozhodnutia o udelení akreditácie.',
      C: 'Môže pokračovať aj pred potvrdením zmien Ministerstvom vnútra Slovenskej republiky alebo po zmene rozhodnutia o udelení akreditácie.',
    },
    correct: 'B',
  },
  {
    id: 2,
    text: 'Ak oprávnenie prevádzkovať bezpečnostnú službu zaniká uplynutím času, na ktorý bola licencia na prevádzkovanie bezpečnostnej služby udelená:',
    options: {
      A: 'Môže prevádzkovateľ požiadať o vydanie novej licencie na prevádzkovanie bezpečnostnej služby na činnosti, ktoré sú predmetom udelenia licencie, najskôr tri mesiace pred uplynutím platnosti licencie na prevádzkovanie bezpečnostnej služby.',
      B: 'Môže prevádzkovateľ požiadať o vydanie novej licencie na prevádzkovanie bezpečnostnej služby na činnosti, ktoré sú predmetom udelenia licencie, najskôr šesť mesiacov pred uplynutím platnosti licencie na prevádzkovanie bezpečnostnej služby.',
      C: 'Môže prevádzkovateľ požiadať o vydanie novej licencie na prevádzkovanie bezpečnostnej služby na činnosti, ktoré sú predmetom udelenia licencie, najskôr šesť mesiacov po uplynutí platnosti licencie na prevádzkovanie bezpečnostnej služby.',
    },
    correct: 'B',
  },
  {
    id: 3,
    text: 'Opisná časť správy o činnosti bezpečnostnej služby nemusí obsahovať:',
    options: {
      A: 'Údaje o osobe, ktorá spôsobila škodu a výšku spôsobenej škody.',
      B: 'Údaje o osobe, ktorá vykonala úkon, použila zbraň, spôsobila zranenie alebo usmrtenie.',
      C: 'Údaje o zmluvách o poskytovaní bezpečnostnej služby.',
    },
    correct: 'C',
  },
  {
    id: 4,
    text: 'Krajské riaditeľstvo Policajného zboru rozhodne o odňatí udelenej licencie na prevádzkovanie bezpečnostnej služby vtedy, ak:',
    options: {
      A: 'Prevádzkovateľ ani do 90 dní po doručení opakovanej výzvy licenciu na prevádzkovanie bezpečnostnej služby neprevezme.',
      B: 'Prevádzkovateľ ani do 30 dní po doručení opakovanej výzvy licenciu na prevádzkovanie bezpečnostnej služby neprevezme.',
      C: 'Prevádzkovateľ ani do 30 dní po doručení upovedomenia licenciu na prevádzkovanie bezpečnostnej služby neprevezme.',
    },
    correct: 'B',
  },
  {
    id: 5,
    text: 'Podľa zákona o Policajnom zbore je policajt v službe povinný v medziach tohto zákona vykonať služobný zákrok:',
    options: {
      A: 'Ak je páchaný trestný čin alebo priestupok alebo je dôvodné podozrenie z ich páchania.',
      B: 'Ak nie je páchaný trestný čin alebo priestupok.',
      C: 'Ak je páchaný trestný čin alebo priestupok a nie je dôvodné podozrenie z ich páchania.',
    },
    correct: 'A',
  },
  {
    id: 6,
    text: 'Čo rozumieme pod pojmom latentná kriminalita?',
    options: {
      A: 'Viditeľná kriminalita.',
      B: 'Skrytá kriminalita.',
      C: 'Vedná disciplína biológie.',
    },
    correct: 'B',
  },
  {
    id: 7,
    text: 'Prevádzkovateľ detektívnej služby je povinný viesť:',
    options: {
      A: 'Evidenciu služieb a inšpekčnú knihu dozoru.',
      B: 'Evidenciu zásahov a inšpekčnú knihu dozoru.',
      C: 'Evidenciu služieb, evidenciu zásahov a inšpekčnú knihu dozoru.',
    },
    correct: 'B',
  },
  {
    id: 8,
    text: 'Prevádzkovateľ bezpečnostnej služby, ktorý je fyzickou osobu, je povinný predložiť raz za dva roky krajskému riaditeľstvu Policajného zboru:',
    options: {
      A: 'Doklady a čestné vyhlásenie podľa § 13 ods. 3 druhej vety zákona č. 473/2005 Z. z. preukazujúce jeho bezúhonnosť a spoľahlivosť okrem odpisu registra trestov a lekársky posudok nie staršie ako tri mesiace.',
      B: 'Len čestné vyhlásenie preukazujúce jeho bezúhonnosť a spoľahlivosť okrem odpisu registra trestov.',
      C: 'Len doklady preukazujúce jeho bezúhonnosť a spoľahlivosť okrem odpisu registra trestov a lekársky posudok nie staršie ako tri mesiace.',
    },
    correct: 'A',
  },
  {
    id: 9,
    text: 'Na žiadosť prevádzkovateľa, krajské riaditeľstvo Policajného zboru pozastaví prevádzkovanie bezpečnostnej služby:',
    options: {
      A: 'Najdlhšie na dobu jedného roka odo dňa nadobudnutia právoplatnosti rozhodnutia o pozastavení prevádzkovania bezpečnostnej služby, opakovane pozastaviť prevádzkovanie bezpečnostnej služby možno najskôr po uplynutí jedného mesiaca od zrušenia predchádzajúceho rozhodnutia o pozastavení prevádzkovania bezpečnostnej služby.',
      B: 'Najdlhšie na dobu jedného roka odo dňa nadobudnutia právoplatnosti rozhodnutia o pozastavení prevádzkovania bezpečnostnej služby, opakovane pozastaviť prevádzkovanie bezpečnostnej služby možno najskôr po uplynutí troch mesiacov od zrušenia predchádzajúceho rozhodnutia o pozastavení prevádzkovania bezpečnostnej služby.',
      C: 'Najdlhšie na dobu dvoch rokov odo dňa nadobudnutia právoplatnosti rozhodnutia o pozastavení prevádzkovania bezpečnostnej služby, opakovane pozastaviť prevádzkovanie bezpečnostnej služby možno najskôr po uplynutí troch mesiacov od zrušenia predchádzajúceho rozhodnutia o pozastavení prevádzkovania bezpečnostnej služby.',
    },
    correct: 'B',
  },
  {
    id: 10,
    text: 'Strážnu službu je zakázané poskytovať spôsobom:',
    options: {
      A: 'Ktorý by mohol vzbudzovať dôvodnú obavu, že bude zneužitá na násilné ovplyvňovanie politických sporov, kolektívneho vyjednávania medzi zamestnancami a zamestnávateľmi, ako aj na akékoľvek potláčanie práv a slobôd.',
      B: 'Ktorý by mohol vzbudzovať aj nepodloženú obavu, že bude zneužitá na násilné ovplyvňovanie politických sporov, kolektívneho vyjednávania medzi zamestnancami a zamestnávateľmi, ako aj na akékoľvek potláčanie práv a slobôd.',
      C: 'Ktorý by mohol vzbudzovať dôvodnú obavu, že nebude zneužitá na násilné ovplyvňovanie politických sporov, kolektívneho vyjednávania medzi zamestnancami a zamestnávateľmi, ako aj na akékoľvek potláčanie práv a slobôd.',
    },
    correct: 'A',
  },
  {
    id: 11,
    text: 'Informácie získané v súvislosti s poskytovaním detektívnej služby môže prevádzkovateľ detektívnej služby:',
    options: {
      A: 'Oznámiť iba osobe, ktorá uzavrela zmluvu o poskytovaní detektívnej služby.',
      B: 'Oznámiť iba osobe, ktorá uzavrela zmluvu o poskytovaní detektívnej služby, alebo osobe ňou písomne splnomocnenej.',
      C: 'Oznámiť iba osobe, ktorá uzavrela zmluvu o poskytovaní detektívnej služby, alebo osobe ktorá vyhlási, že je splnomocnená.',
    },
    correct: 'B',
  },
  {
    id: 12,
    text: 'Ak sa až po uzavretí zmluvy o poskytovaní detektívnej služby zistí, že pátranie smeruje proti osobe, ktorej už poskytuje strážna služba:',
    options: {
      A: 'Nesmie prevádzkovateľ v pátraní pokračovať a je povinný oznámiť osobe, s ktorou uzavrel zmluvu o poskytovaní detektívnej služby, že nemôže pokračovať v poskytovaní detektívnej služby a uviesť dôvod.',
      B: 'Môže prevádzkovateľ v pátraní pokračovať ale je povinný oznámiť osobe, s ktorou uzavrel zmluvu o poskytovaní detektívnej služby, že bude pokračovať v poskytovaní detektívnej služby aj napriek zistenému dôvodu.',
      C: 'Nesmie prevádzkovateľ v pátraní pokračovať a je povinný oznámiť osobe, s ktorou uzavrel zmluvu o poskytovaní detektívnej služby, že nemôže pokračovať v poskytovaní detektívnej služby, dôvody uviesť nemusí.',
    },
    correct: 'A',
  },
  {
    id: 13,
    text: 'Osoby, ktoré boli štatutárnym orgánom alebo členom štatutárneho orgánu prevádzkovateľa, ktorému bola odňatá licencia na prevádzkovanie bezpečnostnej služby z dôvodu závažného spôsobu porušenia povinností ustanovených zákonom o súkromnej bezpečnosti:',
    options: {
      A: 'Nesmú vykonávať tieto funkcie u prevádzkovateľa ani byť držiteľom licencie na prevádzkovanie bezpečnostnej služby po dobu dvoch rokov odo dňa nadobudnutia právoplatnosti rozhodnutia o odňatí licencie na prevádzkovanie bezpečnostnej služby.',
      B: 'Nesmú len vykonávať tieto funkcie u prevádzkovateľa licencie na prevádzkovanie bezpečnostnej služby po dobu troch rokov odo dňa nadobudnutia právoplatnosti rozhodnutia o odňatí licencie na prevádzkovanie bezpečnostnej služby, držiteľom licencie na prevádzkovanie bezpečnostnej služby môžu byť.',
      C: 'Nesmú vykonávať tieto funkcie u prevádzkovateľa ani byť držiteľom licencie na prevádzkovanie bezpečnostnej služby po dobu troch rokov odo dňa nadobudnutia právoplatnosti rozhodnutia o odňatí licencie na prevádzkovanie bezpečnostnej služby.',
    },
    correct: 'C',
  },
  {
    id: 14,
    text: 'Vypracovať vnútorný predpis upravujúci výkon fyzickej ochrany alebo pátrania v objekte osobitnej dôležitosti:',
    options: {
      A: 'Je povinný prevádzkovateľ.',
      B: 'Je povinný objednávateľ.',
      C: 'Je povinný Policajný zbor.',
    },
    correct: 'A',
  },
  {
    id: 15,
    text: 'Podľa Ústavy Slovenskej republiky používanie iných jazykov než štátneho jazyka v úradnom styku ustanoví:',
    options: {
      A: 'Nariadenie Európskej rady o štátnom jazyku.',
      B: 'Zákon.',
      C: 'Vyhláška.',
    },
    correct: 'B',
  },
  {
    id: 16,
    text: 'Fyzická osoba, ktorá je prevádzkovateľom:',
    options: {
      A: 'Nesmie byť držiteľom iného oprávnenia prevádzkovať bezpečnostnú službu, ale môže byť štatutárnym orgánom alebo členom štatutárneho orgánu inej právnickej osoby, ktorá je držiteľom oprávnenia prevádzkovať bezpečnostnú službu.',
      B: 'Nesmie byť držiteľom iného oprávnenia prevádzkovať bezpečnostnú službu a nesmie byť ani štatutárnym orgánom alebo členom štatutárneho orgánu inej právnickej osoby, ktorá je držiteľom oprávnenia prevádzkovať bezpečnostnú službu.',
      C: 'Môže byť držiteľom iného oprávnenia prevádzkovať bezpečnostnú službu a môže byť štatutárnym orgánom alebo členom štatutárneho orgánu inej právnickej osoby, ktorá je držiteľom oprávnenia prevádzkovať bezpečnostnú službu.',
    },
    correct: 'B',
  },
  {
    id: 17,
    text: 'Podľa Ústavy Slovenskej republiky je vrcholným orgánom výkonnej moci:',
    options: {
      A: 'Vláda Slovenskej republiky.',
      B: 'Iba premiér Slovenskej republiky.',
      C: 'Národná rada Slovenskej republiky.',
    },
    correct: 'A',
  },
  {
    id: 18,
    text: 'Podľa správneho poriadku sa konanie začína:',
    options: {
      A: 'Na návrh účastníka konania alebo na podnet správneho orgánu.',
      B: 'Bez návrhu.',
      C: 'Iba s písomným súhlasom sudcu Ústavného súdu SR.',
    },
    correct: 'A',
  },
  {
    id: 19,
    text: 'Prevádzkovateľ detektívnej služby je pri každej zmluve o poskytovaní detektívnej služby povinný:',
    options: {
      A: 'Spracovať písomnú záverečnú správu o poskytovaní detektívnej služby a jej originál odovzdať druhému účastníkovi zmluvy o poskytovaní detektívnej služby a kópiu uschovávať päť rokov od skončenia plnenia zmluvy.',
      B: 'Spracovať písomnú záverečnú správu o poskytovaní detektívnej služby a jej originál odovzdať druhému účastníkovi zmluvy o poskytovaní detektívnej služby a kópiu uschovávať tri roky od skončenia plnenia zmluvy.',
      C: 'Spracovať písomnú záverečnú správu o poskytovaní detektívnej služby a jej originál odovzdať druhému účastníkovi zmluvy o poskytovaní detektívnej služby a kópiu uschovávať najmenej päť rokov od skončenia plnenia zmluvy.',
    },
    correct: 'A',
  },
  {
    id: 20,
    text: 'Prevádzkovateľ strážnej služby, ktorý prevádzkuje zariadenie poplachového systému alebo časť takéhoto zariadenia, vyhodnocuje narušenie chráneného objektu alebo chráneného miesta alebo ktorý prevádzkuje iný systém slúžiaci na ochranu majetku a osoby:',
    options: {
      A: 'Je povinný zabezpečiť okamžité preverenie signálu najmenej dvoma odborne spôsobilými osobami poverenými výkonom fyzickej ochrany alebo prostredníctvom kamerového systému.',
      B: 'Je povinný zabezpečiť okamžité preverenie signálu dostatočným počtom odborne spôsobilých osôb poverených výkonom fyzickej ochrany alebo prostredníctvom kamerového systému.',
      C: 'Je povinný zabezpečiť preverenie signálu najmenej troma odborne spôsobilými osobami poverenými výkonom fyzickej ochrany alebo prostredníctvom kamerového systému.',
    },
    correct: 'A',
  },
  {
    id: 21,
    text: 'Objasňovanie priestupkov obecná polícia:',
    options: {
      A: 'Vykonáva presne v takom rozsahu ako Policajný zbor.',
      B: 'Vykonáva, ale iba u priestupkov na úseku bezpečnosti a plynulosti cestnej premávky.',
      C: 'Vykonáva, ak tak ustanovuje osobitný predpis, ktorým je zákon o priestupkoch.',
    },
    correct: 'C',
  },
  {
    id: 22,
    text: 'Splnenie povinnosti prevádzkovateľa presvedčiť sa, či ten, s kým hodlá uzatvoriť zmluvu o poskytovaní strážnej služby, je oprávnený užívať majetok, ktorý má byť predmetom ochrany:',
    options: {
      A: 'Je povinný na požiadanie preukázať orgánu dozoru pri výkone štátneho dozoru alebo orgánu kontroly pri výkone kontroly.',
      B: 'Nie je povinný na požiadanie preukázať orgánu dozoru pri výkone štátneho dozoru alebo orgánu kontroly pri výkone kontroly.',
      C: 'Je povinný na požiadanie preukázať aj orgánu dozoru pri výkone štátneho dozoru, orgánu kontroly pri výkone kontroly alebo policajtovi pri výkone kontroly činnosti.',
    },
    correct: 'A',
  },
  {
    id: 23,
    text: 'Podľa správneho poriadku správny orgán konanie zastaví, ak:',
    options: {
      A: 'Vždy.',
      B: 'Neodpadol dôvod konania začatého na podnet správneho orgánu.',
      C: 'Odpadol dôvod konania začatého na podnet správneho orgánu.',
    },
    correct: 'C',
  },
  {
    id: 24,
    text: 'Akreditovaná osoba:',
    options: {
      A: 'Vydá po ukončení odbornej prípravy osobe, ktorá absolvovala odbornú prípravu v celom rozsahu osvedčenie o absolvovaní odbornej prípravy.',
      B: 'Vydá na začiatku odbornej prípravy osobe, ktorá bude absolvovať odbornú prípravu v celom rozsahu osvedčenie o absolvovaní odbornej prípravy.',
      C: 'Vydá v priebehu odbornej prípravy osobe, ktorá absolvuje odbornú prípravu osvedčenie o absolvovaní odbornej prípravy.',
    },
    correct: 'A',
  },
  {
    id: 25,
    text: 'Odvolanie sa podľa správneho poriadku podáva na:',
    options: {
      A: 'Správnom orgáne, ktorý napadnuté rozhodnutie dozoroval.',
      B: 'Obecnom zastupiteľstve poslancom, inak nie je prípustné.',
      C: 'Správnom orgáne, ktorý napadnuté rozhodnutie vydal.',
    },
    correct: 'C',
  },
  {
    id: 26,
    text: 'Každý má právo na život. Ľudský život je hodný ochrany už pred narodením. Nikto nesmie byť:',
    options: {
      A: 'Pozbavený života.',
      B: 'Pozbavený smrti.',
      C: 'Pozbavený svojich biologických rodičov.',
    },
    correct: 'A',
  },
  {
    id: 27,
    text: 'Ak sa prevádzkovateľ nepresvedčí o tom, či ten s kým hodlá uzatvoriť zmluvu o poskytovaní strážnej služby, je oprávnený užívať majetok, ktorý má byť predmetom ochrany, možno mu za správny delikt:',
    options: {
      A: 'Uložiť pokutu do 33 340 eur a zákaz činnosti do troch rokov.',
      B: 'Uložiť pokutu do 16 596 eur a zákaz činnosti do troch rokov.',
      C: 'Uložiť pokutu do 3 419 eur a zákaz činnosti do troch rokov.',
    },
    correct: 'B',
  },
  {
    id: 28,
    text: 'Ten, kto obmedzil osobnú slobodu osobe pristihnutej pri páchaní trestného činu alebo bezprostredne po ňom:',
    options: {
      A: 'Je povinný takúto osobu bezodkladne odovzdať útvaru Policajného zboru, Vojenskej polície alebo Colnej správy.',
      B: 'Je povinný po zistení totožnosti osoby, túto okamžite prepustiť.',
      C: 'Môže takúto osobu bezodkladne odovzdať útvaru Policajného zboru, no najskôr musí hodnoverne zistiť totožnosť tejto osoby.',
    },
    correct: 'A',
  },
  {
    id: 29,
    text: 'Ak v právnickej osobe prestane pôsobiť fyzická osoba, ktorá je ako jediná oprávnená konať v mene právnickej osoby:',
    options: {
      A: 'Najdlhšie na tri mesiace odo dňa, keď táto fyzická osoba prestala pôsobiť v právnickej osobe, krajské riaditeľstvo Policajného zboru odníme licenciu na prevádzkovanie bezpečnostnej služby.',
      B: 'Najdlhšie na dva mesiace odo dňa, keď táto fyzická osoba prestala pôsobiť v právnickej osobe, krajské riaditeľstvo Policajného zboru pozastaví prevádzkovanie bezpečnostnej služby.',
      C: 'Najdlhšie na tri mesiace odo dňa, keď táto fyzická osoba prestala pôsobiť v právnickej osobe, krajské riaditeľstvo Policajného zboru pozastaví prevádzkovanie bezpečnostnej služby.',
    },
    correct: 'C',
  },
  {
    id: 30,
    text: 'Priestupku proti verejnému poriadku sa dopustí ten:',
    options: {
      A: 'Kto poruší zákaz používať označenie „Policajný zbor" alebo „Polícia" alebo zákaz používať služobnú rovnošatu Policajného zboru ustanovený v osobitnom zákone.',
      B: 'Kto poruší zákaz používať označenie „Vojenský zbor" alebo „Polícia" alebo zákaz používať služobnú rovnošatu Policajného zboru ustanovený v osobitnom zákone.',
      C: 'Kto poruší nariadenie používať označenie „Policajný zbor" alebo „Polícia" alebo zákaz používať služobnú rovnošatu Policajného zboru ustanovený v osobitnom zákone.',
    },
    correct: 'A',
  },
  {
    id: 31,
    text: 'Podľa zákona o Policajnom zbore je Policajný zbor:',
    options: {
      A: 'Ozbrojeným bezpečnostným zborom.',
      B: 'Ozbrojeným zborom na základe rovnoprávnosti zborov vo svete.',
      C: 'Ozbrojeným vojenským zborom.',
    },
    correct: 'A',
  },
  {
    id: 32,
    text: 'Prevádzkovateľ je povinný označiť sídlo prevádzkovateľa, miesto činnosti fyzickej osoby a prevádzku:',
    options: {
      A: 'Obchodným menom na viditeľnom a verejne prístupnom mieste, výška písmen označenia je najmenej 35 mm v kontrastnom vyhotovení k podkladu.',
      B: 'Obchodným menom na viditeľnom a verejne prístupnom mieste, výška písmen označenia je najmenej 45 mm v kontrastnom vyhotovení k podkladu.',
      C: 'Obchodným menom na viditeľnom a verejne prístupnom mieste, výška písmen označenia je najmenej 35 mm v transparentnom vyhotovení k podkladu.',
    },
    correct: 'A',
  },
  {
    id: 33,
    text: 'Prevádzkovateľ strážnej služby je povinný neodkladne oznámiť miestne príslušnému útvaru Policajného zboru vykonanie každého zásahu v týchto všetkých prípadoch:',
    options: {
      A: 'Zásahu pri výkone fyzickej ochrany, pri ktorom bola použitá strelná zbraň alebo vecný bezpečnostný prostriedok, iný technický prostriedok alebo pri ktorom došlo k zraneniu alebo k usmrteniu osoby, alebo k obmedzeniu osobnej slobody osoby.',
      B: 'Zásahu pri výkone fyzickej ochrany, pri ktorom bola použitá strelná zbraň alebo vecný bezpečnostný prostriedok alebo pri ktorom došlo k zraneniu alebo k usmrteniu osoby, alebo k obmedzeniu osobnej slobody osoby.',
      C: 'Zásahu pri výkone fyzickej ochrany, pri ktorom bola použitá strelná zbraň alebo vecný bezpečnostný prostriedok alebo pri ktorom došlo len k usmrteniu osoby, alebo k obmedzeniu osobnej slobody osoby.',
    },
    correct: 'B',
  },
  {
    id: 34,
    text: 'Priestupkom nie je konanie, ktorým niekto odvracia:',
    options: {
      A: 'Neprimeraným spôsobom priamo hroziaci útok na záujem chránený zákonom.',
      B: 'Primeraným spôsobom priamo hroziaci útok na záujem chránený zákonom.',
      C: 'Primeraným spôsobom nepriamo hroziaci útok na záujem chránený zákonom.',
    },
    correct: 'B',
  },
  {
    id: 35,
    text: 'Bezpečnostnú službu:',
    options: {
      A: 'Môže prevádzkovať fyzická osoba, právnická osoba alebo právnická osoba s najmenej 15 % majetkovým podielom fyzickej osoby, na ktorých majetok bol ukončený konkurz, najskôr po uplynutí dvoch rokov od ukončenia konkurzu.',
      B: 'Môže prevádzkovať fyzická osoba, právnická osoba alebo právnická osoba s najmenej 15 % majetkovým podielom fyzickej osoby, na ktorých majetok bol ukončený konkurz, najskôr po uplynutí piatich rokov od ukončenia konkurzu.',
      C: 'Môže prevádzkovať fyzická osoba, právnická osoba alebo právnická osoba s najmenej 15 % majetkovým podielom fyzickej osoby, na ktorých majetok bol ukončený konkurz, najskôr po uplynutí troch rokov od ukončenia konkurzu.',
    },
    correct: 'C',
  },
  {
    id: 36,
    text: 'V záverečnej správe o poskytnutí detektívnej služby musia byť najmä uvedené:',
    options: {
      A: 'Čas a skutočný priebeh poskytovania detektívnej služby.',
      B: 'Identifikačné údaje osôb, ktoré detektívnu službu poskytovali.',
      C: 'Výsledok poskytovania detektívnej služby, pričom jeho porovnanie s dohodnutým predmetom zmluvy nie je povinné.',
    },
    correct: 'A',
  },
  {
    id: 37,
    text: 'Podľa zákona o Policajnom zbore Policajný zbor:',
    options: {
      A: 'Plní úlohy na úseku leteckej prevádzky iba v prípade nevojenských lietadiel.',
      B: 'Plní úlohy na úseku prevencie v rozsahu pôsobnosti ustanovenej zákonom.',
      C: 'Plní úlohy na úseku prevencie v plnom rozsahu.',
    },
    correct: 'B',
  },
  {
    id: 38,
    text: 'Ministerstvo vnútra Slovenskej republiky pozastaví prevádzkovanie profesionálnej cezhraničnej prepravy eurovej hotovosti cestnou dopravou:',
    options: {
      A: 'Ak fyzická osoba, ktorá má najmenej 15 % majetkový podiel v právnickej osobe, prestane spĺňať podmienku bezúhonnosti alebo spoľahlivosti, najdlhšie na dva mesiace odo dňa, keď osoba prestala spĺňať uvedené podmienky.',
      B: 'Ak fyzická osoba, ktorá má najmenej 15 % majetkový podiel v právnickej osobe, prestane spĺňať podmienku bezúhonnosti alebo spoľahlivosti, najdlhšie na tri mesiace odo dňa, keď osoba prestala spĺňať uvedené podmienky.',
      C: 'Ak fyzická osoba, ktorá má najmenej 15 % majetkový podiel v právnickej osobe, prestane spĺňať podmienku bezúhonnosti, spoľahlivosti alebo zdravotnej spôsobilosti, najdlhšie na dva mesiace odo dňa, keď osoba prestala spĺňať uvedené podmienky.',
    },
    correct: 'A',
  },
  {
    id: 39,
    text: 'Akreditovaná osoba je povinná pred začatím odbornej prípravy doručiť Ministerstvu vnútra Slovenskej republiky:',
    options: {
      A: 'Najneskôr päť dní pred jej začatím oznámenie o forme, dátume, čase a ak bude aspoň čiastočne vykonávaná prezenčnou formou, aj miesto jej konania; ak bude odborná príprava vykonávaná aspoň čiastočne dištančnou formou oznámiť aspoň tri dni pred jej začatím podrobnosti o jej online sprístupnení.',
      B: 'Najneskôr päť dní pred jej začatím oznámenie o forme, dátume, čase a ak bude aspoň čiastočne vykonávaná prezenčnou formou, aj miesto jej konania; ak bude odborná príprava vykonávaná aspoň čiastočne dištančnou formou oznámiť aspoň dva dni pred jej začatím podrobnosti o jej online sprístupnení.',
      C: 'Najneskôr päť dní pred jej začatím oznámenie o forme, dátume, čase a ak bude aspoň čiastočne vykonávaná prezenčnou formou, aj miesto jej konania; ak bude odborná príprava vykonávaná aspoň čiastočne dištančnou formou oznámiť aspoň jeden deň pred jej začatím podrobnosti o jej online sprístupnení.',
    },
    correct: 'B',
  },
  {
    id: 40,
    text: 'Ak sa licencia na prevádzkovanie bezpečnostnej služby trvalo odňala:',
    options: {
      A: 'Ďalšiu licenciu na prevádzkovanie bezpečnostnej služby tomu istému prevádzkovateľovi je možné udeliť.',
      B: 'Ďalšiu licenciu na prevádzkovanie bezpečnostnej služby tomu istému prevádzkovateľovi je možné udeliť až po uplynutí troch rokov odo dňa nadobudnutia právoplatnosti tohto rozhodnutia.',
      C: 'Ďalšiu licenciu na prevádzkovanie bezpečnostnej služby tomu istému prevádzkovateľovi nie je možné udeliť.',
    },
    correct: 'C',
  },
]
