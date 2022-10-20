import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About, Home, Contact, Projects} from './routes/index'
import './index.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
