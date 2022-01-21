import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion'

const WordScroll = ({ children, ref }) => {
  const { scrollY } = useViewportScroll()
  const {scroll} = 0

  return (
    <motion.div ref={ref} className="div" style={{ translateX: scrollY }}>
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
    </motion.div>
  )
}

export default WordScroll
