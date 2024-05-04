import React from 'react'
import { FigureType } from '../../../types'
type rectBlockType = {
  rectType: FigureType
}

function Rect(props: rectBlockType) {
  const { size, fill } = props.rectType
  console.log(size)
  return (
    <svg
      width={size.width}
      height={size.height}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={size.width} height={size.height} fill={fill} />
    </svg>
  )
}

export default Rect
