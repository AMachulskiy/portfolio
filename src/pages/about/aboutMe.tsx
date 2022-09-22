import React from 'react'
import myInterests from '@src/data/myInterests'
import myContacts from '@src/data/myContacts'

import './aboutMe.scss'
import aboutMe from '@src/data/aboutMe'
import { IMyInterests } from '@src/interfaces/IMyInterests'

const AboutMe: React.FC = () => {
  const renderInterests = (myInterest: IMyInterests[]) => {
    const interestsHTML = []
    myInterest.map((interest: IMyInterests) => {
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

  const renderAboutMe = (text: string) => {
    const html = []
    const textArr = text.split('/')
    textArr.map((txt, id) =>
      html.push(
        <div>
          {`${id + 1} // `} {`* ${txt}`}
        </div>
      )
    )
    return html
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
      <div className='about'>{renderAboutMe(aboutMe)}</div>
    </section>
  )
}

export default AboutMe
