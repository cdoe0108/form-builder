import React, { useState, useEffect } from 'react';
import firebase from './firebase.js';
// sample request: import { getFormData } from './ApiCall.js';
import style from './styles/index.scss';

const LiveForm = () => {
  const [formFields, setFormFields] = useState([]);
  useEffect(() => {
    // getFormData('./dummyData/formData.json').then(response => {
    //   response.map(field => {
    //     asyncComponent(field);
    //   });
    // });
    const formdataRef = firebase.database().ref();
    formdataRef.on('value', snapshot => {
      let formData = snapshot.val();
      formData.map(field => {
        asyncComponent(field);
      });
    });
  }, []);

  const asyncComponent = field => {
    let path = './components/' + field.template;
    import(`${path}`).then(module => {
      field['component'] = module.default;
      setFormFields(m => m.concat(field));
    });
  };

  const handleChange = (name, val) => {
    formFields.map(field => {
      if (name == field.name) {
        field.value = val;
      }
    });
  };

  const submitFormdata = event => {
    event.preventDefault();
    console.log(formFields);
  };

  return (
    <div className={style.innerContainer}>
      <form
        className={style.formContainer}
        onSubmit={event => submitFormdata(event)}
      >
        {formFields.map(
          (field, i) =>
            field.component && (
              <field.component key={i} {...field} handleChange={handleChange} />
            )
        )}
        <button type="submit" className={`${style.btn} ${style.btnPrimary}`}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LiveForm;
