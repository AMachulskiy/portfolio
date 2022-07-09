import React from 'react'
import Cards from '@src/components/cards/cards'

import './projects.scss'
import ProjectBtn from '@src/components/projectBtn/projectBtn'

const Projects: React.FC = () => {
  return (
    <section className='projects'>
      <div className='projects__title'>// Top projects</div>
      <div className='project__wrap'>
        <Cards title='Project 1' desc='245 commits' />
        <div className='project__desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque
          nisi ex, doloremque neque nam cupiditate ad, quaerat quasi, fugit
          aliquid. Alias nobis odio cumque consequuntur sed autem laborum
          eveniet!
        </div>
        <ProjectBtn>Check in GitHub</ProjectBtn>
      </div>
      <div className='project__wrap'>
        <Cards title='Project 2' desc='138 commits' />
        <div className='project__desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque
          nisi ex, doloremque neque nam cupiditate ad, quaerat quasi, fugit
          aliquid. Alias nobis odio cumque consequuntur sed autem laborum
          eveniet!
        </div>
        <ProjectBtn>Check in GitHub</ProjectBtn>
      </div>
    </section>
  )
}

export default Projects
