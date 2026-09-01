import type { Metadata } from 'next';
import { Suspense } from 'react';
import NamesView from '@/components/NamesView';
import { names } from '@/data/names';

export const metadata: Metadata = {
  title: 'الأسماء الحسنى التسعة والتسعون — Taj Al Asna',
  description: 'تصفّح أسماء الله الحسنى التسعة والتسعين مع النطق والمعنى والبحث.',
  alternates: { canonical: '/names' },
};

export default function NamesPage() {
  // NamesView reads ?q= for the incoming hero search, so it needs a Suspense boundary.
  return (
    <Suspense fallback={null}>
      <NamesView names={names} />
    </Suspense>
  );
}
