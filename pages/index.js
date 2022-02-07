/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import { InView } from 'react-intersection-observer'
import { GlobalContext } from '../pages/_layout'
import Button from '../components/button/button'
import { useContext, useRef } from 'react'
import Parallaxer from '../components/parallax/parallaxer'

import ImageHover from '../components/imagehover'

import GalleryLink from '../components/gallerylink/gallerylink'

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

      <section className="hero grid">
        <div className="hero__text">
          <InView>
            {({ inView, ref, entry }) => (
              <span ref={ref} className={`hero__title ${inView}`}>
                <span>Each</span> <span>MOMENT</span>
                <br />
                <span>tells</span> <span>a</span> <span>STORY.</span>
              </span>
            )}
          </InView>

          <p>
            <em>Capturing the moment is what we do.</em>
          </p>
          <p>
            When choosing a photographer, it should be about finding the person
            who can capture your moments in a style that aligns with your
            vision. Our photography goes far beyond just the subject, it&apos;s
            how we paint a moment in light, and capture the spontaneous. We
            create beautiful long lasting images for you to cherish, providing
            you with keepsakes to pass on for generations to come.
          </p>

          <Button asLink={true} href="/portfolio" className="button">
            See what we can do
          </Button>
        </div>
        <ImageHover>
          <div className="hero__imagewrap">
            <img className="flourish" src="/flourish.svg" alt="Flourish" />
            <Parallaxer yMax={-64} className="heroimg">
              <Image
                src="/CassieMike-1167-d9b5c0d8.webp"
                width="1024"
                height="1534"
                alt="Cassie &amp; Mike"
                loading="eager"
              />
            </Parallaxer>
          </div>
        </ImageHover>
      </section>

      <section className="about container" id="about-us">

            <h2 className="linewidth">HEARTH &amp; OAK PHOTOGRAPHY COMPANY</h2>

            <p className="linewidth">
              We are a team of seasoned and talented photographers with over 15
              years of experience in all specialties of photography. We capture
              light and life in still images for you and your family to cherish
              for generations to come. We are committed to providing excellence
              and attention to the smallest detail of the most important moments
              of your day.
            </p>
          <h3 className="text-align-right">CLIENT STORIES &amp; JOURNIES ::</h3>
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

      <blockquote className="p-2 container">
        &ldquo;I would find you in any lifetime.&rdquo;
        <cite>&mdash; Kanye West</cite>
      </blockquote>

      <section className="bottomcta">
        <div className="container">
          <h2>Reach Out To Us</h2>
          <h3>Start telling your story today.</h3>
          <Button className="invert" onClick={toggleDrawer}>
            Book your session
          </Button>
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
