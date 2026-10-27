// Visible FAQ content and FAQPage schema share this single source.
// Answers are checked against the scale table: lakh 10^5, crore 10^7,
// arab 10^9, kharab 10^11, neel 10^13, padma 10^15, shankh 10^17.

export interface FaqItem {
  question: string;
  /** HTML allowed: strong, em, a, sup, br, ul, ol, li. */
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'How do you convert a number into the International system?',
    answer:
      'Group the digits in sets of <strong>three from the right</strong>, then read each group with the International names: Thousand (10³), Million (10⁶), Billion (10⁹) and Trillion (10¹²). <br><br>Example: 78921092 becomes <strong>78,921,092</strong> → Seventy-Eight Million Nine Hundred Twenty-One Thousand Ninety-Two.',
  },
  {
    question: 'What is 100000000000000000000 in words?',
    answer:
      '<strong>100,000,000,000,000,000,000</strong> (1 followed by 20 zeros) is <strong>One Hundred Quintillion</strong> in the International system. In the Indian system the same value is <strong>1,00,00,00,00,00,00,00,00,000</strong>, which is <strong>1,000 shankh</strong> (one shankh = 10¹⁷).',
  },
  {
    question: 'How do I convert my number to an International number?',
    answer:
      '<ol><li>Write the number without commas.</li><li>From the <strong>rightmost digit</strong>, insert a comma after every <strong>three digits</strong>.</li><li>Read each group using Thousand, Million, Billion, Trillion.</li></ol>Example: 5000000 → <strong>5,000,000</strong> → Five Million.',
  },
  {
    question: 'What is 1000000000 in words in Indian?',
    answer:
      '<strong>1,000,000,000</strong> (1 Billion) is <strong>One Arab</strong> in the Indian system, written <strong>1,00,00,00,000</strong>. Equivalently: 1 arab = 100 crore = 1,000 million = 1 billion.',
  },
  {
    question: 'What are the 4 types of number system?',
    answer:
      'By base (radix) the four taught in computing are <strong>binary</strong> (base 2, digits 0–1), <strong>octal</strong> (base 8, 0–7), <strong>decimal</strong> (base 10, 0–9) and <strong>hexadecimal</strong> (base 16, 0–9 plus A–F). These are different from the Indian vs International <em>naming</em> systems (lakh/crore vs million/billion), which are both base 10 and only group large numbers differently.',
  },
  {
    question: 'What is 78921092 in words in the International system?',
    answer:
      '<strong>78,921,092</strong> reads as <strong>Seventy-Eight Million Nine Hundred Twenty-One Thousand Ninety-Two</strong>. In the Indian system the same number is <strong>7,89,21,092</strong> → Seven Crore Eighty-Nine Lakh Twenty-One Thousand Ninety-Two.',
  },
  {
    question: 'How do you say 13,170,000,000,000,000,000,000,000?',
    answer:
      '13,170,000,000,000,000,000,000,000 (13.17 × 10²⁴) reads as <strong>Thirteen Septillion One Hundred Seventy Sextillion</strong>. A septillion is 10²⁴, a sextillion 10²¹.',
  },
  {
    question: 'Does 1 zillion exist?',
    answer:
      '<strong>No. "Zillion" is not a number</strong> — it is informal slang for an arbitrarily large amount. The real short-scale sequence is Million (10⁶), Billion (10⁹), Trillion (10¹²), Quadrillion (10¹⁵), Quintillion (10¹⁸), Sextillion (10²¹), Septillion (10²⁴), each 1,000× the previous.',
  },
  {
    question: 'How do you write 20 billion in numbers?',
    answer:
      '<strong>20,000,000,000</strong> — 20 followed by 9 zeros, 11 digits. In the Indian system that is <strong>2 arab</strong>, written <strong>2,00,00,00,000</strong>.',
  },
  {
    question: 'Which is bigger, 1 trillion or 1 billion?',
    answer:
      '<strong>1 trillion is 1,000 times bigger than 1 billion.</strong> 1 trillion = 1,000,000,000,000; 1 billion = 1,000,000,000. In the Indian system, 1 trillion = <strong>1 lakh crore</strong> and 1 billion = <strong>1 arab</strong>.',
  },
  {
    question: 'What is 20000000 in number names?',
    answer:
      '<strong>20,000,000</strong> is <strong>Twenty Million</strong> in the International system and <strong>2,00,00,000</strong> — <strong>Two Crore</strong> — in the Indian system. So 20 million = 2 crore.',
  },
  {
    question: 'Is 100 lakh equal to 1 billion?',
    answer:
      '<strong>No.</strong> 100 lakh = 1 crore = 10 million. 1 billion = 100 crore = 1 arab, which is 10,000 lakh. 100 lakh is ten times smaller than 1 billion.',
  },
  {
    question: 'How many zeros are in 20 trillion?',
    answer:
      '<strong>20 trillion = 20,000,000,000,000</strong>, which has 13 zeros in total (20 followed by 12 zeros) and 14 digits. In scientific notation it is 2 × 10¹³.',
  },
  {
    question: 'What number is 100000000000000000000000000000000?',
    answer:
      'That is 1 followed by 32 zeros, or 10³². In the short-scale International system it is <strong>100 nonillion</strong>. The sequence continues Octillion (10²⁷), Nonillion (10³⁰), Decillion (10³³).',
  },
  {
    question: 'What is 40 trillion in numbers?',
    answer:
      '<strong>40,000,000,000,000</strong> — 40 followed by 12 zeros, 14 digits. In the Indian system it is <strong>40,00,00,00,00,000</strong> = <strong>4 neel</strong> (1 neel = 10¹³ = 10 trillion).',
  },
];
