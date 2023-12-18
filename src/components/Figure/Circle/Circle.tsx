import React from 'react'
import { CircleType } from '../../../types'

function Circle(props: CircleType) {
  return (
    <svg className="" width="50" height="50">
      <ellipse
        fill={props.fill}
        cx={props.cx}
        cy={props.cy}
        rx={props.radius}
        ry={props.radius}
      />
    </svg>
  )
}

export default Circle
