export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const okruh3Content = {
  hero: {
    badge: 'S',
    title: 'Okruh 3 — súkromná bezpečnosť',
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
    text: 'Osoba poverená výkonom fyzickej ochrany alebo pátrania:',
    options: {
      A: 'Nesmie mimo času, keď plní úlohy podľa zákona o súkromnej bezpečnosti, vôbec nosiť vecné bezpečnostné prostriedky.',
      B: 'Nesmie, v čase, keď plní úlohy podľa zákona o súkromnej bezpečnosti, viditeľne nosiť technické prostriedky.',
      C: 'Nesmie mimo času, keď plní úlohy podľa zákona o súkromnej bezpečnosti, viditeľne nosiť vecné bezpečnostné prostriedky.',
    },
    correct: 'C',
  },
  {
    id: 2,
    text: 'Osoby poverené výkonom fyzickej ochrany podľa zákona o súkromnej bezpečnosti sú oprávnené:',
    options: {
      A: 'Na čas nevyhnutný do príchodu policajta, Vojenskej polície alebo obecnej polície, predviesť na strážne stanovisko osobu, ktorá v súvislosti s výkonom fyzickej ochrany odmieta alebo nemôže hodnoverne preukázať svoju totožnosť a bola pristihnutá pri páchaní priestupku alebo bezprostredne po spáchaní priestupku, alebo ktorá bola pristihnutá pri neoprávnenom vstupe do chráneného objektu alebo na chránené miesto alebo pri neoprávnenom výstupe z chráneného objektu alebo z chráneného miesta.',
      B: 'Na čas nevyhnutný do príchodu policajta, Vojenskej polície alebo obecnej polície, predviesť na strážne stanovisko osobu, ktorá bola pristihnutá pri páchaní priestupku alebo bezprostredne po spáchaní priestupku, alebo ktorá bola pristihnutá pri neoprávnenom vstupe do chráneného objektu alebo na chránené miesto alebo pri neoprávnenom výstupe z chráneného objektu alebo z chráneného miesta.',
      C: 'Na čas nevyhnutný do príchodu prevádzkovateľa bezpečnostnej služby, predviesť na strážne stanovisko osobu, ktorá bola pristihnutá pri páchaní priestupku alebo bezprostredne po spáchaní priestupku, alebo ktorá bola pristihnutá pri neoprávnenom vstupe do chráneného objektu alebo na chránené miesto alebo pri neoprávnenom výstupe z chráneného objektu alebo z chráneného miesta.',
    },
    correct: 'B',
  },
  {
    id: 3,
    text: 'Pri plnení úloh je osoba poverená výkonom fyzickej ochrany povinná mať viditeľne umiestnený identifikačný preukaz jeho prednou stranou obsahujúcou údaje na ľavej strane odevu v oblasti pŕs a to:',
    options: {
      A: 'Na verejne prístupnom mieste a na mieste, kde osoba poverená výkonom fyzickej ochrany neprichádza do kontaktu s osobami pri výstupe z chráneného objektu alebo z chráneného miesta.',
      B: 'Aj na inom ako verejne prístupnom mieste.',
      C: 'Na verejne prístupnom mieste a na mieste, kde osoba poverená výkonom fyzickej ochrany prichádza do kontaktu s osobami pri vstupe do chráneného objektu alebo na chránené miesto.',
    },
    correct: 'C',
  },
  {
    id: 4,
    text: 'Osoba poverená výkonom fyzickej ochrany, pátrania, odbornej prípravy a poradenstva:',
    options: {
      A: 'Nesmie pri plnení úloh podľa zákona o súkromnej bezpečnosti používať žiadny spôsob maskovanie tváre.',
      B: 'Môže pri plnení špecifických úloh podľa zákona o súkromnej bezpečnosti používať určený spôsob maskovanie tváre.',
      C: 'Nesmie pri plnení iba niektorých úloh podľa zákona o súkromnej bezpečnosti používať žiadny spôsob maskovanie tváre.',
    },
    correct: 'A',
  },
  {
    id: 5,
    text: 'Kontrolór pri výkone štátneho dozoru, kontroly alebo kontroly činnosti alebo policajt pri výkone kontroly činnosti je oprávnený zadržať osobe poverenej výkonom fyzickej ochrany preukaz odbornej spôsobilosti ak:',
    options: {
      A: 'Má dôvodné pochybnosti o jej odbornej úrovni alebo má dôvodné pochybnosti o úrovni jej výkonu fyzickej ochrany.',
      B: 'Jeho platnosť sa odkladá.',
      C: 'Je zistený menej závažný nedostatok v jej činnosti.',
    },
    correct: 'A',
  },
  {
    id: 6,
    text: 'Uchádzača o vykonanie skúšky odbornej spôsobilosti alebo osobu, ktorá nevykoná úspešne skúšku odbornej spôsobilosti:',
    options: {
      A: 'Prihlasuje na skúšku odbornej spôsobilosti podľa typu skúšky osoba akreditovaná Ministerstvom vnútra Slovenskej republiky na vykonávanie odbornej prípravy, pričom na skúšku odbornej spôsobilosti musí byť tento uchádzač prihlásený po troch mesiacoch od ukončenia odbornej prípravy.',
      B: 'Prihlasuje na skúšku odbornej spôsobilosti podľa typu skúšky osoba akreditovaná Ministerstvom vnútra Slovenskej republiky, pričom na skúšku odbornej spôsobilosti musí byť tento uchádzač prihlásený do šiestich mesiacov od ukončenia odbornej prípravy.',
      C: 'Prihlasuje na skúšku odbornej spôsobilosti podľa typu skúšky osoba akreditovaná Ministerstvom vnútra Slovenskej republiky na vykonávanie odbornej prípravy, pričom na skúšku odbornej spôsobilosti musí byť tento uchádzač prihlásený do troch mesiacov od ukončenia odbornej prípravy.',
    },
    correct: 'C',
  },
  {
    id: 7,
    text: 'Osoby poverené výkonom fyzickej ochrany podľa zákona o súkromnej bezpečnosti nie sú oprávnené:',
    options: {
      A: 'Zaistiť osobu, u ktorej sa pri vstupe do chráneného objektu zistilo, že bolo po nej vyhlásené policajné pátranie.',
      B: 'Zaznamenávať technickými prostriedkami vstup alebo výstup osôb a dopravných prostriedkov do chráneného objektu alebo na chránené miesto alebo z chráneného objektu alebo z chráneného miesta.',
      C: 'Vyviesť nepovolanú osobu z chráneného objektu alebo z chráneného miesta.',
    },
    correct: 'A',
  },
  {
    id: 8,
    text: 'Akreditovaná osoba vydá po ukončení odbornej prípravy na skúšku odbornej spôsobilosti osobe:',
    options: {
      A: 'Ktorá absolvovala odbornú prípravu na skúšku odbornej spôsobilosti v celom rozsahu, osvedčenie o absolvovaní odbornej prípravy.',
      B: 'Ktorá absolvovala odbornú prípravu na skúšku odbornej spôsobilosti v zákonom skrátenom rozsahu, osvedčenie o absolvovaní odbornej prípravy.',
      C: 'Ktorá neabsolvovala odbornú prípravu na skúšku odbornej spôsobilosti v celom rozsahu, osvedčenie o absolvovaní odbornej prípravy.',
    },
    correct: 'A',
  },
  {
    id: 9,
    text: 'Jedna osoba poverená výkonom fyzickej ochrany, pátrania, odbornej prípravy a poradenstva môže byť držiteľom:',
    options: {
      A: 'Súčasne viacerých identifikačných preukazov len s označením toho druhu činnosti, ktorú aktuálne vykonáva.',
      B: 'Súčasne jedného identifikačného preukazu len s označením toho druhu činnosti, ktorú aktuálne vykonáva.',
      C: 'Súčasne jedného identifikačného preukazu len s označením toho druhu činnosti, ktorá prevažuje.',
    },
    correct: 'C',
  },
  {
    id: 10,
    text: 'O tom, ktorý vecný bezpečnostný prostriedok použije:',
    options: {
      A: 'Osoba poverená výkonom fyzickej ochrany alebo pátrania, rozhoduje podľa konkrétnej situácie tak, aby osobe, proti ktorej zasahuje, nespôsobila neprimeranú ujmu.',
      B: 'Osoba poverená výkonom fyzickej ochrany, rozhoduje podľa konkrétnej situácie tak, aby osobe, proti ktorej zasahuje, nespôsobila žiadnu ujmu.',
      C: 'Osoba poverená výkonom fyzickej ochrany alebo pátrania, rozhoduje podľa konkrétnej situácie tak, aby osobe, proti ktorej zasahuje, spôsobila neprimeranú ujmu.',
    },
    correct: 'A',
  },
  {
    id: 11,
    text: 'Pri ochrane objektov osobitnej dôležitosti:',
    options: {
      A: 'Musí prevádzkovateľ bezpečnostnej služby zabezpečiť prípravu osôb poverených výkonom fyzickej ochrany alebo pátrania z praktického výcviku taktiky a techniky vykonávania zásahov a teórie taktiky a techniky vykonávania zásahov v rozsahu najmenej štyroch hodín za mesiac.',
      B: 'Musí prevádzkovateľ bezpečnostnej služby zabezpečiť prípravu osôb poverených výkonom fyzickej ochrany alebo pátrania len z praktického výcviku taktiky vykonávania zásahov a teórie taktiky a techniky vykonávania zásahov v rozsahu najmenej štyroch hodín za mesiac.',
      C: 'Musí prevádzkovateľ bezpečnostnej služby zabezpečiť prípravu osôb poverených výkonom fyzickej ochrany alebo pátrania len z praktického výcviku techniky vykonávania zásahov a teórie techniky vykonávania zásahov v rozsahu do štyroch hodín za mesiac.',
    },
    correct: 'A',
  },
  {
    id: 12,
    text: 'Od výzvy a výstrahy pred použitím vecného bezpečnostného prostriedku môže:',
    options: {
      A: 'Osoba poverená výkonom fyzickej ochrany alebo pátrania upustiť iba v prípade, keď je sama napadnutá alebo je ohrozený život alebo zdravie inej osoby a vec neznesie odklad alebo tomu bránia iné okolnosti.',
      B: 'Osoba poverená výkonom fyzickej ochrany alebo pátrania upustiť iba v prípade, keď sama napadá alebo ohrozuje život alebo zdravie inej osoby a vec neznesie odklad alebo tomu bránia iné okolnosti.',
      C: 'Osoba poverená výkonom fyzickej ochrany alebo pátrania upustiť iba v prípade, keď je sama napadnutá alebo je ohrozený život alebo zdravie inej osoby a vec znesie odklad alebo tomu nebránia iné okolnosti.',
    },
    correct: 'A',
  },
  {
    id: 13,
    text: 'Osoba poverená výkonom fyzickej ochrany, pátrania alebo odbornej prípravy a poradenstva podľa zákona o súkromnej bezpečnosti je povinná si počínať tak, aby žiadnym spôsobom nesťažila vyšetrovanie a to:',
    options: {
      A: 'Na mieste, o ktorom sa predpokladá, že bol na ňom spáchaný len obzvlášť závažný zločin, na mieste, kde došlo ku škodovej udalosti, úniku prevádzkových kvapalín, k služobnému úrazu alebo k inej bezpečnostnej udalosti, na mieste, kde bola usmrtená osoba alebo došlo k ťažkému ublíženiu na zdraví, ako aj na mieste, kde bol použitý donucovací prostriedok.',
      B: 'Na mieste, o ktorom sa predpokladá, že bol na ňom spáchaný priestupok, na mieste, kde došlo ku škodovej udalosti, prevádzkovej katastrofe, k drobnej pracovnej ujme na zdraví alebo k inej krízovej udalosti, na mieste, kde bola usmrtená osoba, ako aj na mieste, kde bola použitá bodná zbraň alebo vecný prostriedok.',
      C: 'Na mieste, o ktorom sa predpokladá, že bol na ňom spáchaný trestný čin, na mieste, kde došlo k dopravnej nehode, prevádzkovej nehode (havárii), k pracovnému úrazu alebo k inej mimoriadnej udalosti, na mieste, kde bola usmrtená osoba alebo došlo k ublíženiu na zdraví, ako aj na mieste, kde bola použitá strelná zbraň alebo vecný bezpečnostný prostriedok.',
    },
    correct: 'C',
  },
  {
    id: 14,
    text: 'Osoba, ktorej bol zadržaný preukaz odbornej spôsobilosti nakoľko jeho platnosť zanikla:',
    options: {
      A: 'Môže vykonať len úkony súvisiace s odovzdaním služby.',
      B: 'Môže pokračovať v službe až do jej skončenia.',
      C: 'Pokračuje v službe, ale musí ihneď požiadať o vydanie nového preukazu odbornej spôsobilosti.',
    },
    correct: 'A',
  },
  {
    id: 15,
    text: 'Kontrolór krajského riaditeľstva Policajného zboru, štátny dozor Ministerstva vnútra Slovenskej republiky alebo príslušník Policajného zboru nie je oprávnený:',
    options: {
      A: 'Vykonať zápis v inšpekčnej knihe dozoru a robiť záznamy v evidenciách, ktoré sa vedú v chránenom objekte alebo na chránenom mieste.',
      B: 'Ukladať na mieste pokyny na odstránenie zistených nedostatkov.',
      C: 'Ukladať na mieste pokyny na pozastavenie činnosti prevádzkovateľa v oblasti bezpečnostných služieb.',
    },
    correct: 'C',
  },
  {
    id: 16,
    text: 'Rovnošaty a ich súčasti používané pri poskytovaní bezpečnostnej služby nesmú byť zameniteľné s rovnošatami týchto všetkých bezpečnostných zložiek:',
    options: {
      A: 'Príslušníkov ozbrojených síl Slovenskej republiky, ozbrojených bezpečnostných zborov, Vojenskej polície a pracovníkov iných bezpečnostných služieb.',
      B: 'Príslušníkov ozbrojených síl Slovenskej republiky, ozbrojených bezpečnostných zborov, ozbrojených zborov a iných osôb, ktoré plnia úlohy verejnej správy.',
      C: 'Príslušníkov ozbrojených síl Slovenskej republiky, ozbrojených bezpečnostných zborov, ozbrojených zborov a pracovníkov pôšt a telekomunikácií.',
    },
    correct: 'B',
  },
  {
    id: 17,
    text: 'Identifikačný preukaz musí obsahovať tieto všetky povinné náležitosti, a to:',
    options: {
      A: 'Obchodné meno prevádzkovateľa; druh bezpečnostnej služby; číslo akreditácie na poskytovanie bezpečnostnej služby poskytovateľa; meno, priezvisko, titul a fotografiu držiteľa; číslo identifikačného preukazu; odtlačok pečate a podpis nositeľa preukazu.',
      B: 'Obchodné meno prevádzkovateľa; druh bezpečnostnej služby; číslo licencie na prevádzkovanie bezpečnostnej služby prevádzkovateľa; meno, priezvisko, titul a fotografiu držiteľa; číslo identifikačného preukazu; odtlačok pečiatky a podpis prevádzkovateľa.',
      C: 'Obchodný názov objednávateľa; typ bezpečnostnej služby; číslo licencie na prevádzkovanie bezpečnostnej služby prevádzkovateľa; meno, priezvisko, titul držiteľa; číslo identifikačného preukazu; odtlačok pečiatky a podpis prevádzkovateľa.',
    },
    correct: 'B',
  },
  {
    id: 18,
    text: 'O zadržaní preukazu odbornej spôsobilosti z dôvodu, že sa osoba poverená výkonom pátrania odmietne podrobiť skúške, či nie je pod vplyvom alkoholických nápojov alebo iných návykových látok:',
    options: {
      A: 'Kontrolór alebo policajt vydá potvrdenie a vec predloží neodkladne, najneskôr do siedmich dní od zadržania preukazu odbornej spôsobilosti, orgánu dozoru alebo orgánu kontroly.',
      B: 'Kontrolór alebo policajt vydá potvrdenie a vec predloží neodkladne, najneskôr do troch dní od zadržania preukazu odbornej spôsobilosti, orgánu dozoru alebo orgánu kontroly.',
      C: 'Kontrolór alebo policajt vydá potvrdenie a vec predloží neodkladne, najneskôr do piatich dní od zadržania preukazu odbornej spôsobilosti, orgánu dozoru alebo orgánu kontroly.',
    },
    correct: 'B',
  },
  {
    id: 19,
    text: 'Osoba poverená výkonom fyzickej ochrany, pátrania, odbornej prípravy a poradenstva je povinná si počínať podľa zákona o súkromnej bezpečnosti tak, aby žiadnym spôsobom nesťažila vyšetrovanie, a najmä:',
    options: {
      A: 'Chránila stopy len pred zničením a poškodením, zamedzila prístup všetkých osôb, zabránila vnášaniu alebo vynášaniu predmetov, neodkladne ohlásila udalosť najbližšiemu útvaru Policajného zboru a zamedzila ďalším škodlivým následkom udalosti.',
      B: 'Chránila stopy pred zničením, poškodením alebo odstránením, zamedzila prístup nepovolaných osôb, zabránila vnášaniu alebo vynášaniu predmetov, neodkladne ohlásila udalosť najbližšiemu útvaru Policajného zboru a zamedzila ďalším škodlivým následkom udalosti.',
      C: 'Chránila stopy pred zničením, poškodením alebo odstránením, zamedzila prístup nepovolaných osôb, zabránila len vynášaniu predmetov, neodkladne ohlásila udalosť najbližšiemu útvaru Policajného zboru a zamedzila ďalším škodlivým následkom udalosti.',
    },
    correct: 'B',
  },
  {
    id: 20,
    text: 'Osoby poverené výkonom fyzickej ochrany podľa zákona o súkromnej bezpečnosti sú oprávnené:',
    options: {
      A: 'Presvedčiť sa zrakom, hmatom alebo technickými prostriedkami, či ten, kto vstupuje do chráneného objektu alebo na chránené miesto alebo z neho vystupuje, nemá pri sebe alebo na sebe predmety pochádzajúce z protiprávnej činnosti súvisiacej s chráneným objektom, chráneným miestom alebo chránenou osobou alebo nemá pri sebe alebo na sebe predmety, ktorými by nemohol spáchať protiprávnu činnosť, a tieto mu zadržať.',
      B: 'Presvedčiť sa zrakom, hmatom alebo technickými prostriedkami, či ten, kto vstupuje do chráneného objektu alebo na chráneného miesto alebo z neho vystupuje, nemá len pri sebe predmety pochádzajúce z protiprávnej činnosti súvisiacej s chráneným objektom, chráneným miestom alebo chránenou osobou alebo nemá len na sebe predmety, ktorými by mohol spáchať protiprávnu činnosť, a tieto mu odňať.',
      C: 'Presvedčiť sa zrakom, hmatom alebo technickými prostriedkami, či ten, kto vstupuje do chráneného objektu alebo na chránené miesto alebo z neho vystupuje, nemá pri sebe alebo na sebe predmety pochádzajúce z protiprávnej činnosti súvisiacej s chráneným objektom, chráneným miestom alebo chránenou osobou alebo nemá pri sebe alebo na sebe predmety, ktorými by mohol spáchať protiprávnu činnosť, a tieto mu odobrať.',
    },
    correct: 'C',
  },
  {
    id: 21,
    text: 'Fyzická ochrana obchôdzkou alebo strážením alebo monitorovanie pohybu a konania osoby v chránenom objekte, na chránenom mieste alebo v ich okolí sa:',
    options: {
      A: 'Musí vykonávať len podľa vopred vypracovaného plánu služieb.',
      B: 'Nemusí vykonávať len podľa vypracovaného plánu služieb.',
      C: 'Musí vykonávať podľa vypracovaného plánu služieb.',
    },
    correct: 'A',
  },
  {
    id: 22,
    text: 'Rovnošata používaná pri poskytovaní bezpečnostnej služby alebo iný odev používaný pri výkone fyzickej ochrany:',
    options: {
      A: 'Musia byť zreteľne označené len znakom civilnej bezpečnostnej služby.',
      B: 'Musia byť označené znakom tak, aby bolo zrejmé, že ide o bezpečnostnú službu; to neplatí, ak ide o ochranu osoby.',
      C: 'Musia byť označené len obchodným názvom prevádzkovateľa.',
    },
    correct: 'B',
  },
  {
    id: 23,
    text: 'Osoba poverená výkonom fyzickej ochrany alebo pátrania v objekte osobitnej dôležitosti musí preukázať bezpečnostnú prax v dĺžke najmenej:',
    options: {
      A: 'Dvoch rokov.',
      B: 'Troch rokov.',
      C: 'Jedného roku.',
    },
    correct: 'A',
  },
  {
    id: 24,
    text: 'V súvislosti so zásahom podľa zákona o súkromnej bezpečnosti:',
    options: {
      A: 'Osoba poverená výkonom fyzickej ochrany alebo pátrania nie je povinná poskytnúť osobe, ktorá bola pri tejto činnosti zranená, neodkladne nevyhnutnú pomoc vrátane privolania lekára.',
      B: 'Osoba poverená výkonom fyzickej ochrany alebo pátrania je povinná poskytnúť osobe, ktorá bola pri tejto činnosti zranená, neodkladne nevyhnutnú pomoc vrátane privolania lekára.',
      C: 'Osoba poverená výkonom fyzickej ochrany alebo pátrania môže poskytnúť osobe, ktorá bola pri tejto činnosti zranená, neodkladne nevyhnutnú pomoc vrátane privolania lekára.',
    },
    correct: 'B',
  },
  {
    id: 25,
    text: 'V súvislosti so zásahom podľa zákona o súkromnej bezpečnosti je osoba poverená výkonom fyzickej ochrany alebo pátrania povinná ohlásiť prevádzkovateľovi bezpečnostnej služby alebo osobe ním určenej:',
    options: {
      A: 'Každý prípad smrti a každý prípad zranenia súvisiaceho so zásahom, a len každé porušenie záujmu chráneného bezpečnostnou službou.',
      B: 'Každý prípad smrti a každý prípad zranenia súvisiaceho so zásahom, ako aj každé porušenie alebo závažné ohrozenie záujmu chráneného bezpečnostnou službou.',
      C: 'Každý prípad smrti a každý prípad zranenia súvisiaceho so zásahom, a len každé závažné ohrozenie záujmu chráneného bezpečnostnou službou.',
    },
    correct: 'B',
  },
]
