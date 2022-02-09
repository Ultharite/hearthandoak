/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import { InView } from 'react-intersection-observer'
import { GlobalContext } from '../pages/_layout'
import Button from '../components/button/button'
import { useContext, useRef } from 'react'
import Parallaxer from '../components/parallax/parallaxer'
import Wordbounce from '../components/wordbounce'

import ImageHover from '../components/imagehover'

import GalleryLink from '../components/gallerylink/gallerylink'
import HProgress from '../components/hprogress'

export default function Home() {
  const { toggleDrawer } = useContext(GlobalContext)

  return (
    <div>
      <Head>
        <title>Hearth &amp; Oak</title>
        <meta
          name="description"
          content="Hearth &amp; Oak Photography Company"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="newhero">
        

        

        

        

        <div className="newhero__img">
          <Parallaxer yMin={0} yMax={64} className="heroimg">
            <Image
              src="/CassieMike-1167-d9b5c0d8sq.webp"
              layout="fill"
              alt="Cassie &amp; Mike"
              loading="eager"
            />
          </Parallaxer>
        </div>

        <Wordbounce
          className="newhero__slogan"
          splitter="words"
          triggeronce={false}
          speed={0.6}
        >
          Each moment tells a story.
        </Wordbounce>

        <div className="newhero__content">
          <div className="newhero__text">
          <h2>Capturing the moment is what we do.</h2>
            <p>
              When choosing a photographer, it should be about finding the
              person who can capture your moments in a style that aligns with
              your vision. Our photography goes far beyond just the subject,
              it&apos;s how we paint a moment in light, and capture the
              spontaneous. We create beautiful long lasting images for you to
              cherish, providing you with keepsakes to pass on for generations
              to come.
            </p>
          </div>
        </div>
      </section>


<section className="py-4">
  <Parallaxer scaling={true} className="scaler"><img src="/hando-leaf.webp" alt="Hearth &amp; Oak" /></Parallaxer>
  <HProgress />
</section>

      <section className="about container" id="about-us">
        <div className="grid">
          <h2 className="linewidth">
            <Wordbounce splitter="words">
              HEARTH &amp; OAK PHOTOGRAPHY COMPANY
            </Wordbounce>
          </h2>
          <div>
            <p className="linewidth">
              We are a team of seasoned and talented photographers with over 15
              years of experience in all specialties of photography. We capture
              light and life in still images for you and your family to cherish
              for generations to come. We are committed to providing excellence
              and attention to the smallest detail of the most important moments
              of your day.
            </p>
            <Button onClick={toggleDrawer}>Get in touch</Button>
          </div>
        </div>
        <h3 className="text-align-right">
          <Wordbounce splitter="words">
            CLIENT STORIES &amp; JOURNIES ::
          </Wordbounce>
        </h3>
        <div className="links">
          <GalleryLink
            src="/links-engagement.webp"
            title="Engagement"
            ctatext="Start your story"
          />

          <GalleryLink
            src="/links-wedding.webp"
            title="Wedding"
            ctatext="Begin your journey"
          />

          <GalleryLink
            src="/links-family.webp"
            title="Family"
            ctatext="The journey continues"
          />
        </div>
      </section>

      <section className="py-4">
  <HProgress />
</section>

      <blockquote className="p-2 container">
        <Wordbounce splitter="words" triggeronce={false}>
          &ldquo;I would find you in any lifetime.&rdquo;
        </Wordbounce>
        <cite>&mdash; Kanye West</cite>
      </blockquote>

      <section className="py-4">
  <HProgress />
</section>

      <section className="bottomcta">
        <div className="container">
          <h2>Reach Out To Us</h2>
          <h3>Start telling your story today.</h3>
          <Button onClick={toggleDrawer}>Book your session</Button>
        </div>
        <Image
          src="/JS-17-25026538.webp"
          layout="fill"
          objectFit="cover"
          objectPosition="right"
          alt="Reach out to us"
        />
      </section>
    </div>
  )
}
