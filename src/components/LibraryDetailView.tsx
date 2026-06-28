'use client';

import { LibraryItem } from '@/data/library';

interface LibraryDetailViewProps {
  item: LibraryItem;
  onGoBack: () => void;
}

export default function LibraryDetailView({ item, onGoBack }: LibraryDetailViewProps) {
  return (
    <main>
      {/* Hero */}
      <section style={{
        position: 'relative',
        background: 'radial-gradient(120% 120% at 50% -10%, #0d4634, #082a1f 55%, #061d16)',
        color: '#f3ead4', padding: '30px 28px 56px', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.08,
          backgroundImage: 'repeating-linear-gradient(45deg, #c9a24b 0 1px, transparent 1px 24px), repeating-linear-gradient(-45deg, #c9a24b 0 1px, transparent 1px 24px)'
        }} />
        <div style={{ position: 'relative', maxWidth: 980, margin: '0 auto' }}>
          <button onClick={onGoBack} style={{
            background: '#ffffff12', border: '1px solid #c9a24b55', color: '#e7cd86',
            borderRadius: 10, padding: '8px 16px', fontFamily: "'Noto Naskh Arabic', serif",
            fontSize: 14, cursor: 'pointer'
          }}>&rarr; المكتبة المعرفية</button>

          <div style={{ display: 'flex', gap: 22, alignItems: 'center', marginTop: 20, flexWrap: 'wrap' }}>
            <div style={{
              flex: 'none', width: 90, height: 90, borderRadius: 22,
              background: 'linear-gradient(135deg, #0f5540, #062017)',
              border: '1px solid #c9a24b66', display: 'grid', placeItems: 'center',
              fontSize: 40, color: '#e7cd86'
            }}>{item.icon}</div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <span style={{
                display: 'inline-block', background: '#062017cc', color: '#c9a24b',
                fontFamily: 'monospace', fontSize: 12, padding: '4px 12px', borderRadius: 8, marginBottom: 8
              }}>{item.kind}</span>
              <div className="taj-libdetail-title" style={{ fontFamily: "'Amiri', serif", fontSize: 38, color: '#f4e9c8', lineHeight: 1.2 }}>{item.ar}</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 16,
                letterSpacing: 2, color: '#c9a24b', marginTop: 2
              }}>{item.en}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="taj-libdetail-content" style={{
        maxWidth: 980, margin: '0 auto', padding: '40px 28px 80px',
        display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 26, alignItems: 'start'
      }}>
        <div>
          <p style={{ fontSize: 18, lineHeight: 2, color: '#3a473f', margin: '0 0 26px' }}>{item.about}</p>
          <h3 style={{ fontFamily: "'Amiri', serif", fontSize: 24, color: '#0d4634', margin: '0 0 16px' }}>المحتوى</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {item.entries.map((ent, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 16,
                background: '#fffdf7', border: '1px solid #e6d8b4', borderRadius: 14,
                padding: '16px 18px', cursor: 'pointer', transition: 'all .16s'
              }}>
                <div style={{
                  flex: 'none', width: 40, height: 40, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0d4634, #082a1f)',
                  display: 'grid', placeItems: 'center', color: '#e7cd86', fontSize: 16
                }}>{item.entryIcon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#23302a' }}>{ent.t}</div>
                </div>
                <div style={{ flex: 'none', fontFamily: "'Cormorant Garamond', serif", fontSize: 14, color: '#a87b2c' }}>{ent.meta}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside style={{
          background: 'linear-gradient(160deg, #0d4634, #082a1f)',
          border: '1px solid #c9a24b44', borderRadius: 20, padding: 28,
          color: '#f3ead4', position: 'sticky', top: 90
        }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 13,
            letterSpacing: 3, textTransform: 'uppercase', color: '#c9a24b'
          }}>About this collection</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 18 }}>
            {[
              { val: item.stat1, label: 'المحتوى' },
              { val: item.stat2, label: 'الإتاحة' },
              { val: item.stat3, label: 'التحديث' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: '#e7cd86' }}>{s.val}</div>
                <div style={{ fontSize: 13, color: '#9fb0a4' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <button style={{
            width: '100%', marginTop: 24,
            background: 'linear-gradient(135deg, #e7cd86, #c9a24b)',
            color: '#062017', border: 'none', borderRadius: 12, padding: 13,
            fontFamily: "'Noto Naskh Arabic', serif", fontSize: 15, fontWeight: 700, cursor: 'pointer'
          }}>ابدأ الآن</button>
        </aside>
      </section>
    </main>
  );
}
