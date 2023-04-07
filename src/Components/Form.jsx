import React, {useState}from "react";
import { useContextGlobal } from '../Components/utils/global.context'


  const Form = ({handleClick}) => {
    const {setAuth} = useContextGlobal()
 
  const [user, setUser] = useState({
    nombre: '',
    email: '',

  })
   

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let emailTest = email(user.email)
    if(emailTest && user.name.length > 5) {
      localStorage.setItem('token', user )
      setAuth(true)   }  else {
        alert('Información invalida')}
       
    }  


  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h3>Para mayor información ingresa tus datos !</h3>

    <input type="text" placeholder="NOMBRE"
        onChange={(e) => setUser({...user, name: e.target.value})}
    />

    <input type="email" placeholder="EMAIL"
        onChange={(e) => setUser({...user, email: e.target.value})}
    />

    <button onClick={handleClick}>Enviar</button>
    </form>

    
    </div>
  );
};



export default Form;
