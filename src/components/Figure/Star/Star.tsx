import React from 'react'
import { FigureType } from '../../../types'
type starBlockType = {
  starType: FigureType
}
function Star(props: starBlockType) {
  const { size, fill } = props.starType
  return (
    <svg>
      <polygon
        width={size.width}
        height={size.height}
        fill={fill}
        points="100,10 40,198 190,78 10,78 160,198"
      />
    </svg>
  )
}

export default Star
