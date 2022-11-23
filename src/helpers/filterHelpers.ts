import {
  IProjectsFilters,
  IProjectsSelectedFilters,
} from '@src/interfaces/filters'
import { IProject } from '@src/interfaces/IProject'

const filterHelpers = {
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
  getFilteredProjects: (
    filter: IProjectsSelectedFilters,
    projects: IProject[],
    filterByAll = true
  ): IProject[] => {
    const { technologies } = filter

    const filteredProjects = projects.filter((project) => {
      if (filterByAll) {
        const haveTehnology = technologies.length
          ? technologies.some((t) => t.value === project.technology.value)
          : true
        return haveTehnology
      }
      return 0
    })
    return filteredProjects
  },
}

export default filterHelpers
