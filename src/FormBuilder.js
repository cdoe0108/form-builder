import React, { useState, useEffect } from 'react';
import { formFields } from './constants/formFields';
import style from './styles/index.scss';

const FormBuilder = () => {
  const [selType, setSelType] = useState('');
  const [formFieldData, setFormFieldData] = useState([]);

  const propertyData = {
    type: '',
    template: '',
    name: '',
    id: '',
    options: [],
    value: '',
    required: false,
    regex: '',
    placeholder: '',
    label: '',
    error: ''
  };

  const selFieldType = event => {
    event.target.checked ? setSelType(event.target.name) : setSelType('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    propertyData[name] = value;
  };

  const saveProperties = () => {
    propertyData['type'] = selType;
    setFormFieldData([...formFieldData, propertyData]);
    console.log(formFieldData);
  };

  return (
    <div className={style.innerContainer}>
      <div className={style.fieldOptions}>
        <ul>
          {formFields.map((item, i) => (
            <li key={i}>
              <div>
                <input
                  type="checkbox"
                  name={item.type}
                  id={item.type}
                  onChange={selFieldType}
                />
                <label className={style.customcheckLabel} htmlFor={item.type}>
                  {item.label}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.fieldProperties}>
        <div className={style.fieldPropertyType}>
          {/* TODO: field type to be populated based on the selected checkbox */}
          <label className={style.propertyLabel}>Type</label>
          <input
            className={style.propertyTypeInput}
            value={selType}
            disabled
            type="text"
          />
        </div>
        <div className={style.fieldPropertyType}>
          <label className={style.propertyLabel}>Name</label>
          <input
            className={style.propertyTypeInput}
            onChange={handleChange}
            name="name"
            type="text"
          />
        </div>
        <div className={style.fieldPropertyType}>
          <label className={style.propertyLabel}>Id</label>
          <input
            className={style.propertyTypeInput}
            onChange={handleChange}
            name="id"
            type="text"
          />
        </div>
        <div className={style.fieldPropertyType}>
          <label className={style.propertyLabel}>Value</label>
          <input
            className={style.propertyTypeInput}
            onChange={handleChange}
            name="value"
            type="text"
          />
        </div>
        <div className={style.fieldPropertyType}>
          <label className={style.propertyLabel}>Placeholder</label>
          <input
            className={style.propertyTypeInput}
            onChange={handleChange}
            name="placeholder"
            type="text"
          />
        </div>
        <div className={style.fieldPropertyType}>
          <label className={style.propertyLabel}>Label</label>
          <input
            className={style.propertyTypeInput}
            onChange={handleChange}
            name="label"
            type="text"
          />
        </div>
        <div className={style.fieldPropertyType}>
          <label className={style.propertyLabel}>Required</label>
          <div>
            <input
              type="radio"
              name="required"
              onChange={handleChange}
              value={true}
            />
            <label htmlFor="Yes">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              name="required"
              onChange={handleChange}
              value={false}
              defaultChecked
            />
            <label htmlFor="No">No</label>
          </div>
        </div>
        <div className={style.fieldPropertyType}>
          <label className={style.propertyLabel}>Regex</label>
          <input
            className={style.propertyTypeInput}
            onChange={handleChange}
            name="regex"
            type="text"
          />
        </div>
        <div className={style.fieldPropertyType}>
          <label className={style.propertyLabel}>Error Message</label>
          <input
            className={style.propertyTypeInput}
            onChange={handleChange}
            name="errorMessage"
            type="text"
          />
        </div>
        <div className={style.buttonWrapper}>
          <button className={`${style.btn} ${style.btnSecondary}`}>
            Cancel
          </button>
          <button
            className={`${style.btn} ${style.btnPrimary}`}
            onClick={saveProperties}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
