import { useState } from "react";

const useForm = (validateForm) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const initialValues = (val) => {
    const obj = {};

    for (const key of val) {
      obj[key] = "";
    }

    setValues(obj);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setErrors(validateForm(values));
    console.log(values);
  };

  return { handleChange, initialValues, handleSubmit, errors };
};

export default useForm;
