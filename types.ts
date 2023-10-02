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
    background: Picture
    size: SizeType
}

type Picture = {
    type: 'link' | 'base64' | 'color'
    data: string
}

type ObjectType = {
    id: string
    pozition: PositionType
    size: SizeType
}

type PositionType = {
    x: number
    y: number
}

type SizeType = {
    width: number
    height: number
}

type PictureType = ObjectType & {
    type: 'picture'
    id: string
    pictureType: 'link' | 'base64'
    data: string
}

type TextType = ObjectType & {
    type: 'text'
    id: string
    text: string
    color: string
    fontFamily: string
    fontSize: string
    fontStyle: FontStyleType
}

type FontStyleType = {
    bold: boolean
    italic: boolean
}

type FigureType = ObjectType & {
    type: 'figure'
    id: string
    fillColor: string
    dataFigure: string
    borderColor: string
}

export {
    EditorType,
    CanvasType,
    ObjectType,
    PictureType,
    TextType,
    FigureType,
    Picture,
    SizeType,
    FontStyleType
}