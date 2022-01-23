import React from 'react'
import { useState } from 'react'

const GlobalContext = React.createContext(true)

const Layout = ({children}) => {

  const [drawerOpened, setDrawerOpened] = useState(false)
  const toggleDrawer = () => {
    setDrawerOpened(!drawerOpened)
  }

  const setOverButtonTrue = () => { setOverButton(true) }
  const setOverButtonFalse = () => { setOverButton(false) }

  const [overButton, setOverButton] = useState(false)

  return (
    <GlobalContext.Provider value={{drawerOpened, toggleDrawer, overButton, setOverButton, setOverButtonTrue, setOverButtonFalse}}>{children}</GlobalContext.Provider>
  )
}

export {GlobalContext}

export default Layout