import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'

import * as apiUser from '../../apis/User'
import * as apiBill from '../../apis/AccessoryBill'

function* getListBillSaga(action) {
    try {
        const { params } = action
        const response = (yield call(apiBill.getList, params))
        if (response.status) {
            yield all([
                put({ type: TYPE.GETLISTBILL.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.GETLISTBILL.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.GETLISTBILL.ERROR, error })
        ])
    }
}

function* getUserSaga(action) {
    try {
        const { params } = action
        const response = (yield call(apiUser.getMe, params))
        if (response.status==="success") {
            yield all([
                put({ type: TYPE.GETINFOUSER.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.GETINFOUSER.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.GETINFOUSER.ERROR, error })
        ])
    }
}

function* watcher() {
    yield all([
        takeLatest(TYPE.GETINFOUSER.REQUEST, getUserSaga),
        takeLatest(TYPE.GETLISTBILL.REQUEST, getListBillSaga),
    ])
}

export default watcher