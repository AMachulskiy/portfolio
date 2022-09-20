import aboutMe from '@src/data/aboutMe'
import { ReactFC } from '@src/interfaces/react'
import React from 'react'

import './aboutMeExplorer.scss'

const AboutMeExplorer: ReactFC = () => {
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
      <div className='aboutme-explorer__sidebar'>Sidebar explorer</div>
      <div className='aboutme-explorer__text'>{renderAboutMe(aboutMe)}</div>
      <div className='aboutme-explorer__elem'>
        <div />
      </div>
      <div className='aboutme-explorer__code'>CODE SNIPPET</div>
      <div className='aboutme-explorer__elem'>
        <div />
      </div>
    </div>
  )
}

export default AboutMeExplorer
