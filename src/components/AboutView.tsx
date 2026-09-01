'use client';

import { useRouter } from 'next/navigation';
import { useLang, Bi } from '@/i18n/language';
import { viewHref } from '@/lib/nav';

const NEED_STATS: { num: string; suffix: Bi; label: Bi }[] = [
  { num: '2.0', suffix: { ar: ' مليار', en: 'B' }, label: { ar: 'مسلم حول العالم', en: 'Muslims Worldwide' } },
  { num: '190', suffix: { ar: '+', en: '+' }, label: { ar: 'دولة حول العالم', en: 'Countries Worldwide' } },
  { num: '100', suffix: { ar: '+', en: '+' }, label: { ar: 'لغة يمكن الوصول بها', en: 'Accessible Languages' } },
  { num: '85', suffix: { ar: '%', en: '%' }, label: { ar: 'دون مرجعية رقمية موثوقة', en: 'Without a Trusted Reference' } },
];

const JOURNEY_STEPS: { icon: string; label: Bi; desc: Bi }[] = [
  { icon: '✧', label: { ar: 'الاكتشاف', en: 'Discovery' }, desc: { ar: 'اكتشف المحتوى المناسب لاحتياجك بسهولة.', en: 'Easily discover the right content for your needs.' } },
  { icon: '✦', label: { ar: 'التعلّم والفهم', en: 'Learning' }, desc: { ar: 'تعلّم عميق من مصادر موثوقة بتجربة ممتعة.', en: 'Deep learning from trusted sources with an engaging experience.' } },
  { icon: '❖', label: { ar: 'التفاعل والمشاركة', en: 'Engagement' }, desc: { ar: 'تفاعل مع مجتمع معرفي عالمي ملهم.', en: 'Engage with an inspiring global knowledge community.' } },
  { icon: '◈', label: { ar: 'التخصيص الذكي', en: 'Personalization' }, desc: { ar: 'توصيات ذكية مخصّصة لأهدافك واهتماماتك.', en: 'Smart recommendations tailored to your goals and interests.' } },
  { icon: '✺', label: { ar: 'التطبيق والممارسة', en: 'Practice' }, desc: { ar: 'طبّق ما تعلّمته في حياتك اليومية بأدوات عملية.', en: 'Apply what you learn in daily life with practical tools.' } },
  { icon: '∞', label: { ar: 'أثر مدى الحياة', en: 'Lifelong Impact' }, desc: { ar: 'إيمان أعمق ومعرفة أوسع وأثر يمتد عبر الأجيال.', en: 'Deeper faith, wider knowledge, and impact across generations.' } },
];

const PERSONAS: { icon: string; label: Bi; desc: Bi }[] = [
  { icon: '✿', label: { ar: 'الأطفال', en: 'Children' }, desc: { ar: 'محتوى آمن وتفاعلي يحبه الأطفال.', en: 'Safe, interactive content children love.' } },
  { icon: '✎', label: { ar: 'الطلاب', en: 'Students' }, desc: { ar: 'تعلم منظم وموارد موثوقة لدعم رحلتهم.', en: 'Structured learning and trusted resources for their journey.' } },
  { icon: '⌂', label: { ar: 'العائلات', en: 'Families' }, desc: { ar: 'رحلة إيمانية ومعرفية تجمع العائلة كلها.', en: 'A faith and knowledge journey for the whole family.' } },
  { icon: '❖', label: { ar: 'الباحثون', en: 'Researchers' }, desc: { ar: 'أدوات بحث متقدمة ومصادر موثّقة.', en: 'Advanced research tools and documented sources.' } },
  { icon: '✦', label: { ar: 'المعلمون والدعاة', en: 'Teachers & Da’ees' }, desc: { ar: 'موارد احترافية للتعليم والدعوة والإلهام.', en: 'Professional resources to teach, guide and inspire.' } },
  { icon: '☾', label: { ar: 'المسلمون الجدد', en: 'New Muslims' }, desc: { ar: 'دعم شامل بلغة بسيطة ورحلة ترحيبية دافئة.', en: 'Full support in simple language and a warm welcome.' } },
];

