'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { NameData, QuranRef, nameSlug } from '@/data/names';
import { useLang } from '@/i18n/language';

interface DetailViewProps {
  name: NameData;
  quranRef?: QuranRef;
  names: NameData[];
}

export default function DetailView({
  name,
  quranRef,
  names,
}: DetailViewProps) {
  const { t, isAr } = useLang();
  const heading = isAr ? 'font-amiri' : 'font-cormorant';

  //Audio state and ref
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 1. Keep track of the previous name ID
  const [prevNameId, setPrevNameId] = useState(name.n);

  if (name.n !== prevNameId) {
    setPrevNameId(name.n);
    setPlaying(false);
  }

  // Reset audio state when the name changes (e.g., when user clicks Next/Prev)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.load(); 
    }
  }, [name.n]);

  // Play/Pause logic
  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);  
  };

  const currentIndex = names.findIndex((n) => n.n === name.n);
  const prevIndex = (currentIndex - 1 + 99) % 99;
  const nextIndex = (currentIndex + 1) % 99;

  const strippedName = name.ar.replace(/[ًٌٍَُِّْ]/g, '');

  const relatedIndices = [
    (currentIndex - 2 + 99) % 99,
    (currentIndex - 1 + 99) % 99,
    (currentIndex + 1) % 99,
    (currentIndex + 2) % 99,
  ];

  return (
    <div>
      
      {/* Change name.n to nameSlug(name) if your files are named by slug instead of numbers */}
      <audio 
        ref={audioRef}
        src={`/audio/${name.n}.mp3`} 
        onEnded={() => setPlaying(false)}
      />

      {/* Hero Banner */}
      <div className="relative bg-[radial-gradient(120%_120%_at_50%_-10%,_#0d4634,_#082a1f_55%,_#061d16)] px-4 md:px-7 py-[30px] overflow-hidden">
        {/* Crosshatch overlay */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, #c19a45 10px, #c19a45 11px), repeating-linear-gradient(-45deg, transparent, transparent 10px, #c19a45 10px, #c19a45 11px)',
          }}
        />

        {/* Back button */}
        <Link
          href="/names"
          className="relative z-[1] inline-flex items-center gap-2 bg-transparent border-none text-secondary font-naskh text-base cursor-pointer mb-3 p-0"
        >
          <span className="text-lg" aria-hidden>{isAr ? '→' : '←'}</span>
          <span>{t({ ar: 'كل الأسماء', en: 'All Names' })}</span>
        </Link>

        {/* Center content */}
        <div className="relative z-[1] text-center">
          {/* Number circle */}
          <div className="w-[42px] h-[42px] rounded-full border border-secondary/50 flex items-center justify-center font-cormorant text-base text-secondary mx-auto mb-8 md:mb-[50px]">
            {name.n}
          </div>

          {/* Arabic name */}
          <div className="font-amiri text-[44px] sm:text-[56px] md:text-[96px] text-text-hero leading-[1.2] [text-shadow:0_4px_24px_rgba(0,0,0,0.4)] mb-3">
            {name.ar}
          </div>

          {/* Transliteration */}
          <div className="font-cormorant text-[20px] md:text-[26px] text-secondary mb-2">
            {name.tr}
          </div>

          {/* English meaning */}
          <div className="text-base md:text-lg text-text-soft mb-4">
            {name.en}
          </div>

          {/* Verified content badge */}
          <div className="inline-flex items-center gap-1.5 bg-secondary/10 border border-secondary/40 rounded-full px-3.5 py-1 mb-4 font-naskh text-[11px] md:text-xs text-secondary-light">
            <span aria-hidden>✓</span> {t({ ar: 'محتوى موثّق ومُراجع علمياً', en: 'Verified & scholarly-reviewed content' })}
          </div>

          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-2.5 mb-7">
            <span className="h-px w-10 bg-gradient-to-l from-secondary/60 to-transparent" />
            <span className="text-secondary text-sm">&#10022;</span>
            <span className="h-px w-10 bg-gradient-to-r from-secondary/60 to-transparent" />
          </div>

          {/* Play button */}
          <button
            onClick={toggleAudio}
            className="inline-flex items-center gap-2.5 bg-gradient-to-br from-secondary to-secondary-dark border-none rounded-full px-6 py-2.5 cursor-pointer text-white font-amiri text-[15px] mb-8"
          >
            <span>{t({ ar: 'استمع', en: 'Listen to the recitation' })}</span>
            {/* Equalizer bars */}
            <span className="inline-flex items-end gap-0.5 h-4">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    width: 3,
                    backgroundColor: '#fff',
                    borderRadius: 1,
                    height: playing ? undefined : '40%',
                    animation: playing
                      ? `taj-eq 0.8s ${i * 0.15}s ease-in-out infinite`
                      : 'none',
                  }}
                />
              ))}
            </span>
          </button>

          {/* Prev / Next navigation */}
          <div className="flex justify-center gap-[18px]">
            <Link
              href={`/name/${nameSlug(names[prevIndex])}`}
              aria-label={t({ ar: 'الاسم السابق', en: 'Previous name' })}
              className="w-10 h-10 rounded-full border border-secondary/30 bg-white/[0.06] text-secondary text-[22px] cursor-pointer flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              &lsaquo;
            </Link>
            <Link
              href={`/name/${nameSlug(names[nextIndex])}`}
              aria-label={t({ ar: 'الاسم التالي', en: 'Next name' })}
              className="w-10 h-10 rounded-full border border-secondary/30 bg-white/[0.06] text-secondary text-[22px] cursor-pointer flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              &rsaquo;
            </Link>
          </div>
        </div>
      </div>

      {/* Content Cards */}
      <div className="max-w-[920px] mx-auto -mt-[34px] px-5 pb-20 grid grid-cols-1 gap-5">
        {/* Meaning Card */}
        <div className="bg-cream-light border border-border rounded-[18px] p-6 md:px-[34px] md:py-8 mt-10 border-r-4 border-r-secondary">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-6 bg-secondary/50" />
            <span className="font-cormorant text-xs uppercase tracking-[2px] text-secondary-dark">Meaning</span>
          </div>
          <h2 className={`${heading} text-[26px] text-primary mb-4`}>
            {t({ ar: 'المعنى والدلالة', en: 'Meaning & Significance' })}
          </h2>
          <p className="text-lg leading-[2] text-text-body font-amiri" dir="rtl">
            {name.da}
          </p>
        </div>

        {/* Quran Card */}
        <div className="bg-[radial-gradient(120%_120%_at_50%_-10%,_#0d4634,_#082a1f_55%,_#061d16)] rounded-[18px] p-6 md:px-[34px] md:py-8 text-text-light">
          <div className="font-cormorant text-xs uppercase tracking-[2px] text-secondary mb-2">
            In the Qur&apos;an
          </div>
          <h2 className={`${heading} text-[26px] text-text-hero mb-5`}>
            {t({ ar: 'شواهد من القرآن الكريم', en: 'Evidence from the Noble Qur’an' })}
          </h2>

          {quranRef?.phrase && (
            <div className="font-amiri text-[21px] md:text-[27px] leading-[2] border-r-[3px] border-secondary pr-4 md:pr-5 mb-5 text-text-hero" dir="rtl">
              {quranRef.phrase}
            </div>
          )}

          {quranRef?.cites && quranRef.cites.length > 0 && (
            <div className={`flex flex-wrap gap-2.5 ${quranRef.note ? 'mb-4' : ''}`}>
              {quranRef.cites.map((cite, i) => (
                <span
                  key={i}
                  className="inline-block bg-secondary/15 border border-secondary/25 rounded-full px-4 py-1.5 text-sm text-secondary-light font-amiri"
                >
                  {cite.ar} &mdash; {cite.en}
                </span>
              ))}
            </div>
          )}

          {quranRef?.note && (
            <p className="text-[15px] text-text-subtle leading-[1.8] font-amiri" dir="rtl">
              {quranRef.note}
            </p>
          )}
        </div>

        {/* Reflection Card */}
        <div className="bg-cream-light border border-border rounded-[18px] p-6 md:px-[34px] md:py-8 border-r-4 border-r-secondary">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-6 bg-secondary/50" />
            <span className="font-cormorant text-xs uppercase tracking-[2px] text-secondary-dark">Reflection</span>
          </div>
          <h2 className={`${heading} text-[26px] text-primary mb-4`}>
            {t({ ar: 'وقفة تأمل', en: 'A Moment of Reflection' })}
          </h2>
          <p className="text-lg leading-[2] text-text-body font-amiri" dir={isAr ? 'rtl' : 'ltr'}>
            {isAr
              ? `معرفةُ الله باسمه «${strippedName}» تملأ القلب يقيناً وطمأنينة، وتدعو العبد إلى التخلّق بأثر هذا الاسم في حياته وسلوكه.`
              : `Knowing Allah by His name “${strippedName}” fills the heart with certainty and tranquillity, and calls the servant to embody the effect of this name in their life and conduct.`}
          </p>
        </div>

        {/* Supplication Card */}
        <div className="bg-cream-warm border-2 border-dashed border-secondary rounded-[18px] p-6 md:px-[34px] md:py-9 text-center">
          <div className="font-cormorant text-xs uppercase tracking-[2px] text-secondary-dark mb-3">
            Supplication
          </div>
          <div className="font-amiri text-[26px] md:text-[34px] text-primary leading-[1.6]">
            {`يَا ${name.ar}`}
          </div>
        </div>

        {/* Related Names Card */}
        <div>
          <h2 className={`${heading} text-[26px] text-primary mb-[18px] text-center`}>
            {t({ ar: 'أسماء ذات صلة', en: 'Related Names' })}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
            {relatedIndices.map((idx) => {
              const related = names[idx];
              if (!related) return null;
              return (
                <Link
                  key={related.n}
                  href={`/name/${nameSlug(related)}`}
                  className="group relative block bg-cream-light border border-border rounded-[14px] px-3 pt-5 pb-4 text-center cursor-pointer overflow-hidden transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-secondary hover:shadow-[0_12px_28px_#0d463418]"
                >
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-secondary scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300" />
                  <div className="font-cormorant text-[11px] text-secondary-dark mb-1.5">
                    {related.n}
                  </div>
                  <div className="font-amiri text-[26px] md:text-[32px] text-primary leading-[1.3] mb-1.5">
                    {related.ar}
                  </div>
                  <div className="font-cormorant text-[13px] font-semibold text-secondary-dark mb-[3px]">
                    {related.tr}
                  </div>
                  <div className="text-xs text-text-muted">
                    {related.en}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
