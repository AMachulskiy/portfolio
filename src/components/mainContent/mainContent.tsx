import React from 'react'
import ProjectSlider from '../projectSlider/projectSlider'

import './mainContent.scss'

const MainContent = () => {
  return (
    <section className='main__content'>
      <div className='main__about'>
        <div className='main__about-greeting'>Hello! I am</div>
        <div className='main__about-title'>Aleksey Machulskiy</div>
        <div className='main__about-status'>Junior front-end developer</div>
        <div className='main__about-code'>
          <div className='about__code-title'>
            // write the code below to continue:
          </div>
          <div className='about__code-input'>
            <span>˃</span> whois
          </div>
        </div>
      </div>
      <div className='main__app'>
        <div className='main__app-blur' />
        <ProjectSlider />
      </div>
    </section>
  )
}

export default MainContent
