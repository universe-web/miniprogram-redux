// import { dispath } from "./../../mini-redux/index";
// import { aysncTest } from "./../../mini-redux-js/actions/index";
import { request } from "./../../utils/util";

const watchSaga1 = {
  type: "GET_TEST_LIST_SUM",
  callback: async state => {
    // let { acc } = state.test.test;
    // acc++;
    // dispath(aysncTest({ acc }));
    const res = await request();
    console.log(res);
  }
};

const testSaga = [watchSaga1];

export default testSaga;
