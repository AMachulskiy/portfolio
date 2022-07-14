import React from 'react'
import Typewriter from 'typewriter-effect'

import './home.scss'
import Slider from '@src/components/slider/slider'

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
        <Slider />
      </div>
    </section>
  )
}

export default Home
