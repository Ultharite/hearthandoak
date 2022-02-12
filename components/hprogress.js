import { useRef } from 'react'
import { useInViewScroll } from './useInViewScroll'
import { motion, useTransform, useSpring } from 'framer-motion'

const HProgress = ({
  children,
  className,
  viewTrigger
}) => {
  const ref = useRef()
  const progress = useInViewScroll(ref)

  const xRange = useTransform(progress, [0, 0.5], [0, 100])

  const heightRange = useTransform(progress, [0, 0.5], [1, 4])

  const xPercent = useTransform(xRange, (value) => `${value}%`)

  const xRangeSpring = useSpring(xPercent, {
    damping: 60,
    stiffness: 400,
  })

  if (viewTrigger === true) {

    return (
    <motion.div
      ref={ref}
      className={`hprogress ${className}`}
      initial = {{
        width: 0
      }}
      whileInView = {{
        width: 100 + '%'
      }}
      transition={{type: 'linear', delay: 0.2}}
    >
      {children}
    </motion.div>
  )

  }

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
