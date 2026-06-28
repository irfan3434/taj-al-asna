'use client';

import React, { useState } from 'react';
import { NameData, QuranRef } from '@/data/names';

interface DetailViewProps {
  name: NameData;
  quranRef?: QuranRef;
  names: NameData[];
  onOpenName: (index: number) => void;
  onGoBack: () => void;
}

export default function DetailView({
  name,
  quranRef,
  names,
  onOpenName,
  onGoBack,
}: DetailViewProps) {
  const [playing, setPlaying] = useState(false);

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
      {/* ─── Hero Banner ─── */}
      <div
        style={{
          position: 'relative',
          background:
            'radial-gradient(120% 120% at 50% -10%, #0d4634, #082a1f 55%, #061d16)',
          padding: '30px 28px',
          overflow: 'hidden',
        }}
      >
        {/* Crosshatch overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.08,
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, #c9a24b 10px, #c9a24b 11px), repeating-linear-gradient(-45deg, transparent, transparent 10px, #c9a24b 10px, #c9a24b 11px)',
            pointerEvents: 'none',
          }}
        />

        {/* Back button */}
        <button
          onClick={onGoBack}
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'none',
            border: 'none',
            color: '#c9a24b',
            fontFamily: "'Amiri', serif",
            fontSize: 16,
            cursor: 'pointer',
            marginBottom: 12,
            padding: 0,
          }}
        >
          <span style={{ fontSize: 18 }}>&rarr;</span>
          <span>كل الأسماء</span>
        </button>

        {/* Center content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
          }}
        >
          {/* Number circle */}
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: '50%',
              border: '1px solid #c9a24b88',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 16,
              color: '#c9a24b',
              margin: '0 auto 50px',
            }}
          >
            {name.n}
          </div>

          {/* Arabic name */}
          <div
            className="taj-detail-name"
            style={{
              fontFamily: "'Amiri', serif",
              fontSize: 96,
              color: '#f4e9c8',
              lineHeight: 1.2,
              textShadow: '0 4px 24px rgba(0,0,0,0.4)',
              marginBottom: 12,
            }}
          >
            {name.ar}
          </div>

          {/* Transliteration */}
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 26,
              color: '#c9a24b',
              marginBottom: 8,
            }}
          >
            {name.tr}
          </div>

          {/* English meaning */}
          <div
            style={{
              fontSize: 18,
              color: '#d8e0d3',
              marginBottom: 28,
            }}
          >
            {name.en}
          </div>

          {/* Play button */}
          <button
            onClick={() => setPlaying(!playing)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'linear-gradient(135deg, #c9a24b, #a87b2c)',
              border: 'none',
              borderRadius: 9999,
              padding: '10px 24px',
              cursor: 'pointer',
              color: '#fff',
              fontFamily: "'Amiri', serif",
              fontSize: 15,
              marginBottom: 32,
            }}
          >
            <span>استمع للتلاوة</span>
            {/* Equalizer bars */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'flex-end',
                gap: 2,
                height: 16,
              }}
            >
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 18,
            }}
          >
            <button
              onClick={() => onOpenName(prevIndex)}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid #c9a24b55',
                background: 'rgba(255,255,255,0.06)',
                color: '#c9a24b',
                fontSize: 22,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              &lsaquo;
            </button>
            <button
              onClick={() => onOpenName(nextIndex)}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid #c9a24b55',
                background: 'rgba(255,255,255,0.06)',
                color: '#c9a24b',
                fontSize: 22,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              &rsaquo;
            </button>
          </div>
        </div>
      </div>

      {/* ─── Content Cards ─── */}
      <div
        className="taj-detail-cards"
        style={{
          maxWidth: 920,
          margin: '-34px auto 0',
          padding: '0 20px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 20,
        }}
      >
        {/* Meaning Card */}
        <div
          style={{
            gridColumn: '1 / -1',
            backgroundColor: '#fffdf7',
            border: '1px solid #e6d8b4',
            borderRadius: 18,
            padding: '32px 34px',
            marginTop: '40px',
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12,
              textTransform: 'uppercase',
              letterSpacing: 2,
              color: '#a87b2c',
              marginBottom: 8,
            }}
          >
            Meaning
          </div>
          <h2
            style={{
              fontFamily: "'Amiri', serif",
              fontSize: 26,
              color: '#0d4634',
              marginBottom: 16,
            }}
          >
            المعنى والدلالة
          </h2>
          <p
            style={{
              fontSize: 18,
              lineHeight: 2,
              color: '#23302a',
              fontFamily: "'Amiri', serif",
            }}
          >
            {name.da}
          </p>
        </div>

        {/* Quran Card */}
        <div
          style={{
            gridColumn: '1 / -1',
            background:
              'radial-gradient(120% 120% at 50% -10%, #0d4634, #082a1f 55%, #061d16)',
            borderRadius: 18,
            padding: '32px 34px',
            color: '#f3ead4',
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12,
              textTransform: 'uppercase',
              letterSpacing: 2,
              color: '#c9a24b',
              marginBottom: 8,
            }}
          >
            In the Qur&apos;an
          </div>
          <h2
            style={{
              fontFamily: "'Amiri', serif",
              fontSize: 26,
              color: '#f4e9c8',
              marginBottom: 20,
            }}
          >
            شواهد من القرآن الكريم
          </h2>

          {quranRef?.phrase && (
            <div
              style={{
                fontFamily: "'Amiri', serif",
                fontSize: 27,
                lineHeight: 2,
                borderRight: '3px solid #c9a24b',
                paddingRight: 20,
                marginBottom: 20,
                color: '#f4e9c8',
              }}
            >
              {quranRef.phrase}
            </div>
          )}

          {quranRef?.cites && quranRef.cites.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 10,
                marginBottom: quranRef.note ? 16 : 0,
              }}
            >
              {quranRef.cites.map((cite, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'rgba(201,162,75,0.15)',
                    border: '1px solid #c9a24b44',
                    borderRadius: 9999,
                    padding: '6px 16px',
                    fontSize: 14,
                    color: '#e7cd86',
                    fontFamily: "'Amiri', serif",
                  }}
                >
                  {cite.ar} &mdash; {cite.en}
                </span>
              ))}
            </div>
          )}

          {quranRef?.note && (
            <p
              style={{
                fontSize: 15,
                color: '#9fb0a4',
                lineHeight: 1.8,
                fontFamily: "'Amiri', serif",
              }}
            >
              {quranRef.note}
            </p>
          )}
        </div>

        {/* Reflection Card */}
        <div
          style={{
            gridColumn: '1 / -1',
            backgroundColor: '#fffdf7',
            border: '1px solid #e6d8b4',
            borderRadius: 18,
            padding: '32px 34px',
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12,
              textTransform: 'uppercase',
              letterSpacing: 2,
              color: '#a87b2c',
              marginBottom: 8,
            }}
          >
            Reflection
          </div>
          <h2
            style={{
              fontFamily: "'Amiri', serif",
              fontSize: 26,
              color: '#0d4634',
              marginBottom: 16,
            }}
          >
            وقفة تأمل
          </h2>
          <p
            style={{
              fontSize: 18,
              lineHeight: 2,
              color: '#23302a',
              fontFamily: "'Amiri', serif",
            }}
          >
            {`معرفةُ الله باسمه «${strippedName}» تملأ القلب يقيناً وطمأنينة، وتدعو العبد إلى التخلّق بأثر هذا الاسم في حياته وسلوكه.`}
          </p>
        </div>

        {/* Supplication Card */}
        <div
          style={{
            gridColumn: '1 / -1',
            backgroundColor: '#f3ecd8',
            border: '2px dashed #c9a24b',
            borderRadius: 18,
            padding: '36px 34px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12,
              textTransform: 'uppercase',
              letterSpacing: 2,
              color: '#a87b2c',
              marginBottom: 12,
            }}
          >
            Supplication
          </div>
          <div
            className="taj-supplication"
            style={{
              fontFamily: "'Amiri', serif",
              fontSize: 34,
              color: '#0d4634',
              lineHeight: 1.6,
            }}
          >
            {`يَا ${name.ar}`}
          </div>
        </div>

        {/* Related Names Card */}
        <div
          style={{
            gridColumn: '1 / -1',
          }}
        >
          <h2
            style={{
              fontFamily: "'Amiri', serif",
              fontSize: 26,
              color: '#0d4634',
              marginBottom: 18,
              textAlign: 'center',
            }}
          >
            أسماء ذات صلة
          </h2>
          <div
            className="taj-related-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 14,
            }}
          >
            {relatedIndices.map((idx) => {
              const related = names[idx];
              if (!related) return null;
              return (
                <div
                  key={related.n}
                  onClick={() => onOpenName(idx)}
                  style={{
                    backgroundColor: '#fffdf7',
                    border: '1px solid #e6d8b4',
                    borderRadius: 14,
                    padding: '20px 12px 16px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition:
                      'transform 0.25s ease, box-shadow 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      'translateY(-4px)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      '0 12px 28px #0d463418';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      'none';
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 11,
                      color: '#a87b2c',
                      marginBottom: 6,
                    }}
                  >
                    {related.n}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Amiri', serif",
                      fontSize: 32,
                      color: '#0d4634',
                      lineHeight: 1.3,
                      marginBottom: 6,
                    }}
                  >
                    {related.ar}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 13,
                      fontWeight: 600,
                      color: '#a87b2c',
                      marginBottom: 3,
                    }}
                  >
                    {related.tr}
                  </div>
                  <div style={{ fontSize: 12, color: '#5d6b62' }}>
                    {related.en}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
