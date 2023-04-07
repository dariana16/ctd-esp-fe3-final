import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState([useState]);
  const navigate = useNavigate();

  useEffect(() => {
     
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setDentist(data);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <h1>Detail Dentist id </h1>
      <div className='card'>
        
      <h3> {dentist.id}</h3>  
        <h2>{dentist.name}</h2>
        <h2>{dentist.email}</h2>
        <h2>{dentist.website}</h2>
      </div> 
      <br />
      <button onClick={() => navigate(-1)}>Go back</button>
  
    </>
  )
    }

export default Detail