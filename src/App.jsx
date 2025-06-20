import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
