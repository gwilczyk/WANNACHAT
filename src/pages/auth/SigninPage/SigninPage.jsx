/* eslint-disable react/react-in-jsx-scope */
import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import '@pages/auth/SigninPage/SigninPage.scss'
import { FaArrowRight } from 'react-icons/fa'

const SigninPage = () => {
  const handleChange = () => {}

  return (
    <div className="auth-inner">
      <div className="alerts alert-error" role="alert">
        Error message
      </div>

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
          <Input
            handleChange={handleChange}
            id="password"
            labelText="Password"
            name="password"
            placeholder="Enter your password"
            type="password"
            value="P4ssword"
          />
          <label className="checkmark-container" htmlFor="checkbox">
            <Input handleChange={handleChange} id="checkbox" name="checkbox" type="checkbox" value={false} />
            Keep me signed in
          </label>
        </div>
        <Button className="auth-button button" disabled={true} label="SIGN IN" />

        <span className="forgot-password">
          Forgot password? <FaArrowRight className="arrow-right" />
        </span>
      </form>
    </div>
  )
}

export default SigninPage
