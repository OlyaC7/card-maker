import { TextBlock } from './components/Text/TextBlock'
import { PictureBlock } from './components/Picture/PictureBlock'
import { FigureBlock } from './components/Figure/FigureBlock'
import styles from './canvas.module.css'
import { useAppActions, useAppSelector } from './redux/hooks'

function Canvas() {
  const objects = useAppSelector((state) => state.editor.canvas.objects)
  const settings = useAppSelector((state) => state.editor.canvas)
  const selectedObjects = useAppSelector(state => state.editor.selectBlock)
  const { createChangeSelectionAction } = useAppActions()

  return (
    <div
      className={styles.canvas}
      style={{
        width: settings?.size.width,
        height: settings?.size.height,
        background: settings?.background.data,
      }}
    >
      {objects?.map((object, index) => {
        const selected = selectedObjects.includes(object.id)
        const objectInfo = {
          id: object.id,
          position: object.position,
          size: object.size
        }

        switch (object.type) {
          case 'text':
            return (
              <TextBlock
                key={index}
                textBlock={object}
                selected={selected}
                changeSelection={() => {
                  createChangeSelectionAction(object.id)
                }}
                objectInfo={objectInfo}
                updatePosition={() => { }}
                updateSize={() => { }}
              />)
          case 'picture':
            return (
              <PictureBlock
                key={index}
                pictureBlock={object}
                selected={selected}
                changeSelection={() => {
                  createChangeSelectionAction(object.id)
                }}
                objectInfo={objectInfo}
                updatePosition={() => { }}
                updateSize={() => { }}
              />
            )
          case 'figure':
            return (
              <FigureBlock
                key={index}
                figureBlock={object}
                selected={selected}
                changeSelection={() => {
                  createChangeSelectionAction(object.id)
                }}
                objectInfo={objectInfo}
                updatePosition={() => { }}
                updateSize={() => { }}
              />
            )
          default:
            break
        }
      })}
    </div>
  )
}

export default Canvas
