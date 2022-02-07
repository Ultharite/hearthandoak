import useMouse from '@react-hook/mouse-position'
import React, { useContext, forwardRef } from 'react'
import { GlobalContext } from '../../pages/_layout'

const Cursor = forwardRef((props, ref) => {
  //const mouse = useMouse(ref)

  const mouse = useMouse(ref)

  const { overButton } = useContext(GlobalContext)

  const styles = null

  if (ref.current) {
  styles = {
    transform: `translate(${mouse.pageX < ref.current.clientWidth - 68 ? mouse.pageX : ref.current.clientWidth - 68}px, ${mouse.pageY}px)`,
  }
  }
  
  return (
    <div
      className={`cursor ${mouse.isOver} overButton-${overButton}`}
      style={styles}
    ></div>
  )
})

Cursor.displayName = 'Cursor'

export default Cursor
