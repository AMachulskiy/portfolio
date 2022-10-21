import { ReactFC } from '@src/interfaces/react'
import React, { useEffect, useState } from 'react'
import functionHelpers from '@src/helpers/functionHelpers'
import footerLinks from '@src/data/footerLinks'
import './footer.scss'

functionHelpers.getFormattedDate()

const Footer: ReactFC = () => {
  const datetimeData = functionHelpers.getFormattedDate()
  const [datetime, setDatetime] = useState(datetimeData)

  useEffect(() => {
    setInterval(() => {
      const data = functionHelpers.getFormattedDate()
      setDatetime(data)
    }, 1000)
  }, [])

  return (
    <footer className='footer'>
      <div className='social'>
        <div className='social__item'>найди меня в:</div>
        {footerLinks.map(({ link, icon }) => (
          <a key={link} href={link} target='_blank' rel='noreferrer'>
            <i className={`social__item icons ${icon}`} />
          </a>
        ))}
      </div>
      <div className='datetime'>
        <div className='footer__time'>{datetime.time}</div>
        <div className='footer__date'>{datetime.date}</div>
      </div>
    </footer>
  )
}

export default Footer
