import React from 'react'
import { FigureType } from '../../../types'
type arrowBlockType = {
  arrowType: FigureType
}

function Arrow(props: arrowBlockType) {
  const { size, fill } = props.arrowType
  return (
    <div style={{ width: size.width, height: size.height }}>
      <svg
        width={100 + '%'}
        height={100 + '%'}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M251.71 8.70826C252.099 8.31619 252.096 7.68303 251.704 7.29406L245.315 0.955404C244.923 0.566432 244.29 0.568945 243.901 0.961016C243.512 1.35309 243.514 1.98625 243.907 2.37522L249.586 8.00958L243.951 13.6888C243.562 14.0809 243.565 14.7141 243.957 15.103C244.349 15.492 244.982 15.4895 245.371 15.0974L251.71 8.70826ZM0.00396822 9.99999L251.004 9.00396L250.996 7.00398L-0.00396822 8.00001L0.00396822 9.99999Z" />
      </svg>
    </div>
  )
}

export default Arrow
