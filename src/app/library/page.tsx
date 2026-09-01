import type { Metadata } from 'next';
import LibraryView from '@/components/LibraryView';
import { libraryData } from '@/data/library';

export const metadata: Metadata = {
  title: 'المكتبة المعرفية — Taj Al Asna',
  description: 'مصادر موثوقة: دروس، مقالات، صوتيات، ومحتوى للأطفال والباحثين.',
  alternates: { canonical: '/library' },
};

export default function LibraryPage() {
  return <LibraryView items={libraryData} />;
}
