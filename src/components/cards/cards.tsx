import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { ICardsProps } from '@src/interfaces/ICardsProps'

import './cards.scss'

const Cards: ReactFC<ICardsProps> = ({ title, desc }) => {
  return (
    <div className='card'>
      <div className='card__header'>
        <div className='card__title'>{title}</div>
        <div className='card__desc'>{desc}</div>
      </div>
      <div className='card__content'>
        <div className='card__content-txt'>{'/**'}</div>
        <div className='card__content-text'>
          <p>* Integrated 4 different APIs</p>
          <p>* Over 200 different components</p>
          <p>* React, Redux</p>
          <p>* Full storybook setup</p>
          <p>*/</p>
        </div>
        <div className='card__button'>see the project</div>
      </div>
    </div>
  )
}
export default Cards
