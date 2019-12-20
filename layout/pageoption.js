import { redux } from "../mini-redux/index";

const selector = function(state) {
  const { isLogin } = state.account;

  return {
    isLogin
  };
};

Component({
  behaviors: [redux],
  selector: selector,

  properties: {
    needLogin: { type: Boolean, value: false }
  }
});
