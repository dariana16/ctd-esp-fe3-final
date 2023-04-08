import { createContext, useContext, useEffect, useReducer} from "react";
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


 const initialState = 
   theme.light


const themeReducer = (state, action) => {
  switch(action.type){
      case 'SWITCH_DARK':
          return  {
            ...state,
            theme: theme.dark,
          };
          case 'SWITCH_LIGHT':
            return  {
              ...state,
              theme: theme.light,
            };
      default: 
          throw new Error
  }
}

const initialDentistState = {dentistList:[], dentistDetail:{}}

const dentistReducer = (state, action) => {
  switch(action.type){
    case 'GET_DENTISTS':
      return {dentistList: action.payload, dentistDetail: state.dentistDetail}
  case 'GET_DENTIST':
      return {dentistDetail: action.payload, dentistList: state.dentistList}
      default:
          throw new Error
  }
}
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
 
  const [favState, favDispatch] = useReducer(favReducer, initialFavState)
  const [dentistState, dentistDispatch] = useReducer(dentistReducer, initialDentistState)
  const [themeState, themeDispatch] = useReducer(themeReducer, initialState)

  const url = 'https://jsonplaceholder.typicode.com/users'
  
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favState))
}, [favState])
  

useEffect(() => {
  fetch(url)
  .then(res => res.json())
  .then(data => dentistDispatch({type: 'GET_DENTISTS', payload: data}))
}, [])

const getDentist = (id) => {
let url = 'https://jsonplaceholder.typicode.com/users/' + id;
fetch(url)
  .then(response => response.json())
  .then(data => dentistDispatch({ type: 'GET_DENTIST', payload: data }))
}
   
  return (
      <ContextGlobal.Provider value={{  dentistState, getDentist, themeState, themeDispatch, favState, favDispatch }}>
      {children}
      </ContextGlobal.Provider>
  );}

export default Context 

export const useContextGlobal = () => useContext(ContextGlobal)