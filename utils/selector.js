const state = getApp().state;

module.exports = Behavior({
  lifetimes: {
    attached() {
      const { __wxExparserNodeId__, handleSetData, data } = this;
      state.subscribe(__wxExparserNodeId__, handleSetData, data.select, this);
      handleSetData.call(this, this.data.select);
    },
    detached() {
      state.unsubscribe(this.__wxExparserNodeId__);
    }
  },

  methods: {
    handleSetData(selector) {
      const store = state.getState();
      const pageData = selector(store);
      this.setData(pageData);
    }
  }
});
