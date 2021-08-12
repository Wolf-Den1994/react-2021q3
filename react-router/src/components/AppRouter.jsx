import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Route, Redirect } from 'react-router-dom';
import Home from './home/home';
import About from './about/about';
import Details from './details/details';
import NotFound from './not-found/not-found';

const AppRouter = () => {
  const routes = [
    { path: '/', Component: Home },
    { path: '/about', Component: About },
    { path: '/details/:id', Component: Details },
    { path: '/404', Component: NotFound },
  ];

  const [sort, setSort] = useState('popularity');
  const [searchString, setSearchString] = useState('');

  return (
    <div className="app-wrapper">
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
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
      {window.location.pathname !== '/' &&
      window.location.pathname !== '/about' &&
      window.location.pathname.split('/')[1] !== 'details' ? (
        <Redirect to="/404" />
      ) : null}
    </div>
  );
};

export default AppRouter;
