import React from 'react'
import Canvas from '../../Canvas'
import './mainpanel.css'
import CanvasSettings from '../CanvasSettings/canvassettings'

function MainPanel() {
  return (
    <div className="MainPanel">
      <div>
        <CanvasSettings />
        <Canvas />
      </div>
    </div>
  )
}

export default MainPanel
