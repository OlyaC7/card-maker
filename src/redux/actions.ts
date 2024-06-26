import { PositionType, SizeType, ArtType, EditorType } from '../types'

enum EditorActions {
  ADD_TEXTBLOCK = 'ADD_TEXTBLOCK',
  DELETE_SELECTED_ITEMS = 'DELETE_SELECTED_ITEMS',
  ADD_PICTUREBLOCK = 'ADD_PICTUREBLOCK',
  CHANGE_TEXT = 'CHANGE_TEXT',
  ADD_FIGUREBLOCK = 'ADD_FIGUREBLOCK',
  CHANGE_SELECTION = 'CHANGE_SELECTION',
  UPDATE_SETTINGS = 'UPDATE_SETTINGS',
  CHANGE_COLOR = 'CHANGE_COLOR',
  CHANGE_BACKGROUND_COLOR = 'CHANGE_BACKGROUND_COLOR',
  CHANGE_TEXT_FONT_SIZE = 'CHANGE_TEXT_FONT_SIZE',
  CHANGE_TEXT_FONT_FAMILY = 'CHANGE_TEXT_FONT_FAMILY',
  CHANGE_FIGURE_TYPE = 'CHANGE_FIGURE_TYPE',
  CHANGE_TEXT_BOLD = 'CHANGE_TEXT_BOLD',
  CHANGE_TEXT_ITALIC = 'CHANGE_TEXT_ITALIC',
  CHANGE_TEXT_DECORATION = 'CHANGE_TEXT_DECORATION',
  CHANGE_PICTURE = 'CHANGE_PICTURE',
  CHANGE_BACKGROUND_CANVAS_COLOR = 'CHANGE_BACKGROUND_CANVAS_COLOR',
  CHANGE_PICTURE_CANVAS = 'CHANGE_PICTURE_CANVAS',
  CHANGE_CANVAS_SIZE = 'CHANGE_CANVAS_SIZE',
  OPEN_NEW_EDITOR = 'OPEN_NEW_EDITOR',
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
  payload: {
    text: string
  }
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

type ChangeColorAction = {
  type: EditorActions.CHANGE_COLOR
  payload: {
    ids: string[]
    color: string
  }
}

type ChangeBackgroundColorAction = {
  type: EditorActions.CHANGE_BACKGROUND_COLOR
  payload: {
    ids: string[]
    backgroundColor: string
  }
}

type ChangeBackgroundCanvasColorAction = {
  type: EditorActions.CHANGE_BACKGROUND_CANVAS_COLOR
  payload: {
    backgroundColor: string
  }
}

type ChangeTextFontSizeAction = {
  type: EditorActions.CHANGE_TEXT_FONT_SIZE
  payload: {
    ids: string[]
    fontSize: string
  }
}

type ChangeTextFontFamilyAction = {
  type: EditorActions.CHANGE_TEXT_FONT_FAMILY
  payload: {
    ids: string[]
    fontFamily: string
  }
}

type ChangeAddFigureBlockAction = {
  type: EditorActions.ADD_FIGUREBLOCK
}

type ChangeFigureTypeAction = {
  type: EditorActions.CHANGE_FIGURE_TYPE
  payload: {
    ids: string[]
    figureType: ArtType
  }
}

type ChangeTextBoldAction = {
  type: EditorActions.CHANGE_TEXT_BOLD
}

type ChangeTextItalicAction = {
  type: EditorActions.CHANGE_TEXT_ITALIC
}

type ChangeTextDecorationAction = {
  type: EditorActions.CHANGE_TEXT_DECORATION
}

type ChangePictureAction = {
  type: EditorActions.CHANGE_PICTURE
  payload: {
    ids: string[]
    data: string
    pictureType: string
  }
}

type ChangePictureCanvasAction = {
  type: EditorActions.CHANGE_PICTURE_CANVAS
  payload: {
    data: string
    type: string
  }
}

type ChangeCanvasSizeAction = {
  type: EditorActions.CHANGE_CANVAS_SIZE
  payload: {
    width: number
    height: number
  }
}

type OpenNewEditor = {
  type: EditorActions.OPEN_NEW_EDITOR
  payload: EditorType
}

type Action =
  | AddTextBlockAction
  | DeleteTextBlockAction
  | AddPictureBlockAction
  | ChangeTextAction
  | ChangeSelectionAction
  | UpdateSettingsAction
  | ChangeColorAction
  | ChangeTextFontSizeAction
  | ChangeTextFontFamilyAction
  | ChangeAddFigureBlockAction
  | ChangeFigureTypeAction
  | ChangeTextBoldAction
  | ChangeTextItalicAction
  | ChangeTextDecorationAction
  | ChangeBackgroundColorAction
  | ChangePictureAction
  | ChangeBackgroundCanvasColorAction
  | ChangePictureCanvasAction
  | ChangeCanvasSizeAction
  | OpenNewEditor

export { EditorActions, type Action, type UpdateSettingsAction }
