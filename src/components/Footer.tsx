'use client';

import { useLang } from '@/i18n/language';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-primary-dark text-text-subtle px-4 md:px-7 py-12 border-t border-secondary/20 text-center">
      {/* Ornamental divider */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="h-px w-10 md:w-16 bg-gradient-to-l from-secondary/50 to-transparent" />
        <span className="text-secondary text-lg">&#10022;</span>
        <span className="h-px w-10 md:w-16 bg-gradient-to-r from-secondary/50 to-transparent" />
      </div>
      <div className="font-amiri text-xl md:text-[22px] text-secondary-light">
        {t({ ar: 'معاً نبني منظومة معرفية عالمية', en: 'Together We Build a Global Knowledge Ecosystem' })}
      </div>
      <div className="font-cormorant text-[13px] tracking-[3px] text-secondary mt-1.5 uppercase">
        {t({ ar: 'Together We Build The Future', en: 'A Global Waqf for Knowledge' })}
      </div>
      <div className="text-[13px] mt-4 text-text-dim">
        {t({
          ar: 'التاج الأسنى · وقف السنن العالمي · نموذج أولي تفاعلي',
          en: 'Taj Al Asna · Global Sunan Waqf · Interactive Prototype',
        })}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 mt-3 text-xs text-text-dim font-naskh">
        <span className="flex items-center gap-1.5">
          <span className="text-secondary/70" aria-hidden>✉</span> www.tajasna.org
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-secondary/70" aria-hidden>◉</span>{' '}
          {t({ ar: 'الرياض، المملكة العربية السعودية', en: 'Riyadh, Kingdom of Saudi Arabia' })}
        </span>
      </div>
    </footer>
  );
}
