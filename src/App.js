import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Index from './components/Index';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Index} />
        <Switch>
          <Route exact path='/home' component={Home} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
