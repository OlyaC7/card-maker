import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { rootReducer } from './reducer'
import { bindActionCreators } from 'redux'
import { createChangeSizeAction } from './actionCreators/imageActionCreators'

type RootState = ReturnType<typeof rootReducer>

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const useAppActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators({ ...createChangeSizeAction }, dispatch)
}

export { useAppSelector, useAppActions, type RootState }
