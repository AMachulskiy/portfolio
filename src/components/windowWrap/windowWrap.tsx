import Page404 from '@src/pages/404/404'
import Home from '@src/pages/home/home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutMeExplorer from '../explorers/aboutMeExplorer/aboutMeExplorer'
import ProjectsExplorer from '../explorers/projectsExplorer/projectsExplorer'
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
          <Route path='aboutme' element={<AboutMeExplorer />} />
          <Route path='projects' element={<ProjectsExplorer />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default WindowWrap
