import type { Metadata } from 'next';
import AssistantView from '@/components/AssistantView';

export const metadata: Metadata = {
  title: 'المساعد المعرفي الذكي — Taj Al Asna',
  description: 'اسأل عن أسماء الله الحسنى ومعانيها — إجابات مؤصّلة بالمصادر.',
  alternates: { canonical: '/assistant' },
};

export default function AssistantPage() {
  return <AssistantView />;
}
