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
        <form noValidate validated="true" onSubmit={handleSubmit}>
          {campos.map(({ nombre, tipo }) => {
            return (
              <div key={nombre} className="form-group">
                <label className={errors[nombre] ? "error" : ""}>
                  {nombre}
                </label>
                <input
                  className={
                    errors[nombre] ? "form-error form-control" : "form-control"
                  }
                  id={nombre}
                  name={nombre}
                  type={tipo}
                  onChange={handleChange}
                />
                {errors[nombre] && (
                  <p className="error-small">{errors[nombre]}</p>
                )}
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
