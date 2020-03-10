//app.js

import { createStore } from "./mini-redux/index";
import reducers from "./redux-reducers/index";
import sagas from "./redux-sagas/index";

createStore(reducers, sagas);

App({
  onLaunch: function() {}
});
