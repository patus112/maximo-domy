/** Path with the configured site base (`/maximo-domy/` or `/`). */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  if (path === '/' || path === '') return base;
  return `${base}${path.replace(/^\//, '')}`;
}

export function page(path: string, hash?: string): string {
  const url = asset(path);
  return hash ? `${url}#${hash.replace(/^#/, '')}` : url;
}
