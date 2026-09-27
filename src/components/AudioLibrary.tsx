'use client';

import { useEffect, useState } from 'react';
import { useLang } from '@/i18n/language';
import AudioModal, { Track } from './AudioModal';

/** Lists audio tracks live from the R2 bucket (via /api/audio); clicking one opens the player modal. */
export default function AudioLibrary() {
  const { t } = useLang();
  const [tracks, setTracks] = useState<Track[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;
    fetch('/api/audio')
      .then((r) => r.json())
      .then((d: { tracks?: Track[]; error?: string }) => {
        if (!alive) return;
        setTracks(d.tracks ?? []);
        if (d.error) setFailed(true);
      })
      .catch(() => {
        if (!alive) return;
        setTracks([]);
        setFailed(true);
      });
    return () => {
      alive = false;
    };
  }, []);

  if (tracks === null) {
    return (
      <div className="py-10 text-center font-naskh text-sm text-text-muted">
        {t({ ar: 'جارٍ تحميل الصوتيات…', en: 'Loading audio…' })}
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div className="bg-cream-light border border-dashed border-border rounded-[14px] px-4 py-10 text-center font-naskh text-sm text-text-muted">
        {failed
          ? t({ ar: 'تعذّر تحميل قائمة الصوتيات.', en: 'Could not load the audio list.' })
          : t({ ar: 'لا توجد صوتيات بعد.', en: 'No audio here yet.' })}
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 font-cormorant text-sm text-secondary-dark">
        {tracks.length} {t({ ar: 'مقطعاً', en: 'tracks' })}
      </div>
      {/* 2 per row on mobile, 3 on tablet, 4 on desktop. Each card opens the player modal. */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {tracks.map((track, i) => (
          <button
            key={track.key}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`${t({ ar: 'تشغيل', en: 'Play' })}: ${track.title}`}
            className="group flex items-center gap-2.5 md:gap-3 bg-cream-light border border-border rounded-[16px] p-3 md:p-3.5 text-start transition-all duration-200 hover:-translate-y-0.5 hover:border-secondary hover:shadow-[0_10px_26px_rgba(13,70,52,0.10)]"
          >
            <div className="shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-primary to-primary-mid grid place-items-center font-cormorant text-xs font-bold text-secondary-light">
              {i + 1}
            </div>
            <div
              className="flex-1 min-w-0 truncate text-[13px] md:text-sm font-semibold text-text-body"
              dir="rtl"
              title={track.title}
            >
              {track.title}
            </div>
            <span
              className="shrink-0 grid h-8 w-8 place-items-center rounded-full bg-secondary/15 text-primary text-xs transition-colors group-hover:bg-secondary group-hover:text-primary-dark"
              aria-hidden
            >
              ▶
            </span>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <AudioModal
          tracks={tracks}
          index={openIndex}
          onIndex={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  );
}
