import {
  SizeType,
  BackgroundType,
  PictureType,
  TextType,
  CanvasType,
  Template,
  EditorType,
  FontStyleType,
  FigureType,
} from './types'

const background1: BackgroundType = {
  type: 'link',
  data: 'https://www.fonstola.ru/pic/201404/1680x1050/fonstola.ru_144383.jpg',
}

const size1: SizeType = {
  width: 1024,
  height: 768,
}

const picture1: PictureType = {
  type: 'picture',
  pictureType: 'link',
  data: 'https://themaykl.ru/wp-content/uploads/shchenki-6-360x270.jpg',
  id: '8',
  pozition: {
    x: 600,
    y: 600,
  },
  size: {
    width: 360,
    height: 270,
  },
}

const fontStyle1: FontStyleType = {
  bold: false,
  italic: false,
}

const text1: TextType = {
  type: 'text',
  text: 'English texts for beginners to practice reading and comprehension online and for free.',
  color: '#00ff7f',
  fontFamily: 'Roboto',
  fontSize: '18px',
  fontStyle: fontStyle1,
  id: '9',
  pozition: {
    x: 600,
    y: 450,
  },
  size: {
    width: 100,
    height: 18,
  },
}

const figure1: FigureType = {
  type: 'figure',
  fillColor: '#ffa812',
  borderColor: '',
  dataFigure:
    '<svg xmlns="http://www.w3.org/2000/svg" width="357" height="172" viewBox="0 0 182 172" fill="none"><path d="M91 0L181.933 171.75H0.0673294L91 0Z" </svg>',
  id: '10',
  pozition: {
    x: 650,
    y: 321,
  },
  size: {
    width: 357,
    height: 172,
  },
}

const canvas1: CanvasType = {
  objects: [picture1, text1, figure1],
  background: background1,
  size: size1,
}

const template1: Template = {
  id: '5',
  objects: [],
}

const newCanvas: EditorType = {
  canvas: canvas1,
  templates: template1,
  selectBlock: ['1'],
}
