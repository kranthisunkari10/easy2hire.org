import { SITE } from '../config/site'

export function routerBasename() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return base || undefined
}

export function publicAsset(path: string) {
  const clean = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${clean}`
}

export function absoluteUrl(path = '/') {
  const origin = SITE.url.replace(/\/$/, '')
  if (!path || path === '/') return `${origin}/`
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`
}

export function whatsappHref(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`
}

export function isHttpUrl(value: string) {
  return /^https?:\/\//i.test(value)
}
