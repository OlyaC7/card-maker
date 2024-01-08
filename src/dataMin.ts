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
  ArtType,
} from './types'

const background1: BackgroundType = {
  type: 'link',
  data: 'https://www.fonstola.ru/pic/201404/1680x1050/fonstola.ru_144383.jpg',
}

const size1: SizeType = {
  width: 718,
  height: 512,
}

const picture1: PictureType = {
  type: 'picture',
  pictureType: 'link',
  data: 'https://themaykl.ru/wp-content/uploads/shchenki-6-360x270.jpg',
  id: '8',
  position: {
    x: 60,
    y: 60,
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
  backgroundColor: 'unset',
  fontStyle: fontStyle1,
  id: '9',
  position: {
    x: 0,
    y: 110,
  },
  size: {
    width: 100,
    height: 50,
  },
}

const figure1: FigureType = {
  type: 'figure',
  fill: '#ffa812',
  stroke: '',
  strokeWidth: '',
  figureType: ArtType.Rect,
  id: '10',
  position: {
    x: 650,
    y: 321,
  },
  size: {
    width: 357,
    height: 172,
  },
}

const figure2: FigureType = {
  type: 'figure',
  fill: '#ffa812',
  stroke: '',
  strokeWidth: '',
  figureType: ArtType.Circle,
  id: '10',
  position: {
    x: 650,
    y: 321,
  },
  size: {
    width: 357,
    height: 172,
  },
}

const figure3: FigureType = {
  type: 'figure',
  fill: '#ffa812',
  stroke: '',
  strokeWidth: '',
  figureType: ArtType.Star,
  id: '10',
  position: {
    x: 650,
    y: 321,
  },
  size: {
    width: 357,
    height: 172,
  },
}

const canvas1: CanvasType = {
  objects: [picture1, text1, figure1, figure2, figure3],
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

export default {
  newCanvas,
  picture1,
  text1,
  figure1,
  figure2,
  figure3,
  canvas1,
}
