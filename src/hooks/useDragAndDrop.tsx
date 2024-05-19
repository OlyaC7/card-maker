import { RefObject, useRef, useEffect } from 'react'
import { PositionType } from '../types'

type UseDragAndDropArgs = {
  ref: RefObject<HTMLElement>
  onMove: (delta: PositionType) => void
  onMouseUp: (delta: PositionType) => void
}

function useDragAndDrop({
  onMouseUp: _onMouseUp,
  onMove,
  ref,
}: UseDragAndDropArgs) {
  // TODO: добавить ресайз объекта
  const startPos = useRef({
    x: 0,
    y: 0,
  })

  let delta: PositionType
  function onMouseMove(mouseMoveEvent: MouseEvent) {
    delta = {
      x: mouseMoveEvent.clientX - startPos.current.x,
      y: mouseMoveEvent.clientY - startPos.current.y,
    }
    onMove(delta)
  }
  function onMouseUp() {
    if (delta) {
      _onMouseUp(delta)
    }

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
      if (ref.current) {
        ref.current!.removeEventListener('mousedown', onMouseDown)
      }
    }
  })
}
export { useDragAndDrop }
