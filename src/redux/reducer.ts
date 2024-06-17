import { Action, EditorActions } from './actions'
import {
  EditorType,
  TextType,
  PictureType,
  FigureType,
  ArtType,
} from '../types'
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
        fontWeight: 400,
        fontStyle: 'normal',
        textDecoration: 'none',
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
    case EditorActions.CHANGE_COLOR: {
      const newObjects = state.canvas.objects.map((object) => {
        if (action.payload.ids.includes(object.id) && object.type === 'text') {
          return {
            ...object,
            color: action.payload.color,
          }
        } else if (
          action.payload.ids.includes(object.id) &&
          object.type === 'figure'
        ) {
          return {
            ...object,
            fill: action.payload.color,
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
    case EditorActions.CHANGE_BACKGROUND_COLOR: {
      const newObjects = state.canvas.objects.map((object) => {
        if (action.payload.ids.includes(object.id) && object.type === 'text') {
          return {
            ...object,
            backgroundColor: action.payload.backgroundColor,
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
    case EditorActions.CHANGE_BACKGROUND_CANVAS_COLOR: {
      const newState = {
        ...state,
        canvas: {
          ...state.canvas,
          background: {
            type: 'color',
            data: action.payload.backgroundColor,
          },
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

    case EditorActions.CHANGE_FIGURE_TYPE: {
      const newObjects = state.canvas.objects.map((object) => {
        if (
          action.payload.ids.includes(object.id) &&
          object.type === 'figure'
        ) {
          return {
            ...object,
            figureType: action.payload.figureType,
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
    case EditorActions.ADD_FIGUREBLOCK: {
      const newFigure: FigureType = {
        type: 'figure',
        fill: '#FFFFFF',
        figureType: ArtType.Rect,
        stroke: '#FFFFFF',
        strokeWidth: '10',
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
          objects: [...state.canvas.objects, { ...newFigure }],
        },
      }
      return newState
    }
    case EditorActions.CHANGE_TEXT_BOLD: {
      const newObjects = state.canvas.objects.map((object) => {
        if (state.selectBlock.includes(object.id)) {
          if (object.type === 'text' && object.fontWeight !== 700) {
            return {
              ...object,
              fontWeight: 700,
            }
          } else {
            return {
              ...object,
              fontWeight: 400,
            }
          }
        } else {
          return {
            ...object,
          }
        }
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
    case EditorActions.CHANGE_TEXT_ITALIC: {
      const newObjects = state.canvas.objects.map((object) => {
        if (state.selectBlock.includes(object.id)) {
          if (object.type === 'text' && object.fontStyle !== 'italic') {
            return {
              ...object,
              fontStyle: 'italic',
            }
          } else {
            return {
              ...object,
              fontStyle: 'normal',
            }
          }
        } else {
          return {
            ...object,
          }
        }
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
    case EditorActions.CHANGE_TEXT_DECORATION: {
      const newObjects = state.canvas.objects.map((object) => {
        if (state.selectBlock.includes(object.id) && object.type === 'text') {
          if (object.textDecoration === 'none') {
            return {
              ...object,
              textDecoration: 'underline',
            }
          } else if (object.textDecoration === 'underline') {
            return {
              ...object,
              textDecoration: 'none',
            }
          } else {
            return {
              ...object,
            }
          }
        } else {
          return {
            ...object,
          }
        }
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
    case EditorActions.CHANGE_PICTURE: {
      const newObjects = state.canvas.objects.map((object) => {
        if (
          state.selectBlock.includes(object.id) &&
          object.type === 'picture'
        ) {
          return {
            ...object,
            data: action.payload.data,
            pictureType: action.payload.pictureType,
          }
        } else {
          return {
            ...object,
          }
        }
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
    case EditorActions.CHANGE_PICTURE_CANVAS: {
      const newState = {
        ...state,
        canvas: {
          ...state.canvas,
          background: {
            type: action.payload.type,
            data: `center/100% no-repeat URL(${action.payload.data})`,
          },
        },
      }
      return newState
    }
    case EditorActions.CHANGE_CANVAS_SIZE: {
      const newState = {
        ...state,
        canvas: {
          ...state.canvas,
          size: {
            width: action.payload.width,
            height: action.payload.height,
          },
        },
      }
      return newState
    }
    case EditorActions.OPEN_NEW_EDITOR: {
      const newState = action.payload
      return newState
    }
    case EditorActions.CHANGE_TEXT: {
      const newObjects = state.canvas.objects.map((object) => {
        if (state.selectBlock.includes(object.id) && object.type === 'text') {
          return {
            ...object,
            text: action.payload.text,
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
