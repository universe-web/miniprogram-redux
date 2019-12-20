import testSaga from "./test";
import test2Saga from "./test2";
import accountSaga from "./account";

function initSaga(...sagaList) {
  return sagaList.flat(2).reduce((acc, cur) => {
    if (acc[cur.type]) {
      acc[cur.type].push(cur.callback);
    } else {
      acc[cur.type] = [cur.callback];
    }
    return acc;
  }, {});
}

export default initSaga(testSaga, test2Saga, accountSaga);
