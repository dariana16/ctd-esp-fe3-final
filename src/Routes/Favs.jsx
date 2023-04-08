import React from "react";
import { useContextGlobal } from '../Components/utils/global.context'
import { Link } from "react-router-dom";
import Card from "../Components/Card";


const Favs = () => {
  const { favState, themeState, favDispatch} = useContextGlobal()

  return (
    <div className={themeState.className}>

<h1>Dentists Favs</h1>
      <div className='card-grid'>
      {favState.map(dentist => (
      <Link key={dentist.id} to={'/dentist/'+ dentist.id}><Card data={dentist}/></Link>
      ))}
    </div>
    </div>
  )
}

export default Favs;
