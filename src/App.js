import React, { useState, useEffect } from 'react';
import { getFormData } from './ApiCall.js';
import { TextField, Select, DateField, Checkbox, Radio } from './components';

const App = () => {
  const [formFields, setFormFields] = useState([]);
  useEffect(() => {
    getFormData('./dummyData/formData.json').then(response => {
      setFormFields(response);
    });
  }, []);
  const components = [TextField, Select, Checkbox, DateField, Radio];
  return (
    <div>
      {formFields.map(field =>
        components.map((Component, i) =>
          field.template == Component.name ? <Component key={i} /> : null
        )
      )}
    </div>
  );
};

export default App;
