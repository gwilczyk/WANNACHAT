/* eslint-disable react/react-in-jsx-scope */
import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import '@pages/auth/SignupPage/SignupPage.scss'
import { authServices } from '@services/api/auth/auth.services'
import { signupInitialData } from '@services/utils/static.data'
import { UtilsServices } from '@services/utils/utils.services'
import { useEffect, useState } from 'react'

const SignupPage = () => {
  const [alertType, setAlertType] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [formState, setFormState] = useState(signupInitialData)
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  const { email, password, username } = formState

  const formHandler = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const avatarColor = UtilsServices.avatarColor()
      const avatarImage = UtilsServices.generateAvatarImage(username, avatarColor)
      const result = await authServices.signup({
        avatarColor,
        avatarImage,
        email,
        password,
        username
      })
      console.log('🚀 ~ file: SignupPage.jsx ~ line 35 ~ formHandler ~ result', result)

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

  useEffect(() => {
    if (user) {
      console.log('🚀 ~ file: SignupPage.jsx ~ line 65 ~ useEffect ~ user', user)
      console.log('navigate to streams page from signup page')
      setLoading(false)
      setFormState(signupInitialData)
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
            id="username"
            labelText="Username"
            name="username"
            onChange={handleChange}
            placeholder="Enter your username"
            readonly
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            type="text"
            value={username}
          />
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
            autoComplete="new-password"
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
        </div>
        <Button
          className="auth-button button"
          disabled={!username || !email || !password || loading || hasError}
          label={`${loading ? 'SIGNUP IN PROGRESS…' : 'SIGNUP'}`}
        />
      </form>
    </div>
  )
}

export default SignupPage
