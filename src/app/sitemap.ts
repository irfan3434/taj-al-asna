import type { MetadataRoute } from 'next';
import { names, nameSlug } from '@/data/names';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap[number] = {
    url: `${SITE_URL}/`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 1,
  };

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

  return [home, ...namePages];
}
