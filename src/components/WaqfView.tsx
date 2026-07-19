'use client';

interface WaqfViewProps {
  onNavigate: (view: string) => void;
}

const WAQF_CYCLE = [
  { icon: '◈', ar: 'الوقف التأسيسي', en: 'Founding Endowment', desc: 'وقف رأس المال لتحقيق أثرٍ دائمٍ لا ينقطع.' },
  { icon: '✦', ar: 'استثمارات الوقف', en: 'Waqf Investments', desc: 'استثمارات ذكية ومستدامة تولّد عوائد تعزّز الرسالة.' },
  { icon: '❖', ar: 'شراكات استراتيجية', en: 'Strategic Partnerships', desc: 'شراكات مع مؤسسات رائدة لتحقيق أثرٍ واسعٍ وذي قيمة.' },
  { icon: '✧', ar: 'منصات تعليمية', en: 'Educational Platforms', desc: 'منصات ذكية لنشر المعرفة وتعليم الأجيال.' },
  { icon: '♥', ar: 'التبرعات العالمية', en: 'Global Donations', desc: 'تبرعات من أفراد ومؤسسات حول العالم لدعم الوقف.' },
  { icon: '✺', ar: 'منتجات رقمية', en: 'Digital Products', desc: 'منتجات رقمية قيّمة تدعم استدامة الوقف.' },
  { icon: '✒', ar: 'خدمات بحثية ومعرفية', en: 'Research & Knowledge', desc: 'دراسات وحلول معرفية تدعم النهضة الفكرية والحضارية.' },
  { icon: '❉', ar: 'أثر مجتمعي عالمي', en: 'Community Impact', desc: 'تمكين المجتمعات وبناء مستقبل أفضل للأمة والإنسانية.' },
];

const SUSTAIN_PILLARS = [
  { icon: '↻', ar: 'عوائد مستدامة', en: 'Sustainable Returns', desc: 'عوائد مستدامة لدعم الرسالة على الدوام.' },
  { icon: '➚', ar: 'نمو مستمر', en: 'Continuous Growth', desc: 'نمو مستمر وتوسّع عالمي مدروس.' },
  { icon: '∞', ar: 'أثر عبر الأجيال', en: 'Generational Impact', desc: 'أثر يمتد عبر الأجيال بإذن الله.' },
  { icon: '⚖', ar: 'حوكمة وشفافية', en: 'Governance & Trust', desc: 'حوكمة شرعية وشفافية وثقة عالية.' },
];

const IMPACT_CHIPS = [
  'وعي أعمق وفكر مستنير',
  'سلوك أفضل وحياة متزنة',
  'علاقات أسرية أقوى',
  'هوية راسخة وثقة بالنفس',
  'مجتمع مزدهر بقيمة ومعرفة',
  'إسهام في نهضة الأمة والحضارة',
  'أثر يبقى لأجيالٍ قادمة',
];

