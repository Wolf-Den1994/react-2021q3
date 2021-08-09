import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../home/home';
import Header from '../header/header';
import About from '../about/about';
import NotFound from '../not-found/not-found';
import Details from '../details/details';

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
          <Route
            path="/details/:q/:id"
            render={({ match }) => {
              const id = match.params;
              const q = match.params;
              return <Details match={(id, q)} />;
            }}
          />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
