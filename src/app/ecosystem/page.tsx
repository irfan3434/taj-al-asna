import type { Metadata } from 'next';
import EcosystemView from '@/components/EcosystemView';

export const metadata: Metadata = {
  title: 'المنظومة — Taj Al Asna',
  description: 'اكتشف الروابط بين أسماء الله الحسنى في منظومة متكاملة ومترابطة.',
  alternates: { canonical: '/ecosystem' },
};

export default function EcosystemPage() {
  return <EcosystemView />;
}
