'use client';

import { useState } from 'react';
import { LibraryItem } from '@/data/library';
import { useLang } from '@/i18n/language';
import { streamConfigured } from '@/lib/stream';
import VideoModal from './VideoModal';

interface LibraryDetailViewProps {
  item: LibraryItem;
  onGoBack: () => void;
}

const LANG_TABS: { id: 'ar' | 'en' | 'ur'; ar: string; en: string }[] = [
  { id: 'ar', ar: 'العربية', en: 'Arabic' },
  { id: 'en', ar: 'الإنجليزية', en: 'English' },
  { id: 'ur', ar: 'اردو', en: 'Urdu' },
];

export default function LibraryDetailView({ item, onGoBack }: LibraryDetailViewProps) {
  const { t, isAr } = useLang();

  const [video, setVideo] = useState<{ uid: string; title: string } | null>(null);
  const [activeLang, setActiveLang] = useState<'ar' | 'en' | 'ur'>('ar');
  const configured = streamConfigured();

  // Items whose entries carry a `lang` (the kids corner) render as Arabic / English / Urdu tabs.
  const tabbed = item.entries.some((e) => e.lang);
  const visibleEntries = tabbed ? item.entries.filter((e) => e.lang === activeLang) : item.entries;
  const firstVideo = configured ? visibleEntries.find((e) => e.video) : undefined;

  const stats = [
    { val: t({ ar: item.stat1, en: item.stat1En }), label: t({ ar: 'المحتوى', en: 'Content' }) },
    { val: t({ ar: item.stat2, en: item.stat2En }), label: t({ ar: 'الإتاحة', en: 'Availability' }) },
    { val: t({ ar: item.stat3, en: item.stat3En }), label: t({ ar: 'التحديث', en: 'Updates' }) },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[radial-gradient(120%_120%_at_50%_-10%,var(--color-primary),var(--color-primary-mid)_55%,var(--color-primary-deep))] text-text-light py-[30px] px-4 md:px-7 pb-10 md:pb-14 overflow-hidden">
        {/* Crosshatch overlay */}
        <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(45deg,var(--color-secondary)_0_1px,transparent_1px_24px),repeating-linear-gradient(-45deg,var(--color-secondary)_0_1px,transparent_1px_24px)]" />

        <div className="relative max-w-[980px] mx-auto">
          {/* Back button */}
          <button
            onClick={onGoBack}
            className="bg-white/[0.07] border border-secondary/30 text-secondary-light rounded-[10px] px-4 py-2 font-naskh text-sm cursor-pointer hover:bg-white/[0.12] transition-colors inline-flex items-center gap-2"
          >
            <span aria-hidden>{isAr ? '→' : '←'}</span> {t({ ar: 'المكتبة المعرفية', en: 'Knowledge Library' })}
          </button>

          {/* Icon + Title */}
          <div className="flex gap-4 md:gap-[22px] items-center mt-5 flex-wrap">
            {/* Icon box */}
            <div className="shrink-0 w-[64px] h-[64px] md:w-[90px] md:h-[90px] rounded-2xl md:rounded-[22px] bg-gradient-to-br from-primary-accent to-primary-dark border border-secondary/40 grid place-items-center text-[28px] md:text-[40px] text-secondary-light">
              {item.icon}
            </div>

            <div className="flex-1 min-w-[240px]">
              <span className="inline-block bg-primary-dark/80 text-secondary font-mono text-xs px-3 py-1 rounded-lg mb-2">
                {t({ ar: item.kind, en: item.kindEn })}
              </span>
              <div className={`${isAr ? 'font-amiri' : 'font-cormorant'} text-[28px] md:text-[38px] text-text-hero leading-[1.2]`}>
                {t({ ar: item.ar, en: item.en })}
              </div>
              <div className="font-cormorant text-base tracking-[2px] text-secondary mt-0.5">
                {isAr ? item.en : item.ar}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[980px] mx-auto px-4 md:px-7 pt-8 md:pt-10 pb-16 md:pb-20 grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-[26px] items-start">
        {/* Main content */}
        <div>
          <div className="font-cormorant text-xs uppercase tracking-[3px] text-secondary-dark mb-2">Overview</div>
          <p className="text-lg leading-[2] text-text-dark mb-[26px]">{t({ ar: item.about, en: item.aboutEn })}</p>
          <h3 className={`${isAr ? 'font-amiri' : 'font-cormorant'} text-2xl text-primary mb-4`}>
            {t({ ar: 'المحتوى', en: 'Contents' })}
          </h3>

          {tabbed && (
            <div className="flex flex-wrap gap-2 mb-4">
              {LANG_TABS.map((tab) => {
                const active = tab.id === activeLang;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveLang(tab.id)}
                    className={`rounded-full px-5 py-2 font-naskh text-sm font-semibold transition-colors ${
                      active ? 'bg-primary text-secondary-light' : 'bg-cream-warm text-primary hover:bg-secondary/15'
                    }`}
                  >
                    {t({ ar: tab.ar, en: tab.en })}
                  </button>
                );
              })}
            </div>
          )}

          <div className="flex flex-col gap-2.5">
            {visibleEntries.length === 0 && (
              <div className="bg-cream-light border border-dashed border-border rounded-[14px] px-4 py-8 text-center text-text-muted font-naskh text-sm">
                {t({ ar: 'لا توجد فيديوهات في هذه اللغة بعد.', en: 'No videos in this language yet.' })}
              </div>
            )}
            {visibleEntries.map((ent, i) => {
              const title = t({ ar: ent.t, en: ent.tEn });
              const playable = Boolean(ent.video) && configured;
              const rowClass =
                'group flex items-center gap-3 md:gap-4 bg-cream-light border border-border rounded-[14px] px-3.5 md:px-[18px] py-3.5 md:py-4 cursor-pointer transition-all duration-200 hover:border-secondary hover:shadow-[0_6px_20px_rgba(13,70,52,0.07)] hover:bg-cream-warm/40 text-start w-full';
              const inner = (
                <>
                  <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary to-primary-mid grid place-items-center text-secondary-light text-sm md:text-base transition-transform duration-200 group-hover:scale-105">
                    {playable ? '▶' : item.entryIcon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm md:text-base font-semibold text-text-body group-hover:text-primary transition-colors">
                      {title}
                    </div>
                  </div>
                  <div className="shrink-0 font-cormorant text-xs md:text-sm text-secondary-dark hidden min-[400px]:block">
                    {t({ ar: ent.meta, en: ent.metaEn })}
                  </div>
                  <span className="shrink-0 text-secondary-dark opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 hidden md:inline" aria-hidden>
                    {playable ? '▶' : isAr ? '←' : '→'}
                  </span>
                </>
              );
              return playable ? (
                <button
                  key={i}
                  onClick={() => setVideo({ uid: ent.video as string, title })}
                  className={rowClass}
                >
                  {inner}
                </button>
              ) : (
                <div key={i} className={rowClass}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="bg-gradient-to-br from-primary to-primary-mid border border-secondary/25 rounded-[20px] p-7 text-text-light lg:sticky lg:top-[90px]">
          <div className="font-cormorant text-[13px] tracking-[3px] uppercase text-secondary">
            About this collection
          </div>

          <div className="flex flex-col gap-[18px] mt-[18px]">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="font-cormorant text-[28px] font-bold text-secondary-light">{s.val}</div>
                <div className="text-[13px] text-text-subtle">{s.label}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              firstVideo?.video &&
              setVideo({ uid: firstVideo.video, title: t({ ar: firstVideo.t, en: firstVideo.tEn }) })
            }
            className="w-full mt-6 bg-gradient-to-br from-secondary-light to-secondary text-primary-dark border-none rounded-xl py-[13px] font-naskh text-[15px] font-bold cursor-pointer hover:opacity-90 transition-opacity"
          >
            {t({ ar: firstVideo ? 'شاهد الآن' : 'ابدأ الآن', en: firstVideo ? 'Watch now' : 'Start now' })}
          </button>
        </aside>
      </section>

      {video && (
        <VideoModal uid={video.uid} title={video.title} onClose={() => setVideo(null)} />
      )}
    </main>
  );
}
