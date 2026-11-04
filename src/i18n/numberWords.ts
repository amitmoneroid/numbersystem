// Number-to-words for the Indian ⇄ International converter on the translated
// pages. Only the integer part is spelled out, matching the English tool.
//
// Scale conventions:
//   es, fr, de, it — long scale
//   pt             — European Portuguese long scale
// The Indian scale names (lakh, crore, arab, …) stay as borrowed terms.

import type { Locale } from './routing';

export interface NumberWords {
  international(value: number): string;
  indian(value: number): string;
}

const join = (parts: string[]): string =>
  parts.filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();

interface IntlScale {
  value: number;
  words: (chunk: number) => string;
}

interface IndianScale {
  value: number;
  name: string;
}

function buildInternational(
  value: number,
  zero: string,
  scales: IntlScale[],
  under1000: (n: number) => string
): string {
  const n = Math.floor(value);
  if (n === 0) return zero;

  let remaining = n;
  const parts: string[] = [];

  for (const scale of scales) {
    if (remaining >= scale.value) {
      const chunk = Math.floor(remaining / scale.value);
      remaining %= scale.value;
      parts.push(scale.words(chunk));
    }
  }

  if (remaining > 0) parts.push(under1000(remaining));
  return join(parts);
}

function buildIndian(
  value: number,
  zero: string,
  scales: IndianScale[],
  under1000: (n: number) => string,
  thousand: (n: number) => string,
  chunkName: (chunk: number, name: string) => string
): string {
  const n = Math.floor(value);
  if (n === 0) return zero;

  let remaining = n;
  const parts: string[] = [];

  for (const scale of scales) {
    if (remaining >= scale.value) {
      const chunk = Math.floor(remaining / scale.value);
      remaining %= scale.value;
      parts.push(chunkName(chunk, scale.name));
    }
  }

  if (remaining >= 1000) {
    const thousands = Math.floor(remaining / 1000);
    remaining %= 1000;
    parts.push(thousand(thousands));
  }

  if (remaining > 0) parts.push(under1000(remaining));
  return join(parts);
}

/* ─────────────────────────────── Spanish ─────────────────────────────── */

const esOnes = [
  'cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho',
  'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis',
  'diecisiete', 'dieciocho', 'diecinueve',
];
const esTwenties = [
  'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro',
  'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve',
];
const esTens = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
const esHundreds = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

function esUnder100(n: number): string {
  if (n < 20) return esOnes[n];
  if (n < 30) return esTwenties[n - 20];
  const tens = Math.floor(n / 10);
  const units = n % 10;
  return esTens[tens] + (units ? ` y ${esOnes[units]}` : '');
}

function esUnder1000(n: number): string {
  if (n < 100) return esUnder100(n);
  if (n === 100) return 'cien';
  const hundreds = Math.floor(n / 100);
  const rest = n % 100;
  return esHundreds[hundreds] + (rest ? ` ${esUnder100(rest)}` : '');
}

function esApocope(text: string): string {
  return text.replace(/veintiuno$/, 'veintiún').replace(/uno$/, 'un');
}

const esIntlScales: IntlScale[] = [
  { value: 1e18, words: (c) => c === 1 ? 'un trillón' : `${esApocope(esUnder1000(c))} trillones` },
  { value: 1e15, words: (c) => c === 1 ? 'mil billones' : `${esUnder1000(c)} mil billones` },
  { value: 1e12, words: (c) => c === 1 ? 'un billón' : `${esApocope(esUnder1000(c))} billones` },
  { value: 1e9, words: (c) => c === 1 ? 'mil millones' : `${esUnder1000(c)} mil millones` },
  { value: 1e6, words: (c) => c === 1 ? 'un millón' : `${esApocope(esUnder1000(c))} millones` },
  { value: 1e3, words: (c) => c === 1 ? 'mil' : `${esUnder1000(c)} mil` },
];

const esIndianScales: IndianScale[] = [
  { value: 1e17, name: 'shankh' },
  { value: 1e15, name: 'padma' },
  { value: 1e13, name: 'neel' },
  { value: 1e11, name: 'kharab' },
  { value: 1e9, name: 'arab' },
  { value: 1e7, name: 'crore' },
  { value: 1e5, name: 'lakh' },
];

