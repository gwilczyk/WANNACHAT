/* eslint-disable react/react-in-jsx-scope */
import backgroundImage from '@assets/images/background.jpg'
import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import '@pages/auth/ForgotPasswordPage/ForgotPasswordPage.scss'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ForgotPasswordPage = () => {
  const handleChange = () => {}

  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>

      <div className="container-wrapper-auth">
        <div className="tabs forgot-password-tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="signin forgot-password">Forgot Password</div>
              </li>
            </ul>

            <div className="tab-item">
              <div className="auth-inner">
                {/* <div className="alerts alert-error" role="alert">
                  Error message
                </div> */}

                <form className="auth-form">
                  <div className="form-input-container">
                    <Input
                      handleChange={handleChange}
                      id="email"
                      labelText="Email"
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                      value="john@mail.com"
                    />
                  </div>
                  <Button className="auth-button button" disabled={true} label="FORGOT PASSWORD" />

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
