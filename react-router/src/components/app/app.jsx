import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../home/home';
import Header from '../header/header';
import About from '../about/about';
import NotFound from '../not-found/not-found';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app-wrapper">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
