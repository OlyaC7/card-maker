/* eslint-disable no-unused-vars */
enum EditorActions {
  ADD_TEXTBLOCK = 'ADD_TEXTBLOCK',
  DELETE_TEXTBLOCK = 'DELETE_TEXTBLOCK',
  ADD_PICTUREBLOCK = 'ADD_PICTUREBLOCK',
  OPEN_TEXTTOOLBAR = 'OPEN_TEXTTOOLBAR',
  CHANGE_TEXT = 'CHANGE_TEXT',
  ADD_FIGUREBLOCK = 'ADD_FIGUREBLOCK',
}

type AddTextBlockAction = {
  type: EditorActions.ADD_TEXTBLOCK
}

type AddPictureBlockAction = {
  type: EditorActions.ADD_PICTUREBLOCK
}

type OpenTextToolBarAction = {
  type: EditorActions.OPEN_TEXTTOOLBAR
}

type DeleteTextBlockAction = {
  type: EditorActions.DELETE_TEXTBLOCK
  payload: {
    textId: string
  }
}

type ChangeTextAction = {
  type: EditorActions.CHANGE_TEXT
}

type Action =
  | AddTextBlockAction
  | DeleteTextBlockAction
  | AddPictureBlockAction
  | OpenTextToolBarAction
  | ChangeTextAction

export { EditorActions, type Action }
