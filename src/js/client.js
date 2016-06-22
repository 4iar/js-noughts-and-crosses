import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import Layout from "./components/Layout";
import StartGame from "./containers/StartGame";
import Game from "./containers/Game";

import game from './reducers/Game';
import history from './reducers/History';

const reducer = combineReducers({game, history});
const store = createStore(reducer);

const app = document.getElementById('app');


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={StartGame} />
        <Route path="/play" component={Game} />
      </Route>
    </Router>
  </Provider>,
  app);
