/* eslint-disable react/react-in-jsx-scope */
import { any, bool, func, string } from 'prop-types'

const Button = (props) => {
  const { className, disabled, handleClick, label } = props

  return (
    <>
      <button className={className} disabled={disabled} onClick={handleClick}>
        {label}
      </button>
    </>
  )
}

Button.propTypes = {
  className: string,
  disabled: bool,
  handleClick: func,
  label: any.isRequired
}

export default Button
