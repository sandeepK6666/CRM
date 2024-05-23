import React from 'react';
import './InputLabel.scss';

function InputLabel({
  name,
  value,
  onBlur,
  onChange,
  placeholder,
  ref,
  className: inputClassName,
  required,
  disabled,
  error,
  label,
  labelClassName,
  type,
  id,
  htmlFor,
  subtitle,
  showEndAdornment = false,
  endAdornment,
  useTextarea = false,
  ...restProps
}) {
  const className = inputClassName ? `form-control ${inputClassName}` : 'form-control';

  const InputElement = useTextarea ? 'textarea' : 'input';

  return (
    <>
      <div>
        {label && (
          <label htmlFor={htmlFor} className={labelClassName || 'form-label cus-form-label'}>
            {label} {required && <span className="text-danger">*</span>}
          </label>
        )}
        {subtitle && <p className="mb-0">{subtitle}</p>}
      </div>
      <div className="input-innerlabel-container">
        <InputElement
          ref={ref}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          name={name}
          onBlur={onBlur}
          placeholder={placeholder}
          className={className}
          required={required}
          disabled={disabled}
          {...restProps}
        />
        {showEndAdornment && <div className="input-end-adornment">{endAdornment}</div>}
      </div>
      {error && <p className="text-danger mt-1">{error}</p>}
    </>
  );
}

export default InputLabel;
