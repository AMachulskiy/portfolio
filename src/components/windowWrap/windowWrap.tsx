import Page404 from '@src/pages/404/404'
import AboutMe from '@src/pages/about/aboutMe'
import Home from '@src/pages/home/home'
import Projects from '@src/pages/projects/projects'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='aboutme' element={<AboutMe />} />
          <Route path='projects' element={<Projects />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default WindowWrap
