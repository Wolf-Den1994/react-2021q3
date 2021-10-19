/* eslint-disable no-undef */
import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import AppRouter, { LocationDisplay } from './AppRouter';
import Header from '../Header/Header';

describe('AppRouter component', () => {
  test('full app rendering/navigating', () => {
    const history = createMemoryHistory();
    render(
      // eslint-disable-next-line react/jsx-filename-extension
      <Router history={history}>
        <Header />
        <AppRouter />
      </Router>,
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/about/i), leftClick);
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
  });

  test('landing on a bad page', () => {
    const history = createMemoryHistory();
    history.push('/some/bad/route');
    render(
      <Router history={history}>
        <AppRouter />
      </Router>,
    );

    expect(screen.getByText(/resource is not found/i)).toBeInTheDocument();
  });

  test('rendering a component that uses useLocation', () => {
    const history = createMemoryHistory();
    const route = '/home';
    history.push(route);
    render(
      <Router history={history}>
        <LocationDisplay />
      </Router>,
    );

    expect(screen.getByTestId('location-display')).toHaveTextContent(route);
  });
});
