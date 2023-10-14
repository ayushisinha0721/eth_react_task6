// App.js
import React from 'react';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Nav from './components/Nav';
import {HashRouter, Routes, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <div className="App">
      
      <HashRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;