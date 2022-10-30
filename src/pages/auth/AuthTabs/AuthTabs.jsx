/* eslint-disable react/react-in-jsx-scope */
import backgroundImage from '@assets/images/background.jpg'
import { SigninPage } from '@pages/auth'
import '@pages/auth/AuthTabs/AuthTabs.scss'
import { useState } from 'react'

const AuthTabs = () => {
  const [type, setType] = useState('Signin')

  const handleClick = (event) => {
    event.preventDefault()
    setType((_prevType) => event.target.name)
  }

  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>

      <div className="container-wrapper-auth">
        <div className="tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className={`tab ${type === 'Signin' ? 'active' : ''}`} onClick={handleClick}>
                <button className="signin" name="Signin">
                  Sign In
                </button>
              </li>

              <li className={`tab ${type === 'Signup' ? 'active' : ''}`} onClick={handleClick}>
                <button className="signup" name="Signup">
                  Sign Up
                </button>
              </li>
            </ul>

            {type === 'Signin' && (
              <div className="tab-item">
                <SigninPage />
              </div>
            )}
            {type === 'Signup' && (
              <div className="tab-item">
                <SigninPage />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthTabs
