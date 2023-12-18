import { RefObject, useEffect } from "react"
import { PositionType } from "../types"

function useDragAndDrop(ref: RefObject<HTMLElement>, setPos: (pos: PositionType) => void) {
  let PosX: number, PosY: number
  useEffect(() => {
    ref.current!.addEventListener('mousedown', onMouseDown)
    return () => {
      // код отписки от ресурса
      ref.current!.removeEventListener('mousedown', onMouseDown)
    }
  })

  function onMouseDown(e: MouseEvent) {
    PosX = e.clientX
    PosY = e.clientY
  }

  function onMouseMove(e: MouseEvent) {
    const delta = { x: e.clientX - PosX }
    setPos({
      x: e.pageX,
      y: e.pageY,
    })
  }
}

export { useDragAndDrop }