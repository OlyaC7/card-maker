import { useRef } from 'react'
import css from './SelectedBorder.module.css'
import { useDragAndDrop } from '../../../hooks/useDragAndDrop'
import { PositionType, SizeType } from '../../../types'

type BorderSelectedProps = {
  commit: (size: SizeType, position: PositionType) => void
  position: {
    state: PositionType
    setState: (position: PositionType) => void
  }
  size: {
    state: SizeType
    setState: (size: SizeType) => void
  }
}

function BorderSelected({ position, size, commit }: BorderSelectedProps) {
  const topLeft = useRef<HTMLDivElement>(null)

  useDragAndDrop({
    ref: topLeft,
    onMove: (delta) => {
      const newPosition = {
        x: position.state.x + delta.x,
        y: position.state.y + delta.y,
      }
      const newSize = {
        // TODO высчитывается как-то не так
        width: size.state.width - delta.x,
        height: size.state.height - delta.y,
      }
      position.setState(newPosition)
      size.setState(newSize)
    },
    onMouseUp: () => {
      commit(size.state, position.state)
    },
  })

  return (
    <>
      <div ref={topLeft} className={css['top-left'] + ' ' + css.resize} />
      <div className={css['top-right'] + ' ' + css.resize} />
      <div className={css['bottom-right'] + ' ' + css.resize} />
      <div className={css['bottom-left'] + ' ' + css.resize} />
    </>
  )
}

export { BorderSelected }
