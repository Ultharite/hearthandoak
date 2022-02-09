import Image from "next/image"
import Link from "next/link"
import ImageHover from "../imagehover"
import Wordbounce from "../wordbounce"

const GalleryLink = ({title, src, ctatext}) => {

return (
  <ImageHover>
              <Link href={`/portfolio#${title}`} scroll={false}>
                <a className="links__action">
                  <div className="links__imgwrap">
                    <Image
                      className="links__img"
                      src={src}
                      alt={title}
                      width="560"
                      height="680"
                    />
                  </div>
                  <header className="links__header">
                    <span className="links__title"><Wordbounce triggeronce={false}>{title}</Wordbounce></span>
                    <span className="links__cta"><Wordbounce splitter='words' triggeronce={false}>{ctatext}</Wordbounce></span>
                  </header>
                </a>
              </Link>
            </ImageHover>
)

}

export default GalleryLink