import React from 'react'
import { TextType } from '../../types'
type TextBlockProps = {
  textBlock: TextType
}

function TextBlock(props: TextBlockProps) {
  const { id, color, fontFamily, text } = props.textBlock
  return (
    <div id={id}>
      <p
        style={{
          color,
          fontFamily,
        }}
      >
        {text}
      </p>
    </div>
  )
}

export default TextBlock
