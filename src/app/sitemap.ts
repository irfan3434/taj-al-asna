import type { MetadataRoute } from 'next';
import { names, nameSlug } from '@/data/names';
import { libraryData } from '@/data/library';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Top-level sections (now all real routes).
  const sections: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, priority: 1, changeFrequency: 'weekly' as const },
    { url: `${SITE_URL}/names`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${SITE_URL}/library`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${SITE_URL}/assistant`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/ecosystem`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/about`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/waqf`, priority: 0.6, changeFrequency: 'monthly' as const },
  ].map((s) => ({ ...s, lastModified }));

  const libraryPages: MetadataRoute.Sitemap = libraryData.map((item) => ({
    url: `${SITE_URL}/library/${item.id}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const namePages: MetadataRoute.Sitemap = names.map((n) => {
    const url = `${SITE_URL}/name/${nameSlug(n)}`;
    return {
      url,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'ar-SA': url,
          en: url,
        },
      },
    };
  });

  return [...sections, ...libraryPages, ...namePages];
}
