import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// navbar&footer
import NavBar from './components/NavBar';
// pages
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
