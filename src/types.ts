type EditorType = {
  canvas: CanvasType
  templates: Template
  selectBlock: Array<string>
}

type Template = {
  id: string
  objects: Array<CanvasType>
}

type Filter = 'red' | 'green' | 'blue' | 'whiteBlack'

//если пустой канвас, то значения null

type CanvasType = {
  objects: Array<PictureType | TextType | FigureType>
  background: BackgroundType
  size: SizeType
}

type BackgroundType = {
  type: 'link' | 'base64' | 'color'
  data: string
}

type PositionType = {
  x: number
  y: number
}

type SizeType = {
  width: number
  height: number
}

type ObjectType = {
  id: string
  position: PositionType
  size: SizeType
}

type PictureType = ObjectType & {
  type: 'picture'
  pictureType: 'link' | 'base64'
  data: string
}

type FontStyleType = {
  bold: boolean
  italic: boolean
}

type TextType = ObjectType & {
  type: 'text'
  text: string
  color: string
  fontFamily: string
  fontSize: string
  fontStyle: FontStyleType
  backgroundColor: string
}

enum ArtType {
  Rect,
  Circle,
  Star,
  Arrow,
}

type FigureType = ObjectType & {
  type: 'figure'
  fill: string
  figureType: ArtType
  stroke: string
  strokeWidth: string
}

enum ButtonType {
  buttonText,
  buttonAddText,
  buttonPicture,
  buttonFigure,
  buttonUndo,
  buttonSave,
  buttonRedo,
  buttonAddPicture,
  buttonDeleteBlock,
}

export type {
  EditorType,
  Template,
  CanvasType,
  ObjectType,
  PictureType,
  TextType,
  FigureType,
  BackgroundType,
  SizeType,
  FontStyleType,
  Filter,
  PositionType,
}

export { ArtType, ButtonType }
