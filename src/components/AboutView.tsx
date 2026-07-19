'use client';

interface AboutViewProps {
  onNavigate: (view: string) => void;
}

const NEED_STATS = [
  { num: '2.0', suffix: ' مليار', label: 'مسلم حول العالم', enLabel: 'Muslims Worldwide' },
  { num: '190', suffix: '+', label: 'دولة حول العالم', enLabel: 'Countries' },
  { num: '100', suffix: '+', label: 'لغة يمكن الوصول بها', enLabel: 'Languages' },
  { num: '85', suffix: '%', label: 'دون مرجعية رقمية موثوقة', enLabel: 'Without a Trusted Reference' },
];

const JOURNEY_STEPS = [
  { icon: '✧', ar: 'الاكتشاف', en: 'Discovery', desc: 'اكتشف المحتوى المناسب لاحتياجك بسهولة.' },
  { icon: '✦', ar: 'التعلّم والفهم', en: 'Learning', desc: 'تعلّم عميق من مصادر موثوقة بتجربة ممتعة.' },
  { icon: '❖', ar: 'التفاعل والمشاركة', en: 'Engagement', desc: 'تفاعل مع مجتمع معرفي عالمي ملهم.' },
  { icon: '◈', ar: 'التخصيص الذكي', en: 'Personalization', desc: 'توصيات ذكية مخصّصة لأهدافك واهتماماتك.' },
  { icon: '✺', ar: 'التطبيق والممارسة', en: 'Practice', desc: 'طبّق ما تعلّمته في حياتك اليومية بأدوات عملية.' },
  { icon: '∞', ar: 'أثر مدى الحياة', en: 'Lifelong Impact', desc: 'إيمان أعمق ومعرفة أوسع وأثر يمتد عبر الأجيال.' },
];

const PERSONAS = [
  { icon: '✿', ar: 'الأطفال', en: 'Children', desc: 'محتوى آمن وتفاعلي يحبه الأطفال.' },
  { icon: '✎', ar: 'الطلاب', en: 'Students', desc: 'تعلم منظم وموارد موثوقة لدعم رحلتهم.' },
  { icon: '⌂', ar: 'العائلات', en: 'Families', desc: 'رحلة إيمانية ومعرفية تجمع العائلة كلها.' },
  { icon: '❖', ar: 'الباحثون', en: 'Researchers', desc: 'أدوات بحث متقدمة ومصادر موثّقة.' },
  { icon: '✦', ar: 'المعلمون والدعاة', en: 'Teachers & Da’ees', desc: 'موارد احترافية للتعليم والدعوة والإلهام.' },
  { icon: '☾', ar: 'المسلمون الجدد', en: 'New Muslims', desc: 'دعم شامل بلغة بسيطة ورحلة ترحيبية دافئة.' },
];

const METHODOLOGY = [
  { icon: '✒', ar: 'توثيق المصادر', en: 'Source Documentation', desc: 'كل معلومة مسندة إلى مصدرها الموثوق.' },
  { icon: '⚖', ar: 'مراجعة وتحكيم علمي', en: 'Scholarly Review', desc: 'مراجعة علمية وشرعية دقيقة قبل النشر.' },
  { icon: '✓', ar: 'ضبط الجودة', en: 'Quality Control', desc: 'معايير صارمة للدقة والاعتماد والتحديث.' },
];

