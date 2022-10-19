import { ReactFC } from '@src/interfaces/react'
import React from 'react'

import './projectCard.scss'

interface IProjectCardProps {
  title: string
  subtitle: string
  img: string
  description: string
  html?: boolean
  css?: boolean
  react?: boolean
  redux?: boolean
  ts?: boolean
  vue?: boolean
}

const ProjectCard: ReactFC<IProjectCardProps> = ({
  title,
  subtitle,
  img,
  description,
  html,
  css,
  react,
  redux,
  ts,
  vue,
}) => {
  return (
    <div className='project-card'>
      <div className='project-card__top'>
        <div className='project__title'>{title}</div>
        <div className='project__subtitle'>{subtitle}</div>
      </div>
      <div className='project-card__content'>
        <div className='project__img'>
          <img src={img} alt={title} />
        </div>
        <div className='project__icons'>
          {html && <div className='project__icon-html'>HTML</div>}
          {css && <div className='project__icon-css'>CSS</div>}
          {react && <div className='project__icon-react'>React</div>}
          {redux && <div className='project__icon-redux'>Redux</div>}
          {ts && <div className='project__icon-ts'>TypeScript</div>}
          {vue && <div className='project__icon-vue'>Vue</div>}
        </div>
        <div className='project__description'>{description}</div>
        <a className='project__btn' href='/'>
          _показать на GitHub
        </a>
      </div>
    </div>
  )
}
export default ProjectCard
