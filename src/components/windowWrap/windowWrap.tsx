import React from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import MainContent from '../mainContent/mainContent'
import NavMenu from '../navMenu/navMenu'

import './windowWrap.scss'

const WindowWrap: React.FC = () => {
  return (
    <div className='window'>
      <div className='container'>
        <Header />
        <NavMenu />
        <MainContent />
        <Footer />
      </div>
    </div>
  )
}

export default WindowWrap
