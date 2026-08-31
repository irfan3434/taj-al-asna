'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLang, Bi } from '@/i18n/language';
import { nameSlug } from '@/data/names';
import HeroSearch from '@/components/HeroSearch';

/** URL for a home section: home is the SPA root, the rest are ?v= views. */
const hrefForView = (v: string) => (v === 'home' ? '/' : `/?v=${v}`);

interface HomeViewProps {
  onNavigate: (view: string, query?: string) => void;
  onOpenName: (index: number) => void;
  names: Array<{ n: number; ar: string; tr: string; en: string; da: string }>;
}

const HERO_CENTER_IDX = 92; // النور — rests statically inside the ring
const HERO_CORNERS: { idx: number; pos: string }[] = [
  { idx: 0, pos: 'top-[18%] left-[6%]' },     // الرحمن
  { idx: 1, pos: 'top-[18%] right-[6%]' },    // الرحيم
  { idx: 55, pos: 'bottom-[20%] left-[6%]' }, // الحميد
  { idx: 46, pos: 'bottom-[20%] right-[6%]' },// الودود
];
const FEATURED_NAMES_INDICES = [0, 1, 2, 3, 4, 7, 16, 18];

const COUNTERS: { target: number; suffix: string; label: Bi }[] = [
  { target: 99, suffix: '', label: { ar: 'اسمًا من أسماء الله', en: 'Divine Names' } },
  { target: 100, suffix: 'M+', label: { ar: 'مسلم حول العالم', en: 'Muslims Worldwide' } },
  { target: 200, suffix: '+', label: { ar: 'مرجع ومصدر', en: 'References & Sources' } },
  { target: 10, suffix: '+', label: { ar: 'لغة مدعومة', en: 'Supported Languages' } },
];

const PATHWAYS: { icon: string; title: Bi; description: Bi; view: string }[] = [
  {
    icon: '☆',
    title: { ar: 'تعلّم وتأمّل', en: 'Learn & Reflect' },
    description: {
      ar: 'تعرّف على أسماء الله الحسنى، معانيها العميقة، وكيف تتجلّى في حياتنا اليومية.',
      en: "Get to know Allah's Beautiful Names, their deep meanings, and how they appear in our everyday lives.",
    },
    view: 'names',
  },
  {
    icon: '✦',
    title: { ar: 'اسأل المساعد', en: 'Ask the Assistant' },
    description: {
      ar: 'اطرح أسئلتك حول أسماء الله الحسنى واحصل على إجابات مدعومة بالمصادر الموثوقة.',
      en: "Ask your questions about Allah's Beautiful Names and receive answers grounded in trusted sources.",
    },
    view: 'assistant',
  },
  {
    icon: '❖',
    title: { ar: 'استكشف المنظومة', en: 'The Ecosystem' },
    description: {
      ar: 'اكتشف الروابط والعلاقات بين أسماء الله الحسنى في منظومة متكاملة ومترابطة.',
      en: "Discover the connections between Allah's Names within one integrated, interconnected ecosystem.",
    },
    view: 'eco',
  },
];

const JOURNEY_STEPS: { icon: string; label: Bi }[] = [
  { icon: '✧', label: { ar: 'الاكتشاف', en: 'Discovery' } },
  { icon: '✦', label: { ar: 'التعلّم', en: 'Learning' } },
  { icon: '❖', label: { ar: 'التفاعل', en: 'Engagement' } },
  { icon: '◈', label: { ar: 'التخصيص', en: 'Personalization' } },
  { icon: '✺', label: { ar: 'التطبيق', en: 'Practice' } },
  { icon: '∞', label: { ar: 'أثر دائم', en: 'Lasting Impact' } },
];

