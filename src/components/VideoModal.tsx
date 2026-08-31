'use client';

import { useEffect } from 'react';
import StreamPlayer from './StreamPlayer';
import { useLang } from '@/i18n/language';

/** Full-screen overlay that plays a Cloudflare Stream video. Closes on Esc / backdrop / ✕. */
export default function VideoModal({
  uid,
  title,
  onClose,
}: {
  uid: string;
  title: string;
  onClose: () => void;
}) {
  const { t } = useLang();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 md:p-8 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="relative w-full max-w-[960px]" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="truncate font-naskh text-base text-text-hero md:text-lg">{title}</h3>
          <button
            onClick={onClose}
            aria-label={t({ ar: 'إغلاق', en: 'Close' })}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-xl text-text-light transition-colors hover:bg-white/20"
          >
            ✕
          </button>
        </div>
        <StreamPlayer uid={uid} title={title} autoplay />
      </div>
    </div>
  );
}
