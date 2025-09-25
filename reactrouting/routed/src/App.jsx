import React from 'react'
import { Link ,Routes,Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import Nav from './components/Nav';
import Routing from './components/Routing';
const App = () => {
  return (
    <>
   <Nav/>
   <Routing/>
    </>
  )
}

export default App