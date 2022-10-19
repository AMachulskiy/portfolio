import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import Projects from './projects/projects'

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
        <Projects />
      </div>
      <div className='project-explorer__elem' />
    </div>
  )
}

export default ProjectsExplorer
