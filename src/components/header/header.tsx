import React from 'react'
import Typewriter from 'typewriter-effect'

import { IHeaderProps } from '@src/interfaces/IHeaderProps'

import './header.scss'

const myName: IHeaderProps = {
  name: 'aleksey_machulskiy',
}

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
