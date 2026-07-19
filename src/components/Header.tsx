'use client';

import Image from 'next/image';
import { useState } from 'react';

type View = 'home' | 'names' | 'library' | 'assistant' | 'eco' | 'about' | 'waqf';

interface HeaderProps {
  onNavigate: (view: View) => void;
}

const navItems: { view: View; label: string }[] = [
  { view: 'home', label: 'الرئيسية' },
  { view: 'names', label: 'الأسماء الحسنى' },
  { view: 'library', label: 'المكتبة' },
  { view: 'assistant', label: 'المساعد الذكي' },
  { view: 'eco', label: 'المنظومة' },
  { view: 'waqf', label: 'الوقف والأثر' },
  { view: 'about', label: 'عن المنصة' },
];

export default function Header({ onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNav(view: View) {
    onNavigate(view);
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-[10px] border-b border-secondary/30"
      style={{ background: 'linear-gradient(180deg, #06201788, #062017)' }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-7 py-2.5 flex items-center gap-4 md:gap-6">
        {/* Logo */}
        <div onClick={() => handleNav('home')} className="flex items-center gap-2 md:gap-3 cursor-pointer shrink-0">
          <Image src="/logo.webp" alt="شعار التاج الأسنى" width={70} height={63}
            className="w-[44px] h-[44px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] object-contain" />
          <div className="flex flex-col items-center gap-1.5 md:gap-2 justify-center leading-tight">
            <div className="font-amiri text-base md:text-lg font-bold text-secondary-light">التاج الأسنى</div>
            <div className="font-cormorant text-[10px] md:text-[11px] tracking-[2px] md:tracking-[3px] text-secondary uppercase">Al Taj Al Asna</div>
          </div>
        </div>

        {/* Nav — hidden on mobile */}
        <nav className="hidden lg:flex gap-1 flex-1 justify-center">
          {navItems.map(({ view, label }) => (
            <button key={view} onClick={() => handleNav(view)}
              className="group relative bg-transparent border-none cursor-pointer font-naskh text-base xl:text-lg text-text-light px-2.5 xl:px-3.5 py-2 whitespace-nowrap hover:text-secondary-light transition-colors duration-200">
              {label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-secondary transition-all duration-300 group-hover:w-2/3" />
            </button>
          ))}
        </nav>

        {/* Spacer on mobile */}
        <div className="flex-1 lg:hidden" />

        {/* Actions — hidden on mobile */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <button onClick={() => handleNav('names')} title="بحث"
            className="w-[38px] h-[38px] rounded-full bg-white/5 border border-secondary/30 text-secondary-light cursor-pointer grid place-items-center text-base hover:bg-white/10 transition-colors">
            &#x2315;
          </button>
          <div className="flex items-center border border-secondary/30 rounded-[20px] overflow-hidden font-cormorant font-semibold text-[13px]">
            <span className="bg-secondary text-primary-dark px-3.5 py-1.5">ع</span>
            <span className="text-secondary px-2.5 py-1.5">EN</span>
          </div>
        </div>

        {/* Hamburger — mobile only */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="flex lg:hidden flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-lg bg-white/5 border border-secondary/30 cursor-pointer">
          <span className="block w-5 h-0.5 bg-secondary-light rounded-sm transition-all duration-300"
            style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span className="block w-5 h-0.5 bg-secondary-light rounded-sm transition-opacity duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-0.5 bg-secondary-light rounded-sm transition-all duration-300"
            style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? 400 : 0,
          opacity: menuOpen ? 1 : 0,
          background: '#062017ee',
          borderTop: menuOpen ? '1px solid rgba(193,154,69,0.2)' : 'none',
        }}>
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navItems.map(({ view, label }) => (
            <button key={view} onClick={() => handleNav(view)}
              className="bg-transparent border-none cursor-pointer font-naskh text-lg text-text-light py-3 px-4 rounded-xl text-right hover:bg-white/5 transition-colors">
              {label}
            </button>
          ))}
          {/* Mobile actions row */}
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-secondary/20 pr-4">
            <button onClick={() => handleNav('names')} title="بحث"
              className="w-9 h-9 rounded-full bg-white/5 border border-secondary/30 text-secondary-light cursor-pointer grid place-items-center text-sm">
              &#x2315;
            </button>
            <div className="flex items-center border border-secondary/30 rounded-[20px] overflow-hidden font-cormorant font-semibold text-xs">
              <span className="bg-secondary text-primary-dark px-3 py-[5px]">ع</span>
              <span className="text-secondary px-2.5 py-[5px]">EN</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
