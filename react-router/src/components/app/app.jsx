import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../AppRouter';
import Header from '../header/header';
import './app.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <AppRouter />
    </Router>
  );
};

export default App;
