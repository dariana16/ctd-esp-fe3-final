import React, { useState } from "react";
import { useContextGlobal } from "../Components/utils/global.context";

const Form = ({ handleClick }) => {
  const { setAuth } = useContextGlobal();

  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let emailTest = email.test(user.email);
    if (emailTest && user.nombre.length > 5) {
      localStorage.setItem("token", user);
      setAuth(true);
      setFormSubmitted(true);
    } else {
      alert("Por favor verifique su información nuevamente");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Para mayor información ingresa tus datos !</h3>

        <input
          type="text"
          placeholder="NOMBRE"
          onChange={(e) => setUser({ ...user, nombre: e.target.value })}
        />

        <input
          type="email"
          placeholder="EMAIL"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <button onClick={handleClick}>Enviar</button>
      </form>

      {formSubmitted && (
        <div>Gracias {user.nombre} te contactaremos cuando antes vía mail!</div>
      )}
    </div>
  );
};

export default Form;
