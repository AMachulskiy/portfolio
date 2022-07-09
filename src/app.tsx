import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import WindowWrap from './components/windowWrap/windowWrap'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <WindowWrap />
    </BrowserRouter>
  )
}

export default App
