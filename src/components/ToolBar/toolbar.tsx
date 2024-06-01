import Button from '../../Button'
import { useAppActions, useAppSelector } from '../../redux/hooks'
import { ButtonType } from '../../types'
import styles from '../ToolBar/toolbar.module.css'
import React from 'react'

function ToolBar() {
  const { createChangeTextColorAction } = useAppActions()
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
    </div>
  )
}

export default ToolBar
