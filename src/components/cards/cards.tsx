import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { ICardsProps } from '@src/interfaces/ICardsProps'

import './cards.scss'

const Cards: ReactFC<ICardsProps> = ({ title, desc }) => {
  return (
    <div className='slider__wrap'>
      <div className='slider'>
        <div className='slide'>
          <div className='slide__header'>
            <div className='slide__title'>{title}</div>
            <div className='slide__desc'>{desc}</div>
          </div>
          <div className='slide__content'>
            <div className='slide__content-txt'>{'/**'}</div>
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
export default Cards
