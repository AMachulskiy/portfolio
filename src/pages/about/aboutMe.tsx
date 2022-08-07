import React from 'react'
import myInterests from '@src/data/myInterests'
import myContacts from '@src/data/myContacts'

import './aboutMe.scss'

const AboutMe: React.FC = () => {
  const renderInterests = (myInterests) => {
    const interestsHTML = []
    myInterests.map((interest) => {
      if (!interest.items) {
        interestsHTML.push(
          <div className='folders'>
            {'>'} {interest.title}
          </div>
        )
      } else {
        const itemsHTML = []
        interest.items.map((item) => {
          itemsHTML.push(<p>{item}</p>)
        })
        interestsHTML.push(
          <>
            <div className='folders'>
              {'>'} {interest.title}
            </div>
            {itemsHTML}
          </>
        )
      }
    })
    return interestsHTML
  }

  return (
    <section className='aboutme'>
      <div className='navigation'>
        <div className='explorer'>explorer</div>
        <div className='folders'>
          <div className='folders__title'>{'>'} My interests</div>
          {renderInterests(myInterests)}
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
