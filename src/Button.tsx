import React from 'react'
import styles from './button.module.css'
import { ButtonType } from './types'
import { useAppActions } from './redux/hooks'

type ButtonBlockProps = {
  buttonBlock: {
    text: string
    button: ButtonType
  }
}

function Button(props: ButtonBlockProps) {
  const { createAddTextBlockAction, createAddPictureBlockAction } =
    useAppActions()

  switch (props.buttonBlock.button) {
    case ButtonType.buttonText:
      return (
        <div>
          <button className={styles.textButton}>
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonPicture:
      return (
        <div>
          <button
            className={styles.pictureButton}
            onClick={() => createAddPictureBlockAction()}
          >
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonFigure:
      return (
        <div>
          <button className={styles.figureButton}>
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonUndo:
      return (
        <div>
          <button className={styles.undoButton}>
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonRedo:
      return (
        <div>
          <button className={styles.redoButton}>
            {props.buttonBlock.text}
          </button>
        </div>
      )

    case ButtonType.buttonSave:
      return (
        <div>
          <button className={styles.saveButton}>
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonAddText:
      return (
        <div>
          <button
            className={styles.textAddTextButton}
            onClick={() => createAddTextBlockAction()}
          >
            {props.buttonBlock.text}
          </button>
        </div>
      )

    default:
      return (
        <div>
          <button className={styles.button}>{props.buttonBlock.text}</button>
        </div>
      )
    //объединить стили как-то можно?
  }
}

export default Button
