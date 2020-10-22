import React, { useState } from "react";
import Form from "./Form";

const App = () => {
  const campos = {
    Form1: [
      { nombre: "nombre", tipo: "text" },
      { nombre: "contrasenia", tipo: "text" },
    ],

    Form2: [
      { nombre: "mail", tipo: "email" },
      { nombre: "confirm mail", tipo: "email" },
      { nombre: "password", tipo: "password" },
      { nombre: "confirm password", tipo: "password" },
    ],
  };

  const [form, setForm] = useState("Form1");

  const handleClick = () => {
    if (form === "Form1") {
      setForm("Form2");
    } else {
      setForm("Form1");
    }
  };

  const validateForm = (values) => {
    const err = {};
    if (form === "Form1") {
      if (values.nombre.length === 0) {
        err.nombre = "El nombre no puede ser nulo";
      }
      if (values.contrasenia.length === 0) {
        err.contrasenia = "La contraseña no puede ser nula";
      }
    } else {
      if (values.mail.length === 0) {
        err.mail = "Mail cant be empty";
      }
      if (values["confirm mail"] !== values.nombre) {
        err["confirm mail"] = "Mail must be the same";
      }
      if (values.password.length === 0) {
        err.password = "password cant be empty";
      }
      if (values["confirm password"] !== values.password) {
        err["confirm password"] = "Password must match";
      }
    }
    return err;
  };

  return (
    <div className="container">
      <Form
        campos={campos[form]}
        handleClick={handleClick}
        validateForm={validateForm}
      />
    </div>
  );
};

export default App;
