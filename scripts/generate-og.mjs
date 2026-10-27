// Generates public/og-image.png (1200x630) from an inline SVG.
// Run: node scripts/generate-og.mjs
import sharp from 'sharp';
import path from 'node:path';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a0a0a"/>
      <stop offset="1" stop-color="#161b22"/>
    </linearGradient>
    <radialGradient id="g1" cx="0.15" cy="0.1" r="0.7">
      <stop offset="0" stop-color="#007cf0" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#007cf0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="0.9" cy="0.15" r="0.6">
      <stop offset="0" stop-color="#7928ca" stop-opacity="0.30"/>
      <stop offset="1" stop-color="#7928ca" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <rect width="1200" height="630" fill="url(#g2)"/>

  <rect x="72" y="64" width="20" height="20" rx="5" fill="#007cf0"/>
  <text x="106" y="81" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="600" fill="#ededed" letter-spacing="-0.5">NumSys</text>

  <text x="72" y="220" font-family="Segoe UI, Arial, sans-serif" font-size="76" font-weight="700" fill="#ffffff" letter-spacing="-3">Number System</text>
  <text x="72" y="300" font-family="Segoe UI, Arial, sans-serif" font-size="76" font-weight="700" fill="#ffffff" letter-spacing="-3">Converter</text>

  <text x="72" y="360" font-family="Segoe UI, Arial, sans-serif" font-size="27" fill="#a1a1a1">Indian ⇄ International · lakh, crore, million, billion</text>
  <text x="72" y="400" font-family="Segoe UI, Arial, sans-serif" font-size="27" fill="#a1a1a1">Binary · Octal · Decimal · Hex, with the working shown</text>

  <g font-family="Consolas, monospace">
    <rect x="72" y="448" width="330" height="86" rx="12" fill="#ffffff" fill-opacity="0.06" stroke="#ffffff" stroke-opacity="0.12"/>
    <text x="96" y="484" font-size="15" fill="#888">DEC</text>
    <text x="96" y="518" font-size="30" fill="#ffffff">156</text>

    <rect x="420" y="448" width="330" height="86" rx="12" fill="#ffffff" fill-opacity="0.06" stroke="#ffffff" stroke-opacity="0.12"/>
    <text x="444" y="484" font-size="15" fill="#888">BINARY</text>
    <text x="444" y="518" font-size="30" fill="#4da6ff">10011100</text>

    <rect x="768" y="448" width="360" height="86" rx="12" fill="#ffffff" fill-opacity="0.06" stroke="#ffffff" stroke-opacity="0.12"/>
    <text x="792" y="484" font-size="15" fill="#888">INTERNATIONAL</text>
    <text x="792" y="518" font-size="30" fill="#50e3c2">1 billion = 1 arab</text>
  </g>

  <text x="72" y="588" font-family="Segoe UI, Arial, sans-serif" font-size="17" fill="#666">numbersystemconverter.com · free · no sign-up · works offline</text>
</svg>`;

const out = path.join(process.cwd(), 'public', 'og-image.png');
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);
console.log('OG image written:', out);
