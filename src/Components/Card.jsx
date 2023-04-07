import React from "react";
import {useContextGlobal} from '../Components/utils/global.context'

const Card = ({ data }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div  >
<div className='card'>   

<h2> {data.name} </h2>
<h2>{data.username}</h2></div>
    
       
   
        

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
