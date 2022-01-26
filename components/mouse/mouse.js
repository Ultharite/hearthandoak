import { useEffect, useState } from 'react'
import useMouse from '@react-hook/mouse-position'


/*
const useMouseX = () => {
  const [mouse, setMouse] = useState()

  useEffect(() => {
    const handleMouseEvent = (event) => {
      const { clientX, clientY, screenX, screenY, pageX, pageY } = event
      setMouse({
        position: {
          client: { x: clientX, y: clientY },
          page: { x: pageX, y: pageY },
          screen: { x: screenX, y: screenY },
        },
      })
    }

    document.addEventListener('mousemove', handleMouseEvent)
    return () => {
      document.removeEventListener('mousemove', handleMouseEvent)
    }
  }, [])
  return mouse
}

export default useMouseX

*/