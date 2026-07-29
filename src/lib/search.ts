import { NameData } from '@/data/names';

/** Drop Arabic diacritics (harakat/tanween/shadda/sukoon) so "الرحمن" matches "الرَّحْمَن". */
export const stripAr = (s: string) => s.replace(/[ًٌٍَُِّْ]/g, '');

type Searchable = Pick<NameData, 'ar' | 'tr' | 'en'>;

/** True if the name matches the query by Arabic (diacritic-insensitive), transliteration, or English meaning. */
export function matchesName(name: Searchable, rawQuery: string): boolean {
  const raw = rawQuery.trim();
  if (!raw) return false;
  const q = raw.toLowerCase();
  const qAr = stripAr(raw);
  return (
    stripAr(name.ar).includes(qAr) ||
    name.tr.toLowerCase().includes(q) ||
    name.en.toLowerCase().includes(q)
  );
}

/** Filter names by query. Empty query → no results. `limit` caps the count (for typeahead). */
export function searchNames<T extends Searchable>(names: T[], rawQuery: string, limit?: number): T[] {
  const raw = rawQuery.trim();
  if (!raw) return [];
  const out: T[] = [];
  for (const name of names) {
    if (matchesName(name, raw)) {
      out.push(name);
      if (limit !== undefined && out.length >= limit) break;
    }
  }
  return out;
}
