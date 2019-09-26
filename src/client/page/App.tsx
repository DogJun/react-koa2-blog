import React from 'react'
import routes from '../routes'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <>
      <BrowserRouter basename="/">{routes}</BrowserRouter>
    </>
  )
}

export default App
