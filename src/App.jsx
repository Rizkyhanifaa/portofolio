import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';
//import Skills from './components/Skills.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      {/* <Skills /> */}
      <Footer />
    </div>
  );
}

export default App;
