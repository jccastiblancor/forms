import React, { useState, useEffect } from "react";

import useForm from "../customHooks/useForm";

const Form = () => {
  const campos = {
    Form1: [
      { nombre: "nombre", tipo: "text" },
      { nombre: "contraseña", tipo: "text" },
    ],

    Form2: [
      { nombre: "mail", tipo: "mail" },
      { nombre: "confirm mail", tipo: "mail" },
      { nombre: "password", tipo: "password" },
      { nombre: "confirm password", tipo: "password" },
    ],
  };

  const [form, setForm] = useState("Form1");

  const { handleChange, initialValues, handleSubmit } = useForm();

  useEffect(() => {
    initialValues(campos[form].map((campo) => campo.nombre));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = () => {
    if (form === "Form1") {
      setForm("Form2");
    } else {
      setForm("Form1");
    }
  };

  const renderForm = () => {
    if (campos[form]) {
      return (
        <form onSubmit={handleSubmit}>
          {campos[form].map((campo) => {
            return (
              <div key={campo.nombre} className="form-group">
                <label>{campo.nombre}</label>
                <input
                  id={campo.nombre}
                  name={campo.nombre}
                  type={campo.type}
                  className="form-control"
                  onChange={handleChange}
                />
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
        <h1> {form} </h1>
        <button className="btn btn-warning" onClick={handleClick}>
          {" "}
          Change Form
        </button>
      </div>
      {renderForm()}
    </div>
  );
};

export default Form;
