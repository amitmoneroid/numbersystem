# NumSys — Number System Converter

A static Astro site for number system conversion:

- base 2–36 conversion (binary, octal, decimal, hex) with positional expansion and repeated division shown;
- Indian ⇄ International naming conversion (lakh, crore, arab ⇄ million, billion, trillion);
- six keyword guides under `/knowledge-catalog/`, a 0–255 conversion table, and a printable two-page PDF.

Live: https://numbersystemconverter.com/

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the build locally                   |
| `npm run deploy`  | Build and deploy `dist/` with Wrangler      |

## Structure

```text
src/
├── components/        BaseConverter, BaseTable, FAQ, Navbar, Footer
├── data/              FAQ, guide metadata and world numbering data
├── layouts/           Layout.astro (SEO/GEO graph) and GuideLayout.astro
├── pages/
│   ├── index.astro    Base-first converter hero + naming tab
│   └── knowledge-catalog/
│       ├── number-system-converter-with-steps.astro
│       ├── number-system-converter-online.astro
│       ├── number-system-conversion-calculator-with-solution.astro
│       ├── number-system-conversion-pdf.astro
│       ├── base-converter-calculator.astro
│       └── number-system-conversion-table.astro
└── styles/global.css
```

Public assets include `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`,
`number-system-conversion-table.pdf`, `_headers`, `_routes.json` and `_redirects`.
`functions/_middleware.js` handles the `www` -> apex redirect, which `_redirects`
cannot express because it cannot match on hostname.

## SEO notes

- Every guide has a direct answer under the H1, an `Article` node with publication/review dates, breadcrumbs and FAQ schema.
- The steps and calculator guides add `HowTo` schema; the PDF page adds `DigitalDocument`.
- Guide dates are stored in `src/data/guides.ts` (`published`, `updated`); update the sitemap when they change.
- Canonicals use the apex domain with trailing slashes; `functions/_middleware.js` and `_redirects` consolidate `www` and slash-less URLs.
