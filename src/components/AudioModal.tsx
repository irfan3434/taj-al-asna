'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/i18n/language';
import { audioSrc } from '@/lib/audio';

export interface Track {
  key: string;
  title: string;
}

/** mm:ss (or h:mm:ss for long tracks). */
function fmt(s: number): string {
  if (!isFinite(s) || s < 0) return '0:00';
  const total = Math.floor(s);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const sec = total % 60;
  const mm = h > 0 ? String(m).padStart(2, '0') : String(m);
  return `${h > 0 ? `${h}:` : ''}${mm}:${String(sec).padStart(2, '0')}`;
}

const RATES = [1, 1.25, 1.5, 0.75];

/**
 * The actual player. Keyed on the track so a track change remounts it — a clean state
 * reset (current/duration/playing → 0/0/false) with no set-state-in-effect, then autoplay.
 */
function PlayerBody({
  track,
  index,
  count,
  rate,
  onRate,
  onIndex,
}: {
  track: Track;
  index: number;
  count: number;
  rate: number;
  onRate: (r: number) => void;
  onIndex: (i: number) => void;
}) {
  const { t } = useLang();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  // Apply the chosen speed on mount and whenever it changes (property, not state).
  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = rate;
  }, [rate]);

  const hasPrev = index > 0;
  const hasNext = index < count - 1;
  const pct = duration ? Math.min(100, (current / duration) * 100) : 0;

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) el.play().catch(() => {});
    else el.pause();
  };
  const seekTo = (v: number) => {
    const el = audioRef.current;
    if (!el) return;
    el.currentTime = v;
    setCurrent(v);
  };
  const skip = (delta: number) => {
    const el = audioRef.current;
    if (!el) return;
    const max = duration || el.duration || 0;
    el.currentTime = Math.min(Math.max(0, el.currentTime + delta), max);
  };
  const cycleRate = () => onRate(RATES[(RATES.indexOf(rate) + 1) % RATES.length]);

  const roundBtn =
    'grid place-items-center rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed';

  return (
    <div className="mt-5">
      <audio
        ref={audioRef}
        src={audioSrc(track.key)}
        autoPlay
        preload="auto"
        className="hidden"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => (hasNext ? onIndex(index + 1) : setPlaying(false))}
      >
        {t({ ar: 'متصفحك لا يدعم تشغيل الصوت.', en: 'Your browser does not support audio playback.' })}
      </audio>

      {/* Seek bar — forced LTR so progress flows left→right regardless of page direction. */}
      <div dir="ltr">
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={Math.min(current, duration || 0)}
          onChange={(e) => seekTo(Number(e.target.value))}
          disabled={!duration}
          aria-label={t({ ar: 'شريط التقدم', en: 'Seek' })}
          className="taj-seek w-full"
          style={{
            background: `linear-gradient(to right, var(--color-secondary-light) ${pct}%, rgba(255,255,255,0.16) ${pct}%)`,
          }}
        />
        <div className="mt-2 flex items-center justify-between font-cormorant text-xs text-secondary-light/80">
          <span>{fmt(current)}</span>
          <span>{duration ? fmt(duration) : '–:––'}</span>
        </div>
      </div>

      {/* Transport controls (LTR — media controls read left→right by convention). */}
      <div dir="ltr" className="mt-4 flex items-center justify-center gap-2.5 md:gap-3.5">
        <button
          type="button"
          onClick={() => hasPrev && onIndex(index - 1)}
          disabled={!hasPrev}
          aria-label={t({ ar: 'المقطع السابق', en: 'Previous track' })}
          className={`${roundBtn} h-10 w-10 bg-white/10 text-base text-text-light hover:bg-white/20`}
        >
          ⏮
        </button>
        <button
          type="button"
          onClick={() => skip(-10)}
          aria-label={t({ ar: 'إرجاع ١٠ ثوانٍ', en: 'Back 10 seconds' })}
          className={`${roundBtn} h-11 w-11 bg-white/10 font-cormorant text-[13px] font-bold text-text-light hover:bg-white/20`}
        >
          10«
        </button>
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? t({ ar: 'إيقاف مؤقت', en: 'Pause' }) : t({ ar: 'تشغيل', en: 'Play' })}
          className={`${roundBtn} h-16 w-16 bg-gradient-to-br from-secondary-light to-secondary text-xl text-primary-dark shadow-[0_8px_22px_rgba(0,0,0,0.35)] hover:opacity-90`}
        >
          {playing ? '❚❚' : <span className="ml-0.5">▶</span>}
        </button>
        <button
          type="button"
          onClick={() => skip(10)}
          aria-label={t({ ar: 'تقديم ١٠ ثوانٍ', en: 'Forward 10 seconds' })}
          className={`${roundBtn} h-11 w-11 bg-white/10 font-cormorant text-[13px] font-bold text-text-light hover:bg-white/20`}
        >
          »10
        </button>
        <button
          type="button"
          onClick={() => hasNext && onIndex(index + 1)}
          disabled={!hasNext}
          aria-label={t({ ar: 'المقطع التالي', en: 'Next track' })}
          className={`${roundBtn} h-10 w-10 bg-white/10 text-base text-text-light hover:bg-white/20`}
        >
          ⏭
        </button>
      </div>

      {/* Playback speed */}
      <div className="mt-4 flex items-center justify-center">
        <button
          type="button"
          onClick={cycleRate}
          className="rounded-full border border-secondary/40 px-4 py-1.5 font-cormorant text-sm text-secondary-light transition-colors hover:bg-white/10"
        >
          {t({ ar: 'السرعة', en: 'Speed' })} · {rate}×
        </button>
      </div>
    </div>
  );
}

