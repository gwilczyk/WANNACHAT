import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss'
import { AppRouter } from './routes'

const App = () => {
  return (
    <>
      <Router>
        <AppRouter />
      </Router>
    </>
  )
}

export default App
