/* eslint-disable react/react-in-jsx-scope */
import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import '@pages/auth/SigninPage/SigninPage.scss'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

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
            id="email"
            labelText="Email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
            type="email"
            value="john@mail.com"
          />
          <Input
            id="password"
            labelText="Password"
            name="password"
            onChange={handleChange}
            placeholder="Enter your password"
            type="password"
            value="P4ssword"
          />
          <label className="checkmark-container" htmlFor="checkbox">
            <Input id="checkbox" name="checkbox" onChange={handleChange} type="checkbox" value={false} />
            Keep Me Signed In
          </label>
        </div>
        <Button className="auth-button button" disabled={true} label="SIGN IN" />

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
