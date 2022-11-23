import React from 'react'
import Typewriter from 'typewriter-effect'
import { BiCodeAlt } from 'react-icons/bi'

import './home.scss'

const Home: React.FC = () => {
  return (
    <section className='home'>
      <div className='home__about'>
        <div className='home__greeting'>Привет! Меня зовут</div>
        <div className='home__title'>Алексей Мачульский</div>
        <div className='home__status'>Фронтенд-разработчик</div>
        <div className='home__code'>
          <div className='home__code-title'>
            portfolio{'>'} <span>npx</span> create-react-app portfolio
          </div>
          <div className='home__code-input'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(3500).typeString('Happy hacking!').start()
              }}
            />
          </div>
        </div>
      </div>
      <div className='home__app'>
        <BiCodeAlt className='code-logo' />
        <svg
          className='shape-1'
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
        >
          {' '}
          <defs>
            {' '}
            <linearGradient id='sw-gradient1' x1='0' x2='1' y1='1' y2='0'>
              {' '}
              <stop
                id='stop1'
                stopColor='rgba(0, 15.966, 156.031, 1)'
                offset='0%'
              />{' '}
              <stop
                id='stop2'
                stopColor='rgba(131.607, 112.384, 255, 1)'
                offset='100%'
              />{' '}
            </linearGradient>{' '}
          </defs>{' '}
          <path
            fill='none'
            d='M20.6,-35.6C27.3,-31.9,33.7,-27.5,37.9,-21.4C42.1,-15.4,44.2,-7.7,44.4,0.1C44.7,8,43,15.9,38.7,21.7C34.3,27.6,27.2,31.3,20.4,35.3C13.5,39.2,6.7,43.5,-0.4,44.3C-7.6,45,-15.2,42.3,-21.7,38.1C-28.1,33.8,-33.3,28,-36.5,21.4C-39.7,14.8,-40.9,7.4,-39.9,0.5C-39,-6.3,-35.9,-12.6,-32.7,-19.2C-29.5,-25.9,-26.2,-32.8,-20.7,-37.1C-15.3,-41.5,-7.6,-43.2,-0.3,-42.7C7,-42.1,14,-39.2,20.6,-35.6Z'
            width='100%'
            height='100%'
            transform='translate(50 50)'
            strokeWidth='0.5'
            stroke='url(#sw-gradient1)'
          />{' '}
        </svg>
        <svg
          className='shape-2'
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
        >
          {' '}
          <defs>
            {' '}
            <linearGradient id='sw-gradient2' x1='0' x2='1' y1='1' y2='0'>
              {' '}
              <stop
                id='stop1'
                stopColor='rgba(0, 19.228, 187.906, 1)'
                offset='0%'
              />{' '}
              <stop
                id='stop2'
                stopColor='rgba(147.8, 131.099, 255, 1)'
                offset='100%'
              />{' '}
            </linearGradient>{' '}
          </defs>{' '}
          <path
            fill='none'
            d='M20.6,-34.8C27.2,-31.9,33.3,-27.3,37.8,-21.3C42.2,-15.2,44.9,-7.6,43.9,-0.6C42.9,6.5,38.3,13,34.1,19.5C30,26,26.2,32.5,20.6,37.3C15,42.1,7.5,45.3,-0.2,45.6C-7.9,45.9,-15.8,43.5,-21.5,38.7C-27.2,34,-30.7,26.8,-34.7,20C-38.7,13.1,-43.3,6.6,-43.4,-0.1C-43.5,-6.7,-39.1,-13.4,-34.4,-19.1C-29.8,-24.8,-24.8,-29.6,-19,-33C-13.3,-36.4,-6.6,-38.4,0.2,-38.7C7,-39.1,14,-37.7,20.6,-34.8Z'
            width='100%'
            height='100%'
            transform='translate(50 50)'
            strokeWidth='0.5'
            stroke='url(#sw-gradient2)'
          />{' '}
        </svg>
        <svg
          className='shape-3'
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
        >
          {' '}
          <defs>
            {' '}
            <linearGradient id='sw-gradient3' x1='0' x2='1' y1='1' y2='0'>
              {' '}
              <stop
                id='stop1'
                stopColor='rgba(19.858, 37.753, 194.736, 1)'
                offset='0%'
              />{' '}
              <stop
                id='stop2'
                stopColor='rgba(143.042, 133.57, 203.843, 1)'
                offset='100%'
              />{' '}
            </linearGradient>{' '}
          </defs>{' '}
          <path
            fill='none'
            d='M22.9,-39.5C29.9,-35.6,36.1,-30,40.2,-23.1C44.3,-16.2,46.5,-8.1,45.3,-0.7C44,6.7,39.3,13.3,35.1,20.2C30.9,27,27.3,34,21.6,38.7C15.8,43.4,7.9,45.7,0.5,44.8C-6.9,43.9,-13.8,39.9,-20.9,36C-28,32.1,-35.2,28.3,-38.9,22.3C-42.5,16.3,-42.5,8.2,-40.9,0.9C-39.3,-6.3,-36,-12.6,-32.3,-18.4C-28.5,-24.1,-24.2,-29.3,-18.8,-34.1C-13.3,-38.9,-6.6,-43.3,0.6,-44.4C7.9,-45.6,15.9,-43.4,22.9,-39.5Z'
            width='100%'
            height='100%'
            transform='translate(50 50)'
            strokeWidth='0.5'
            stroke='url(#sw-gradient3)'
          />{' '}
        </svg>
        <div className='home__app-text'>
          _начни писать <span>свой</span> код
        </div>
      </div>
    </section>
  )
}

export default Home
