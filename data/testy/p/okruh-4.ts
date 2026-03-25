export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const okruh4PContent = {
  hero: {
    badge: 'P',
    title: 'Cvičné otázky — Okruh 4',
    subtitle: 'Preukaz typu P · Okruh 4',
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
    text: 'Medzi formy strážnej služby nepatrí:',
    options: {
      A: 'Vypracúvanie plánu ochrany.',
      B: 'Ochrana majetku na inom než verejne prístupnom mieste.',
      C: 'Monitorovanie činnosti osoby v uzavretom priestore alebo na uzavretom mieste.',
    },
    correct: 'C',
  },
  {
    id: 2,
    text: 'Odbornú prípravu na skúšku odbornej spôsobilosti typu S alebo typu P nemusí vykonať osoba, ktorá:',
    options: {
      A: 'Má úplné stredné odborné vzdelanie v oblasti bezpečnostných služieb.',
      B: 'Získala vysokoškolské vzdelanie aspoň prvého stupňa v študijnom odbore právo.',
      C: 'Má úplné stredné všeobecné odborné vzdelanie.',
    },
    correct: 'A',
  },
  {
    id: 3,
    text: 'Dokladom o vzdelaní sú tieto všetky listiny:',
    options: {
      A: 'Diplom o ukončení vysokoškolského štúdia a vysvedčenie o ukončení štúdia.',
      B: 'Diplom o ukončení vysokoškolského štúdia, vysvedčenie o ukončení štúdia, doklad o ukončení odbornej prípravy alebo osvedčenie o vykonaní kvalifikačnej skúšky.',
      C: 'Diplom o ukončení štúdia a osvedčenie o vykonaní kvalifikačnej skúšky.',
    },
    correct: 'B',
  },
  {
    id: 4,
    text: 'Osoba poverená výkonom fyzickej ochrany a pátrania pri zásahu môže použiť:',
    options: {
      A: 'Vecný bezpečnostný prostriedok, hmaty, chvaty, údery a kopy sebaobrany.',
      B: 'Prostriedky nútenej obrany chmaty, páky a obranné súčasti.',
      C: 'Vecné prostriedky a iný technický prostriedok na prekonanie odporu a zabránenie úteku.',
    },
    correct: 'A',
  },
  {
    id: 5,
    text: 'Uchádzačovi, ktorý úspešne vykonal skúšku odbornej spôsobilosti a nebol mu vydaný preukaz odbornej spôsobilosti z dôvodu nesplnenia podmienky bezúhonnosti a spoľahlivosti:',
    options: {
      A: 'Ministerstvo vnútra Slovenskej republiky vydá preukaz odbornej spôsobilosti iba na základe písomnej žiadosti po preukázaní splnenia podmienky bezúhonnosti a spoľahlivosti s platnosťou na dobu, ktorá nesmie byť dlhšia ako desať rokov od úspešného vykonania skúšky.',
      B: 'Ministerstvo vnútra Slovenskej republiky vydá preukaz odbornej spôsobilosti iba na základe preukázania splnenia podmienky bezúhonnosti a spoľahlivosti s platnosťou na dobu, ktorá nesmie byť dlhšia ako desať rokov od úspešného vykonania skúšky.',
      C: 'Ministerstvo vnútra Slovenskej republiky vydá preukaz odbornej spôsobilosti iba na základe písomnej žiadosti po preukázaní splnenia podmienky bezúhonnosti a spoľahlivosti s platnosťou na dobu, ktorá nesmie byť dlhšia ako desať rokov od vydania preukazu odbornej spôsobilosti.',
    },
    correct: 'A',
  },
  {
    id: 6,
    text: 'Osoba poverená výkonom fyzickej ochrany alebo pátrania v objekte osobitnej dôležitosti musí preukázať bezpečnostnú prax v dĺžke najmenej:',
    options: {
      A: 'Jedného roku.',
      B: 'Dvoch rokov.',
      C: 'Troch rokov.',
    },
    correct: 'B',
  },
  {
    id: 7,
    text: 'Prevádzkovateľ bezpečnostnej služby poučí uchádzača o zamestnanie, že môže zamestnávať len osobu, ktorá spĺňa tieto všetky podmienky, a to:',
    options: {
      A: 'Podmienku bezúhonnosti, spoľahlivosti, zdravotnej spôsobilosti, resp. spĺňa ďalšie podmienky, ak ich zákon o súkromnej bezpečnosti vyžaduje a vyhotoví o poučení záznam, ktorý podpíše uchádzač o zamestnanie.',
      B: 'Podmienku bezúhonnosti, spoľahlivosti, zdravotnej spôsobilosti, resp. spĺňa ďalšie podmienky, ak ich zákon o súkromnej bezpečnosti vyžaduje a vyhotoví o poučení záznam, ktorý podpíše iba prevádzkovateľ.',
      C: 'Podmienku bezúhonnosti, spoľahlivosti, zdravotnej spôsobilosti a vyhotoví o poučení záznam, ktorý musí podpísať uchádzač o zamestnanie a prevádzkovateľ.',
    },
    correct: 'A',
  },
  {
    id: 8,
    text: 'V súvislosti so zásahom podľa zákona o súkromnej bezpečnosti je osoba poverená výkonom fyzickej ochrany alebo pátrania povinná ohlásiť prevádzkovateľovi bezpečnostnej služby alebo osobe ním určenej:',
    options: {
      A: 'Každý prípad smrti a každý prípad zranenia súvisiaceho so zásahom, a len každé porušenie záujmu chráneného bezpečnostnou službou.',
      B: 'Každý prípad smrti a každý prípad zranenia súvisiaceho so zásahom, a len každé závažné ohrozenie záujmu chráneného bezpečnostnou službou.',
      C: 'Každý prípad smrti a každý prípad zranenia súvisiaceho so zásahom, ako aj každé porušenie alebo závažné ohrozenie záujmu chráneného bezpečnostnou službou.',
    },
    correct: 'C',
  },
  {
    id: 9,
    text: 'Uchádzač o zamestnanie je povinný pred nástupom do zamestnania prevádzkovateľovi bezpečnostnej služby predložiť:',
    options: {
      A: 'Čestné vyhlásenie, že spĺňa podmienky bezúhonnosti, spoľahlivosti a zdravotnej spôsobilosti.',
      B: 'Čestné vyhlásenie, že spĺňa podmienky bezúhonnosti a spoľahlivosti a lekársky posudok preukazujúci jeho zdravotnú spôsobilosť.',
      C: 'Čestné vyhlásenie, že spĺňa podmienky bezúhonnosti, spoľahlivosti, zdravotnej spôsobilosti a že spĺňa ďalšie podmienky, ak ich zákon o súkromnej bezpečnosti vyžaduje.',
    },
    correct: 'B',
  },
  {
    id: 10,
    text: 'Na posudzovanie zdravotnej spôsobilosti zamestnanca je zamestnanec povinný prevádzkovateľovi bezpečnostnej služby predložiť:',
    options: {
      A: 'Každý rok lekársky posudok preukazujúci jeho zdravotnú spôsobilosť, ktorý nesmie byť starší ako tri mesiace a neodkladne hlásiť prevádzkovateľovi podstatnú zmenu skutočností rozhodujúcich na posúdenie zdravotnej spôsobilosti.',
      B: 'Každé dva roky lekársky posudok preukazujúci jeho zdravotnú spôsobilosť, ktorý nesmie byť starší ako tri mesiace a neodkladne hlásiť prevádzkovateľovi každú zmenu skutočností rozhodujúcich na posúdenie zdravotnej spôsobilosti.',
      C: 'Každé dva roky lekársky posudok preukazujúci jeho zdravotnú spôsobilosť, ktorý nesmie byť starší ako tri mesiace a do 15 dní hlásiť prevádzkovateľovi každú zmenu skutočností rozhodujúcich na posúdenie zdravotnej spôsobilosti.',
    },
    correct: 'B',
  },
  {
    id: 11,
    text: 'Osoby poverené výkonom fyzickej ochrany podľa zákona o súkromnej bezpečnosti nie sú oprávnené:',
    options: {
      A: 'Zaistiť osobu, u ktorej sa pri vstupe do chráneného objektu zistilo, že bolo po nej vyhlásené policajné pátranie.',
      B: 'Zaznamenávať technickými prostriedkami vstup alebo výstup osôb a dopravných prostriedkov do chráneného objektu alebo na chránené miesto alebo z chráneného objektu alebo z chráneného miesta.',
      C: 'Vyviesť nepovolanú osobu z chráneného objektu alebo z chráneného miesta.',
    },
    correct: 'A',
  },
  {
    id: 12,
    text: 'Držitelia preukazu odbornej spôsobilosti typu S sú oprávnení byť:',
    options: {
      A: 'Poverení výkonom profesionálnej cezhraničnej prepravy eurovej hotovosti cestnou dopravou.',
      B: 'Poverení výkonom odbornej prípravy a poradenstva.',
      C: 'Poverení výkonom fyzickej ochrany a pátrania.',
    },
    correct: 'C',
  },
  {
    id: 13,
    text: 'Na výkone fyzickej ochrany sa môže po absolvovaní odbornej prípravy zúčastňovať aj osoba, ktorá nie je držiteľom preukazu odbornej spôsobilosti, pričom:',
    options: {
      A: 'Výkon fyzickej ochrany tejto osoby je spravidla vykonávaný podľa vopred vypracovaného písomného plánu, osoba musí byť pod stálym priamym dohľadom osoby, ktorá je držiteľom preukazu odbornej spôsobilosti, a výkon fyzickej ochrany môže byť vykonávaný iba u jedného prevádzkovateľa bezpečnostnej služby a najdlhšie po dobu šiestich mesiacov.',
      B: 'Výkon fyzickej ochrany tejto osoby musí byť vykonávaný podľa vopred vypracovaného písomného plánu, osoba musí byť pod stálym priamym dohľadom osoby, ktorá je držiteľom preukazu odbornej spôsobilosti, a výkon fyzickej ochrany môže byť vykonávaný iba u jedného prevádzkovateľa bezpečnostnej služby a najdlhšie po dobu troch mesiacov.',
      C: 'Výkon fyzickej ochrany tejto osoby môže byť vykonávaný podľa vopred vypracovaného písomného plánu, osoba musí byť pod stálym priamym dohľadom osoby, ktorá je držiteľom preukazu odbornej spôsobilosti, a výkon fyzickej ochrany môže byť vykonávaný iba u jedného prevádzkovateľa bezpečnostnej služby a najdlhšie po dobu piatich mesiacov.',
    },
    correct: 'B',
  },
  {
    id: 14,
    text: 'Fyzickú ochranu alebo pátranie môže vykonávať len osoba, ktorá spĺňa tieto všetky podmienky:',
    options: {
      A: 'Dosiahla vek 18 rokov, je spôsobilá na právne úkony v plnom rozsahu, je bezúhonná, je spoľahlivá, je zdravotne spôsobilá a je držiteľom preukazu odbornej spôsobilosti.',
      B: 'Dosiahla vek 18 rokov, je spôsobilá na právne úkony, je bezúhonná, je spoľahlivá, je zdravotne spôsobilá a spĺňa podmienku ustanoveného vzdelania.',
      C: 'Dosiahla vek 20 rokov, je spôsobilá na právne úkony, je bezúhonná, je spoľahlivá, je zdravotne spôsobilá a je držiteľom preukazu odbornej spôsobilosti.',
    },
    correct: 'A',
  },
  {
    id: 15,
    text: 'Identifikačný preukaz musí obsahovať tieto všetky povinné náležitosti, a to:',
    options: {
      A: 'Obchodné meno prevádzkovateľa; druh bezpečnostnej služby; číslo akreditácie na poskytovanie bezpečnostnej služby poskytovateľa; meno, priezvisko, titul a fotografiu držiteľa; číslo identifikačného preukazu; odtlačok pečate a podpis nositeľa preukazu.',
      B: 'Obchodný názov objednávateľa; typ bezpečnostnej služby; číslo licencie na prevádzkovanie bezpečnostnej služby prevádzkovateľa; meno, priezvisko, titul držiteľa; číslo identifikačného preukazu; odtlačok pečiatky a podpis prevádzkovateľa.',
      C: 'Obchodné meno prevádzkovateľa; druh bezpečnostnej služby; číslo licencie na prevádzkovanie bezpečnostnej služby prevádzkovateľa; meno, priezvisko, titul a fotografiu držiteľa; číslo identifikačného preukazu; odtlačok pečiatky a podpis prevádzkovateľa.',
    },
    correct: 'C',
  },
  {
    id: 16,
    text: 'Skúšku odbornej spôsobilosti typu S ani odbornú prípravu nemusí vykonať osoba, ktorá:',
    options: {
      A: 'Získala vzdelanie v študijnom odbore v oblasti bezpečnostných služieb a vykonávala najmenej tri roky bezpečnostnú prax v ozbrojenom bezpečnostnom zbore alebo bola príslušníkom ozbrojeného bezpečnostného zboru najviac 15 rokov.',
      B: 'Získala vzdelanie v študijnom odbore v oblasti bezpečnostných služieb a vykonávala najmenej päť rokov bezpečnostnú prax v ozbrojenom bezpečnostnom zbore alebo bola príslušníkom ozbrojeného bezpečnostného zboru najmenej 15 rokov.',
      C: 'Získala vysokoškolské vzdelanie prvého stupňa v študijnom odbore právo a vykonávala najmenej šesť rokov bezpečnostnú prax v ozbrojenom bezpečnostnom zbore alebo bola príslušníkom ozbrojeného bezpečnostného zboru najmenej 10 rokov.',
    },
    correct: 'B',
  },
  {
    id: 17,
    text: 'Za bezúhonnú osobu sa na účely zákona o súkromnej bezpečnosti:',
    options: {
      A: 'Považuje aj ten, komu súd alebo správny orgán uložil zákaz činnosti, ktorá súvisí s činnosťou alebo ktorá je obsahom pracovnoprávneho vzťahu podľa zákona o súkromnej bezpečnosti, do skončenia výkonu zákazu činnosti.',
      B: 'Nepovažuje ani ten, komu súd alebo správny orgán uložil zákaz činnosti, ktorá súvisí s činnosťou alebo ktorá je obsahom pracovnoprávneho vzťahu podľa zákona o súkromnej bezpečnosti, do skončenia výkonu zákazu činnosti.',
      C: 'Nepovažuje ani ten, komu súd alebo prokuratúra uložili zákaz činnosti, ktorá súvisí s činnosťou alebo ktorá je obsahom pracovnoprávneho vzťahu podľa zákona o súkromnej bezpečnosti, do skončenia výkonu zákazu činnosti.',
    },
    correct: 'B',
  },
  {
    id: 18,
    text: 'Platnosť preukazu odbornej spôsobilosti zaniká z týchto všetkých dôvodov:',
    options: {
      A: 'Uplynutie doby na ktorú bol vydaný, strata, odcudzenie, rozhodnutie o jeho odňatí, ak zápisy v ňom uvedené sú nečitateľné alebo je porušená jeho celistvosť, ak obsahuje údaje nezodpovedajúce skutočnosti, ak jeho držiteľ zomrel alebo bol vyhlásený za mŕtveho alebo dňom vrátenia preukazu Ministerstvu vnútra Slovenskej republiky.',
      B: 'Uplynutie doby na ktorú bol vydaný, strata, odcudzenie, rozhodnutie o jeho zadržaní, ak zápisy v ňom uvedené sú nečitateľné alebo je porušená jeho celistvosť, ak obsahuje údaje nezodpovedajúce skutočnosti, ak jeho držiteľ dlhodobo ochorel alebo bol vyhlásený za nezvestného alebo dňom oznámenia krádeže preukazu Ministerstvu vnútra Slovenskej republiky.',
      C: 'Uplynutie doby na ktorú bol odňatý, strata, odcudzenie, rozhodnutie o jeho odňatí, ak zápisy v ňom uvedené sú slabo čitateľné alebo je porušená jeho platnosť, ak obsahuje údaje nezodpovedajúce skutočnosti, ak jeho držiteľ zomrel alebo bol vyhlásený za mŕtveho alebo dňom vrátenia preukazu Ministerstvu vnútra Slovenskej republiky.',
    },
    correct: 'A',
  },
  {
    id: 19,
    text: 'Bezpečnostnou praxou sa rozumejú tieto činnosti:',
    options: {
      A: 'Fyzická ochrana, pátranie, odborná príprava a poradenstvo na tieto činnosti.',
      B: 'Fyzická ochrana, pátranie, poradenstvo na tieto činnosti a vlastná ochrana.',
      C: 'Fyzická ochrana, pátranie, odborná príprava na tieto činnosti a technická služba.',
    },
    correct: 'A',
  },
  {
    id: 20,
    text: 'Za bezúhonnú osobu sa na účely zákona o súkromnej bezpečnosti:',
    options: {
      A: 'Okrem osoby, na ktorú sa hľadí, ako by nebola odsúdená, nepovažuje ten, kto bol neprávoplatne odsúdený za úmyselný trestný čin alebo za iný trestný čin, za ktorý mu bol uložený nepodmienečný trest odňatia slobody v dĺžke viac ako 12 mesiacov.',
      B: 'Okrem osoby, na ktorú sa hľadí, ako by nebola odsúdená, nepovažuje ten, kto bol právoplatne odsúdený za úmyselný trestný čin alebo za iný trestný čin, za ktorý mu bol uložený nepodmienečný trest odňatia slobody v dĺžke do 12 mesiacov.',
      C: 'Okrem osoby, na ktorú sa hľadí, ako by nebola odsúdená, nepovažuje ten, kto bol právoplatne odsúdený za úmyselný trestný čin alebo za iný trestný čin, za ktorý mu bol uložený nepodmienečný trest odňatia slobody v dĺžke viac ako 12 mesiacov.',
    },
    correct: 'C',
  },
  {
    id: 21,
    text: 'Iným technickým prostriedkom je podľa zákona o súkromnej bezpečnosti:',
    options: {
      A: 'Stroj alebo prístroj, ktorý sa používa iba na plnenie úloh obchôdzky, stráženia, alebo odbornej prípravy a poradenstva.',
      B: 'Stroj alebo prístroj, ktorý sa používa iba na plnenie úloh odbornej prípravy a poradenstva, fyzickej ochrany alebo pátrania.',
      C: 'Stroj alebo prístroj, ktorý sa používa iba na plnenie úloh fyzickej ochrany, technickej služby alebo odbornej prípravy a poradenstva.',
    },
    correct: 'B',
  },
  {
    id: 22,
    text: 'Skúšky odbornej spôsobilosti sú typu:',
    options: {
      A: 'S, P a CIT.',
      B: 'S, D a CID.',
      C: 'S, P a CIP.',
    },
    correct: 'A',
  },
  {
    id: 23,
    text: 'Osoby poverené výkonom fyzickej ochrany podľa zákona o súkromnej bezpečnosti sú oprávnené:',
    options: {
      A: 'Presvedčiť sa zrakom, hmatom alebo technickými prostriedkami, či ten, kto vstupuje do chráneného objektu alebo na chránené miesto alebo z neho vystupuje, nemá pri sebe alebo na sebe predmety pochádzajúce z protiprávnej činnosti súvisiacej s chráneným objektom, chráneným miestom alebo chránenou osobou alebo nemá pri sebe alebo na sebe predmety, ktorými by mohol spáchať protiprávnu činnosť, a tieto mu odobrať.',
      B: 'Presvedčiť sa zrakom, hmatom alebo technickými prostriedkami, či ten, kto vstupuje do chráneného objektu alebo na chránené miesto alebo z neho vystupuje, nemá pri sebe alebo na sebe predmety pochádzajúce z protiprávnej činnosti súvisiacej s chráneným objektom, chráneným miestom alebo chránenou osobou alebo nemá pri sebe alebo na sebe predmety, ktorými by nemohol spáchať protiprávnu činnosť, a tieto mu zadržať.',
      C: 'Presvedčiť sa zrakom, hmatom alebo technickými prostriedkami, či ten, kto vstupuje do chráneného objektu alebo na chráneného miesto alebo z neho vystupuje, nemá len pri sebe predmety pochádzajúce z protiprávnej činnosti súvisiacej s chráneným objektom, chráneným miestom alebo chránenou osobou alebo nemá len na sebe predmety, ktorými by mohol spáchať protiprávnu činnosť, a tieto mu odňať.',
    },
    correct: 'A',
  },
  {
    id: 24,
    text: 'Prevádzkovateľ bezpečnostnej služby, ako aj jeho zamestnanci sú povinní zachovávať mlčanlivosť:',
    options: {
      A: 'Do ukončenia prevádzkovania bezpečnostnej služby alebo do skončenia pracovnoprávneho vzťahu.',
      B: 'Aj po skončení pracovnoprávneho vzťahu alebo ukončení prevádzkovania bezpečnostnej služby.',
      C: 'Aj po skončení pracovnoprávneho vzťahu najdlhšie do ukončenia zmluvy o poskytovaní bezpečnostnej služby.',
    },
    correct: 'B',
  },
  {
    id: 25,
    text: 'Ak platnosť preukazu odbornej spôsobilosti zanikla z dôvodu uplynutia doby na ktorú bol vydaný, alebo dňom jeho vrátenia Ministerstvu vnútra Slovenskej republiky:',
    options: {
      A: 'Na vydanie nového preukazu odbornej spôsobilosti je potrebné len úspešne vykonať skúšku odbornej spôsobilosti.',
      B: 'Na vydanie nového preukazu odbornej spôsobilosti je potrebné absolvovať odbornú prípravu a úspešne vykonať skúšku odbornej spôsobilosti.',
      C: 'Na vydanie nového preukazu odbornej spôsobilosti nie je potrebné absolvovať odbornú prípravu a úspešne vykonať skúšku odbornej spôsobilosti.',
    },
    correct: 'B',
  },
  {
    id: 26,
    text: 'Verejne prístupným miestom podľa zákona o súkromnej bezpečnosti je:',
    options: {
      A: 'Každé miesto, kde vstup osobám nie je zakázaný.',
      B: 'Každé miesto, kde vstup osobám je zakázaný s výnimkou osôb, ktorým je umožnený na základe vydaného povolenia.',
      C: 'Každé miesto, kde vstup osobám je zakázaný po nesplnení určených podmienok majiteľom alebo správcom takéhoto miesta.',
    },
    correct: 'A',
  },
  {
    id: 27,
    text: 'Medzi formy detektívnej služby nepatrí:',
    options: {
      A: 'Hľadanie osoby.',
      B: 'Monitorovanie pohybu a konania osoby v chránenom objekte, na chránenom mieste alebo v ich okolí.',
      C: 'Získavanie údajov o protiprávnom konaní ohrozujúcom obchodné tajomstvo.',
    },
    correct: 'B',
  },
  {
    id: 28,
    text: 'Zákon o súkromnej bezpečnosti v znení neskorších predpisov sa nevzťahuje na prevádzkovanie činností, ktoré sú bezpečnostnou službou, ak ich vykonávajú pre vlastnú potrebu tieto subjekty:',
    options: {
      A: 'Múzeá a galérie, školské samosprávy a iné školské inštitúcie, prevádzkovatelia športovísk a športových zariadení a zariadení slúžiacich na iný verejno-prospešný účel.',
      B: 'Výrobné prevádzky významných zahraničných investorov, prevádzkovatelia systémov verejného parkovania, prevádzkovatelia vodárenských stavieb a zariadení, prevádzkovatelia zariadení, ktoré sú súčasťou hospodárskej mobilizácie.',
      C: 'Štátny orgán, Národná banka Slovenska, ozbrojené sily Slovenskej republiky, ozbrojený bezpečnostný zbor, ozbrojený zbor, záchranný zbor alebo stráž zriadená zákonom, diplomatická misia alebo konzulárny úrad, alebo orgán územnej samosprávy pri plnení úloh verejnej správy.',
    },
    correct: 'C',
  },
  {
    id: 29,
    text: 'Osoba poverená výkonom fyzickej ochrany alebo pátrania môže vykonať zásah, len za splnenia týchto všetkých podmienok:',
    options: {
      A: 'Ak je porušovaný alebo ohrozovaný záujem chránený bezpečnostnou službou a len v súlade so zákonom o súkromnej bezpečnosti alebo inými všeobecne záväznými právnymi predpismi.',
      B: 'Ak je len porušovaný záujem chránený bezpečnostnou službou a v súlade so zákonom o súkromnej bezpečnosti, Ústavou Slovenskej republiky, ústavnými zákonmi a medzinárodnými zmluvami, ktorými je Slovenská republika viazaná.',
      C: 'Ak je len ohrozovaný záujem chránený bezpečnostnou službou a v súlade so zákonom o súkromnej bezpečnosti.',
    },
    correct: 'A',
  },
  {
    id: 30,
    text: 'Fyzickou ochranou sa rozumejú tieto činnosti:',
    options: {
      A: 'Obchôdzka, stráženie, prevádzkovanie zabezpečovacieho systému alebo poplachového systému okrem priameho riadenia týchto činností.',
      B: 'Obchôdzka, stráženie, prevádzkovanie zabezpečovacieho systému alebo poplachového systému a priame riadenie a kontrola týchto činností.',
      C: 'Obchôdzka, stráženie, prevádzkovanie zabezpečovacieho systému alebo poplachového systému okrem priamej kontroly týchto činností.',
    },
    correct: 'B',
  },
  {
    id: 31,
    text: 'Doklad obdobný odpisu z registra trestov:',
    options: {
      A: 'Predloží iba osoba, ktorá sa za posledných päť rokov nepretržite zdržiavala viac ako šesť mesiacov mimo územia Slovenskej republiky.',
      B: 'Predloží iba osoba, ktorá sa za posledných desať rokov nepretržite zdržiavala viac ako šesť mesiacov mimo územia Slovenskej republiky.',
      C: 'Predloží iba osoba, ktorá sa za posledných desať rokov nepretržite zdržiavala viac ako päť mesiacov mimo územia Slovenskej republiky.',
    },
    correct: 'B',
  },
  {
    id: 32,
    text: 'Poskytovanie služieb v oblasti súkromnej bezpečnosti, výkon štátneho dozoru Ministerstvom vnútra Slovenskej republiky a kontroly Policajným zborom v oblasti súkromnej bezpečnosti upravuje:',
    options: {
      A: 'Zákon č. 473/2005 Z. z.',
      B: 'Zákon č. 475/2005 Z. z.',
      C: 'Zákon č. 453/2005 Z. z.',
    },
    correct: 'A',
  },
  {
    id: 33,
    text: 'Pri ochrane objektov osobitnej dôležitosti:',
    options: {
      A: 'Musí prevádzkovateľ bezpečnostnej služby zabezpečiť prípravu osôb poverených výkonom fyzickej ochrany alebo pátrania len z praktického výcviku techniky vykonávania zásahov a teórie techniky vykonávania zásahov v rozsahu do štyroch hodín za mesiac.',
      B: 'Musí prevádzkovateľ bezpečnostnej služby zabezpečiť prípravu osôb poverených výkonom fyzickej ochrany alebo pátrania len z praktického výcviku taktiky vykonávania zásahov a teórie taktiky a techniky vykonávania zásahov v rozsahu najmenej štyroch hodín za mesiac.',
      C: 'Musí prevádzkovateľ bezpečnostnej služby zabezpečiť prípravu osôb poverených výkonom fyzickej ochrany alebo pátrania z praktického výcviku taktiky a techniky vykonávania zásahov a teórie taktiky a techniky vykonávania zásahov v rozsahu najmenej štyroch hodín za mesiac.',
    },
    correct: 'C',
  },
  {
    id: 34,
    text: 'Druhy bezpečnostnej služby sú:',
    options: {
      A: 'Strážna služba, detektívna služba, odborná príprava a poradenstvo a technická služba.',
      B: 'Technická služba, profesionálna cezhraničná preprava eurovej hotovosti cestnou dopravou, strážna služba a vlastná ochrana.',
      C: 'Strážna služba, profesionálna cezhraničná preprava eurovej hotovosti cestnou dopravou, detektívna služba a odborná príprava a poradenstvo.',
    },
    correct: 'C',
  },
  {
    id: 35,
    text: 'Skúšku odbornej spôsobilosti typu S ani odbornú prípravu nemusí vykonať osoba, ktorá:',
    options: {
      A: 'Získala vysokoškolské vzdelanie prvého stupňa v študijnom odbore právo a vykonávala najmenej šesť rokov bezpečnostnú prax v ozbrojenom bezpečnostnom zbore alebo bola príslušníkom ozbrojeného bezpečnostného zboru najmenej 10 rokov.',
      B: 'Získala vzdelanie v študijnom odbore v oblasti bezpečnostných služieb a vykonávala najmenej tri roky bezpečnostnú prax v ozbrojenom bezpečnostnom zbore alebo bola príslušníkom ozbrojeného bezpečnostného zboru najviac 15 rokov.',
      C: 'Získala vzdelanie v študijnom odbore v oblasti bezpečnostných služieb a vykonávala najmenej päť rokov bezpečnostnú prax v ozbrojenom bezpečnostnom zbore alebo bola príslušníkom ozbrojeného bezpečnostného zboru najmenej 15 rokov.',
    },
    correct: 'C',
  },
  {
    id: 36,
    text: 'Držiteľ preukazu odbornej spôsobilosti typu P nemôže vykonávať túto činnosť:',
    options: {
      A: 'Odborná príprava a poradenstvo.',
      B: 'Profesionálna cezhraničná preprava eurovej hotovosti cestnou dopravou.',
      C: 'Fyzická ochrana a pátranie.',
    },
    correct: 'B',
  },
  {
    id: 37,
    text: 'Fyzická ochrana obchôdzkou alebo strážením alebo monitorovanie pohybu a konania osoby v chránenom objekte, na chránenom mieste alebo v ich okolí sa:',
    options: {
      A: 'Musí vykonávať podľa vypracovaného plánu služieb.',
      B: 'Nemusí vykonávať len podľa vypracovaného plánu služieb.',
      C: 'Musí vykonávať len podľa vopred vypracovaného plánu služieb.',
    },
    correct: 'C',
  },
  {
    id: 38,
    text: 'Identifikačný preukaz musí obsahovať tieto všetky povinné náležitosti, a to:',
    options: {
      A: 'Obchodné meno prevádzkovateľa; druh bezpečnostnej služby; číslo licencie na prevádzkovanie bezpečnostnej služby prevádzkovateľa; meno, priezvisko, titul a fotografiu držiteľa; číslo identifikačného preukazu; odtlačok pečiatky a podpis prevádzkovateľa.',
      B: 'Obchodné meno prevádzkovateľa; druh bezpečnostnej služby; číslo akreditácie na poskytovanie bezpečnostnej služby poskytovateľa; meno, priezvisko, titul a fotografiu držiteľa; číslo identifikačného preukazu; odtlačok pečate a podpis nositeľa preukazu.',
      C: 'Obchodný názov objednávateľa; typ bezpečnostnej služby; číslo licencie na prevádzkovanie bezpečnostnej služby prevádzkovateľa; meno, priezvisko, titul držiteľa; číslo identifikačného preukazu; odtlačok pečiatky a podpis prevádzkovateľa.',
    },
    correct: 'A',
  },
  {
    id: 39,
    text: 'Iným technickým prostriedkom je podľa zákona o súkromnej bezpečnosti:',
    options: {
      A: 'Stroj alebo prístroj, ktorý sa používa iba na plnenie úloh obchôdzky, stráženia, alebo odbornej prípravy a poradenstva.',
      B: 'Stroj alebo prístroj, ktorý sa používa iba na plnenie úloh fyzickej ochrany, technickej služby alebo odbornej prípravy a poradenstva.',
      C: 'Stroj alebo prístroj, ktorý sa používa iba na plnenie úloh odbornej prípravy a poradenstva, fyzickej ochrany alebo pátrania.',
    },
    correct: 'C',
  },
  {
    id: 40,
    text: 'Zdravotnou spôsobilosťou podľa zákona o súkromnej bezpečnosti sa rozumie:',
    options: {
      A: 'Telesná spôsobilosť a psychická spôsobilosť na vykonávanie činností súvisiacich s prevádzkovaním bezpečnostnej služby a technickej služby.',
      B: 'Telesná spôsobilosť a psychická spôsobilosť na vykonávanie činností súvisiacich s prevádzkovaním bezpečnostnej služby, ak ju zákon o súkromnej bezpečnosti vyžaduje.',
      C: 'Telesná spôsobilosť a psychiatrická spôsobilosť na vykonávanie činností súvisiacich s prevádzkovaním bezpečnostnej služby, ak ju zákon o súkromnej bezpečnosti vyžaduje.',
    },
    correct: 'B',
  },
]
