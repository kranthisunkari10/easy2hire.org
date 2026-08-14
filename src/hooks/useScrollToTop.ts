import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getLenis } from './useLenis'

export function useScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    getLenis()?.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)
  }, [pathname])
}
