import React from 'react'
import { FigureType } from '../../types'
import Rect from './Rect/Rect'
import Star from './Star/Star'
import Arrow from './Arrow/Arrow'
import Circle from './Circle/Circle'
type FigureBlockProps = {
  figureBlock: FigureType
}

function FigureBlock(props: FigureBlockProps) {
  const { figureType, id } = props.figureBlock

  switch (figureType) {
    case 0:
      return (
        <div id={id}>
          <Rect rectType={props.figureBlock} />
        </div>
      )
    case 1:
      return (
        <div id={id}>
          <Circle circleType={props.figureBlock} />
        </div>
      )
    case 2:
      return (
        <div id={id}>
          <Star starType={props.figureBlock} />
        </div>
      )
    case 3:
      return (
        <div id={id}>
          <Arrow arrowType={props.figureBlock} />
        </div>
      )

    default:
      return <div>dsssss</div>
  }
}

export default FigureBlock
