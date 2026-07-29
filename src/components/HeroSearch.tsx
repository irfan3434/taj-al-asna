'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { NameData, nameSlug } from '@/data/names';
import { useLang } from '@/i18n/language';
import { searchNames } from '@/lib/search';

interface HeroSearchProps {
  names: NameData[];
  /** Called on free-text submit — Enter/Search with no highlighted suggestion. */
  onSubmit: (query: string) => void;
}

const MAX_SUGGESTIONS = 6;

export default function HeroSearch({ names, onSubmit }: HeroSearchProps) {
  const { t } = useLang();
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(
    () => searchNames(names, query, MAX_SUGGESTIONS),
    [names, query]
  );
  const showList = open && suggestions.length > 0;

  // Close the dropdown when clicking outside.
  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setActiveIndex(-1);
      }
    }
    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, []);

  function goToName(name: NameData) {
    setOpen(false);
    setActiveIndex(-1);
    router.push(`/name/${nameSlug(name)}`);
  }

  function submitFreeText() {
    setOpen(false);
    setActiveIndex(-1);
    onSubmit(query.trim());
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!showList) setOpen(true);
        else setActiveIndex((i) => (i + 1) % suggestions.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!showList) setOpen(true);
        else setActiveIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (showList && activeIndex >= 0) goToName(suggestions[activeIndex]);
        else submitFreeText();
        break;
      case 'Escape':
        setOpen(false);
        setActiveIndex(-1);
        break;
    }
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-[500px] mb-10">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="flex items-center bg-white/[0.08] rounded-full border border-secondary/30 px-3 py-1.5 flex-1 min-w-0">
          <input
            type="text"
            role="combobox"
            aria-expanded={showList}
            aria-controls="hero-search-listbox"
            aria-autocomplete="list"
            aria-activedescendant={activeIndex >= 0 ? `hero-search-opt-${activeIndex}` : undefined}
            aria-label={t({ ar: 'ابحث عن اسم', en: 'Search for a name' })}
            placeholder={t({ ar: 'ابحث عن اسم...', en: 'Search for a name...' })}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(-1);
              setOpen(true);
            }}
            onFocus={() => {
              if (query.trim()) setOpen(true);
            }}
            onKeyDown={onKeyDown}
            className="w-full min-w-0 bg-transparent border-none outline-none text-text-light text-base font-naskh placeholder:text-text-light/50"
          />
        </div>
        <button
          onClick={submitFreeText}
          className="bg-secondary text-primary-dark border-none rounded-full px-5 md:px-8 py-[7px] text-[15px] font-naskh cursor-pointer font-semibold hover:bg-secondary-light transition-colors duration-300 shrink-0"
        >
          {t({ ar: 'بحث', en: 'Search' })}
        </button>
      </div>

      {showList && (
        <ul
          role="listbox"
          id="hero-search-listbox"
          className="absolute z-30 top-full inset-x-0 mt-2 bg-cream-light border border-secondary/40 rounded-2xl shadow-[0_18px_44px_rgba(6,32,23,0.35)] overflow-hidden py-1.5 text-start"
        >
          {suggestions.map((name, idx) => {
            const isActive = idx === activeIndex;
            return (
              <li
                key={name.n}
                id={`hero-search-opt-${idx}`}
                role="option"
                aria-selected={isActive}
                onMouseDown={(e) => {
                  e.preventDefault(); // keep input focus so the click registers before blur
                  goToName(name);
                }}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`flex items-center justify-between gap-3 px-4 py-2.5 cursor-pointer transition-colors ${
                  isActive ? 'bg-secondary/20' : 'hover:bg-secondary/10'
                }`}
              >
                <span className="font-amiri text-xl text-primary leading-none shrink-0">{name.ar}</span>
                <span className="font-cormorant text-xs text-secondary-dark truncate">
                  {name.tr} · {name.en}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
