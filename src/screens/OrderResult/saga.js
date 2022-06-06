import { takeLatest, call, put, all } from "redux-saga/effects";
import { action_type as TYPE } from "./action";
import * as api from "../../apis/CarOrder";

function* cancelOrderSaga(action) {
  try {
    const { id } = action;
    const response = yield call(api.cancel, id);
    if (response.status === "success") {
      yield all([put({ type: TYPE.CANCELORDER.SUCCESS, ...response })]);
    //   window.location.reload();
    } else {
      yield put({ type: TYPE.CANCELORDER.ERROR, error: response });
    }
  } catch (error) {
    yield all([put({ type: TYPE.CANCELORDER.ERROR, error })]);
  }
}


function* watcher() {
  yield all([takeLatest(TYPE.CANCELORDER.REQUEST, cancelOrderSaga)]);
}

export default watcher;
