import { useReducer, useEffect } from 'react';
import React  from "react";


const Card = ({ data }) => {
  const initialFavState = JSON.parse(localStorage.getItem('favs')) || []

  const favReducer = (state, action) => {
    switch(action.type){
        case 'ADD_FAV':
            return [...state, action.payload]
        default:
            throw new Error()
    }
  }

  const [favState, favDispatch] = useReducer(favReducer, initialFavState)

  const addFav = ()=>{ 
    favDispatch({ type: 'ADD_FAV', payload: data });
  }
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favState))
    }, 
    
    [favState])
  return (
    <div  >
<div className='card'>   

<h2> {data.name} </h2>
<h2>{data.username}</h2></div>

        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;