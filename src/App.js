import React from 'react';
import './css/App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import resumeData from './resume_data';

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData}/>
      <About resumeData={resumeData}/>
      <Resume resumeData={resumeData}/>
      <Portfolio resumeData={resumeData}/>
      <Contact/>
      <Footer resumeData={resumeData}/>
    </div>
  );
}

export default App;
