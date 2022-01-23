import { GlobalContext } from "../../pages/_layout"

import React from "react"

const Button = ({className, children, onClick}) => {

  const {overButton, setOverButtonTrue, setOverButtonFalse} = React.useContext(GlobalContext)

  return (
    <button onClick={onClick} onMouseEnter={setOverButtonTrue} onMouseLeave={setOverButtonFalse} className={className}>{children}</button>
  )

}

export default Button