export const codeFragmentOne = `
  import { createAsyncThunk } from '@reduxjs/toolkit'
  import ProjectService from '@src/services/projectService'

  const projectService = new ProjectService()

  const getProjectsAction = createAsyncThunk('projects', () => {
    return projectService.getProjects()
  })

  export default getProjectsAction
`

export const codeFragmentTwo = `
getFilters: (projects: IProject[]) => {
    const initialFilters: IProjectsFilters = {
      technologies: [],
    }
    const filtersData = projects.reduce(
      (filters, project): IProjectsFilters => {
        const { technologies } = filters
        return {
          technologies: technologies.some(
            (t) => t.value === project.technology.value
          )
            ? technologies
            : [...technologies, project.technology],
        }
      },
      initialFilters
    )
    return filtersData
  },
`
