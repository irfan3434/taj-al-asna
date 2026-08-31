/**
 * Cloudflare Stream configuration.
 *
 * Set your customer code below (or via NEXT_PUBLIC_CLOUDFLARE_STREAM_CODE).
 * You'll find it in any video's "Embed" code in the Stream dashboard — it's the
 * part in the URL: https://customer-<THIS>.cloudflarestream.com/<video-uid>/iframe
 *
 * It's a public value (safe to ship to the browser); it is NOT an API token.
 */
export const STREAM_CUSTOMER_CODE = 
  process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM_CODE || 'esndw3dpthbsv619';

/** True once a real customer code has been provided. */
export function streamConfigured(): boolean {
  return Boolean(STREAM_CUSTOMER_CODE) && !STREAM_CUSTOMER_CODE.startsWith('PASTE_');
}

const base = () => `https://customer-${STREAM_CUSTOMER_CODE}.cloudflarestream.com`;

/** Embed (iframe) URL for a video UID. Returns '' if not configured / no UID. */
export function streamIframeSrc(uid: string, opts?: { autoplay?: boolean }): string {
  if (!streamConfigured() || !uid) return '';
  const params = new URLSearchParams();
  if (opts?.autoplay) params.set('autoplay', 'true');
  const qs = params.toString();
  return `${base()}/${uid}/iframe${qs ? `?${qs}` : ''}`;
}

/** Auto-generated poster thumbnail for a video UID. Returns '' if not configured. */
export function streamThumbnail(uid: string): string {
  if (!streamConfigured() || !uid) return '';
  return `${base()}/${uid}/thumbnails/thumbnail.jpg`;
}
