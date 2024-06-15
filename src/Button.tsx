import React from 'react'
import styles from './button.module.css'
import { ButtonType } from './types'
import { useAppActions, useAppSelector } from './redux/hooks'
import SaveJSON from './utils/SaveJSON'
import OpenJSON from './utils/OpenJSON'
import SaveIMG from './utils/SaveIMG'

// import newCanvas from './dataMiddle'

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
    // createOpenNewEditor,
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
  // const createOpenNewEditor: (newEditor: EditorType) => Action
  // function OpenAJSON() {
  //   // OpenJSON(newEditor)
  //   createOpenNewEditor(newEditor)
  // }

  const editor = useAppSelector((state) => state.editor)

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
          <button className={styles.pictureButton}>
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
          <button className={styles.saveButton} onClick={() => OpenJSON()}>
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
        <div>
          <button
            className={styles.textAddTextButton}
            onClick={() => createAddTextBlockAction()}
          >
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonAddPicture:
      return (
        <div>
          <button
            className={styles.textAddTextButton}
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
            className={styles.textAddTextButton}
            onClick={() => createDeleteBlockAction()}
          >
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonAddFigure:
      return (
        <div>
          <button
            className={styles.textAddTextButton}
            onClick={() => createAddFigureBlockAction()}
          >
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonChangeTextBold:
      return (
        <div>
          <button
            className={styles.textAddTextButton}
            onClick={() => createChangeTextBoldAction()}
          >
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonChangeTextItalic:
      return (
        <div>
          <button
            className={styles.textAddTextButton}
            onClick={() => createChangeTextItalicAction()}
          >
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonChangeTextDecoration:
      return (
        <div>
          <button
            className={styles.textAddTextButton}
            onClick={() => createChangeTextDecorationAction()}
          >
            {props.buttonBlock.text}
          </button>
        </div>
      )
    case ButtonType.buttonCanvasSize:
      return (
        <div>
          <button
            className={styles.textAddTextButton}
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
