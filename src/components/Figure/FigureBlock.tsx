import React from 'react'
import { FigureType } from '../../types'
type FigureBlockProps = {
  figureBlock: FigureType
}

function FigureBlock(props: FigureBlockProps) {
  const { size, fill, figureType } = props.figureBlock
  return <div>{(size.height, size.width, figureType, fill)}</div>
}

export default FigureBlock
