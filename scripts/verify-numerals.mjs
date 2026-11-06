// Build-time numeral assertions.
//
// Run by `npm run build` (prebuild). Fails the build if a published scale,
// numeral or worked step drifts from the arithmetic it claims to show.
//
// Node 24 strips TypeScript types from the imported data module natively.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import {
  formatIndian,
  formatInternational,
  indianScaleExponents,
  powerOfTen,
  scaleDefinitions,
} from '../src/data/scales.ts';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

function read(relativePath) {
  return readFileSync(resolve(root, relativePath), 'utf8');
}

// ── 1. Every scale row must equal 10^exponent in both groupings ─────────────
for (const row of scaleDefinitions) {
  const expected = 10n ** BigInt(row.exponent);
  const intl = BigInt(formatInternational(row.exponent).replace(/,/g, ''));
  const indian = BigInt(formatIndian(row.exponent).replace(/,/g, ''));
  check(intl === expected, `Intl format for 10^${row.exponent} is ${intl}, expected ${expected}`);
  check(indian === expected, `Indian format for 10^${row.exponent} is ${indian}, expected ${expected}`);
  check(
    formatInternational(row.exponent).replace(/,/g, '') === powerOfTen(row.exponent),
    `Intl format for 10^${row.exponent} does not round-trip`,
  );
  check(
    formatIndian(row.exponent).replace(/,/g, '') === powerOfTen(row.exponent),
    `Indian format for 10^${row.exponent} does not round-trip`,
  );
}

// ── 2. Named Indian scales ──────────────────────────────────────────────────
const expectedIndian = {
  Lakh: 5,
  Crore: 7,
  Arab: 9,
  Kharab: 11,
  Neel: 13,
  Padma: 15,
  Shankh: 17,
};
for (const [name, exponent] of Object.entries(expectedIndian)) {
  check(
    indianScaleExponents[name] === exponent,
    `${name} should be 10^${exponent}, got 10^${indianScaleExponents[name]}`,
  );
}

// ── 3. Anchor conversions ───────────────────────────────────────────────────
const anchors = [
  ['1 million = 10 lakh', 10n ** 6n, 10n * 10n ** 5n],
  ['1 billion = 100 crore = 1 arab', 10n ** 9n, 100n * 10n ** 7n],
  ['1 trillion = 1 lakh crore', 10n ** 12n, 10n ** 5n * 10n ** 7n],
  ['1 quadrillion = 1,000 lakh crore', 10n ** 15n, 1000n * 10n ** 5n * 10n ** 7n],
  ['1 shankh = 100 quadrillion', 10n ** 17n, 100n * 10n ** 15n],
];
for (const [label, left, right] of anchors) {
  check(left === right, `Anchor failed: ${label}`);
}

// ── 4. Published prose must match the derived numerals ──────────────────────
const indexPage = read('src/pages/index.astro');
const tablePage = read('src/pages/knowledge-catalog/number-system-conversion-table.astro');
const faq = read('src/data/faq.ts');
const withSteps = read('src/pages/knowledge-catalog/number-system-converter-with-steps.astro');

check(
  indexPage.includes('1 Padma (1,000 Lakh Crore)'),
  'Quick reference must say 1 Quadrillion -> 1 Padma (1,000 Lakh Crore)',
);
check(
  !indexPage.includes('1 Padma (100 Lakh Crore)'),
  'Quick reference still contains the old 100 Lakh Crore error',
);
check(
  indexPage.includes('scaleRows().map'),
  'The reference table must be generated from src/data/scales.ts',
);
check(
  tablePage.includes('scaleRows'),
  'The conversion-table page must be generated from src/data/scales.ts',
);

const tenToTwenty = formatIndian(20);
check(
  faq.includes(tenToTwenty),
  `FAQ must use ${tenToTwenty} for 10^20 (1,000 shankh)`,
);
check(
  !faq.includes('1,00,00,00,00,00,00,00,00,000</strong>, which is <strong>1,000 shankh'),
  'FAQ still contains the 10^19 numeral labelled as 1,000 shankh',
);

check(
  withSteps.includes('78 ÷ 2 = 39 r0, 39 ÷ 2 = 19 r1, 19 ÷ 2 = 9 r1, 9 ÷ 2 = 4 r1, 4 ÷ 2 = 2 r0, 2 ÷ 2 = 1 r0, 1 ÷ 2 = 0 r1'),
  'HowTo step does not match the correct division trail for 156',
);

// ── Report ─────────────────────────────────────────────────────────────────
if (failures.length > 0) {
  console.error('\nNumeral verification failed:');
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}

console.log(`✓ Numeral verification passed (${scaleDefinitions.length} scale rows, ${anchors.length} anchors).`);
