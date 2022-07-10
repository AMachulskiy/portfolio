import React from 'react'
import { ReactFC } from '@src/interfaces/react'
import { NavLink } from 'react-router-dom'
import navMenu from '@src/data/navMenu'

import './navMenu.scss'

const NavMenu: ReactFC = () => {
  return (
    <nav className='nav'>
      {navMenu.map(({ to, title }) => (
        <NavLink className='nav__btn' key={to} to={to}>
          {title}
        </NavLink>
      ))}
    </nav>
  )
}

export default NavMenu
