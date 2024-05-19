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
  const topRight = useRef<HTMLDivElement>(null)
  const bottomRight = useRef<HTMLDivElement>(null)
  const bottomLeft = useRef<HTMLDivElement>(null)

  useDragAndDrop({
    ref: bottomRight,
    onMove: (delta) => {
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

  useDragAndDrop({
    ref: topRight,
    onMove: (delta) => {
      const newPosition = {
        // готово
        x: position.state.x,
        y: position.state.y + delta.y,
      }
      const newSize = {
        width: size.state.width + delta.x,
        height: size.state.height - delta.y,
      }

      size.setState(newSize)
      position.setState(newPosition)
    },
    onMouseUp: (delta) => {
      const newSize = {
        width: size.state.width + delta.x,
        height: size.state.height - delta.y,
      }
      const newPosition = {
        x: position.state.x,
        y: position.state.y + delta.y,
      }

      commit(newSize, newPosition)
    },
  })

  useDragAndDrop({
    ref: bottomLeft,
    onMove: (delta) => {
      const newPosition = {
        // готово
        x: position.state.x + delta.x,
        y: position.state.y,
      }
      const newSize = {
        width: size.state.width - delta.x,
        height: size.state.height + delta.y,
      }

      size.setState(newSize)
      position.setState(newPosition)
    },
    onMouseUp: (delta) => {
      const newSize = {
        width: size.state.width - delta.x,
        height: size.state.height + delta.y,
      }
      const newPosition = {
        x: position.state.x + delta.x,
        y: position.state.y,
      }

      commit(newSize, newPosition)
    },
  })

  useDragAndDrop({
    ref: topLeft,
    onMove: (delta) => {
      const newPosition = {
        // готово
        x: position.state.x + delta.x,
        y: position.state.y + delta.y,
      }
      const newSize = {
        width: size.state.width - delta.x,
        height: size.state.height - delta.y,
      }

      size.setState(newSize)
      position.setState(newPosition)
    },
    onMouseUp: (delta) => {
      const newSize = {
        width: size.state.width - delta.x,
        height: size.state.height - delta.y,
      }
      const newPosition = {
        x: position.state.x + delta.x,
        y: position.state.y + delta.y,
      }

      commit(newSize, newPosition)
    },
  })

  return (
    <>
      <div ref={topLeft} className={css['top-left'] + ' ' + css.resize} />
      <div ref={topRight} className={css['top-right'] + ' ' + css.resize} />
      <div
        ref={bottomRight}
        className={css['bottom-right'] + ' ' + css.resize}
      />
      <div ref={bottomLeft} className={css['bottom-left'] + ' ' + css.resize} />
    </>
  )
}

export { BorderSelected }
