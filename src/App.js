import React from 'react';
import "./App.css";
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
 import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Effect from "./Components/Effect";
import Typetext from './Components/Typetext';

const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <Effect/>
      <Typetext/>  
      
    </>
    );
}

export default App;
