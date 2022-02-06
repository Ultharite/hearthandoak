/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import Parallax from '../components/parallax/parallax'
import { InView } from 'react-intersection-observer'
import { GlobalContext } from '../pages/_layout'
import Button from '../components/button/button'
import { useState, useContext } from 'react'
import Parallaxer from '../components/parallax/parallaxer'


import ImageHover from '../components/imagehover'

export default function Home() {
  const [background, setBackground] = useState('light')

  const { toggleDrawer } = useContext(GlobalContext)

  return (
    <div className={`bg ${background}`}>
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
            <Parallaxer
              yMax={-64}
              className='heroimg'
              >
              <Image
                src="/CassieMike-1167-d9b5c0d8.webp"
                width="1024"
                height="1534"
                alt="Cassie &amp; Mike"
                placeholder="blur"
                blurDataURL="/CassieMike-1167-d9b5c0d8-blur.webp"
                loading='eager'
              />
            </Parallaxer>
          </div>
        </ImageHover>
      </section>

      <InView
        threshold="0.5"
        onChange={(inView) => {
          inView === true ? setBackground('dark') : setBackground('light')
        }}
      >
        {({ inView, ref, entry }) => {
          return (
            <section className="about container" id="about-us" ref={ref}>
                <div>
                  <InView threshold="0.1" triggerOnce="true">
                    {({ inView, ref, entry }) => (
                      <div className={`fade-in ${inView}`} ref={ref}>
                        <h2 className="linewidth">
                          HEARTH &amp; OAK PHOTOGRAPHY COMPANY
                        </h2>

                        <p className="linewidth">
                          We are a team of seasoned and talented photographers
                          with over 15 years of experience in all specialties of
                          photography. We capture light and life in still images
                          for you and your family to cherish for generations to
                          come. We are committed to providing excellence and
                          attention to the smallest detail of the most important
                          moments of your day.
                        </p>
                      </div>
                    )}
                  </InView>
                  <h3 className="text-align-right">
                    CLIENT STORIES &amp; JOURNIES ::
                  </h3>
                  <div className="links">
                    <ImageHover>
                      <a className="links__action" href="/portfolio#engagement">
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
                      <a className="links__action" href="/portfolio#wedding">
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
                      <a className="links__action" href="/portfolio#family">
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
                          <span className="links__cta">
                            The journey continues
                          </span>
                        </header>
                      </a>
                    </ImageHover>
                  </div>
                </div>
            </section>
          )
        }}
      </InView>

      <InView
        threshold="0.01"
        onChange={(inView) => {
          inView === true ? setBackground('light') : setBackground('dark')
        }}
      >
        {({ inView, ref, entry }) => {
          return (
            <blockquote className="p-2 container" ref={ref}>
              &ldquo;I would find you in any lifetime.&rdquo;
              <cite>&mdash; Kanye West</cite>
            </blockquote>
          )
        }}
      </InView>

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
