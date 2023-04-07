import React from "react";
 


const Form = ({handleClick}) => {
  //Aqui deberan implementar el form completo con sus validaciones

  
  

  return (
    <div>
      <form>
      <h3>Para mayor informacion ingresa tus datos !</h3>
  
            <button onClick={handleClick}>Enviar</button>
 
      </form>
    </div>
  );
};



export default Form;
