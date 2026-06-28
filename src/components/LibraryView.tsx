'use client';

import { LibraryItem } from '@/data/library';
import { useState } from 'react';

interface LibraryViewProps {
  items: LibraryItem[];
  onOpenItem: (item: LibraryItem) => void;
}

function LibCard({ item, onOpen }: { item: LibraryItem; onOpen: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: 'pointer', background: '#fffdf7', border: '1px solid ' + (hovered ? '#c9a24b' : '#e6d8b4'),
        borderRadius: 18, overflow: 'hidden', transition: 'all .2s',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? '0 18px 40px #0d463418' : 'none'
      }}
    >
      <div style={{
        height: 128, background: 'repeating-linear-gradient(135deg, #0d4634 0 14px, #0f4f3a 14px 28px)',
        display: 'grid', placeItems: 'center', position: 'relative'
      }}>
        <span style={{ fontSize: 36, color: '#e7cd86' }}>{item.icon}</span>
        <span style={{
          position: 'absolute', bottom: 10, right: 12, background: '#062017cc',
          color: '#c9a24b', fontFamily: 'monospace', fontSize: 11, padding: '3px 8px', borderRadius: 6
        }}>{item.kind}</span>
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: '#0d4634' }}>{item.ar}</div>
        <div style={{ fontSize: 14, color: '#5d6b62', lineHeight: 1.7, marginTop: 6 }}>{item.desc}</div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginTop: 14, fontSize: 13, color: '#a87b2c'
        }}>
          <span>{item.meta}</span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif" }}>&nearr;</span>
        </div>
      </div>
    </div>
  );
}

export default function LibraryView({ items, onOpenItem }: LibraryViewProps) {
  return (
    <main style={{ maxWidth: 1180, margin: '0 auto', padding: '48px 28px 90px' }}>
      <div style={{ textAlign: 'center', marginBottom: 38 }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 14,
          letterSpacing: 4, textTransform: 'uppercase', color: '#a87b2c'
        }}>Knowledge Library</div>
        <h1 style={{ fontFamily: "'Amiri', serif", fontSize: 44, color: '#0d4634', margin: '6px 0 0' }}>
          المكتبة المعرفية
        </h1>
        <p style={{ color: '#5d6b62', fontSize: 16, marginTop: 8 }}>
          مصادر موثوقة: دروس، مقالات، صوتيات، ومحتوى للأطفال والباحثين.
        </p>
      </div>
      <div className="taj-library-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {items.map(item => (
          <LibCard key={item.id} item={item} onOpen={() => onOpenItem(item)} />
        ))}
      </div>
    </main>
  );
}
