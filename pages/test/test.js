import { redux, dispath } from "./../../mini-redux/index";
import { aysncTest, getTestListSum } from "./../../mini-redux-js/actions/index";
import { binarySearch } from "./../../utils/util";

const selector = function(state) {
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
  behaviors: [redux],
  selector: selector,

  observers: {
    acc: function(acc) {
      if (acc === 4) {
        console.log(acc);
      }
    }
  },

  componentDidUpdate: function(prestate) {
    const { acc } = this.data;

    if (prestate.acc !== acc) {
      console.log(`acc：${prestate.acc} -> ${acc}`);
    }
  },

  lifetimes: {
    attached() {
      dispath(aysncTest({ acc: 2 }));
      console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
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
