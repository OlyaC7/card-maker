// import { useRef, useState } from 'react'
// import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import { PictureType } from '../../types'
type PictureBlockProps = {
  pictureBlock: PictureType
}
function PictureBlock(props: PictureBlockProps) {
  const { id, data, size } = props.pictureBlock

  // const ref = useRef<HTMLElement>(null)
  // const [pos, setPos] = useState(position)
  // useDragAndDrop(ref, setPos)

  return (
    <div id={id} style={{ width: size.width, height: size.height }}>
      <img src={data} style={{ width: size.width, height: size.height }}></img>
    </div>
  )
}

export default PictureBlock
