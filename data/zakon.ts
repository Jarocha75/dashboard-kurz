export type LegalNorm = {
  id: string
  title: string
  subtitle: string
  description: string
  year: string
  pdf: string | null // cesta k PDF v /public/dokumenty/ alebo null ak ešte nie je
}

export const legalNorms: LegalNorm[] = [
  {
    id: 'zakon-473-2005',
    title: 'Zákon č. 473/2005 Z.z.',
    subtitle: 'Zákon o súkromnej bezpečnosti',
    description:
      'Zákon o poskytovaní služieb v oblasti súkromnej bezpečnosti a o zmene a doplnení niektorých zákonov. Upravuje podmienky prevádzkovania bezpečnostných služieb, vydávanie licencií a preukazov odbornej spôsobilosti.',
    year: '2005',
    pdf: '/dokumenty/zakon-473-2005.pdf',
  },
]

export const zakonContent = {
  hero: {
    title: 'Legislatíva',
    subtitle: 'Právne predpisy upravujúce oblasť súkromnej bezpečnosti na Slovensku.',
  },
  sections: {
    main: 'Základné právne predpisy',
    other: 'Ďalšie právne normy',
    emptyOther: 'Ďalšie právne normy budú pridané čoskoro.',
  },
  pdf: {
    download: 'Stiahnuť PDF',
    soon: 'PDF čoskoro',
  },
}

// Sem budú pribúdať ďalšie právne normy
export const dalsiePravneNormy: LegalNorm[] = [
  {
    id: 'vyhlaska-634-2005',
    title: 'Vyhláška MV SR č. 634/2005 Z.z.',
    subtitle: 'Vykonávacia vyhláška k zákonu o súkromnej bezpečnosti',
    description:
      'Vyhláška Ministerstva vnútra Slovenskej republiky, ktorou sa vykonávajú niektoré ustanovenia zákona o poskytovaní služieb v oblasti súkromnej bezpečnosti.',
    year: '2005',
    pdf: '/dokumenty/vyhlaska-634-2005.pdf',
  },
]
