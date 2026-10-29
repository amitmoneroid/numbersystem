// Cloudflare Pages middleware: canonical host + trailing slash redirects.
//
// `_redirects` cannot match on hostname, so the www -> apex redirect has to run
// in a Function. Because Pages does not apply `_redirects` to routes handled by
// a Function, the trailing-slash rules from `public/_redirects` are mirrored
// here as well.

const CANONICAL_HOST = 'numbersystemconverter.com';
const WWW_HOST = `www.${CANONICAL_HOST}`;

// Routes served from a directory; the trailing-slash form is canonical.
const TRAILING_SLASH_PATHS = new Set([
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/knowledge-catalog',
  '/knowledge-catalog/number-system-converter-with-steps',
  '/knowledge-catalog/number-system-converter-online',
  '/knowledge-catalog/number-system-conversion-calculator-with-solution',
  '/knowledge-catalog/number-system-conversion-pdf',
  '/knowledge-catalog/base-converter-calculator',
  '/knowledge-catalog/number-system-conversion-table',
]);

/**
 * @param {{ request: Request, next: () => Promise<Response> }} context
 */
export async function onRequest(context) {
  const { request, next } = context;

  // Only canonicalise read requests; leave form posts and other methods alone.
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return next();
  }

  const url = new URL(request.url);
  let changed = false;

  if (url.hostname === WWW_HOST) {
    url.protocol = 'https:';
    url.hostname = CANONICAL_HOST;
    changed = true;
  }

  if (TRAILING_SLASH_PATHS.has(url.pathname)) {
    url.pathname = `${url.pathname}/`;
    changed = true;
  }

  if (changed) {
    return redirect(url);
  }

  return next();
}

function redirect(url) {
  return new Response(null, {
    status: 301,
    headers: {
      Location: url.toString(),
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
