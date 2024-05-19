import Button from '../../Button'
import { ButtonType } from '../../types'
import styles from '../ToolBar/toolbar.module.css'

function ToolBar() {
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
      <input type="color" id="color" />
    </div>
  )
}

export default ToolBar
