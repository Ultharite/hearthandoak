import Link from 'next/link'
import Button from '../button/button'
import React, { useState } from 'react'
import { GlobalContext } from '../../pages/_layout'

const Navigation = () => {
  const { toggleDrawer } = React.useContext(GlobalContext)

  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <nav className={`navigation ${navOpen == true ? 'opened' : 'closed'}`}>
      <Button className="nav__toggle" onClick={toggleNav}>
        O
      </Button>
      <ul className="navlist">
        <li>
          <Link href="/">
            <a onClick={toggleNav}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#about-us">
            <a onClick={toggleNav}>About Us</a>
          </Link>
        </li>
        <li className="parent">
          <Link  href="/portfolio">
            <a onClick={toggleNav}>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a onClick={toggleNav}>Weddings</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a onClick={toggleNav}>Engagement</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a onClick={toggleNav}>Families &amp; Children</a>
          </Link>
        </li>
        <li className="has-button">
          <Button
            data-label="Book Your Session"
            className="btn-contact"
            onClick={toggleDrawer}
          >
            Book your session
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
