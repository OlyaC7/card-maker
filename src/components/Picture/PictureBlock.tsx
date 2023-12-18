import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import { PictureType } from '../../types'
import React, { useEffect, useRef, useState } from 'react'
type PictureBlockProps = {
  pictureBlock: PictureType
}
function PictureBlock(props: PictureBlockProps) {
  const { id, data, size, pozition } = props.pictureBlock

  const ref = useRef<HTMLElement>(null)
  const [pos, setPos] = useState(pozition)
  useDragAndDrop(ref, setPos)

  /*  document.addEventListener('click', (event) => {
    console.log('Кликнули по координатам: ', event.pageX, event.pageY)
  }) */

  return (
    <div id={id} style={{ width: size.width, height: size.height }}>
      <img src={data} style={{ width: size.width, height: size.height }}></img>
    </div>
  )
}

export default PictureBlock
