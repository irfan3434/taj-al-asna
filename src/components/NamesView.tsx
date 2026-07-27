'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLang } from '@/i18n/language';

interface NamesViewProps {
  names: Array<{ n: number; ar: string; tr: string; en: string; da: string }>;
  onOpenName: (index: number) => void;
}

/** Drop Arabic diacritics (harakat/tanween/shadda/sukoon) so "الرحمن" matches "الرَّحْمَن". */
const stripAr = (s: string) => s.replace(/[ًٌٍَُِّْ]/g, '');

export default function NamesView({ names, onOpenName }: NamesViewProps) {
  const { t, isAr } = useLang();
  const searchParams = useSearchParams();
  const incomingQuery = searchParams.get('q') || '';
  const [namesQuery, setNamesQuery] = useState(incomingQuery);

  // Seed the box when arriving from the hero search (?q=...).
  useEffect(() => {
    setNamesQuery(incomingQuery);
  }, [incomingQuery]);

  const filteredNames = names.filter((name) => {
    const raw = namesQuery.trim();
    if (!raw) return true;
    const q = raw.toLowerCase();
    const qAr = stripAr(raw);
    return (
      stripAr(name.ar).includes(qAr) ||
      name.tr.toLowerCase().includes(q) ||
      name.en.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-[1240px] mx-auto px-4 md:px-7 pt-8 md:pt-12 pb-16 md:pb-[90px]">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="font-cormorant text-sm uppercase text-secondary-dark tracking-[2px] mb-3">
          The Knowledge Engine
        </div>
        <h1 className={`${isAr ? 'font-amiri' : 'font-cormorant'} text-[30px] md:text-[44px] text-primary m-0 leading-[1.3]`}>
          {t({ ar: 'الأسماء الحسنى التسعة والتسعون', en: 'The Ninety-Nine Beautiful Names' })}
        </h1>
      </div>

      {/* Search Bar */}
      <div className="max-w-[560px] mx-auto flex items-center gap-2.5 bg-cream-light border border-border rounded-[14px] px-[18px] py-3 shadow-[0_2px_10px_rgba(13,70,52,0.04)] transition-colors duration-200 focus-within:border-secondary focus-within:shadow-[0_4px_18px_rgba(193,154,69,0.12)]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 text-secondary-dark"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={namesQuery}
          onChange={(e) => setNamesQuery(e.target.value)}
          placeholder={t({ ar: 'ابحث بالاسم أو النطق أو المعنى...', en: 'Search by name, transliteration, or meaning...' })}
          className="flex-1 border-none outline-none bg-transparent text-sm text-primary font-cormorant placeholder:text-text-muted/70"
        />
        <span className="text-[13px] text-secondary-dark shrink-0 font-cormorant font-semibold tabular-nums">
          {filteredNames.length} / {names.length}
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(212px,1fr))] gap-3 md:gap-4 mt-[30px]">
        {filteredNames.map((name) => (
          <NameCard
            key={name.n}
            name={name}
            onClick={() => onOpenName(names.indexOf(name))}
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
  return (
    <div
      onClick={onClick}
      className="group relative bg-cream-light border border-border rounded-2xl px-2.5 pt-6 pb-4 md:px-[18px] md:pb-5 text-center cursor-pointer overflow-hidden transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-[0_16px_34px_#0d463418] hover:border-secondary"
    >
      {/* Bottom accent — grows on hover */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-secondary scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300" />

      {/* Number Badge */}
      <div className="absolute top-2.5 right-2.5 w-[26px] h-[26px] rounded-full border border-secondary flex items-center justify-center font-cormorant text-xs text-secondary-dark group-hover:bg-secondary group-hover:text-primary-dark transition-colors duration-300">
        {name.n}
      </div>

      {/* Arabic Name */}
      <div className="font-amiri text-[30px] md:text-[42px] text-primary leading-[1.3] mb-2">
        {name.ar}
      </div>

      {/* Transliteration */}
      <div className="font-cormorant text-sm font-semibold text-secondary-dark mb-1">
        {name.tr}
      </div>

      {/* English Meaning */}
      <div className="text-[13px] text-text-muted">
        {name.en}
      </div>
    </div>
  );
}
