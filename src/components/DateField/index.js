import React, { useState } from 'react';
import style from './style.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.min.css';

const DateField = props => {
  const {
    name,
    id,
    label,
    error,
    regex,
    required,
    value,
    handleChange
  } = props;
  const [selDate, setselDate] = useState(value);

  const handleInput = event => {
    console.log(event);
    setselDate(event);
    handleChange(name, event);
  };

  return (
    <div className={style.fieldWrapper}>
      <label className={style.label}>{label}</label>
      {/* <input
        type="text"
        value=""
        name={name}
        id={id}
        required={required}
        placeholder={placeholder}
        regex={regex}
        className={style.dateField}
        onChange={handleChange}
      /> */}
      <DatePicker
        name={name}
        id={id}
        required={required}
        selected={selDate}
        onChange={handleInput}
      />
      <span className={style.errorMdg} style={{ display: 'none' }}>
        {error}
      </span>
    </div>
  );
};
export default DateField;
