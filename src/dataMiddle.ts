import { CanvasType, EditorType } from './types'

const canvas: CanvasType = {
  background: {
    type: 'color',
    data: '#FFFFFF',
  },
  size: {
    width: 700,
    height: 500,
  },
  objects: [],
}

const newCanvas: EditorType = {
  canvas: canvas,
  templates: [],
  selectBlock: [],
}

export default newCanvas
