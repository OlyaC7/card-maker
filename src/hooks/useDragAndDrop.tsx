import { RefObject, useRef, useEffect } from 'react'
import { PositionType } from '../types'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useDragAndDrop(ref: RefObject<HTMLElement>, onMove: any) {
  const startPos = useRef({
    x: 0,
    y: 0,
  })
  function onMouseMove(mouseMoveEvent: MouseEvent) {
    const delta: PositionType = {
      x: mouseMoveEvent.clientX - startPos.current.x,
      y: mouseMoveEvent.clientY - startPos.current.y,
    }
    onMove(delta)
  }
  function onMouseUp() {
    startPos.current.x = 0
    startPos.current.y = 0

    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  function onMouseDown(mouseDownEvent: MouseEvent) {
    if (mouseDownEvent.defaultPrevented) {
      return
    }
    startPos.current.x = mouseDownEvent.clientX
    startPos.current.y = mouseDownEvent.clientY
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    mouseDownEvent.preventDefault()
  }

  useEffect(() => {
    ref.current!.addEventListener('mousedown', onMouseDown)
    return () => {
      ref.current!.removeEventListener('mousedown', onMouseDown)
    }
  })
}
export { useDragAndDrop }
