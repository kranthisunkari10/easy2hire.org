import { useEffect } from 'react'
import Lenis from 'lenis'

let client: Lenis | null = null

export function getLenis() {
  return client
}

export function scrollToTop(smooth = true) {
  const lenis = getLenis()
  if (lenis) {
    lenis.scrollTo(0, { immediate: !smooth })
    return
  }
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    client = lenis

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      client = null
    }
  }, [])
}
