import React from 'react'

import './navMenu.scss'

const NavMenu = () => {
  return (
    <nav className='nav'>
      <div className='nav__btn active'>_home</div>
      <div className='nav__btn'>_about_me</div>
      <div className='nav__btn'>_projects</div>
      <div className='nav__btn' />
    </nav>
  )
}

export default NavMenu
