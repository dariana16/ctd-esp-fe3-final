import React, {   useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useContextGlobal from '../Components/utils/global.context'

const Detail = () => {
  const { id } = useParams();
  const {dentistState, dentistDispatch, getDentist} = useContextGlobal()
  const navigate = useNavigate();

  useEffect(() => {
    getDentist(id)
  }, [id])

  return (
    <>
      <h1>Detail Dentist id </h1>
      <div className='card'>
      <img className="imgdoctor" src="/images/doctor.jpg" alt="" />
      <h3>{dentistState.dentistDetail.name}</h3>
        <h4>{dentistState.dentistDetail.email}</h4>
        <p>{dentistState.dentistDetail.phone}</p>
        <p>{dentistState.dentistDetail.website}</p>
      </div> 
      <br />
      <button onClick={() => navigate(-1)}>Go back</button>
  
    </>
  )
    }

export default Detail