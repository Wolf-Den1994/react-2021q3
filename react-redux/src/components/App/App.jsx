import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import AppRouter from '../AppRouter/AppRouter';
import Header from '../Header/Header';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Header />
      <AppRouter />
    </Router>
  );
};

export default App;
