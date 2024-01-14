import React, { ReactNode } from 'react'
import { FigureType } from '../../types'
import Rect from './Rect/Rect'
import Star from './Star/Star'
import Arrow from './Arrow/Arrow'
import Circle from './Circle/Circle'
import { SelectedBlock, SelectedBlockProps } from '../SelectedBlock/SelectedBlock'

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
          <Arrow arrowType={props.figureBlock} />
        </div>
      )
      break
    default:
      content = <div>dsssss</div>
  }


  return (
    <SelectedBlock
      {...props}
      component={content}
    />
  )
}

export {
  FigureBlock
}
