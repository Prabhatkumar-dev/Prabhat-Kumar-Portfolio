import React from 'react'
import { Link ,Routes,Route } from "react-router-dom";
function Nav() {
  return (
     <nav className='w-full bg-zinc-200 flex items-center justify-center gap-15  text-6xl py-3'>
      <Link to="/"> Home </Link>
      <Link to="/about"> About</Link>
      <Link to="/user"> User</Link>
    <Link to="/form">Form</Link>
      
    </nav>
 
  )
}

export default Nav;