import React from "react";
import { useContextGlobal } from '../Components/utils/global.context'

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
  const { favState } = useContextGlobal()

  return (
    <div>
      {favState.map(dentist => (
        <div key={dentist.id}>
          <h3>{dentist.name}</h3>
          {/* Add the rest of the card elements here */}
        </div>
      ))}
    </div>
  )
}

export default Favs;
