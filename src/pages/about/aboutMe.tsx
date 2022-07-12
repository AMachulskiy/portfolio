import React, { useState } from 'react'

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
          <p>{'>'} HTML</p>
          <p>{'>'} CSS</p>
          <p>{'>'} Java Script</p>
          <p>{'>'} React JS</p>
          <p>{'>'} Redux Toolkit</p>
          <div className={`freetime ${open}`} onClick={isOpen}>
            <div className='freetime__title'>
              <span>{'>'}</span> Free time
            </div>
            <div className='freetime__list'>
              <p className='freetime__item'>_nature walks.md</p>
              <p className='freetime__item'>_roller skating.md</p>
              <p className='freetime__item'>_cycling.md</p>
              <p className='freetime__item'>_traveling by car.md</p>
              <p className='freetime__item'>_ice skating.md</p>
              <p className='freetime__item'>_snowboarding.md</p>
              <p className='freetime__item'>_watching interesting movies.md</p>
              <p className='freetime__item'>_listening to rock music.md</p>
            </div>
          </div>
        </div>
        <div className='contacts'>
          <div className='contacts__title'>{'>'} My contacts</div>
          <a
            className='contacts__link'
            href='mailto:aleksey.stelz@yandex.ru'
            target='_blank'
            rel='noreferrer'
          >
            _email: aleksey.stelz@yandex.ru
          </a>
          <a
            className='contacts__link'
            href='https://t.me/AlekseyStelz'
            target='_blank'
            rel='noreferrer'
          >
            _telegram: AlekseyStelz
          </a>
          <a
            className='contacts__link'
            href='https://github.com/AMachulskiy'
            target='_blank'
            rel='noreferrer'
          >
            _git_hub: AMachulskiy
          </a>
        </div>
      </div>
      <div className='about'>
        <p>{'/**'}</p>
        <p className='about__text'>* About me</p>
        <p className='about__text'>* I have 1 month of experience in web</p>
        <p className='about__text'>* development</p>
        <p className='about__text'>*</p>
        <p className='about__text'>*</p>
        <p className='about__text'>*</p>
        <p className='about__text'>*</p>
        <p className='about__text'>*</p>
        <p className='about__text'>*</p>
        <p className='about__text'>*</p>
        <p className='about__text'>*</p>
        <p className='about__text'>*/</p>
      </div>
    </section>
  )
}

export default AboutMe
