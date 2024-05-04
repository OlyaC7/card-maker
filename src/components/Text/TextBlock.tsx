import { TextType } from '../../types'
import styles from './textBlock.module.css'
import {
  SelectedBlock,
  SelectedBlockProps,
} from '../SelectedBlock/SelectedBlock'

type TextBlockProps = Omit<SelectedBlockProps, 'component'> & {
  textBlock: TextType
}

function TextBlock(props: TextBlockProps) {
  const {
    textBlock: { color, fontFamily, text, backgroundColor },
    changeSelection,
    selected,
    objectInfo,
    updatePosition,
    updateSize,
  } = props

  function changeText(event: React.ChangeEvent<HTMLTextAreaElement>) {
    if (!event.defaultPrevented) {
      const text = event.target.value
      event.preventDefault()
      return text
    }
  }

  return (
    <SelectedBlock
      updatePosition={updatePosition}
      updateSize={updateSize}
      selected={selected}
      objectInfo={objectInfo}
      changeSelection={changeSelection}
      component={
        <textarea
          className={styles.textarea}
          style={{
            color,
            fontFamily,
            backgroundColor,
          }}
          value={text}
          onChange={(event) => changeText(event)}
        ></textarea>
      }
    />
  )
}

export { TextBlock }
