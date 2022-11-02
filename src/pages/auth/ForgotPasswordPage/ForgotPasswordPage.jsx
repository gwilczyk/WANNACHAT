/* eslint-disable react/react-in-jsx-scope */
import backgroundImage from '@assets/images/background.jpg'
import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import '@pages/auth/ForgotPasswordPage/ForgotPasswordPage.scss'
import { authServices } from '@services/api/auth/auth.services'
import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ForgotPasswordPage = () => {
  const [alertType, setAlertType] = useState('')
  const [email, setEmail] = useState('')
  const [responseMessage, setResponseMessage] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [loading, setLoading] = useState(false)

  const formHandler = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const response = await authServices.forgotPassword(email)
      setEmail('')
      setLoading(false)
      setShowAlert(false)
      setAlertType('alert-success')
      setResponseMessage(response?.data?.message)
    } catch (error) {
      setLoading(false)
      setShowAlert(true)
      setAlertType('alert-error')
      setResponseMessage(error?.response?.data?.message)
    }
  }

  const handleChange = (event) => {
    setEmail((_prevState) => event.target.value)
  }

  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>

      <div className="container-wrapper-auth">
        <div className="tabs forgot-password-tabs" style={{ height: `${responseMessage ? '320px' : ''}` }}>
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="signin forgot-password">Forgot Password</div>
              </li>
            </ul>

            <div className="tab-item">
              <div className="auth-inner">
                {responseMessage && (
                  <div className={`alerts ${alertType}`} role="alert">
                    {responseMessage}
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
                      style={{ border: `${showAlert ? '1px solid #fa9b8a' : ''}` }}
                      type="email"
                      value={email}
                    />
                  </div>
                  <Button
                    className="auth-button button"
                    disabled={!email || loading}
                    label={`${loading ? 'FORGOT PASSWORD IN PROGRESS…' : 'FORGOT PASSWORD'}`}
                  />

                  <Link to="/">
                    <span className="forgot-password">
                      <FaArrowLeft className="arrow-left" /> Back To Sign In Page
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
