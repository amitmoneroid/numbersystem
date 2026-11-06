// Submit every URL in public/sitemap.xml to the IndexNow endpoints used by
// Bing, Yandex, Naver and Seznam. Run after a deploy:
//
//   npm run indexnow
//
// The key file must be publicly reachable at
// https://numbersystemconverter.com/<key>.txt before this runs.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const key = 'e7c1a9f4d2b84c6a9f3e5d7b1c0a8e42';
const host = 'numbersystemconverter.com';

const sitemap = readFileSync(resolve(root, 'public/sitemap.xml'), 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

if (urlList.length === 0) {
  console.error('No URLs found in public/sitemap.xml');
  process.exit(1);
}

const payload = {
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList,
};

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});

console.log(`IndexNow: submitted ${urlList.length} URLs, HTTP ${response.status}`);
if (!response.ok) {
  console.error(await response.text());
  process.exit(1);
}
