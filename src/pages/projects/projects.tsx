import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import React, { useEffect, useState } from 'react'
import Cards from '@src/components/cards/cards'
import ProjectBtn from '@src/components/projectBtn/projectBtn'
import getProjectsAction from '@src/store/projects/actions'

import './projects.scss'
import { IProject } from '@src/interfaces/IProject'
import Page404 from '../404/404'

const Projects: React.FC = () => {
  const [project, setProject] = useState<IProject[]>()
  const dispatch = useAppDispatch()
  const { data, isLoading, haveData } = useAppSelector(
    (state) => state.projects
  )

  useEffect(() => {
    if (data) {
      setProject(data)
    } else {
      setProject(null)
    }
  }, [data])

  useEffect(() => {
    if (!haveData) {
      dispatch(getProjectsAction())
    }
  }, [])

  if (isLoading) return <h1>_loading...</h1>
  if (!data) return null
  if (!project) return <Page404 />

  return (
    <section className='projects'>
      <div className='projects__title'>// Top projects</div>
      {data.map(({ id, title, commits, desc, button }) => (
        <div key={title} className='project__wrap'>
          <Cards number={id} title={title} commits={commits} />
          <div className='project__desc'>{desc}</div>
          <ProjectBtn>{button}</ProjectBtn>
        </div>
      ))}
    </section>
  )
}

export default Projects
