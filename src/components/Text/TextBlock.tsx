import React from 'react'
import { TextType } from '../../types'
import styles from './textBlock.module.css'
import {
  SelectedBlock,
  SelectedBlockProps,
} from '../SelectedBlock/SelectedBlock'
import { useAppActions } from '../../redux/hooks'

type TextBlockProps = Omit<SelectedBlockProps, 'component'> & {
  textBlock: TextType
}

function TextBlock(props: TextBlockProps) {
  const {
    textBlock: {
      color,
      fontFamily,
      text,
      backgroundColor,
      fontSize,
      fontStyle,
      fontWeight,
      textDecoration,
    },
    changeSelection,
    selected,
    objectInfo,
    updatePosition,
    updateSize,
  } = props

  const { createChangeText } = useAppActions()

  function changeTextBlock(event: React.MouseEvent) {
    const target = event.target as HTMLDivElement
    target.contentEditable = 'true'
    target.focus()
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        target.removeAttribute('contenteditable')
        const newText: string = target.innerText
        createChangeText(newText)
      }
    })
  }

  return (
    <SelectedBlock
      updatePosition={updatePosition}
      updateSize={updateSize}
      selected={selected}
      objectInfo={objectInfo}
      changeSelection={changeSelection}
      component={
        <div
          id="text"
          className={styles.textarea}
          style={{
            color,
            fontFamily,
            backgroundColor,
            fontSize,
            fontStyle,
            fontWeight,
            textDecoration,
          }}
          onMouseDown={changeTextBlock}
        >
          {text}
        </div>
      }
    />
  )
}

export { TextBlock }
