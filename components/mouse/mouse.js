import { useEffect, useState } from 'react'

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