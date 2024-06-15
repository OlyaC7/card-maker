import Button from '../../Button'
import styles from './toppanel.module.css'
import { ButtonType } from '../../types'

function Top() {
  return (
    <div className={styles.toppanel}>
      <div className={styles.logoBlock}>
        <p className={styles.logo}>
          Card<span className={styles.logoSecond}>Maker</span>
        </p>
      </div>
      <div>
        <Button
          buttonBlock={{
            text: 'Save',
            button: ButtonType.buttonSaveJSON,
          }}
        />
        <Button
          buttonBlock={{
            text: 'Open',
            button: ButtonType.buttonOpenJSON,
          }}
        />
      </div>
    </div>
  )
}

export default Top
