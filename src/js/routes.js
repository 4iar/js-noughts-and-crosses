import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';

import Layout from "./components/Layout";
import StartGame from "./containers/StartGame";
import Game from "./containers/Game";

const routes = (store) => {
  const forcePlayerSelect = (store) => {
    if (!store.getState().game.player) {
      browserHistory.push('/');
    };
  };

  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={StartGame} />
      <Route path="/play" onEnter={forcePlayerSelect(store)} component={Game} />
    </Route>
  )
};

export default routes;
