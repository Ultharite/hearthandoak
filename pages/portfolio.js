import Image from 'next/image'

import ParallaxPlus from '../components/parallax/ParallaxPlus'

import Button from '../components/button/button'

import { useState, useRef, useEffect, useContext } from 'react'
import Head from 'next/head'

import PhotoGallery from '../components/photogallery/photogallery'

import { GlobalContext } from './_layout'

import { InView } from 'react-intersection-observer'

import { motion } from 'framer-motion'

import Wordbounce from '../components/wordbounce'

import GalleryLink from '../components/gallerylink/gallerylink'

import Parallaxer from '../components/parallax/parallaxer'

const Portfolio = () => {
  const [background, setBackground] = useState('light')

  const [headerInView, setHeaderInView] = useState(null)

  const setBackgroundColor = (isinview) => {
    setHeaderInView(isinview)
    isinview == true ? setBackground('light') : setBackground('dark')
  }

  const { toggleDrawer } = useContext(GlobalContext)

  const engagement = {
    name: 'engagement',
    photos: [
      'DHC_8063-72f096bb.webp',
      'DSC_9977-51814f3e.webp',
      'Perrone_Engagement-64-5f04c7fe.webp',
      'MAC_5129-8e838aa8.webp',
      'AugustEpics-77-036a301c.webp',
      'AugustEpics-25-930e6532.webp',
    ],
  }

  const wedding = {
    name: 'wedding',
    photos: [
      'JS-47-889f2d9d.webp',
      'JDWEDFINAL-2246-4b998afb.webp',
      'Diana_Dan_Wedding-319-c75e964f.webp',
      'DCP_3403-a7831de8.webp',
      'DCP_1562-8c12dc16.webp',
      'CassieMike-1172-1153e065.webp',
    ],
  }

  const family = {
    name: 'family',
    photos: [
      'AJ-23-7a7f7dd3.webp',
      'Emily_2015-24-b72b70b1.webp',
      'Giannone-50-8a62365b.webp',
      'James_and_caroline-3-aae12c14.webp',
      'Melissa_Lott-14-4aad8a10.webp',
      'Meyers_Maternity-33-904e369b.webp',
    ],
  }

  return (
    <main className={`page ${background}`}>
      <Head>
        <title>Hearth &amp; Oak | Portfolio</title>
        <meta
          name="description"
          content="Hearth &amp; Oak Photography Company"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header container">
        <h1>Portfolio</h1>
        <h2>SOME OF OUR CLIENT&apos;S STORIES &amp; JOURNEY</h2>
        <p className="linewidth">
          This is where you get to see the goods... what we&apos;re all about.
          Take a moment, browse the galleries, and imagine yourselves captured
          in these timeless moments while we document your story and your
          journey together through this thing we call life.
        </p>
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
      </header>

      <section
        id="Engagement"
        className={`container portfolio-section grid gap-2`}
      >
        <header className="portfolio-header">
          <h2 className="portfolio-titles">
            <Wordbounce>Engagement</Wordbounce>
          </h2>
          <p className="linewidth">
            <strong>Your story starts here.</strong> When you make the decision
            to take the plunge, the memories begin. Professionally shot photos
            are the best way to create invites to your big day!
          </p>
        </header>
        <div className="portfolio-photowrap py-2">
          <Parallaxer className="square">
            <Image
              src="/photos/square-engagement.webp"
              alt="Engagement"
              layout="fill"
              objectFit="cover"
              objectPosition={'right'}
            />
          </Parallaxer>
        </div>
      </section>

      <PhotoGallery category={engagement}></PhotoGallery>
      <section className="portfolio-cta container">
        <div className="portfolio-cta__inner">
          <h2><Wordbounce splitter='words'>Your story starts here.</Wordbounce></h2>
          <p>We would love to capture the moment!</p>
          <Button onClick={toggleDrawer}>Book a session</Button>
        </div>
      </section>

      <section
        id="Weddings"
        className={`container portfolio-section grid gap-2`}
      >
        <header className="portfolio-header">
          <h2 className="portfolio-titles">
            <Wordbounce>Weddings</Wordbounce>
          </h2>
          <p className="linewidth">
            As a photographer my goal is to make your big day the most
            memorable, and to capture every moment as it happens. We work the
            whole day from the preparation to the, limo rides to the reception
            and make sure that every memory is saved in the best possible color
            and light. <strong>To tell your story for years to come.</strong>
          </p>
        </header>
        <div className="portfolio-photowrap py-2">
          <Parallaxer className="square">
            <Image
              src="/photos/square-wedding.webp"
              alt="Wedding"
              layout="fill"
              objectFit="cover"
              objectPosition={'right'}
            />
          </Parallaxer>
        </div>
      </section>

      <PhotoGallery category={wedding}></PhotoGallery>
      <section className="portfolio-cta container">
        <div className="portfolio-cta__inner">
          <h2><Wordbounce splitter='words'>Tell your story for years to come.</Wordbounce></h2>
          <p>We would love to capture the moment!</p>
          <Button onClick={toggleDrawer}>Book a session</Button>
        </div>
      </section>

      <section id="Family" className={`container portfolio-section grid gap-2`}>
        <header className="portfolio-header">
          <h2 className="portfolio-titles">
            <Wordbounce>Family</Wordbounce>
          </h2>
          <p className="linewidth">
            <strong>Where the journey takes you</strong> we are there to capture
            the moment, freeze it in time and deliver you the best possible
            quality photographs to keep for years to come.
          </p>
        </header>
        <div className="portfolio-photowrap py-2">
          <Parallaxer className="square">
            <Image
              src="/photos/square-family.webp"
              alt="family"
              layout="fill"
              objectFit="cover"
              objectPosition={'right'}
            />
          </Parallaxer>
        </div>
      </section>

      <PhotoGallery category={family}></PhotoGallery>
      <section className="portfolio-cta container">
        <div className="portfolio-cta__inner">
          <h2><Wordbounce splitter='words'>Where the journey takes you...</Wordbounce></h2>
          <p>We would love to capture the moment!</p>
          <Button onClick={toggleDrawer}>Book a session</Button>
        </div>
      </section>
    </main>
  )
}

export default Portfolio
