import { IProject } from '@src/interfaces/IProject'
import { ReactFC } from '@src/interfaces/react'
import React from 'react'

import './projectCard.scss'

interface IProjectCardProps {
  project: IProject
}

const ProjectCard: ReactFC<IProjectCardProps> = ({ project }) => {
  return (
    <div className='project-card'>
      <div className='project-card__top'>
        <div className='project__title'>
          {project.title} {project.id}
        </div>
        <div className='project__subtitle'>{project.subtitle}</div>
      </div>
      <div className='project-card__content'>
        <div className='project__img'>
          <img src={project.img} alt={project.title} />
        </div>
        <div className='project__icons'>
          <div className='project__icon'>{project.technology.title}</div>
        </div>
        <div className='project__description'>{project.description}</div>
        <a className='project__btn' href='/'>
          _показать на GitHub
        </a>
      </div>
    </div>
  )
}
export default ProjectCard
