const selector = require("./../../utils/selector");
const { dispath, getState } = getApp().state;
import { aysncTest2 } from "./../../utils/actions/index";

const select = function(state) {
  const { name, acc } = state.test2;
  return {
    name,
    acc
  };
};

Component({
  behaviors: [selector],
  data: {
    select: select
  },
  lifetimes: {
    created() {},
    attached() {},
    detached() {}
  },

  methods: {
    handleChange() {
      let { acc } = this.data;
      acc += 2;
      dispath(aysncTest2({ acc }));
    },

    handlePrintStore() {
      console.log(getState());
    }
  }
});
