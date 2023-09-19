type RedactorType = {
    canvas: CanvasType
}

type CanvasType = {
    list: ObjectsList
    background: string
}

type ObjectsList = Array<PictureType | TextType | FigureType>;

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
    url: string
}

type TextType = ObjectType & {
    type: 'text'
    id: string
    text: string
    color: string
    fontFamily: string
    fontSize: string
}

type FigureType = ObjectType & {
    type: 'figure'
    id: string
    color: string
    borderColor: string
    borderSize: string
    borderType: string 
}

export {
    RedactorType,
    CanvasType,
    ObjectsList,
    ObjectType,
    PictureType,
    TextType,
    FigureType
}
