import { redux, dispath } from "./../../mini-redux/index";
import { aysncTest2 } from "./../../redux-actions/index";

const selector = function(state) {
  const { name, acc } = state.test2;
  return {
    name,
    acc
  };
};

Component({
  behaviors: [redux],
  selector: selector,

  lifetimes: {
    attached() {
      console.log("Page test2");
    }
  },

  methods: {
    handleChange() {
      let { acc } = this.data;
      acc += 2;
      dispath(aysncTest2({ acc }));
    }
  }
});
