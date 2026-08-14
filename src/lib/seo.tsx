import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE } from '../config/site'
import { absoluteUrl } from './urls'

function upsertMeta(selector: string, attr: string, value: string, create: () => HTMLMetaElement) {
  let el = document.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

export function Seo({ title, description }: { title: string; description: string }) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = title
    const url = absoluteUrl(pathname)

    upsertMeta('meta[name="description"]', 'content', description, () => {
      const m = document.createElement('meta')
      m.setAttribute('name', 'description')
      return m
    })
    upsertMeta('meta[property="og:title"]', 'content', title, () => {
      const m = document.createElement('meta')
      m.setAttribute('property', 'og:title')
      return m
    })
    upsertMeta('meta[property="og:description"]', 'content', description, () => {
      const m = document.createElement('meta')
      m.setAttribute('property', 'og:description')
      return m
    })
    upsertMeta('meta[property="og:url"]', 'content', url, () => {
      const m = document.createElement('meta')
      m.setAttribute('property', 'og:url')
      return m
    })

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', `${SITE.url}/easy2hire.png`)
  }, [title, description, pathname])

  return null
}
