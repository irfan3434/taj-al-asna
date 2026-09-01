import type { Metadata } from 'next';
import AboutView from '@/components/AboutView';

export const metadata: Metadata = {
  title: 'عن المنصة — Taj Al Asna',
  description: 'رؤية التاج الأسنى ورحلته المعرفية ومنهجيته.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <AboutView />;
}
