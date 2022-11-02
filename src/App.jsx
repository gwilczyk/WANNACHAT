/* eslint-disable react/react-in-jsx-scope */
import '@root/App.scss'
import { AppRouter } from '@root/routes'
import { BrowserRouter as Router } from 'react-router-dom'

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
