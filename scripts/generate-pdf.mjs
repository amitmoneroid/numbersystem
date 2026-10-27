// Generates public/number-system-conversion-table.pdf with no dependencies.
// Run: node scripts/generate-pdf.mjs
import fs from 'node:fs';
import path from 'node:path';

const W = 612;
const H = 792;
const pageStreams = [];

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function makePage() {
  const ops = [];
  return {
    ops,
    text(x, y, size, font, str) {
      ops.push(`BT /${font} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${esc(str)}) Tj ET`);
    },
    line(x1, y1, x2, y2, width = 0.5, gray = 0.75) {
      ops.push(`${gray} ${gray} ${gray} RG ${width} w ${x1} ${y1} m ${x2} ${y2} l S`);
    },
    rect(x, y, w, h, gray) {
      ops.push(`${gray} ${gray} ${gray} rg ${x} ${y} ${w} ${h} re f`);
    },
    finish() {
      pageStreams.push(ops.join('\n'));
    },
  };
}

function header(p, title, subtitle) {
  p.text(48, H - 58, 20, 'F2', title);
  p.text(48, H - 78, 9, 'F1', subtitle);
  p.line(48, H - 90, W - 48, H - 90, 0.8, 0.55);
}

function footer(p, pageNo) {
  p.line(48, 46, W - 48, 46, 0.5, 0.8);
  p.text(48, 34, 8, 'F1', 'numbersystemconverter.com - free number system converter with steps');
  p.text(W - 110, 34, 8, 'F1', `Page ${pageNo} of 2`);
}

const pad = (n, len) => String(n).padStart(len, '0');

// ---------- Page 1: base chart 0-63 plus powers of two ----------
{
  const p = makePage();
  header(p, 'Number System Conversion Table', 'Decimal, binary, octal and hexadecimal - values 0 to 63');

  const colX = [48, 320];
  const rowTop = H - 118;
  const rowH = 9.6;

  ['DEC', 'BINARY', 'OCT', 'HEX'].forEach((label, i) => {
    const offsets = [0, 26, 96, 130];
    for (const x of colX) {
      p.text(x + offsets[i], rowTop, 7.5, 'F2', label);
    }
  });

  for (let block = 0; block < 2; block++) {
    const x = colX[block];
    for (let r = 0; r < 32; r++) {
      const n = block * 32 + r;
      const y = rowTop - 14 - r * rowH;
      if (r % 2 === 0) p.rect(x - 3, y - 2.5, 196, rowH, 0.96);
      p.text(x, y, 8.5, 'F3', String(n).padStart(2, ' '));
      p.text(x + 26, y, 8.5, 'F3', pad(n.toString(2), 6));
      p.text(x + 96, y, 8.5, 'F3', pad(n.toString(8), 3));
      p.text(x + 130, y, 8.5, 'F3', pad(n.toString(16).toUpperCase(), 2));
    }
  }

  const powersY = rowTop - 14 - 32 * rowH - 30;
  p.text(48, powersY, 11, 'F2', 'Powers of two');
  const powers = [
    ['2^0', '1', '2^11', '2,048'],
    ['2^1', '2', '2^12', '4,096'],
    ['2^2', '4', '2^13', '8,192'],
    ['2^3', '8', '2^14', '16,384'],
    ['2^4', '16', '2^15', '32,768'],
    ['2^5', '32', '2^16', '65,536'],
    ['2^6', '64', '2^20', '1,048,576'],
    ['2^7', '128', '2^24', '16,777,216'],
    ['2^8', '256', '2^30', '1,073,741,824'],
    ['2^9', '512', '2^32', '4,294,967,296'],
    ['2^10', '1,024', '2^40', '1,099,511,627,776'],
  ];
  powers.forEach((row, i) => {
    const col = i < 6 ? 0 : 1;
    const rowIndex = i < 6 ? i : i - 6;
    const x = 48 + col * 268;
    const y = powersY - 18 - rowIndex * 12;
    p.text(x, y, 8.5, 'F3', `${row[0]} = ${row[1]}`);
    p.text(x + 134, y, 8.5, 'F3', `${row[2]} = ${row[3]}`);
  });

  p.text(48, 78, 7.5, 'F1', 'Read a row across: the same value in all four bases. Hex digits A-F represent 10-15.');
  footer(p, 1);
  p.finish();
}

