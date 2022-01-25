/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useState } from 'react'

const GlobalContext = React.createContext(true)

import Drawer from '../components/drawer/drawer'
import Button from '../components/button/button'
import Link from 'next/link'
import useMouse from '@react-hook/mouse-position'

const Layout = ({children}) => {

  const [drawerOpened, setDrawerOpened] = useState(false)
  const toggleDrawer = () => {
    setDrawerOpened(!drawerOpened)
  }

  const setOverButtonTrue = () => { setOverButton(true) }
  const setOverButtonFalse = () => { setOverButton(false) }

  const [overButton, setOverButton] = useState(false)

  const ref = React.useRef(null)

  const mouse = useMouse(ref)

  const styles = {
    transform: `translate(${mouse.pageX}px, ${mouse.pageY}px)`,
  }

  return (
    <GlobalContext.Provider value={{drawerOpened, toggleDrawer, overButton, setOverButton, setOverButtonTrue, setOverButtonFalse}}>
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
                <Link href="/">
                <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/#about-us">
                <a>About Us</a>
                </Link>
              </li>
              <li className="parent">
                <Link href="/portfolio"><a>Portfolio</a></Link>
              </li>
              <li>
                <Link href="/"><a>Weddings</a></Link>
              </li>
              <li>
                <Link href="/"><a>Engagement</a></Link>
              </li>
              <li>
                <Link href="/"><a>Families &amp; Children</a></Link>
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
    <Drawer title="Book a session">
        <p className="linewidth">
          So... you made it to the contact page. That&apos;s wonderful and
          exciting! Simply fill out the form below and we will promptly get back
          to you so we can start discussing all of the details for your big day,
          and start making memories together. We are looking forward to hearing
          from you so don&apos;t be shy, drop us a line.
        </p>
      </Drawer>
    {children}
    </main>
    </GlobalContext.Provider>
  )
}

export {GlobalContext}

export default Layout