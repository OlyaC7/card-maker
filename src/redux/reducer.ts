import { Action, EditorActions } from './actions'
import { EditorType, TextType, PictureType } from '../types'
import { combineReducers } from 'redux'
import newCanvas from '../dataMiddle'
import { generateRandomId } from '../utils/generateRandomId'

const editorReducer = (state: EditorType = newCanvas, action: Action) => {
  console.log(action.type)
  switch (action.type) {
    case EditorActions.ADD_TEXTBLOCK: {
      const newText: TextType = {
        type: 'text',
        text: 'Текст',
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: '18px',
        backgroundColor: 'unset',
        fontStyle: {
          bold: false,
          italic: false,
        },
        id: generateRandomId(),
        position: {
          x: 0,
          y: 0,
        },
        size: {
          width: 100,
          height: 50,
        },
      }

      const newState = {
        ...state,
        canvas: {
          ...state.canvas,
          objects: [...state.canvas.objects, { ...newText }],
        },
      }
      return newState
    }
    case EditorActions.ADD_PICTUREBLOCK: {
      const newPicture: PictureType = {
        type: 'picture',
        pictureType: 'link',
        data: 'https://a.d-cd.net/c45e729s-1920.jpg',
        id: generateRandomId(),
        position: {
          x: 0,
          y: 0,
        },
        size: {
          width: 100,
          height: 50,
        },
      }

      const newState = {
        ...state,
        canvas: {
          ...state.canvas,
          objects: [...state.canvas.objects, { ...newPicture }],
        },
      }
      return newState
    }
    case EditorActions.CHANGE_TEXT: {
      const newState = {
        ...state,
        canvas: {
          ...state.canvas,
          objects: [...state.canvas.objects],
        },
      }
      return newState
    }
    case EditorActions.CHANGE_SELECTION: {
      const figureId = action.payload.id

      const isFigureSelected = state.selectBlock.find(x => x === figureId)
      const selectBlock = isFigureSelected
        ? state.selectBlock.filter(x => x !== figureId)
        : [...state.selectBlock, figureId]
        
      return {
        ...state,
        selectBlock
      }
    }
    default:
      return { ...state }
  }
}

const rootReducer = combineReducers({
  editor: editorReducer,
})

export { rootReducer }
