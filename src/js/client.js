import React from "react";
import ReactDOM from "react-dom";
import { Router, hashHistory } from "react-router";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import routes from "./routes";

import game from './reducers/Game';

const reducer = combineReducers({game});
const store = createStore(reducer);

const app = document.getElementById('app');


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes(store)}>
    </Router>
  </Provider>,
  app);
