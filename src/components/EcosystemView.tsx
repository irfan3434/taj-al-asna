'use client';

import { useState } from 'react';
import { ecoData, ecoPositions } from '@/data/ecosystem';

export default function EcosystemView() {
  const [selected, setSelected] = useState(0);

  const principles = [
    { ar: 'حوكمة شرعية ورقابية', en: 'Shariah Governance', icon: '⚖' },
    { ar: 'إدارة مهنية مسؤولة', en: 'Professional Mgmt', icon: '❖' },
    { ar: 'تقنية ذكية وابتكار', en: 'Smart Technology', icon: '✦' },
    { ar: 'مجتمع عالمي مساهم', en: 'Global Community', icon: '❉' },
    { ar: 'رسالة بقلبٍ إنساني', en: 'Human Mission', icon: '♥' },
  ];

  const targets = [
    { num: '99.9%', ar: 'جاهزية المنصة' },
    { num: '100M+', ar: 'مستفيد عالمي' },
    { num: '200+', ar: 'دولة مستهدفة' },
    { num: '10+', ar: 'لغة رئيسية' },
    { num: '$1B+', ar: 'أصول وقفية' },
  ];

  const sel = ecoData[selected];

  return (
    <main>
      {/* Orbital diagram */}
      <section style={{
        background: 'radial-gradient(120% 120% at 50% 0%, #0d4634, #082a1f 55%, #061d16)',
        color: '#f3ead4', padding: '60px 28px 70px', textAlign: 'center'
      }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 14,
          letterSpacing: 4, textTransform: 'uppercase', color: '#c9a24b'
        }}>Global Knowledge Ecosystem</div>
        <h1 className="taj-eco-title" style={{ fontFamily: "'Amiri', serif", fontSize: 44, color: '#f4e9c8', margin: '8px 0 0' }}>
          منظومة المعرفة العالمية المتكاملة
        </h1>
        <p style={{ maxWidth: 640, margin: '14px auto 0', color: '#d8e0d3', fontSize: 17, lineHeight: 1.9 }}>
          منظومة واحدة تجمع المعرفة والأثر والاستدامة — اضغط على أي طبقة لاستكشاف دورها.
        </p>

        <div className="taj-orbital" style={{ position: 'relative', width: 480, height: 480, margin: '46px auto 0' }}>
          {/* Center */}
          <div style={{
            position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
            width: 200, height: 200, borderRadius: '50%',
            background: 'linear-gradient(160deg, #0f5540, #062017)',
            border: '2px solid #c9a24b', display: 'grid', placeItems: 'center',
            textAlign: 'center', padding: 20, boxShadow: '0 0 50px #c9a24b33'
          }}>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 11, letterSpacing: 2, color: '#c9a24b' }}>{sel.tr}</div>
              <div style={{ fontFamily: "'Amiri', serif", fontSize: 22, color: '#f4e9c8', margin: '4px 0 6px', lineHeight: 1.3 }}>{sel.ar}</div>
              <div style={{ fontSize: 12, color: '#cdd8cd', lineHeight: 1.6 }}>{sel.desc}</div>
            </div>
          </div>

          {/* Orbit ring */}
          <div style={{
            position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
            width: 430, height: 430, border: '1px dashed #c9a24b44', borderRadius: '50%'
          }} />

          {/* Nodes */}
          {ecoData.map((node, i) => {
            const active = i === selected;
            const pos = ecoPositions[i];
            return (
              <div key={i} onClick={() => setSelected(i)} style={{
                position: 'absolute', left: pos.l, top: pos.t, cursor: 'pointer'
              }}>
                <div style={{
                  position: 'relative', width: 74, height: 74, borderRadius: '50%',
                  background: active ? 'linear-gradient(135deg, #e7cd86, #a87b2c)' : '#0c3527',
                  border: active ? '2px solid #f4e9c8' : '1px solid #c9a24b66',
                  display: 'grid', placeItems: 'center', transition: 'all .18s'
                }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif", fontSize: 13,
                    color: active ? '#062017' : '#c9a24b'
                  }}>{i + 1}</div>
                  <div style={{
                    position: 'absolute', bottom: -22, whiteSpace: 'nowrap',
                    fontSize: 12, color: '#e7cd86'
                  }}>{node.ar}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Principles */}
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 28px 30px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Amiri', serif", fontSize: 34, color: '#0d4634', margin: '0 0 30px' }}>مبادئنا الموجِّهة</h2>
        <div className="taj-principles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
          {principles.map((pr, i) => (
            <div key={i} style={{
              background: '#fffdf7', border: '1px solid #e6d8b4', borderRadius: 16, padding: '24px 16px'
            }}>
              <div style={{ fontSize: 28, color: '#a87b2c', marginBottom: 10 }}>{pr.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#0d4634', lineHeight: 1.5 }}>{pr.ar}</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 12,
                letterSpacing: 1, color: '#a87b2c', marginTop: 6
              }}>{pr.en}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Targets */}
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '40px 28px 80px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0d4634, #082a1f)',
          borderRadius: 24, padding: 44, border: '1px solid #c9a24b44'
        }}>
          <h2 style={{
            fontFamily: "'Amiri', serif", fontSize: 30, color: '#f4e9c8',
            textAlign: 'center', margin: '0 0 30px'
          }}>مستهدفاتنا التقنية والعالمية</h2>
          <div className="taj-targets-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 20, textAlign: 'center', color: '#f3ead4'
          }}>
            {targets.map((t, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 38,
                  fontWeight: 700, color: '#e7cd86'
                }}>{t.num}</div>
                <div style={{ fontSize: 14, color: '#cdd8cd', marginTop: 4 }}>{t.ar}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
