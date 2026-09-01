/** Canonical path for each top-level section — the single source of truth for navigation. */
export function viewHref(view: string, query?: string): string {
  const paths: Record<string, string> = {
    home: '/',
    names: '/names',
    library: '/library',
    assistant: '/assistant',
    eco: '/ecosystem',
    about: '/about',
    waqf: '/waqf',
  };
  const base = paths[view] ?? '/';
  const q = query?.trim();
  return q ? `${base}?q=${encodeURIComponent(q)}` : base;
}
