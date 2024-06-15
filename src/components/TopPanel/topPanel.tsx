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
      <div className={styles.saveBlock}>
        <Button
          buttonBlock={{
            text: 'Save JSON',
            button: ButtonType.buttonSaveJSON,
          }}
        />
        <Button
          buttonBlock={{
            text: 'Open JSON',
            button: ButtonType.buttonOpenJSON,
          }}
        />
        <Button
          buttonBlock={{
            text: 'Save IMG',
            button: ButtonType.buttonSaveIMG,
          }}
        />
      </div>
    </div>
  )
}

export default Top
