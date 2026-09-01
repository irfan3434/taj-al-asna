'use client';

import { useRouter } from 'next/navigation';
import HomeView from '@/components/HomeView';
import { names, nameSlug } from '@/data/names';
import { viewHref } from '@/lib/nav';

export default function Page() {
  const router = useRouter();
  return (
    <HomeView
      names={names}
      onNavigate={(v, q) => router.push(viewHref(v, q))}
      onOpenName={(i) => {
        const n = names[i];
        if (n) router.push(`/name/${nameSlug(n)}`);
      }}
    />
  );
}
