import { func, string } from 'prop-types'
import React from 'react'

const Input = ({ className, handleChange, labelText, name, placeholder, type, value }) => {
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
  labelText: string,
  name: string.isRequired,
  placeholder: string,
  type: string.isRequired,
  value: string
}

export default Input
