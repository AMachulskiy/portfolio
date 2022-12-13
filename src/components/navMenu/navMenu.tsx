import React, { useState } from 'react'
import { ReactFC } from '@src/interfaces/react'
import { NavLink } from 'react-router-dom'
import navMenu from '@src/data/navMenu'

import './navMenu.scss'

const NavMenu: ReactFC = () => {
  const [isNavMobileShow, setIsNavMobileShow] = useState(false)

  return (
    <>
      <nav className={`nav ${isNavMobileShow ? 'show__nav' : 'hide__nav'}`}>
        {navMenu.map(({ to, title }) => (
          <NavLink
            className='nav__btn'
            key={to}
            to={to}
            onClick={() => setIsNavMobileShow(!isNavMobileShow)}
          >
            {title}
          </NavLink>
        ))}
      </nav>
      <div
        className='nav__btn-open'
        onClick={() => setIsNavMobileShow(!isNavMobileShow)}
      >
        {!isNavMobileShow ? '_ открыть_навигацию' : '_закрыть_навигацию'}
      </div>
    </>
  )
}

export default NavMenu
