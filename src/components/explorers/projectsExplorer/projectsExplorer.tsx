import ProjectCard from '@src/components/cards/projectCard/projectCard'
import FilterProjects from '@src/components/filterProjects/FilterProjects'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { ICheckbox } from '@src/interfaces/filters'
import { IProject } from '@src/interfaces/IProject'
import { ReactFC } from '@src/interfaces/react'
import getProjectsAction from '@src/store/projects/actions'
import { setFilters } from '@src/store/projects/projectsSlice'
import React, { ReactNode, useEffect } from 'react'

import './projectsExplorer.scss'

const ProjectsExplorer: ReactFC = () => {
  const dispatch = useAppDispatch()
  const {
    projects,
    filters,
    selectedFilters,
    filteredProjects,
    isLoading,
    haveData,
  } = useAppSelector((state) => state.projects)

  useEffect(() => {
    if (!haveData) {
      dispatch(getProjectsAction())
    }
  }, [haveData])

  const renderProjects = () => {
    const projectsCards: ReactNode[] = []
    filteredProjects.forEach((project: IProject) => {
      projectsCards.push(<ProjectCard key={project.id} project={project} />)
    })
    return projectsCards
  }

  const cahngeTehnology = (technology: ICheckbox) => {
    const { technologies } = selectedFilters
    const isSelected = technologies.some((t) => t.value === technology.value)
    const withoutSelectedBrand = technologies.filter(
      (t) => t.value !== technology.value
    )
    dispatch(
      setFilters({
        ...selectedFilters,
        technologies: isSelected
          ? withoutSelectedBrand
          : [...technologies, technology],
      })
    )
  }

  if (isLoading || !haveData)
    return <h1 className='projects__isloading'>_loading...</h1>
  if (!projects) return null

  return (
    <div className='project-explorer'>
      <div className='project-explorer__sidebar'>
        <FilterProjects
          title='Технологии'
          data={filters.technologies}
          selectedData={selectedFilters.technologies}
          onChange={cahngeTehnology}
        />
      </div>
      <div className='project-explorer__content'>{renderProjects()}</div>
      <div className='project-explorer__elem' />
    </div>
  )
}

export default ProjectsExplorer
