import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import NotFound from './Components/NotFound';
import Navigation from './Components/Navigation';
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*"  element={<NotFound />} />
          </Routes>

      </div>
    </Router>
  );
};

export default App;
