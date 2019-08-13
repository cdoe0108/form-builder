import React, { useState } from 'react';
import style from './style.scss';

const Select = props => {
  const {
    name,
    id,
    label,
    error,
    required,
    options,
    value,
    handleChange
  } = props;

  const handleInput = event => {
    const { name, value } = event.target;
    handleChange(name, value);
  };

  return (
    <div className={style.fieldWrapper}>
      <label className={style.label}>{label}</label>
      <select
        className={style.selectBox}
        onChange={handleInput}
        required={required}
        name={name}
        id={id}
      >
        {options.map(item => (
          <option value={item.value} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <span className={style.errorMdg} style={{ display: 'none' }}>
        {error}
      </span>
    </div>
  );
};
export default Select;
