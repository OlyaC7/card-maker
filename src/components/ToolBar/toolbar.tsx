import Button from '../../Button'
import { useAppActions, useAppSelector } from '../../redux/hooks'
import { ButtonType } from '../../types'
import styles from '../ToolBar/toolbar.module.css'
import React from 'react'
import { optionsSize, optionsFamily, optionsFigureType } from './getOptions'

function ToolBar() {
  const {
    createChangeColorAction,
    createChangeBackgroundColorAction,
    createChangeTextFontSize,
    createChangeTextFontFamily,
    createSelectFigureType,
    createChangeImage,
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

  return (
    <div className={styles.toolbar}>
      <Button
        buttonBlock={{
          text: 'Add Text',
          button: ButtonType.buttonAddText,
        }}
      />
      <div className={styles.selectedFontFamilyBlock}>
        <label>
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              createChangeTextFontFamily(
                selectedObjects,
                event.currentTarget.value,
              )
            }}
            name="selectedFontFamily"
            className={styles.selectedFontFamily}
          >
            {optionsFamily.map((element: string, index: number) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className={styles.selectedFontSizeBlock}>
        <label>
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              createChangeTextFontSize(
                selectedObjects,
                event.currentTarget.value,
              )
            }}
            name="selectedFontSize"
            className={styles.selectedFontSize}
          >
            {optionsSize.map((element: string, index: number) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className={styles.textSettings}>
        <Button
          buttonBlock={{
            text: '',
            button: ButtonType.buttonChangeTextBold,
          }}
        />
        <Button
          buttonBlock={{
            text: '',
            button: ButtonType.buttonChangeTextItalic,
          }}
        />
        <Button
          buttonBlock={{
            text: '',
            button: ButtonType.buttonChangeTextDecoration,
          }}
        />
        <div>
          <label className={styles.backgroundColor}></label>
          <input
            type="color"
            id="background"
            className={styles.backgroundColorInput}
            onInput={(event: React.FormEvent<HTMLInputElement>) => {
              createChangeBackgroundColorAction(
                selectedObjects,
                event.currentTarget.value,
              )
            }}
          />
        </div>
      </div>
      <div>
        <label className={styles.color}></label>
        <input
          type="color"
          id="color"
          className={styles.colorInput}
          onInput={(event: React.FormEvent<HTMLInputElement>) => {
            createChangeColorAction(selectedObjects, event.currentTarget.value)
          }}
        />
      </div>
      <div className={styles.line}></div>
      <div>
        <Button
          buttonBlock={{
            text: 'Add Figure',
            button: ButtonType.buttonAddFigure,
          }}
        />
        <label>
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              createSelectFigureType(selectedObjects, event.currentTarget.value)
            }}
            name="selectedFigureType"
            className={styles.selectedFigureType}
          >
            {optionsFigureType.map((element: string, index: number) => (
              <option key={index} value={index}>
                {element}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className={styles.line}></div>
      <Button
        buttonBlock={{
          text: 'Add Picture',
          button: ButtonType.buttonAddPicture,
        }}
      />
      <div>
        <input
          type="text"
          onKeyDown={(event) => changeImageLink(event)}
          placeholder="Insert link and Enter"
          className={styles.link}
        />
        <label className={styles.fileLabel}>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(event) => changeImageFile(event)}
            className={styles.file}
          />
        </label>
      </div>
      <div className={styles.line}></div>
      <Button
        buttonBlock={{
          text: '',
          button: ButtonType.buttonDeleteBlock,
        }}
      />
    </div>
  )
}

export default ToolBar
