import { useRef } from 'react'

import { useInView } from 'react-intersection-observer'

import { useTransform, useSpring, motion } from 'framer-motion'

import { useInViewScroll } from '../useInViewScroll'

const Parallaxer = (props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  const parallaxerRef = useRef(null)

  const parallaxerInView = useInViewScroll(parallaxerRef)

  const yRange = useTransform(parallaxerInView, [0, 0.5], [0, props.yMax || 32])

  const ySpring = useSpring(yRange, { stiffness: 400, damping: 64 })

  return (
    <div className={`parallaxer ${props.className}`} ref={ref}>
      <motion.div
        className="parallxer__inner"
        ref={parallaxerRef}
        style={{ y: ySpring }}
      >
        {props.children}
      </motion.div>
    </div>
  )
}

export default Parallaxer
