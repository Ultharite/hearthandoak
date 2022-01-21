import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion'
import { useState, useRef, useLayoutEffect } from 'react'

const Parallax = ({ children, offset = 50, stiffness = 100, damping = 64 }) => {
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = useRef(null)

  const initial = elementTop - clientHeight
  const final = elementTop + offset

  const { scrollY } = useViewportScroll()
  const yRange = useTransform(scrollY, [initial, -final], [offset, -offset])

  const y = useSpring(yRange, { stiffness: stiffness, damping: damping })

  useLayoutEffect(() => {
    const element = ref.current
    const elementParent = ref.current.elementParent
    const onResize = () => {
      setElementTop(
        element.offsetHeight ||
          setClientHeight(window.innerHeight)
      )
      console.log(elementParent)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [ref])
  return (
    <motion.div
      className="motion"
      viewport={{ amount: 1 }}
      ref={ref}
      style={{ y }}
    >
      {children}
    </motion.div>
  )
}

export default Parallax