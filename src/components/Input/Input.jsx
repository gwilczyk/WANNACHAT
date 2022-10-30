/* eslint-disable react/react-in-jsx-scope */
import '@components/Input/Input.scss'
import { bool, func, oneOfType, string } from 'prop-types'

const Input = ({ className, handleChange, id, labelText, name, placeholder, type, value }) => {
  return (
    <>
      <div className="form-row">
        {labelText && (
          <label className="form-label" htmlFor={name}>
            {labelText}
          </label>
        )}

        <input
          autoComplete="false"
          className={`${className || 'form-input'}`}
          id={id}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </div>
    </>
  )
}

Input.propTypes = {
  className: string,
  handleChange: func,
  id: string,
  labelText: string,
  name: string.isRequired,
  placeholder: string,
  type: string.isRequired,
  value: oneOfType([string, bool])
}

export default Input
