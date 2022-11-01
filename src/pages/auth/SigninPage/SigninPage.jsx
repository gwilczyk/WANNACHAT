/* eslint-disable react/react-in-jsx-scope */
import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import '@pages/auth/SigninPage/SigninPage.scss'
import { authServices } from '@services/api/auth/auth.services'
import { signinInitialData } from '@services/utils/static.data'
import { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SigninPage = () => {
  const [alertType, setAlertType] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [formState, setFormState] = useState(signinInitialData)
  const [hasError, setHasError] = useState(false)
  const [keepLoggedIn, setKeepLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  const { email, password } = formState

  const formHandler = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const result = await authServices.signin({ email, password })
      /* TODO
      1. Set logged in to true in localStorage
      2. Set username in localStorage
      3. Dispatch user to Redux
      */
      setUser(result.data.user)
      setHasError(false)
      setAlertType('alert-success')
    } catch (error) {
      setHasError(true)
      setLoading(false)
      setAlertType('alert-error')
      setErrorMessage(error?.response?.data.message)
    }
  }

  const handleChange = (event) => {
    const {
      target: { id, value }
    } = event
    setFormState((prevState) => ({ ...prevState, [id]: value }))
    setAlertType('')
    setErrorMessage('')
    setHasError(false)
  }

  const handleKeepLoggedIn = () => {
    setKeepLoggedIn((prevState) => !prevState)
    setAlertType('')
    setErrorMessage('')
    setHasError(false)
  }

  useEffect(() => {
    if (user) {
      console.log('🚀 ~ file: SignupPage.jsx ~ line 65 ~ useEffect ~ user', user)
      setKeepLoggedIn(false) /* Does NOT work! */
      setFormState(signinInitialData)
      setLoading(false)
      console.log('navigate to streams page from signin page')
    }
  }, [user])

  return (
    <div className="auth-inner">
      {hasError && errorMessage && (
        <div className={`alerts ${alertType}`} role="alert">
          {errorMessage}
        </div>
      )}

      <form autoComplete="off" className="auth-form" noValidate onSubmit={formHandler}>
        <div className="form-input-container">
          <Input
            id="email"
            labelText="Email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
            readonly
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            type="email"
            value={email}
          />
          <Input
            id="password"
            labelText="Password"
            name="password"
            onChange={handleChange}
            placeholder="Enter your password"
            readonly
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            type="password"
            value={password}
          />
          <label className="checkmark-container" htmlFor="checkbox">
            <Input id="checkbox" name="checkbox" onChange={handleKeepLoggedIn} type="checkbox" value={keepLoggedIn} />
            Keep Me Signed In
          </label>
        </div>
        <Button
          className="auth-button button"
          disabled={!email || !password || loading || hasError}
          label={`${loading ? 'SIGNIN IN PROGRESS…' : 'SIGNIN'}`}
        />

        <Link to="/forgot-password">
          <span className="forgot-password">
            Forgot Password? <FaArrowRight className="arrow-right" />
          </span>
        </Link>
      </form>
    </div>
  )
}

export default SigninPage
