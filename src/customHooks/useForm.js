import { useState } from "react";

const useForm = () => {
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

    setValues({
      obj,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(values);
  };

  return { handleChange, initialValues, handleSubmit };
};

export default useForm;
