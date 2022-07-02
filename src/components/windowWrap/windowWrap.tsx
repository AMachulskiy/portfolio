import React from 'react'
import Header from '../header/header'
import NavMenu from '../navMenu/navMenu'

import './windowWrap.scss'

const WindowWrap = () => {
  return (
    <div className='window'>
      <div className='container'>
        <Header />
        <NavMenu />
        <footer className='footer'>FOOTER</footer>
      </div>
    </div>
  )
}

export default WindowWrap
