import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToTop } from './useLenis'

export function useScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    scrollToTop(false)
  }, [pathname])
}
