import { takeLatest, call, put, all } from "redux-saga/effects";
import { action_type as TYPE } from "./action";
import { push } from "react-router-redux";
import * as api from "../../apis/Car";
import * as apiShowroom from "../../apis/Showroom";
import * as apiCarOrder from "../../apis/CarOrder";
function* getListCarByIDSaga(action) {
  try {
    const { params } = action;
    const response = yield call(api.getDetailByCode, params);
    if (response.status === "success") {
      yield all([put({ type: TYPE.GETCARORDER.SUCCESS, ...response })]);
    } else {
      yield put({ type: TYPE.GETCARORDER.ERROR, error: response });
    }
  } catch (error) {
    yield all([put({ type: TYPE.GETCARORDER.ERROR, error })]);
  }
}

function* getListShowroomSaga(action) {
  try {
    const { params } = action;
    const response = yield call(apiShowroom.getList, params);
    if (response.status === "success") {
      yield all([put({ type: TYPE.GETLISTSHOWROOM.SUCCESS, ...response })]);
    } else {
      yield put({ type: TYPE.GETLISTSHOWROOM.ERROR, error: response });
    }
  } catch (error) {
    yield all([put({ type: TYPE.GETLISTSHOWROOM.ERROR, error })]);
  }
}

function* createCarOrderSaga(action) {
  try {
    const { params } = action;
    let data = params;
    const response = yield call(apiCarOrder.create, data);
    if (response.status === "success") {
      yield all([
        put({ type: TYPE.CREATECARORDER.SUCCESS, ...response }),
        // put({ type: TYPE.ACCESSORYBILLADMIN.REQUEST, params: { status: 1 } })
      ]);
      yield put(
        push(`/order-result/${response.createdCarOrder._id}`, [response.createdCarOrder])
      );
      window.location.reload();
    } else {
      yield put({ type: TYPE.CREATECARORDER.ERROR, error: response });
    }
  } catch (error) {
    yield all([put({ type: TYPE.CREATECARORDER.ERROR, error })]);
  }
}

function* watcher() {
  yield all([
    takeLatest(TYPE.GETCARORDER.REQUEST, getListCarByIDSaga),
    takeLatest(TYPE.GETLISTSHOWROOM.REQUEST, getListShowroomSaga),
    takeLatest(TYPE.CREATECARORDER.REQUEST, createCarOrderSaga),
  ]);
}

export default watcher;
