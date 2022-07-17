import { combineReducers, configureStore } from '@reduxjs/toolkit'
import projectsSlice from './projects/projectsSlice'

const rootReducer = combineReducers({
  projects: projectsSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

export type AppState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
