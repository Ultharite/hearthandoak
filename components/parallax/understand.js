import { useRef } from 'react'
import { useInViewScroll } from '../useInViewScroll'
import { motion, useTransform, useSpring } from 'framer-motion'

const Understand = ({
  children,
  inViewMin = 0,
  inViewMax = 0.25,
  scaleMin = 0,
  scaleMax = 1,
  perspectiveMin = 200,
  perspectiveMax = 300,
  rotateXMin = 15,
  rotateXMax = 0,
  opacityMin = 0,
  opacityMax = 1,
  yMin = 0,
  yMax = 0,
}) => {
  const ref = useRef()
  const progress = useInViewScroll(ref)

  const scaleRange = useTransform(
    progress,
    [inViewMin, inViewMax],
    [scaleMin, scaleMax]
  )
  const perspectiveRange = useTransform(
    progress,
    [inViewMin, inViewMax],
    [perspectiveMin, perspectiveMax]
  )
  const rotateXRange = useTransform(
    progress,
    [inViewMin, inViewMax],
    [rotateXMin, rotateXMax]
  )
  const opacityRange = useTransform(
    progress,
    [inViewMin, inViewMax],
    [opacityMin, opacityMax]
  )

  const yRange = useTransform(
    progress,
    [inViewMin, inViewMax],
    [yMin, yMax]
  )

  const scaleRangeSpring = useSpring(scaleRange, {
    damping: 60,
    stiffness: 400,
  })

  const rotateXRangeSpring = useSpring(rotateXRange, {
    damping: 60,
    stiffness: 400,
  })

  const perspectiveRangeSpring = useSpring(perspectiveRange, {
    damping: 60,
    stiffness: 400,
  })

  return (
    <motion.div
      ref={ref}
      className="tester"
      style={{
        scale: scaleRangeSpring,
        transformPerspective: perspectiveRangeSpring,
        rotateX: rotateXRangeSpring,
        opacity: opacityRange,
        y: yRange,
      }}
    >
      {children}
    </motion.div>
  )
}

export default Understand
