import { FontStyleType, PictureType, TextType, SizeType, CanvasType, EditorType, FigureType } from "./types"

const picture1 = {
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

const fontStyle1 = {
    bold: true,
    italic: false
}

const text1 = {
    type: 'text',
    id: '2',
    text: 'Nemo enim ipsam voluptatem, unde omnis iste natus error sit voluptatem accusantium doloremque',
    color: '#564897',
    fontFamily: 'Roboto',
    fontSize: '22px',
    fontStyle: fontStyle1,
}

const figure1 = {
    type: 'figure',
    id: '5',
    fillColor: '#4BA3B6',
    dataFigure: '<svg xmlns="http://www.w3.org/2000/svg" width="182" height="172" viewBox="0 0 182 172" fill="none"><path d="M91 0L181.933 171.75H0.0673294L91 0Z" </svg>',
    borderColor: '#4BA3B6'
}

const canvas = {
    background: {
        type: 'color',
        data: '',
    },
    size: {
        width: 300,
        height: 500,
    },
    objects: [picture1, text1, figure1]
}

const template1 = {
    id: '',
    objects: []
}

const newCanvas = {
    canvas: canvas,
    templates: template1,
    selectBlock: []
}


//текст короткий длинный
//картинки все виды
//холст где все 