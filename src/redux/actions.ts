/* eslint-disable no-unused-vars */
enum EditorActions {
  ADD_TEXTBLOCK = 'ADD_TEXTBLOCK',
  DELETE_TEXTBLOCK = 'DELETE_TEXTBLOCK',
  ADD_PICTUREBLOCK = 'ADD_PICTUREBLOCK',
}

type AddTextBlockAction = {
  type: EditorActions.ADD_TEXTBLOCK
}

type AddPictureBlockAction = {
  type: EditorActions.ADD_PICTUREBLOCK
}

type DeleteTextBlockAction = {
  type: EditorActions.DELETE_TEXTBLOCK
  payload: {
    blockId: string
  }
}

type Action = AddTextBlockAction | DeleteTextBlockAction | AddPictureBlockAction

export { EditorActions, type Action }
