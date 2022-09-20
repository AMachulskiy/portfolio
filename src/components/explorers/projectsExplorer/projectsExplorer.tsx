import { ReactFC } from '@src/interfaces/react'
import Projects from '@src/pages/projects/projects'
import React from 'react'

import './projectsExplorer.scss'

const ProjectsExplorer: ReactFC = () => {
  return (
    <div className='project-explorer'>
      <div className='project-explorer__sidebar'>1</div>
      <div className='project-explorer__content'>
        <Projects />
      </div>
      <div className='project-explorer__elem'>
        <div />
      </div>
    </div>
  )
}

export default ProjectsExplorer
