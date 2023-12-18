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
        <FigureBlock
          id={newCanvas.figure1.id}
          position={{
            x: newCanvas.figure1.position.x,
            y: newCanvas.figure1.position.y,
          }}
          size={{
            width: newCanvas.figure1.size.width,
            height: 100,
          }}
          type={'figure'}
          fill={newCanvas.figure1.fill}
          figureType={newCanvas.figure1.figureType}
          stroke={newCanvas.figure1.stroke}
          strokeWidth={newCanvas.figure1.strokeWidth}
        />
      </div>
    </div>
  )
}

export default Canvas
