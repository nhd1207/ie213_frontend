import { takeLatest, call, put, all } from "redux-saga/effects";
import { action_type as TYPE } from "./action";

import * as api from "../../apis/Car";

function* getListCarSaga(action) {
  try {
    const { params } = action;
    const response = yield call(api.getList, params);
    if (response.status === "success") {
      yield all([put({ type: TYPE.GETLISTCOMPARE.SUCCESS, ...response })]);
    } else {
      yield put({ type: TYPE.GETLISTCOMPARE.ERROR, error: response });
    }
  } catch (error) {
    yield all([put({ type: TYPE.GETLISTCOMPARE.ERROR, error })]);
  }
}

function* compareCarSaga(action) {
  try {
    const { params } = action;
    const response = yield call(api.compareTwoCars, params);
    if (response.status === "success") {
      yield all([put({ type: TYPE.COMPARETWOCAR.SUCCESS, ...response })]);
    } else {
      yield put({ type: TYPE.COMPARETWOCAR.ERROR, error: response });
    }
  } catch (error) {
    yield all([put({ type: TYPE.COMPARETWOCAR.ERROR, error })]);
  }
}

function* getCar1(action) {
  try {
    const { params } = action;
    const response = yield call(api.getDetailByCode, params);
    if (response.status === "success") {
      yield all([put({ type: TYPE.GETCAR1.SUCCESS, ...response })]);
    } else {
      yield put({ type: TYPE.GETCAR1.ERROR, error: response });
    }
  } catch (error) {
    yield all([put({ type: TYPE.GETCAR1.ERROR, error })]);
  }
}

function* getCar2(action) {
  try {
    const { params } = action;
    const response = yield call(api.getDetailByCode, params);
    if (response.status === "success") {
      yield all([put({ type: TYPE.GETCAR2.SUCCESS, ...response })]);
    } else {
      yield put({ type: TYPE.GETCAR2.ERROR, error: response });
    }
  } catch (error) {
    yield all([put({ type: TYPE.GETCAR2.ERROR, error })]);
  }
}

function* watcher() {
  yield all([
    takeLatest(TYPE.GETLISTCOMPARE.REQUEST, getListCarSaga),
    takeLatest(TYPE.COMPARETWOCAR.REQUEST, compareCarSaga),
    takeLatest(TYPE.GETCAR1.REQUEST, getCar1),
    takeLatest(TYPE.GETCAR2.REQUEST, getCar2),
  ]);
}

export default watcher;
