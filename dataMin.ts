import { PictureType, TextType, CanvasType, EditorType, FigureType } from "./types"

let picture1: PictureType = {
    id: '1',
    pozition: {
        x: 100,
        y: 100,
    },
    size: {
        width: 100,
        height: 100,
    },
    type: 'picture',
    url: '/1',
}

let text1: TextType = {
    id: '1',
    pozition: {
        x: 100,
        y: 100,
    },
    text: 'Hello',
    type: 'text',
    size: {
        width: 300,
        height: 500,
    },
    color: 'red',
    fontFamily: 'Roboto',
    fontSize: '12px',
}

let figure1: FigureType = {
    id: '2',
    type: 'figure',
    pozition: {
        x: 50,
        y: 10,
    },
    size: {
        width: 300,
        height: 500,
    },
    color: 'green',
    data: ''
}

const canvas: CanvasType = {
    picture1: ,
    text1: ,
    figure1: ,
    background: '',
}

let newCanvas: EditorType = {
    canvas: canvas,
}