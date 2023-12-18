import React from 'react'
import { RectType } from '../../../types'

function Rect(props: RectType) {
  return (
    <svg className="" width={props.width} height={props.heigth}>
      <rect width={props.width} height={props.heigth} fill={'#e9967a'} />
    </svg>
  )
}

export default Rect
