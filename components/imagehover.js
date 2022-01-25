import React from "react"
import { GlobalContext } from "../pages/_layout"

const ImageHover = ({children}) => {

  const {overButton, setOverButtonTrue, setOverButtonFalse} = React.useContext(GlobalContext)
  
 return <div className="test" onMouseOver={setOverButtonTrue} onMouseLeave={setOverButtonFalse}>{children}</div>
}

export default ImageHover