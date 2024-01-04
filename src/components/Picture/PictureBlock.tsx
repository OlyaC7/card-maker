import React, { useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import { PictureType, PositionType } from '../../types'
// import { RootState, useAppActions, useAppSelector } from '../../redux/hooks'
type PictureBlockProps = {
  pictureBlock: PictureType
}
function PictureBlock(props: PictureBlockProps) {
  const { id, data, size, position } = props.pictureBlock

  const ref = useRef<HTMLDivElement>(null)
  const [settings, setSettings] = useState({ position, size })
  useDragAndDrop(ref, (delta: PositionType) => {
    const newSettings = {
      position: {
        x: settings.position.x + delta.x,
        y: settings.position.y + delta.y,
      },
      size: settings.size,
    }

    setSettings(newSettings)
  })

  // const state = useAppSelector((state: RootState) => state)
  // const dispatch = useAppActions()
  // const { createChangeSizeAction } = useAppActions()
  // console.log(state)

  const refSize = useRef<HTMLDivElement>(null)
  useDragAndDrop(refSize, (delta: PositionType) => {
    const newSettings = {
      position: {
        x: settings.position.x + delta.x,
        y: settings.position.y + delta.y,
      },
      size: {
        width: settings.size.width - delta.x,
        height: settings.size.height - delta.y,
      },
    }

    setSettings(newSettings)
  })
  return (
    <div
      ref={ref}
      id={id}
      style={{
        width: settings.size.width,
        height: settings.size.height,
        position: 'absolute',
        top: settings.position.y,
        left: settings.position.x,
      }}
    >
      <img
        src={data}
        style={{ width: settings.size.width, height: settings.size.height }}
        draggable="false"
      ></img>
      <span
        ref={refSize}
        style={{
          position: 'absolute',
          top: -5,
          left: -5,
          width: 10 + 'px',
          height: 10 + 'px',
          background: '#000',
        }}
      ></span>
    </div>
  )
}

export default PictureBlock
