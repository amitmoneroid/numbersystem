// Copy for the interactive base converter (BaseConverter.astro) in every locale.
// Templates use {placeholders} filled by the component at runtime.

import type { Locale } from './routing';

export interface BaseConverterUi {
  eyebrow: string;
  heading: string;
  valueLabel: string;
  fromLabel: string;
  toLabel: string;
  resultLabel: string;
  /** Word before a base number, e.g. "base". */
  baseWord: string;
  link: string;
  linkAria: string;
  copy: string;
  copyAria: string;
  noteTemplate: string;
  allBasesAria: string;
  labels: { binary: string; octal: string; decimal: string; hex: string };
  /** Full name used in the base picker for base 16. */
  hexSelectLabel: string;
  presetsLabel: string;
  presets: string[];
  footnote: string;
  invalidTemplate: string;
  invalidDigits: string;
  invalidLetters: string;
  fixValue: string;
  alreadyDecimalTitle: string;
  alreadyDecimalCopy: string;
  expandTitle: string;
  sumTemplate: string;
  decimalAnswerTitle: string;
  decimalAnswerCopy: string;
  divideTitle: string;
  readRemainders: string;
  readRemaindersFraction: string;
  /** Word for the remainder in a division step. */
  remainderWord: string;
  /** Word for the carry in a fraction step. */
  carryWord: string;
  copied: string;
  selectManually: string;
  linkCopied: string;
  copyUrl: string;
}