/**
 * Modal window that plays one audio track at a time with large, easy-to-scrub controls.
 * Closes on Esc / backdrop / ✕. Prev/next walk the list; a single <audio> element means
 * two tracks can never play simultaneously.
 */
export default function AudioModal({
  tracks,
  index,
  onIndex,
  onClose,
}: {
  tracks: Track[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const { t } = useLang();
  const [rate, setRate] = useState(1);
  const track = tracks[index];

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

  if (!track) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={track.title}
    >
      {/* Scoped styling for the native range thumb — bigger, easier to grab. */}
      <style>{`
.taj-seek{-webkit-appearance:none;appearance:none;height:8px;border-radius:9999px;outline:none;cursor:pointer;}
.taj-seek:disabled{cursor:default;opacity:.5;}
.taj-seek::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:9999px;background:var(--color-secondary-light);border:3px solid var(--color-primary-deep);box-shadow:0 2px 6px rgba(0,0,0,.35);cursor:pointer;}
.taj-seek::-moz-range-thumb{width:18px;height:18px;border-radius:9999px;background:var(--color-secondary-light);border:3px solid var(--color-primary-deep);cursor:pointer;}
.taj-seek::-moz-range-track{height:8px;border-radius:9999px;background:transparent;}
`}</style>

      <div
        className="relative w-full max-w-[520px] rounded-t-[24px] border border-secondary/25 bg-gradient-to-br from-primary to-primary-mid p-5 text-text-light shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:rounded-[24px] md:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: number · title · counter · close */}
        <div className="flex items-start gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-secondary-light to-secondary font-cormorant text-sm font-bold text-primary-dark">
            {index + 1}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate font-naskh text-base text-text-hero md:text-lg" dir="rtl" title={track.title}>
              {track.title}
            </div>
            <div className="font-cormorant text-xs text-secondary-light/70">
              {index + 1} / {tracks.length}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t({ ar: 'إغلاق', en: 'Close' })}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-lg text-text-light transition-colors hover:bg-white/20"
          >
            ✕
          </button>
        </div>

        <PlayerBody
          key={track.key}
          track={track}
          index={index}
          count={tracks.length}
          rate={rate}
          onRate={setRate}
          onIndex={onIndex}
        />
      </div>
    </div>
  );
}
