import React from 'react'
import Typewriter from 'typewriter-effect'

import './header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='myname'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(1500).typeString('aleksey_machulskiy').start()
          }}
        />
      </div>
      <div className='dots'>
        <div className='dot dot_red' />
        <div className='dot dot_yellow' />
        <div className='dot dot_green' />
      </div>
    </header>
  )
}

export default Header
