import { takeLatest, call, put, all } from "redux-saga/effects";
import { action_type as TYPE } from "./action";
import { push } from "react-router-redux";
import * as api from "../../apis/Auth";
import * as api2 from "../../apis/User"
// import * as apiuser from "../../../apis/User";
import Cookies from "js-cookie";
import { message } from 'antd'

function* getListSaga(action) {
  try {
    const { params, url } = action;
    // params.remember_me = true;
    const response = yield call(api.login, params);
    if (response.status === "success") {
      yield all([put({ type: TYPE.LOGIN.SUCCESS, ...response })]);
      Cookies.set("jwt", response.token);
      yield put(push(url));
      window.location.reload();
      // let param = {email: params.email};
      // yield put({type: TYPE.VERIFY.REQUEST, param})
    } else {
      yield put({ type: TYPE.LOGIN.ERROR, response: response });
    }
  } catch (error) {
    yield all([put({ type: TYPE.LOGIN.ERROR, error })]);
  }
}
function* verifySaga(action) {
  try {
    const { param } = action;
    const response = yield call(api2.getMe, param);
    if (response.status === "success") {
      yield all([put({ type: TYPE.VERIFY.SUCCESS, ...response })]);
    } 
    else 
    {
      // Cookies.set("jwt", null);
      message.error('Vui lòng đăng nhập để tiếp tục')
      yield all([put({ type: TYPE.VERIFY.ERROR })]);
      yield put(push("/login"));
      window.location.reload();
    }
  } catch (error) {
    message.error('Vui lòng đăng nhập để tiếp tục')
    yield all([put({ type: TYPE.VERIFY.ERROR, error })]);
    yield put(push("/login"));
    window.location.reload();
  }
}

function* verifyLayoutSaga(action) {
  try {
    const { param } = action;
    const response = yield call(api2.getMe, param);
    if (response.status === "success") {
      yield all([put({ type: TYPE.LAYOUT.SUCCESS, ...response })]);
    } 
    else 
    {
      // Cookies.set("jwt", null);
      yield all([put({ type: TYPE.LAYOUT.ERROR })]);
    }
  } catch (error) {
    yield all([put({ type: TYPE.LAYOUT.ERROR, error })]);

  }
}

function* logoutSaga(action) {
  try {
    const { param } = action;
    const response = yield call(api.logout, param);
    if (response.status === "success") {
      yield all([put({ type: TYPE.LOGOUT.SUCCESS, ...response })]);
      Cookies.set("jwt", null);
      // yield put(push("/login"));
      // message.success(`Xin mời bạn đăng nhập lại!`)
      window.location.reload();
    } else {
      yield all([put({ type: TYPE.LOGOUT.ERROR })]);
    }
  } catch (error) {
    yield all([put({ type: TYPE.LOGOUT.ERROR, error })]);
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
    takeLatest(TYPE.LOGOUT.REQUEST, logoutSaga),
    takeLatest(TYPE.LAYOUT.REQUEST, verifyLayoutSaga),

    // takeLatest(TYPE.USER.REQUEST, getListUserSaga)
  ]);
}

export default watcher;
