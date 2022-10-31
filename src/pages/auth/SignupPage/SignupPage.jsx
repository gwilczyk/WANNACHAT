/* eslint-disable react/react-in-jsx-scope */
import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import '@pages/auth/SignupPage/SignupPage.scss'
import { authServices } from '@services/api/auth/auth.services'
import { UtilsServices } from '@services/utils/utils.services'
import { useState } from 'react'

const SignupPage = () => {
  const [alertType, setAlertType] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    username: ''
  })
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(false)

  const { email, password, username } = formState

  const formHandler = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const avatarColor = UtilsServices.avatarColor()
      const avatarImage = ''
      const result = await authServices.signup({
        avatarColor,
        avatarImage,
        email,
        password,
        username
      })
      console.log('🚀 ~ file: SignupPage.jsx ~ line 35 ~ formHandler ~ result', result)

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
      target: { name, value }
    } = event
    setFormState((prevState) => ({ ...prevState, [name]: value }))
    setHasError(false)
    setAlertType('')
  }

  return (
    <div className="auth-inner">
      {hasError && errorMessage && (
        <div className={`alerts ${alertType}`} role="alert">
          {errorMessage}
        </div>
      )}

      <form className="auth-form" noValidate onSubmit={formHandler}>
        <div className="form-input-container">
          <Input
            handleChange={handleChange}
            id="username"
            labelText="Username"
            name="username"
            placeholder="Enter your username"
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            type="text"
            value={username}
          />
          <Input
            handleChange={handleChange}
            id="email"
            labelText="Email"
            name="email"
            placeholder="Enter your email"
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            type="email"
            value={email}
          />
          <Input
            handleChange={handleChange}
            id="password"
            labelText="Password"
            name="password"
            placeholder="Enter your password"
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
