import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// navbar&footer
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// pages
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import RentingFlex from './pages/RentingFlex';
import Contact from './pages/Contact';
import Empresas from './pages/Empresas';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/flota/:name" element={<Vehicles />} />
        <Route path="/rentingflexible" element={<RentingFlex />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/empresas" element={<Empresas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
