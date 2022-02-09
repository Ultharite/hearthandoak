import ParallaxPlus from '../parallax/ParallaxPlus'
import Image from 'next/image'
import ImageHover from '../imagehover'
import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import { useInViewScroll } from '../useInViewScroll'
import GalleryPhoto from './galleryphoto'

const PhotoGallery = ({ category }) => {
  const ref = useRef(null)
  const progress = useInViewScroll(ref)

  const yRange = useTransform(progress, [0, 0.5], [0, 100])

  const opacityRange = useTransform(progress, [0, 0.25], [0, 1])

  return (
    <section className="portfolio-gallery container">
      {category.photos.map((photo, p) => {
        return (
          <GalleryPhoto category={category} photo={photo} p={p} key={p} />
        )
      })}
    </section>
  )
}

export default PhotoGallery
