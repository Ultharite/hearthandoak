import Image from 'next/image'
import ImageHover from '../imagehover'
import { useRef, useState } from 'react'
import {
  motion,
  useTransform,
  useSpring
} from 'framer-motion'
import { useInViewScroll } from '../useInViewScroll'

const GalleryPhoto = ({ category, photo, p }) => {
  const ref = useRef(null)
  const progress = useInViewScroll(ref)

  const lRange = useTransform(progress, [0, 0.25], [50, 0])

  const opacityRange = useTransform(progress, [0, 0, 0.25], [0, 0.1, 1])

  const scaleRange = useTransform(progress, [0, 0.25], [0.875, 1])
  const scaleSpring = useSpring(scaleRange, {stiffness: 400, damping: 64})


  const xPercent = useTransform(progress, (value) => `${value}%`)

  const [loaded, setLoaded] = useState(false)


  const clippy = useTransform(lRange, (v) => `polygon(${v}% 0, ${100 - v}% 0, ${100 - v}% 100%, ${v}% 100%)`)

  return (
    <div ref={ref} key={p}>
        <motion.div
          className={`gallery__photo ${loaded}`}
          style={{
            opacity: opacityRange,
            scale: scaleSpring,
            clipPath: clippy
          }}
        >
          <Image
            src={`/photos/${category.name}/${photo}`}
            width="1000"
            height="668"
            alt={category[p]}
            lazyBoundary="600px"
            className="gallery__photoimg"
            onLoadingComplete={() => setLoaded(true)}
          ></Image>
        </motion.div>
    </div>
  )
}

export default GalleryPhoto
