import React, { useState } from 'react';
import style from './style.scss';

const TextField = props => {
  const {
    name,
    id,
    label,
    error,
    regex,
    required,
    placeholder,
    value,
    handleChange
  } = props;
  const [inputVal, setinputVal] = useState(value);

  const handleInput = event => {
    const { name, value } = event.target;
    setinputVal(event.target.value);
    handleChange(name, value);
  };

  return (
    <div className={style.fieldWrapper}>
      <label className={style.label}>{label}</label>
      <input
        type="text"
        value={inputVal}
        name={name}
        id={id}
        required={required}
        placeholder={placeholder}
        regex={regex}
        className={style.textField}
        onChange={handleInput}
        onBlur={handleInput}
      />
      <span className={style.errorMdg} style={{ display: 'none' }}>
        {error}
      </span>
    </div>
  );
};
export default TextField;
