import { GlobalContext } from "../../pages/_layout"
import React from "react"

import Button from "../button/button"

const Drawer = ({children, title}) => {

  const {drawerOpened, toggleDrawer} = React.useContext(GlobalContext)

  if (drawerOpened === true) {
    return (
      <section className={`drawer ${drawerOpened}`}>
        <div className="drawer__inner">
          <header className="drawer__header">
          <h2>{title}</h2>
          <Button className="btn-close" onClick={toggleDrawer}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"/></svg></Button>
          </header>
          {children}
        </div>
      </section>
    )
  }

  return null
}

export default Drawer
