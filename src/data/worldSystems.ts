// Single source of truth for how number naming works across languages.
// Every figure below is benchmarked against the English (short-scale)
// International system: 1 billion = 10^9, 1 trillion = 10^12.

export interface WorldSystem {
  id: string;
  name: string;
  region: string;
  /** How digits are grouped when written/spoken. */
  grouping: string;
  /** short = new name every 10^3, long = every 10^6, myriad = every 10^4 */
  scale: 'short' | 'long' | 'myriad' | 'indian';
  tenToSix: string;
  tenToNine: string;
  tenToTwelve: string;
  /** Plain-language benchmark against the International system. */
  benchmark: string;
  /** The nuance that trips up translators, journalists and finance teams. */
  nuance: string;
}

export const worldSystems: WorldSystem[] = [
  {
    id: 'indian',
    name: 'Indian (South Asian)',
    region: 'India, Pakistan, Bangladesh, Nepal, Sri Lanka',
    grouping: '3 digits, then 2 digits (1,00,00,00,000)',
    scale: 'indian',
    tenToSix: '10 lakh',
    tenToNine: '1 arab (100 crore)',
    tenToTwelve: '1 lakh crore',
    benchmark: '1 billion = 1 arab = 100 crore. 1 trillion = 1 lakh crore = 1,00,000 crore.',
    nuance:
      'The named steps are 10^5 (lakh), 10^7 (crore), 10^9 (arab), 10^11 (kharab), 10^13 (neel), 10^15 (padma) and 10^17 (shankh). Because the steps after 1,000 are hundreds, not thousands, a comma sits after every two digits.',
  },
  {
    id: 'portuguese',
    name: 'Portuguese',
    region: 'Portugal, Brazil, Angola, Mozambique',
    grouping: '3 digits, with a space or dot (1 000 000 000)',
    scale: 'long',
    tenToSix: 'um milhão',
    tenToNine: 'mil milhões (Portugal) / um bilhão (Brazil)',
    tenToTwelve: 'um bilião (Portugal) / um trilhão (Brazil)',
    benchmark:
      'Portugal: 1 billion = mil milhões (a thousand millions), and 1 trillion = um bilião. Brazil: 1 billion = um bilhão, 1 trillion = um trilhão.',
    nuance:
      'Portuguese is split down the middle. Portugal keeps the long scale, so "bilião" is 10^12 — a thousand times bigger than the English billion. Brazil uses the short scale, so "bilhão" is 10^9. A Portuguese news headline and a Brazilian one can print the same phrase and mean different magnitudes.',
  },
  {
    id: 'spanish',
    name: 'Spanish (Hispanic)',
    region: 'Spain, Mexico, Colombia, Argentina, most of Latin America',
    grouping: '3 digits, with a dot or space (1.000.000.000)',
    scale: 'long',
    tenToSix: 'un millón',
    tenToNine: 'mil millones',
    tenToTwelve: 'un billón',
    benchmark: 'English 1 billion = mil millones. English 1 trillion = un billón. English 1 quintillion = un trillón (10^18).',
    nuance:
      '"Billón" is a false friend. In Spanish it means 10^12, not 10^9 — so "un billón de dólares" is a trillion dollars, not a billion. There is no everyday Spanish word for 10^9; speakers say "mil millones" instead. RAE prescribes the long scale across the Spanish-speaking world.',
  },
  {
    id: 'french',
    name: 'French',
    region: 'France, Belgium, Switzerland, Canada (Quebec), West Africa',
    grouping: '3 digits, with a space (1 000 000 000)',
    scale: 'long',
    tenToSix: 'un million',
    tenToNine: 'un milliard',
    tenToTwelve: 'un billion',
    benchmark: 'English 1 billion = un milliard. English 1 trillion = un billion. English 1 quadrillion = un billiard (10^15).',
    nuance:
      'French keeps a word — milliard — for 10^9, which English gave up in the 1970s. Its "billion" therefore starts one step later, at 10^12. French-language Canadian federal documents use the same long scale.',
  },
  {
    id: 'german',
    name: 'German',
    region: 'Germany, Austria, Switzerland, Luxembourg',
    grouping: '3 digits, with a dot as thousands separator (1.000.000.000)',
    scale: 'long',
    tenToSix: 'eine Million',
    tenToNine: 'eine Milliarde',
    tenToTwelve: 'eine Billion',
    benchmark: 'English 1 billion = eine Milliarde. English 1 trillion = eine Billion. English 1 quadrillion = eine Billiarde (10^15).',
    nuance:
      'German uses a full stop where English uses a comma, so "1.000.000" is one million, not one point zero. The -arde suffix marks the thousand-step (Milliarde = 10^9, Billiarde = 10^15); the -ion suffix marks the million-step (Billion = 10^12).',
  },
  {
    id: 'italian',
    name: 'Italian',
    region: 'Italy, San Marino, Switzerland (Ticino)',
    grouping: '3 digits, with a dot (1.000.000.000)',
    scale: 'long',
    tenToSix: 'un milione',
    tenToNine: 'un miliardo',
    tenToTwelve: 'un bilione',
    benchmark: 'English 1 billion = un miliardo. English 1 trillion = un bilione.',
    nuance:
      'Italian follows the French pattern: miliardo covers 10^9 and bilione is reserved for 10^12. English-language press releases translated word-for-word into "bilione" overstate the figure by 1,000×.',
  },
  {
    id: 'dutch',
    name: 'Dutch',
    region: 'Netherlands, Belgium (Flanders), Suriname',
    grouping: '3 digits, with a dot (1.000.000.000)',
    scale: 'long',
    tenToSix: 'een miljoen',
    tenToNine: 'een miljard',
    tenToTwelve: 'een biljoen',
    benchmark: 'English 1 billion = een miljard. English 1 trillion = een biljoen.',
    nuance:
      'Dutch "biljoen" is 10^12 and "biljard" is 10^15 — a different word from the English "billiard". Dutch and German financial copy can therefore look almost identical while meaning the same long-scale values.',
  },
  {
    id: 'polish',
    name: 'Polish',
    region: 'Poland',
    grouping: '3 digits, with a space (1 000 000 000)',
    scale: 'long',
    tenToSix: 'milion',
    tenToNine: 'miliard',
    tenToTwelve: 'bilion',
    benchmark: 'English 1 billion = miliard. English 1 trillion = bilion.',
    nuance:
      'Like most of continental Europe, Polish reserves "bilion" for 10^12. Only the English-speaking world, Brazil and a handful of others moved 10^9 onto the "b-" word.',
  },
  {
    id: 'swedish',
    name: 'Swedish',
    region: 'Sweden, Finland (Swedish-speaking)',
    grouping: '3 digits, with a space (1 000 000 000)',
    scale: 'long',
    tenToSix: 'en miljon',
    tenToNine: 'en miljard',
    tenToTwelve: 'en biljon',
    benchmark: 'English 1 billion = en miljard. English 1 trillion = en biljon.',
    nuance:
      'Swedish "biljon" is 10^12 and "biljard" is 10^15. Danish and Norwegian follow the same pattern, so the whole Nordic region counts a step behind English.',
  },
  {
    id: 'russian',
    name: 'Russian',
    region: 'Russia, Belarus, Kazakhstan, Central Asia',
    grouping: '3 digits, with a space (1 000 000 000)',
    scale: 'short',
    tenToSix: 'миллион (million)',
    tenToNine: 'миллиард (milliard)',
    tenToTwelve: 'триллион (trillion)',
    benchmark: 'English 1 billion = миллиард (milliard). English 1 trillion = триллион.',
    nuance:
      'Russian uses the short scale but keeps the word "milliard" for 10^9, exactly like English keeps "billion". The scale matches English; only the 10^9 label differs.',
  },
  {
    id: 'arabic',
    name: 'Arabic',
    region: 'Middle East and North Africa',
    grouping: '3 digits; Arabic-Indic digits ٠١٢٣٤٥٦٧٨٩ in some countries',
    scale: 'short',
    tenToSix: 'مليون (milyūn)',
    tenToNine: 'مليار (milyār)',
    tenToTwelve: 'تريليون (trilyūn)',
    benchmark: 'English 1 billion = مليار (milyār). English 1 trillion = تريليون (trilyūn).',
    nuance:
      'Modern Arabic press uses the short scale, so the magnitudes match English. The number itself may be written with Arabic-Indic digits and a different decimal separator (٫), which is where automatic parsers break.',
  },
  {
    id: 'japanese',
    name: 'Japanese',
    region: 'Japan',
    grouping: '4 digits (10,000 = 1万)',
    scale: 'myriad',
    tenToSix: '百万 (hyaku-man)',
    tenToNine: '十億 (jū-oku)',
    tenToTwelve: '一兆 (itchō)',
    benchmark: 'English 1 billion = 10億 (jū-oku). English 1 trillion = 1兆 (itchō).',
    nuance:
      'Japanese groups digits in fours, not threes: 万 (man) = 10^4, 億 (oku) = 10^8, 兆 (chō) = 10^12. There is no native word for 10^9 — one billion is literally "ten hundred-million" (十億). Comma placement in Japanese financial documents reflects the four-digit grouping.',
  },
  {
    id: 'chinese',
    name: 'Chinese (Mandarin)',
    region: 'China, Taiwan, Singapore',
    grouping: '4 digits (10,000 = 1万)',
    scale: 'myriad',
    tenToSix: '百万 (bǎi wàn)',
    tenToNine: '十亿 (shí yì)',
    tenToTwelve: '一兆 (yī zhào) / 万亿 (wàn yì)',
    benchmark: 'English 1 billion = 十亿 (shí yì). English 1 trillion = 兆 (zhào) or 万亿.',
    nuance:
      'Chinese uses 万 (wàn) = 10^4 and 亿 (yì) = 10^8, so every English -illion boundary lands mid-group. Mainland usage often writes 1 trillion as 万亿 ("ten thousand hundred-millions"), while Taiwan prefers 兆 — both are correct, and both look nothing like the International grouping.',
  },
  {
    id: 'korean',
    name: 'Korean',
    region: 'South Korea, North Korea',
    grouping: '4 digits (10,000 = 만)',
    scale: 'myriad',
    tenToSix: '백만 (baekman)',
    tenToNine: '십억 (sibeok)',
    tenToTwelve: '일조 (iljo)',
    benchmark: 'English 1 billion = 십억 (sibeok). English 1 trillion = 일조 (iljo).',
    nuance:
      'Korean uses the Sino-Korean myriad series: 만 (man) 10^4, 억 (eok) 10^8, 조 (jo) 10^12, 경 (gyeong) 10^16. Korean stock-market and budget figures are often quoted in 억 원 (hundred-million won), so a "1 billion" round number becomes 10억.',
  },
  {
    id: 'turkish',
    name: 'Turkish',
    region: 'Türkiye, Northern Cyprus',
    grouping: '3 digits, with a dot (1.000.000.000)',
    scale: 'short',
    tenToSix: 'milyon',
    tenToNine: 'milyar',
    tenToTwelve: 'trilyon',
    benchmark: 'English 1 billion = milyar. English 1 trillion = trilyon.',
    nuance:
      'Turkish aligns with the International short scale, but uses a dot for thousands and a comma for decimals — the reverse of English. "1.500" means fifteen hundred, not one and a half.',
  },
  {
    id: 'indonesian',
    name: 'Indonesian / Malay',
    region: 'Indonesia, Malaysia, Brunei',
    grouping: '3 digits, with a dot (1.000.000.000)',
    scale: 'short',
    tenToSix: 'juta',
    tenToNine: 'miliar',
    tenToTwelve: 'triliun',
    benchmark: 'English 1 billion = miliar. English 1 trillion = triliun.',
    nuance:
      'Indonesian and Malay use the short scale and match English magnitudes, which makes them a useful bridge language for Southeast Asian financial reporting.',
  },
];

