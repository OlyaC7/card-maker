import { PositionType, SizeType } from '../types'

/* eslint-disable no-unused-vars */
enum EditorActions {
  ADD_TEXTBLOCK = 'ADD_TEXTBLOCK',
  DELETE_SELECTED_ITEMS = 'DELETE_SELECTED_ITEMS',
  ADD_PICTUREBLOCK = 'ADD_PICTUREBLOCK',
  OPEN_TEXTTOOLBAR = 'OPEN_TEXTTOOLBAR',
  CHANGE_TEXT = 'CHANGE_TEXT',
  ADD_FIGUREBLOCK = 'ADD_FIGUREBLOCK',
  CHANGE_SELECTION = 'CHANGE_SELECTION',
  UPDATE_SETTINGS = 'UPDATE_SETTINGS',
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
  type: EditorActions.DELETE_SELECTED_ITEMS
  payload: {
    textId: string
  }
}

type ChangeTextAction = {
  type: EditorActions.CHANGE_TEXT
}

type ChangeSelectionAction = {
  type: EditorActions.CHANGE_SELECTION
  payload: {
    id: string
  }
}

type UpdateSettingsAction = {
  type: EditorActions.UPDATE_SETTINGS
  payload: {
    id: string
    size?: SizeType
    position?: PositionType
  }
}

type Action =
  | AddTextBlockAction
  | DeleteTextBlockAction
  | AddPictureBlockAction
  | OpenTextToolBarAction
  | ChangeTextAction
  | ChangeSelectionAction
  | UpdateSettingsAction

export { EditorActions, type Action, type UpdateSettingsAction }
