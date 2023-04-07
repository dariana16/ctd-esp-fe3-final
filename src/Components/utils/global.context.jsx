import { createContext, useContext, useEffect, useState, useReducer} from "react";

//export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

const initialFavState = JSON.parse(localStorage.getItem('favs')) || []

const favReducer = (state, action) => {
  switch(action.type){
      case 'ADD_FAV':
          return [...state, action.payload]
      default:
          throw new Error
  }
}
const Context = ({ children }) => {
  
  const [dentistList, setDentist] = useState([])

  const getDentist = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  setDentist(data)
  }

  const [favState, favDispatch] = useReducer(favReducer, initialFavState)
  
    useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favState))
    }, 
    
    [favState])
  
    useEffect(()=> {

    getDentist()},[])
  
    console.log(dentistList);



  return (
      <ContextGlobal.Provider value={{dentistList, setDentist, favState, favDispatch}}>
      {children}
      </ContextGlobal.Provider>
  );}

export default Context 

export const useContextGlobal = () => useContext(ContextGlobal)