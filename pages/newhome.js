import Button from '../components/button/button'
import Parallaxer from '../components/parallax/parallaxer'
import Wordbounce from '../components/wordbounce'
import Image from 'next/image'
import { useInViewScroll } from '../components/useInViewScroll'
import { useRef } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import HProgress from '../components/hprogress'

const Home = () => {
  const ref = useRef(null)
  const progress = useInViewScroll(ref)

  const yMotion = useTransform(progress, [0, 1], [0, 0])
  const ySpring = useSpring(yMotion, { stiffness: 400, damping: 64 })

  return (
    <div className="page snapper">
      <section className="hero">
        <Wordbounce
          triggeronce={false}
          splitter="words"
          speed="0.6"
          className="hero__slogan"
        >
          Each moment tells a story
        </Wordbounce>
        <img src="/hando-leaf-white.webp" className="hero__leaf" />
        <motion.div
          className="hero__photo"
          ref={ref}
          style={{
            y: ySpring,
          }}
        >
          <Image
            src="/DCP_3403-a7831de8_lg.webp"
            layout="fill"
            alt="Cassie &amp; Mike"
            loading="eager"
          />
        </motion.div>
      </section>

      <section className="hero grid">
        <div className="hero__content">
          <div>
            <h2>
              <Wordbounce splitter="words">
                Capturing the moment is what we do
              </Wordbounce>
            </h2>
            <HProgress />
            <p>
              When choosing a photographer, it should be about finding the
              person who can capture your moments in a style that aligns with
              your vision. Our photography goes far beyond just the subject,
              it&apos;s how we paint a moment in light, and capture the
              spontaneous. We create beautiful long lasting images for you to
              cherish, providing you with keepsakes to pass on for generations
              to come.
            </p>
            <Button>Schedule a session</Button>
          </div>
        </div>
        <div className="posrel">
          <div className="square">
            <Parallaxer yMin={-64} yMax={0}>
              <Image
                src="/CassieMike-1167-d9b5c0d8sq.webp"
                layout="fill"
                alt="Cassie &amp; Mike"
                loading="eager"
              />
            </Parallaxer>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
