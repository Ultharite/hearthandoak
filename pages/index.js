/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import Drawer from '../components/drawer/drawer'
import Parallax from '../components/parallax/parallax'
import { InView } from 'react-intersection-observer'
import { GlobalContext } from '../pages/_layout'
import React from 'react'
import Button from '../components/button/button'
import { useState } from 'react'
import useMouse from '@react-hook/mouse-position'

export default function Home() {
  const [background, setBackground] = useState('light')

  const { toggleDrawer, overButton, setOverButton } =
    React.useContext(GlobalContext)

  const ref = React.useRef(null)

  const mouse = useMouse(ref)

  const styles = {
    transform: `translate(${mouse.pageX}px, ${mouse.pageY}px)`,
  }

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

      <Drawer title="Book a session">
        <p className="linewidth">
          So... you made it to the contact page. That&apos;s wonderful and
          exciting! Simply fill out the form below and we will promptly get back
          to you so we can start discussing all of the details for your big day,
          and start making memories together. We are looking forward to hearing
          from you so don&apos;t be shy, drop us a line.
        </p>
      </Drawer>

      <main className="site-main" ref={ref}>
        <div
          className={`cursor ${mouse.isOver} overButton-${overButton}`}
          style={styles}
        ></div>
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
          <Button
            data-label="Book Your Session"
            className="btn-contact"
            onClick={toggleDrawer}
          >
            Book your session
          </Button>
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
            <Button>See what we can do</Button>
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
                          <span className="links__cta">
                            The journey continues
                          </span>
                        </header>
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
            <Button className="invert">Book your session</Button>
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
