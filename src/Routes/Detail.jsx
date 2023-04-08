import React, {   useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useContextGlobal from '../Components/utils/global.context'

const Detail = () => {
  const { id } = useParams();
  
  const {dentistState, getDentist, dentistDispatch, themeState} = useContextGlobal()
  const navigate = useNavigate();

  useEffect(() => {
    getDentist(id)
  }, [id])

  return (
    <>

    <div className= {themeState.className}> 
      <h1>Detail Dentist id </h1>
      <div className='card-grid'>
      <img   src="/images/doctor.jpg" alt="" />
      <h3>{dentistState.dentistDetail.name}</h3>
        <h4>{dentistState.dentistDetail.email}</h4>
        <p>{dentistState.dentistDetail.phone}</p>
        <p>{dentistState.dentistDetail.website}</p>
      </div> 
      </div>
      <br />
      <button onClick={() => navigate(-1)}>Go back</button>
  
    </>
  )
    }

export default Detail