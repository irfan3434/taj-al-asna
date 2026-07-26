'use client';

import { useLang, Bi } from '@/i18n/language';

interface WaqfViewProps {
  onNavigate: (view: string) => void;
}

const WAQF_CYCLE: { icon: string; label: Bi; desc: Bi }[] = [
  { icon: '◈', label: { ar: 'الوقف التأسيسي', en: 'Founding Endowment' }, desc: { ar: 'وقف رأس المال لتحقيق أثرٍ دائمٍ لا ينقطع.', en: 'Endowing capital for perpetual, uninterrupted impact.' } },
  { icon: '✦', label: { ar: 'استثمارات الوقف', en: 'Waqf Investments' }, desc: { ar: 'استثمارات ذكية ومستدامة تولّد عوائد تعزّز الرسالة.', en: 'Smart, sustainable investments generating returns that strengthen the mission.' } },
  { icon: '❖', label: { ar: 'شراكات استراتيجية', en: 'Strategic Partnerships' }, desc: { ar: 'شراكات مع مؤسسات رائدة لتحقيق أثرٍ واسعٍ وذي قيمة.', en: 'Partnerships with leading institutions for broad, valuable impact.' } },
  { icon: '✧', label: { ar: 'منصات تعليمية', en: 'Educational Platforms' }, desc: { ar: 'منصات ذكية لنشر المعرفة وتعليم الأجيال.', en: 'Smart platforms to spread knowledge and teach generations.' } },
  { icon: '♥', label: { ar: 'التبرعات العالمية', en: 'Global Donations' }, desc: { ar: 'تبرعات من أفراد ومؤسسات حول العالم لدعم الوقف.', en: 'Donations from individuals and institutions worldwide to support the waqf.' } },
  { icon: '✺', label: { ar: 'منتجات رقمية', en: 'Digital Products' }, desc: { ar: 'منتجات رقمية قيّمة تدعم استدامة الوقف.', en: 'Valuable digital products that sustain the waqf.' } },
  { icon: '✒', label: { ar: 'خدمات بحثية ومعرفية', en: 'Research & Knowledge' }, desc: { ar: 'دراسات وحلول معرفية تدعم النهضة الفكرية والحضارية.', en: 'Studies and knowledge solutions supporting an intellectual and civilizational renaissance.' } },
  { icon: '❉', label: { ar: 'أثر مجتمعي عالمي', en: 'Community Impact' }, desc: { ar: 'تمكين المجتمعات وبناء مستقبل أفضل للأمة والإنسانية.', en: 'Empowering communities and building a better future for the Ummah and humanity.' } },
];

const SUSTAIN_PILLARS: { icon: string; label: Bi; desc: Bi }[] = [
  { icon: '↻', label: { ar: 'عوائد مستدامة', en: 'Sustainable Returns' }, desc: { ar: 'عوائد مستدامة لدعم الرسالة على الدوام.', en: 'Sustainable returns to support the mission continuously.' } },
  { icon: '➚', label: { ar: 'نمو مستمر', en: 'Continuous Growth' }, desc: { ar: 'نمو مستمر وتوسّع عالمي مدروس.', en: 'Continuous growth and measured global expansion.' } },
  { icon: '∞', label: { ar: 'أثر عبر الأجيال', en: 'Generational Impact' }, desc: { ar: 'أثر يمتد عبر الأجيال بإذن الله.', en: 'Impact that extends across generations, God willing.' } },
  { icon: '⚖', label: { ar: 'حوكمة وشفافية', en: 'Governance & Trust' }, desc: { ar: 'حوكمة شرعية وشفافية وثقة عالية.', en: 'Shariah governance, transparency and high trust.' } },
];

const IMPACT_CHIPS: Bi[] = [
  { ar: 'وعي أعمق وفكر مستنير', en: 'Deeper awareness & enlightened thinking' },
  { ar: 'سلوك أفضل وحياة متزنة', en: 'Better conduct & a balanced life' },
  { ar: 'علاقات أسرية أقوى', en: 'Stronger family relationships' },
  { ar: 'هوية راسخة وثقة بالنفس', en: 'Firm identity & self-confidence' },
  { ar: 'مجتمع مزدهر بقيمة ومعرفة', en: 'A society thriving with values & knowledge' },
  { ar: 'إسهام في نهضة الأمة والحضارة', en: 'Contributing to the renaissance of the Ummah' },
  { ar: 'أثر يبقى لأجيالٍ قادمة', en: 'Impact that lasts for generations to come' },
];

