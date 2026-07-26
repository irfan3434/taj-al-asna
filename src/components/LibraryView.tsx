'use client';

import { LibraryItem } from '@/data/library';
import { useLang } from '@/i18n/language';

interface LibraryViewProps {
  items: LibraryItem[];
  onOpenItem: (item: LibraryItem) => void;
}

function LibCard({ item, onOpen }: { item: LibraryItem; onOpen: () => void }) {
  const { t, isAr } = useLang();
  return (
    <div
      onClick={onOpen}
      className="group cursor-pointer bg-cream-light border border-border rounded-[18px] overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-secondary hover:shadow-[0_18px_40px_rgba(13,70,52,0.09)]"
    >
      {/* Banner */}
      <div className="h-32 bg-[repeating-linear-gradient(135deg,var(--color-primary)_0_14px,var(--color-primary-accent)_14px_28px)] grid place-items-center relative overflow-hidden">
        <span className="text-4xl text-secondary-light transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
        <span className="absolute bottom-2.5 right-3 bg-primary-dark/80 text-secondary font-mono text-[11px] px-2 py-[3px] rounded-md">
          {t({ ar: item.kind, en: item.kindEn })}
        </span>
        {/* Verified badge */}
        <span className="absolute bottom-2.5 left-3 flex items-center gap-1 bg-primary-dark/80 text-secondary-light font-naskh text-[10px] px-2 py-[3px] rounded-md">
          <span aria-hidden>✓</span> {t({ ar: 'موثّق', en: 'Verified' })}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className={`text-lg font-bold text-primary group-hover:text-secondary-dark transition-colors duration-200 ${isAr ? 'font-naskh' : 'font-cormorant'}`}>
          {t({ ar: item.ar, en: item.en })}
        </div>
        <div className="text-sm text-text-muted leading-[1.7] mt-1.5">{t({ ar: item.desc, en: item.descEn })}</div>
        <div className="flex justify-between items-center mt-3.5 text-[13px] text-secondary-dark">
          <span>{t({ ar: item.meta, en: item.metaEn })}</span>
          <span className="font-cormorant text-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">&nearr;</span>
        </div>
      </div>
    </div>
  );
}

export default function LibraryView({ items, onOpenItem }: LibraryViewProps) {
  const { t, isAr } = useLang();
  return (
    <main className="max-w-[1180px] mx-auto px-4 md:px-7 pt-8 md:pt-12 pb-16 md:pb-[90px]">
      {/* Header */}
      <div className="text-center mb-[38px]">
        <div className="font-cormorant text-xs md:text-sm tracking-[4px] uppercase text-secondary-dark">
          Knowledge Library
        </div>
        <h1 className={`${isAr ? 'font-amiri' : 'font-cormorant'} text-[32px] md:text-[44px] text-primary mt-1.5`}>
          {t({ ar: 'المكتبة المعرفية', en: 'The Knowledge Library' })}
        </h1>
        <p className="text-text-muted text-sm md:text-base mt-2 leading-[1.8]">
          {t({
            ar: 'مصادر موثوقة: دروس، مقالات، صوتيات، ومحتوى للأطفال والباحثين.',
            en: 'Trusted resources: lessons, articles, audio, and content for children and researchers.',
          })}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <LibCard key={item.id} item={item} onOpen={() => onOpenItem(item)} />
        ))}
      </div>
    </main>
  );
}
