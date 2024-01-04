import { combineReducers } from 'redux'
import { Action } from './actions/imageActions'

const imageReducer = (
  initialState: { width: 200; height: 200 },
  action: Action,
) => {
  switch (action.type) {
    case 'CHANGE_SIZE': {
      const newState = {
        width: action.payload.newSize.width,
        height: action.payload.newSize.height,
      }
      return newState
    }
  }
}

const rootReducer = combineReducers({
  image: imageReducer,
})
export { rootReducer }
