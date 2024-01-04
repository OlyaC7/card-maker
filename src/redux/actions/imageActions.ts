/* eslint-disable no-unused-vars */
enum ImageActions {
  CHANGE_SIZE = 'CHANGE_SIZE',
}

type ChangeSizeAction = {
  type: ImageActions.CHANGE_SIZE
  payload: {
    id: string
    newSize: {
      width: number
      height: number
    }
  }
}
type Action = ChangeSizeAction

export { ImageActions, type Action }
