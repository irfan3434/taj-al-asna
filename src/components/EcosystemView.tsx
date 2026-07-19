'use client';

import { useState } from 'react';
import { ecoData, ecoPositions } from '@/data/ecosystem';

export default function EcosystemView() {
  const [selected, setSelected] = useState(0);

  const principles = [
    { ar: 'حوكمة شرعية ورقابية', en: 'Shariah Governance', icon: '⚖' },
    { ar: 'إدارة مهنية مسؤولة', en: 'Professional Mgmt', icon: '❖' },
    { ar: 'تقنية ذكية وابتكار', en: 'Smart Technology', icon: '✦' },
    { ar: 'مجتمع عالمي مساهم', en: 'Global Community', icon: '❉' },
    { ar: 'رسالة بقلبٍ إنساني', en: 'Human Mission', icon: '♥' },
  ];

  const targets = [
    { num: '99.9%', ar: 'جاهزية المنصة' },
    { num: '100M+', ar: 'مستفيد عالمي' },
    { num: '200+', ar: 'دولة مستهدفة' },
    { num: '10+', ar: 'لغة رئيسية' },
    { num: '$1B+', ar: 'أصول وقفية' },
  ];

  const sel = ecoData[selected];

  return (
    <main>
      {/* Orbital diagram section */}
      <section className="bg-[radial-gradient(120%_120%_at_50%_0%,var(--color-primary),var(--color-primary-mid)_55%,var(--color-primary-deep))] text-text-light px-4 md:px-7 py-12 md:py-[60px] pb-16 md:pb-[70px] text-center overflow-hidden">
        <div className="font-cormorant text-xs md:text-sm tracking-[4px] uppercase text-secondary">
          Global Knowledge Ecosystem
        </div>
        <h1 className="font-amiri text-[26px] sm:text-[30px] md:text-[44px] text-text-hero mt-2 leading-[1.4]">
          منظومة المعرفة العالمية المتكاملة
        </h1>
        <p className="max-w-[640px] mx-auto mt-3.5 text-text-soft text-[15px] md:text-[17px] leading-[1.9]">
          منظومة واحدة تجمع المعرفة والأثر والاستدامة — اضغط على أي طبقة لاستكشاف دورها.
        </p>

        {/* Orbital container — fluid: fills width up to 480px, always square */}
        <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[480px] aspect-square mx-auto mt-10 md:mt-[46px] mb-6">
          {/* Center circle — 42% of container, like the original 200/480 ratio */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] h-[42%] rounded-full bg-gradient-to-br from-primary-accent to-primary-dark border-2 border-secondary grid place-items-center text-center p-2.5 md:p-5 shadow-[0_0_50px_rgba(193,154,69,0.25)]">
            <div>
              <div className="font-cormorant text-[8px] sm:text-[9px] md:text-[11px] tracking-[2px] text-secondary">{sel.tr}</div>
              <div className="font-amiri text-sm sm:text-base md:text-[22px] text-text-hero my-1 leading-[1.3]">{sel.ar}</div>
              <div className="hidden sm:block text-[9px] md:text-xs text-text-faint leading-[1.6]">{sel.desc}</div>
            </div>
          </div>

          {/* Orbit ring — inset 5% mirrors the original 430/480 ratio */}
          <div className="absolute inset-[5%] border border-dashed border-secondary/25 rounded-full" />

          {/* Nodes — percentage centers, so they scale with the container */}
          {ecoData.map((node, i) => {
            const active = i === selected;
            const pos = ecoPositions[i];
            return (
              <div
                key={i}
                onClick={() => setSelected(i)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left: pos.l, top: pos.t }}
              >
                <div
                  className={`relative w-[42px] h-[42px] sm:w-[54px] sm:h-[54px] md:w-[74px] md:h-[74px] rounded-full grid place-items-center transition-all duration-150 ${
                    active
                      ? 'bg-gradient-to-br from-secondary-light to-secondary-dark border-2 border-text-hero'
                      : 'bg-primary-muted border border-secondary/40 hover:border-secondary'
                  }`}
                >
                  <div
                    className={`font-cormorant text-[10px] sm:text-[11px] md:text-[13px] ${
                      active ? 'text-primary-dark' : 'text-secondary'
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] sm:text-[10px] md:text-xs text-secondary-light">
                    {node.ar}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Principles */}
      <section className="max-w-[1180px] mx-auto px-4 md:px-7 pt-12 md:pt-16 lg:pt-20 pb-[30px] text-center">
        <div className="font-cormorant text-xs lg:text-sm uppercase tracking-[4px] text-secondary-dark mb-2">
          Our Principles
        </div>
        <h2 className="font-amiri text-[28px] md:text-[34px] text-primary mb-[30px]">مبادئنا الموجِّهة</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {principles.map((pr, i) => (
            <div
              key={i}
              className="group bg-cream-light border border-border rounded-2xl px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-[0_12px_30px_rgba(13,70,52,0.08)]"
            >
              <div className="text-[28px] text-secondary-dark mb-2.5 transition-transform duration-300 group-hover:scale-110">{pr.icon}</div>
              <div className="text-base font-bold text-primary leading-[1.5]">{pr.ar}</div>
              <div className="font-cormorant text-xs tracking-[1px] text-secondary-dark mt-1.5">
                {pr.en}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Targets */}
      <section className="max-w-[1180px] mx-auto px-4 md:px-7 pt-10 pb-16 md:pb-20">
        <div className="bg-gradient-to-br from-primary to-primary-mid rounded-3xl p-5 md:p-11 border border-secondary/25">
          <h2 className="font-amiri text-[26px] md:text-[30px] text-text-hero text-center mb-[30px] leading-[1.4]">
            مستهدفاتنا التقنية والعالمية
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 text-center text-text-light">
            {targets.map((t, i) => (
              <div key={i}>
                <div className="font-cormorant text-[28px] md:text-[38px] font-bold text-secondary-light">
                  {t.num}
                </div>
                <div className="text-sm text-text-faint mt-1">{t.ar}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
