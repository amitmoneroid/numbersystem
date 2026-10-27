// Keyword-targeted guides published under /knowledge-catalog/.
// Each slug is an exact-match phrase; the H1 uses the same phrase in title case.

export interface Guide {
  slug: string;
  /** Exact-match H1 (title case). */
  h1: string;
  /** <title> tag, keyword first. */
  metaTitle: string;
  description: string;
  /** One-line card summary. */
  summary: string;
  /** Short label used in breadcrumbs and cards. */
  shortLabel: string;
  updated: string;
  readingMinutes: number;
}

export const guides: Guide[] = [
  {
    slug: 'number-system-converter-with-steps',
    h1: 'Number System Converter With Steps',
    metaTitle: 'Number System Converter With Steps – Worked Examples',
    description:
      'Convert with every step shown: positional weights for binary, octal, decimal and hex, plus lakh, crore, million and billion across world number systems.',
    summary: 'Worked conversions that show the division, the weights and the grouping — not just the answer.',
    shortLabel: 'Converter with steps',
    updated: '2026-10-27',
    readingMinutes: 9,
  },
  {
    slug: 'number-system-converter-online',
    h1: 'Number System Converter Online',
    metaTitle: 'Number System Converter Online – Instant Base Conversion',
    description:
      'A free online number system converter that runs in your browser. Convert base 2–36 and benchmark lakh, crore, million and billion against 16 world systems.',
    summary: 'What “online” buys you: instant, private, offline-capable conversion across bases and world systems.',
    shortLabel: 'Converter online',
    updated: '2026-10-27',
    readingMinutes: 8,
  },
  {
    slug: 'number-system-conversion-calculator-with-solution',
    h1: 'Number System Conversion Calculator With Solution',
    metaTitle: 'Number System Conversion Calculator With Solution',
    description:
      'A converter that prints the full solution: division remainders, positional expansion, fractional steps and a benchmark against Indian and world scales.',
    summary: 'Solutions you can hand in: every division, remainder and weight written out.',
    shortLabel: 'Calculator with solution',
    updated: '2026-10-27',
    readingMinutes: 10,
  },
  {
    slug: 'number-system-conversion-pdf',
    h1: 'Number System Conversion PDF',
    metaTitle: 'Number System Conversion PDF – Free Printable Chart',
    description:
      'Download a free 2-page number system conversion PDF: binary, octal, decimal and hex tables, powers of two, lakh and crore scales, world benchmarks.',
    summary: 'A printable 2-page chart: base tables, powers of two, and world scale benchmarks.',
    shortLabel: 'Conversion PDF',
    updated: '2026-10-27',
    readingMinutes: 6,
  },
  {
    slug: 'base-converter-calculator',
    h1: 'Base Converter Calculator',
    metaTitle: 'Base Converter Calculator – Convert Base 2 to 36',
    description:
      'Convert between base 2 and base 36 with steps shown, including binary, octal, decimal, hex, fractions and world numbering benchmarks.',
    summary: 'Any radix from 2 to 36, with the positional expansion and division shown side by side.',
    shortLabel: 'Base converter',
    updated: '2026-10-27',
    readingMinutes: 9,
  },
  {
    slug: 'number-system-conversion-table',
    h1: 'Number System Conversion Table',
    metaTitle: 'Number System Conversion Table – Binary, Octal, Hex',
    description:
      'A complete 0–255 conversion table in decimal, binary, octal and hex, plus powers of two, lakh and crore scales and 16 world numbering systems.',
    summary: 'The 0–255 grid plus the lakh/crore and world-scale tables, all on one page.',
    shortLabel: 'Conversion table',
    updated: '2026-10-27',
    readingMinutes: 7,
  },
];

export function guideHref(slug: string): string {
  return `/knowledge-catalog/${slug}/`;
}
