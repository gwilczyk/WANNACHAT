/* eslint-disable react/react-in-jsx-scope */
import backgroundImage from '@assets/images/background.jpg'
import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import '@pages/auth/ResetPasswordPage/ResetPasswordPage.scss'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ResetPasswordPage = () => {
  const handleChange = () => {}
  const responseMessage = 'this is the response message…'

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
                {/* <div className="alerts" role="alert">
                  Error message
                </div> */}
                <form className="reset-password-form">
                  <div className="form-input-container">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value="P4ssword"
                      labelText="New Password"
                      placeholder="New Password"
                      handleChange={handleChange}
                    />
                    <Input
                      id="cpassword"
                      name="cpassword"
                      type="password"
                      value="P4ssword"
                      labelText="Confirm Password"
                      placeholder="Confirm Password"
                      handleChange={handleChange}
                    />
                  </div>
                  <Button label="RESET PASSWORD" className="auth-button button" disabled={false} />

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
