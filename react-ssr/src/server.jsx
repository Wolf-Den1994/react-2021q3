import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter, Redirect, Route } from 'react-router-dom';
import store from './store/store';
import { renderApp } from './renderApp';
import { renderTemplate } from './renderTemplate';

const app = express();

app.use(express.static('dist'));

app.get('*', async (req, res) => {
  function RedirectWithStatus({ from, to, status }) {
    return (
      <Route
        exact
        path={from}
        render={({ staticContext }) => {
          if (staticContext) staticContext.status = status;
          return <Redirect from={from} to={to} />;
        }}
      />
    );
  }

  const context = {};

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <RedirectWithStatus from="/" to="/home" status={301} />
        {renderApp()}
      </StaticRouter>
    </Provider>,
  );

  if (context.url) {
    res.redirect(301, context.url);
  }

  res.send(
    renderTemplate({
      cssPath: 'main.css',
      jsPath: 'main.js',
      content,
    }),
  );
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port: 3000`);
});
