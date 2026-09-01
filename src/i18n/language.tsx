'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Lang = 'ar' | 'en';

/** A bilingual string. Use with `t()`. */
export interface Bi {
  ar: string;
  en: string;
}

interface LanguageCtx {
  lang: Lang;
  dir: 'rtl' | 'ltr';
  isAr: boolean;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** pick the value for the current language */
  t: (s: Bi) => string;
}

const LanguageContext = createContext<LanguageCtx | null>(null);

const STORAGE_KEY = 'taj-lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ar');

  // Hydrate from storage on mount. localStorage isn't available during SSR, so this must
  // run in an effect (can't seed useState without a hydration mismatch) — hence the disable.
  useEffect(() => {
    const saved = (typeof window !== 'undefined'
      ? (localStorage.getItem(STORAGE_KEY) as Lang | null)
      : null);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved === 'ar' || saved === 'en') setLangState(saved);
  }, []);

  // reflect language on <html> (dir + lang) and persist
  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === 'ar' ? 'rtl' : 'ltr';
    // font family per language for legible Latin vs Arabic body text
    el.style.setProperty(
      '--app-font',
      lang === 'ar' ? "'Noto Naskh Arabic', serif" : "'Cormorant Garamond', serif"
    );
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((p) => (p === 'ar' ? 'en' : 'ar'));
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const t = (s: Bi) => (lang === 'ar' ? s.ar : s.en);

  return (
    <LanguageContext.Provider value={{ lang, dir, isAr: lang === 'ar', setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageCtx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within <LanguageProvider>');
  return ctx;
}
