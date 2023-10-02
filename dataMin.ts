import { SizeType, PictureType, CanvasType, EditorType } from "./types"

const picture1 = {
    type: '',
    data: ''
}

const size1 = {
    width: null,
    height: null
}

const canvas1 = {
    objects: [],
    background: picture1,
    size: size1
}

const template1 = {
    id: '',
    objects: []
}

const newCanvas = {
    canvas: canvas1,
    templates: template1,
    selectBlock: []
}