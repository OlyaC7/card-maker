import Button from '../../Button'
import { useAppActions, useAppSelector } from '../../redux/hooks'
import { ButtonType } from '../../types'
import styles from '../ToolBar/toolbar.module.css'
import React from 'react'
import { optionsSize, optionsFamily } from './getTextStyleOptions'

function ToolBar() {
  const {
    createChangeTextColorAction,
    createChangeTextFontSize,
    createChangeTextFontFamily,
  } = useAppActions()
  const selectedObjects = useAppSelector((state) => state.editor.selectBlock)

  return (
    <div className={styles.toolbar}>
      <Button
        buttonBlock={{ text: 'Add Text', button: ButtonType.buttonAddText }}
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
        <label>Text color: </label>
        <input
          type="color"
          id="colorText"
          onInput={(event: React.FormEvent<HTMLInputElement>) => {
            createChangeTextColorAction(
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
    </div>
  )
}

export default ToolBar
