import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../AppRouter/AppRouter';
import Header from '../Header/Header';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <AppRouter />
    </Router>
  );
};

export default App;
