/* eslint-disable no-unused-vars */
import { PositionType, SizeType } from '../types'

enum EditorActions {
  ADD_TEXTBLOCK = 'ADD_TEXTBLOCK',
  DELETE_SELECTED_ITEMS = 'DELETE_SELECTED_ITEMS',
  ADD_PICTUREBLOCK = 'ADD_PICTUREBLOCK',
  CHANGE_TEXT = 'CHANGE_TEXT',
  ADD_FIGUREBLOCK = 'ADD_FIGUREBLOCK',
  CHANGE_SELECTION = 'CHANGE_SELECTION',
  UPDATE_SETTINGS = 'UPDATE_SETTINGS',
  CHANGE_TEXT_COLOR = 'CHANGE_TEXT_COLOR',
}

type AddTextBlockAction = {
  type: EditorActions.ADD_TEXTBLOCK
}

type AddPictureBlockAction = {
  type: EditorActions.ADD_PICTUREBLOCK
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

type ChangeTextColorAction = {
  type: EditorActions.CHANGE_TEXT_COLOR
  payload: {
    ids: string[]
    color: string
  }
}

type Action =
  | AddTextBlockAction
  | DeleteTextBlockAction
  | AddPictureBlockAction
  | ChangeTextAction
  | ChangeSelectionAction
  | UpdateSettingsAction
  | ChangeTextColorAction

export { EditorActions, type Action, type UpdateSettingsAction }
