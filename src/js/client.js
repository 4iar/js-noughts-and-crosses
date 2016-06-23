import React from "react";
import ReactDOM from "react-dom";
import { Router, hashHistory } from "react-router";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import routes from "./routes";

import game from './reducers/Game';
import history from './reducers/History';

const reducer = combineReducers({game, history});
const store = createStore(reducer);

const app = document.getElementById('app');


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes(store)}>
    </Router>
  </Provider>,
  app);
