'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeView from '@/components/HomeView';
import NamesView from '@/components/NamesView';
import DetailView from '@/components/DetailView';
import LibraryView from '@/components/LibraryView';
import LibraryDetailView from '@/components/LibraryDetailView';
import AssistantView from '@/components/AssistantView';
import EcosystemView from '@/components/EcosystemView';
import AboutView from '@/components/AboutView';
import WaqfView from '@/components/WaqfView';
import { names, refsByN } from '@/data/names';
import { libraryData, LibraryItem } from '@/data/library';

type View = 'home' | 'names' | 'detail' | 'library' | 'libdetail' | 'assistant' | 'eco' | 'about' | 'waqf';

export default function Page() {
  const [view, setView] = useState<View>('home');
  const [selectedNameIndex, setSelectedNameIndex] = useState<number>(0);
  const [selectedLib, setSelectedLib] = useState<LibraryItem | null>(null);

  function navigate(v: string) {
    setView(v as View);
    window.scrollTo(0, 0);
  }

  function openName(index: number) {
    setSelectedNameIndex(index);
    setView('detail');
    window.scrollTo(0, 0);
  }

  function openLib(item: LibraryItem) {
    setSelectedLib(item);
    setView('libdetail');
    window.scrollTo(0, 0);
  }

  return (
    <div dir="rtl" className="font-naskh text-text-body bg-cream min-h-screen overflow-x-hidden">
      <Header onNavigate={navigate} />

      {view === 'home' && (
        <HomeView names={names} onNavigate={navigate} onOpenName={openName} />
      )}

      {view === 'names' && (
        <NamesView names={names} onOpenName={openName} />
      )}

      {view === 'detail' && (
        <DetailView
          name={names[selectedNameIndex]}
          quranRef={refsByN[names[selectedNameIndex].n]}
          names={names}
          onOpenName={openName}
          onGoBack={() => navigate('names')}
        />
      )}

      {view === 'library' && (
        <LibraryView items={libraryData} onOpenItem={openLib} />
      )}

      {view === 'libdetail' && selectedLib && (
        <LibraryDetailView item={selectedLib} onGoBack={() => navigate('library')} />
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

      <Footer />
    </div>
  );
}
