import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import React, { useEffect } from 'react'
import Cards from '@src/components/cards/cards'
import ProjectBtn from '@src/components/projectBtn/projectBtn'
import getProjectsAction from '@src/store/projects/actions'

import './projects.scss'

const Projects: React.FC = () => {
  const dispatch = useAppDispatch()
  const { data, isLoading, haveData } = useAppSelector(
    (state) => state.projects
  )

  useEffect(() => {
    if (!haveData) {
      dispatch(getProjectsAction())
    }
  }, [])

  if (isLoading) return <h1>_loading...</h1>
  if (!data) return null

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
