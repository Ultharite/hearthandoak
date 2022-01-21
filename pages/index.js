/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'

import { useState } from 'react'

import Parallax from '../components/parallax/parallax'

import { InView } from 'react-intersection-observer'

export default function Home() {
  const [background, setBackground] = useState('light')

  return (
    <div className={`bg ${background}`}>
      <Head>
        <title>Hearth &amp; Oak</title>
        <meta name="description" content="Hearth &amp; Oak Photography Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="siteheader px-2">
          <img
            className="sitelogo"
            src="/hando-logo.webp"
            alt="Hearth &amp; Oak"
          />
          <nav>
            <ul className="navlist">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Weddings</a>
              </li>
              <li>
                <a href="#">Engagement</a>
              </li>
              <li>
                <a href="#">Families &amp; Children</a>
              </li>
            </ul>
          </nav>
          <button data-label="Book Your Session" className="btn-contact">
            Book your session
          </button>
        </header>

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
              When choosing a photographer, it should be about finding the
              person who can capture your moments in a style that aligns with
              your vision. Our photography goes far beyond just the subject,
              it&apos;s how we paint a moment in light, and capture the
              spontaneous. We create beautiful long lasting images for you to
              cherish, providing you with keepsakes to pass on for generations
              to come.
            </p>
            <button>See what we can do</button>
          </div>
          <div className="hero__imagewrap">
            <img className="flourish" src="/flourish.svg" alt="Flourish" />
            <Parallax offset={16}>
              <Image
                src="/CassieMike-1167-d9b5c0d8.webp"
                width="1024"
                height="1534"
                alt="Cassie &amp; Mike"
                placeholder="blur"
                blurDataURL="/CassieMike-1167-d9b5c0d8-blur.webp"
              />
            </Parallax>
          </div>
        </section>

        <InView
          threshold="0.5"
          onChange={(inView) => {
            inView === true ? setBackground('dark') : setBackground('light')
          }}
        >
          {({ inView, ref, entry }) => {
            return (
              <section className="about container" ref={ref}>
                <Parallax offset={-32}>
                  <div>
                    <InView threshold="0.1" triggerOnce="true">
                      {({ inView, ref, entry }) => (
                        <div className={`fade-in ${inView}`} ref={ref}>
                          <h2 className="linewidth">
                            HEARTH &amp; OAK PHOTOGRAPHY COMPANY
                          </h2>

                          <p className="linewidth">
                            We are a team of seasoned and talented photographers
                            with over 15 years of experience in all specialties
                            of photography. We capture light and life in still
                            images for you and your family to cherish for
                            generations to come. We are committed to providing
                            excellence and attention to the smallest detail of
                            the most important moments of your day.
                          </p>
                        </div>
                      )}
                    </InView>
                    <h3 className="text-align-right">
                      CLIENT STORIES &amp; JOURNIES ::
                    </h3>
                    <div className="links">
                      <a className="links__action" href="#">
                        <header>
                          <span className="links__title">Engagement</span>
                          <span className="links__cta">Start your story</span>
                        </header>
                        <div className="links__imgwrap">
                          <Image
                            className="links__img"
                            src="/links-engagement.webp"
                            alt="Engagement"
                            width="560"
                            height="680"
                          />
                        </div>
                      </a>
                      <a className="links__action" href="#">
                        <header>
                          <span className="links__title">Wedding</span>
                          <span className="links__cta">Begin your journey</span>
                        </header>
                        <div className="links__imgwrap">
                          <Image
                            className="links__img"
                            src="/links-wedding.webp"
                            alt="Wedding"
                            width="560"
                            height="680"
                          />
                        </div>
                      </a>
                      <a className="links__action" href="#">
                        <header>
                          <span className="links__title">Family</span>
                          <span className="links__cta">
                            The journey continues
                          </span>
                        </header>
                        <div className="links__imgwrap">
                          <Image
                            className="links__img"
                            src="/links-family.webp"
                            alt="Family"
                            width="560"
                            height="680"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </Parallax>
              </section>
            )
          }}
        </InView>

        <InView
          threshold="0.1"
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
            <button className="invert">Book your session</button>
          </div>
          <Image
            src="/JS-17-25026538.webp"
            layout="fill"
            objectFit="cover"
            objectPosition="right"
            alt="Reach out to us"
          />
        </section>
      </main>

      <footer className="sitefooter container">
        <span className="copyright">
          All content copyright &copy; 2022 Hearth &amp; Oak Photography Company
        </span>
      </footer>
    </div>
  )
}