const METHODOLOGY: { icon: string; label: Bi; desc: Bi }[] = [
  { icon: '✒', label: { ar: 'توثيق المصادر', en: 'Source Documentation' }, desc: { ar: 'كل معلومة مسندة إلى مصدرها الموثوق.', en: 'Every fact is attributed to its trusted source.' } },
  { icon: '⚖', label: { ar: 'مراجعة وتحكيم علمي', en: 'Scholarly Review' }, desc: { ar: 'مراجعة علمية وشرعية دقيقة قبل النشر.', en: 'Rigorous scholarly and religious review before publishing.' } },
  { icon: '✓', label: { ar: 'ضبط الجودة', en: 'Quality Control' }, desc: { ar: 'معايير صارمة للدقة والاعتماد والتحديث.', en: 'Strict standards for accuracy, accreditation and updates.' } },
];

export default function AboutView() {
  const router = useRouter();
  const { t, isAr } = useLang();
  const heading = isAr ? 'font-amiri' : 'font-cormorant';

  return (
    <main>
      {/* ── Vision Hero ── */}
      <section className="relative bg-[radial-gradient(120%_120%_at_50%_-10%,var(--color-primary),var(--color-primary-mid)_55%,var(--color-primary-deep))] text-text-light px-4 md:px-7 py-14 md:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[repeating-linear-gradient(45deg,var(--color-secondary)_0_1px,transparent_1px_24px),repeating-linear-gradient(-45deg,var(--color-secondary)_0_1px,transparent_1px_24px)]" />
        <div className="relative max-w-[860px] mx-auto">
          <div className="font-cormorant text-xs md:text-sm tracking-[4px] uppercase text-secondary">
            The Global Need
          </div>
          <h1 className={`${heading} text-[30px] md:text-[46px] text-text-hero mt-2 leading-[1.4]`}>
            {t({ ar: 'مرجعية عالمية بأثرٍ مفتوح', en: 'A Global Reference with Open Impact' })}
          </h1>
          <p className="text-text-soft text-[15px] md:text-[17px] leading-[2] mt-4 max-w-[640px] mx-auto">
            {t({
              ar: 'فرصة تاريخية لصناعة المرجعية الإيمانية الأولى للعصر الرقمي — منصة ذكية تجمع بين الإيمان والمعرفة والتقنية والإنسانية، لتصل المعرفة الموثوقة إلى كل قلبٍ وعقل.',
              en: 'A historic opportunity to build the first faith reference for the digital age — a smart platform uniting faith, knowledge, technology and humanity, bringing trusted knowledge to every heart and mind.',
            })}
          </p>

          {/* Need stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-3 md:gap-6 mt-10 md:mt-14">
            {NEED_STATS.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="font-cormorant text-[30px] md:text-[42px] font-bold text-secondary leading-none">
                  {s.num}<span className="text-[18px] md:text-[24px]">{t(s.suffix)}</span>
                </div>
                <div className="w-8 h-px bg-secondary/40 my-2.5" />
                <div className="font-naskh text-[13px] md:text-sm text-text-light leading-[1.7]">{t(s.label)}</div>
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
          <h2 className={`${heading} text-[28px] md:text-[38px] text-primary mt-2`}>
            {t({ ar: 'رحلة تجربة المستخدم', en: 'The User Experience Journey' })}
          </h2>
          <p className="text-text-muted text-sm md:text-base mt-2 max-w-[560px] mx-auto leading-[1.9]">
            {t({
              ar: 'رحلة ذكية مخصّصة لكل فرد في كل خطوة من رحلته المعرفية والإيمانية.',
              en: 'A smart, personalized journey for every individual at every step of their path of knowledge and faith.',
            })}
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
              <h3 className={`${heading} text-xl md:text-[22px] text-primary-dark`}>{t(step.label)}</h3>
              {isAr && (
                <div className="font-cormorant text-xs text-secondary-dark uppercase tracking-[1.5px] mt-0.5">{step.label.en}</div>
              )}
              <p className="font-naskh text-sm text-text-muted leading-[1.9] mt-3">{t(step.desc)}</p>
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
            <h2 className={`${heading} text-[28px] md:text-[38px] text-secondary-light mt-2`}>
              {t({ ar: 'منصة لكل إنسان', en: 'A Platform for Every Human Being' })}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {PERSONAS.map((p, i) => (
              <div
                key={i}
                className="group bg-white/[0.04] border border-secondary/20 rounded-2xl px-4 py-6 text-center transition-all duration-300 hover:border-secondary/50 hover:bg-white/[0.07]"
              >
                <div className="text-[24px] text-secondary mb-2.5 transition-transform duration-300 group-hover:scale-110">{p.icon}</div>
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

      {/* ── Verification Methodology ── */}
      <section className="max-w-[1100px] mx-auto px-4 md:px-7 py-14 md:py-20">
        <div className="text-center mb-10 md:mb-12">
          <div className="font-cormorant text-xs md:text-sm uppercase tracking-[4px] text-secondary-dark">
            Credibility &amp; Trust
          </div>
          <h2 className={`${heading} text-[28px] md:text-[38px] text-primary mt-2`}>
            {t({ ar: 'منهجية التوثيق والمصداقية', en: 'Our Documentation & Credibility Methodology' })}
          </h2>
          <p className="text-text-muted text-sm md:text-base mt-2 max-w-[560px] mx-auto leading-[1.9]">
            {t({
              ar: 'المصداقية أساس رسالتنا — كل محتوى يمر بمنهجية علمية صارمة قبل أن يصل إليك.',
              en: 'Credibility is the foundation of our mission — every piece of content passes a rigorous scholarly process before it reaches you.',
            })}
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
                  <h3 className="font-naskh text-base md:text-lg font-bold text-primary-dark leading-tight">{t(m.label)}</h3>
                  <div className="font-cormorant text-[10px] text-secondary-dark uppercase tracking-[1.5px]">{m.label.en}</div>
                </div>
              </div>
              <p className="font-naskh text-sm text-text-muted leading-[1.9]">{t(m.desc)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA + Contact ── */}
      <section className="max-w-[1100px] mx-auto px-4 md:px-7 pb-16 md:pb-24">
        <div className="bg-gradient-to-br from-primary to-primary-mid rounded-3xl border border-secondary/25 px-5 py-10 md:p-12 text-center">
          <h2 className={`${heading} text-[26px] md:text-[34px] text-text-hero leading-[1.5]`}>
            {t({
              ar: 'التاج الأسنى ليس مجرد تطبيق… بل حركة معرفية وإيمانية عالمية',
              en: 'Taj Al Asna is not just an app… it is a global knowledge and faith movement',
            })}
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-7">
            <button
              onClick={() => router.push(viewHref('names'))}
              className="bg-secondary text-primary-dark rounded-full px-8 py-3 font-naskh text-[15px] font-semibold cursor-pointer border-none hover:bg-secondary-light transition-colors duration-300"
            >
              {t({ ar: 'ابدأ رحلتك المعرفية', en: 'Start Your Journey' })}
            </button>
            <button
              onClick={() => router.push(viewHref('waqf'))}
              className="bg-transparent text-secondary border-2 border-secondary rounded-full px-8 py-3 font-naskh text-[15px] font-semibold cursor-pointer hover:text-secondary-light hover:border-secondary-light transition-all duration-300"
            >
              {t({ ar: 'تعرّف على الوقف والأثر', en: 'Explore Waqf & Impact' })}
            </button>
          </div>

          {/* Contact */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-9 pt-7 border-t border-secondary/20 text-[13px] md:text-sm text-text-subtle font-naskh">
            <span className="flex items-center gap-2">
              <span className="text-secondary" aria-hidden>✉</span> www.tajasna.org
            </span>
            <span className="flex items-center gap-2">
              <span className="text-secondary" aria-hidden>◉</span> {t({ ar: 'الرياض، المملكة العربية السعودية', en: 'Riyadh, Kingdom of Saudi Arabia' })}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
