'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LibraryItem } from '@/data/library';
import { useLang } from '@/i18n/language';
import { streamConfigured, streamThumbnail } from '@/lib/stream';
import VideoModal from './VideoModal';

interface LibraryDetailViewProps {
  item: LibraryItem;
}

const SECTION_TABS: { id: 'animated' | 'real' | 'complete'; ar: string; en: string }[] = [
  { id: 'animated', ar: 'رسوم متحركة', en: 'Animated Videos' },
  { id: 'real', ar: 'فيديوهات حقيقية', en: 'Real Videos' },
  { id: 'complete', ar: 'الفيديو الكامل', en: 'Complete Video' },
];

const LANG_TABS: { id: 'ar' | 'en' | 'ur'; ar: string; en: string }[] = [
  { id: 'ar', ar: 'العربية', en: 'Arabic' },
  { id: 'en', ar: 'الإنجليزية', en: 'English' },
  { id: 'ur', ar: 'اردو', en: 'Urdu' },
];

export default function LibraryDetailView({ item }: LibraryDetailViewProps) {
  const { t, isAr } = useLang();

  const [video, setVideo] = useState<{ uid: string; title: string } | null>(null);
  const [activeSection, setActiveSection] = useState<'animated' | 'real' | 'complete'>('animated');
  const [activeLang, setActiveLang] = useState<'ar' | 'en' | 'ur'>('ar');
  const configured = streamConfigured();

  // The kids corner has two levels of tabs: main section (Animated/Real/Complete) × language.
  const sectioned = item.entries.some((e) => e.section);
  const tabbed = item.entries.some((e) => e.lang);
  const visibleEntries = item.entries.filter((e) => {
    if (sectioned && e.section !== activeSection) return false;
    if (tabbed && e.lang !== activeLang) return false;
    return true;
  });
  const firstVideo = configured ? visibleEntries.find((e) => e.video) : undefined;
  // Video collections (series, kids) render as a thumbnail grid; text sections stay a list.
  const isVideoCollection = item.entries.some((e) => e.video !== undefined);

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
          <Link
            href="/library"
            className="bg-white/[0.07] border border-secondary/30 text-secondary-light rounded-[10px] px-4 py-2 font-naskh text-sm cursor-pointer hover:bg-white/[0.12] transition-colors inline-flex items-center gap-2"
          >
            <span aria-hidden>{isAr ? '→' : '←'}</span> {t({ ar: 'المكتبة المعرفية', en: 'Knowledge Library' })}
          </Link>

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

          {sectioned && (
            <div className="flex flex-wrap gap-1 mb-4 border-b border-border">
              {SECTION_TABS.map((sec) => {
                const active = sec.id === activeSection;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSection(sec.id)}
                    className={`relative px-4 py-2.5 font-naskh text-sm md:text-base font-semibold transition-colors ${
                      active ? 'text-primary' : 'text-text-muted hover:text-primary'
                    }`}
                  >
                    {t({ ar: sec.ar, en: sec.en })}
                    {active && <span className="absolute inset-x-2 -bottom-px h-[3px] rounded-full bg-secondary" />}
                  </button>
                );
              })}
            </div>
          )}

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

          {isVideoCollection ? (
            /* Video collections → responsive grid of thumbnail cards */
            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {visibleEntries.length === 0 && (
                <div className="col-span-full bg-cream-light border border-dashed border-border rounded-[16px] px-4 py-12 text-center text-text-muted font-naskh text-sm">
                  {t({ ar: 'لا توجد فيديوهات هنا بعد.', en: 'No videos here yet.' })}
                </div>
              )}
              {visibleEntries.map((ent, i) => {
                const title = t({ ar: ent.t, en: ent.tEn });
                const playable = Boolean(ent.video) && configured;
                const thumb = ent.video ? streamThumbnail(ent.video) : '';
                const cardClass =
                  'group block w-full text-start overflow-hidden rounded-[16px] bg-cream-light border border-border transition-all duration-200 hover:-translate-y-1 hover:border-secondary hover:shadow-[0_14px_32px_rgba(13,70,52,0.12)]';
                const card = (
                  <>
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
                      {thumb ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={thumb}
                          alt=""
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 grid place-items-center text-4xl text-secondary-light/70">
                          {item.entryIcon}
                        </div>
                      )}
                      {playable && (
                        <div className="absolute inset-0 grid place-items-center bg-black/20 transition-colors duration-300 group-hover:bg-black/35">
                          <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary/95 text-primary-dark text-lg shadow-[0_6px_18px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-110">
                            ▶
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-3.5">
                      <div className="font-naskh font-semibold text-primary group-hover:text-secondary-dark transition-colors truncate">
                        {title}
                      </div>
                    </div>
                  </>
                );
                return playable ? (
                  <button key={i} onClick={() => setVideo({ uid: ent.video as string, title })} className={cardClass}>
                    {card}
                  </button>
                ) : (
                  <div key={i} className={`${cardClass} cursor-default`}>{card}</div>
                );
              })}
            </div>
          ) : (
            /* Text sections → simple list */
            <div className="flex flex-col gap-2.5">
              {visibleEntries.length === 0 && (
                <div className="bg-cream-light border border-dashed border-border rounded-[14px] px-4 py-8 text-center text-text-muted font-naskh text-sm">
                  {t({ ar: 'لا يوجد محتوى هنا بعد.', en: 'Nothing here yet.' })}
                </div>
              )}
              {visibleEntries.map((ent, i) => {
                const title = t({ ar: ent.t, en: ent.tEn });

                // Audio entry → inline HTML5 player card.
                if (ent.audio) {
                  return (
                    <div key={i} className="bg-cream-light border border-border rounded-[14px] px-3.5 md:px-[18px] py-3.5 md:py-4">
                      <div className="flex items-center gap-3 md:gap-4 mb-3">
                        <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary to-primary-mid grid place-items-center text-secondary-light text-sm md:text-base">
                          {item.entryIcon}
                        </div>
                        <div className="flex-1 min-w-0 text-sm md:text-base font-semibold text-text-body truncate">
                          {title}
                        </div>
                        <div className="shrink-0 font-cormorant text-xs md:text-sm text-secondary-dark hidden min-[400px]:block">
                          {t({ ar: ent.meta, en: ent.metaEn })}
                        </div>
                      </div>
                      <audio controls preload="metadata" src={ent.audio} className="w-full">
                        {t({ ar: 'متصفحك لا يدعم تشغيل الصوت.', en: 'Your browser does not support audio playback.' })}
                      </audio>
                    </div>
                  );
                }

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
          )}
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
