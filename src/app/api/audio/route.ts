import { AwsClient } from 'aws4fetch';

// Always list live so newly-uploaded files appear on refresh.
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const ACCOUNT_ID = process.env.R2_ACCOUNT_ID?.trim();
const ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID?.trim();
const SECRET = process.env.R2_SECRET_ACCESS_KEY?.trim();
const BUCKET = process.env.R2_BUCKET?.trim();
const PREFIX = process.env.R2_AUDIO_PREFIX?.trim() ?? ''; // '' = whole bucket

function unescapeXml(s: string): string {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');
}

/** Derive a readable title from an object key, e.g.
 *  "Duas/20- ( صلاة الليل ) …عائض القرني.mp3" → "صلاة الليل". */
function titleFromKey(key: string): string {
  const name = (key.split('/').pop() || key).replace(/\.mp3$/i, '');
  const paren = name.match(/\(([^)]+)\)/);
  const cleaned = (paren ? paren[1] : name).replace(/^\s*\d+\s*[-–—]\s*/, '').trim();
  return cleaned || name;
}

export async function GET() {
  if (!ACCOUNT_ID || !ACCESS_KEY_ID || !SECRET || !BUCKET) {
    return Response.json({ tracks: [], error: 'not_configured' });
  }

  const client = new AwsClient({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET,
    region: 'auto',
    service: 's3',
  });
  const endpoint = `https://${ACCOUNT_ID}.r2.cloudflarestorage.com/${BUCKET}`;

  const keys: string[] = [];
  let token: string | undefined;
  try {
    do {
      const url = new URL(endpoint);
      url.searchParams.set('list-type', '2');
      url.searchParams.set('max-keys', '1000');
      if (PREFIX) url.searchParams.set('prefix', PREFIX);
      if (token) url.searchParams.set('continuation-token', token);

      const res = await client.fetch(url.toString());
      if (!res.ok) {
        return Response.json({ tracks: [], error: 'r2_list_failed', status: res.status });
      }
      const xml = await res.text();
      for (const m of xml.matchAll(/<Key>([^<]+)<\/Key>/g)) keys.push(unescapeXml(m[1]));

      const truncated = /<IsTruncated>true<\/IsTruncated>/.test(xml);
      const next = xml.match(/<NextContinuationToken>([^<]+)<\/NextContinuationToken>/);
      token = truncated && next ? unescapeXml(next[1]) : undefined;
    } while (token);
  } catch (err) {
    return Response.json({
      tracks: [],
      error: 'r2_unreachable',
      detail: err instanceof Error ? err.message : String(err),
    });
  }

  const tracks = keys
    .filter((k) => /\.mp3$/i.test(k))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((key) => ({ key, title: titleFromKey(key) }));

  return Response.json({ tracks });
}
