import { useRef } from 'react'
import { useInViewScroll } from './useInViewScroll'
import { motion, useTransform, useSpring } from 'framer-motion'

const HProgress = ({
  children,
  className
}) => {
  const ref = useRef()
  const progress = useInViewScroll(ref)

  const xRange = useTransform(progress, [0, 0.5], [0, 100])

  const xPercent = useTransform(xRange, (value) => `${value}%`)

  const xRangeSpring = useSpring(xRange, {
    damping: 60,
    stiffness: 400,
  })

  return (
    <motion.div
      ref={ref}
      className={`hprogress ${className}`}
      style={{
        width: xPercent
      }}
    >
      {children}
    </motion.div>
  )
}

export default HProgress
