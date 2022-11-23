import SnippetCodeCard from '@src/components/cards/snippetCodeCard/snippetCodeCard'
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

  const codeFragment = `
  import { createAsyncThunk } from '@reduxjs/toolkit'
  import ProjectService from '@src/services/projectService'

  const projectService = new ProjectService()

  const getProjectsAction = createAsyncThunk('projects', () => {
    return projectService.getProjects()
  })

  export default getProjectsAction
  `

  return (
    <div className='aboutme-explorer'>
      <div className='aboutme-explorer__sidebar'>
        <div className='aboutme-explorer__contacts-title'>мои интересы</div>
        <div className='aboutme-explorer__interests'>
          {renderInterests(myInterests)}
        </div>
        <div className='aboutme-explorer__contacts-title'>контакты</div>
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
      <div className='aboutme-explorer__elem' />
      <div className='aboutme-explorer__code'>
        <div className='aboutme-explorer__code-title'>
          // демонстрация фрагмента кода
        </div>
        <SnippetCodeCard
          title='портфолио'
          subtitle='projectService - get projects for output'
          code={codeFragment}
          details='projectService - сервис для вывода карточек проектов через локальный сервер и store.'
        />
        <SnippetCodeCard
          title='маркетплейс'
          subtitle='projectService - get projects for output'
          code='Test'
          details='Функция для определения текущего времени и даты выделена в отдельный
            файл. На сайт выводятся отформатированные данные указав два
            возвращаемых параметра из функции.'
        />
      </div>
      <div className='aboutme-explorer__elem' />
    </div>
  )
}

export default AboutMeExplorer