// ---------- Page 2: methods, Indian/International, world systems ----------
{
  const p = makePage();
  header(p, 'Methods and World Scales', 'How to convert, and how 10 languages name 1 million, 1 billion and 1 trillion');

  let y = H - 120;
  p.text(48, y, 11, 'F2', 'Method 1 - decimal to another base (repeated division)');
  y -= 16;
  const steps = [
    '1. Divide the number by the target base and record the remainder.',
    '2. Divide the quotient again by the base. Repeat until the quotient is 0.',
    '3. Read the remainders from bottom to top - that is the converted number.',
    'Example: 156 / 2 = 78 r0, 78/2=39 r0, 39/2=19 r1, 19/2=9 r1, 9/2=4 r1, 4/2=2 r0, 2/2=1 r0, 1/2=0 r1 -> 10011100.',
  ];
  steps.forEach((line) => {
    p.text(48, y, 8.5, 'F1', line);
    y -= 11;
  });

  y -= 8;
  p.text(48, y, 11, 'F2', 'Method 2 - any base to decimal (positional weights)');
  y -= 16;
  const method2 = [
    '1. Number the digit positions from 0 at the right of the integer part, going left.',
    '2. Multiply each digit by (base ^ position) and add the results.',
    'Example: 1A.8 in hex = 1x16^1 + 10x16^0 + 8x16^-1 = 16 + 10 + 0.5 = 26.5.',
    'Fractions: multiply the fraction by the base, take the carry, repeat. Read carries top to bottom.',
  ];
  method2.forEach((line) => {
    p.text(48, y, 8.5, 'F1', line);
    y -= 11;
  });

  y -= 10;
  p.text(48, y, 11, 'F2', 'Indian and International scale');
  y -= 16;
  const scaleRows = [
    ['10^3', 'Thousand', '1,000', 'Thousand', '1,000'],
    ['10^5', 'Hundred thousand', '100,000', 'Lakh', '1,00,000'],
    ['10^6', 'Million', '1,000,000', 'Ten lakh', '10,00,000'],
    ['10^7', 'Ten million', '10,000,000', 'Crore', '1,00,00,000'],
    ['10^9', 'Billion', '1,000,000,000', 'Arab', '1,00,00,00,000'],
    ['10^11', 'Hundred billion', '100,000,000,000', 'Kharab', '1,00,00,00,00,000'],
    ['10^12', 'Trillion', '1,000,000,000,000', 'Lakh crore', '1,00,000 crore'],
    ['10^15', 'Quadrillion', '1,000,000,000,000,000', 'Padma', '1,00,00,00,00,00,00,000'],
  ];
  const cols = [48, 92, 236, 366, 480];
  ['POWER', 'INTERNATIONAL', 'INTL FORMAT', 'INDIAN', 'INDIAN FORMAT'].forEach((label, i) => {
    p.text(cols[i], y, 6.8, 'F2', label);
  });
  y -= 4;
  p.line(48, y, W - 48, y, 0.5, 0.7);
  y -= 10;
  scaleRows.forEach((row) => {
    row.forEach((cell, i) => p.text(cols[i], y, 7.6, 'F3', cell));
    y -= 10.5;
  });

  y -= 12;
  p.text(48, y, 11, 'F2', 'Where "billion" changes meaning');
  y -= 16;
  const world = [
    ['English / International', 'short', 'billion = 10^9', 'trillion = 10^12'],
    ['Indian', 'indian', 'arab = 10^9 (100 crore)', 'lakh crore = 10^12'],
    ['Portuguese (Portugal)', 'long', 'mil milhoes = 10^9', 'biliao = 10^12'],
    ['Portuguese (Brazil)', 'short', 'bilhao = 10^9', 'trilhao = 10^12'],
    ['Spanish', 'long', 'mil millones = 10^9', 'billon = 10^12'],
    ['French', 'long', 'milliard = 10^9', 'billion = 10^12'],
    ['German', 'long', 'Milliarde = 10^9', 'Billion = 10^12'],
    ['Japanese / Chinese / Korean', 'myriad', '10 oku / 10 yi = 10^9', 'cho / zhao / jo = 10^12'],
    ['Russian, Turkish, Arabic', 'short', 'milliard/milyar = 10^9', 'trillion = 10^12'],
  ];
  const wcols = [48, 228, 300, 446];
  world.forEach((row, idx) => {
    const f = idx === 0 ? 'F2' : 'F3';
    p.text(wcols[0], y, 7.4, f, row[0]);
    p.text(wcols[1], y, 7.4, f, row[1]);
    p.text(wcols[2], y, 7.4, f, row[2]);
    p.text(wcols[3], y, 7.4, f, row[3]);
    y -= 10.2;
  });

  p.text(48, 78, 7.5, 'F1', 'Portuguese: Portugal keeps the long scale, Brazil uses the short scale - check the locale before converting.');
  p.text(48, 66, 7.5, 'F1', 'Source and more worked examples: numbersystemconverter.com/knowledge-catalog/');
  footer(p, 2);
  p.finish();
}

// ---------- Assemble PDF ----------
const objects = [];
function addObject(body) {
  objects.push(body);
  return objects.length; // 1-based object number
}

const catalogId = addObject('<< /Type /Catalog /Pages 2 0 R >>');
// Pages object is reserved as object 2
objects.push(null);
const fontRegular = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
const fontBold = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
const fontMono = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Courier /Encoding /WinAnsiEncoding >>');

const pageIds = [];
for (const stream of pageStreams) {
  const contentId = addObject(`<< /Length ${Buffer.byteLength(stream, 'latin1')} >>\nstream\n${stream}\nendstream`);
  const pageId = addObject(
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /Font << /F1 ${fontRegular} 0 R /F2 ${fontBold} 0 R /F3 ${fontMono} 0 R >> >> /Contents ${contentId} 0 R >>`
  );
  pageIds.push(pageId);
}

objects[1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`;

let pdf = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n';
const offsets = [0];
objects.forEach((body, i) => {
  offsets.push(pdf.length);
  pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
});

const xrefStart = pdf.length;
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += '0000000000 65535 f \n';
for (let i = 1; i <= objects.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R /Info << /Title (Number System Conversion Table) /Author (NumSys) /Subject (Decimal, binary, octal and hexadecimal chart plus world numbering systems) >> >>\nstartxref\n${xrefStart}\n%%EOF\n`;

const outDir = path.join(process.cwd(), 'public');
fs.writeFileSync(path.join(outDir, 'number-system-conversion-table.pdf'), Buffer.from(pdf, 'latin1'));
console.log('PDF written:', path.join(outDir, 'number-system-conversion-table.pdf'), pdf.length, 'bytes');
