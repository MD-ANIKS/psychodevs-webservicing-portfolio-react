
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';
import Common from './components/Common';
import growImg from './images/grow.svg';
import aboutImg from './images/about.svg';
import Services from "./components/Services";

import { Routes, Route, Navigate } from 'react-router-dom';
import Contact from "./components/Contact";
import Footer from './components/Footer';


function App() {
  return (
    <>

      <Navbar/>



      <Routes>
        <Route exact path='/' element={<Common title='Thrive and Expand your Business with' visit='/services' btn='Get Started' img={growImg} />} />
        <Route exact path='/about' element={<Common title='Welcome to about page' visit='/contact' btn='Contact Here' img={aboutImg} />} />
        <Route exact path='/services' element={<Services/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route path="/*" element={<Navigate to='/' /> } /> 
      </Routes>

      <Footer/>
    
    </>
  );
}

export default App;
