import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { useState, useRef, useLayoutEffect } from 'react'

const PerspectiveParent = ({children}) => {
  return (
    <motion.div className="motion" style={{perspective: 1200, overflow: 'hidden'}}>{children}</motion.div>
  )
}

const Perspective = ({ children }) => {
  const [angle, setAngle] = useState(8)
  const [perspective, setPerspective] = useState(500)

  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const rotateX = useTransform(x, [0, 1], [-angle, angle], {
    clamp: true,
  })

  const rotateY = useTransform(y, [0, 1], [-angle, angle], {
    clamp: true,
  })

  const onMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect()
    const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth
    const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight

    x.set(xValue, true)
    y.set(yValue, true)
  }

  return (
    <PerspectiveParent>
      <motion.div
        whileInView={{ opacity: 1 }}
        onPointerMove={onMove}
        className="perspective motion"
        style={{
          rotateX,
          rotateY,
        }}
      >
        {children}
      </motion.div>
    </PerspectiveParent>
  )
}

export default Perspective
