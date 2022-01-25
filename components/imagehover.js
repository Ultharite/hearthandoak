import React from 'react'
import { GlobalContext } from '../pages/_layout'

const ImageHover = ({ children }) => {
  const { setOverButtonTrue, setOverButtonFalse } =
    React.useContext(GlobalContext)

  return (
    <div
      className="no-hover"
      onMouseOver={setOverButtonTrue}
      onMouseLeave={setOverButtonFalse}
    >
      {children}
    </div>
  )
}

export default ImageHover