function useAnimatedCounter(target: number, duration: number = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const p = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.floor(eased * target));
            if (p < 1) {
              requestAnimationFrame(animate);
            } else {
              setValue(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

const spinKeyframes = `
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`;

/** A featured name inside the mihrab-arch ornament (ornament3). */
function HeroArchName({
  ar,
  en,
  onClick,
  className = '',
}: {
  ar: string;
  en: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent border-none cursor-pointer group ${className}`}
    >
      <Image
        src="/ornament3.webp"
        alt=""
        aria-hidden
        width={168}
        height={260}
        className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none transition-transform duration-300 group-hover:scale-[1.04]"
      />
      {/* text sits inside the arch body (opening spans ~38%–92% vertically) */}
      <span className="absolute left-[15%] right-[15%] top-[38%] bottom-[8%] flex flex-col items-center justify-center text-center">
        <span className="font-amiri text-[26px] md:text-[30px] leading-tight text-secondary transition-colors duration-300 group-hover:text-secondary-light">
          {ar}
        </span>
        <span className="font-cormorant text-[10px] md:text-[11px] leading-[1.3] text-secondary-light/85 mt-1.5">
          {en}
        </span>
      </span>
    </button>
  );
}

/** One animated stat in the counters band (owns its own IntersectionObserver counter). */
function AnimatedCounterItem({ target, suffix, label }: { target: number; suffix: string; label: Bi }) {
  const { value, ref } = useAnimatedCounter(target);
  const { t } = useLang();
  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="font-cormorant text-[32px] md:text-[40px] lg:text-[52px] font-bold text-secondary leading-none">
        {value}
        {suffix}
      </div>
      <div className="w-8 h-px bg-secondary/40 my-3" />
      <div className="font-naskh text-sm lg:text-base text-text-light">{t(label)}</div>
    </div>
  );
}

/** Rotating dhikr the mascot recites — Arabic, with an English rendering for EN mode. */
const MASCOT_DHIKR: Bi[] = [
  { ar: 'صلِّي على النبي ﷺ', en: 'Send blessings upon the Prophet ﷺ' },
  { ar: 'أستغفر الله وأتوب إليه', en: "I seek Allah's forgiveness and turn to Him in repentance" },
  {
    ar: 'سبحان الله وبحمده، سبحان الله العظيم.',
    en: 'Glory be to Allah and praise Him; glory be to Allah the Magnificent.',
  },
  {
    ar: 'اللهم اغفر لنا وارحمنا وتب علينا، إنك أنت التواب الرحيم.',
    en: 'O Allah, forgive us, have mercy on us, and accept our repentance — indeed You are the Ever-Relenting, the Most Merciful.',
  },
];

const MASCOT_VISIBLE_MS = 6000; // hold each message on screen
const MASCOT_HIDDEN_MS = 15000; // gap between messages
const MASCOT_ENTRANCE_MS = 500; // initial delay so the first appearance animates

/**
 * Drives the mascot's dhikr loop: appear → hold 10s → disappear → wait 5s → next → repeat.
 * One timer for the whole app, so the mobile and desktop mascots stay in sync.
 */
function useMascotCycle() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let alive = true;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const after = (ms: number, fn: () => void) => {
      timers.push(setTimeout(() => { if (alive) fn(); }, ms));
    };

    const show = (i: number) => {
      setIndex(i);
      setVisible(true);
      after(MASCOT_VISIBLE_MS, () => {
        setVisible(false);
        after(MASCOT_HIDDEN_MS, () => show((i + 1) % MASCOT_DHIKR.length));
      });
    };

    after(MASCOT_ENTRANCE_MS, () => show(0));
    return () => {
      alive = false;
      timers.forEach(clearTimeout);
    };
  }, []);

  return { dhikr: MASCOT_DHIKR[index], visible };
}

export default function HomeView({ onNavigate, onOpenName, names }: HomeViewProps) {
  const { t, isAr } = useLang();
  const centerName = names[HERO_CENTER_IDX];
  const heading = isAr ? 'font-amiri' : 'font-cormorant';

  const { dhikr: mascotDhikr, visible: mascotVisible } = useMascotCycle();
  const mascotDir = isAr ? 'rtl' : 'ltr';
  const mascotBubbleFont = isAr ? 'font-naskh' : 'font-cormorant';
  const mascotAnim = mascotVisible
    ? 'opacity-100 translate-y-0 scale-100'
    : 'opacity-0 translate-y-4 scale-95 pointer-events-none';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: spinKeyframes }} />

      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_var(--color-primary-dark)_75%)] flex flex-col items-center justify-center px-5 py-20 overflow-hidden text-center"
      >
        {/* Crosshatch Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(193,154,69,0.03) 10px, rgba(193,154,69,0.03) 11px), repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(193,154,69,0.03) 10px, rgba(193,154,69,0.03) 11px)',
          }}
        />

        {/* Name of Light inside the ornamental mandala */}
        <div className="relative flex items-center justify-center w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[340px] lg:h-[340px] mb-6 lg:mb-8">
          <Image
            src="/ornament1.webp"
            alt=""
            aria-hidden
            width={340}
            height={340}
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
          />
          {centerName && (
            <button
              onClick={() => onOpenName(HERO_CENTER_IDX)}
              className="translate-y-2 relative z-[1] flex flex-col items-center justify-center bg-transparent border-none cursor-pointer"
            >
              <span className="font-amiri text-[20px] sm:text-[30px] lg:text-[42px] text-secondary leading-none">{centerName.ar}</span>
              <span className="font-cormorant text-[8px] sm:text-[11px] lg:text-[13px] text-secondary-light tracking-[2px] mt-1.5">{centerName.en}</span>
            </button>
          )}
        </div>

        {/* Primary Title */}
        <h1 className={`${heading} text-[34px] sm:text-[40px] md:text-[58px] lg:text-[76px] text-secondary leading-[1.2] mb-4`}>
          {t({ ar: 'أسماءُ اللهِ الحُسنى', en: 'The 99 Beautiful Names of Allah' })}
        </h1>

        {/* Secondary line (opposite language) */}
        <h2 className={`${isAr ? 'font-cormorant tracking-[2px]' : 'font-amiri'} text-lg md:text-xl lg:text-2xl text-secondary-light mb-6 font-normal`}>
          {t({ ar: 'The 99 Beautiful Names of Allah', en: 'أسماءُ اللهِ الحُسنى' })}
        </h2>

        {/* Description */}
        <p className="font-naskh text-base lg:text-lg text-text-light max-w-[500px] mx-auto mb-8 leading-[1.8] opacity-85 text-center">
          {t({
            ar: 'اكتشف أسماء الله الحسنى التسعة والتسعين، تعرّف على معانيها العميقة، وتأمّل في جمالها وكمالها. رحلة إيمانية تقرّبك إلى الله.',
            en: 'Discover the ninety-nine Beautiful Names of Allah, learn their profound meanings, and reflect on their beauty and perfection — a journey of faith that draws you nearer to Allah.',
          })}
        </p>

        {/* Search Bar with live typeahead suggestions */}
        <HeroSearch names={names} onSubmit={(q) => onNavigate('names', q)} />

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 lg:mb-16">
          <button
            onClick={() => onNavigate('names')}
            className="bg-secondary text-primary-dark border-none rounded-full px-9 py-3.5 text-base font-naskh cursor-pointer font-semibold hover:bg-secondary-light transition-colors duration-300"
          >
            {t({ ar: 'استكشف الأسماء', en: 'Explore the Names' })}
          </button>
          <button
            onClick={() => onNavigate('assistant')}
            className="bg-transparent text-secondary border-2 border-secondary rounded-full px-9 py-3.5 text-base font-naskh cursor-pointer font-semibold hover:text-secondary-light hover:border-secondary-light transition-all duration-300"
          >
            {t({ ar: 'اسأل المساعد', en: 'Ask the Assistant' })}
          </button>
        </div>

        {/* Abdullah — mobile dhikr companion (in normal flow so it never overlaps) */}
        <div
          aria-hidden={!mascotVisible}
          className={`md:hidden flex items-end gap-2 -mt-4 transition-all duration-500 ease-out ${mascotAnim}`}
        >
          <div className="[animation:taj-mascot-idle_4s_ease-in-out_2s_infinite] shrink-0">
            <Image
              src="/abdullah.webp"
              alt={t({ ar: 'عبدالله', en: 'Abdullah' })}
              width={84}
              height={84}
              className="w-[80px] h-[80px] object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
            />
          </div>
          <div
            dir={mascotDir}
            className={`relative mb-5 bg-cream-light text-primary-dark ${mascotBubbleFont} text-[13px] leading-[1.9] px-3.5 py-2 rounded-2xl border border-secondary/50 shadow-[0_8px_24px_rgba(6,32,23,0.35)] max-w-[210px] text-center`}
          >
            {t(mascotDhikr)}
            {/* tail — points toward Abdullah (image sits on the right in RTL) */}
            <span className="absolute -right-[7px] bottom-3 w-3 h-3 bg-cream-light border-r border-t border-secondary/50 rotate-45" aria-hidden />
          </div>
        </div>

        {/* Featured-name arches — mobile & tablet (2×2 grid, below the CTAs) */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-1 w-full max-w-[340px] mx-auto mt-6 mb-6 lg:hidden">
          {HERO_CORNERS.map(({ idx }) => {
            const name = names[idx];
            if (!name) return null;
            return (
              <HeroArchName
                key={idx}
                ar={name.ar}
                en={name.en}
                onClick={() => onOpenName(idx)}
                className="relative w-full aspect-[168/260]"
              />
            );
          })}
        </div>

        {/* Featured-name arches — desktop (flanking the hero) */}
        {HERO_CORNERS.map(({ idx, pos }) => {
          const name = names[idx];
          if (!name) return null;
          return (
            <HeroArchName
              key={idx}
              ar={name.ar}
              en={name.en}
              onClick={() => onOpenName(idx)}
              className={`hidden lg:block absolute ${pos} w-[168px] h-[260px] z-[1]`}
            />
          );
        })}

        {/* Abdullah — desktop dhikr companion */}
        <div
          aria-hidden={!mascotVisible}
          className={`hidden md:flex md:flex-row-reverse absolute bottom-4 right-4 lg:bottom-25 lg:right-50 z-[2] items-end gap-2.5 transition-all duration-500 ease-out ${mascotAnim}`}
        >
          <div className="[animation:taj-mascot-idle_4s_ease-in-out_2s_infinite]">
            <Image
              src="/abdullah.webp"
              alt={t({ ar: 'عبدالله', en: 'Abdullah' })}
              width={150}
              height={150}
              className="w-[150px] h-[150px] lg:w-[150px] lg:h-[150px] object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
            />
          </div>
          <div
            dir={mascotDir}
            className={`relative mb-8 lg:mb-10 bg-cream-light text-primary-dark ${mascotBubbleFont} text-sm lg:text-[15px] leading-[1.9] px-4 py-2.5 rounded-2xl border border-secondary/50 shadow-[0_8px_24px_rgba(6,32,23,0.35)] max-w-[240px] text-center`}
          >
            {t(mascotDhikr)}
            {/* bubble tail — points toward Abdullah (on the right) */}
            <span className="absolute -right-[7px] bottom-3.5 w-3 h-3 bg-cream-light border-r border-t border-secondary/50 rotate-45" aria-hidden />
          </div>
        </div>
      </section>

      {/* Counters Section */}
      <section className="bg-primary-dark px-5 py-16 lg:py-24 border-y border-secondary/15">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <div className="font-cormorant text-xs lg:text-sm uppercase tracking-[4px] text-secondary">
              By The Numbers
            </div>
            <h2 className={`${heading} text-[26px] lg:text-[34px] text-secondary-light mt-2`}>
              {t({ ar: 'أثرٌ يتجاوز الحدود', en: 'Impact Beyond Borders' })}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-y-10 gap-x-3 md:gap-x-6 lg:gap-8 text-center">
            {COUNTERS.map((counter, i) => (
              <AnimatedCounterItem key={i} target={counter.target} suffix={counter.suffix} label={counter.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="bg-cream px-5 py-16 lg:py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <div className="font-cormorant text-xs lg:text-sm uppercase tracking-[4px] text-secondary-dark">
              Begin Your Journey
            </div>
            <h2 className={`${heading} text-[30px] lg:text-[40px] text-primary mt-2`}>
              {t({ ar: 'اختر مسارك', en: 'Choose Your Path' })}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {PATHWAYS.map((pathway, i) => (
              <Link
                key={i}
                href={hrefForView(pathway.view)}
                className="group relative block bg-cream-light rounded-[20px] px-6 py-10 lg:px-8 lg:py-12 text-center cursor-pointer border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/50 shadow-[0_4px_16px_rgba(6,32,23,0.05)] hover:shadow-[0_16px_48px_rgba(6,32,23,0.14)]"
              >
                {/* Top accent line — grows on hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-secondary scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300" />

                {/* Icon Container */}
                <div className="w-[76px] h-[76px] rounded-full bg-[linear-gradient(135deg,var(--color-primary-dark),var(--color-primary))] ring-1 ring-secondary/30 flex items-center justify-center mx-auto mb-6 text-[30px] text-secondary group-hover:text-secondary-light transition-colors duration-300">
                  {pathway.icon}
                </div>

                {/* Title */}
                <h3 className={`${heading} text-[24px] lg:text-[28px] text-primary-dark mb-2`}>
                  {t(pathway.title)}
                </h3>

                {/* English label (shown in Arabic mode as a sub-label) */}
                {isAr && (
                  <div className="font-cormorant text-sm text-secondary-dark mb-4 uppercase tracking-[1.5px]">
                    {pathway.title.en}
                  </div>
                )}

                {/* Description */}
                <p className="font-naskh text-[15px] text-primary-mid leading-[1.9] opacity-80 mb-5">
                  {t(pathway.description)}
                </p>

                {/* Explore hint — reveals on hover */}
                <span className="font-naskh text-sm text-secondary-dark inline-flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t({ ar: 'استكشف', en: 'Explore' })} <span aria-hidden>{isAr ? '←' : '→'}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Strip */}
      <section className="bg-cream-warm border-y border-border px-4 md:px-5 py-10 md:py-14">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-8">
            <div className="font-cormorant text-xs lg:text-sm uppercase tracking-[4px] text-secondary-dark">
              Your Journey
            </div>
            <h2 className={`${heading} text-[26px] md:text-[32px] text-primary mt-2`}>
              {t({ ar: 'رحلتك المعرفية معنا', en: 'Your Journey With Us' })}
            </h2>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-2 md:gap-4 text-center">
            {JOURNEY_STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-18 h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary-dark to-primary ring-1 ring-secondary/30 flex items-center justify-center text-lg text-secondary">
                  {step.icon}
                </div>
                <span className="font-naskh text-[12px] md:text-[18px] text-primary-dark">{t(step.label)}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('about')}
              className="group bg-transparent border-none text-secondary-dark font-naskh text-sm md:text-[15px] cursor-pointer inline-flex items-center gap-2 hover:text-primary transition-colors duration-300"
            >
              {t({ ar: 'تعرّف على رحلتك كاملة', en: 'See your full journey' })}
              <span className="inline-block group-hover:-translate-x-1 transition-transform duration-300" aria-hidden>{isAr ? '←' : '→'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Names Section */}
      <section className="bg-primary-mid px-5 py-16 lg:py-24">
        <div className="max-w-[1100px] mx-auto">
          {/* Header */}
          <div className="flex flex-wrap justify-between items-end gap-3 mb-10">
            <div>
              <div className="font-cormorant text-xs lg:text-sm uppercase tracking-[4px] text-secondary">
                Featured
              </div>
              <h2 className={`${heading} text-[26px] md:text-[30px] lg:text-[40px] text-secondary-light mt-2`}>
                {t({ ar: 'أسماء مختارة', en: 'Featured Names' })}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('names')}
              className="group bg-transparent border-none text-secondary-light font-naskh text-[15px] cursor-pointer flex items-center gap-2 hover:text-secondary transition-colors duration-300 shrink-0"
            >
              {t({ ar: 'عرض الكل', en: 'View all' })}
              <span className="inline-block group-hover:-translate-x-1 transition-transform duration-300" aria-hidden>{isAr ? '←' : '→'}</span>
            </button>
          </div>

          {/* Names Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {FEATURED_NAMES_INDICES.map((nameIdx) => {
              const name = names[nameIdx];
              if (!name) return null;
              return (
                <Link
                  key={nameIdx}
                  href={`/name/${nameSlug(name)}`}
                  className="group relative block bg-[linear-gradient(145deg,var(--color-primary),var(--color-primary-dark))] rounded-[20px] px-3 py-6 md:px-4 md:py-7 lg:px-6 lg:py-9 text-center cursor-pointer border border-secondary/20 transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/60 hover:shadow-[0_10px_36px_rgba(193,154,69,0.2)]"
                >
                  {/* Number badge */}
                  <div className="absolute top-2.5 right-2.5 md:top-3 md:right-3 w-6 h-6 md:w-7 md:h-7 rounded-full border border-secondary/40 flex items-center justify-center font-cormorant text-[10px] md:text-[11px] text-secondary-dark group-hover:border-secondary group-hover:text-secondary transition-colors duration-300">
                    {name.n}
                  </div>

                  {/* Arabic Name */}
                  <div className="font-amiri text-[26px] md:text-[34px] lg:text-[46px] text-secondary mb-3 mt-2 leading-[1.2]">
                    {name.ar}
                  </div>

                  {/* Transliteration */}
                  <div className="font-cormorant text-sm lg:text-[15px] text-secondary-light mb-1 italic">
                    {name.tr}
                  </div>

                  {/* English Meaning */}
                  <div className="font-cormorant text-xs lg:text-[13px] text-text-light opacity-75">
                    {name.en}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
