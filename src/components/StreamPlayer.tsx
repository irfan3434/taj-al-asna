'use client';

import { streamIframeSrc } from '@/lib/stream';
import { useLang } from '@/i18n/language';

/**
 * Cloudflare Stream player (adaptive HLS via their CDN — smooth for large videos).
 * Renders a responsive 16:9 iframe; shows a friendly note if Stream isn't configured.
 */
export default function StreamPlayer({
  uid,
  title,
  autoplay = false,
}: {
  uid: string;
  title?: string;
  autoplay?: boolean;
}) {
  const { t } = useLang();
  const src = streamIframeSrc(uid, { autoplay });

  if (!src) {
    return (
      <div className="aspect-video w-full grid place-items-center rounded-xl bg-primary-dark px-6 text-center font-naskh text-sm text-secondary-light/80">
        {t({ ar: 'الفيديو غير متاح حالياً.', en: 'This video isn’t available yet.' })}
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-black">
      <iframe
        src={src}
        title={title || 'Video'}
        loading="lazy"
        className="absolute inset-0 h-full w-full border-0"
        allow="accelerated-2d-canvas; autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
