import {
  FontStyleType,
  PictureType,
  TextType,
  CanvasType,
  EditorType,
  FigureType,
  Template,
  ArtType,
} from './types'

const picture1: PictureType = {
  id: '1',
  position: {
    x: 100,
    y: 100,
  },
  size: {
    width: 400,
    height: 300,
  },
  type: 'picture',
  data: 'https://prixoxo.ru/uploads/posts/2021-09/krasivye-kartinki-priroda-na-rabochij-stol-1920h1080-9.jpg',
  pictureType: 'link',
}

const fontStyle1: FontStyleType = {
  bold: true,
  italic: false,
}

const text1: TextType = {
  type: 'text',
  id: '2',
  text: 'Nemo enim ipsam voluptatem, unde omnis iste natus error sit voluptatem accusantium doloremque',
  color: '#564897',
  fontFamily: 'Roboto',
  fontSize: '22px',
  fontStyle: fontStyle1,
  position: {
    x: 50,
    y: 220,
  },
  size: {
    width: 50,
    height: 22,
  },
  backgroundColor: '#ffffff',
}

const figure1: FigureType = {
  type: 'figure',
  id: '5',
  fill: '#4BA3B6',
  figureType: ArtType.Rect,
  stroke: '#4BA3B6',
  strokeWidth: '1px',
  position: {
    x: 600,
    y: 120,
  },
  size: {
    width: 182,
    height: 172,
  },
}

const figure2: FigureType = {
  type: 'figure',
  id: '6',
  fill: '#fff785',
  figureType: ArtType.Sun,
  stroke: '#fff785',
  strokeWidth: '1px',
  position: {
    x: 60,
    y: 120,
  },
  size: {
    width: 16,
    height: 16,
  },
}

const canvas: CanvasType = {
  background: {
    type: 'color',
    data: '#500500',
  },
  size: {
    width: 700,
    height: 500,
  },
  objects: [picture1, text1, figure1, figure2],
}

const template1: Template = {
  id: '',
  objects: [],
}

const newCanvas: EditorType = {
  canvas: canvas,
  templates: template1,
  selectBlock: [],
}

export default newCanvas

//текст короткий длинный
//картинки все виды
//холст где все
