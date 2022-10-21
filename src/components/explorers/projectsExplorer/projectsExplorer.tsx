import ProjectCard from '@src/components/cards/projectCard/projectCard'
import { ReactFC } from '@src/interfaces/react'
import React from 'react'

import './projectsExplorer.scss'

const ProjectsExplorer: ReactFC = () => {
  return (
    <div className='project-explorer'>
      <div className='project-explorer__sidebar'>
        <div className='checkbox'>
          <label className='checkbox-elem'>
            <input type='checkbox' />
            <div />
          </label>
          <div className='checkbox-text'>HTML</div>
        </div>
      </div>
      <div className='project-explorer__content'>
        <ProjectCard
          title='Проект 1'
          subtitle='// _лендинг'
          img='../../img/xarizma-landing.jpg'
          html
          css
          description='Одностраничный сайт для караоке клуба.'
        />
        <ProjectCard
          title='Проект 2'
          subtitle='// _портфолио'
          img='../../img/portfolio.jpg'
          react
          ts
          description='Мой сайт портфолио написанный на React JS.'
        />
        <ProjectCard
          title='Проект 3'
          subtitle='// _маркетплейс'
          img='../../img/marketplace.jpg'
          react
          redux
          ts
          description='Большой проект маркеплейса написанный на React JS, Redux и TypeScript.'
        />
      </div>
      <div className='project-explorer__elem' />
    </div>
  )
}

export default ProjectsExplorer
