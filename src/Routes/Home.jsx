import React from 'react';
import Card from '../Components/Card'
import { Link } from 'react-router-dom'
import {useContextGlobal} from '../Components/utils/global.context'


const Home = () => {
  const {dentistState} = useContextGlobal()

console.log(dentistState);
  return (
    <main className="" >
      <h1>Home</h1>

            <div className='card-grid'>

           
            {dentistState.dentistList.map(dentist => <Link key={dentist.id} to={'/dentist/' + dentist.id }  > <Card data={dentist} />   </Link>)}
         
        
    </div>
        
    </main>
     
  )
}

export default Home