const esChunkName = (chunk: number, name: string): string => {
  if (chunk === 1) return `un ${name}`;
  if (chunk === 1000) return `mil ${name}`;
  return `${esApocope(esUnder1000(chunk))} ${name}`;
};

export const esNumberWords: NumberWords = {
  international: (value) => buildInternational(value, 'cero', esIntlScales, esUnder1000),
  indian: (value) =>
    buildIndian(
      value,
      'cero',
      esIndianScales,
      esUnder1000,
      (n) => n === 1 ? 'mil' : `${esUnder1000(n)} mil`,
      esChunkName
    ),
};

/* ─────────────────────────────── French ─────────────────────────────── */

const frOnes = [
  'zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit',
  'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize',
];
const frTeens = ['dix-sept', 'dix-huit', 'dix-neuf'];
const frTens = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante'];

function frUnder100(n: number): string {
  if (n <= 16) return frOnes[n];
  if (n < 20) return frTeens[n - 17];
  if (n < 70) {
    const tens = Math.floor(n / 10);
    const units = n % 10;
    if (units === 0) return frTens[tens];
    if (units === 1) return `${frTens[tens]} et un`;
    return `${frTens[tens]}-${frOnes[units]}`;
  }
  if (n < 80) {
    if (n === 71) return 'soixante et onze';
    return `soixante-${frUnder100(n - 60)}`;
  }
  if (n === 80) return 'quatre-vingts';
  return `quatre-vingt-${frUnder100(n - 80)}`;
}

function frUnder1000(n: number): string {
  if (n < 100) return frUnder100(n);
  const hundreds = Math.floor(n / 100);
  const rest = n % 100;

  if (hundreds === 1) return rest ? `cent ${frUnder100(rest)}` : 'cent';

  const base = `${frOnes[hundreds]} cent`;
  if (!rest) return `${base}s`;
  return `${base} ${frUnder100(rest)}`;
}

const frIntlScales: IntlScale[] = [
  { value: 1e18, words: (c) => c === 1 ? 'un trillion' : `${frUnder1000(c)} trillions` },
  { value: 1e15, words: (c) => c === 1 ? 'un billiard' : `${frUnder1000(c)} billiards` },
  { value: 1e12, words: (c) => c === 1 ? 'un billion' : `${frUnder1000(c)} billions` },
  { value: 1e9, words: (c) => c === 1 ? 'un milliard' : `${frUnder1000(c)} milliards` },
  { value: 1e6, words: (c) => c === 1 ? 'un million' : `${frUnder1000(c)} millions` },
  { value: 1e3, words: (c) => c === 1 ? 'mille' : `${frUnder1000(c)} mille` },
];

const frIndianScales: IndianScale[] = [
  { value: 1e17, name: 'shankh' },
  { value: 1e15, name: 'padma' },
  { value: 1e13, name: 'neel' },
  { value: 1e11, name: 'kharab' },
  { value: 1e9, name: 'arab' },
  { value: 1e7, name: 'crore' },
  { value: 1e5, name: 'lakh' },
];

const frChunkName = (chunk: number, name: string): string => {
  if (chunk === 1) return `un ${name}`;
  if (chunk === 1000) return `mille ${name}`;
  return `${frUnder1000(chunk)} ${name}`;
};

export const frNumberWords: NumberWords = {
  international: (value) => buildInternational(value, 'zéro', frIntlScales, frUnder1000),
  indian: (value) =>
    buildIndian(
      value,
      'zéro',
      frIndianScales,
      frUnder1000,
      (n) => n === 1 ? 'mille' : `${frUnder1000(n)} mille`,
      frChunkName
    ),
};

/* ─────────────────────────────── German ─────────────────────────────── */

const deOnes = [
  'null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht',
  'neun', 'zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn',
  'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn',
];
const deTens = ['', '', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];

function deUnder100(n: number): string {
  if (n < 20) return deOnes[n];
  const tens = Math.floor(n / 10);
  const units = n % 10;
  if (units === 0) return deTens[tens];
  const unit = units === 1 ? 'ein' : deOnes[units];
  return `${unit}und${deTens[tens]}`;
}

