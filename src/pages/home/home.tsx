import React from 'react'
import Typewriter from 'typewriter-effect'
import Cards from '@src/components/cards/cards'

import './home.scss'

const Home: React.FC = () => {
  return (
    <section className='home'>
      <div className='home__about'>
        <div className='home__greeting'>Hello! I am</div>
        <div className='home__title'>Aleksey Machulskiy</div>
        <div className='home__status'>Junior front-end developer</div>
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
        <div className='home__app-blur' />
        <Cards title='Project 1' desc='138 commits' />
      </div>
    </section>
  )
}

export default Home
