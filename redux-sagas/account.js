import { dispath } from "../mini-redux/index";
import { loginCompletion } from "../redux-actions/index";
import { requestLogin } from "../utils/util";

const watchLogin = {
  type: "LOGIN",
  callback: async () => {
    const res = await requestLogin();

    if (res.code !== 0) {
      dispath(loginCompletion("error"));
      return;
    }

    dispath(loginCompletion());
  }
};

const loginSaga = [watchLogin];

export default loginSaga;
