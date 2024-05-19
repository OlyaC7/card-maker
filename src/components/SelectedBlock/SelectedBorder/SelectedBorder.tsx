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
  const bottomRight = useRef<HTMLDivElement>(null)

  useDragAndDrop({
    ref: bottomRight,
    onMove: (delta) => {
      // const newPosition = {
      //   // TODO высчитывается как-то не так
      //   x: position.state.x + delta.x,
      //   y: position.state.y + delta.y,
      // }
      const newSize = {
        width: size.state.width + delta.x,
        height: size.state.height + delta.y,
      }

      size.setState(newSize)
    },
    onMouseUp: (delta) => {
      const newSize = {
        width: size.state.width + delta.x,
        height: size.state.height + delta.y,
      }

      commit(newSize, position.state)
    },
  })

  return (
    <>
      <div ref={topLeft} className={css['top-left'] + ' ' + css.resize} />
      <div className={css['top-right'] + ' ' + css.resize} />
      <div
        ref={bottomRight}
        className={css['bottom-right'] + ' ' + css.resize}
      />
      <div className={css['bottom-left'] + ' ' + css.resize} />
    </>
  )
}

export { BorderSelected }
