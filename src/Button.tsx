import React from 'react'
import styles from './button.module.css'
import { ButtonType } from './types'
import { useAppActions, useAppSelector } from './redux/hooks'
import SaveJSON from './utils/SaveJSON'
import OpenJSON from './utils/OpenJSON'
import SaveIMG from './utils/SaveIMG'

type ButtonBlockProps = {
  buttonBlock: {
    text: string
    button: ButtonType
  }
}

function Button(props: ButtonBlockProps) {
  const {
    createAddTextBlockAction,
    createAddPictureBlockAction,
    createDeleteBlockAction,
    createAddFigureBlockAction,
    createChangeTextBoldAction,
    createChangeTextItalicAction,
    createChangeTextDecorationAction,
    createChangeCanvasSize,
    createOpenNewEditor,
  } = useAppActions()

  function createButtonChangeCanvasSize() {
    const width: number = +(
      document.getElementById('width') as HTMLInputElement
    ).value
    const height: number = +(
      document.getElementById('height') as HTMLInputElement
    ).value
    createChangeCanvasSize(width, height)
  }

  const editor = useAppSelector((state) => state.editor)

  switch (props.buttonBlock.button) {
    case ButtonType.buttonSaveJSON:
      return (
        <div>
          <button
            className={styles.saveButton}
            onClick={() => SaveJSON(editor)}
          >
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonOpenJSON:
      return (
        <div>
          <button
            className={styles.saveButton}
            onClick={() => OpenJSON(createOpenNewEditor)}
          >
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonSaveIMG:
      return (
        <div>
          <button className={styles.saveButton} onClick={() => SaveIMG()}>
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonAddText:
      return (
        <div className={styles.textButtonBlock}>
          <button
            className={styles.textButton}
            onClick={() => createAddTextBlockAction()}
          >
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonAddPicture:
      return (
        <div className={styles.textButtonBlock}>
          <button
            className={styles.textButton}
            onClick={() => createAddPictureBlockAction()}
          >
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonDeleteBlock:
      return (
        <div>
          <button
            className={styles.deleteButton}
            onClick={() => createDeleteBlockAction()}
          >
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonAddFigure:
      return (
        <div className={styles.textButtonBlock}>
          <button
            className={styles.textButton}
            onClick={() => createAddFigureBlockAction()}
          >
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonChangeTextBold:
      return (
        <div className={styles.boldButtonBlock}>
          <button
            className={styles.boldButton}
            onClick={() => createChangeTextBoldAction()}
          >
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonChangeTextItalic:
      return (
        <div className={styles.italicButtonBlock}>
          <button
            className={styles.italicButton}
            onClick={() => createChangeTextItalicAction()}
          >
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonChangeTextDecoration:
      return (
        <div className={styles.underlineButtonBlock}>
          <button
            className={styles.underlineButton}
            onClick={() => createChangeTextDecorationAction()}
          >
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonCanvasSize:
      return (
        <div className={styles.canvasSizeButtonBlock}>
          <button
            className={styles.canvasSizeButton}
            onClick={() => createButtonChangeCanvasSize()}
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
