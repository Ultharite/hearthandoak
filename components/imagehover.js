import React from 'react'
import { GlobalContext } from '../pages/_layout'

const ImageHover = ({ children, perspective }) => {
  const { setOverButtonTrue, setOverButtonFalse } =
    React.useContext(GlobalContext)

  return (
    <div
      className="no-hover"
      onMouseOver={setOverButtonTrue}
      onMouseLeave={setOverButtonFalse}
      style={{perspective: perspective}}
    >
      {children}
    </div>
  )
}

export default ImageHover
