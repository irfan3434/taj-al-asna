/**
 * Audio hosting (Cloudflare R2).
 *
 * Point this at your R2 public URL. Library entries then reference audio by bare filename
 * (e.g. 'Introduction.mp3') and it resolves to R2 — no audio files in the repo.
 *
 * It's a public value (safe for the browser), not a secret. Referenced directly below so
 * Next.js inlines it at build time — dynamic process.env lookups are NOT inlined.
 */
export const AUDIO_BASE_URL =
  process.env.NEXT_PUBLIC_AUDIO_BASE_URL ||
  'https://pub-2fb824ed7606437aaf7b28b74a225df0.r2.dev';

/**
 * Resolve an entry's `audio` value to a playable URL:
 *  - full URL ('https://…')         → used as-is
 *  - local path ('/audio/x.mp3')    → served from /public, used as-is
 *  - bare filename ('x.mp3')        → served from R2 (AUDIO_BASE_URL), or /audio/ if unset
 */
export function audioSrc(fileOrUrl: string): string {
  if (!fileOrUrl) return '';
  if (/^https?:\/\//i.test(fileOrUrl)) return fileOrUrl;
  if (fileOrUrl.startsWith('/')) return fileOrUrl;
  const base = AUDIO_BASE_URL.replace(/\/+$/, '');
  // Encode each segment (handles spaces / Arabic filenames) while keeping folder slashes.
  const path = fileOrUrl.split('/').map(encodeURIComponent).join('/');
  return base ? `${base}/${path}` : `/audio/${path}`;
}
