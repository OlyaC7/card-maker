import React, { ReactNode } from 'react'
import { FigureType } from '../../types'
import Rect from './Rect/Rect'
import Star from './Star/Star'
import Line from './Line/Line'
import Circle from './Circle/Circle'
import {
  SelectedBlock,
  SelectedBlockProps,
} from '../SelectedBlock/SelectedBlock'
import Sun from './Sun/Sun'
import Heart from './Heart/Heart'

type FigureBlockProps = Omit<SelectedBlockProps, 'component'> & {
  figureBlock: FigureType
}

function FigureBlock(props: FigureBlockProps) {
  const { figureType, id } = props.figureBlock

  let content: ReactNode = ''

  switch (figureType) {
    case 0:
      content = (
        <div id={id}>
          <Rect rectType={props.figureBlock} />
        </div>
      )
      break
    case 1:
      content = (
        <div id={id}>
          <Circle circleType={props.figureBlock} />
        </div>
      )
      break
    case 2:
      content = (
        <div id={id}>
          <Star starType={props.figureBlock} />
        </div>
      )
      break
    case 3:
      content = (
        <div id={id}>
          <Line lineType={props.figureBlock} />
        </div>
      )
      break
    case 4:
      content = (
        <div id={id}>
          <Sun sunType={props.figureBlock} />
        </div>
      )
      break
    case 5:
      content = (
        <div id={id}>
          <Heart heartType={props.figureBlock} />
        </div>
      )
      break
    default:
      content = <div>dsssss</div>
  }

  return <SelectedBlock {...props} component={content} />
}

export { FigureBlock }
