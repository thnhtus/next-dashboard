import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  pathName: string | undefined
}

const initialState: State = {
  pathName: undefined,
}

type CR<T> = CaseReducer<State, PayloadAction<T>>

//reducers
const setPathNameCR: CR<{ path: string }> = (state, action) => ({
  ...state,
  pathName: action.payload.path,
})

const slice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setPathName: setPathNameCR,
  },
})

export const { setPathName } = slice.actions

export default slice.reducer