function deUnder1000(n: number): string {
  if (n < 100) return deUnder100(n);
  const hundreds = Math.floor(n / 100);
  const rest = n % 100;
  const prefix = hundreds === 1 ? 'ein' : deOnes[hundreds];
  return `${prefix}hundert${rest ? deUnder100(rest) : ''}`;
}

const deIntlScales: IntlScale[] = [
  { value: 1e18, words: (c) => c === 1 ? 'eine Trillion' : `${deUnder1000(c)} Trillionen` },
  { value: 1e15, words: (c) => c === 1 ? 'eine Billiarde' : `${deUnder1000(c)} Billiarden` },
  { value: 1e12, words: (c) => c === 1 ? 'eine Billion' : `${deUnder1000(c)} Billionen` },
  { value: 1e9, words: (c) => c === 1 ? 'eine Milliarde' : `${deUnder1000(c)} Milliarden` },
  { value: 1e6, words: (c) => c === 1 ? 'eine Million' : `${deUnder1000(c)} Millionen` },
  { value: 1e3, words: (c) => c === 1 ? 'eintausend' : `${deUnder1000(c)}tausend` },
];

const deIndianScales: IndianScale[] = [
  { value: 1e17, name: 'Shankh' },
  { value: 1e15, name: 'Padma' },
  { value: 1e13, name: 'Neel' },
  { value: 1e11, name: 'Kharab' },
  { value: 1e9, name: 'Arab' },
  { value: 1e7, name: 'Crore' },
  { value: 1e5, name: 'Lakh' },
];

const deChunkName = (chunk: number, name: string): string => {
  if (chunk === 1) return `ein ${name}`;
  if (chunk === 1000) return `eintausend ${name}`;
  return `${deUnder1000(chunk)} ${name}`;
};

const deTidy = (text: string): string =>
  text.replace(/tausend\s+(?=[a-zäöüß])/g, 'tausend');

export const deNumberWords: NumberWords = {
  international: (value) =>
    deTidy(buildInternational(value, 'null', deIntlScales, deUnder1000)),
  indian: (value) =>
    deTidy(
      buildIndian(
        value,
        'null',
        deIndianScales,
        deUnder1000,
        (n) => n === 1 ? 'eintausend' : `${deUnder1000(n)}tausend`,
        deChunkName
      )
    ),
};

/* ────────────────────────────── Portuguese ───────────────────────────── */

const ptOnes = [
  'zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito',
  'nove', 'dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezasseis',
  'dezassete', 'dezoito', 'dezanove',
];
const ptTens = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
const ptHundreds = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

function ptUnder100(n: number): string {
  if (n < 20) return ptOnes[n];
  const tens = Math.floor(n / 10);
  const units = n % 10;
  return ptTens[tens] + (units ? ` e ${ptOnes[units]}` : '');
}

function ptUnder1000(n: number): string {
  if (n < 100) return ptUnder100(n);
  if (n === 100) return 'cem';
  const hundreds = Math.floor(n / 100);
  const rest = n % 100;
  const base = hundreds === 1 ? 'cento' : ptHundreds[hundreds];
  return base + (rest ? ` e ${ptUnder100(rest)}` : '');
}

const ptIntlScales: IntlScale[] = [
  { value: 1e18, words: (c) => c === 1 ? 'um trilião' : `${ptUnder1000(c)} triliões` },
  { value: 1e15, words: (c) => c === 1 ? 'mil biliões' : `${ptUnder1000(c)} mil biliões` },
  { value: 1e12, words: (c) => c === 1 ? 'um bilião' : `${ptUnder1000(c)} biliões` },
  { value: 1e9, words: (c) => c === 1 ? 'mil milhões' : `${ptUnder1000(c)} mil milhões` },
  { value: 1e6, words: (c) => c === 1 ? 'um milhão' : `${ptUnder1000(c)} milhões` },
  { value: 1e3, words: (c) => c === 1 ? 'mil' : `${ptUnder1000(c)} mil` },
];

const ptIndianScales: IndianScale[] = [
  { value: 1e17, name: 'shankh' },
  { value: 1e15, name: 'padma' },
  { value: 1e13, name: 'neel' },
  { value: 1e11, name: 'kharab' },
  { value: 1e9, name: 'arab' },
  { value: 1e7, name: 'crore' },
  { value: 1e5, name: 'lakh' },
];

