import React from 'react';
import { HashRouter,Route,Routes } from "react-router-dom";
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar'
import { HelmetProvider } from 'react-helmet-async';
import ReactSnap from './Pages/ReactSnap';
import Footer from './Components/Footer';

function App() {
  return (
     <>
     
      <HashRouter>
      <HelmetProvider>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/React-snap' element={<ReactSnap/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
        </HelmetProvider>
      </HashRouter>
     </>
  );
}

export default App;
