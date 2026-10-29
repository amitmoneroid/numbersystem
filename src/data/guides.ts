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
  /** First publication date (ISO). */
  published: string;
  /** Last substantive review (ISO). */
  updated: string;
  readingMinutes: number;
  /** 45–60 word direct answer rendered under the H1. */
  answer: string;
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
    published: '2026-10-14',
    updated: '2026-10-27',
    readingMinutes: 5,
    answer:
      'A number system converter with steps shows two things: the positional weights that turn the source number into decimal, then the repeated division that turns decimal into the target base. This page works through 156₁₀ → 10011100₂ and back, for any base from 2 to 36.',
  },
  {
    slug: 'number-system-converter-online',
    h1: 'Number System Converter Online',
    metaTitle: 'Number System Converter Online – Instant Base Conversion',
    description:
      'A free online number system converter that runs in your browser. Convert base 2–36 and benchmark lakh, crore, million and billion against 16 world systems.',
    summary: 'What “online” buys you: instant, private, offline-capable conversion across bases and world systems.',
    shortLabel: 'Converter online',
    published: '2026-10-16',
    updated: '2026-10-27',
    readingMinutes: 5,
    answer:
      'An online number system converter converts between bases without installing anything: type a value, choose the source and target base, and the answer appears as you type. This one runs entirely in your browser, supports base 2–36 including fractions, and keeps working offline once the page has loaded.',
  },
  {
    slug: 'number-system-conversion-calculator-with-solution',
    h1: 'Number System Conversion Calculator With Solution',
    metaTitle: 'Number System Conversion Calculator With Solution',
    description:
      'A converter that prints the full solution: division remainders, positional expansion, fractional steps and a benchmark against Indian and world scales.',
    summary: 'Solutions you can hand in: every division, remainder and weight written out.',
    shortLabel: 'Calculator with solution',
    published: '2026-10-18',
    updated: '2026-10-27',
    readingMinutes: 5,
    answer:
      'A number system conversion calculator with solution prints the answer, every division with its remainder, the final digit string, and the direction to read it (remainders bottom-to-top). This page shows the full solution for bases 2–36, including fractions such as 0.6875₁₀ = 0.1011₂.',
  },
  {
    slug: 'number-system-conversion-pdf',
    h1: 'Number System Conversion PDF',
    metaTitle: 'Number System Conversion PDF – Free Printable Chart',
    description:
      'Download a free 2-page number system conversion PDF: binary, octal, decimal and hex tables, powers of two, lakh and crore scales, world benchmarks.',
    summary: 'A printable 2-page chart: base tables, powers of two, and world scale benchmarks.',
    shortLabel: 'Conversion PDF',
    published: '2026-10-21',
    updated: '2026-10-27',
    readingMinutes: 4,
    answer:
      'The free number system conversion PDF is a two-page printable chart. Page 1 lists 0–63 in decimal, binary, octal and hexadecimal with powers of two; page 2 shows the repeated-division and positional-weight methods, the lakh/crore scale table, and where “billion” changes meaning across ten languages.',
  },
  {
    slug: 'base-converter-calculator',
    h1: 'Base Converter Calculator',
    metaTitle: 'Base Converter Calculator – Convert Base 2 to 36',
    description:
      'Convert between base 2 and base 36 with steps shown, including binary, octal, decimal, hex, fractions and world numbering benchmarks.',
    summary: 'Any radix from 2 to 36, with the positional expansion and division shown side by side.',
    shortLabel: 'Base converter',
    published: '2026-10-23',
    updated: '2026-10-27',
    readingMinutes: 5,
    answer:
      'A base converter calculator rewrites the same value in a different radix. Base 2 uses 0–1, base 8 uses 0–7, base 10 uses 0–9, and base 16 uses 0–9 plus A–F, up to base 36 with 0–9 and A–Z. Convert in by summing digit × base^position; convert out by repeated division.',
  },
  {
    slug: 'number-system-conversion-table',
    h1: 'Number System Conversion Table',
    metaTitle: 'Number System Conversion Table – Binary, Octal, Hex',
    description:
      'A complete 0–255 conversion table in decimal, binary, octal and hex, plus powers of two, lakh and crore scales and 16 world numbering systems.',
    summary: 'The 0–255 grid plus the lakh/crore and world-scale tables, all on one page.',
    shortLabel: 'Conversion table',
    published: '2026-10-25',
    updated: '2026-10-27',
    readingMinutes: 4,
    answer:
      'A number system conversion table maps one value across several bases on a single row. The 0–255 grid below gives decimal, 8-bit binary, 3-digit octal and 2-digit hex; the scale table gives 1 million = 10 lakh, 1 billion = 1 arab = 100 crore, and 1 trillion = 1 lakh crore.',
  },
];

export function guideHref(slug: string): string {
  return `/knowledge-catalog/${slug}/`;
}
