import React from 'react'

import './footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='social'>
        <div className='social__item'>find me in:</div>
        <a href='https://t.me/AlekseyStelz'>
          <i className='social__item icons ic-telegram' />
        </a>
        <a href='https://github.com/AMachulskiy'>
          <i className='social__item icons ic-github' />
        </a>
      </div>
      <div className='datetime'>
        <div className='footer__time'>15:56</div>
        <div className='footer__date'>28/06/2022</div>
      </div>
    </footer>
  )
}

export default Footer
