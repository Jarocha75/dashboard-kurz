export type Answer = 'A' | 'B' | 'C'

export type Question = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

export const questions: Question[] = [
  {
    id: 1,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri vykonávaní stráženia viacerých chránených objektov v meste ste boli vyslaní na preverenie signálu poplachového systému jedného z chránených objektov. Aký je v tejto situácii správny postup podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Môžem počas presunu na chránený objekt za účelom preverenia signálu poplachového systému použiť vozidlo so zvláštnymi výstražnými znameniami iba zo súhlasom prevádzkovateľa.',
      B: 'Nesmiem počas presunu na chránený objekt za účelom preverenia signálu poplachového systému použiť vozidlo so zvláštnymi výstražnými znameniami.',
      C: 'Môžem počas presunu na chránený objekt za účelom preverenia signálu poplachového systému použiť vozidlo so zvláštnymi výstražnými znameniami, a to iba v nočnej dobe.',
    },
    correct: 'B',
  },
  {
    id: 2,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Do priestorov chráneného objektu - banky, do ktorej je vstup so zbraňou zakázaný, chce vstúpiť osoba v civilnom oblečení, ktorá má zjavne pri sebe strelnú zbraň. Po Vašej výzve táto osoba preukáže svoju príslušnosť k Policajnému zboru služobným preukazom a uvedie, že do banky vstupuje na služobný účel. Aký je v tejto situácii správny postup podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Neumožním tejto osobe vpustiť so zbraňou do chráneného objektu, vpustiť smie len príslušník Policajného zboru v služobnej rovnošate.',
      B: 'Umožním vstup do chráneného objektu banky príslušníkovi Policajného zboru, nakoľko do chráneného objektu vstupuje na služobný účel, avšak zbraň mu zoberiem do úschovy, nakoľko vstup so zbraňou je do banky zakázaný.',
      C: 'Umožním vstup do chráneného objektu banky príslušníkovi Policajného zboru, nakoľko do chráneného objektu vstupuje na služobný účel.',
    },
    correct: 'B',
  },
  {
    id: 3,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri výkone stráženia v chránenom objekte predajne potravín bola osoba pristihnutá pri spáchaní priestupku krádeže tovaru. Táto osoba s Vami spolupracuje, avšak nevie preukázať svoju totožnosť, lebo nemá pri sebe doklad totožnosti. Aké máte v tejto situácii oprávnenie podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Som oprávnený na čas nevyhnutný, do príchodu policajta, Vojenskej polície alebo obecnej polície, predviesť na strážne stanovisko osobu, ktorá bola pristihnutá pri páchaní priestupku alebo bezprostredne po spáchaní priestupku.',
      B: 'Som oprávnený na čas nevyhnutný, do príchodu policajta, Vojenskej polície alebo obecnej polície, predviesť na strážne stanovisko osobu, ktorá bola pristihnutá pri páchaní priestupku alebo bezprostredne po spáchaní priestupku, ak je hodnota odcudzeného tovaru minimálne vo výške desať EUR.',
      C: 'Nie som oprávnený predviesť na strážne stanovisko osobu, ktorá bola pristihnutá pri páchaní priestupku alebo bezprostredne po spáchaní priestupku a túto po zápise do evidencie zásahov ihneď prepustím.',
    },
    correct: 'A',
  },
  {
    id: 4,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri vykonávaní služby na strážnom stanovisku pri vchode pre motorové vozidlá chráneného objektu, chce vyjsť príslušník Policajného zboru v služobnej rovnošate, ktorý vedie služobné motorové vozidlo a uviedol, že do chráneného objektu vstúpil na služobný účel. Aké máte v tejto situácii oprávnenie podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Som oprávnený presvedčiť sa, či osoba vystupujúca z chráneného objektu nemá v dopravnom prostriedku predmety pochádzajúce z protiprávnej činnosti súvisiacej s chráneným objektom a tieto mu odobrať, aj keď ide o príslušníka Policajného zboru.',
      B: 'Umožním príslušníkovi Policajného zboru vystúpiť z chráneného objektu firmy, pričom nie som v tejto situácii oprávnený presvedčiť sa, či v dopravnom prostriedku alebo na dopravnom prostriedku nemá predmety pochádzajúce z protiprávnej činnosti súvisiacej s chráneným objektom firmy.',
      C: 'Umožním príslušníkovi Policajného zboru vystúpiť z chráneného objektu firmy, ale najskôr si overím u jeho nadriadených, či do objektu vstupoval za služobným účelom.',
    },
    correct: 'B',
  },
  {
    id: 5,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri vykonávaní obchôdzky v chránenom objekte ste našli usmrtenú osobu. Aký je správny postup v tejto situácii podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Som povinný ohlásiť smrť tejto osoby prevádzkovateľovi a zároveň vykonám predbežnú obhliadku miesta úmrtia.',
      B: 'Som povinný neodkladne ohlásiť usmrtenú osobu Policajnému zboru a z miesta odídem spísať záznam pre prevádzkovateľa.',
      C: 'Som povinný neodkladne ohlásiť usmrtenú osobu najbližšiemu útvaru Policajného zboru a následne prevádzkovateľovi a budem si počínať tak, aby som žiadnym spôsobom nesťažil vyšetrovanie.',
    },
    correct: 'C',
  },
  {
    id: 6,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri výkone stráženia na strážnom stanovisku chce do chráneného objektu vstúpiť jeho zamestnanec. Pre zamestnancov chráneného objektu platí zákaz vstupu pod vplyvom alkoholu. U tohto zamestnanca bolo zistené, že nie je pod vplyvom alkoholu. Aký je v tejto situácii správny postup podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Po zistení, že zamestnanec chráneného objektu nie je pod vplyvom alkoholu tomuto zamestnancovi umožním vstup do chráneného objektu až po vykonaní odberu na zistenie alkoholu v krvi.',
      B: 'Po zistení, že zamestnanec chráneného objektu nie je pod vplyvom alkoholu tomuto zamestnancovi umožním vstup do chráneného objektu.',
      C: 'Po zistení, že zamestnanec chráneného objektu nie je pod vplyvom alkoholu tomuto zamestnancovi neumožním vstup do chráneného objektu.',
    },
    correct: 'B',
  },
  {
    id: 7,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri vykonávaní stráženia v chránenom objekte obchodného domu na Vás útočí jeden zo zákazníkov. Ako môžete v tejto situácii postupovať?',
    options: {
      A: 'Môžem odvrátiť hroziaci alebo trvajúci útok zákazníka proti mne, pričom mojou obranou proti zákazníkovi mu nesmie byť spôsobená ťažká ujma na jeho zdraví.',
      B: 'Môžem odvrátiť hroziaci alebo trvajúci útok zákazníka proti mne, pričom moja obrana proti zákazníkovi smie byť celkom zjavne neprimeraná jeho útoku len so súhlasom prevádzkovateľa, ak vec neznesie odklad, súhlas prevádzkovateľa môže byť daný aj dodatočne.',
      C: 'Môžem odvrátiť hroziaci alebo trvajúci útok zákazníka proti mne, pričom moja obrana proti zákazníkovi nesmie byť celkom zjavne neprimeraná jeho útoku.',
    },
    correct: 'C',
  },
  {
    id: 8,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri obchôdzke v chránenom objekte ste spozorovali otvorené dvere na jednej z kancelárií so zjavne vylomeným zámkom na týchto dverách. Po nahliadnutí do tejto kancelárie ste zistili, že sú v nej porozhadzované predmety a na stole chýba výpočtová technika. Aký je v tejto situácii správny postup podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Som povinný neodkladne uzamknúť dvere kancelárie, ak to nie je možné privolať službu oprávnenú vykonávať opravy uzamykacích mechanizmov.',
      B: 'Som povinný počínať si tak, aby som žiadnym spôsobom nesťažil vyšetrovanie, najmä zamedziť prístupu nepovolaných osôb na miesto protiprávnej udalosti.',
      C: 'Som povinný počínať si tak, aby som zásadným spôsobom nesťažil vyšetrovanie, najmä zaistiť a zadokumentovať stopy v kancelárii a tieto neodkladne odovzdať najbližšiemu útvaru Policajného zboru.',
    },
    correct: 'B',
  },
  {
    id: 9,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri vykonávaní stráženia v chránenom objekte predajne elektrospotrebičov osoba odcudzila mobilný telefón v hodnote 256 EUR. Ako môžete v tejto situácii konať?',
    options: {
      A: 'Nemôžem obmedziť osobnú slobodu podľa Trestného poriadku osoby, ktorá bola pristihnutá pri krádeži tovaru v hodnote 256 EUR, avšak som oprávnený na čas nevyhnutný, do príchodu policajta, Vojenskej polície alebo obecnej polície, predviesť ju na strážne stanovisko.',
      B: 'Môžem obmedziť osobnú slobodu podľa Trestného poriadku osoby, ktorá bola pristihnutá pri krádeži tovaru v hodnote 256 EUR, ak je to potrebné okrem iného na zistenie jej totožnosti alebo zabránenie jej úteku.',
      C: 'Môžem obmedziť osobnú slobodu podľa Trestného poriadku osoby, ktorá bola pristihnutá pri krádeži tovaru v hodnote 256 EUR, ak je to potrebné okrem iného na zistenie jej totožnosti alebo zabránenie jej úteku, len to súhlasom poškodeného.',
    },
    correct: 'B',
  },
  {
    id: 10,
    text: 'Ste osoba poverená výkonom fyzickej ochrany. Pri výkone stráženia v chránenom objekte na strážnom stanovisku ste pristihli osobu pri pokuse o neoprávnený výstup. Aké máte v tejto situácii oprávnenie podľa zákona o súkromnej bezpečnosti?',
    options: {
      A: 'Som oprávnený na čas nevyhnutný, do príchodu majiteľa chráneného objektu, predviesť na strážne stanovisko osobu, ktorá bola pristihnutá pri páchaní priestupku alebo bezprostredne po spáchaní priestupku.',
      B: 'Nie som oprávnený neznámu osobu predviesť na strážne stanovisko, ale túto po zistení totožnosti zapíšem do evidencie vstupu a výstupu z chráneného objektu a následne ju prepustím.',
      C: 'Som oprávnený na čas nevyhnutný, do príchodu policajta, Vojenskej polície alebo obecnej polície, predviesť na strážne stanovisko neznámu osobu, ktorá nie je oprávnená na výstup z chráneného objektu budovy.',
    },
    correct: 'C',
  },
]