const ptChunkName = (chunk: number, name: string): string => {
  if (chunk === 1) return `um ${name}`;
  if (chunk === 1000) return `mil ${name}`;
  return `${ptUnder1000(chunk)} ${name}`;
};

export const ptNumberWords: NumberWords = {
  international: (value) => buildInternational(value, 'zero', ptIntlScales, ptUnder1000),
  indian: (value) =>
    buildIndian(
      value,
      'zero',
      ptIndianScales,
      ptUnder1000,
      (n) => n === 1 ? 'mil' : `${ptUnder1000(n)} mil`,
      ptChunkName
    ),
};

/* ─────────────────────────────── Italian ─────────────────────────────── */

const itOnes = [
  'zero', 'uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto',
  'nove', 'dieci', 'undici', 'dodici', 'tredici', 'quattordici', 'quindici',
  'sedici',
];
const itTeens = ['diciassette', 'diciotto', 'diciannove'];
const itTens = ['', '', 'venti', 'trenta', 'quaranta', 'cinquanta', 'sessanta', 'settanta', 'ottanta', 'novanta'];

function itUnder100(n: number): string {
  if (n <= 16) return itOnes[n];
  if (n < 20) return itTeens[n - 17];
  const tens = Math.floor(n / 10);
  const units = n % 10;
  if (units === 0) return itTens[tens];
  if (units === 3) return `${itTens[tens]}tré`;
  if (units === 1 || units === 8) {
    return `${itTens[tens].slice(0, -1)}${itOnes[units]}`;
  }
  return `${itTens[tens]}${itOnes[units]}`;
}

function itUnder1000(n: number): string {
  if (n < 100) return itUnder100(n);
  const hundreds = Math.floor(n / 100);
  const rest = n % 100;
  const base = hundreds === 1 ? 'cento' : `${itOnes[hundreds]}cento`;
  if (!rest) return base;

  const restWords = itUnder100(rest);
  // cento + ottanta -> centottanta, but cento + uno -> centouno.
  const stem = restWords.startsWith('ottant') ? base.slice(0, -1) : base;
  return `${stem}${restWords}`;
}

const itIntlScales: IntlScale[] = [
  { value: 1e18, words: (c) => c === 1 ? 'un trilione' : `${itUnder1000(c)} trilioni` },
  { value: 1e15, words: (c) => c === 1 ? 'mille bilioni' : `${itUnder1000(c)} mila bilioni` },
  { value: 1e12, words: (c) => c === 1 ? 'un bilione' : `${itUnder1000(c)} bilioni` },
  { value: 1e9, words: (c) => c === 1 ? 'un miliardo' : `${itUnder1000(c)} miliardi` },
  { value: 1e6, words: (c) => c === 1 ? 'un milione' : `${itUnder1000(c)} milioni` },
  { value: 1e3, words: (c) => c === 1 ? 'mille' : `${itUnder1000(c)}mila` },
];

const itIndianScales: IndianScale[] = [
  { value: 1e17, name: 'shankh' },
  { value: 1e15, name: 'padma' },
  { value: 1e13, name: 'neel' },
  { value: 1e11, name: 'kharab' },
  { value: 1e9, name: 'arab' },
  { value: 1e7, name: 'crore' },
  { value: 1e5, name: 'lakh' },
];

const itChunkName = (chunk: number, name: string): string => {
  if (chunk === 1) return `un ${name}`;
  if (chunk === 1000) return `mille ${name}`;
  return `${itUnder1000(chunk)} ${name}`;
};

const itTidy = (text: string): string =>
  text.replace(
    /mila\s+(?!(?:milioni|miliardi|bilioni|trilioni|mila)\b)/g,
    'mila'
  );

export const itNumberWords: NumberWords = {
  international: (value) =>
    itTidy(buildInternational(value, 'zero', itIntlScales, itUnder1000)),
  indian: (value) =>
    itTidy(
      buildIndian(
        value,
        'zero',
        itIndianScales,
        itUnder1000,
        (n) => n === 1 ? 'mille' : `${itUnder1000(n)}mila`,
        itChunkName
      )
    ),
};

export const numberWords: Record<Exclude<Locale, 'en'>, NumberWords> = {
  es: esNumberWords,
  fr: frNumberWords,
  de: deNumberWords,
  pt: ptNumberWords,
  it: itNumberWords,
};
