import ImageHover from '../components/imagehover'
import Image from 'next/image'

import ParallaxPlus from '../components/parallax/ParallaxPlus'

import { useState } from 'react'
import Head from 'next/head'

import { InView } from 'react-intersection-observer'

const Portfolio = () => {
  const [background, setBackground] = useState('light')

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
      </header>

      <div className="links container">
        <ImageHover>
          <a className="links__action" href="#">
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
          <a className="links__action" href="#">
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
          <a className="links__action" href="#">
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

      <InView
        threshold="0.1"
        onChange={(inView, ref) => {
          inView === true ? setBackground('dark') : setBackground('light')
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
                    <ParallaxPlus>
                      <Image
                        className="pa"
                        src="/JS-17-25026538.webp"
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

          <InView threshold="0.1">
            {({ inView, ref, entry }) => {
              const title = 'Wedding'
              const titleSplit = title.split('').map((letter, l) => {
                return <span key={l}>{letter}</span>
              })

              return (
                <section
                  ref={ref}
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
                    <ParallaxPlus>
                      <Image
                        className="pa"
                        src="/JS-17-25026538.webp"
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

          <InView threshold="0.1">
            {({ inView, ref, entry }) => {
              const title = 'Family'
              const titleSplit = title.split('').map((letter, l) => {
                return <span key={l}>{letter}</span>
              })

              return (
                <section
                  ref={ref}
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
                    <ParallaxPlus>
                      <Image
                        className="pa"
                        src="/JS-17-25026538.webp"
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
        </div>
      </InView>
    </main>
  )
}

export default Portfolio
