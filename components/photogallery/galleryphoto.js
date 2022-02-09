import Image from 'next/image'
import ImageHover from '../imagehover'
import { useRef } from 'react'
import {
  motion,
  useTransform,
  useSpring
} from 'framer-motion'
import { useInViewScroll } from '../useInViewScroll'

const GalleryPhoto = ({ category, photo, p }) => {
  const ref = useRef(null)
  const progress = useInViewScroll(ref)

  const yRange = useTransform(progress, [0, 0.5], [0, 100])

  const opacityRange = useTransform(progress, [0, 0.25], [0, 1])

  const rotateRange = useTransform(progress, [0, 0.25], [32, 0])

  const scaleRange = useTransform(progress, [0, 0.25], [0.5, 1])
  const scaleSpring = useSpring(scaleRange, {stiffness: 400, damping: 64})

  const blurRange = useTransform(progress, [0, 0.25], [16, 0])

  return (
    <div ref={ref} key={p}>
      <ImageHover perspective={3200}>
        <motion.div
          className="gallery__photo"
          style={{
            perspective: 200,
            opacity: opacityRange,
            rotateX: rotateRange,
            scale: scaleSpring,
          }}
        >
          <Image
            src={`/photos/${category.name}/${photo}`}
            width="1000"
            height="668"
            alt={category[p]}
          ></Image>
        </motion.div>
      </ImageHover>
    </div>
  )
}

export default GalleryPhoto
