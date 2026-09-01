import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LibraryDetailView from '@/components/LibraryDetailView';
import { libraryData } from '@/data/library';

// Each library section is a real, statically-generated route (/library/<id>).
export function generateStaticParams() {
  return libraryData.map((i) => ({ id: i.id }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const item = libraryData.find((i) => i.id === id);
  if (!item) return { title: 'التاج الأسنى — Taj Al Asna' };
  return {
    title: `${item.ar} · ${item.en} | Taj Al Asna`,
    description: item.aboutEn,
    alternates: { canonical: `/library/${id}` },
  };
}

export default async function LibraryItemPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const item = libraryData.find((i) => i.id === id);
  if (!item) notFound();
  return <LibraryDetailView item={item} />;
}
