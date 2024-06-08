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
  } = useAppActions()
  const selectedObjects = useAppSelector((state) => state.editor.selectBlock)

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
      <div>
        <label>
          Font size:
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              createChangeTextFontSize(
                selectedObjects,
                event.currentTarget.value,
              )
            }}
            name="selectedFontSize"
          >
            {optionsSize.map((element: string, index: number) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Font Family:
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              createChangeTextFontFamily(
                selectedObjects,
                event.currentTarget.value,
              )
            }}
            name="selectedFontFamily"
          >
            {optionsFamily.map((element: string, index: number) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </select>
        </label>
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
      <div>
        <label>
          Figure:
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              createSelectFigureType(selectedObjects, event.currentTarget.value)
            }}
            name="selectedFigureType"
          >
            {optionsFigureType.map((element: string, index: number) => (
              <option key={index} value={index}>
                {element}
              </option>
            ))}
          </select>
        </label>
        <Button
          buttonBlock={{
            text: 'Add Figure',
            button: ButtonType.buttonAddFigure,
          }}
        />
      </div>
      <input type="file" accept="image/png, image/jpeg" />
    </div>
  )
}

export default ToolBar
