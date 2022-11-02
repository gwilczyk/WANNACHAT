/* eslint-disable react/react-in-jsx-scope */
import backgroundImage from '@assets/images/background.jpg'
import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import '@pages/auth/ResetPasswordPage/ResetPasswordPage.scss'
import { authServices } from '@services/api/auth/auth.services'
import { resetPasswordInitialData } from '@services/utils/static.data'
import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link, useSearchParams } from 'react-router-dom'

const ResetPasswordPage = () => {
  const [alertType, setAlertType] = useState('')
  const [formState, setFormState] = useState(resetPasswordInitialData)
  const [responseMessage, setResponseMessage] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [loading, setLoading] = useState(false)

  const { cpassword, password } = formState

  const [searchParams] = useSearchParams()

  const formHandler = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const body = { cpassword, password }
      const response = await authServices.resetPassword(searchParams.get('token'), body)
      setFormState(resetPasswordInitialData)
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
    const {
      target: { id, value }
    } = event
    setFormState((prevState) => ({ ...prevState, [id]: value }))
  }

  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>

      <div className="container-wrapper-auth">
        <div className="tabs reset-password-tabs" style={{ height: `${responseMessage ? '400px' : ''}` }}>
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="signin reset-password">Reset Password</div>
              </li>
            </ul>
            <div className="tab-item">
              <div className="auth-inner">
                {responseMessage && (
                  <div className={`alerts ${alertType}`} role="alert">
                    {responseMessage}
                  </div>
                )}

                <form autoComplete="off" className="reset-password-form" noValidate onSubmit={formHandler}>
                  <div className="form-input-container">
                    <Input
                      autoComplete="new-password"
                      id="password"
                      name="password"
                      labelText="New Password"
                      onChange={handleChange}
                      placeholder="New Password"
                      readonly
                      style={{ border: `${showAlert ? '1px solid #fa9b8a' : ''}` }}
                      type="password"
                      value={password}
                    />
                    <Input
                      autoComplete="new-password"
                      id="cpassword"
                      name="cpassword"
                      labelText="Confirm Password"
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      readonly
                      style={{ border: `${showAlert ? '1px solid #fa9b8a' : ''}` }}
                      type="password"
                      value={cpassword}
                    />
                  </div>
                  <Button
                    className="auth-button button"
                    disabled={!cpassword || !password || loading}
                    label={`${loading ? 'RESET PASSWORD IN PROGRESS…' : 'RESET PASSWORD'}`}
                  />

                  <Link to="/">
                    <span className="signin">
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

export default ResetPasswordPage
