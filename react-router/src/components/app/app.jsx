import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Home from '../home/home';
import Header from '../header/header';
import About from '../about/about';
import Details from '../details/details';
import NotFound from '../not-found/not-found';
import './app.scss';

const App = () => {
  const [sort, setSort] = useState('popularity');
  const [searchString, setSearchString] = useState('');

  const routes = [
    { path: '/', Component: Home, id: 1 },
    { path: '/about', Component: About, id: 2 },
  ];

  return (
    <Router>
      <Header />
      <div className="app-wrapper">
        {routes.map(({ path, Component, id }) => (
          <Route key={id} exact path={path}>
            {({ match }) => (
              <CSSTransition
                timeout={300}
                classNames="page"
                unmountOnExit
                in={match != null}
              >
                <Component
                  sort={sort}
                  setSort={setSort}
                  searchString={searchString}
                  setSearchString={setSearchString}
                />
              </CSSTransition>
            )}
          </Route>
        ))}
        {/* <Route exact path="/">
          <Home
            sort={sort}
            setSort={setSort}
            searchString={searchString}
            setSearchString={setSearchString}
          />
        </Route>
        <Route path="/about">
          <About />
        </Route> */}
        <Route
          path="/details/:q/:id"
          render={({ match }) => {
            const id = match.params;
            const q = match.params;
            return <Details match={(id, q)} sort={sort} />;
          }}
        />
        <Route exact path="/404" component={NotFound} />
        {window.location.pathname !== '/' &&
        window.location.pathname !== '/about' &&
        window.location.pathname.split('/')[1] !== 'details' ? (
          <Redirect to="/404" />
        ) : null}
      </div>
    </Router>
  );
};

export default App;