export interface Nuance {
  id: string;
  code: string;
  title: string;
  body: string;
  example: string;
  guideSlug: string;
}

/** Editorial deep-dives reused across the keyword guides. */
export const nuances: Nuance[] = [
  {
    id: 'portugal-brazil',
    code: 'PT',
    title: 'Portuguese splits two ways: Portugal 10¹², Brazil 10⁹',
    body:
      'Portugal kept the long scale, so "um bilião" is one trillion. Brazil adopted the short scale, so "um bilhão" is one billion. The same sentence in a Lisbon paper and a São Paulo paper describes values a thousand times apart.',
    example: 'R$ 5 bilhões (Brazil) = € 5 mil milhões (Portugal) = 5 billion = 500 crore.',
    guideSlug: 'number-system-converter-with-steps',
  },
  {
    id: 'spanish-billon',
    code: 'ES',
    title: 'Spanish "billón" is not a billion — it is a trillion',
    body:
      'Spanish has no everyday word for 10⁹; speakers say "mil millones". A "billón" is 10¹². Translated press releases routinely turn a trillion-dollar figure into a billion-dollar one by swapping the words.',
    example: 'US$ 1 billón = US$ 1 trillion = 1 lakh crore = 1,000,000,000,000.',
    guideSlug: 'number-system-conversion-table',
  },
  {
    id: 'japanese-myriad',
    code: 'JP',
    title: 'Japanese and Chinese group in fours, not threes',
    body:
      '万 (man) is 10⁴, 億 (oku / yì) is 10⁸, 兆 (chō / zhào) is 10¹². Because the grouping is four digits, there is no native word for a billion: it is 10億, "ten hundred-million".',
    example: '1,000,000,000 = 10億 = 10 × 10⁸. 1,000,000,000,000 = 1兆.',
    guideSlug: 'number-system-converter-with-steps',
  },
  {
    id: 'french-milliard',
    code: 'FR',
    title: 'French and German keep a word for a thousand million',
    body:
      'English retired "milliard" in the 1970s and moved "billion" down to 10⁹. French (milliard), German (Milliarde), Dutch (miljard) and Italian (miliardo) did not, so their "billion" still begins at 10¹².',
    example: '1 milliard = 1 Milliarde = 1 billion = 10⁹. 1 billion = 1 Billion = 10¹².',
    guideSlug: 'number-system-conversion-calculator-with-solution',
  },
  {
    id: 'indian-lakh',
    code: 'IN',
    title: 'India adds a step at 10⁵ and then counts in hundreds',
    body:
      'The Indian system names 10⁵ (lakh), 10⁷ (crore), 10⁹ (arab), 10¹¹ (kharab), 10¹³ (neel), 10¹⁵ (padma) and 10¹⁷ (shankh). The two-digit grouping means a number such as 12,34,56,789 has four comma groups where International would have three.',
    example: '1 crore = 10 million. 1 arab = 1 billion. 1 lakh crore = 1 trillion.',
    guideSlug: 'number-system-conversion-table',
  },
  {
    id: 'arabic-digits',
    code: 'SA',
    title: 'Arabic keeps the short scale but changes the digits',
    body:
      'Modern Arabic uses the short scale (مليار = 10⁹), so magnitudes line up with English. What changes is the numeral set and the decimal separator, which is why copy-pasted Arabic figures often fail in Western calculators.',
    example: '١٠٠٠ = 1,000. ٢٫٥ = 2.5. ١ مليار = 1 billion.',
    guideSlug: 'base-converter-calculator',
  },
  {
    id: 'korean-eok',
    code: 'KR',
    title: 'Korean budgets are quoted in 억 (hundred millions)',
    body:
      'Korean follows the Chinese myriad system: 억 (eok) = 10⁸, 조 (jo) = 10¹². A "10억 원" budget is one billion won, not ten billion — the unit already carries two extra zeros.',
    example: '10억 = 1,000,000,000 = 1 billion. 1조 = 1,000,000,000,000 = 1 trillion.',
    guideSlug: 'number-system-converter-online',
  },
];
