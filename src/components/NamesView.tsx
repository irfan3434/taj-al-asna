'use client';

import React, { useState } from 'react';

interface NamesViewProps {
  names: Array<{ n: number; ar: string; tr: string; en: string; da: string }>;
  onOpenName: (index: number) => void;
}

export default function NamesView({ names, onOpenName }: NamesViewProps) {
  const [namesQuery, setNamesQuery] = useState('');

  const filteredNames = names.filter((name) => {
    if (!namesQuery.trim()) return true;
    const q = namesQuery.trim().toLowerCase();
    return (
      name.ar.includes(q) ||
      name.tr.toLowerCase().includes(q) ||
      name.en.toLowerCase().includes(q)
    );
  });

  return (
    <div
      style={{
        maxWidth: 1240,
        margin: '0 auto',
        padding: '48px 28px 90px',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 14,
            textTransform: 'uppercase',
            color: '#a87b2c',
            letterSpacing: 2,
            marginBottom: 12,
          }}
        >
          The Knowledge Engine
        </div>
        <h1
          className="taj-names-title"
          style={{
            fontFamily: "'Amiri', serif",
            fontSize: 44,
            color: '#0d4634',
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          الأسماء الحسنى التسعة والتسعون
        </h1>
      </div>

      {/* Search Bar */}
      <div
        style={{
          maxWidth: 560,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          backgroundColor: '#fffdf7',
          border: '1px solid #e6d8b4',
          borderRadius: 14,
          padding: '10px 18px',
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a87b2c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ flexShrink: 0 }}
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={namesQuery}
          onChange={(e) => setNamesQuery(e.target.value)}
          placeholder="Search by name, transliteration, or meaning..."
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            fontSize: 14,
            color: '#0d4634',
            fontFamily: "'Cormorant Garamond', serif",
          }}
        />
        <span
          style={{
            fontSize: 13,
            color: '#5d6b62',
            flexShrink: 0,
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          {filteredNames.length} / {names.length}
        </span>
      </div>

      {/* Grid */}
      <div
        className="taj-names-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(212px, 1fr))',
          gap: 16,
          marginTop: 30,
        }}
      >
        {filteredNames.map((name) => (
          <NameCard
            key={name.n}
            name={name}
            onClick={() => onOpenName(name.n)}
          />
        ))}
      </div>
    </div>
  );
}

function NameCard({
  name,
  onClick,
}: {
  name: { n: number; ar: string; tr: string; en: string };
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        backgroundColor: '#fffdf7',
        border: `1px solid ${hovered ? '#c9a24b' : '#e6d8b4'}`,
        borderRadius: 16,
        padding: '24px 18px 20px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 34px #0d463418' : 'none',
      }}
    >
      {/* Number Badge */}
      <div
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          width: 26,
          height: 26,
          borderRadius: '50%',
          border: '1px solid #c9a24b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 12,
          color: '#a87b2c',
        }}
      >
        {name.n}
      </div>

      {/* Arabic Name */}
      <div
        style={{
          fontFamily: "'Amiri', serif",
          fontSize: 42,
          color: '#0d4634',
          lineHeight: 1.3,
          marginBottom: 8,
        }}
      >
        {name.ar}
      </div>

      {/* Transliteration */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 14,
          fontWeight: 600,
          color: '#a87b2c',
          marginBottom: 4,
        }}
      >
        {name.tr}
      </div>

      {/* English Meaning */}
      <div
        style={{
          fontSize: 13,
          color: '#5d6b62',
        }}
      >
        {name.en}
      </div>
    </div>
  );
}
