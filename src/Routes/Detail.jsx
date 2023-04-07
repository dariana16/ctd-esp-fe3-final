import React, { useEffect, useState, useParams } from 'react'
import {useNavigate} from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


const Detail = () => {
  const {id} = useParams()
  const [dentistList] = useState([])
  const {favDispatch, apiState,  getDentist,  } = useContextGlobal()
   const navigate = useNavigate() 

  useEffect(() => {
   
  getDentist(id)
  }, )

 

const addFav = () => {
  favDispatch({type: 'ADD_FAV', payload: apiState.dentistDetails})
}

 

  return (
    <>
      <h1>Detail Dentist id </h1>
      <div className='card'>
        
      <h3> {dentistList.dentistDetails.id}</h3>  
        
      </div> 
 
   
    
      <br />
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={addFav}>⭐</button>

      
      
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
    }

export default Detail