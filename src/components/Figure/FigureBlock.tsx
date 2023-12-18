import React from 'react'
import { FigureType } from '../../types'
import Circle from './Circle/Circle'
import Rect from './Rect/Rect'
import Star from './Star/Star'

function FigureBlock(props: FigureType) {
  const fill = props.fill
  const { width, height } = props.size
  return (
    <div>
      <Circle type={'circle'} cx={25} cy={25} radius={25} fill={fill} />
      <Rect width={width} heigth={height} type={'rect'} />
      <Star />
    </div>
  )
}

export default FigureBlock
