import ParallaxPlus from "../parallax/ParallaxPlus"
import Image from "next/image"
import ImageHover from "../imagehover"
import { motion } from "framer-motion"

const PhotoGallery = ({ category }) => {

    return (
      <section className="portfolio-gallery">
        {category.photos.map((photo, p) => {
          return (
            <ParallaxPlus yMin={0} yMax={0} rotateXMin={1} scaleMin={0.9} stiffness={100} key={p}>
              <ImageHover>
                <motion.div
              
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="photo-gallery-img"
                >
                  <Image
                    src={`/photos/${category.name}/${photo}`}
                    width="1000"
                    height="668"
                    alt={category[p]}
                  ></Image>
                </motion.div>
              </ImageHover>
            </ParallaxPlus>
          )
        })}
      </section>
    )
  }

  export default PhotoGallery