const selector = require("./../../utils/selector");
const { dispath, getState } = getApp().state;
import { aysncTest, getTestListSum } from "./../../utils/actions/index";

const select = function(state) {
  const { name, acc } = state.test.test;
  const { list, sum } = state.test.list;
  return {
    name,
    acc,
    list,
    sum
  };
};

Component({
  behaviors: [selector],
  // select: selection,
  data: {
    select: select
  },
  lifetimes: {
    attached() {
      dispath(aysncTest({ acc: 2 }));
    }
  },

  methods: {
    handleChange() {
      let { acc } = this.data;
      acc++;
      dispath(aysncTest({ acc }));
    },

    handlePrint() {
      console.log(this.data);
    },

    handlePrintStore() {
      console.log(getState());
    },

    onPullDownRefresh() {
      console.log("下拉");
    },

    onReachBottom() {
      console.log("上拉");
    },

    handleGetSum() {
      dispath(getTestListSum());
    }
  }
});
