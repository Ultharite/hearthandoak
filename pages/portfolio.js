import ImageHover from '../components/imagehover'
import Image from 'next/image'

import ParallaxPlus from '../components/parallax/ParallaxPlus'

import Button from '../components/button/button'

import React, { useState } from 'react'
import Head from 'next/head'

import PhotoGallery from '../components/photogallery/photogallery'

import { GlobalContext } from './_layout'

import { InView } from 'react-intersection-observer'

const Portfolio = () => {
  const [background, setBackground] = useState('light')

  const [headerInView, setHeaderInView] = useState(null)

  const setBackgroundColor = (isinview) => {
    setHeaderInView(isinview)
    isinview == true ? setBackground('light') : setBackground('dark')
  }

  const { toggleDrawer } = React.useContext(GlobalContext)

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

      <InView
        threshold="0.01"
        onChange={(inView, ref) => {
          setBackgroundColor(inView)
        }}
      >
      <header className="header container">
        <h1>Portfolio</h1>
        <h2>SOME OF OUR CLIENT&apos;S STORIES &amp; JOURNEY</h2>
        <p className="linewidth">
          This is where you get to see the goods... what we&apos;re all about.
          Take a moment, browse the galleries, and imagine yourselves captured
          in these timeless moments while we document your story and your
          journey together through this thing we call life.
        </p>
      </header>

      <div className="links container">
        <ImageHover>
          <a className="links__action" href="#engagement">
            <div className="links__imgwrap">
              <Image
                className="links__img"
                src="/links-engagement.webp"
                alt="Engagement"
                width="560"
                height="680"
              />
            </div>
            <header className="links__header">
              <span className="links__title">Engagement</span>
              <span className="links__cta">Start your story</span>
            </header>
          </a>
        </ImageHover>
        <ImageHover>
          <a className="links__action" href="#wedding">
            <div className="links__imgwrap">
              <Image
                className="links__img"
                src="/links-wedding.webp"
                alt="Wedding"
                width="560"
                height="680"
              />
            </div>
            <header className="links__header">
              <span className="links__title">Wedding</span>
              <span className="links__cta">Begin your journey</span>
            </header>
          </a>
        </ImageHover>
        <ImageHover>
          <a className="links__action" href="#family">
            <div className="links__imgwrap">
              <Image
                className="links__img"
                src="/links-family.webp"
                alt="Family"
                width="560"
                height="680"
              />
            </div>
            <header className="links__header">
              <span className="links__title">Family</span>
              <span className="links__cta">The journey continues</span>
            </header>
          </a>
        </ImageHover>
      </div>
      </InView>

      <InView
        threshold="0.01"
        onChange={(inView, ref) => {
          inView === true && headerInView == false ? setBackground('dark') : setBackground('light')
        }}
      >
        <div>
          <InView threshold="0.1">
            {({ inView, ref, entry }) => {
              const title = 'Engagement'
              const titleSplit = title.split('').map((letter, l) => {
                return <span key={l}>{letter}</span>
              })

              return (
                <section
                  ref={ref}
                  id="engagement"
                  className={`container portfolio-section grid gap-2 ${inView}`}
                >
                  <header className="portfolio-header">
                    <h2 className="portfolio-title">{titleSplit}</h2>
                    <p className="linewidth">
                      <strong>Your story starts here.</strong> When you make the
                      decision to take the plunge, the memories begin.
                      Professionally shot photos are the best way to create
                      invites to your big day!
                    </p>
                  </header>
                  <div className="portfolio-photowrap py-2">
                    <ParallaxPlus className="square">
                      <Image
                        theClass="square"
                        src="/photos/square-engagement.webp"
                        alt="Engagement"
                        layout="fill"
                        objectFit="cover"
                        objectPosition={'right'}
                      />
                    </ParallaxPlus>
                  </div>
                </section>
              )
            }}
          </InView>

          <PhotoGallery category={engagement}></PhotoGallery>

          <section className="portfolio-cta container">
          <div className="portfolio-cta__inner">
          <h2>Your story starts here.</h2>
          <p>We would love to capture the moment!</p>
          <Button onClick={toggleDrawer}>Book a session</Button></div>
          </section>

          <InView threshold="0.1">
            {({ inView, ref, entry }) => {
              const title = 'Wedding'
              const titleSplit = title.split('').map((letter, l) => {
                return <span key={l}>{letter}</span>
              })

              return (
                <section
                  ref={ref}
                  id="weddings"
                  className={`container portfolio-section grid gap-2 ${inView}`}
                >
                  <header className="portfolio-header">
                    <h2 className="portfolio-title">{titleSplit}</h2>
                    <p className="linewidth">
                      As a photographer my goal is to make your big day the most
                      memorable, and to capture every moment as it happens. We
                      work the whole day from the preparation to the, limo rides
                      to the reception and make sure that every memory is saved
                      in the best possible color and light.{' '}
                      <strong>To tell your story for years to come.</strong>
                    </p>
                  </header>
                  <div className="portfolio-photowrap py-2">
                    <ParallaxPlus className="square">
                      <Image
                        className="pa"
                        src="/photos/square-wedding.webp"
                        alt="Wedding"
                        layout="fill"
                        objectFit="cover"
                        objectPosition={'right'}
                      />
                    </ParallaxPlus>
                  </div>
                </section>
              )
            }}
          </InView>

          <PhotoGallery category={wedding}></PhotoGallery>

          <section className="portfolio-cta container">
          <div className="portfolio-cta__inner">
          <h2>Tell your story for years to come.</h2>
          <p>We would love to capture the moment!</p>
          <Button onClick={toggleDrawer}>Book a session</Button></div>
          </section>

          <InView threshold="0.1">
            {({ inView, ref, entry }) => {
              const title = 'Family'
              
              const titleSplit = title.split('').map((letter, l) => {
                return <span key={l}>{letter}</span>
              })

              return (
                <section
                  ref={ref}
                  id="family"
                  className={`container portfolio-section grid gap-2 ${inView}`}
                >
                  <header className="portfolio-header">
                    <h2 className="portfolio-title">{titleSplit}</h2>
                    <p className="linewidth">
                      <strong>Where the journey takes you</strong> we are there
                      to capture the moment, freeze it in time and deliver you
                      the best possible quality photographs to keep for years to
                      come.
                    </p>
                  </header>
                  <div className="portfolio-photowrap py-2">
                    <ParallaxPlus className="square">
                      <Image
                        className="pa"
                        src="/photos/square-family.webp"
                        alt="family"
                        layout="fill"
                        objectFit="cover"
                        objectPosition={'right'}
                      />
                    </ParallaxPlus>
                  </div>
                </section>
              )
            }}
          </InView>

          <PhotoGallery category={family}></PhotoGallery>

          <section className="portfolio-cta container">
          <div className="portfolio-cta__inner">
          <h2>Where the journey takes you...</h2>
          <p>We would love to capture the moment!</p>
          <Button onClick={toggleDrawer}>Book a session</Button></div>
          </section>
        </div>
      </InView>
    </main>
  )
}

export default Portfolio
