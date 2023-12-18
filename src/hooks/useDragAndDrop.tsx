import { RefObject, useEffect } from 'react'
import { PositionType } from '../types'
function useDragAndDrop(
  ref: RefObject<HTMLElement>,
  setPos: (pos: PositionType) => void,
) {
  let PosX: number, PosY: number
  function onMouseMove(e: MouseEvent) {
    const delta = { x: e.pageX - PosX, y: e.pageY - PosY }
    setPos({
      x: e.pageX + delta.x,
      y: e.pageY + delta.y,
    })
  }

  function onMouseDown(e: MouseEvent) {
    document.addEventListener('mousemove', onMouseMove)

    PosX = e.clientX
    PosY = e.clientY
  }

  useEffect(() => {
    ref.current!.addEventListener('mousedown', onMouseDown)
    return () => {
      ref.current!.removeEventListener('mousedown', onMouseDown)
    }
  })
}

export { useDragAndDrop }
