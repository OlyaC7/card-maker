import { ImageActions } from '../actions/imageActions'

function createChangeSizeAction(
  id: string,
  newSize: { width: number; height: number },
) {
  return {
    type: ImageActions.CHANGE_SIZE,
    payload: {
      id,
      newSize,
    },
  }
}

export { createChangeSizeAction }
