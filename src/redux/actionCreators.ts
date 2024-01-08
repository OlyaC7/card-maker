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

export { createAddTextBlockAction, createAddPictureBlockAction }
