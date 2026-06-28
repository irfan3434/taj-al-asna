'use client';

import React, { useState, useEffect, useRef } from 'react';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onOpenName: (index: number) => void;
  names: Array<{ n: number; ar: string; tr: string; en: string; da: string }>;
}

const FEATURED_HERO_INDICES = [0, 1, 55, 46, 92];
const FEATURED_NAMES_INDICES = [0, 1, 2, 3, 4, 7, 16, 18];

const COUNTERS = [
  { target: 99, label: 'اسمًا من أسماء الله', enLabel: 'Divine Names', suffix: '' },
  { target: 100, label: 'مسلم حول العالم', enLabel: 'Muslims Worldwide', suffix: 'M+' },
  { target: 200, label: 'مرجع ومصدر', enLabel: 'References & Sources', suffix: '+' },
  { target: 10, label: 'لغة مدعومة', enLabel: 'Supported Languages', suffix: '+' },
];

const PATHWAYS = [
  {
    icon: '☆',
    arTitle: 'تعلّم وتأمّل',
    enTitle: 'Learn & Reflect',
    description: 'تعرّف على أسماء الله الحسنى، معانيها العميقة، وكيف تتجلّى في حياتنا اليومية.',
    view: 'names',
  },
  {
    icon: '✦',
    arTitle: 'اسأل المساعد',
    enTitle: 'Ask the Assistant',
    description: 'اطرح أسئلتك حول أسماء الله الحسنى واحصل على إجابات مدعومة بالمصادر الموثوقة.',
    view: 'assistant',
  },
  {
    icon: '❖',
    arTitle: 'استكشف المنظومة',
    enTitle: 'The Ecosystem',
    description: 'اكتشف الروابط والعلاقات بين أسماء الله الحسنى في منظومة متكاملة ومترابطة.',
    view: 'ecosystem',
  },
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
@keyframes float0 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
@keyframes float1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
@keyframes float2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
@keyframes float3 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
@keyframes float4 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
`;

const floatPositions: React.CSSProperties[] = [
  { position: 'absolute' as const, top: '15%', left: '8%', animation: 'float0 4s ease-in-out infinite' },
  { position: 'absolute' as const, top: '15%', right: '8%', animation: 'float1 5s ease-in-out infinite 0.5s' },
  { position: 'absolute' as const, bottom: '20%', left: '8%', animation: 'float2 4.5s ease-in-out infinite 1s' },
  { position: 'absolute' as const, bottom: '20%', right: '8%', animation: 'float3 3.5s ease-in-out infinite 0.3s' },
  { position: 'absolute' as const, top: '20%', left: '50%', transform: 'translateX(-50%)', },
];

export default function HomeView({ onNavigate, onOpenName, names }: HomeViewProps) {
  const [query, setQuery] = useState('');
  const [hoveredHeroCard, setHoveredHeroCard] = useState<number | null>(null);
  const [hoveredPathway, setHoveredPathway] = useState<number | null>(null);
  const [hoveredFeaturedCard, setHoveredFeaturedCard] = useState<number | null>(null);
  const [hoveredCta, setHoveredCta] = useState<number | null>(null);

  const counters = COUNTERS.map((c) => useAnimatedCounter(c.target));

  const handleSearch = () => {
    onNavigate('names');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: spinKeyframes }} />

      {/* Hero Section */}
      <section
        className="taj-hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          background: 'radial-gradient(ellipse at center, #0d4634 0%, #062017 70%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 20px',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Crosshatch Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(201,162,75,0.03) 10px, rgba(201,162,75,0.03) 11px), repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(201,162,75,0.03) 10px, rgba(201,162,75,0.03) 11px)',
            pointerEvents: 'none',
          }}
        />

        {/* Spinning Circle */}
        <div
          className="taj-spinner"
          style={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            border: '2px solid rgba(201,162,75,0.3)',
            borderTopColor: '#c9a24b',
            animation: 'spin 8s linear infinite',
            marginBottom: 40,
          }}
        />

        {/* Arabic Title */}
        <h1
          className="taj-hero-title"
          style={{
            fontFamily: "'Amiri', serif",
            fontSize: 76,
            color: '#c9a24b',
            margin: '0 0 16px 0',
            lineHeight: 1.2,
            direction: 'rtl',
          }}
        >
          أسماءُ اللهِ الحُسنى
        </h1>

        {/* English Subtitle */}
        <h2
          className="taj-hero-subtitle"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 24,
            color: '#e7cd86',
            margin: '0 0 24px 0',
            fontWeight: 400,
            letterSpacing: 2,
          }}
        >
          The 99 Beautiful Names of Allah
        </h2>

        {/* Description */}
        <p
          className="taj-hero-description"
          style={{
            fontFamily: "'Noto Naskh Arabic', serif",
            fontSize: 18,
            color: '#f3ead4',
            maxWidth: 500,
            margin: '0 auto 30px auto',
            lineHeight: 1.8,
            direction: 'rtl',
            opacity: 0.85,
          }}
        >
          اكتشف أسماء الله الحسنى التسعة والتسعين، تعرّف على معانيها العميقة، وتأمّل في
          جمالها وكمالها. رحلة إيمانية تقرّبك إلى الله.
        </p>

        {/* Search Bar */}
        <div className="taj-hero-search-container" style={{ display: 'flex', justifyContent: 'center', width: '100%', maxWidth : 500, alignItems: 'center', flexDirection: 'row', gap: 12, marginBottom: 40 }}>
        <div
         className="taj-hero-search-bar"
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 50,
            border: '1px solid rgba(201,162,75,0.3)',
            padding: '6px 12px 6px 12px',
            maxWidth: 500,
            width: '100%',
          }}
        >
          <input
            className="taj-hero-search-input"
            type="text"
            placeholder="ابحث عن اسم..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#f3ead4',
              fontSize: 16,
              fontFamily: "'Noto Naskh Arabic', serif",
              direction: 'rtl',
            }}
          />
          
        </div>
        <button
            className="taj-hero-search-button"
            onClick={handleSearch}
            style={{
              background: '#c9a24b',
              color: '#062017',
              border: 'none',
              borderRadius: 50,
              padding: '7px 30px',
              fontSize: 15,
              fontFamily: "'Noto Naskh Arabic', serif",
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            بحث
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="taj-cta-row" style={{ display: 'flex', gap: 16, marginBottom: 60 }}>
          <button
            onMouseEnter={() => setHoveredCta(0)}
            onMouseLeave={() => setHoveredCta(null)}
            onClick={() => onNavigate('names')}
            style={{
              background: hoveredCta === 0 ? '#e7cd86' : '#c9a24b',
              color: '#062017',
              border: 'none',
              borderRadius: 50,
              padding: '14px 36px',
              fontSize: 16,
              fontFamily: "'Noto Naskh Arabic', serif",
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'background 0.3s',
            }}
          >
            استكشف الأسماء
          </button>
          <button
            onMouseEnter={() => setHoveredCta(1)}
            onMouseLeave={() => setHoveredCta(null)}
            onClick={() => onNavigate('assistant')}
            style={{
              background: 'transparent',
              color: hoveredCta === 1 ? '#e7cd86' : '#c9a24b',
              border: `2px solid ${hoveredCta === 1 ? '#e7cd86' : '#c9a24b'}`,
              borderRadius: 50,
              padding: '14px 36px',
              fontSize: 16,
              fontFamily: "'Noto Naskh Arabic', serif",
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.3s',
            }}
          >
            اسأل المساعد
          </button>
        </div>

        {/* Floating Featured Name Cards */}
        {FEATURED_HERO_INDICES.map((nameIdx, i) => {
          const name = names[nameIdx];
          if (!name) return null;
          return (
            <div
              key={nameIdx}
              className="taj-float-card"
              onClick={() => onOpenName(nameIdx)}
              onMouseEnter={() => setHoveredHeroCard(i)}
              onMouseLeave={() => setHoveredHeroCard(null)}
              style={{
                ...floatPositions[i],
                background: hoveredHeroCard === i
                  ? 'rgba(201,162,75,0.18)'
                  : 'rgba(201,162,75,0.08)',
                border: '1px solid rgba(201,162,75,0.25)',
                borderRadius: 16,
                padding: '16px 24px',
                cursor: 'pointer',
                textAlign: 'center',
                backdropFilter: 'blur(8px)',
                transition: 'background 0.3s, transform 0.3s',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  fontFamily: "'Amiri', serif",
                  fontSize: 28,
                  color: '#c9a24b',
                  marginBottom: 4,
                }}
              >
                {name.ar}
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 13,
                  color: '#e7cd86',
                  opacity: 0.8,
                }}
              >
                {name.en}
              </div>
            </div>
          );
        })}
      </section>

      {/* Counters Section */}
      <section
        style={{
          background: '#062017',
          padding: '80px 20px',
        }}
      >
        <div
          className="taj-counters-grid"
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
            textAlign: 'center',
          }}
        >
          {COUNTERS.map((counter, i) => (
            <div key={i} ref={counters[i].ref}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 48,
                  fontWeight: 700,
                  color: '#c9a24b',
                  marginBottom: 8,
                }}
              >
                {counters[i].value}
                {counter.suffix}
              </div>
              <div
                style={{
                  fontFamily: "'Noto Naskh Arabic', serif",
                  fontSize: 16,
                  color: '#f3ead4',
                  marginBottom: 4,
                  direction: 'rtl',
                }}
              >
                {counter.label}
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 13,
                  color: '#e7cd86',
                  opacity: 0.7,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 1,
                }}
              >
                {counter.enLabel}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pathways Section */}
      <section
        style={{
          background: '#f4ecda',
          padding: '80px 20px',
        }}
      >
        <div
          className="taj-pathways-grid"
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32,
          }}
        >
          {PATHWAYS.map((pathway, i) => (
            <div
              key={i}
              onClick={() => onNavigate(pathway.view)}
              onMouseEnter={() => setHoveredPathway(i)}
              onMouseLeave={() => setHoveredPathway(null)}
              style={{
                background: '#fffdf7',
                borderRadius: 20,
                padding: '48px 32px',
                textAlign: 'center',
                cursor: 'pointer',
                border: '1px solid #e6d8b4',
                transition: 'transform 0.3s, box-shadow 0.3s',
                transform: hoveredPathway === i ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hoveredPathway === i
                  ? '0 12px 40px rgba(6,32,23,0.12)'
                  : '0 4px 16px rgba(6,32,23,0.05)',
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #062017, #0d4634)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px auto',
                  fontSize: 28,
                  color: '#c9a24b',
                }}
              >
                {pathway.icon}
              </div>

              {/* Arabic Title */}
              <h3
                style={{
                  fontFamily: "'Amiri', serif",
                  fontSize: 26,
                  color: '#062017',
                  margin: '0 0 8px 0',
                  direction: 'rtl',
                }}
              >
                {pathway.arTitle}
              </h3>

              {/* English Subtitle */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 14,
                  color: '#a87b2c',
                  marginBottom: 16,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 1.5,
                }}
              >
                {pathway.enTitle}
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Noto Naskh Arabic', serif",
                  fontSize: 15,
                  color: '#082a1f',
                  lineHeight: 1.8,
                  margin: 0,
                  direction: 'rtl',
                  opacity: 0.8,
                }}
              >
                {pathway.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Names Section */}
      <section
        style={{
          background: '#082a1f',
          padding: '80px 20px',
        }}
      >
        {/* Header */}
        <div
          className="taj-featured-header"
          style={{
            maxWidth: 1100,
            margin: '0 auto 40px auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            direction: 'rtl',
          }}
        >
          <h2
            style={{
              fontFamily: "'Amiri', serif",
              fontSize: 36,
              color: '#c9a24b',
              margin: 0,
            }}
          >
            أسماء مختارة
          </h2>
          <button
            onClick={() => onNavigate('names')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#e7cd86',
              fontFamily: "'Noto Naskh Arabic', serif",
              fontSize: 15,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            عرض الكل ←
          </button>
        </div>

        {/* Names Grid */}
        <div
          className="taj-featured-grid"
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
          }}
        >
          {FEATURED_NAMES_INDICES.map((nameIdx, i) => {
            const name = names[nameIdx];
            if (!name) return null;
            return (
              <div
                key={nameIdx}
                onClick={() => onOpenName(nameIdx)}
                onMouseEnter={() => setHoveredFeaturedCard(i)}
                onMouseLeave={() => setHoveredFeaturedCard(null)}
                style={{
                  background: 'linear-gradient(145deg, #0d4634, #062017)',
                  borderRadius: 20,
                  padding: '32px 24px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  border: `1px solid ${hoveredFeaturedCard === i ? '#c9a24b' : 'rgba(201,162,75,0.2)'}`,
                  transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
                  transform: hoveredFeaturedCard === i ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: hoveredFeaturedCard === i
                    ? '0 8px 32px rgba(201,162,75,0.15)'
                    : 'none',
                }}
              >
                {/* Number */}
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 18,
                    color: '#a87b2c',
                    marginBottom: 12,
                    letterSpacing: 1,
                  }}
                >
                  {name.n}
                </div>

                {/* Arabic Name */}
                <div
                  style={{
                    fontFamily: "'Amiri', serif",
                    fontSize: 44,
                    color: '#c9a24b',
                    marginBottom: 12,
                    lineHeight: 1.2,
                    direction: 'rtl',
                  }}
                >
                  {name.ar}
                </div>

                {/* Transliteration */}
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 15,
                    color: '#e7cd86',
                    marginBottom: 8,
                    fontStyle: 'italic',
                  }}
                >
                  {name.tr}
                </div>

                {/* English Meaning */}
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 13,
                    color: '#f3ead4',
                    opacity: 0.75,
                  }}
                >
                  {name.en}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
