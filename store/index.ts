import { configureStore } from '@reduxjs/toolkit'

import appReducers from '../slices'

const store = configureStore({
  reducer: { ...appReducers },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
