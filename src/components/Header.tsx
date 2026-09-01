'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLang, Bi } from '@/i18n/language';
import { viewHref } from '@/lib/nav';

type View = 'home' | 'names' | 'library' | 'assistant' | 'eco' | 'about' | 'waqf';

const navItems: { view: View; label: Bi; highlight?: boolean }[] = [
  { view: 'home', label: { ar: 'الرئيسية', en: 'Home' } },
  { view: 'names', label: { ar: 'الأسماء الحسنى', en: 'The Names' } },
  { view: 'library', label: { ar: 'المكتبة', en: 'Library' } },
  { view: 'assistant', label: { ar: 'المساعد الذكي', en: 'AI Assistant' } },
  { view: 'eco', label: { ar: 'المنظومة', en: 'Ecosystem' } },
  { view: 'about', label: { ar: 'عن المنصة', en: 'About' } },
  { view: 'waqf', label: { ar: 'الوقف والأثر', en: 'Waqf & Impact' }, highlight: true },
];

/** URL for a nav tab — every section is a real route now. */
function hrefFor(view: View): string {
  return viewHref(view);
}

function LangToggle({ small }: { small?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`flex items-center border border-secondary/50 rounded-[20px] overflow-hidden font-cormorant font-semibold ${small ? 'text-xs' : 'text-[13px]'}`}>
      <button
        onClick={() => setLang('ar')}
        aria-pressed={lang === 'ar'}
        className={`${small ? 'px-3 py-[5px]' : 'px-3.5 py-1.5'} transition-colors ${lang === 'ar' ? 'bg-secondary text-primary-dark' : 'text-secondary-dark hover:bg-secondary/10'}`}
      >
        ع
      </button>
      <button
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`${small ? 'px-2.5 py-[5px]' : 'px-2.5 py-1.5'} transition-colors ${lang === 'en' ? 'bg-secondary text-primary-dark' : 'text-secondary-dark hover:bg-secondary/10'}`}
      >
        EN
      </button>
    </div>
  );
}

export default function Header() {
  const { t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Active tab derived purely from the path — every section is a real route now.
  // (/names and /name/* both belong to "The Names".)
  const current: string =
    pathname.startsWith('/name') ? 'names'
    : pathname.startsWith('/library') ? 'library'
    : pathname.startsWith('/assistant') ? 'assistant'
    : pathname.startsWith('/ecosystem') ? 'eco'
    : pathname.startsWith('/about') ? 'about'
    : pathname.startsWith('/waqf') ? 'waqf'
    : 'home';

  function pillClasses(view: View, highlight?: boolean) {
    const base =
      'border-none cursor-pointer font-naskh font-semibold rounded-lg px-3 py-2 xl:px-5 xl:py-2.5 text-sm xl:text-[15px] whitespace-nowrap transition-all duration-200';
    if (current === view) {
      return `${base} bg-primary text-secondary-light shadow-[0_4px_14px_rgba(13,70,52,0.35)]`;
    }
    if (highlight) {
      return `${base} bg-gradient-to-br from-secondary-light to-secondary-dark text-primary-dark shadow-[0_4px_14px_rgba(193,154,69,0.45)] hover:shadow-[0_6px_20px_rgba(193,154,69,0.6)] hover:-translate-y-0.5`;
    }
    return `${base} bg-secondary text-primary-dark hover:bg-secondary-light hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(193,154,69,0.4)]`;
  }

  return (
    <header className="sticky top-0 z-50 bg-primary-dark border-b border-secondary/30 shadow-[0_2px_16px_rgba(6,32,23,0.07)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-2.5 md:py-5 flex items-center gap-3 lg:gap-5">
        {/* Logo — crown emblem in a circular badge */}
        <Link href={hrefFor('home')} onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5 md:gap-3 cursor-pointer shrink-0">
          <div className="w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-primary-dark ring-2 ring-secondary/60 flex items-center justify-center p-1.5 md:p-2">
            <Image src="/logo.webp" alt={t({ ar: 'شعار التاج الأسنى', en: 'Taj Al Asna logo' })} width={44} height={40}
              className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-amiri text-base md:text-lg font-bold text-[#c19a45]">
              {t({ ar: 'التاج الأسنى', en: 'Taj Al Asna' })}
            </span>
            <span className="font-cormorant text-[9px] md:text-[10px] tracking-[2px] text-[#c19a45] uppercase">
              {t({ ar: 'Al Taj Al Asna', en: 'The 99 Names of Allah' })}
            </span>
          </div>
        </Link>

        {/* Pill Nav — desktop */}
        <nav className="hidden lg:flex flex-wrap items-center gap-3 xl:gap-5 flex-1 justify-center">
          {navItems.map(({ view, label, highlight }) => (
            <Link key={view} href={hrefFor(view)} className={pillClasses(view, highlight)}>
              {t(label)}
            </Link>
          ))}
        </nav>

        {/* Spacer on mobile */}
        <div className="flex-1 lg:hidden" />

        {/* Actions — xl and up */}
        <div className="hidden xl:flex items-center gap-2.5 shrink-0">
          <Link href={hrefFor('names')} title={t({ ar: 'بحث', en: 'Search' })}
            className="w-[38px] h-[38px] rounded-full bg-transparent border border-secondary/50 text-secondary-dark cursor-pointer grid place-items-center text-base hover:bg-secondary/10 transition-colors">
            &#x2315;
          </Link>
          <LangToggle />
        </div>

        {/* Hamburger — mobile only */}
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label={t({ ar: 'القائمة', en: 'Menu' })}
          className="flex lg:hidden flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-lg bg-secondary border-none cursor-pointer">
          <span className="block w-5 h-0.5 bg-primary-dark rounded-sm transition-all duration-300"
            style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span className="block w-5 h-0.5 bg-primary-dark rounded-sm transition-opacity duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-0.5 bg-primary-dark rounded-sm transition-all duration-300"
            style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className="lg:hidden overflow-hidden transition-all duration-300 bg-cream-light"
        style={{
          maxHeight: menuOpen ? 560 : 0,
          opacity: menuOpen ? 1 : 0,
          borderTop: menuOpen ? '1px solid rgba(193,154,69,0.3)' : 'none',
        }}>
        <nav className="flex flex-col px-4 py-4 gap-2">
          {navItems.map(({ view, label, highlight }) => {
            const isActive = current === view;
            return (
              <Link key={view} href={hrefFor(view)} onClick={() => setMenuOpen(false)}
                className={`border-none cursor-pointer font-naskh font-semibold text-[15px] py-3 px-5 rounded-lg text-start transition-colors duration-200 ${
                  isActive
                    ? 'bg-primary text-secondary-light'
                    : highlight
                      ? 'bg-gradient-to-br from-secondary-light to-secondary-dark text-primary-dark'
                      : 'bg-secondary text-primary-dark hover:bg-secondary-light'
                }`}>
                {t(label)}
              </Link>
            );
          })}
          {/* Mobile actions row */}
          <div className="flex items-center gap-3 mt-2 pt-3 border-t border-secondary/30 px-1">
            <Link href={hrefFor('names')} onClick={() => setMenuOpen(false)} title={t({ ar: 'بحث', en: 'Search' })}
              className="w-9 h-9 rounded-full bg-transparent border border-secondary/50 text-secondary-dark cursor-pointer grid place-items-center text-sm">
              &#x2315;
            </Link>
            <LangToggle small />
          </div>
        </nav>
      </div>
    </header>
  );
}