export default function WaqfView({ onNavigate }: WaqfViewProps) {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative bg-[radial-gradient(120%_120%_at_50%_-10%,var(--color-primary),var(--color-primary-mid)_55%,var(--color-primary-deep))] text-text-light px-4 md:px-7 py-14 md:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[repeating-linear-gradient(45deg,var(--color-secondary)_0_1px,transparent_1px_24px),repeating-linear-gradient(-45deg,var(--color-secondary)_0_1px,transparent_1px_24px)]" />
        <div className="relative max-w-[860px] mx-auto">
          <div className="font-cormorant text-xs md:text-sm tracking-[4px] uppercase text-secondary">
            Sustainable Waqf Ecosystem
          </div>
          <h1 className="font-amiri text-[30px] md:text-[46px] text-text-hero mt-2 leading-[1.4]">
            نظام الوقف المستدام
          </h1>
          <p className="text-text-soft text-[15px] md:text-[17px] leading-[2] mt-4 max-w-[620px] mx-auto">
            من وقفٍ واحد… إلى أثرٍ مستدامٍ لا ينتهي. وقفٌ عالمي للمعرفة والإعمار،
            يثمر عوائده معرفةً موثوقة تصل إلى كل مكان.
          </p>

          {/* Hadith */}
          <div className="mt-8 md:mt-10 inline-block bg-white/[0.05] border border-secondary/30 rounded-2xl px-6 md:px-9 py-5">
            <div className="font-amiri text-[20px] md:text-[26px] text-secondary-light leading-[1.8]">
              «مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ»
            </div>
            <div className="font-naskh text-xs md:text-[13px] text-text-subtle mt-1.5">
              رواه مسلم — الوقف يثمر… والأثر أبقى
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
          <h2 className="font-amiri text-[28px] md:text-[38px] text-primary mt-2">
            دورة الوقف المتكاملة
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
              <h3 className="font-naskh text-base md:text-lg font-bold text-primary-dark">{item.ar}</h3>
              <div className="font-cormorant text-[10px] text-secondary-dark uppercase tracking-[1.5px] mt-0.5 mb-2.5">{item.en}</div>
              <p className="font-naskh text-[13px] text-text-muted leading-[1.9]">{item.desc}</p>
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
            <h2 className="font-amiri text-[28px] md:text-[38px] text-secondary-light mt-2">
              استدامة… تنمية… أثر
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {SUSTAIN_PILLARS.map((p, i) => (
              <div
                key={i}
                className="group bg-white/[0.04] border border-secondary/20 rounded-2xl px-4 py-6 text-center transition-all duration-300 hover:border-secondary/50 hover:bg-white/[0.07]"
              >
                <div className="text-[26px] text-secondary mb-2.5 transition-transform duration-300 group-hover:scale-110">{p.icon}</div>
                <h3 className="font-naskh text-base md:text-lg font-bold text-text-light">{p.ar}</h3>
                <div className="font-cormorant text-[10px] md:text-[11px] text-secondary/80 uppercase tracking-[1.5px] mt-0.5 mb-2">{p.en}</div>
                <p className="font-naskh text-[12px] md:text-[13px] text-text-subtle leading-[1.8]">{p.desc}</p>
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
          <h2 className="font-amiri text-[28px] md:text-[38px] text-primary mt-2">
            أثرٌ ممتد يبني الإنسان… ويصنع مستقبلاً أفضل
          </h2>
          <p className="text-text-muted text-sm md:text-base mt-2 max-w-[560px] mx-auto leading-[1.9]">
            من الطفل إلى الباحث، ومن الفرد إلى المجتمع… أثرٌ طويل المدى يلامس القلوب ويصنع التحوّل.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
          {IMPACT_CHIPS.map((chip, i) => (
            <span
              key={i}
              className="bg-cream-light border border-border rounded-full px-4 md:px-5 py-2 md:py-2.5 font-naskh text-[13px] md:text-sm text-primary transition-colors duration-200 hover:border-secondary hover:text-secondary-dark"
            >
              {chip}
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
          <h2 className="font-amiri text-[26px] md:text-[34px] text-text-hero leading-[1.5]">
            من العطاء اليوم… إلى أثرٍ مستدامٍ للأبد
          </h2>
          <p className="text-text-soft text-sm md:text-base mt-3 max-w-[520px] mx-auto leading-[1.9]">
            ساهم في وقف السنن العالمي وكن شريكاً في صناعة أثرٍ معرفي يمتد عبر الأجيال.
          </p>
          <div className="flex flex-col items-center gap-2 mt-7">
            <button
              className="bg-secondary text-primary-dark rounded-full px-10 py-3.5 font-naskh text-base font-bold cursor-pointer border-none hover:bg-secondary-light transition-colors duration-300"
            >
              ساهم في الوقف
            </button>
            <span className="font-naskh text-xs text-text-subtle">بوابة التبرعات — قريباً بإذن الله</span>
          </div>
          <button
            onClick={() => onNavigate('eco')}
            className="mt-6 bg-transparent border-none text-secondary-light font-naskh text-sm cursor-pointer hover:text-secondary transition-colors duration-300"
          >
            استكشف المنظومة المتكاملة ←
          </button>
        </div>
      </section>
    </main>
  );
}
