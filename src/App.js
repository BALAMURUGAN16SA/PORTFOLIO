import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Competitions from './components/Competitions';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Technologies />
      <Projects />
      <Competitions />
      <Certifications />  
      <Contact />
    </div>
  );
}

export default App;