import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProject } from '@src/interfaces/IProject'
import getProjectsAction from './actions'

interface ProjectsState {
  data: IProject[]
  isLoading: boolean
  haveData: boolean
}

const initialState: ProjectsState = {
  data: null,
  isLoading: false,
  haveData: false,
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: {
    [getProjectsAction.pending.type](state) {
      state.isLoading = true
    },
    [getProjectsAction.fulfilled.type](
      state,
      action: PayloadAction<IProject[]>
    ) {
      state.data = action.payload
      state.isLoading = false
      state.haveData = true
    },
  },
})

export default projectsSlice
