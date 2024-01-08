import React from 'react'
import { FigureType } from '../../../types'
type circleBlockType = {
  circleType: FigureType
}

function Circle(props: circleBlockType) {
  const { size, fill } = props.circleType
  return (
    <svg
      width={size.width}
      height={size.height}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx={size.width / 2}
        cy={size.height / 2}
        rx={size.width / 2}
        ry={size.height / 2}
        fill={fill}
      />
    </svg>
  )
}

export default Circle
