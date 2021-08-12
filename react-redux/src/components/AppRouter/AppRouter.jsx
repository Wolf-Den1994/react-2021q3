import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Route, Redirect } from 'react-router-dom';
import { routes } from '../../router';

const AppRouter = () => {
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
