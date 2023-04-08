import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const {themeState, themeDispatch} = useContextGlobal()

  const switchTheme = () => {
    if(themeState.theme){
      themeDispatch({type: 'SWITCH_DARK'})
    } else {
      themeDispatch({type: 'SWITCH_LIGHT'})
    }}
  

  const themeClass = themeState.theme ? 'dark' : 'light'
  return (
    <nav className={themeClass.className}> 
    
      <img src="/DH.ico" alt='DH-ico' />
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/dentist/:id'>Details</Link>
      <Link to='/favs'>Favs</Link>


      <button onClick={switchTheme}>{themeState.theme ? '🌕Dark' : '🌞Light'}</button>
    </nav>
  )
  }

export default Navbar;
 