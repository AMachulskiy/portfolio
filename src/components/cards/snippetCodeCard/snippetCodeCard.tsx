import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import './snippetCodeCard.scss'

interface ISnippetCodeCardProps {
  title: string
  subtitle: string
  code: string
  details: string
}

const SnippetCodeCard: ReactFC<ISnippetCodeCardProps> = ({
  title,
  subtitle,
  code,
  details,
}) => {
  const [detailsIsOpen, setDetailsIsOpen] = useState(true)

  const openHideDetails = () => {
    setDetailsIsOpen(!detailsIsOpen)
  }

  return (
    <div className='code-snippet'>
      <div className='code-snippet-top'>
        <div className='code-snippet-name'>
          <strong>{title}</strong>
          <span>{subtitle}</span>
        </div>
        <div className='code-snippet-actions' onClick={() => openHideDetails()}>
          <i className='ic-setting' /> <span>подробнее</span>
        </div>
      </div>
      <div className='code-snippet-img'>
        <SyntaxHighlighter
          language='typescript'
          style={atomOneDarkReasonable}
          showLineNumbers
          wrapLongLines
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <div className={`code-snippet-details ${detailsIsOpen ? 'close' : ''}`}>
        {details}
      </div>
    </div>
  )
}
export default SnippetCodeCard
