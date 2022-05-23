import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// navbar&footer
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// pages
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import RentingFlex from './pages/RentingFlex';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/flota/:name" element={<Vehicles />} />
        <Route path="/rentingflexible" element={<RentingFlex />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
