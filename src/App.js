import Navbar from './components/molecules/header';
import { Fragment } from 'react';
import { BrowserRouter as Router ,Route, Switch,Routes } from 'react-router-dom';
import HeroSection from './components/Pages/HeroSection';
import './App.css';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Project from './components/Pages/Projects';
import Vedios from './components/Pages/Vedios';
import Login from './components/Pages/Login';

function App() {
  return (
    <Fragment>
    <Router><Navbar/></Router>
  <HeroSection/>
  </Fragment>
    
  );
}

export default App;
