import React from 'react'

interface IseProps {
  color: string
}

const Se: React.FC<IseProps> = ({ color }) => {
  return (
    <div className='se' style={{ color }}>
      Мой второй React tsx компонент!
    </div>
  )
}

export default Se
