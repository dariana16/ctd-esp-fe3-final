import React from "react";
import {useContextGlobal} from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favState} = useContextGlobal()

  return (
    <div>
        {favState.map(dentist => (
            <div>
                <h3>{dentist.name}</h3>
              
            </div>
        ))}
    </div>
  )
}

export default Favs