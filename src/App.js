import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import favoriteList from './components/layout/favoriteList';

import './App.css';

import { ContextController } from './context';

const App = () => {
  return (
    <ContextController>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/favoriteList" component={favoriteList} />
            </Switch>
          </div>
        </>
      </Router>
    </ContextController>
  );
};

export default App;
