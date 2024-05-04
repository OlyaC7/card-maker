import { EditorActions, UpdateSettingsAction } from './actions'

function createAddTextBlockAction() {
  return {
    type: EditorActions.ADD_TEXTBLOCK,
  }
}

function createAddPictureBlockAction() {
  return {
    type: EditorActions.ADD_PICTUREBLOCK,
  }
}

function createDeleteBlockAction() {
  return {
    type: EditorActions.DELETE_SELECTED_ITEMS,
  }
}

function createChangeTextAction() {
  return {
    type: EditorActions.CHANGE_TEXT,
  }
}

function createChangeSelectionAction(blockId: string) {
  return {
    type: EditorActions.CHANGE_SELECTION,
    payload: {
      id: blockId,
    },
  }
}

function createChangeSettingsAction(
  payload: Pick<UpdateSettingsAction, 'payload'>,
) {
  return {
    type: EditorActions.UPDATE_SETTINGS,
    ...payload,
  }
}

export {
  createAddTextBlockAction,
  createAddPictureBlockAction,
  createDeleteBlockAction,
  createChangeTextAction,
  createChangeSelectionAction,
  createChangeSettingsAction,
}
