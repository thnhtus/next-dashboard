import type { TypedUseSelectorHook } from 'react-redux'
import { useSelector as _useSelector } from 'react-redux'
import { RootState } from '../store'

const useSelector: TypedUseSelectorHook<RootState> = _useSelector

export default useSelector
