export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const okruh2Content = {
  hero: {
    badge: 'S',
    title: 'Okruh 2 — súkromná bezpečnosť',
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
    text: 'Skúšky odbornej spôsobilosti sú typu',
    options: {
      A: 'S, D a CID.',
      B: 'S, P a CIT.',
      C: 'S, P a CIP.',
    },
    correct: 'B',
  },
  {
    id: 2,
    text: 'Zamestnanec je povinný prevádzkovateľovi bezpečnostnej služby:',
    options: {
      A: 'Neodkladne písomne oznámiť každú zmenu skutočností rozhodujúcich na posúdenie bezúhonnosti a spoľahlivosti.',
      B: 'Neodkladne ústne oznámiť každú podstatnú zmenu skutočností rozhodujúcich na posúdenie bezúhonnosti a spoľahlivosti.',
      C: 'Najneskôr do 15 dní písomne oznámiť každú zmenu skutočností rozhodujúcich na posúdenie bezúhonnosti a spoľahlivosti.',
    },
    correct: 'A',
  },
  {
    id: 3,
    text: 'Držitelia preukazu odbornej spôsobilosti typu S sú oprávnení byť:',
    options: {
      A: 'Poverení výkonom profesionálnej cezhraničnej prepravy eurovej hotovosti cestnou dopravou.',
      B: 'Poverení výkonom odbornej prípravy a poradenstva.',
      C: 'Poverení výkonom fyzickej ochrany a pátrania.',
    },
    correct: 'C',
  },
  {
    id: 4,
    text: 'Ak platnosť preukazu odbornej spôsobilosti zanikla z dôvodu uplynutia doby na ktorú bol vydaný, alebo dňom jeho vrátenia Ministerstvu vnútra Slovenskej republiky:',
    options: {
      A: 'Na vydanie nového preukazu odbornej spôsobilosti nie je potrebné absolvovať odbornú prípravu a úspešne vykonať skúšku odbornej spôsobilosti.',
      B: 'Na vydanie nového preukazu odbornej spôsobilosti je potrebné absolvovať odbornú prípravu a úspešne vykonať skúšku odbornej spôsobilosti.',
      C: 'Na vydanie nového preukazu odbornej spôsobilosti je potrebné len úspešne vykonať skúšku odbornej spôsobilosti.',
    },
    correct: 'B',
  },
  {
    id: 5,
    text: 'Prevádzkovateľ bezpečnostnej služby poučí uchádzača o zamestnanie, že môže zamestnávať len osobu, ktorá spĺňa tieto všetky podmienky, a to:',
    options: {
      A: 'Podmienku bezúhonnosti, spoľahlivosti, zdravotnej spôsobilosti, resp. spĺňa ďalšie podmienky, ak ich zákon o súkromnej bezpečnosti vyžaduje a vyhotoví o poučení záznam, ktorý podpíše uchádzač o zamestnanie.',
      B: 'Podmienku bezúhonnosti, spoľahlivosti, zdravotnej spôsobilosti, resp. spĺňa ďalšie podmienky, ak ich zákon o súkromnej bezpečnosti vyžaduje a vyhotoví o poučení záznam, ktorý podpíše iba prevádzkovateľ.',
      C: 'Podmienku bezúhonnosti, spoľahlivosti, zdravotnej spôsobilosti a vyhotoví o poučení záznam, ktorý musí podpísať uchádzač o zamestnanie a prevádzkovateľ.',
    },
    correct: 'A',
  },
  {
    id: 6,
    text: 'Osoba ktorej zanikla platnosť preukazu odbornej spôsobilosti z dôvodu straty, odcudzenia, ak zápisy v ňom uvedené sú nečitateľné alebo je porušená jeho celistvosť alebo ak obsahuje údaje nezodpovedajúce skutočnosti musí mať od podania žiadosti o vydanie preukazu odbornej spôsobilosti do doručenia nového preukazu odbornej spôsobilosti pri sebe:',
    options: {
      A: 'Potvrdenie vystavené prevádzkovateľom.',
      B: 'Kópiu pôvodného preukazu odbornej spôsobilosti.',
      C: 'Kópiu žiadosti o vydanie preukazu odbornej spôsobilosti.',
    },
    correct: 'C',
  },
  {
    id: 7,
    text: 'Osoba poverená výkonom fyzickej ochrany a pátrania pri zásahu môže použiť:',
    options: {
      A: 'Prostriedky nútenej obrany chmaty, páky a obranné súčasti.',
      B: 'Vecné prostriedky a iný technický prostriedok na prekonanie odporu a zabránenie úteku.',
      C: 'Vecný bezpečnostný prostriedok, hmaty, chvaty, údery a kopy sebaobrany.',
    },
    correct: 'C',
  },
  {
    id: 8,
    text: 'Na posúdenie zdravotnej spôsobilosti je uchádzač o zamestnanie povinný predložiť prevádzkovateľovi bezpečnostnej služby:',
    options: {
      A: 'Po nástupe do zamestnania lekársky posudok preukazujúci jeho zdravotnú spôsobilosť, ktorý nesmie byť starší ako tri mesiace.',
      B: 'Pred nástupom do zamestnania lekársky posudok preukazujúci jeho zdravotnú spôsobilosť, ktorý nesmie byť starší ako tri mesiace.',
      C: 'Pred nástupom do zamestnania lekársky posudok preukazujúci jeho zdravotnú spôsobilosť, ktorý smie byť starší ako tri mesiace.',
    },
    correct: 'B',
  },
  {
    id: 9,
    text: 'Uchádzač o zamestnanie je povinný pred nástupom do zamestnania prevádzkovateľovi bezpečnostnej služby predložiť:',
    options: {
      A: 'Čestné vyhlásenie, že spĺňa podmienky bezúhonnosti, spoľahlivosti, zdravotnej spôsobilosti a že spĺňa ďalšie podmienky, ak ich zákon o súkromnej bezpečnosti vyžaduje.',
      B: 'Čestné vyhlásenie, že spĺňa podmienky bezúhonnosti a spoľahlivosti a lekársky posudok preukazujúci jeho zdravotnú spôsobilosť.',
      C: 'Čestné vyhlásenie, že spĺňa podmienky bezúhonnosti, spoľahlivosti a zdravotnej spôsobilosti.',
    },
    correct: 'B',
  },
  {
    id: 10,
    text: 'Pred použitím vecného bezpečnostného prostriedku je osoba poverená:',
    options: {
      A: 'Iba výkonom fyzickej ochrany vyzvať osobu, proti ktorej zasahuje, aby upustila od konania, ktorým porušuje alebo ohrozuje záujem chránený bezpečnostnou službou, s výstrahou, že bude použitý niektorý z vecných bezpečnostných prostriedkov.',
      B: 'Výkonom fyzickej ochrany alebo pátrania vyzvať osobu, proti ktorej zasahuje, aby upustila od konania, ktorým porušuje alebo ohrozuje záujem chránený bezpečnostnou službou, s výstrahou, že bude použitý niektorý z vecných bezpečnostných prostriedkov.',
      C: 'Výkonom fyzickej ochrany alebo pátrania vyzvať osobu, proti ktorej zasahuje, aby upustila od konania, iba v prípade porušenia záujmu chráneného bezpečnostnou službou, s výstrahou, že bude použitý niektorý z vecných bezpečnostných prostriedkov.',
    },
    correct: 'B',
  },
  {
    id: 11,
    text: 'Platnosť preukazu odbornej spôsobilosti zaniká z týchto všetkých dôvodov:',
    options: {
      A: 'Uplynutie doby na ktorú bol vydaný, strata, odcudzenie, rozhodnutie o jeho odňatí, ak zápisy v ňom uvedené sú nečitateľné alebo je porušená jeho celistvosť, ak obsahuje údaje nezodpovedajúce skutočnosti, ak jeho držiteľ zomrel alebo bol vyhlásený za mŕtveho alebo dňom vrátenia preukazu Ministerstvu vnútra Slovenskej republiky.',
      B: 'Uplynutie doby na ktorú bol vydaný, strata, odcudzenie, rozhodnutie o jeho zadržaní, ak zápisy v ňom uvedené sú nečitateľné alebo je porušená jeho celistvosť, ak obsahuje údaje nezodpovedajúce skutočnosti, ak jeho držiteľ dlhodobo ochorel alebo bol vyhlásený za nezvestného alebo dňom oznámenia krádeže preukazu Ministerstvu vnútra Slovenskej republiky.',
      C: 'Uplynutie doby na ktorú bol odňatý, strata, odcudzenie, rozhodnutie o jeho odňatí, ak zápisy v ňom uvedené sú slabo čitateľné alebo je porušená jeho platnosť, ak obsahuje údaje nezodpovedajúce skutočnosti, ak jeho držiteľ zomrel alebo bol vyhlásený za mŕtveho alebo dňom vrátenia preukazu Ministerstvu vnútra Slovenskej republiky.',
    },
    correct: 'A',
  },
  {
    id: 12,
    text: 'Prevádzkovateľ bezpečnostnej služby, ako aj jeho zamestnanci sú povinní zachovávať mlčanlivosť o všetkých skutočnostiach:',
    options: {
      A: 'O ktorých sa nedozvedia v súvislosti s poskytovaním bezpečnostnej služby, okrem prípadov, keď ich tejto povinnosti zbaví iba osoba, ktorá je účastníkom zmluvy o poskytovaní bezpečnostnej služby.',
      B: 'O ktorých sa dozvedia v súvislosti s poskytovaním bezpečnostnej služby, okrem prípadov, keď ich tejto povinnosti zbaví osoba, ktorá poskytuje bezpečnostnú službu, a ak ide o skutočnosti týkajúce sa inej osoby, aj táto osoba.',
      C: 'O ktorých sa dozvedia v súvislosti s poskytovaním bezpečnostnej služby, okrem prípadov, keď ich tejto povinnosti zbaví osoba, ktorá je účastníkom zmluvy o poskytovaní bezpečnostnej služby, a ak ide o skutočnosti týkajúce sa inej osoby, aj táto osoba.',
    },
    correct: 'C',
  },
  {
    id: 13,
    text: 'Fyzickú ochranu alebo pátranie môže vykonávať len osoba, ktorá spĺňa tieto všetky podmienky:',
    options: {
      A: 'Dosiahla vek 20 rokov, je spôsobilá na právne úkony, je bezúhonná, je spoľahlivá, je zdravotne spôsobilá a je držiteľom preukazu odbornej spôsobilosti.',
      B: 'Dosiahla vek 18 rokov, je spôsobilá na právne úkony v plnom rozsahu, je bezúhonná, je spoľahlivá, je zdravotne spôsobilá a je držiteľom preukazu odbornej spôsobilosti.',
      C: 'Dosiahla vek 18 rokov, je spôsobilá na právne úkony, je bezúhonná, je spoľahlivá, je zdravotne spôsobilá a spĺňa podmienku ustanoveného vzdelania.',
    },
    correct: 'B',
  },
  {
    id: 14,
    text: 'Uchádzačovi, ktorý úspešne vykonal skúšku odbornej spôsobilosti a nebol mu vydaný preukaz odbornej spôsobilosti z dôvodu nesplnenia podmienky bezúhonnosti a spoľahlivosti:',
    options: {
      A: 'Ministerstvo vnútra Slovenskej republiky vydá preukaz odbornej spôsobilosti iba na základe písomnej žiadosti po preukázaní splnenia podmienky bezúhonnosti a spoľahlivosti s platnosťou na dobu, ktorá nesmie byť dlhšia ako desať rokov od úspešného vykonania skúšky.',
      B: 'Ministerstvo vnútra Slovenskej republiky vydá preukaz odbornej spôsobilosti iba na základe písomnej žiadosti po preukázaní splnenia podmienky bezúhonnosti a spoľahlivosti s platnosťou na dobu, ktorá nesmie byť dlhšia ako desať rokov od vydania preukazu odbornej spôsobilosti.',
      C: 'Ministerstvo vnútra Slovenskej republiky vydá preukaz odbornej spôsobilosti iba na základe preukázania splnenia podmienky bezúhonnosti a spoľahlivosti s platnosťou na dobu, ktorá nesmie byť dlhšia ako desať rokov od úspešného vykonania skúšky.',
    },
    correct: 'B',
  },
  {
    id: 15,
    text: 'Na výkone fyzickej ochrany sa môže po absolvovaní odbornej prípravy zúčastňovať aj osoba, ktorá nie je držiteľom preukazu odbornej spôsobilosti, pričom:',
    options: {
      A: 'Výkon fyzickej ochrany tejto osoby môže byť vykonávaný podľa vopred vypracovaného písomného plánu, osoba musí byť pod stálym priamym dohľadom osoby, ktorá je držiteľom preukazu odbornej spôsobilosti, a výkon fyzickej ochrany môže byť vykonávaný iba u jedného prevádzkovateľa bezpečnostnej služby a najdlhšie po dobu piatich mesiacov.',
      B: 'Výkon fyzickej ochrany tejto osoby musí byť vykonávaný podľa vopred vypracovaného písomného plánu, osoba musí byť pod stálym priamym dohľadom osoby, ktorá je držiteľom preukazu odbornej spôsobilosti, a výkon fyzickej ochrany môže byť vykonávaný iba u jedného prevádzkovateľa bezpečnostnej služby a najdlhšie po dobu troch mesiacov.',
      C: 'Výkon fyzickej ochrany tejto osoby je spravidla vykonávaný podľa vopred vypracovaného písomného plánu, osoba musí byť pod stálym priamym dohľadom osoby, ktorá je držiteľom preukazu odbornej spôsobilosti, a výkon fyzickej ochrany môže byť vykonávaný iba u jedného prevádzkovateľa bezpečnostnej služby a najdlhšie po dobu šiestich mesiacov.',
    },
    correct: 'B',
  },
  {
    id: 16,
    text: 'Na posudzovanie zdravotnej spôsobilosti zamestnanca je zamestnanec povinný prevádzkovateľovi bezpečnostnej služby predložiť:',
    options: {
      A: 'Každý rok lekársky posudok preukazujúci jeho zdravotnú spôsobilosť, ktorý nesmie byť starší ako tri mesiace a neodkladne hlásiť prevádzkovateľovi podstatnú zmenu skutočností rozhodujúcich na posúdenie zdravotnej spôsobilosti.',
      B: 'Každé dva roky lekársky posudok preukazujúci jeho zdravotnú spôsobilosť, ktorý nesmie byť starší ako tri mesiace a neodkladne hlásiť prevádzkovateľovi každú zmenu skutočností rozhodujúcich na posúdenie zdravotnej spôsobilosti.',
      C: 'Každé dva roky lekársky posudok preukazujúci jeho zdravotnú spôsobilosť, ktorý nesmie byť starší ako tri mesiace a do 15 dní hlásiť prevádzkovateľovi každú zmenu skutočností rozhodujúcich na posúdenie zdravotnej spôsobilosti.',
    },
    correct: 'B',
  },
  {
    id: 17,
    text: 'Fyzickú ochranu, pátranie alebo odbornú prípravu a poradenstvo nesmie vykonávať osoba, ktorá:',
    options: {
      A: 'Vzhľadom na chorobu, úraz alebo inú dočasnú pracovnú neschopnosť neposkytuje aspoň čiastočnú záruku, že bude plniť všetky svoje povinnosti a počínať si tak, aby neohrozila okolie.',
      B: 'Vzhľadom na chorobu alebo ovplyvnenie po požití liekov alebo iných látok znižujúcich jej schopnosť konať, alebo z iných podobných príčin neposkytuje záruku, že bude riadne plniť všetky svoje povinnosti a počínať si tak, aby neohrozila okolie.',
      C: 'Vzhľadom na chorobu alebo len po požití liekov, alebo z iných podobných príčin poskytuje záruku, že bude riadne plniť všetky svoje povinnosti a počínať si tak, aby neohrozila okolie.',
    },
    correct: 'B',
  },
  {
    id: 18,
    text: 'Na zamestnanca prevádzkovateľa bezpečnostnej služby, ktorý sa nezúčastňuje na výkone bezpečnostnej služby sa podmienky ustanovené zákonom o súkromnej bezpečnosti:',
    options: {
      A: 'Nevzťahujú len čiastočne.',
      B: 'Nevzťahujú.',
      C: 'Vzťahujú.',
    },
    correct: 'B',
  },
  {
    id: 19,
    text: 'Osoba poverená výkonom fyzickej ochrany, pátrania alebo odbornej prípravy a poradenstva:',
    options: {
      A: 'Je pri plnení pracovných úloh povinná mať preukaz odbornej spôsobilosti pri sebe a na požiadanie ho predložiť Ministerstvu vnútra Slovenskej republiky pri výkone štátneho dozoru, krajskému riaditeľstvu Policajného zboru pri výkone kontroly alebo Ministerstvu vnútra Slovenskej republiky, krajskému riaditeľstvu Policajného zboru a príslušníkovi Policajného zboru pri výkone kontroly činnosti.',
      B: 'Nie je povinná pri plnení pracovných úloh mať preukaz odbornej spôsobilosti pri sebe a na požiadanie ho predložiť Ministerstvu vnútra Slovenskej republiky pri výkone štátneho dozoru, krajskému riaditeľstvu Policajného zboru pri výkone kontroly alebo Ministerstvu vnútra Slovenskej republiky, krajskému riaditeľstvu Policajného zboru a príslušníkovi Policajného zboru pri výkone kontroly činnosti, túto povinnosť môže splniť dodatočne.',
      C: 'Je pri plnení pracovných úloh povinná mať preukaz odbornej spôsobilosti na sebe na ľavej strane odevu v oblasti pŕs a na požiadanie ho predložiť Ministerstvu vnútra Slovenskej republiky pri výkone štátneho dozoru, krajskému riaditeľstvu Policajného zboru pri výkone kontroly alebo Ministerstvu vnútra Slovenskej republiky, krajskému riaditeľstvu Policajného zboru a príslušníkovi Policajného zboru pri výkone kontroly činnosti.',
    },
    correct: 'A',
  },
  {
    id: 20,
    text: 'Prevádzkovateľ pri prevádzkovaní bezpečnostnej služby, ako aj jeho zamestnanci sú vždy:',
    options: {
      A: 'Povinní dbať na česť, vážnosť a dôstojnosť osoby a nepripustiť, aby v súvislosti s ich činnosťou vznikla osobe bezdôvodná ujma, a sú povinní správať sa tak, aby zásah do jej práv a slobôd prekročil mieru nevyhnutnú na dosiahnutie účelu sledovaného ich činnosťou.',
      B: 'Povinní dbať na česť, vážnosť a dôstojnosť osoby aj na svoju vlastnú a nepripustiť, aby v súvislosti s ich činnosťou vznikla osobe akákoľvek ujma, a sú povinní správať sa tak, aby zásah do jej práv a slobôd neprekročil mieru nevyhnutnú na dosiahnutie účelu sledovaného ich činnosťou.',
      C: 'Povinní dbať na česť, vážnosť a dôstojnosť osoby aj na svoju vlastnú a nepripustiť, aby v súvislosti s ich činnosťou vznikla osobe bezdôvodná ujma, a sú povinní správať sa tak, aby zásah do jej práv a slobôd neprekročil mieru nevyhnutnú na dosiahnutie účelu sledovaného ich činnosťou.',
    },
    correct: 'C',
  },
  {
    id: 21,
    text: 'Skúšku odbornej spôsobilosti typu S ani odbornú prípravu nemusí vykonať osoba, ktorá:',
    options: {
      A: 'Získala vysokoškolské vzdelanie prvého stupňa v študijnom odbore právo a vykonávala najmenej šesť rokov bezpečnostnú prax v ozbrojenom bezpečnostnom zbore alebo bola príslušníkom ozbrojeného bezpečnostného zboru najmenej 10 rokov.',
      B: 'Získala vzdelanie v študijnom odbore v oblasti bezpečnostných služieb a vykonávala najmenej tri roky bezpečnostnú prax v ozbrojenom bezpečnostnom zbore alebo bola príslušníkom ozbrojeného bezpečnostného zboru najviac 15 rokov.',
      C: 'Získala vzdelanie v študijnom odbore v oblasti bezpečnostných služieb a vykonávala najmenej päť rokov bezpečnostnú prax v ozbrojenom bezpečnostnom zbore alebo bola príslušníkom ozbrojeného bezpečnostného zboru najmenej 15 rokov.',
    },
    correct: 'C',
  },
  {
    id: 22,
    text: 'Prevádzkovateľ bezpečnostnej služby, ako aj jeho zamestnanci sú povinní zachovávať mlčanlivosť:',
    options: {
      A: 'Aj po skončení pracovnoprávneho vzťahu najdlhšie do ukončenia zmluvy o poskytovaní bezpečnostnej služby.',
      B: 'Do ukončenia prevádzkovania bezpečnostnej služby alebo do skončenia pracovnoprávneho vzťahu.',
      C: 'Aj po skončení pracovnoprávneho vzťahu alebo ukončení prevádzkovania bezpečnostnej služby.',
    },
    correct: 'C',
  },
  {
    id: 23,
    text: 'Odborná spôsobilosť alebo jej časť získaná v členskom štáte Európskej únie, v inom zmluvnom štáte dohody o Európskom hospodárskom priestore alebo vo Švajčiarskej konfederácii sa:',
    options: {
      A: 'Uzná ako odborná spôsobilosť získaná podľa zákona o súkromnej bezpečnosti, aj keď žiadateľ nedoloží doklady o získaní odbornej spôsobilosti zodpovedajúce dokladom podľa zákona o súkromnej bezpečnosti a ich preklad do štátneho jazyka vyhotovený prekladateľom alebo tlmočníkom.',
      B: 'Uzná ako odborná spôsobilosť získaná podľa zákona o súkromnej bezpečnosti, len ak žiadateľ doloží doklady o získaní odbornej spôsobilosti zodpovedajúce dokladom podľa zákona o súkromnej bezpečnosti a ich preklad do štátneho jazyka vyhotovený prekladateľom alebo tlmočníkom.',
      C: 'Uzná ako odborná spôsobilosť získaná podľa zákona o súkromnej bezpečnosti, aj keď žiadateľ doloží doklady o získaní odbornej spôsobilosti dokladom v nesúlade so zákonom o súkromnej bezpečnosti bez ich prekladu do štátneho jazyka vyhotovený prekladateľom alebo tlmočníkom.',
    },
    correct: 'B',
  },
  {
    id: 24,
    text: 'Osoba poverená výkonom fyzickej ochrany alebo pátrania môže vykonať zásah, len za splnenia týchto všetkých podmienok:',
    options: {
      A: 'Ak je porušovaný alebo ohrozovaný záujem chránený bezpečnostnou službou a len v súlade so zákonom o súkromnej bezpečnosti alebo inými všeobecne záväznými právnymi predpismi.',
      B: 'Ak je len porušovaný záujem chránený bezpečnostnou službou a v súlade so zákonom o súkromnej bezpečnosti, Ústavou Slovenskej republiky, ústavnými zákonmi a medzinárodnými zmluvami, ktorými je Slovenská republika viazaná.',
      C: 'Ak je len ohrozovaný záujem chránený bezpečnostnou službou a v súlade so zákonom o súkromnej bezpečnosti.',
    },
    correct: 'A',
  },
  {
    id: 25,
    text: 'Odbornú prípravu na skúšku odbornej spôsobilosti typu S alebo typu P nemusí vykonať osoba, ktorá:',
    options: {
      A: 'Má úplné stredné všeobecné odborné vzdelanie.',
      B: 'Má úplné stredné odborné vzdelanie v oblasti bezpečnostných služieb.',
      C: 'Získala vysokoškolské vzdelanie aspoň prvého stupňa v študijnom odbore právo.',
    },
    correct: 'B',
  },
]
