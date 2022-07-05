import React from 'react'
import Typewriter from 'typewriter-effect'

import myName from '@src/data/myName'
import './header.scss'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='myname'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(1500).typeString(`${myName.name}`).start()
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
