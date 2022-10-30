/* eslint-disable react/react-in-jsx-scope */
import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import '@pages/auth/SignupPage/SignupPage.scss'

const SignupPage = () => {
  const handleChange = () => {}

  return (
    <div className="auth-inner">
      <div className="alerts alert-success" role="alert">
        Error message
      </div>

      <form className="auth-form">
        <div className="form-input-container">
          <Input
            handleChange={handleChange}
            id="username"
            labelText="Username"
            name="username"
            placeholder="Enter your username"
            type="text"
            value="Jane Doe"
          />
          <Input
            handleChange={handleChange}
            id="email"
            labelText="Email"
            name="email"
            placeholder="Enter your email"
            type="email"
            value="jane@mail.com"
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
        </div>
        <Button className="auth-button button" disabled={true} label="SIGN UP" />
      </form>
    </div>
  )
}

export default SignupPage
