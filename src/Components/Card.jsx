import React from "react";


const Card = ({ data }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className='card'>
        <h2> {data.name} </h2>
        <h2>{data.username}</h2>
       
   
        

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
