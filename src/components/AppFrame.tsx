'use client';

import { useLang } from '@/i18n/language';

/**
 * Page frame shared by every route: applies the current text direction
 * (RTL for Arabic / LTR for English) and the base background + font.
 * Lives in the root layout so name pages and the home SPA look identical.
 */
export default function AppFrame({ children }: { children: React.ReactNode }) {
  const { dir } = useLang();
  return (
    <div dir={dir} className="font-naskh text-text-body bg-cream min-h-screen overflow-x-hidden">
      {children}
    </div>
  );
}
