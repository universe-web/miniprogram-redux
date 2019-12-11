import reducers from "./reducers/index";

export function createStore() {
  let state;
  let listeners = [];
  state = toState({}, reducers);

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
    state = toState(action, reducers, state);
    listeners.forEach(child => child.listener.call(child.that, child.selector));
  }

  function toState(action, reducer, state) {
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
          res[i] = toState(action, reducer[i], state[i]);
        } else {
          res[i] = toState(action, reducer[i]);
        }
      }
    }
    return res;
  }

  return {
    getState,
    subscribe,
    unsubscribe,
    dispath
  };
}

export default {
  createStore
};
