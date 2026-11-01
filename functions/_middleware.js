// Cloudflare Pages middleware: canonical scheme, host and trailing slash.
//
// `_redirects` cannot match on scheme or hostname, so these canonicalisation
// rules run in a Function. They also keep legacy slash-less links to a single
// 301 hop instead of a redirect chain.

const CANONICAL_HOST = 'numbersystemconverter.com';
const WWW_HOST = `www.${CANONICAL_HOST}`;

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

  if (url.protocol !== 'https:') {
    url.protocol = 'https:';
    changed = true;
  }

  if (url.hostname === WWW_HOST) {
    url.hostname = CANONICAL_HOST;
    changed = true;
  }

  // Page URLs are served from directories with a trailing slash. Files with an
  // extension, the root, and Cloudflare's own /cdn-cgi routes are left alone.
  const isFile = /\.[a-z0-9]+$/i.test(url.pathname);
  const needsSlash =
    url.pathname !== '/' &&
    !url.pathname.endsWith('/') &&
    !isFile &&
    !url.pathname.startsWith('/cdn-cgi');

  if (needsSlash) {
    url.pathname = `${url.pathname}/`;
    changed = true;
  }

  if (changed) {
    return redirect(url);
  }

  const response = await next();

  // Preview deployments (*.pages.dev) must never compete with the custom
  // domain in search. Add the header at the edge because `_headers` rules are
  // path-based, not host-based.
  if (url.hostname.endsWith('.pages.dev')) {
    const headers = new Headers(response.headers);
    headers.set('X-Robots-Tag', 'noindex');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  return response;
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
