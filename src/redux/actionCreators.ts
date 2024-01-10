import { EditorActions } from './actions'

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
    type: EditorActions.DELETE_TEXTBLOCK,
  }
}

function createChangeTextAction() {
  return {
    type: EditorActions.CHANGE_TEXT,
  }
}

export {
  createAddTextBlockAction,
  createAddPictureBlockAction,
  createDeleteBlockAction,
  createChangeTextAction,
}
