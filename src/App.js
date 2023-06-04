import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './Components/Projects';
import Resume from './Components/Resume';

const App = () => {
  return (
    <Router>
      <div>
      <Switch>

          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>

      </div>
    </Router>
  );
};

export default App;
