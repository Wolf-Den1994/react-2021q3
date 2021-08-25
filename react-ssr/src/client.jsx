/* eslint-disable no-unused-vars */
import * as React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { createStore, Store } from 'redux';

import { renderApp } from './renderApp';
// import { restoreDataOnClient } from './data/restoreDataOnClient';
// import { reducer } from './reducer';
import store from './store/store';

function run(st) {
  // function run() {
  hydrate(
    // renderApp(),

    <Router>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      {renderApp()}
    </Router>,

    // <Provider store={st}>
    //   <Route exact path="/">
    //     <Redirect to="/home" />
    //   </Route>
    //   <Router>{renderApp()}</Router>
    // </Provider>,
    document.getElementById('root'),
  );
}

// const store = createStore(reducer, restoreDataOnClient());
// run();
run(store);
