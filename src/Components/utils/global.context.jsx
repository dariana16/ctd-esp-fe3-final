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

export  const initialState = theme.light;

const themeReducer = (state, action) => {
  switch(action.type){
      case 'SWITCH_DARK':
          return theme.dark
          case 'SWITCH_LIGHT':
            return theme.light
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

const initialApiState = {dentistList: [], dentistDetail: {}}


const apiReducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch(action.type){
      case 'GET_DENTIST':
          return {dentistList: action.payload, dentistDetail: state.dentistDetail}
      case 'GET_DENT':
          return {dentistDetail: action.payload, dentistList: state.dentistList}
  }
}

const Context = ({ children }) => {
   
  const [apiState, apiDispatch] = useReducer(apiReducer, initialApiState)
  const [themeState, themeDispatch] = useReducer(themeReducer, initialState)
  const [favState, favDispatch] = useReducer(favReducer, initialFavState)


  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favState))
    }, 
    
    [favState])

    useEffect(() => {
      let url = 'https://jsonplaceholder.typicode.com/users'
      const fetchDentist = async () => {
          let res = await fetch(url)
          let data = await res.json()
          apiDispatch({type: 'GET_DENTIST', payload: data.name})
      }
      fetchDentist()
  }, [])

  /*const getDentist = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users"   )
  const data = await response.json()
  setDentist(data)*/
  
  const getDentist= (id) => {
    let url = 'https://jsonplaceholder.typicode.com/users' + id
    fetch(url)
    .then(res => apiDispatch({type: 'GET_DENTIST', payload: res.id}))
}
    
    
  return (
      <ContextGlobal.Provider value={{apiState, apiDispatch, favState, favDispatch,  themeState, themeDispatch, getDentist  }}>
      {children}
      </ContextGlobal.Provider>
  )
}

export default Context 

export const useContextGlobal = () => useContext(ContextGlobal)