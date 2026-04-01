/** Prefix public/ asset paths so they work with Vite `base` (e.g. GitHub Pages subfolder). */
export function publicUrl(path) {
  const base = import.meta.env.BASE_URL || '/'
  const p = path.startsWith('/') ? path.slice(1) : path
  return `${base}${p}`.replace(/\/{2,}/g, '/')
}
