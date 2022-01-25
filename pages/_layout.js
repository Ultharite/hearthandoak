/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useState } from 'react'

const GlobalContext = React.createContext(true)

import Drawer from '../components/drawer/drawer'
import Button from '../components/button/button'
import useMouse from '@react-hook/mouse-position'
import ImageHover from '../components/imagehover'
import Navigation from '../components/navigation/navigation'

const Layout = ({ children }) => {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const toggleDrawer = () => {
    setDrawerOpened(!drawerOpened)
  }

  const setOverButtonTrue = () => {
    setOverButton(true)
  }
  const setOverButtonFalse = () => {
    setOverButton(false)
  }

  const [overButton, setOverButton] = useState(false)

  const ref = React.useRef(null)

  const mouse = useMouse(ref)

  const styles = {
    transform: `translate(${mouse.pageX}px, ${mouse.pageY}px)`,
  }

  return (
    <GlobalContext.Provider
      value={{
        drawerOpened,
        toggleDrawer,
        overButton,
        setOverButton,
        setOverButtonTrue,
        setOverButtonFalse,
      }}
    >
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
          <Navigation />
        </header>
        <Drawer title="Book a session">
          <p className="linewidth">
            So... you made it to the contact page. That&apos;s wonderful and
            exciting! Simply fill out the form below and we will promptly get
            back to you so we can start discussing all of the details for your
            big day, and start making memories together. We are looking forward
            to hearing from you so don&apos;t be shy, drop us a line.
          </p>
          <ImageHover>
            <form className="contactform">
              <div className="contactform__block">
                <label htmlFor="name">Your Name :</label>
                <input id="name"></input>
              </div>
              <div className="contactform__block">
                <label htmlFor="name">Your Email :</label>
                <input id="name"></input>
              </div>
              <div className="contactform__block">
                <label htmlFor="sessiontype">
                  What type of session are you looking for?
                </label>
                <div className="radiogroup">
                  <input id="a" value="wedding" type="radio" />
                  Wedding
                  <input id="b" value="engagement" type="radio" />
                  Engagement
                  <input id="c" value="family" type="radio" />
                  Family
                  <input id="d" value="seniors" type="radio" />
                  Seniors
                  <input id="e" value="event" type="radio" />
                  Event
                </div>
              </div>
              <div className="contactform__block">
                <label htmlFor="name">What would you like to discuss? :</label>
                <textarea id="name"></textarea>
              </div>
              <Button>Send Message</Button>
            </form>
          </ImageHover>
        </Drawer>
        {children}
      </main>
    </GlobalContext.Provider>
  )
}

export { GlobalContext }

export default Layout
