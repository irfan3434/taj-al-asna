import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DetailView from '@/components/DetailView';
import { names, refsByN, nameBySlug, nameSlug } from '@/data/names';
import { SITE_URL, SITE_NAME } from '@/lib/site';

// Pre-render all 99 names as static pages at build time.
export function generateStaticParams() {
  return names.map((n) => ({ slug: nameSlug(n) }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const name = nameBySlug[slug];
  if (!name) return { title: 'التاج الأسنى — Taj Al Asna' };

  const title = `${name.ar} · ${name.tr} — ${name.en} | Taj Al Asna`;
  const description = name.da;
  const path = `/name/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        'ar-SA': path,
        en: path,
        'x-default': path,
      },
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'ar_SA',
      alternateLocale: ['en_US'],
      type: 'article',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  };
}

export default async function NamePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const name = nameBySlug[slug];
  if (!name) notFound();

  const url = `${SITE_URL}/name/${slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `${url}#definedterm`,
    name: `${name.ar} (${name.tr})`,
    alternateName: name.en,
    description: name.da,
    termCode: String(name.n),
    inLanguage: 'ar',
    url,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      '@id': `${SITE_URL}/#names`,
      name: 'The 99 Beautiful Names of Allah — أسماء الله الحسنى',
      url: `${SITE_URL}/`,
    },
    isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DetailView name={name} quranRef={refsByN[name.n]} names={names} />
    </>
  );
}
