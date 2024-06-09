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

// function createChangeTextAction(newText: string) {
//   return {
//     type: EditorActions.CHANGE_TEXT,
//     payload: newText,
//   }
// }

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

function createChangeColorAction(blocksIds: string[], color: string) {
  return {
    type: EditorActions.CHANGE_COLOR,
    payload: {
      ids: blocksIds,
      color: color,
    },
  }
}

function createChangeBackgroundColorAction(
  blocksIds: string[],
  backgroundColor: string,
) {
  return {
    type: EditorActions.CHANGE_BACKGROUND_COLOR,
    payload: {
      ids: blocksIds,
      backgroundColor: backgroundColor,
    },
  }
}

function createChangeTextFontSize(blocksIds: string[], fontSize: string) {
  return {
    type: EditorActions.CHANGE_TEXT_FONT_SIZE,
    payload: {
      ids: blocksIds,
      fontSize: fontSize,
    },
  }
}

function createChangeTextFontFamily(blocksIds: string[], fontFamily: string) {
  return {
    type: EditorActions.CHANGE_TEXT_FONT_FAMILY,
    payload: {
      ids: blocksIds,
      fontFamily: fontFamily,
    },
  }
}

function createSelectFigureType(blocksIds: string[], figureType: string) {
  return {
    type: EditorActions.CHANGE_FIGURE_TYPE,
    payload: {
      ids: blocksIds,
      figureType: +figureType,
    },
  }
}

function createAddFigureBlockAction() {
  return {
    type: EditorActions.ADD_FIGUREBLOCK,
  }
}

function createChangeTextBoldAction() {
  return {
    type: EditorActions.CHANGE_TEXT_BOLD,
  }
}

function createChangeTextItalicAction() {
  return {
    type: EditorActions.CHANGE_TEXT_ITALIC,
  }
}

function createChangeTextDecorationAction() {
  return {
    type: EditorActions.CHANGE_TEXT_DECORATION,
  }
}

function createChangeImage(
  blocksIds: string[],
  data: string,
  pictureType: string,
) {
  return {
    type: EditorActions.CHANGE_PICTURE,
    payload: {
      ids: blocksIds,
      data: data,
      pictureType: pictureType,
    },
  }
}

export {
  createAddTextBlockAction,
  createAddPictureBlockAction,
  createDeleteBlockAction,
  // createChangeTextAction,
  createChangeSelectionAction,
  createChangeSettingsAction,
  createChangeColorAction,
  createChangeBackgroundColorAction,
  createChangeTextFontSize,
  createChangeTextFontFamily,
  createAddFigureBlockAction,
  createSelectFigureType,
  createChangeTextBoldAction,
  createChangeTextItalicAction,
  createChangeTextDecorationAction,
  createChangeImage,
}
