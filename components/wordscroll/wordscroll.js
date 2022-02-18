import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion'

import { useRef } from 'react'

import { useInViewScroll } from '../useInViewScroll'

const WordScroll = ({ children, caption }) => {
  const ref = useRef(null)
  const scrollX = useInViewScroll(ref)

  const scrollXAmount = useTransform(scrollX, [0, 1], [0, 1000])

  let rows = []

  const Repeater = () => {
    for (let i = 0; i < 16; i++) {
      rows.push(children)
    }
    return rows
  }

  return (
    <section className="wordscroller">
      <span className="wordscroll__caption">{caption}</span>
      <div className="wordscroll">
        <motion.div
          ref={ref}
          className="div"
          style={{ translateX: scrollXAmount }}
        >
          <Repeater />
        </motion.div>
      </div>
    </section>
  )
}

export default WordScroll