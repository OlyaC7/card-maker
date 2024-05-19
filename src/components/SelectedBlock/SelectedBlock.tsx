import { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './SelectedBlock.module.css'
import { BorderSelected } from './SelectedBorder/SelectedBorder'
import { ObjectType, PositionType, SizeType } from '../../types'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'

type SelectedBlockProps = {
  selected: boolean
  changeSelection: () => void
  component: ReactNode
  objectInfo: ObjectType
  updateSize: (size: SizeType) => void
  updatePosition: (position: PositionType) => void
}

function SelectedBlock({
  component,
  selected,
  changeSelection,
  objectInfo,
  updatePosition,
  updateSize,
}: SelectedBlockProps) {
  const ref = useRef<HTMLDivElement>(null)

  //   const [localPosition, setLocalPosition] = useState(objectInfo.position)
  // const [localSize, setLocalSize] = useState(objectInfo.size)

  useDragAndDrop({
    ref,
    onMouseUp: () => {
      //   updatePosition(localPosition)
    },
    onMove: (delta) => {
      updatePosition({
        x: objectInfo.position.x + delta.x,
        y: objectInfo.position.y + delta.y,
      })
      //   setLocalPosition({
      //     x: localPosition.x + delta.x,
      //     y: localPosition.y + delta.y,
      //   })
    },
  })

  useEffect(() => {
    const element = ref.current

    element?.addEventListener('click', changeSelection)

    return () => {
      element?.removeEventListener('click', changeSelection)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={styles.block}
      style={{
        height: objectInfo.size.height + 'px',
        width: objectInfo.size.width + 'px',
        left: objectInfo.position.x + 'px',
        top: objectInfo.position.y + 'px',
      }}
    >
      {component}
      {selected && (
        <BorderSelected
          commit={(size, position) => {
            updateSize(size)
            updatePosition(position)
          }}
          position={{
            state: objectInfo.position,
            setState: (position) => {
              updatePosition(position)
            },
          }}
          size={{
            state: objectInfo.size,
            setState: (size) => {
              updateSize(size)
            },
          }}
        />
      )}
    </div>
  )
}

export { type SelectedBlockProps, SelectedBlock }
