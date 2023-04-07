import { createContext, useContext, useEffect, useState, useReducer} from "react";
export const ContextGlobal = createContext();

const theme = {
  dark: {
      theme: false,
      bgColor: '#12121296',
      color: 'white',
      
  },
  light: {
      theme: true,
      bgColor: 'white',
      color: 'black',
      
  }
}

export  const initialState = createContext(theme.light);

const themeReducer = (state, action) => {
  switch(action.type){
      case 'SWITCH_DARK':
          return theme.dark
          case 'SWITCH_LIGHT':
            return theme.light
      default: 
          throw new Error()
  }
}

const Context = ({ children }) => {
  const [auth, setAuth] = useState(false)
  const [dentistList, setDentist] = useState(null)
  const [themeState, themeDispatch] = useReducer(themeReducer, initialState)

  const getDentist = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users"   )
  const data = await response.json()
  setDentist(data)
  }

  

    useEffect(()=> {
    getDentist()},[])
    console.log(dentistList);
   
  return (
      <ContextGlobal.Provider value={{dentistList, setDentist,  auth, setAuth, themeState, themeDispatch }}>
      {children}
      </ContextGlobal.Provider>
  );}

export default Context 

export const useContextGlobal = () => useContext(ContextGlobal)