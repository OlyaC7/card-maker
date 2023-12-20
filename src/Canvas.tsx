import React from 'react'
import TextBlock from './components/Text/TextBlock'
import PictureBlock from './components/Picture/PictureBlock'
import FigureBlock from './components/Figure/FigureBlock'
import newCanvas from './dataMin'
import { EditorType } from './types'
import styles from './canvas.module.css'

function Canvas(props: EditorType) {
  return (
    <div
      className={styles.canvas}
      style={{
        backgroundImage: `url(${props.canvas.background.data})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div>
        <TextBlock textBlock={newCanvas.text1} />
        <PictureBlock pictureBlock={newCanvas.picture1} />
        <FigureBlock figureBlock={newCanvas.figure1} />
      </div>
    </div>
  )
}

export default Canvas
