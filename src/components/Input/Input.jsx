/* eslint-disable react/react-in-jsx-scope */
import '@components/Input/Input.scss'
import { bool, func, object, oneOfType, string } from 'prop-types'

const Input = ({ className, id, labelText, name, onChange, placeholder, style, type, value }) => {
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
          onChange={onChange}
          placeholder={placeholder}
          style={style}
          type={type}
          value={value}
        />
      </div>
    </>
  )
}

Input.propTypes = {
  className: string,
  onChange: func,
  id: string,
  labelText: string,
  name: string.isRequired,
  placeholder: string,
  style: object,
  type: string.isRequired,
  value: oneOfType([string, bool])
}

export default Input
