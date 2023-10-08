import { SizeType, Picture, CanvasType,Template, EditorType } from "./types"

const picture1: Picture  = {
    type: 'link',
    data: 'https://www.fonstola.ru/pic/201404/1680x1050/fonstola.ru_144383.jpg'
}

const size1:SizeType = {
    width: 1024,
    height: 768
}

const canvas1:CanvasType = {
    objects: [],
    background: picture1,
    size: size1
}

const template1:Template = {
    id: '',
    objects: []
}

const newCanvas:EditorType = {
    canvas: canvas1,
    templates: template1,
    selectBlock: ['1']
}