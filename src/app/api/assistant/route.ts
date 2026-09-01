import type { NextRequest } from 'next/server';

// Streaming proxy → run on the Node runtime (not edge) for reliable SSE passthrough.
export const runtime = 'nodejs';

/**
 * Server-side proxy to the hosted RAG assistant (الباحث الذكي).
 * The browser calls THIS route (same origin, no secret exposed); we forward to the
 * RAG API with the private key and stream its SSE answer straight back.
 *
 * Env (set on the server / Vercel — never NEXT_PUBLIC_*):
 *   RAG_API_URL   e.g. https://rag.example.com   (the RAG service origin)
 *   RAG_API_KEY   shared secret sent as x-api-key (optional but recommended)
 */
export async function POST(req: NextRequest) {
  const rawUrl = process.env.RAG_API_URL?.trim();
  const key = process.env.RAG_API_KEY?.trim();

  if (!rawUrl) {
    return Response.json({ error: 'not_configured' }, { status: 503 });
  }
  // Tolerate a missing scheme or trailing slash in the env value (common paste mistake).
  const base = (/^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}`).replace(/\/+$/, '');

  let body: { text?: unknown; lang?: unknown };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'bad_request' }, { status: 400 });
  }

  const text = typeof body.text === 'string' ? body.text.trim() : '';
  const lang = body.lang === 'ar' || body.lang === 'en' ? body.lang : undefined;
  if (!text) {
    return Response.json({ error: 'empty_query' }, { status: 400 });
  }

  let upstream: Response;
  try {
    upstream = await fetch(`${base}/api/query`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(key ? { 'x-api-key': key } : {}),
      },
      body: JSON.stringify({ text, lang, stream: true }),
    });
  } catch (err) {
    return Response.json(
      { error: 'upstream_unreachable', detail: err instanceof Error ? err.message : String(err) },
      { status: 502 },
    );
  }

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => '');
    return Response.json(
      { error: 'upstream_error', status: upstream.status, detail: detail.slice(0, 500) },
      { status: 502 },
    );
  }

  // Pass the Server-Sent Events stream through unchanged.
  return new Response(upstream.body, {
    status: 200,
    headers: {
      'content-type': 'text/event-stream; charset=utf-8',
      'cache-control': 'no-cache, no-transform',
      connection: 'keep-alive',
    },
  });
}
