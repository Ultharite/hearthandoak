import { useEffect } from 'react'
import { useMotionValue, useViewportScroll } from 'framer-motion'
import { useInView, observe } from 'react-intersection-observer'

/**
 * `useInViewScroll` returns a MotionValue that updates when the target element is visible in viewport
 *
 * @param el - The target element
 * @param options - An object of options e.g. `threshold`
 */
export const useInViewScroll = (el) => {
  const progress = useMotionValue(0)
  const { scrollY } = useViewportScroll()

  useEffect(() => {
    const handleScrollProgress = () => {
      const node = el.current
      if (!node) return

      const threshold = 0.5

      const elPosY = node.getBoundingClientRect().top + scrollY.get()
      const elHeight = node.scrollHeight

      const viewIntersect = Math.max(elPosY - window.innerHeight, 0.5)
      const current = scrollY.get() - viewIntersect - threshold
      const total = Math.min(window.innerHeight, elPosY) + elHeight - threshold

      const quotient = current / total

      const testFunction = () => {
        return null
      }

      if (quotient > 0 && quotient < 1) {
        progress.set(quotient)
      } else {
        progress.set(0)
      }
    }

    handleScrollProgress()
    const unsubscribeFromScroll = scrollY.onChange(handleScrollProgress)

    return () => unsubscribeFromScroll()
  }, [el, progress, scrollY])

  return progress
}
