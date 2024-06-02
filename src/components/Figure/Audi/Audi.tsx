import React from 'react'
import { FigureType } from '../../../types'
type audiBlockType = {
  audiType: FigureType
}
function Audi(props: audiBlockType) {
  const { size, fill } = props.audiType
  return (
    <svg width={'100%'} height={'100%'}>
      <g fill={'transparent'} stroke={fill} strokeWidth={'10'}>
        <circle
          cx={size.width / 4}
          cy={size.width / 4}
          r={size.width / 4 / 1.6}
        />
        <circle
          cx={(size.width / 4) * 2}
          cy={size.width / 4}
          r={size.width / 4 / 1.6}
        />
        <circle
          cx={(size.width / 4) * 3}
          cy={size.width / 4}
          r={size.width / 4 / 1.6}
        />
        <circle
          cx={(size.width / 4) * 4}
          cy={size.width / 4}
          r={size.width / 4 / 1.6}
        />
      </g>
    </svg>
  )
}

export default Audi
