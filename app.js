//app.js

import reducers from "./mini-redux-js/reducers/index";
import redux, { createStore } from "./mini-redux/index";
createStore(reducers);

App({
  onLaunch: function() {},
  redux
});
