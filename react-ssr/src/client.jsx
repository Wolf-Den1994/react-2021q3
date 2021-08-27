import * as React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { renderApp } from './renderApp';
import store from './store/store';

function run(st) {
  hydrate(
    <Provider store={st}>
      <Router>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        {renderApp()}
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
}
run(store);
