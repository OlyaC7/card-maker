type Filter = 'red' | 'green' | 'blue' | 'whiteBlack'

type BackgroundType = {
  type: string
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
  pictureType: string
  data: string
}

type TextType = ObjectType & {
  type: 'text'
  text: string
  color: string
  fontFamily: string
  fontSize: string
  fontWeight: number
  fontStyle: string
  textDecoration: string
  backgroundColor: string
}

enum ArtType {
  Rect,
  Circle,
  Star,
  Arrow,
  Sun,
  Audi,
  Heart,
}

type FigureType = ObjectType & {
  type: 'figure'
  fill: string
  figureType: ArtType
  stroke: string
  strokeWidth: string
}
type CanvasType = {
  objects: Array<PictureType | TextType | FigureType>
  background: BackgroundType
  size: SizeType
}

type Template = {
  id: string
  objects: Array<CanvasType>
}

type EditorType = {
  canvas: CanvasType
  templates: Template[]
  selectBlock: Array<string>
}

function isBlockTextType(
  block: TextType | PictureType | FigureType,
): block is TextType {
  return block.type === 'text'
}

type BlockType = FigureType | PictureType | TextType

enum ButtonType {
  buttonText,
  buttonAddText,
  buttonPicture,
  buttonFigure,
  buttonSaveJSON,
  buttonOpenJSON,
  buttonAddPicture,
  buttonDeleteBlock,
  buttonAddFigure,
  buttonChangeTextBold,
  buttonChangeTextItalic,
  buttonChangeTextDecoration,
  buttonCanvasSize,
  buttonSaveIMG,
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
  Filter,
  PositionType,
  BlockType,
}

export { ArtType, ButtonType, isBlockTextType }
