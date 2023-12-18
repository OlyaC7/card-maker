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
  pozition: PositionType
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
}

type RectType = {
  type: 'rect'
  width: number
  heigth: number
}

type CircleType = {
  type: 'circle'
  radius: number
  cx: number
  cy: number
  fill: string
}

type FigureType = ObjectType & {
  type: 'figure'
  fill: string
  figureType: RectType | CircleType
  stroke: string
  strokeWidth: string
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
  RectType,
  CircleType,
  PositionType,
}
