import React, { useState } from 'react'
import myInterests from '@src/data/myInterests'
import myContacts from '@src/data/myContacts'

import './aboutMe.scss'

const AboutMe: React.FC = () => {
  const [open, setOpen] = useState('')
  const isOpen = () => setOpen(open === '' ? 'open' : '')

  return (
    <section className='aboutme'>
      <div className='navigation'>
        <div className='explorer'>explorer</div>
        <div className='folders'>
          <div className='folders__title'>{'>'} My interests</div>

          <div>{'>'} HTML</div>
          <div>{'>'} CSS</div>
          <div>{'>'} Java Script</div>
          <div>{'>'} React JS</div>
          <div>{'>'} Redux Toolkit</div>
          <div onClick={isOpen} className={`freetime ${open}`}>
            <div className='freetime__title'>
              <span>{'>'}</span> Free time
            </div>
            <div className='freetime__list' />
          </div>
        </div>
        <div className='contacts'>
          <div className='contacts__title'>{'>'} My contacts</div>
          {myContacts.map(({ link, title }) => (
            <a
              key={link}
              className='contacts__link'
              href={link}
              target='_blank'
              rel='noreferrer'
            >
              {title}
            </a>
          ))}
        </div>
      </div>
      <div className='about'>
        <p>{'/**'}</p>
        <p className='about__text'>* About me</p>
        <p className='about__text'>* I have 2 month of experience in web</p>
        <p className='about__text'>* development</p>
        <p className='about__text'>*/</p>
      </div>
    </section>
  )
}

export default AboutMe
