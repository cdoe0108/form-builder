import React from 'react';
import style from './style.scss';

const Checkbox = props => {
  const {
    name,
    id,
    label,
    error,
    regex,
    required,
    placeholder,
    options,
    handleChange
  } = props;

  const handleInput = event => {
    const { name, value } = event.target;
    handleChange(name, value);
  };

  return (
    <div className={style.fieldWrapper}>
      <label className={style.label}>{label}</label>
      {options.map(item => (
        <div className={style.customcheck} key={item.id}>
          <input
            type="checkbox"
            value={item.value}
            name={name}
            id={item.id}
            required={required}
            placeholder={placeholder}
            onChange={handleInput}
          />
          <label className={style.customcheckLabel} htmlFor={item.id}>
            {item.name}
          </label>
        </div>
      ))}
      <span className={style.errorMdg} style={{ display: 'none' }}>
        {error}
      </span>
    </div>
  );
};
export default Checkbox;
