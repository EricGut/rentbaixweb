import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// navbar&footer
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// pages
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/flota/:name" element={<Vehicles />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
