'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import HomeView from '@/components/HomeView';
import NamesView from '@/components/NamesView';
import LibraryView from '@/components/LibraryView';
import LibraryDetailView from '@/components/LibraryDetailView';
import AssistantView from '@/components/AssistantView';
import EcosystemView from '@/components/EcosystemView';
import AboutView from '@/components/AboutView';
import WaqfView from '@/components/WaqfView';
import { names, nameSlug } from '@/data/names';
import { libraryData, LibraryItem } from '@/data/library';

// Sections of the home SPA. Individual names live at their own real route (/name/[slug]).
// Remaining sections are selected via ?v= for now and will graduate to real routes one by one.
type View = 'home' | 'names' | 'library' | 'libdetail' | 'assistant' | 'eco' | 'about' | 'waqf';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Shell />
    </Suspense>
  );
}

function Shell() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const view = (searchParams.get('v') as View) || 'home';
  const [selectedLib, setSelectedLib] = useState<LibraryItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  function navigate(v: string, query?: string) {
    const params = new URLSearchParams();
    if (v !== 'home') params.set('v', v);
    if (query && query.trim()) params.set('q', query.trim());
    const qs = params.toString();
    router.push(qs ? `/?${qs}` : '/');
  }

  // `index` is the 0-based position in the `names` array.
  function openName(index: number) {
    const name = names[index];
    if (name) router.push(`/name/${nameSlug(name)}`);
  }

  function openLib(item: LibraryItem) {
    setSelectedLib(item);
    router.push('/?v=libdetail');
  }

  return (
    <>
      {view === 'home' && (
        <HomeView names={names} onNavigate={navigate} onOpenName={openName} />
      )}

      {view === 'names' && (
        // Re-key on the incoming query so the search box re-seeds from ?q= on a fresh search.
        <NamesView key={searchParams.get('q') ?? ''} names={names} />
      )}

      {view === 'library' && (
        <LibraryView items={libraryData} onOpenItem={openLib} />
      )}

      {view === 'libdetail' && (
        selectedLib
          ? <LibraryDetailView item={selectedLib} onGoBack={() => navigate('library')} />
          : <LibraryView items={libraryData} onOpenItem={openLib} />
      )}

      {view === 'assistant' && (
        <AssistantView names={names} />
      )}

      {view === 'eco' && (
        <EcosystemView />
      )}

      {view === 'about' && (
        <AboutView onNavigate={navigate} />
      )}

      {view === 'waqf' && (
        <WaqfView onNavigate={navigate} />
      )}
    </>
  );
}
