import {
  takeLatest,
  call,
  put,
  all,
} from 'redux-saga/effects'
import {
  action_type as TYPE
} from './action'

import * as api from '../../apis/Showroom'

function* getListShowroomSaga(action) {
  try {
    const { params } = action
    const response = yield call(api.getList, params)
    if (response.status === 'success') {
      yield all([
        put({ type: TYPE.GETSHOWROOM.SUCCESS, ...response }),
      ])
    } else {
      yield put({ type: TYPE.GETSHOWROOM.ERROR, error: response })
    }
  } catch (error) {
    yield all([
      put({ type: TYPE.GETSHOWROOM.ERROR, error })
    ])
  }
}

function* watcher() {
  yield all([
    takeLatest(TYPE.GETSHOWROOM.REQUEST, getListShowroomSaga)
  ])
}

export default watcher