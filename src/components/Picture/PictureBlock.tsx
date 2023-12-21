import { useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import { PictureType, PositionType } from '../../types'
type PictureBlockProps = {
  pictureBlock: PictureType
}
function PictureBlock(props: PictureBlockProps) {
  const { id, data, size, position } = props.pictureBlock

  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(position)
  useDragAndDrop(ref, (delta: PositionType) => {
    setPos({ x: pos.x + delta.x, y: pos.y + delta.y })
  })

  return (
    <div
      ref={ref}
      id={id}
      style={{
        width: size.width,
        height: size.height,
        position: 'absolute',
        top: pos.y,
        left: pos.x,
      }}
    >
      <img
        src={data}
        style={{ width: size.width, height: size.height }}
        draggable="false"
      ></img>
    </div>
  )
}

export default PictureBlock
