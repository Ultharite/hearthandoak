import { useRef } from 'react'
import { useInViewScroll } from '../useInViewScroll'
import { motion, useTransform, useSpring } from 'framer-motion'

const Parallax = ({
  children,
  inViewMin = 0,
  inViewMax = 0.25,
  yMin = 0,
  yMax = -32,
  damping = 60,
  stiffness = 100,
}) => {
  const ref = useRef()
  const progress = useInViewScroll(ref)
  const yRange = useTransform(progress, [inViewMin, inViewMax], [yMin, yMax])

  const yRangeSpring = useSpring(yRange, {
    damping: damping,
    stiffness: stiffness,
  })

  return (
    <motion.div
      ref={ref}
      className="parallaxer"
      style={{
        y: yRangeSpring,
      }}
    >
      {children}
    </motion.div>
  )
}

export default Parallax
