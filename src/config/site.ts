/**
 * All public business facts live here.
 * Prices are intentionally absent — the site must not invent them.
 *
 * TODO(patus): logo — wordmark „Maximo“ is a placeholder until a real logo file exists.
 * TODO(patus): email — none is known. Do not invent an address. When one exists, set `email` and show it on /kontakt/.
 * TODO(patus): confirm the 20 ft layout (catalog: 2 bedrooms; supplier website has also said 1). Edit `layout_sk_draft` in src/data/models.json.
 * TODO(patus): licence to publish FlexiMod photographs and video.
 * TODO(patus): real photos of the Nebojsa show house. Current gallery images are the supplier's.
 */

export const site = {
  name: 'Maximo',
  email: null as string | null,
  logo: null as string | null,
  phone: {
    display: '0902 144 643',
    href: 'tel:+421902144643',
    e164: '+421902144643',
  },
  showhouse: {
    street: 'Hlavná 89',
    zip: '924 01',
    city: 'Nebojsa',
    area: 'Galanta',
    note: 'Obhliadka po telefonickej dohode.',
    googleMaps:
      'https://www.google.com/maps/search/?api=1&query=Hlavn%C3%A1%2089%2C%20924%2001%20Nebojsa',
    mapyCz: 'https://mapy.cz/zakladni?q=Hlavn%C3%A1%2089%2C%20924%2001%20Nebojsa',
  },
  legal: {
    name: 'MAXIMO TRADE s. r. o.',
    street: 'Okružná 437/3',
    zip: '900 50',
    city: 'Hrubá Borša',
    ico: '48 320 315',
    dic: '2120132916',
    vat: 'SK2120132916',
    registry:
      'Zapísaná v Obchodnom registri Mestského súdu Bratislava III, oddiel Sro, vložka č. 130096/B.',
  },
  seo: {
    businessDescription:
      'MAXIMO TRADE s. r. o. predáva skladacie modulárne domy. Uvedená adresa je vzorový dom v Nebojsi, obhliadka po telefonickej dohode. Sídlo spoločnosti: Okružná 437/3, 900 50 Hrubá Borša.',
  },
} as const;

export const nav = [
  { href: '/', label: 'Domov' },
  { href: '/typy-domov/', label: 'Typy domov' },
  { href: '/kontakt/', label: 'Kontakt' },
] as const;

export const sellingPoints = [
  {
    title: 'Rozloženie bez ťažkej techniky',
    text: 'Krídla, podlaha a steny sa otvoria na mieste. Dom sa nemuruje. Ako ho zložiť z auta, závisí od prístupu na pozemok.',
  },
  {
    title: 'Oceľový pozinkovaný rám',
    text: 'Nosná konštrukcia je z pozinkovanej ocele. Farbu rámu si vyberiete: čierna, matná biela, svetlosivá, tmavosivá alebo hnedá.',
  },
  {
    title: 'Izolované sendvičové panely',
    text: 'Steny sú sendvičové panely. Jadro podľa katalógu: EPS, polyuretán, minerálna vlna, grafitové jadro alebo PIR.',
  },
  {
    title: 'Kuchyňa a kúpeľňa',
    text: 'Modely 20, 30 a 40 ft majú v katalógu kuchyňu a kúpeľňu. Menšie a spojené verzie sú otvorený priestor. Rozsah výbavy potvrdí ponuka.',
  },
] as const;

/** Body copy aligned with `unfolding_steps_sk_draft` in models.json. Keep the same length and order. */
export const stepDetails = [
  'Dom cestuje zložený, v šírke vhodnej na kontajner.',
  'Bočné krídla sa roztvoria do strán.',
  'Podlaha krídel sa spustí do jednej roviny.',
  'Steny sa vysunú a uzavrú obvod domu.',
  'Dom stojí. Napojenie a konkrétnu výbavu dohodneme v ponuke.',
] as const;

export const faqs = [
  {
    q: 'Koľko dom stojí?',
    a: 'Cenovú ponuku vám pripravíme na mieru. Cenu na webe neuvádzame, lebo závisí od modelu, izolácie, fasády a výbavy.',
  },
  {
    q: 'Ako dlho trvá rozloženie?',
    a: 'Postup má päť krokov: preprava, krídla, podlaha, steny a uzavretie domu. Koľko to trvá na konkrétnom pozemku, závisí od modelu a od prípravy miesta. Na obhliadke si prejdeme reálny postup.',
  },
  {
    q: 'Treba stavebné povolenie?',
    a: 'Záleží na pozemku, veľkosti a účele. Nevieme to posúdiť všeobecne a táto stránka nie je právne stanovisko. Pred objednávkou si požiadavku overte na príslušnom stavebnom úrade.',
  },
  {
    q: 'Dá sa dom vidieť naživo?',
    a: 'Áno. Vzorový dom je na adrese Hlavná 89, 924 01 Nebojsa pri Galante. Obhliadka je po telefonickej dohode na čísle 0902 144 643.',
  },
  {
    q: 'Ako prebieha doprava?',
    a: 'Dom sa prepravuje zložený. Podľa katalógu sa do kontajnera 40′ HC zmestí viac menších kusov a jeden väčší model. Dopravu na váš pozemok naceníme v ponuke.',
  },
  {
    q: 'Z čoho je dom postavený?',
    a: 'Z oceľového pozinkovaného rámu a izolovaných sendvičových panelov. Jadro panelu sa vyberá z katalógu: EPS, polyuretán, minerálna vlna, grafitové jadro alebo PIR. Konkrétnu skladbu potvrdí ponuka.',
  },
  {
    q: 'Má každý model kuchyňu a kúpeľňu?',
    a: 'Modely 20, 30 a 40 ft majú v katalógu kuchyňu a kúpeľňu. Model 10 ft aj úzke a spojené verzie sú uvedené ako otvorený priestor. Čo bude vo vašej dodávke, vypíšeme v ponuke.',
  },
  {
    q: 'Dá sa zmeniť dispozícia?',
    a: 'Katalóg uvádza orientačné členenie miestností a pred objednávkou ho vieme upraviť. Text na webe vychádza z katalógu dodávateľa.',
  },
  {
    q: 'Dajú sa domy spájať?',
    a: 'Katalóg počíta so spájaním jednotiek vedľa seba alebo za sebou a so skladaním do dvoch podlaží. Či to sedí na váš pozemok, potvrdíme v ponuke.',
  },
] as const;

/**
 * Illustrative chips only — not measured colour samples.
 * Names match `frame_color.sk_values_draft`.
 */
export const frameSwatches = [
  { name: 'Čierna', hex: '#1a1a1a' },
  { name: 'Matná biela', hex: '#e7e2d8' },
  { name: 'Svetlosivá', hex: '#c9c6c0' },
  { name: 'Tmavosivá', hex: '#5c5c5c' },
  { name: 'Hnedá', hex: '#6b4632' },
] as const;
