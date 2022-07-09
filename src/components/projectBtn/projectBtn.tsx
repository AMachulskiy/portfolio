import { ReactFC } from '@src/interfaces/react'
import React from 'react'

import './projectBtn.scss'

const ProjectBtn: ReactFC = ({ children }) => {
  return <div className='project__btn'>{children}</div>
}

export default ProjectBtn
