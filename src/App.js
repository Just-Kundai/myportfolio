import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Projects from './Components/Projects';
import Resume from './Components/Resume';

const App = () => {
  return (
    <Router>
      <div>

          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>

      </div>
    </Router>
  );
};

export default App;
