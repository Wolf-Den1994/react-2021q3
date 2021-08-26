/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { Redirect, Route } from 'react-router-dom';
import { createStore } from 'redux';
import store from './store/store';

import { renderApp } from './renderApp';
// import { fetchDataByUrl } from './data/fetchDataByUrl';
import { renderTemplate } from './renderTemplate';

const app = express();

app.use(express.static('dist'));

// app.get('/api/router-data', async (req, res) => {
//   try {
//     console.log('try');

//     res.json((await fetchDataByUrl(req.query.url.toString())));
//   } catch (err) {
//     res.status(500).json({
//       message: err.message,
//       stack: err.stack
//     });
//   }
// });

app.get('*', async (req, res) => {
  /* Example with Empty content */
  // const content = '';

  /* Example with SSR */
  // const content = renderToString(renderApp());

  /* Example with Routing */
  // const context = {};

  // const content = renderToString(
  //   <StaticRouter location={req.url} context={context}>
  //     {renderApp()}
  //   </StaticRouter>,
  // );

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

  /* Example with Data */
  // eslint-disable-next-line
  let context = {};
  // let data = await fetchDataByUrl(req.url);

  // let store = createStore(
  //   (state) => state,
  //   data,
  // );

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <RedirectWithStatus from="/" to="/home" status={301} />
        {/* <Route exact path="/">
          <Redirect to="/home" />
        </Route> */}
        {renderApp()}
      </StaticRouter>
    </Provider>,
  );

  console.log(context.status, context.url);

  if (context.url) {
    res.redirect(301, context.url);
  }
  res.send(
    renderTemplate({
      cssPath: 'main.css',
      jsPath: 'main.js',
      content,
      // data: JSON.stringify(data),
    }),
  );
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
