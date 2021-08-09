import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../home/home';
import Header from '../header/header';
import About from '../about/about';
import NotFound from '../not-found/not-found';

const App = () => {
  const [activeLinks, setActiveLinks] = useState([true, false]);

  const chagePage = (event) => {
    const { target } = event;
    const id = target.classList[0].replace(/[^\d]/g, '');
    setActiveLinks((state) => {
      const copy = [...state];
      const falsesState = copy.map(() => false);
      const newState = falsesState.map((el, index) => {
        if (index === +id) return true;
        return false;
      });
      return newState;
    });
  };

  return (
    <Router>
      <Header active={activeLinks} onActive={chagePage} />
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
