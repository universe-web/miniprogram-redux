//app.js

import reducers from "./mini-redux-js/reducers/index";
import redux, { createStore } from "./mini-redux/index";

import sagas from "./mini-redux-js/sagas/index";
createStore(reducers, sagas);

App({
  onLaunch: function() {},
  redux
});
