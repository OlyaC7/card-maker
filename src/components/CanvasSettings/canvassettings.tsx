import Button from '../../Button'
import { useAppActions } from '../../redux/hooks'
import { ButtonType } from '../../types'
import styles from '../CanvasSettings/canvassettings.module.css'
import React from 'react'

function CanvasSettings() {
  const { createChangeBackgroundCanvasColorAction, createChangeImageCanvas } =
    useAppActions()

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
    <div className={styles.canvasSettings}>
      <div className={styles.canvasColorBlock}>
        <label className={styles.canvasColorLabel}></label>
        <input
          type="color"
          id="backgroundCanvas"
          onInput={(event: React.FormEvent<HTMLInputElement>) => {
            createChangeBackgroundCanvasColorAction(event.currentTarget.value)
          }}
          className={styles.canvasColor}
        />
      </div>
      <div>
        <input
          type="text"
          onKeyDown={(event) => changeImageLinkCanvas(event)}
          className={styles.canvasLink}
          placeholder="Insert link and Enter"
        />
      </div>
      <div>
        <label className={styles.canvasFileLabel}>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(event) => changeImageFileCanvas(event)}
            className={styles.canvasFile}
          />
        </label>
      </div>
      <div>
        <input type="text" id="width" className={styles.canvasSize} />
        <label> x </label>
        <input type="text" id="height" className={styles.canvasSize} />
        <Button
          buttonBlock={{
            text: 'Ok',
            button: ButtonType.buttonCanvasSize,
          }}
        />
      </div>
    </div>
  )
}

export default CanvasSettings
