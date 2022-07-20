import { createAsyncThunk } from '@reduxjs/toolkit'
import ProjectService from '@src/services/projectService'

const projectService = new ProjectService()

const getProjectsAction = createAsyncThunk('projects', () => {
  return projectService.getProjects()
})

export default getProjectsAction
