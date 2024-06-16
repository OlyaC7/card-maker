import Button from '../../Button'
import { useAppActions, useAppSelector } from '../../redux/hooks'
import { ButtonType } from '../../types'
import styles from '../ToolBar/toolbar.module.css'
import React from 'react'

function CanvasSettings() {
  const {
    createChangeColorAction,
    createChangeBackgroundColorAction,
    createChangeImage,
    createChangeBackgroundCanvasColorAction,
    createChangeImageCanvas,
  } = useAppActions()
  const selectedObjects = useAppSelector((state) => state.editor.selectBlock)

  async function changeImageFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files ? event.target.files[0] : null
    let data: string | null | ArrayBuffer = ''
    const pictureType = 'base64'
    if (file) {
      const reader = new FileReader()

      if (/\.(jpeg|png|gif|jpg)$/i.test(file.name)) {
        reader.addEventListener(
          'load',
          () => {
            // convert image file to base64 string
            data = reader.result as string
            createChangeImage(selectedObjects, data, pictureType)
          },
          false,
        )
      }

      reader.readAsDataURL(file)
    }
  }

  async function changeImageLink(event: React.KeyboardEvent<HTMLInputElement>) {
    let data: string = ''
    const pictureType = 'link'
    if (event.key === 'Enter' && event.currentTarget.value) {
      data = event.currentTarget.value
    }

    createChangeImage(selectedObjects, data, pictureType)
  }

  async function changeImageLinkCanvas(
    event: React.KeyboardEvent<HTMLInputElement>,
  ) {
    let data: string = ''
    const type = 'link'
    if (event.key === 'Enter' && event.currentTarget.value) {
      data = event.currentTarget.value
    }

    createChangeImageCanvas(data, type)
  }

  async function changeImageFileCanvas(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const file = event.target.files ? event.target.files[0] : null
    let data: string | null | ArrayBuffer = ''
    const type = 'base64'
    if (file) {
      const reader = new FileReader()

      if (/\.(jpeg|png|gif|jpg)$/i.test(file.name)) {
        reader.addEventListener(
          'load',
          () => {
            // convert image file to base64 string
            data = reader.result as string
            createChangeImageCanvas(data, type)
          },
          false,
        )
      }

      reader.readAsDataURL(file)
    }
  }

  return (
    <div className={styles.toolbar}>
      <Button
        buttonBlock={{
          text: 'Add Text',
          button: ButtonType.buttonAddText,
        }}
      />
      <Button
        buttonBlock={{
          text: 'Delete Text',
          button: ButtonType.buttonDeleteBlock,
        }}
      />
      <Button
        buttonBlock={{
          text: 'Add Picture',
          button: ButtonType.buttonAddPicture,
        }}
      />
      <div>
        <label>Color: </label>
        <input
          type="color"
          id="color"
          onInput={(event: React.FormEvent<HTMLInputElement>) => {
            createChangeColorAction(selectedObjects, event.currentTarget.value)
          }}
        />
      </div>
      <div>
        <label>Background color: </label>
        <input
          type="color"
          id="background"
          onInput={(event: React.FormEvent<HTMLInputElement>) => {
            createChangeBackgroundColorAction(
              selectedObjects,
              event.currentTarget.value,
            )
          }}
        />
      </div>
      <Button
        buttonBlock={{
          text: 'Bold',
          button: ButtonType.buttonChangeTextBold,
        }}
      />
      <Button
        buttonBlock={{
          text: 'Italic',
          button: ButtonType.buttonChangeTextItalic,
        }}
      />
      <Button
        buttonBlock={{
          text: 'Underline',
          button: ButtonType.buttonChangeTextDecoration,
        }}
      />
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={(event) => changeImageFile(event)}
      />
      <div>
        <label>Link</label>
        <input type="text" onKeyDown={(event) => changeImageLink(event)} />
      </div>
      <div>
        <label>Background canvas color: </label>
        <input
          type="color"
          id="backgroundCanvas"
          onInput={(event: React.FormEvent<HTMLInputElement>) => {
            createChangeBackgroundCanvasColorAction(event.currentTarget.value)
          }}
        />
      </div>
      <div>
        <label>Background Canvas Link</label>
        <input
          type="text"
          onKeyDown={(event) => changeImageLinkCanvas(event)}
        />
      </div>
      <div>
        <label>Background Canvas File</label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={(event) => changeImageFileCanvas(event)}
        />
      </div>
      <div>
        <label>Canvas Size</label>
        <input type="text" id="width" />
        <label> x </label>
        <input type="text" id="height" />
        <Button
          buttonBlock={{
            text: 'Применить',
            button: ButtonType.buttonCanvasSize,
          }}
        />
      </div>
    </div>
  )
}

export default CanvasSettings
