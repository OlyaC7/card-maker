import Button from '../../Button'
import { ButtonType } from '../../types'
import styles from '../SideBar/sidebar.module.css'
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Button buttonBlock={{ text: 'Text', button: ButtonType.buttonText }} />
      <Button
        buttonBlock={{ text: 'Picture', button: ButtonType.buttonPicture }}
      />
      <Button
        buttonBlock={{ text: 'Elements', button: ButtonType.buttonFigure }}
      />
    </div>
  )
}

export default SideBar
