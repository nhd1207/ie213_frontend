import { takeLatest, call, put, all } from "redux-saga/effects";
import { action_type as TYPE } from "./action";
import { push } from "react-router-redux";
import * as api from "../../apis/Auth";
// import * as apiuser from "../../../apis/User";
import Cookies from "js-cookie";

function* getListSaga(action) {
  try {
    const { params } = action;
    // params.remember_me = true;
    const response = yield call(api.login, params);
    console.log(params);
    if (response.status) {
      yield all([put({ type: TYPE.LOGIN.SUCCESS, ...response })]);
      Cookies.set("jwt", response.token);
      console.log(response);
      yield put(push("/home"));
      window.location.reload();
      // let param = {email: params.email};
      // yield put({type: TYPE.VERIFY.REQUEST, param})
    } else {
      yield put({ type: TYPE.LOGIN.ERROR, error: response });
    }
  } catch (error) {
    yield all([put({ type: TYPE.LOGIN.ERROR, error })]);
  }
}
function* verifySaga(action) {
  try {
    const { param } = action;
    const response = yield call(api.verify, param);
    if (response.status && response.data[0]?.id > 0) {
      yield all([put({ type: TYPE.VERIFY.SUCCESS, ...response })]);
    } else {
      Cookies.set("web_token", null);
      yield put(push("/login"));
    }
  } catch (error) {
    yield all([put({ type: TYPE.VERIFY.ERROR, error })]);
  }
}

// function* getListUserSaga(action) {
//     try {
      
//       const { params } = action;
//       console.log(params);
//       const response = yield call(apiuser.getList, params);
//       if (response.status) {
//         yield all([put({ type: TYPE.USER.SUCCESS, ...response })]);
//       } else {
//         yield put({ type: TYPE.USER.ERROR, error: response });
//       }
//     } catch (error) {
//       yield all([put({ type: TYPE.USER.ERROR, error })]);
//     }
//   }

function* watcher() {
  yield all([
    takeLatest(TYPE.LOGIN.REQUEST, getListSaga),
    takeLatest(TYPE.VERIFY.REQUEST, verifySaga),
    // takeLatest(TYPE.USER.REQUEST, getListUserSaga)
  ]);
}

export default watcher;
