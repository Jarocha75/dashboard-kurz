export type Cinnost = {
  id: string
  text: string
}

export type SluzbaData = {
  title: string
  description: string
  cardSubtitle: string
  cinnosti: Cinnost[]
}

export const straznaSluzba: SluzbaData = {
  title: 'Strážna služba',
  description:
    'Fyzická ochrana osôb a majetku vykonávaná v súlade so zákonom o súkromnej bezpečnosti.',
  cardSubtitle: 'Strážna služba môže zahŕňať nasledujúce činnosti',
  cinnosti: [
    { id: 'a', text: 'ochrana majetku na verejne prístupnom mieste' },
    { id: 'b', text: 'ochrana majetku na inom než verejne prístupnom mieste' },
    { id: 'c', text: 'ochrana osoby' },
    { id: 'd', text: 'ochrana majetku a osoby pri preprave' },
    { id: 'e', text: 'ochrana prepravy majetku a osoby' },
    { id: 'f', text: 'zabezpečovanie poriadku na mieste zhromažďovania osôb' },
    {
      id: 'g',
      text: 'prevádzkovanie zabezpečovacieho systému alebo poplachového systému, prevádzkovanie ich častí, vyhodnocovanie narušenia chráneného objektu alebo chráneného miesta',
    },
    { id: 'h', text: 'vypracúvanie plánu ochrany' },
    {
      id: 'i',
      text: 'monitorovanie pohybu a konania osoby v chránenom objekte, na chránenom mieste alebo v ich okolí',
    },
  ],
}

export const detektivnaSluzba: SluzbaData = {
  title: 'Detektívna služba',
  description:
    'Pátracia a informačná činnosť vykonávaná v súlade so zákonom o súkromnej bezpečnosti.',
  cardSubtitle: 'Detektívna služba môže zahŕňať nasledujúce činnosti',
  cinnosti: [
    { id: 'a', text: 'hľadanie osoby' },
    { id: 'b', text: 'hľadanie majetku' },
    {
      id: 'c',
      text: 'získavanie údajov, ktoré môžu slúžiť ako dôkazný prostriedok v konaní pred súdom alebo správnym orgánom',
    },
    {
      id: 'd',
      text: 'získavanie údajov o osobnom stave fyzickej osoby a získavanie informácií o konaní fyzickej osoby alebo právnickej osoby alebo o ich majetkových pomeroch',
    },
    { id: 'e', text: 'získavanie informácií v súvislosti s vymáhaním pohľadávky' },
    { id: 'f', text: 'získavanie údajov o protiprávnom konaní ohrozujúcom obchodné tajomstvo' },
  ],
}

export const odbornaPriprava: SluzbaData = {
  title: 'Odborná príprava a poradenstvo',
  description:
    'Vzdelávacia a poradenská činnosť v oblasti súkromnej bezpečnosti vykonávaná v súlade so zákonom o súkromnej bezpečnosti.',
  cardSubtitle: 'Odborná príprava a poradenstvo môže zahŕňať nasledujúce činnosti',
  cinnosti: [
    { id: 'a', text: 'príprava na výkon strážnej služby' },
    { id: 'b', text: 'príprava na výkon detektívnej služby' },
    {
      id: 'c',
      text: 'príprava na výkon profesionálnej cezhraničnej prepravy eurovej hotovosti cestnou dopravou',
    },
    {
      id: 'd',
      text: 'poskytovanie odborných rád pri prevádzkovaní profesionálnej cezhraničnej prepravy eurovej hotovosti cestnou dopravou',
    },
    { id: 'e', text: 'poskytovanie odborných rád pri prevádzkovaní strážnej služby' },
    { id: 'f', text: 'poskytovanie odborných rád pri prevádzkovaní detektívnej služby' },
  ],
}
