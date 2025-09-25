import React from 'react'
import { Link ,Routes,Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import User from './User';
import Userdetails from "./Userdetails"
import Form from './Form';
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/ >
      <Route path="/user" element = {<User/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/:name" element={<Userdetails/>}/>
      <Route path='/form' element={<Form/>}/>
      </Routes>
  )
}

export default Routing;