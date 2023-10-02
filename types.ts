type EditorType = {
    canvas: CanvasType
}

type SelectType = {
    id: string
}

type Shablon = {
    id: string

}

type Filter = {

}

//канвас тип канвас + айди выделенного объекта
type CanvasType = {
    idSelection: SelectType
    picture: PictureType
    text: TextType
    figure: FigureType
    backgroundUrl: string //картинка
    backgroundColor: string  //сплошной цвет
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
    url: string  //ccылка на картинку
    //грузим из компа или парсим дату и раздеялем картинки    
    //одним поле нельзя!
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
    bold: boolean    //?
    italic: boolean  //?
}

type borderType = {
    width: string
    style: string
    color: string
}

type FigureType = ObjectType & {  //как представлять фигуры на уровне данных пр-р: прямоугольник и в нем фигура
    type: 'figure'
    id: string
    color: string
    borderBottom: borderType
    borderLeft: borderType
    borderRight: borderType
    borderTop: borderType
    borderRadius: string
    data: string   //для svg?
}

// прямоугольник: длина, ширина, положение, цвет
// овал: длина, ширина, border-radius(ширина/2, если длина больше ширины)
// круг: бордер-радиус
// треугольник: длина, ширина: 0, border-bottom, left, right, top

export {
    EditorType,
    CanvasType,
    ObjectType,
    PictureType,
    TextType,
    FigureType
}

//добавить выделенный объект (выделения)
//подумать как его реализовать
//подумать как реализовать фигуры
//холст на который можно накатить шаблон
//добавить фильтр накатить куда? на объект или на весь холст? фильтр на картинку? лучше добавить на весь холст