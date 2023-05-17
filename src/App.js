import Navbar from './components/molecules/header';
import React from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import './App.css';

import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs';

import Register from './components/Pages/Register'

import Login from './components/Pages/Login';

function App() {
  return (
    <div>
    
    <Navbar/>
    <Routes>
   <Route  exact path='/' Component={Home}></Route>
   <Route exact path='/AboutUs' Component={AboutUs}></Route>
   <Route exact path='/Login' Component={Login}></Route>
   <Route exact path='/Register' Component={Register}></Route>
   
   </Routes>
  </div>
    
  );
}

export default App;
