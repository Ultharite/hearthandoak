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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
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

          <ul>
          <li>
          <Link href="/portfolio#Engagement" scroll={false}>
            <a onClick={toggleNav}>Engagement</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio#Weddings" scroll={false}>
            <a onClick={toggleNav}>Weddings</a>
          </Link>
        </li>
        
        <li>
          <Link href="/portfolio#Family" scroll={false}>
            <a onClick={toggleNav}>Families &amp; Children</a>
          </Link>
        </li>
          </ul>
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

/*



        <li>
          <Link href="/portfolio#engagement">
            <a onClick={toggleNav}>Engagement</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio#weddings">
            <a onClick={toggleNav}>Weddings</a>
          </Link>
        </li>
        
        <li>
          <Link href="/portfolio#family">
            <a onClick={toggleNav}>Families &amp; Children</a>
          </Link>
        </li>
        

        */