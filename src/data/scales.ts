// Single source of truth for the Indian ⇄ International scale table.
//
// Every numeral published on the site is derived from the exponent with BigInt
// arithmetic, so a row cannot drift from its value. `scripts/verify-numerals.mjs`
// re-checks these invariants at build time and fails the build on a mismatch.

export interface ScaleDefinition {
  /** Power of ten, e.g. 7 for crore. */
  exponent: number;
  /** Name used by the International short scale. */
  intlName: string;
  /** Name used by the Indian numbering system, where one exists. */
  indianName: string;
}

export const scaleDefinitions: ScaleDefinition[] = [
  { exponent: 3, intlName: 'Thousand', indianName: 'Thousand' },
  { exponent: 4, intlName: 'Ten Thousand', indianName: 'Ten Thousand' },
  { exponent: 5, intlName: 'Hundred Thousand', indianName: 'Lakh' },
  { exponent: 6, intlName: 'Million', indianName: 'Ten Lakh' },
  { exponent: 7, intlName: 'Ten Million', indianName: 'Crore' },
  { exponent: 8, intlName: 'Hundred Million', indianName: 'Ten Crore' },
  { exponent: 9, intlName: 'Billion', indianName: 'Arab' },
  { exponent: 10, intlName: 'Ten Billion', indianName: 'Hundred Crore' },
  { exponent: 11, intlName: 'Hundred Billion', indianName: 'Kharab' },
  { exponent: 12, intlName: 'Trillion', indianName: 'Lakh Crore' },
  { exponent: 13, intlName: 'Ten Trillion', indianName: 'Neel' },
  { exponent: 14, intlName: 'Hundred Trillion', indianName: 'Ten Neel' },
  { exponent: 15, intlName: 'Quadrillion', indianName: 'Padma' },
  { exponent: 16, intlName: 'Ten Quadrillion', indianName: 'Ten Padma' },
  { exponent: 17, intlName: 'Hundred Quadrillion', indianName: 'Shankh' },
];

/** Named Indian scale units, used by the verification script and the converter. */
export const indianScaleExponents: Record<string, number> = {
  Lakh: 5,
  Crore: 7,
  Arab: 9,
  Kharab: 11,
  Neel: 13,
  Padma: 15,
  Shankh: 17,
};

const SUPERSCRIPT_DIGITS = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];

/** 7 -> "10⁷" */
export function powerLabel(exponent: number): string {
  const digits = String(exponent)
    .split('')
    .map((digit) => SUPERSCRIPT_DIGITS[Number(digit)])
    .join('');
  return `10${digits}`;
}

/** 10^n as an integer string, without grouping. */
export function powerOfTen(exponent: number): string {
  return (10n ** BigInt(exponent)).toString();
}

/** Group a digit string in threes: 1234567 -> "1,234,567". */
export function groupInternational(digits: string): string {
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/** Group a digit string the Indian way: 1234567 -> "12,34,567". */
export function groupIndian(digits: string): string {
  if (digits.length <= 3) return digits;
  const lastThree = digits.slice(-3);
  const rest = digits.slice(0, -3);
  return `${rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',')},${lastThree}`;
}

export function formatInternational(exponent: number): string {
  return groupInternational(powerOfTen(exponent));
}

export function formatIndian(exponent: number): string {
  return groupIndian(powerOfTen(exponent));
}

/** Rows for the reference tables, with every numeral derived from the exponent. */
export function scaleRows() {
  return scaleDefinitions.map((row) => ({
    ...row,
    power: powerLabel(row.exponent),
    intlFormat: formatInternational(row.exponent),
    indianFormat: formatIndian(row.exponent),
  }));
}
