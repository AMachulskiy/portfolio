import React from 'react'

import './projectSlider.scss'

const ProjectSlider = () => {
  return (
    <div className='slider__wrap'>
      <div className='slider'>
        <div className='slide'>
          <div className='slide__header'>
            <div className='slide__title'>Project 1</div>
            <div className='slide__desc'>4, 592 commits</div>
          </div>
          <div className='slide__content'>
            <div className='slide__content-txt'>/**</div>
            <div className='slide__content-text'>
              <p>* Integrated 4 different APIs</p>
              <p>* Over 200 different components</p>
              <p>* React, Redux</p>
              <p>* Full storybook setup</p>
              <p>*/</p>
            </div>
            <div className='slide__button'>see the project</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectSlider
