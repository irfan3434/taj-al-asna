'use client';

import { useEffect, useState } from 'react';
import { useLang } from '@/i18n/language';
import { audioSrc } from '@/lib/audio';

interface Track {
  key: string;
  title: string;
}

/** Lists audio tracks live from the R2 bucket (via /api/audio) and renders a player each. */
export default function AudioLibrary() {
  const { t } = useLang();
  const [tracks, setTracks] = useState<Track[] | null>(null);
  const [failed, setFailed] = useState(false);

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
    <div className="flex flex-col gap-2.5">
      <div className="mb-1 font-cormorant text-sm text-secondary-dark">
        {tracks.length} {t({ ar: 'مقطعاً', en: 'tracks' })}
      </div>
      {tracks.map((track) => (
        <div
          key={track.key}
          className="bg-cream-light border border-border rounded-[14px] px-3.5 md:px-[18px] py-3.5 md:py-4"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-3">
            <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary to-primary-mid grid place-items-center text-secondary-light text-base">
              ♪
            </div>
            <div className="flex-1 min-w-0 text-sm md:text-base font-semibold text-text-body truncate" dir="rtl">
              {track.title}
            </div>
          </div>
          <audio controls preload="none" src={audioSrc(track.key)} className="w-full">
            {t({ ar: 'متصفحك لا يدعم تشغيل الصوت.', en: 'Your browser does not support audio playback.' })}
          </audio>
        </div>
      ))}
    </div>
  );
}
