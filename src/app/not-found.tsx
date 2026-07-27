import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] grid place-items-center px-6 py-20 text-center">
      <div>
        <div className="font-cormorant text-[64px] md:text-[88px] leading-none text-secondary">404</div>
        <div className="flex items-center justify-center gap-2.5 my-5">
          <span className="h-px w-10 bg-gradient-to-l from-secondary/60 to-transparent" />
          <span className="text-secondary text-sm">&#10022;</span>
          <span className="h-px w-10 bg-gradient-to-r from-secondary/60 to-transparent" />
        </div>
        <h1 className="font-amiri text-2xl md:text-3xl text-primary mb-1">الصفحة غير موجودة</h1>
        <p className="font-cormorant text-lg text-text-muted mb-7">This page could not be found.</p>
        <Link
          href="/"
          className="inline-block bg-secondary text-primary-dark rounded-full px-8 py-3 font-naskh font-semibold hover:bg-secondary-light transition-colors"
        >
          العودة للرئيسية · Back home
        </Link>
      </div>
    </main>
  );
}
