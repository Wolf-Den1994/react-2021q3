import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Route, Switch, useLocation } from 'react-router-dom';
import { routes } from '../../router';

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

const AppRouter = () => {
  const location = useLocation();

  return (
    <div className="app-wrapper">
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="page" key={location.key}>
          <Switch location={location}>
            {routes.map(({ path, Component, exact }) => (
              <Route key={path} exact={exact} path={path}>
                {() => <Component />}
              </Route>
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default AppRouter;
