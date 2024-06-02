import { Action, EditorActions } from './actions'
import { EditorType, TextType, PictureType } from '../types'
import { combineReducers } from 'redux'
import newCanvas from '../dataMiddle'
import { generateRandomId } from '../utils/generateRandomId'

const editorReducer = (state: EditorType = newCanvas, action: Action) => {
  switch (action.type) {
    case EditorActions.ADD_TEXTBLOCK: {
      const newText: TextType = {
        type: 'text',
        text: 'New Text',
        color: '#FFFFFFF',
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

      const isFigureSelected = state.selectBlock.find((x) => x === figureId)
      const selectBlock = isFigureSelected
        ? state.selectBlock.filter((x) => x !== figureId)
        : [...state.selectBlock, figureId]
      return {
        ...state,
        selectBlock,
      }
    }
    case EditorActions.DELETE_SELECTED_ITEMS:
      return {
        ...state,
        canvas: {
          ...state.canvas,
          objects: state.canvas.objects.filter(
            (x) => !state.selectBlock.includes(x.id),
          ),
        },
        selectBlock: [],
      }
    case EditorActions.UPDATE_SETTINGS: {
      const { id: figureId, position, size } = action.payload
      const figure = state.canvas.objects.find((x) => x.id === figureId)
      if (figure && (position || size)) {
        return {
          ...state,
          canvas: {
            ...state.canvas,
            objects: state.canvas.objects.map((x) => {
              if (x.id === figureId) {
                return {
                  ...x,
                  position: position ?? x.position,
                  size: size ?? x.size,
                }
              }
              return x
            }),
          },
        }
      }
      return state
    }
    case EditorActions.CHANGE_TEXT_COLOR: {
      const newObjects = state.canvas.objects.map((object) => {
        if (action.payload.ids.includes(object.id) && object.type === 'text') {
          return {
            ...object,
            color: action.payload.color,
          }
        }

        return object
      })

      const newState = {
        ...state,
        canvas: {
          ...state.canvas,
          objects: newObjects,
        },
      }
      return newState
    }
    case EditorActions.CHANGE_TEXT_FONT_SIZE: {
      const newObjects = state.canvas.objects.map((object) => {
        if (action.payload.ids.includes(object.id) && object.type === 'text') {
          return {
            ...object,
            fontSize: action.payload.fontSize + 'px',
          }
        }
        return object
      })

      const newState = {
        ...state,
        canvas: {
          ...state.canvas,
          objects: newObjects,
        },
      }

      return newState
    }
    case EditorActions.CHANGE_TEXT_FONT_FAMILY: {
      const newObjects = state.canvas.objects.map((object) => {
        if (action.payload.ids.includes(object.id) && object.type === 'text') {
          return {
            ...object,
            fontFamily: action.payload.fontFamily,
          }
        }

        return object
      })

      const newState = {
        ...state,
        canvas: {
          ...state.canvas,
          objects: newObjects,
        },
      }

      return newState
    }
    default:
      return { ...state }
  }
}

const rootReducer = combineReducers({
  editor: editorReducer,
})

export { rootReducer }
