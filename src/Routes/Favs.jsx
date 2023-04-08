import React from "react";
import { useContextGlobal } from '../Components/utils/global.context'
import { Link } from "react-router-dom";
import Card from "../Components/Card";


const Favs = () => {
  const { favState } = useContextGlobal()

  return (
    <div>
      {favState.map(dentist => (
      <Link key={dentist.id} to={'/dentist/'+ dentist.id}><Card data={dentist}/></Link>
      ))}
    </div>
  )
}

export default Favs;
