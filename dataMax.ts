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

let picture2: PictureType = {
    id: '2',
    pozition: {
        x: 200,
        y: 100,
    },
    size: {
        width: 300,
        height: 500,
    },
    type: 'picture',
    url: '/2',
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
let text2: TextType = {
    id: '2',
    type: 'text',
    pozition: {
        x: 50,
        y: 10,
    },
    text: 'World',
    size: {
        width: 300,
        height: 500,
    },
    color: 'blue',
    fontFamily: 'Verdana',
    fontSize: '18px',
}

let figure: FigureType = {
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
    borderColor: 'orange',
    borderSize: '1px',
    borderType: 'solid',
    data: ''
}

const canvas: CanvasType = {
    list: [picture1, picture2, text1, text2, figure],
    background: ''
}

let newCanvas: RedactorType = {
    canvas: canvas,
}