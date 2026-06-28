'use client';

import Image from 'next/image';
import { useState } from 'react';

type View = 'home' | 'names' | 'library' | 'assistant' | 'eco';

interface HeaderProps {
  onNavigate: (view: View) => void;
}

const navItems: { view: View; label: string }[] = [
  { view: 'home', label: 'الرئيسية' },
  { view: 'names', label: 'الأسماء الحسنى' },
  { view: 'library', label: 'المكتبة' },
  { view: 'assistant', label: 'المساعد الذكي' },
  { view: 'eco', label: 'المنظومة' },
];

export default function Header({ onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNav(view: View) {
    onNavigate(view);
    setMenuOpen(false);
  }

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'linear-gradient(180deg, #06201788, #062017)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #c9a24b55'
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '10px 28px',
        display: 'flex', alignItems: 'center', gap: 24
      }}>
        {/* Logo */}
        <div onClick={() => handleNav('home')} style={{
          display: 'flex', alignItems: 'center', gap: 13, cursor: 'pointer', flex: 'none'
        }}>
          <Image src="/logo.webp" alt="Logo" width={70} height={70}
            className="max-lg:w-[50px] max-lg:h-[50px]" />
          <div style={{ lineHeight: 1.05, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
            <div style={{ fontFamily: "'Amiri', serif", fontSize: 18, fontWeight: 700, color: '#e7cd86' }}>التاج الأسنى</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 11, letterSpacing: 3, color: '#c9a24b', textTransform: 'uppercase' as const }}>Al Taj Al Asna</div>
          </div>
        </div>

        {/* Nav — hidden on mobile */}
        <nav style={{ display: 'flex', gap: 6, flex: 1, justifyContent: 'center' }}
          className="max-lg:!hidden">
          {navItems.map(({ view, label }) => (
            <button key={view} onClick={() => handleNav(view)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Noto Naskh Arabic', serif", fontSize: 20,
              color: '#f3ead4', padding: '8px 14px', borderRadius: 8
            }}>
              {label}
            </button>
          ))}
        </nav>

        {/* Spacer on mobile to push actions to the left */}
        <div className="lg:hidden flex-1" />

        {/* Actions — hidden on mobile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 'none' }}
          className="max-lg:!hidden">
          <button onClick={() => handleNav('names')} title="بحث" style={{
            width: 38, height: 38, borderRadius: '50%', background: '#ffffff12',
            border: '1px solid #c9a24b55', color: '#e7cd86', cursor: 'pointer',
            display: 'grid', placeItems: 'center', fontSize: 16
          }}>&#x2315;</button>
          <div style={{
            display: 'flex', alignItems: 'center', border: '1px solid #c9a24b55',
            borderRadius: 20, overflow: 'hidden',
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 13
          }}>
            <span style={{ background: '#c9a24b', color: '#062017', padding: '6px 14px' }}>ع</span>
            <span style={{ color: '#c9a24b', padding: '6px 11px' }}>EN</span>
          </div>
        </div>

        {/* Hamburger — shown only on mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="taj-hamburger"
          style={{
            display: 'none', flexDirection: 'column', justifyContent: 'center',
            alignItems: 'center', gap: 5, width: 40, height: 40, borderRadius: 8,
            background: 'rgba(255,255,255,0.05)', border: '1px solid #c9a24b55', cursor: 'pointer',
          }}>
          <span style={{
            display: 'block', width: 20, height: 2, background: '#e7cd86', borderRadius: 2,
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: 20, height: 2, background: '#e7cd86', borderRadius: 2,
            transition: 'opacity 0.3s',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: 20, height: 2, background: '#e7cd86', borderRadius: 2,
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className="lg:hidden" style={{
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out',
        maxHeight: menuOpen ? 400 : 0,
        opacity: menuOpen ? 1 : 0,
        background: '#062017ee',
        borderTop: menuOpen ? '1px solid #c9a24b33' : 'none',
      }}>
        <nav style={{ display: 'flex', flexDirection: 'column', padding: '16px 24px', gap: 4 }}>
          {navItems.map(({ view, label }) => (
            <button key={view} onClick={() => handleNav(view)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Noto Naskh Arabic', serif", fontSize: 18,
              color: '#f3ead4', padding: '12px 16px', borderRadius: 12,
              textAlign: 'right',
            }}>
              {label}
            </button>
          ))}
          {/* Mobile actions row */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            marginTop: 12, paddingTop: 12,
            borderTop: '1px solid #c9a24b33', paddingRight: 16,
          }}>
            <button onClick={() => handleNav('names')} title="بحث" style={{
              width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
              border: '1px solid #c9a24b55', color: '#e7cd86', cursor: 'pointer',
              display: 'grid', placeItems: 'center', fontSize: 14,
            }}>&#x2315;</button>
            <div style={{
              display: 'flex', alignItems: 'center', border: '1px solid #c9a24b55',
              borderRadius: 20, overflow: 'hidden',
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 12,
            }}>
              <span style={{ background: '#c9a24b', color: '#062017', padding: '5px 12px' }}>ع</span>
              <span style={{ color: '#c9a24b', padding: '5px 10px' }}>EN</span>
            </div>
          </div>
        </nav>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .taj-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
