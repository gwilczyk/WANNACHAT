import React, { useState } from 'react'
import backgroundImage from '../../../assets/images/background.jpg'
import './AuthTabs.scss'

const AuthTabs = () => {
  const [type, setType] = useState('SignIn')

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
              <li className="tab active" onClick={handleClick}>
                <button className="login" name="SignIn">
                  Sign In
                </button>
              </li>

              <li className="tab" onClick={handleClick}>
                <button className="signup" name="SignUp">
                  Sign Up
                </button>
              </li>
            </ul>

            {type === 'SignIn' && <div className="tab-item">login component</div>}
            {type === 'SignUp' && <div className="tab-item">register component</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthTabs
