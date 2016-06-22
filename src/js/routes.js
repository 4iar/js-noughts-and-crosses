import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from "./components/Layout";
import StartGame from "./containers/StartGame";
import Game from "./containers/Game";

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={StartGame} />
    <Route path="/play" component={Game} />
  </Route>
);

export default routes;
