import { GlobalContext } from '../../pages/_layout'

import React from 'react'

import Link from 'next/link'

const Button = ({ className, children, onClick, asLink, href }) => {
  const { setOverButtonTrue, setOverButtonFalse } =
    React.useContext(GlobalContext)

  if (asLink === true) {
    return (
      <Link href={href}>
        <a
          onMouseEnter={setOverButtonTrue}
          onMouseLeave={setOverButtonFalse}
          className={className}
        >
          {children}
        </a>
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={setOverButtonTrue}
      onMouseLeave={setOverButtonFalse}
      className={className}
    >
      {children}
    </button>
  )
}

export default Button
