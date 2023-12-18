import React from 'react'
import Canvas from '../../Canvas'
import './mainpanel.css'
import newCanvas from '../../dataMin'

function MainPanel() {
  return (
    <div className="MainPanel">
      <div>
        <Canvas
          canvas={{
            objects: [],
            background: {
              type: newCanvas.newCanvas.canvas.background.type,
              data: newCanvas.newCanvas.canvas.background.data,
            },
            size: {
              width: newCanvas.newCanvas.canvas.size.width,
              height: newCanvas.newCanvas.canvas.size.height,
            },
          }}
          templates={{
            id: newCanvas.newCanvas.templates.id,
            objects: newCanvas.newCanvas.templates.objects,
          }}
          selectBlock={[]}
        />
      </div>
    </div>
  )
}

export default MainPanel
