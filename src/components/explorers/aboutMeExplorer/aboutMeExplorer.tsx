import aboutMe from '@src/data/aboutMe'
import myContacts from '@src/data/myContacts'
import myInterests from '@src/data/myInterests'
import { IMyInterests } from '@src/interfaces/IMyInterests'
import { ReactFC } from '@src/interfaces/react'
import React from 'react'

import './aboutMeExplorer.scss'

const AboutMeExplorer: ReactFC = () => {
  const renderInterests = (myInterest: IMyInterests[]) => {
    const interestsHTML = []
    myInterest.map((interest: IMyInterests) => {
      if (!interest.items) {
        interestsHTML.push(
          <div className='aboutme-explorer__sidebar-folders'>
            {'>'} {interest.title}
          </div>
        )
      } else {
        const itemsHTML = []
        interest.items.map((item) => itemsHTML.push(<p>{item}</p>))
        interestsHTML.push(
          <>
            <div className='aboutme-explorer__sidebar-folders'>
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
    <div className='aboutme-explorer'>
      <div className='aboutme-explorer__sidebar'>
        <div className='aboutme-explorer__contacts-title'>my interests</div>
        <div className='aboutme-explorer__interests'>
          {renderInterests(myInterests)}
        </div>
        <div className='aboutme-explorer__contacts-title'>contacts</div>
        <div className='aboutme-explorer__contacts'>
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
      <div className='aboutme-explorer__text'>{renderAboutMe(aboutMe)}</div>
      <div className='aboutme-explorer__elem'>
        <div />
      </div>
      <div className='aboutme-explorer__code'>
        <div className='aboutme-explorer__code-title'>
          // code snippet showCase
        </div>
        <div className='aboutme-explorer__code-snippet'>
          <div className='aboutme-explorer__code-snippet-top'>
            <div className='aboutme-explorer__code-snippet-name'>
              <strong>portfolio</strong>
              <span>functionsHelpers - time and date output</span>
            </div>
            <div className='aboutme-explorer__code-snippet-actions'>
              <i className='ic-setting' /> <span>details</span>
            </div>
          </div>
          <div className='aboutme-explorer__code-snippet-img'>
            <p>
              Hello! This is <code>functionHelpers()</code> example.
            </p>
          </div>
        </div>
      </div>
      <div className='aboutme-explorer__elem'>
        <div />
      </div>
    </div>
  )
}

export default AboutMeExplorer
