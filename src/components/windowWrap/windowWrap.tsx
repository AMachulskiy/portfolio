import React from 'react'
import Content from '../Content/content'
import Footer from '../footer/footer'
import Header from '../header/header'

import NavMenu from '../navMenu/navMenu'

import './windowWrap.scss'

const WindowWrap: React.FC = () => {
  return (
    <div className='window'>
      <div className='container'>
        <Header />
        <NavMenu />
        <Content />
        <Footer />
      </div>
    </div>
  )
}

export default WindowWrap
