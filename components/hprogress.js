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

  const opacityRange = useTransform(progress, [0, 0.5], [0, 1])

  const xPercent = useTransform(xRange, (value) => `${value}%`)

  const xRangeSpring = useSpring(xPercent, {
    damping: 60,
    stiffness: 400,
  })

  if (viewTrigger === true) {

    return (
      <div className="hprogressp">
    <motion.div
      ref={ref}
      className={`hprogress ${className}`}
      initial = {{
        width: 0,
        opacity: 0
      }}
      whileInView = {{
        width: 100 + '%',
        opacity: 1
      }}
      transition={{type: 'ease-in-out', delay: 0.2, duration: 0.5}}
    >
      {children}
    </motion.div>
    </div>
  )

  }

  return (
    <div className="hprogressp">
    <motion.div
      ref={ref}
      className={`hprogress ${className}`}
      style={{
        width: xPercent,
        opacity: opacityRange
      }}
    >
      {children}
    </motion.div>
    </div>
  )
}

export default HProgress
