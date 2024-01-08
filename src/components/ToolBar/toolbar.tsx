import Button from '../../Button'
import { ButtonType } from '../../types'
import styles from '../ToolBar/toolbar.module.css'

function ToolBar() {
  return (
    <div className={styles.toolbar}>
      <Button
        buttonBlock={{ text: 'Add Text', button: ButtonType.buttonAddText }}
      />
    </div>
  )
}

export default ToolBar
