exports.createStore = createStore;
exports.subscribe = subscribe;
exports.unsubscribe = unsubscribe;
exports.dispath = dispath;
exports.getState = getState;

exports.redux = Behavior({
  lifetimes: {
    attached() {
      const { __wxExparserNodeId__, handleSetData, data } = this;
      subscribe(__wxExparserNodeId__, handleSetData, data.selector, this);
      handleSetData.call(this, data.selector);
    },
    detached() {
      unsubscribe(this.__wxExparserNodeId__);
    }
  },

  methods: {
    handleSetData(selector) {
      const pageData = selector(state);
      this.setData(pageData);
    }
  }
});

let preState, state;
let listeners = [];
let middlewares;
let reducers;

function createStore(reducer, middlewarelists) {
  reducers = reducer;
  middlewares = middlewarelists;
  state = updateStore({}, reducers, preState);
}

function getState() {
  return JSON.parse(JSON.stringify(state));
}

function subscribe(id, listener, selector, that) {
  let bol = true;
  for (let i in listeners) {
    if (listeners[i].id === id) {
      bol = false;
      break;
    }
  }
  bol && listeners.push({ id, listener, selector, that });
}

function unsubscribe(id) {
  let idx = -1;
  for (let i in listeners) {
    if (listeners[i].id === id) {
      idx = +i;
      break;
    }
  }

  idx !== -1 && listeners.splice(idx, 1);
}

function dispath(action) {
  preState = state;
  state = updateStore(action, reducers, preState);
  console.log(preState, action, state);
  notify();
}

function notify() {
  listeners.forEach(child => child.listener.call(child.that, child.selector));
}

function updateStore(action, reducer, state) {
  const res = {};
  for (let i in reducer) {
    if (typeof reducer[i] === "function") {
      if (state && state[i]) {
        res[i] = reducer[i](action, state[i]);
      } else {
        res[i] = reducer[i](action);
      }
    } else {
      if (state && state[i]) {
        res[i] = updateStore(action, reducer[i], state[i]);
      } else {
        res[i] = updateStore(action, reducer[i]);
      }
    }
  }
  return res;
}
