export default function Footer() {
  return (
    <footer className="bg-primary-dark text-text-subtle px-4 md:px-7 py-12 border-t border-secondary/20 text-center">
      {/* Ornamental divider */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="h-px w-10 md:w-16 bg-gradient-to-l from-secondary/50 to-transparent" />
        <span className="text-secondary text-lg">&#10022;</span>
        <span className="h-px w-10 md:w-16 bg-gradient-to-r from-secondary/50 to-transparent" />
      </div>
      <div className="font-amiri text-xl md:text-[22px] text-secondary-light">
        معاً نبني منظومة معرفية عالمية
      </div>
      <div className="font-cormorant text-[13px] tracking-[3px] text-secondary mt-1.5 uppercase">
        Together We Build The Future
      </div>
      <div className="text-[13px] mt-4 text-text-dim">
        التاج الأسنى &middot; وقف السنن العالمي &middot; نموذج أولي تفاعلي
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 mt-3 text-xs text-text-dim font-naskh">
        <span className="flex items-center gap-1.5">
          <span className="text-secondary/70" aria-hidden>✉</span> www.tajasna.org
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-secondary/70" aria-hidden>◉</span> الرياض، المملكة العربية السعودية
        </span>
      </div>
    </footer>
  );
}
