export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const okruh3PContent = {
  hero: {
    badge: 'P',
    title: 'Cvičné otázky — Okruh 3',
    subtitle: 'Preukaz typu P · Okruh 3',
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
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri výkone stráženia v chránenom objekte predajne potravín bola osoba pristihnutá pri spáchaní priestupku krádeže tovaru. Táto osoba s Vami spolupracuje avšak nevie preukázať svoju totožnosť, lebo nemá pri sebe doklad totožnosti. Aké máte v tejto situácii oprávnenie podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Som oprávnený na čas nevyhnutný, do príchodu policajta, Vojenskej polície alebo obecnej polície, predviesť na strážne stanovisko osobu, ktorá bola pristihnutá pri páchaní priestupku alebo bezprostredne po spáchaní priestupku.',
      B: 'Nie som oprávnený predviesť na strážne stanovisko osobu, ktorá bola pristihnutá pri páchaní priestupku alebo bezprostredne po spáchaní priestupku a túto po zápise do evidencie zásahov ihneď prepustím.',
      C: 'Som oprávnený na čas nevyhnutný, do príchodu policajta, Vojenskej polície alebo obecnej polície, predviesť na strážne stanovisko osobu, ktorá bola pristihnutá pri páchaní priestupku alebo bezprostredne po spáchaní priestupku, ak je hodnota odcudzeného tovaru minimálne vo výške desať EUR.',
    },
    correct: 'A',
  },
  {
    id: 2,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri výkone stráženia na strážnom stanovisku pri vstupe do chráneného objektu chce vstúpiť zamestnanec jednej z prevádzok sídliacich v chránenom objekte. Aké máte v tejto situácii oprávnenie podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Mám oprávnenie zaznamenať technickým prostriedkom vstup alebo výstup zamestnanca do alebo z chráneného objektu.',
      B: 'Nemám oprávnenie zaznamenať technickým prostriedkom vstup, alebo výstup zamestnanca do alebo z chráneného objektu.',
      C: 'Mám oprávnenie zaznamenať technickým prostriedkom vstup zamestnanca do chráneného objektu, ale výstup z chráneného objektu nie som oprávnený zaznamenať.',
    },
    correct: 'A',
  },
  {
    id: 3,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri predvedení osoby na strážne stanovisko, ktorá odcudzila tovar v chránenom objekte, nebola Vami predvádzaná osoba zranená. Aký je správny postup v tejto situácii podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Osobe nie som povinný podať nevyhnutnú pomoc, ani privolať lekára.',
      B: 'Som povinný tejto osobe privolať lekára aj napriek tomu, že osoba nie je zranená a nežiada si lekárske ošetrenie.',
      C: 'Som povinný tejto osobe podať nevyhnutnú pomoc a privolať lekára aj napriek tomu, že osoba nebola zranená, len so súhlasom prevádzkovateľa.',
    },
    correct: 'A',
  },
  {
    id: 4,
    text: 'Žiadosť o udelenie licencie na prevádzkovanie bezpečnostnej služby:',
    options: {
      A: 'Sa podáva poštou príslušnému orgánu.',
      B: 'Sa podáva elektronicky príslušnému orgánu.',
      C: 'Sa podáva osobne príslušnému orgánu.',
    },
    correct: 'C',
  },
  {
    id: 5,
    text: 'Prevádzkovateľ je povinný pri získavaní osobných údajov poskytnúť dotknutej osobe informáciu o:',
    options: {
      A: 'Práve po roku svoj súhlas odvolať.',
      B: 'Nemožnosti svoj súhlas odvolať.',
      C: 'Práve kedykoľvek svoj súhlas odvolať.',
    },
    correct: 'C',
  },
  {
    id: 6,
    text: 'Ak fyzická osoba nemá pobyt na území Slovenskej republiky:',
    options: {
      A: 'Musí ustanoviť zodpovedného zástupcu, ktorý musí byť v pracovnoprávnom vzťahu k prevádzkovateľovi, túto podmienku nemusí spĺňať zodpovedný zástupca, ak je ním manžel alebo manželka prevádzkovateľa.',
      B: 'Musí ustanoviť zodpovedného zástupcu, ktorý musí byť v pracovnoprávnom vzťahu k prevádzkovateľovi, túto podmienku musí spĺňať aj zodpovedný zástupca, ak je ním manžel alebo manželka prevádzkovateľa.',
      C: 'Musí ustanoviť zodpovedného zástupcu, ktorý nemusí byť v pracovnoprávnom vzťahu k prevádzkovateľovi, túto podmienku nemusí taktiež spĺňať zodpovedný zástupca, ak je ním manžel alebo manželka prevádzkovateľa.',
    },
    correct: 'A',
  },
  {
    id: 7,
    text: 'Spracúvanie osobných údajov:',
    options: {
      A: 'Je zákonné, ak dotknutá osoba vyjadrila súhlas so spracúvaním svojich osobných údajov aspoň na tri konkrétne účely.',
      B: 'Je zákonné, ak dotknutá osoba vyjadrila súhlas so spracúvaním svojich osobných údajov aspoň na jeden konkrétny účel.',
      C: 'Nie je zákonné, ak dotknutá osoba vyjadrila súhlas so spracúvaním svojich osobných údajov aspoň na jeden konkrétny účel.',
    },
    correct: 'B',
  },
  {
    id: 8,
    text: 'Krajské riaditeľstvo Policajného zboru udelí licenciu na prevádzkovanie bezpečnostnej služby fyzickej osobe, ak tomu nebráni záujem vnútorného poriadku a bezpečnosti a spĺňa všetky tieto podmienky:',
    options: {
      A: 'Dosiahla vek 21 rokov, je občanom členského štátu Európskej únie, občanom iného zmluvného štátu dohody o Európskom hospodárskom priestore alebo občanom Švajčiarskej konfederácie, má spôsobilosť na právne úkony v plnom rozsahu, je bezúhonná, je spoľahlivá, je zdravotne spôsobilá a má požadovanú odbornú spôsobilosť.',
      B: 'Dosiahla vek 21 rokov, je občanom členského štátu Európskej únie alebo občanom Švajčiarskej konfederácie, má požadovanú odbornú spôsobilosť, má spôsobilosť na právne úkony, je bezúhonná, je spoľahlivá, je zdravotne spôsobilá.',
      C: 'Dosiahla vek 21 rokov, je občanom členského štátu Európskej únie, občanom iného zmluvného štátu dohody o Európskom hospodárskom priestore, je bezúhonná, je spoľahlivá, je zdravotne spôsobilá a má požadovanú odbornú spôsobilosť.',
    },
    correct: 'A',
  },
  {
    id: 9,
    text: 'Požiadavku ustanoveného vzdelania na prevádzkovanie strážnej služby a profesionálnej cezhraničnej prepravy eurovej hotovosti cestnou dopravou spĺňa osoba, ktorá:',
    options: {
      A: 'Má ukončené úplné stredné odborné vzdelanie v oblasti bezpečnostných služieb a vykonávala bezpečnostnú prax najmenej päť rokov.',
      B: 'Má ukončené úplné stredné odborné vzdelanie v oblasti bezpečnostných služieb a vykonávala bezpečnostnú prax najmenej dva roky.',
      C: 'Má ukončené len odborné vzdelanie v oblasti bezpečnostných služieb a vykonávala bezpečnostnú prax najmenej dva roky.',
    },
    correct: 'B',
  },
  {
    id: 10,
    text: 'Právnická osoba k žiadosti o udelenie licencie na prevádzkovanie profesionálnej cezhraničnej prepravy eurovej hotovosti cestnou dopravou pripojí:',
    options: {
      A: 'Výpis z obchodného registra.',
      B: 'Osvedčený doklad preukazujúci, že v posledných 24 mesiacoch vykonávala prepravu peňažnej hotovosti podľa zákona o súkromnej bezpečnosti.',
      C: 'Doklad o pridelení identifikačného čísla, ak je pridelené.',
    },
    correct: 'B',
  },
  {
    id: 11,
    text: 'Oprávnenie prevádzkovať bezpečnostnú službu:',
    options: {
      A: 'Vzniká podaním žiadosti o udelenie licencie na prevádzkovanie bezpečnostnej služby.',
      B: 'Vzniká už vydaním licencie na prevádzkovanie bezpečnostnej služby.',
      C: 'Vzniká až doručením licencie na prevádzkovanie bezpečnostnej služby.',
    },
    correct: 'C',
  },
  {
    id: 12,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Nastupujete do nočnej služby, ktorá začne o 19:00 hod. Kto a kedy vyplní povinné údaje v evidencii služieb?',
    options: {
      A: 'Prevádzkovateľ alebo ním poverená osoba a to najneskôr 6 hodín pred začatím výkonu mojej služby.',
      B: 'Povinné údaje v evidencii služieb vyplním ja najneskôr pri nástupe do výkonu služby.',
      C: 'Prevádzkovateľ alebo ním poverená osoba a to najneskôr 4 hodiny pred začatím výkonu mojej služby.',
    },
    correct: 'A',
  },
  {
    id: 13,
    text: 'Fyzická osoba k žiadosti o udelenie licencie na prevádzkovanie bezpečnostnej služby nepripojí:',
    options: {
      A: 'Doklad o pridelení identifikačného čísla, ak je pridelené.',
      B: 'Doklad preukazujúci jej vzdelanie a preukaz typu P alebo CIT.',
      C: 'Lekársky posudok nie starší ako tri mesiace.',
    },
    correct: 'A',
  },
  {
    id: 14,
    text: 'Ak fyzická osoba nemá pobyt na území Slovenskej republiky:',
    options: {
      A: 'Musí ustanoviť zodpovedného zástupcu, ktorý musí byť v pracovnoprávnom vzťahu k prevádzkovateľovi, túto podmienku nemusí spĺňať zodpovedný zástupca, ak je ním manžel alebo manželka prevádzkovateľa.',
      B: 'Musí ustanoviť zodpovedného zástupcu, ktorý musí byť v pracovnoprávnom vzťahu k prevádzkovateľovi, túto podmienku musí spĺňať aj zodpovedný zástupca, ak je ním manžel alebo manželka prevádzkovateľa.',
      C: 'Musí ustanoviť zodpovedného zástupcu, ktorý nemusí byť v pracovnoprávnom vzťahu k prevádzkovateľovi, túto podmienku nemusí taktiež spĺňať zodpovedný zástupca, ak je ním manžel alebo manželka prevádzkovateľa.',
    },
    correct: 'A',
  },
  {
    id: 15,
    text: 'Požiadavku ustanoveného vzdelania na prevádzkovanie strážnej služby a profesionálnej cezhraničnej prepravy eurovej hotovosti cestnou dopravou spĺňa osoba, ktorá:',
    options: {
      A: 'Má ukončené stredné všeobecné vzdelanie alebo stredné odborné vzdelanie a vykonávala bezpečnostnú prax najmenej tri roky.',
      B: 'Má ukončené úplné stredné všeobecné vzdelanie alebo úplné stredné odborné vzdelanie a vykonávala bezpečnostnú prax najmenej dva roky.',
      C: 'Má ukončené úplné stredné všeobecné vzdelanie alebo úplné stredné odborné vzdelanie a vykonávala bezpečnostnú prax najmenej päť rokov.',
    },
    correct: 'C',
  },
  {
    id: 16,
    text: 'Fyzická osoba v žiadosti o udelenie licencie na prevádzkovanie bezpečnostnej služby uvedie:',
    options: {
      A: 'Kto vykonáva jej sociálne poistenie.',
      B: 'Prehľad svojich podnikateľských činností.',
      C: 'Dobu ukončenia, ak zamýšľa činnosť vykonávať menej ako desať rokov.',
    },
    correct: 'C',
  },
  {
    id: 17,
    text: 'Ministerstvo vnútra Slovenskej republiky udelí licenciu na prevádzkovanie profesionálnej cezhraničnej prepravy eurovej hotovosti cestnou dopravou, ak tomu nebráni záujem vnútorného poriadku a bezpečnosti a ak okrem iných podmienok žiadateľ:',
    options: {
      A: 'V posledných 24 mesiacoch vykonával prepravu peňažnej hotovosti podľa zákona o súkromnej bezpečnosti a počas tohto obdobia neporušil povinnosti súvisiace s touto činnosťou a má uzavreté poistenie zodpovednosti za škodu pri prevádzkovaní motorového vozidla.',
      B: 'V posledných 24 mesiacoch vykonával prepravu peňažnej hotovosti podľa zákona o súkromnej bezpečnosti a počas tohto obdobia neporušil povinnosti súvisiace s touto činnosťou a má uzavreté poistenie zodpovednosti za škodu pri prevádzkovaní bezpečnostnej služby.',
      C: 'V posledných 12 mesiacoch vykonával prepravu peňažnej hotovosti podľa zákona o súkromnej bezpečnosti a počas tohto obdobia neporušil povinnosti súvisiace s touto činnosťou a má uzavreté poistenie zodpovednosti za škodu pri prevádzkovaní bezpečnostnej služby.',
    },
    correct: 'B',
  },
  {
    id: 18,
    text: 'Krajské riaditeľstvo Policajného zboru neudelí licenciu na prevádzkovanie bezpečnostnej služby fyzickej osobe, pokiaľ nespĺňa všetky podmienky spoľahlivosti. Podmienkou spoľahlivosti je okrem iných aj, že:',
    options: {
      A: 'Fyzická osoba preukázateľne nadmerne nepožíva alkoholické nápoje alebo preukázateľne nepožíva omamné látky, psychotropné látky alebo prípravky, ktorých požívanie môže vyvolať závislosť osôb od nich.',
      B: 'Fyzická osoba poskytuje záruku, že bude pri vykonávaní činností podľa zákona o súkromnej bezpečnosti dodržiavať všeobecne záväzné právne predpisy, povinnosti vyplývajúce z rozhodnutí a iných opatrení vydaných podľa zákona o súkromnej bezpečnosti a že bude túto činnosť vykonávať poctivo.',
      C: 'Fyzickej osobe nebola právoplatne uložená pokuta za ktorýkoľvek priestupok.',
    },
    correct: 'A',
  },
  {
    id: 19,
    text: 'Ministerstvo vnútra Slovenskej republiky udelí licenciu na prevádzkovanie profesionálnej cezhraničnej prepravy eurovej hotovosti cestnou dopravou, ak tomu nebráni záujem vnútorného poriadku a bezpečnosti a ak okrem iných podmienok žiadateľ:',
    options: {
      A: 'V posledných 12 mesiacoch vykonával prepravu peňažnej hotovosti podľa zákona o súkromnej bezpečnosti a počas tohto obdobia neporušil povinnosti súvisiace s touto činnosťou a má uzavreté poistenie zodpovednosti za škodu pri prevádzkovaní bezpečnostnej služby.',
      B: 'V posledných 24 mesiacoch vykonával prepravu peňažnej hotovosti podľa zákona o súkromnej bezpečnosti a počas tohto obdobia neporušil povinnosti súvisiace s touto činnosťou a má uzavreté poistenie zodpovednosti za škodu pri prevádzkovaní bezpečnostnej služby.',
      C: 'V posledných 24 mesiacoch vykonával prepravu peňažnej hotovosti podľa zákona o súkromnej bezpečnosti a počas tohto obdobia neporušil povinnosti súvisiace s touto činnosťou a má uzavreté poistenie zodpovednosti za škodu pri prevádzkovaní motorového vozidla.',
    },
    correct: 'B',
  },
  {
    id: 20,
    text: 'Od osoby, ktorá môže prispieť k objasňovaniu skutočnosti dôležitej na odhalenie trestného činu a na zistenie jeho páchateľa:',
    options: {
      A: 'Nie je príslušník Policajného zboru oprávnený požadovať potrebné informácie.',
      B: 'Je príslušník Policajného zboru oprávnený požadovať potrebné informácie.',
      C: 'Je príslušník Policajného zboru oprávnený požadovať potrebné informácie, a to aj od osoby ktorá ho upozornila, že by tým porušila zákonom uloženú alebo uznanú povinnosť mlčanlivosti.',
    },
    correct: 'B',
  },
  {
    id: 21,
    text: 'Tomu kto uplatňuje svoje základné práva a slobody:',
    options: {
      A: 'Nesmie byť spôsobená ujma na jeho právach.',
      B: 'Môže byť spôsobená ujma na jeho právach.',
      C: 'Môže inému spôsobiť ujmu na jeho právach.',
    },
    correct: 'A',
  },
  {
    id: 22,
    text: 'Kriminalistika je:',
    options: {
      A: 'Odbor, ktorý skúma páchateľa, jeho motív a spôsob páchania trestného činu.',
      B: 'Odbor, ktorý sa zaoberá odhaľovaním trestných činov a priestupkov.',
      C: 'Odbor, ktorý sa zaoberá odhaľovaním trestných činov.',
    },
    correct: 'C',
  },
  {
    id: 23,
    text: 'Daktyloskopické stopy sa vyznačujú:',
    options: {
      A: 'Vekovo nestálou individuálnosťou, nemennosťou a neodstrániteľnosťou.',
      B: 'Čiastočnou individuálnosťou, nemennosťou a neodstrániteľnosťou.',
      C: 'Individuálnosťou, nemennosťou a neodstrániteľnosťou.',
    },
    correct: 'C',
  },
  {
    id: 24,
    text: 'Všetkými spôsobmi, ktorými príslušník Policajného zboru preukazuje príslušnosť k Policajnému zboru sú:',
    options: {
      A: 'Služobnou rovnošatou s identifikačným číslom, služobným preukazom, odznakom služby kriminálnej polície, alebo finančnej polície, alebo ústnym vyhlásením „Polícia".',
      B: 'Služobným preukazom, odznakom služby kriminálnej polície, alebo finančnej polície, alebo ústnym vyhlásením „Polícia".',
      C: 'Služobnou rovnošatou s identifikačným číslom, služobným preukazom, odznakom služby kriminálnej polície, alebo finančnej polície.',
    },
    correct: 'A',
  },
  {
    id: 25,
    text: 'Do kategórie pyrotechnických stôp patrí:',
    options: {
      A: 'Munícia.',
      B: 'Zbrane.',
      C: 'Strelivo.',
    },
    correct: 'A',
  },
  {
    id: 26,
    text: 'Osobné údaje musia byť uchovávané vo forme, ktorá umožňuje identifikáciu dotknutej osoby:',
    options: {
      A: 'Aj dlhšie, kým je to potrebné na účel, na ktorý sa osobné údaje spracúvajú.',
      B: 'Neobmedzene.',
      C: 'Najneskôr dovtedy, kým je to potrebné na účel, na ktorý sa osobné údaje spracúvajú.',
    },
    correct: 'C',
  },
  {
    id: 27,
    text: 'Pri vstupe do objektov, kde je vstup kontrolovaný oprávnenou osobou, alebo ak je o to pri služobnom zákroku požiadaný:',
    options: {
      A: 'Príslušník Policajného zboru v civilnom odeve s identifikačným číslom preukazuje svoju príslušnosť len ústnym vyhlásením.',
      B: 'Príslušník Policajného zboru v služobnej rovnošate s identifikačným číslom alebo v civilnom odeve preukazuje svoju príslušnosť podľa okolností ústnym vyhlásením.',
      C: 'Príslušník Policajného zboru v služobnej rovnošate s identifikačným číslom preukazuje svoju príslušnosť tiež služobným preukazom a podľa okolností tiež ústnym vyhlásením.',
    },
    correct: 'C',
  },
  {
    id: 28,
    text: 'Každý:',
    options: {
      A: 'Je povinný chrániť a decimovať životné prostredie a kultúrne dedičstvo.',
      B: 'Sa môže rozhodnúť chrániť a zveľaďovať životné prostredie a kultúrne dedičstvo.',
      C: 'Je povinný chrániť a zveľaďovať životné prostredie a kultúrne dedičstvo.',
    },
    correct: 'C',
  },
  {
    id: 29,
    text: 'U osoby proti ktorej príslušník Policajného zboru vykonáva služobný zákrok:',
    options: {
      A: 'Je oprávnený sa presvedčiť, či nemá pri sebe zbraň, a ak ju má, nemôže ju odňať.',
      B: 'Nie je oprávnený sa presvedčiť, či nemá pri sebe zbraň, a ak ju má, odňať ju.',
      C: 'Je oprávnený sa presvedčiť, či nemá pri sebe zbraň, a ak ju má, odňať ju.',
    },
    correct: 'C',
  },
  {
    id: 30,
    text: 'Prevádzkovateľ a sprostredkovateľ:',
    options: {
      A: 'Je povinný zachovávať mlčanlivosť o osobných údajoch, ktoré spracúva, pričom mlčanlivosť zaniká po ukončení spracúvania osobných údajov.',
      B: 'Je povinný zachovávať mlčanlivosť o osobných údajoch, ktoré spracúva, pričom mlčanlivosť trvá aj po ukončení spracúvania osobných údajov.',
      C: 'Je povinný zachovávať mlčanlivosť o osobných údajoch, aj ktoré nespracúva, pričom mlčanlivosť trvá aj po ukončení spracúvania osobných údajov.',
    },
    correct: 'B',
  },
  {
    id: 31,
    text: 'Slovenská informačná služba je oprávnená v rozsahu svojej pôsobnosti:',
    options: {
      A: 'Požadovať len od štátnych a iných orgánov a právnických osôb poskytnutie pomoci, podkladov a informácií, ktoré môžu prispieť k objasneniu skutočností dôležitých na plnenie ich úloh.',
      B: 'Požadovať od štátnych a iných orgánov, právnických osôb a fyzických osôb poskytnutie pomoci, podkladov a informácií, ktoré môžu prispieť k objasneniu skutočností dôležitých na plnenie ich úloh.',
      C: 'Vynucovať od štátnych a iných orgánov, právnických osôb a fyzických osôb poskytnutie pomoci, podkladov a informácií, ktoré môžu prispieť k objasneniu skutočností dôležitých na plnenie ich úloh.',
    },
    correct: 'B',
  },
  {
    id: 32,
    text: 'V záujme zabezpečenia obrany a bezpečnosti štátu sa:',
    options: {
      A: 'Zakazuje vstupovať s povolením do chráneného vojenského objektu, ktorý chráni Vojenská polícia alebo dozorná služba, alebo strážna služba ozbrojených síl Slovenskej republiky.',
      B: 'Zakazuje vstupovať bez povolenia do chráneného vojenského objektu, ktorý chráni Vojenská polícia alebo dozorná služba, alebo strážna služba ozbrojených síl Slovenskej republiky.',
      C: 'Umožňuje vstupovať bez povolenia do chráneného vojenského objektu, ktorý chráni Vojenská polícia alebo dozorná služba, alebo strážna služba ozbrojených síl Slovenskej republiky.',
    },
    correct: 'B',
  },
  {
    id: 33,
    text: 'Priestupok nemožno prejednať:',
    options: {
      A: 'Ak od jeho spáchania neuplynul jeden rok.',
      B: 'Ak od jeho spáchania uplynuli dva roky.',
      C: 'Ak od jeho spáchania uplynul jeden rok.',
    },
    correct: 'B',
  },
  {
    id: 34,
    text: 'Podľa Trestného poriadku môže vykonať obhliadku:',
    options: {
      A: 'Len orgán činný v trestnom konaní.',
      B: 'Orgán činný v trestnom konaní a v konaní pred súdom súd.',
      C: 'Len orgán činný v trestnom konaní a prokurátor.',
    },
    correct: 'B',
  },
  {
    id: 35,
    text: 'Medzi základné úlohy obecnej polície nepatrí:',
    options: {
      A: 'Dbá o ochranu životného prostredia v obci.',
      B: 'Doručuje písomnosti, ak tak určí prokurátor.',
      C: 'Dbá o dodržiavanie poriadku, čistoty a hygieny v uliciach, iných verejných priestranstvách a verejne prístupných miestach.',
    },
    correct: 'B',
  },
  {
    id: 36,
    text: 'Pokarhanie nemožno uložiť spolu s:',
    options: {
      A: 'Prepadnutím veci.',
      B: 'Pokutou.',
      C: 'Zákazom činnosti.',
    },
    correct: 'B',
  },
  {
    id: 37,
    text: 'Za priestupok:',
    options: {
      A: 'Je zodpovedný ten, kto v čase jeho spáchania nedovŕšil pätnásty rok svojho veku.',
      B: 'Nie je zodpovedný ten, kto v čase jeho spáchania nedovŕšil pätnásty rok svojho veku.',
      C: 'Nie je zodpovedný ten, kto v čase jeho spáchania nedovŕšil osemnásty rok svojho veku.',
    },
    correct: 'B',
  },
  {
    id: 38,
    text: 'Za priestupok možno uložiť tieto ochranné opatrenia:',
    options: {
      A: 'Obmedzujúce opatrenie a prepadnutie veci.',
      B: 'Zákaz činnosti a obmedzujúce opatrenie.',
      C: 'Obmedzujúce opatrenie a zhabanie veci.',
    },
    correct: 'C',
  },
  {
    id: 39,
    text: 'Sprostredkovateľ a každá osoba konajúca za prevádzkovateľa alebo sprostredkovateľa:',
    options: {
      A: 'Ktorá má prístup k osobným údajom, môže spracúvať tieto osobné údaje na základe pokynov dotknutej osoby.',
      B: 'Ktorá má prístup k osobným údajom, môže spracúvať tieto osobné údaje na základe pokynov prevádzkovateľa.',
      C: 'Ktorá má prístup k osobným údajom, nemôže spracúvať tieto osobné údaje na základe pokynov prevádzkovateľa.',
    },
    correct: 'B',
  },
  {
    id: 40,
    text: 'Kriminalistická identifikácia je:',
    options: {
      A: 'Proces, ktorým sa zaisťuje relevantná stopa na mieste činu.',
      B: 'Proces, ktorým sa určuje vzťah medzi stopou a objektom, ktorý stopu reálne vytvoril.',
      C: 'Proces, ktorým sa určuje postup orgánov činných v trestnom konaní za účelom zistenia a poznania všetkých skutočností dôležitých pre trestné konanie.',
    },
    correct: 'B',
  },
]
