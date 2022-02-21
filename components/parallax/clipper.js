import { useTransform, useSpring, motion } from 'framer-motion'
import { useInViewScroll } from '../useInViewScroll'
import { useRef } from 'react'
import Image from 'next/image'
import WordScroll from '../wordscroll/wordscroll'

const Clipper = ({children, circular = false}) => {

  const clipRef = useRef(null)

  const clipEl = useInViewScroll(clipRef)

  const clipValueOne = useTransform(clipEl, [0.25, 0.5], [0, 100])
  const clipValueTwo = useTransform(clipEl, [0.5, 0.75], [0, 100])

  const clipValueOneSpring = useSpring(clipValueOne, {stiffness: 400, damping: 64})
  const clipValueTwoSpring = useSpring(clipValueTwo, {stiffness: 400, damping: 64})

  const circleValue = useTransform(clipEl, [0, 0.5], [0, 100])

  const circleSpring = useSpring(circleValue, {stiffness: 400, damping: 64})

  const clipValueOnePercent = useTransform(clipValueOneSpring, (v) => `polygon(0 0, ${v}% 0, ${v}% 100%, 0% 100%)`)
  const clipValueTwoPercent = useTransform(clipValueTwoSpring, (v) => `polygon(0 0, ${v}% 0, ${v}% 100%, 0% 100%)`)

  const captionYValue = useTransform(clipEl, [0, 1], [0, 256])
  const captionYSpring = useSpring(captionYValue, {stiffness: 400, damping: 64})

  const gapValue = useTransform(clipEl, [0, 1], [2, 0])
  const gapSpring = useSpring(gapValue, {stiffness: 400, damping: 64})
  const gapGap = useTransform(gapValue, (g) => `${g}px`)


  const clipCircle = useTransform(circleSpring, (v) => `circle(${v}% at 50% 50%)`)

  if (circular == true) {
    return (
    <section className="circular__wrap" ref={clipRef}>
      <motion.div className="circular" style={{
        clipPath: clipCircle
      }}>{children}</motion.div>
    </section>
    )
  }

  


  return (
    <section className="clipper" ref={clipRef}>
    
      <div className="clipper__inner">
      <motion.span className="clipper__caption" style={{
        y: captionYSpring
      }}><span>CAPTURE </span><span>THE </span> <span>MOMENT</span></motion.span>
        <motion.div className="clipper__child">
          <Image
            src="/Diana_Dan_Wedding-378-537c44f3.webp"
            layout="fill"
            alt="Cassie &amp; Mike"
            loading="eager"
          />
        </motion.div>
        <motion.div className="clipper__child" style={{
          clipPath: clipValueOnePercent
        }}>
          <Image
            src="/home001.webp"
            layout="fill"
            alt="Cassie &amp; Mike"
            loading="eager"
          />
        </motion.div>
        <motion.div className="clipper__child" style={{
          clipPath: clipValueTwoPercent
        }}>
          <Image
            src="/Diana_Dan_Wedding-319-c75e964f.webp"
            layout="fill"
            alt="Cassie &amp; Mike"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Clipper