export const baseConverterUi: Record<Locale, BaseConverterUi> = {
  en: {
    eyebrow: 'Base converter calculator',
    heading: 'Convert any base from 2 to 36 — with every step shown',
    valueLabel: 'Value',
    fromLabel: 'From base',
    toLabel: 'To base',
    resultLabel: 'Result',
    baseWord: 'base',
    link: 'Link',
    linkAria: 'Copy a link to this conversion',
    copy: 'Copy',
    copyAria: 'Copy result',
    noteTemplate:
      '{raw} in base {from} = {result} in base {to} (decimal value {decimal})',
    allBasesAria: 'The same value in binary, octal, decimal and hexadecimal',
    labels: { binary: 'Binary', octal: 'Octal', decimal: 'Decimal', hex: 'Hex' },
    hexSelectLabel: 'hexadecimal',
    presetsLabel: 'Try:',
    presets: [
      '156₁₀ → binary',
      '10011100₂ → decimal',
      '255 → hex',
      '1A.8₁₆ → decimal',
      '777₈ → binary',
    ],
    footnote:
      'Integers and fractions are both supported. Digits above 9 use A–F for bases 11–16 and A–Z for bases 17–36. Values are handled as JavaScript numbers, exact to 2⁵³ − 1 (about 9 quadrillion).',
    invalidTemplate:
      '“{raw}” is not a valid base-{from} number. Use digits {digits}.',
    invalidDigits: '0–{max}{letters}',
    invalidLetters: ' and letters A–{last}',
    fixValue: 'Fix the value to see the worked solution.',
    alreadyDecimalTitle: 'Already decimal',
    alreadyDecimalCopy:
      'Both bases are 10, so the value is unchanged: {decimal}.',
    expandTitle:
      'Step 1 — expand each digit by its positional weight (base {from})',
    sumTemplate: 'Sum = {decimal} in decimal.',
    decimalAnswerTitle: 'Step 2 — the decimal value is the answer',
    decimalAnswerCopy:
      'Base {to} is decimal, so no further division is needed.',
    divideTitle: 'Step {step} — divide repeatedly by {to}',
    readRemainders: 'Read the integer remainders bottom-to-top: {int}.',
    readRemaindersFraction:
      'Read the integer remainders bottom-to-top: {int}, then read the fraction carries top-to-bottom: {frac}.',
    remainderWord: 'remainder',
    carryWord: 'carry',
    copied: 'Copied',
    selectManually: 'Select manually',
    linkCopied: 'Link copied',
    copyUrl: 'Copy the URL above',
  },

  es: {
    eyebrow: 'Conversor de bases',
    heading: 'Convierte cualquier base de 2 a 36 — con todos los pasos',
    valueLabel: 'Valor',
    fromLabel: 'Base de origen',
    toLabel: 'Base de destino',
    resultLabel: 'Resultado',
    baseWord: 'base',
    link: 'Enlace',
    linkAria: 'Copiar un enlace a esta conversión',
    copy: 'Copiar',
    copyAria: 'Copiar el resultado',
    noteTemplate:
      '{raw} en base {from} = {result} en base {to} (valor decimal {decimal})',
    allBasesAria: 'El mismo valor en binario, octal, decimal y hexadecimal',
    labels: {
      binary: 'Binario',
      octal: 'Octal',
      decimal: 'Decimal',
      hex: 'Hex',
    },
    hexSelectLabel: 'hexadecimal',
    presetsLabel: 'Prueba:',
    presets: [
      '156₁₀ → binario',
      '10011100₂ → decimal',
      '255 → hexadecimal',
      '1A.8₁₆ → decimal',
      '777₈ → binario',
    ],
    footnote:
      'Se admiten enteros y fracciones. Los dígitos por encima de 9 usan A–F en las bases 11–16 y A–Z en las bases 17–36. Los valores se tratan como números de JavaScript, exactos hasta 2⁵³ − 1 (unos 9 mil billones).',
    invalidTemplate:
      '«{raw}» no es un número válido en base {from}. Usa los dígitos {digits}.',
    invalidDigits: '0–{max}{letters}',
    invalidLetters: ' y las letras A–{last}',
    fixValue: 'Corrige el valor para ver la solución paso a paso.',
    alreadyDecimalTitle: 'Ya está en decimal',
    alreadyDecimalCopy:
      'Ambas bases son 10, así que el valor no cambia: {decimal}.',
    expandTitle:
      'Paso 1 — desarrolla cada dígito por su peso posicional (base {from})',
    sumTemplate: 'Suma = {decimal} en decimal.',
    decimalAnswerTitle: 'Paso 2 — el valor decimal es la respuesta',
    decimalAnswerCopy:
      'La base {to} es decimal, así que no hace falta dividir más.',
    divideTitle: 'Paso {step} — divide repetidamente entre {to}',
    readRemainders: 'Lee los restos de abajo hacia arriba: {int}.',
    readRemaindersFraction:
      'Lee los restos de abajo hacia arriba: {int}; después, lee los acarreos de la fracción de arriba hacia abajo: {frac}.',
    remainderWord: 'resto',
    carryWord: 'acarreo',
    copied: 'Copiado',
    selectManually: 'Selecciona manualmente',
    linkCopied: 'Enlace copiado',
    copyUrl: 'Copia la URL de arriba',
  },

  fr: {
    eyebrow: 'Convertisseur de base',
    heading: 'Convertissez n’importe quelle base de 2 à 36 — avec chaque étape',
    valueLabel: 'Valeur',
    fromLabel: 'Base de départ',
    toLabel: 'Base d’arrivée',
    resultLabel: 'Résultat',
    baseWord: 'base',
    link: 'Lien',
    linkAria: 'Copier un lien vers cette conversion',
    copy: 'Copier',
    copyAria: 'Copier le résultat',
    noteTemplate:
      '{raw} en base {from} = {result} en base {to} (valeur décimale {decimal})',
    allBasesAria: 'La même valeur en binaire, octal, décimal et hexadécimal',
    labels: {
      binary: 'Binaire',
      octal: 'Octal',
      decimal: 'Décimal',
      hex: 'Hex',
    },
    hexSelectLabel: 'hexadécimal',
    presetsLabel: 'Essayez :',
    presets: [
      '156₁₀ → binaire',
      '10011100₂ → décimal',
      '255 → hexadécimal',
      '1A.8₁₆ → décimal',
      '777₈ → binaire',
    ],
    footnote:
      'Les entiers et les fractions sont pris en charge. Au-delà de 9, les chiffres utilisent A–F pour les bases 11 à 16 et A–Z pour les bases 17 à 36. Les valeurs sont traitées comme des nombres JavaScript, exacts jusqu’à 2⁵³ − 1 (environ 9 billiards).',
    invalidTemplate:
      '« {raw} » n’est pas un nombre valide en base {from}. Utilisez les chiffres {digits}.',
    invalidDigits: '0–{max}{letters}',
    invalidLetters: ' et les lettres A–{last}',
    fixValue: 'Corrigez la valeur pour afficher la solution détaillée.',
    alreadyDecimalTitle: 'Déjà en décimal',
    alreadyDecimalCopy:
      'Les deux bases valent 10 : la valeur reste inchangée, {decimal}.',
    expandTitle:
      'Étape 1 — développez chaque chiffre selon son poids de position (base {from})',
    sumTemplate: 'Somme = {decimal} en décimal.',
    decimalAnswerTitle: 'Étape 2 — la valeur décimale est le résultat',
    decimalAnswerCopy:
      'La base {to} est décimale : aucune division supplémentaire n’est nécessaire.',
    divideTitle: 'Étape {step} — divisez successivement par {to}',
    readRemainders:
      'Lisez les restes de bas en haut : {int}.',
    readRemaindersFraction:
      'Lisez les restes de bas en haut : {int}, puis les retenues de la fraction de haut en bas : {frac}.',
    remainderWord: 'reste',
    carryWord: 'retenue',
    copied: 'Copié',
    selectManually: 'Sélectionnez manuellement',
    linkCopied: 'Lien copié',
    copyUrl: 'Copiez l’URL ci-dessus',
  },

  de: {
    eyebrow: 'Basisrechner',
    heading: 'Beliebige Basis von 2 bis 36 umrechnen — mit jedem Rechenschritt',
    valueLabel: 'Wert',
    fromLabel: 'Ausgangsbasis',
    toLabel: 'Zielbasis',
    resultLabel: 'Ergebnis',
    baseWord: 'Basis',
    link: 'Link',
    linkAria: 'Link zu dieser Umrechnung kopieren',
    copy: 'Kopieren',
    copyAria: 'Ergebnis kopieren',
    noteTemplate:
      '{raw} in Basis {from} = {result} in Basis {to} (Dezimalwert {decimal})',
    allBasesAria: 'Derselbe Wert in Binär, Oktal, Dezimal und Hexadezimal',
    labels: {
      binary: 'Binär',
      octal: 'Oktal',
      decimal: 'Dezimal',
      hex: 'Hex',
    },
    hexSelectLabel: 'Hexadezimal',
    presetsLabel: 'Ausprobieren:',
    presets: [
      '156₁₀ → Binär',
      '10011100₂ → Dezimal',
      '255 → Hexadezimal',
      '1A.8₁₆ → Dezimal',
      '777₈ → Binär',
    ],
    footnote:
      'Ganze Zahlen und Brüche werden unterstützt. Ziffern über 9 verwenden A–F für die Basen 11–16 und A–Z für die Basen 17–36. Die Werte werden als JavaScript-Zahlen verarbeitet und sind bis 2⁵³ − 1 exakt (etwa 9 Billiarden).',
    invalidTemplate:
      '„{raw}“ ist keine gültige Zahl in Basis {from}. Verwende die Ziffern {digits}.',
    invalidDigits: '0–{max}{letters}',
    invalidLetters: ' und die Buchstaben A–{last}',
    fixValue: 'Korrigiere den Wert, um den Rechenweg zu sehen.',
    alreadyDecimalTitle: 'Bereits dezimal',
    alreadyDecimalCopy:
      'Beide Basen sind 10, der Wert bleibt unverändert: {decimal}.',
    expandTitle:
      'Schritt 1 — jede Ziffer mit ihrem Stellenwert ausschreiben (Basis {from})',
    sumTemplate: 'Summe = {decimal} im Dezimalsystem.',
    decimalAnswerTitle: 'Schritt 2 — der Dezimalwert ist das Ergebnis',
    decimalAnswerCopy:
      'Basis {to} ist dezimal, eine weitere Division ist nicht nötig.',
    divideTitle: 'Schritt {step} — wiederholt durch {to} teilen',
    readRemainders:
      'Lies die Reste von unten nach oben: {int}.',
    readRemaindersFraction:
      'Lies die Reste von unten nach oben: {int}; lies dann die Überträge des Bruchteils von oben nach unten: {frac}.',
    remainderWord: 'Rest',
    carryWord: 'Übertrag',
    copied: 'Kopiert',
    selectManually: 'Manuell auswählen',
    linkCopied: 'Link kopiert',
    copyUrl: 'URL oben kopieren',
  },

  pt: {
    eyebrow: 'Conversor de bases',
    heading: 'Converta qualquer base de 2 a 36 — com todos os passos',
    valueLabel: 'Valor',
    fromLabel: 'Base de origem',
    toLabel: 'Base de destino',
    resultLabel: 'Resultado',
    baseWord: 'base',
    link: 'Link',
    linkAria: 'Copiar um link para esta conversão',
    copy: 'Copiar',
    copyAria: 'Copiar o resultado',
    noteTemplate:
      '{raw} na base {from} = {result} na base {to} (valor decimal {decimal})',
    allBasesAria: 'O mesmo valor em binário, octal, decimal e hexadecimal',
    labels: {
      binary: 'Binário',
      octal: 'Octal',
      decimal: 'Decimal',
      hex: 'Hex',
    },
    hexSelectLabel: 'hexadecimal',
    presetsLabel: 'Experimente:',
    presets: [
      '156₁₀ → binário',
      '10011100₂ → decimal',
      '255 → hexadecimal',
      '1A.8₁₆ → decimal',
      '777₈ → binário',
    ],
    footnote:
      'Aceita números inteiros e frações. Os dígitos acima de 9 usam A–F nas bases 11–16 e A–Z nas bases 17–36. Os valores são tratados como números JavaScript, exatos até 2⁵³ − 1 (cerca de 9 quatrilhões).',
    invalidTemplate:
      '«{raw}» não é um número válido na base {from}. Use os dígitos {digits}.',
    invalidDigits: '0–{max}{letters}',
    invalidLetters: ' e as letras A–{last}',
    fixValue: 'Corrija o valor para ver a solução passo a passo.',
    alreadyDecimalTitle: 'Já está em decimal',
    alreadyDecimalCopy:
      'As duas bases são 10, por isso o valor não muda: {decimal}.',
    expandTitle:
      'Passo 1 — expanda cada dígito pelo seu peso posicional (base {from})',
    sumTemplate: 'Soma = {decimal} em decimal.',
    decimalAnswerTitle: 'Passo 2 — o valor decimal é a resposta',
    decimalAnswerCopy:
      'A base {to} é decimal, por isso não é preciso dividir mais.',
    divideTitle: 'Passo {step} — divida repetidamente por {to}',
    readRemainders:
      'Leia os restos de baixo para cima: {int}.',
    readRemaindersFraction:
      'Leia os restos de baixo para cima: {int}; depois, leia os transportes da fração de cima para baixo: {frac}.',
    remainderWord: 'resto',
    carryWord: 'transporte',
    copied: 'Copiado',
    selectManually: 'Selecione manualmente',
    linkCopied: 'Link copiado',
    copyUrl: 'Copie o URL acima',
  },

  it: {
    eyebrow: 'Convertitore di base',
    heading: 'Converti qualsiasi base da 2 a 36 — con tutti i passaggi',
    valueLabel: 'Valore',
    fromLabel: 'Base di partenza',
    toLabel: 'Base di arrivo',
    resultLabel: 'Risultato',
    baseWord: 'base',
    link: 'Link',
    linkAria: 'Copia un link a questa conversione',
    copy: 'Copia',
    copyAria: 'Copia il risultato',
    noteTemplate:
      '{raw} in base {from} = {result} in base {to} (valore decimale {decimal})',
    allBasesAria: 'Lo stesso valore in binario, ottale, decimale ed esadecimale',
    labels: {
      binary: 'Binario',
      octal: 'Ottale',
      decimal: 'Decimale',
      hex: 'Esadecimale',
    },
    hexSelectLabel: 'esadecimale',
    presetsLabel: 'Prova:',
    presets: [
      '156₁₀ → binario',
      '10011100₂ → decimale',
      '255 → esadecimale',
      '1A.8₁₆ → decimale',
      '777₈ → binario',
    ],
    footnote:
      'Sono supportati numeri interi e frazioni. Le cifre oltre il 9 usano A–F per le basi 11–16 e A–Z per le basi 17–36. I valori sono gestiti come numeri JavaScript, esatti fino a 2⁵³ − 1 (circa 9 biliardi).',
    invalidTemplate:
      '«{raw}» non è un numero valido in base {from}. Usa le cifre {digits}.',
    invalidDigits: '0–{max}{letters}',
    invalidLetters: ' e le lettere A–{last}',
    fixValue: 'Correggi il valore per vedere la soluzione passo per passo.',
    alreadyDecimalTitle: 'Già decimale',
    alreadyDecimalCopy:
      'Entrambe le basi sono 10, quindi il valore non cambia: {decimal}.',
    expandTitle:
      'Passaggio 1 — sviluppa ogni cifra con il suo peso posizionale (base {from})',
    sumTemplate: 'Somma = {decimal} in decimale.',
    decimalAnswerTitle: 'Passaggio 2 — il valore decimale è il risultato',
    decimalAnswerCopy:
      'La base {to} è decimale, quindi non serve un’ulteriore divisione.',
    divideTitle: 'Passaggio {step} — dividi ripetutamente per {to}',
    readRemainders:
      'Leggi i resti dal basso verso l’alto: {int}.',
    readRemaindersFraction:
      'Leggi i resti dal basso verso l’alto: {int}; poi leggi i riporti della frazione dall’alto verso il basso: {frac}.',
    remainderWord: 'resto',
    carryWord: 'riporto',
    copied: 'Copiato',
    selectManually: 'Seleziona manualmente',
    linkCopied: 'Link copiato',
    copyUrl: 'Copia l’URL qui sopra',
  },
};
