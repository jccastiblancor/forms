import React, { useEffect } from "react";

import useForm from "../customHooks/useForm";

const Form = ({ campos, handleClick, validateForm }) => {
  const { handleChange, initialValues, handleSubmit, errors } = useForm(
    validateForm
  );

  useEffect(() => {
    initialValues(campos.map((campo) => campo.nombre));
  }, [campos]); // eslint-disable-line react-hooks/exhaustive-deps

  const renderForm = () => {
    if (campos) {
      return (
        <form onSubmit={handleSubmit}>
          {campos.map(({ nombre, tipo }) => {
            return (
              <div key={nombre} className="form-group">
                <label>{nombre}</label>
                <input
                  id={nombre}
                  name={nombre}
                  type={tipo}
                  className="form-control"
                  onChange={handleChange}
                />
                {errors[nombre] && <p>{errors[nombre]}</p>}
              </div>
            );
          })}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      );
    }
    return <div>Loading</div>;
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1> Formulario </h1>
        <button className="btn btn-warning" onClick={() => handleClick()}>
          Change Form
        </button>
      </div>
      {renderForm()}
    </div>
  );
};

export default Form;
