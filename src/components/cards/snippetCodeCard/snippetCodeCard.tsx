import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'

import './snippetCodeCard.scss'

interface ISnippetCodeCardProps {
  title: string
  subtitle: string
  img: string
  details: string
}

const SnippetCodeCard: ReactFC<ISnippetCodeCardProps> = ({
  title,
  subtitle,
  img,
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
          <i className='ic-setting' /> <span>details</span>
        </div>
      </div>
      <div className='code-snippet-img'>
        <img src={img} alt={title} />
      </div>
      <div className={`code-snippet-details ${detailsIsOpen ? 'close' : ''}`}>
        {details}
      </div>
    </div>
  )
}
export default SnippetCodeCard
