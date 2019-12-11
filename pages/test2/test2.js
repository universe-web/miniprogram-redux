const { redux, dispath } = getApp().redux;
import { aysncTest2 } from "./../../mini-redux-js/actions/index";

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

  methods: {
    handleChange() {
      let { acc } = this.data;
      acc += 2;
      dispath(aysncTest2({ acc }));
    }
  }
});
