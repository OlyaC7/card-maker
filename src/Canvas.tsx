import React from 'react'
import TextBlock from './components/Text/TextBlock'
import PictureBlock from './components/Picture/PictureBlock'
import FigureBlock from './components/Figure/FigureBlock'
import styles from './canvas.module.css'
import { useAppSelector } from './redux/hooks'

function Canvas() {
  const objects = useAppSelector((state) => state.editor.canvas.objects)
  const settings = useAppSelector((state) => state.editor.canvas)

  return (
    <div
      className={styles.canvas}
      style={{
        width: settings.size.width,
        height: settings.size.height,
        background: settings.background.data,
      }}
    >
      {objects.map((object, index) => {
        switch (object.type) {
          case 'text':
            return <TextBlock key={index} textBlock={object} />
          case 'picture':
            return <PictureBlock key={index} pictureBlock={object} />
          case 'figure':
            return <FigureBlock key={index} figureBlock={object} />
          default:
            break
        }
      })}
    </div>
  )
}

export default Canvas
