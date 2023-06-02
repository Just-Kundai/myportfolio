import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './Components/Projects';

const App = () => {
  return (
    <Router>
    <div>
    <Switch>
    <Route path="/projects">
    <Projects />
    </Switch>
    </div>
    </Router>
  )
}
