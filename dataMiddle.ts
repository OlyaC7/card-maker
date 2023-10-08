import { FontStyleType, PictureType, TextType, CanvasType, EditorType, FigureType, Template } from "./types"

const picture1: PictureType = {
    id: '1',
    pozition: {
        x: 100,
        y: 100,
    },
    size: {
        width: 700,
        height: 100,
    },
    type: 'picture',
    data: 'https://prixoxo.ru/uploads/posts/2021-09/krasivye-kartinki-priroda-na-rabochij-stol-1920h1080-9.jpg',
    pictureType: 'link'
}

const fontStyle1: FontStyleType = {
    bold: true,
    italic: false
}

const text1: TextType = {
    type: 'text',
    id: '2',
    text: 'Nemo enim ipsam voluptatem, unde omnis iste natus error sit voluptatem accusantium doloremque',
    color: '#564897',
    fontFamily: 'Roboto',
    fontSize: '22px',
    fontStyle: fontStyle1,
    pozition: {
        x: 50,
        y: 220,
    },
    size: {
        width: 50,
        height: 22
    }
}

const figure1: FigureType = {
    type: 'figure',
    id: '5',
    fillColor: '#4BA3B6',
    dataFigure: '<svg xmlns="http://www.w3.org/2000/svg" width="182" height="172" viewBox="0 0 182 172" fill="none"><path d="M91 0L181.933 171.75H0.0673294L91 0Z" </svg>',
    borderColor: '#4BA3B6',
    pozition: {
        x: 600,
        y: 120,
    },
    size: {
        width: 182,
        height: 172
    }
}

const canvas: CanvasType = {
    background: {
        type: 'color',
        data: '#500500',
    },
    size: {
        width: 300,
        height: 500,
    },
    objects: [picture1, text1, figure1]
}

const template1: Template = {
    id: '',
    objects: []
}

const newCanvas: EditorType = {
    canvas: canvas,
    templates: template1,
    selectBlock: ['1','2']
}


//текст короткий длинный
//картинки все виды
//холст где все 