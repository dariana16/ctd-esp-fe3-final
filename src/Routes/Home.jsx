import React from 'react';
import Card from '../Components/Card'
import { Link } from 'react-router-dom'
import {useContextGlobal} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {apiState} = useContextGlobal()

console.log(apiState);
  return (
    <main className="" >
      <h1>Home</h1>

            <div className='card-grid'>

           
            {apiState.dentistList.map(dentist => <Link key={dentist.id} to={'/dentist/:id' + dentist.id }  > <Card data={dentist} />   </Link>)}
         
        
    </div>
        
    </main>
     
  )
}

export default Home