export default function AboutView({ onNavigate }: AboutViewProps) {
  return (
    <main>
      {/* ── Vision Hero ── */}
      <section className="relative bg-[radial-gradient(120%_120%_at_50%_-10%,var(--color-primary),var(--color-primary-mid)_55%,var(--color-primary-deep))] text-text-light px-4 md:px-7 py-14 md:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[repeating-linear-gradient(45deg,var(--color-secondary)_0_1px,transparent_1px_24px),repeating-linear-gradient(-45deg,var(--color-secondary)_0_1px,transparent_1px_24px)]" />
        <div className="relative max-w-[860px] mx-auto">
          <div className="font-cormorant text-xs md:text-sm tracking-[4px] uppercase text-secondary">
            The Global Need
          </div>
          <h1 className="font-amiri text-[30px] md:text-[46px] text-text-hero mt-2 leading-[1.4]">
            مرجعية عالمية بأثرٍ مفتوح
          </h1>
          <p className="text-text-soft text-[15px] md:text-[17px] leading-[2] mt-4 max-w-[640px] mx-auto">
            فرصة تاريخية لصناعة المرجعية الإيمانية الأولى للعصر الرقمي — منصة ذكية تجمع
            بين الإيمان والمعرفة والتقنية والإنسانية، لتصل المعرفة الموثوقة إلى كل قلبٍ وعقل.
          </p>

          {/* Need stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-3 md:gap-6 mt-10 md:mt-14">
            {NEED_STATS.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="font-cormorant text-[30px] md:text-[42px] font-bold text-secondary leading-none">
                  {s.num}<span className="text-[18px] md:text-[24px]">{s.suffix}</span>
                </div>
                <div className="w-8 h-px bg-secondary/40 my-2.5" />
                <div className="font-naskh text-[13px] md:text-sm text-text-light rtl leading-[1.7]">{s.label}</div>
                <div className="font-cormorant text-[10px] md:text-[11px] text-secondary-light/70 uppercase tracking-[1.5px] mt-1">{s.enLabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Journey ── */}
      <section className="max-w-[1100px] mx-auto px-4 md:px-7 py-14 md:py-20">
        <div className="text-center mb-10 md:mb-12">
          <div className="font-cormorant text-xs md:text-sm uppercase tracking-[4px] text-secondary-dark">
            User Experience Journey
          </div>
          <h2 className="font-amiri text-[28px] md:text-[38px] text-primary mt-2">
            رحلة تجربة المستخدم
          </h2>
          <p className="text-text-muted text-sm md:text-base mt-2 max-w-[560px] mx-auto leading-[1.9]">
            رحلة ذكية مخصّصة لكل فرد في كل خطوة من رحلته المعرفية والإيمانية.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {JOURNEY_STEPS.map((step, i) => (
            <div
              key={i}
              className="group relative bg-cream-light border border-border rounded-2xl px-5 py-7 text-center overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-[0_12px_30px_rgba(13,70,52,0.08)]"
            >
              <div className="absolute top-3 right-3 font-cormorant text-xs text-secondary-dark/60">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-dark to-primary ring-1 ring-secondary/30 flex items-center justify-center mx-auto mb-4 text-[22px] text-secondary transition-transform duration-300 group-hover:scale-110">
                {step.icon}
              </div>
              <h3 className="font-amiri text-xl md:text-[22px] text-primary-dark">{step.ar}</h3>
              <div className="font-cormorant text-xs text-secondary-dark uppercase tracking-[1.5px] mt-0.5 mb-3">{step.en}</div>
              <p className="font-naskh text-sm text-text-muted leading-[1.9]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── For Every Human Being ── */}
      <section className="bg-primary-dark border-y border-secondary/15 px-4 md:px-7 py-14 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <div className="font-cormorant text-xs md:text-sm uppercase tracking-[4px] text-secondary">
              For Every Human Being
            </div>
            <h2 className="font-amiri text-[28px] md:text-[38px] text-secondary-light mt-2">
              منصة لكل إنسان
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {PERSONAS.map((p, i) => (
              <div
                key={i}
                className="group bg-white/[0.04] border border-secondary/20 rounded-2xl px-4 py-6 text-center transition-all duration-300 hover:border-secondary/50 hover:bg-white/[0.07]"
              >
                <div className="text-[24px] text-secondary mb-2.5 transition-transform duration-300 group-hover:scale-110">{p.icon}</div>
                <h3 className="font-naskh text-base md:text-lg font-bold text-text-light">{p.ar}</h3>
                <div className="font-cormorant text-[10px] md:text-[11px] text-secondary/80 uppercase tracking-[1.5px] mt-0.5 mb-2">{p.en}</div>
                <p className="font-naskh text-[12px] md:text-[13px] text-text-subtle leading-[1.8]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Verification Methodology ── */}
      <section className="max-w-[1100px] mx-auto px-4 md:px-7 py-14 md:py-20">
        <div className="text-center mb-10 md:mb-12">
          <div className="font-cormorant text-xs md:text-sm uppercase tracking-[4px] text-secondary-dark">
            Credibility &amp; Trust
          </div>
          <h2 className="font-amiri text-[28px] md:text-[38px] text-primary mt-2">
            منهجية التوثيق والمصداقية
          </h2>
          <p className="text-text-muted text-sm md:text-base mt-2 max-w-[560px] mx-auto leading-[1.9]">
            المصداقية أساس رسالتنا — كل محتوى يمر بمنهجية علمية صارمة قبل أن يصل إليك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {METHODOLOGY.map((m, i) => (
            <div
              key={i}
              className="relative bg-cream-light border border-border border-r-4 border-r-secondary rounded-2xl px-6 py-7 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(13,70,52,0.08)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center text-lg text-secondary shrink-0">
                  {m.icon}
                </div>
                <div>
                  <h3 className="font-naskh text-base md:text-lg font-bold text-primary-dark leading-tight">{m.ar}</h3>
                  <div className="font-cormorant text-[10px] text-secondary-dark uppercase tracking-[1.5px]">{m.en}</div>
                </div>
              </div>
              <p className="font-naskh text-sm text-text-muted leading-[1.9]">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA + Contact ── */}
      <section className="max-w-[1100px] mx-auto px-4 md:px-7 pb-16 md:pb-24">
        <div className="bg-gradient-to-br from-primary to-primary-mid rounded-3xl border border-secondary/25 px-5 py-10 md:p-12 text-center">
          <h2 className="font-amiri text-[26px] md:text-[34px] text-text-hero leading-[1.5]">
            التاج الأسنى ليس مجرد تطبيق…<br className="hidden md:block" />
            بل حركة معرفية وإيمانية عالمية
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-7">
            <button
              onClick={() => onNavigate('names')}
              className="bg-secondary text-primary-dark rounded-full px-8 py-3 font-naskh text-[15px] font-semibold cursor-pointer border-none hover:bg-secondary-light transition-colors duration-300"
            >
              ابدأ رحلتك المعرفية
            </button>
            <button
              onClick={() => onNavigate('waqf')}
              className="bg-transparent text-secondary border-2 border-secondary rounded-full px-8 py-3 font-naskh text-[15px] font-semibold cursor-pointer hover:text-secondary-light hover:border-secondary-light transition-all duration-300"
            >
              تعرّف على الوقف والأثر
            </button>
          </div>

          {/* Contact */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-9 pt-7 border-t border-secondary/20 text-[13px] md:text-sm text-text-subtle font-naskh">
            <span className="flex items-center gap-2">
              <span className="text-secondary" aria-hidden>✉</span> www.tajasna.org
            </span>
            <span className="flex items-center gap-2">
              <span className="text-secondary" aria-hidden>◉</span> الرياض، المملكة العربية السعودية
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
