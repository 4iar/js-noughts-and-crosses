import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import Layout from "./components/Layout";
import * as reducers from './reducers/reducer';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

const app = document.getElementById('app');



ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
      </Route>
    </Router>
  </Provider>,
  app);