export default function WaqfView({ onNavigate }: WaqfViewProps) {
  const { t, isAr } = useLang();
  const heading = isAr ? 'font-amiri' : 'font-cormorant';

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative bg-[radial-gradient(120%_120%_at_50%_-10%,var(--color-primary),var(--color-primary-mid)_55%,var(--color-primary-deep))] text-text-light px-4 md:px-7 py-14 md:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[repeating-linear-gradient(45deg,var(--color-secondary)_0_1px,transparent_1px_24px),repeating-linear-gradient(-45deg,var(--color-secondary)_0_1px,transparent_1px_24px)]" />
        <div className="relative max-w-[860px] mx-auto">
          <div className="font-cormorant text-xs md:text-sm tracking-[4px] uppercase text-secondary">
            Sustainable Waqf Ecosystem
          </div>
          <h1 className={`${heading} text-[30px] md:text-[46px] text-text-hero mt-2 leading-[1.4]`}>
            {t({ ar: 'نظام الوقف المستدام', en: 'The Sustainable Waqf System' })}
          </h1>
          <p className="text-text-soft text-[15px] md:text-[17px] leading-[2] mt-4 max-w-[620px] mx-auto">
            {t({
              ar: 'من وقفٍ واحد… إلى أثرٍ مستدامٍ لا ينتهي. وقفٌ عالمي للمعرفة والإعمار، يثمر عوائده معرفةً موثوقة تصل إلى كل مكان.',
              en: 'From a single endowment… to an endless, sustainable impact. A global waqf for knowledge and development, whose returns bear trusted knowledge that reaches everywhere.',
            })}
          </p>

          {/* Hadith */}
          <div className="mt-8 md:mt-10 inline-block bg-white/[0.05] border border-secondary/30 rounded-2xl px-6 md:px-9 py-5">
            <div className="font-amiri text-[20px] md:text-[26px] text-secondary-light leading-[1.8]" dir="rtl">
              «مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ»
            </div>
            <div className="font-naskh text-xs md:text-[13px] text-text-subtle mt-1.5">
              {t({ ar: 'رواه مسلم — الوقف يثمر… والأثر أبقى', en: 'Narrated by Muslim — “Charity does not diminish wealth” · the waqf bears fruit, and the impact endures' })}
            </div>
          </div>
        </div>
      </section>

      {/* ── The Waqf Cycle ── */}
      <section className="max-w-[1100px] mx-auto px-4 md:px-7 py-14 md:py-20">
        <div className="text-center mb-10 md:mb-12">
          <div className="font-cormorant text-xs md:text-sm uppercase tracking-[4px] text-secondary-dark">
            One Waqf… Endless Impact
          </div>
          <h2 className={`${heading} text-[28px] md:text-[38px] text-primary mt-2`}>
            {t({ ar: 'دورة الوقف المتكاملة', en: 'The Integrated Waqf Cycle' })}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {WAQF_CYCLE.map((item, i) => (
            <div
              key={i}
              className="group relative bg-cream-light border border-border rounded-2xl px-5 py-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-[0_12px_30px_rgba(13,70,52,0.08)]"
            >
              <div className="absolute top-3 left-3 font-cormorant text-xs text-secondary-dark/60">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-dark to-primary ring-1 ring-secondary/30 flex items-center justify-center mb-4 text-[20px] text-secondary transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="font-naskh text-base md:text-lg font-bold text-primary-dark">{t(item.label)}</h3>
              {isAr && (
                <div className="font-cormorant text-[10px] text-secondary-dark uppercase tracking-[1.5px] mt-0.5">{item.label.en}</div>
              )}
              <p className="font-naskh text-[13px] text-text-muted leading-[1.9] mt-2.5">{t(item.desc)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sustainability Pillars ── */}
      <section className="bg-primary-dark border-y border-secondary/15 px-4 md:px-7 py-14 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <div className="font-cormorant text-xs md:text-sm uppercase tracking-[4px] text-secondary">
              Sustainability… Growth… Impact
            </div>
            <h2 className={`${heading} text-[28px] md:text-[38px] text-secondary-light mt-2`}>
              {t({ ar: 'استدامة… تنمية… أثر', en: 'Sustainability… Growth… Impact' })}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {SUSTAIN_PILLARS.map((p, i) => (
              <div
                key={i}
                className="group bg-white/[0.04] border border-secondary/20 rounded-2xl px-4 py-6 text-center transition-all duration-300 hover:border-secondary/50 hover:bg-white/[0.07]"
              >
                <div className="text-[26px] text-secondary mb-2.5 transition-transform duration-300 group-hover:scale-110">{p.icon}</div>
                <h3 className="font-naskh text-base md:text-lg font-bold text-text-light">{t(p.label)}</h3>
                {isAr && (
                  <div className="font-cormorant text-[10px] md:text-[11px] text-secondary/80 uppercase tracking-[1.5px] mt-0.5">{p.label.en}</div>
                )}
                <p className="font-naskh text-[12px] md:text-[13px] text-text-subtle leading-[1.8] mt-2">{t(p.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Across Generations ── */}
      <section className="max-w-[1100px] mx-auto px-4 md:px-7 py-14 md:py-20">
        <div className="text-center mb-8 md:mb-10">
          <div className="font-cormorant text-xs md:text-sm uppercase tracking-[4px] text-secondary-dark">
            Impact Across Generations
          </div>
          <h2 className={`${heading} text-[28px] md:text-[38px] text-primary mt-2`}>
            {t({ ar: 'أثرٌ ممتد يبني الإنسان… ويصنع مستقبلاً أفضل', en: 'A lasting impact that builds people… and creates a better future' })}
          </h2>
          <p className="text-text-muted text-sm md:text-base mt-2 max-w-[560px] mx-auto leading-[1.9]">
            {t({
              ar: 'من الطفل إلى الباحث، ومن الفرد إلى المجتمع… أثرٌ طويل المدى يلامس القلوب ويصنع التحوّل.',
              en: 'From the child to the researcher, from the individual to society… a long-term impact that touches hearts and creates transformation.',
            })}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
          {IMPACT_CHIPS.map((chip, i) => (
            <span
              key={i}
              className="bg-cream-light border border-border rounded-full px-4 md:px-5 py-2 md:py-2.5 font-naskh text-[13px] md:text-sm text-primary transition-colors duration-200 hover:border-secondary hover:text-secondary-dark"
            >
              {t(chip)}
            </span>
          ))}
        </div>
      </section>

      {/* ── Contribute CTA ── */}
      <section className="max-w-[1100px] mx-auto px-4 md:px-7 pb-16 md:pb-24">
        <div className="bg-gradient-to-br from-primary to-primary-mid rounded-3xl border border-secondary/25 px-5 py-10 md:p-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 md:w-16 bg-gradient-to-l from-secondary/50 to-transparent" />
            <span className="text-secondary text-lg" aria-hidden>&#10022;</span>
            <span className="h-px w-10 md:w-16 bg-gradient-to-r from-secondary/50 to-transparent" />
          </div>
          <h2 className={`${heading} text-[26px] md:text-[34px] text-text-hero leading-[1.5]`}>
            {t({ ar: 'من العطاء اليوم… إلى أثرٍ مستدامٍ للأبد', en: 'From giving today… to a sustainable impact forever' })}
          </h2>
          <p className="text-text-soft text-sm md:text-base mt-3 max-w-[520px] mx-auto leading-[1.9]">
            {t({
              ar: 'ساهم في وقف السنن العالمي وكن شريكاً في صناعة أثرٍ معرفي يمتد عبر الأجيال.',
              en: 'Contribute to the Global Sunan Waqf and become a partner in creating knowledge impact that spans generations.',
            })}
          </p>
          <div className="flex flex-col items-center gap-2 mt-7">
            <button
              className="bg-secondary text-primary-dark rounded-full px-10 py-3.5 font-naskh text-base font-bold cursor-pointer border-none hover:bg-secondary-light transition-colors duration-300"
            >
              {t({ ar: 'ساهم في الوقف', en: 'Contribute to the Waqf' })}
            </button>
            <span className="font-naskh text-xs text-text-subtle">
              {t({ ar: 'بوابة التبرعات — قريباً بإذن الله', en: 'Donations portal — coming soon, God willing' })}
            </span>
          </div>
          <button
            onClick={() => onNavigate('eco')}
            className="mt-6 bg-transparent border-none text-secondary-light font-naskh text-sm cursor-pointer hover:text-secondary transition-colors duration-300"
          >
            {t({ ar: 'استكشف المنظومة المتكاملة ←', en: 'Explore the integrated ecosystem →' })}
          </button>
        </div>
      </section>
    </main>
  );
}
