import type { Metadata } from 'next';
import WaqfView from '@/components/WaqfView';

export const metadata: Metadata = {
  title: 'الوقف والأثر — Taj Al Asna',
  description: 'الوقف المعرفي العالمي وأثره الدائم عبر الأجيال.',
  alternates: { canonical: '/waqf' },
};

export default function WaqfPage() {
  return <WaqfView />;
}
