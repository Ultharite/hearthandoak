import { useRef } from 'react'

import { useInView } from 'react-intersection-observer'

import { useTransform, useSpring, motion } from 'framer-motion'

import { useInViewScroll } from '../useInViewScroll'

const Parallaxer = ({
  stiffness = 400,
  damping = 64,
  className,
  children,
  yRangeMax = 0.5,
  yMin = 0,
  yMax = 32,
  spring = true,
}) => {

  const parallaxerRef = useRef(null)
  const parallaxerInView = useInViewScroll(parallaxerRef)
  const yRange = useTransform(parallaxerInView, [0, yRangeMax], [yMin, yMax])
  const ySpring = useSpring(yRange, { stiffness: stiffness, damping: damping })

  let yMoveType = yRange

  if (spring === true) {
    yMoveType = ySpring
  }

  return (
    <div className={`parallaxer ${className}`}>
      <motion.div
        className="parallaxer__inner"
        ref={parallaxerRef}
        style={{ y: yMoveType }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Parallaxer
