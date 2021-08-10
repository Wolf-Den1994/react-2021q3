import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Home from '../home/home';
import Header from '../header/header';
import About from '../about/about';
import NotFound from '../not-found/not-found';
import Details from '../details/details';

const App = () => {
  const [sort, setSort] = useState('popularity');
  const [searchString, setSearchString] = useState('');

  const [showHome, setShowHome] = useState(true);
  const [showAbout, setShowAbout] = useState(false);

  console.log(showHome, showAbout)

  return (
    <Router>
      <Header onShowAbout={setShowAbout} />
      <div className="app-wrapper">
        <Switch>
          <Route exact path="/">
            {showHome && (
              <Home
                sort={sort}
                setSort={setSort}
                searchString={searchString}
                setSearchString={setSearchString}
              />
            )}
          </Route>
          <Route path="/about">
            <CSSTransition
              in={showAbout}
              timeout={300}
              classNames="fade"
              unmountOnExit
              onEnter={() => setShowHome(false)}
              onExited={() => setShowHome(true)}
            >
              <About />
            </CSSTransition>
          </Route>
          <Route
            path="/details/:q/:id"
            render={({ match }) => {
              const id = match.params;
              const q = match.params;
              return <Details match={(id, q)} sort={sort} />;
            }}
          />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
