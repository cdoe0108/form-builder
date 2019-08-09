import React, { useState, useEffect } from 'react';
import { getFormData } from './ApiCall.js';

const App = () => {
  const [formFields, setFormFields] = useState([]);
  useEffect(() => {
    getFormData('./dummyData/formData.json').then(response => {
      response.map(field => {
        asyncComponent('./components/' + field.template);
      });
    });
  }, []);

  const asyncComponent = path => {
    import(`${path}`).then(module =>
      setFormFields(m => m.concat(module.default))
    );
  };

  return (
    <div>
      {formFields.map((Component, i) => Component && <Component key={i} />)}
    </div>
  );
};

export default App;
