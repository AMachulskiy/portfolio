import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import filterHelpers from '@src/helpers/filterHelpers'
import {
  IProjectsFilters,
  IProjectsSelectedFilters,
} from '@src/interfaces/filters'
import { IProject } from '@src/interfaces/IProject'
import getProjectsAction from './actions'

interface ProjectsState {
  filters: IProjectsFilters
  selectedFilters: IProjectsSelectedFilters
  projects: IProject[]
  filteredProjects: IProject[]
  partFilteredProjects: IProject[]
  isLoading: boolean
  haveData: boolean
}

const initialState: ProjectsState = {
  filters: null,
  selectedFilters: { technologies: [] },
  projects: null,
  filteredProjects: null,
  partFilteredProjects: [],
  isLoading: false,
  haveData: false,
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<IProjectsSelectedFilters>) => {
      const selectedFilters = action.payload
      state.selectedFilters = selectedFilters
      state.filteredProjects = filterHelpers.getFilteredProjects(
        selectedFilters,
        state.projects
      )
      state.partFilteredProjects = filterHelpers.getFilteredProjects(
        selectedFilters,
        state.projects,
        false
      )
    },
  },
  extraReducers: {
    [getProjectsAction.pending.type](state) {
      state.isLoading = true
    },
    [getProjectsAction.fulfilled.type](
      state,
      action: PayloadAction<IProject[]>
    ) {
      const projects = action.payload
      const filters = filterHelpers.getFilters(projects)
      state.projects = projects
      state.filteredProjects = projects
      state.filters = filters
      state.isLoading = false
      state.haveData = true
    },
  },
})

export default projectsSlice
export const { setFilters } = projectsSlice.actions
