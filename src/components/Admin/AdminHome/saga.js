import {
    takeLatest,
    call,
    put,
    all,
    select
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'

import * as api from '../../../apis/User'

function* getDataSaga(action) {
    try {
        const { params } = action
        const response = yield call(api.adminData)
        if (response.status === 'success') {
            yield all([
                put({ type: TYPE.ADMINDATA.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.ADMINDATA.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.ADMINDATA.ERROR, error })
        ])
    }
}

function* getOrderCountSaga(action) {
    try {
        const { params } = action
        const response = yield call(api.adminDataOrderCount)
        if (response.status === 'success') {
            yield all([
                put({ type: TYPE.ORDERCOUNT.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.ORDERCOUNT.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.ORDERCOUNT.ERROR, error })
        ])
    }
}

function* getBillCountSaga(action) {
    try {
        const { params } = action
        const response = yield call(api.adminDataBillCount)
        if (response.status === 'success') {
            yield all([
                put({ type: TYPE.BILLCOUNT.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.BILLCOUNT.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.BILLCOUNT.ERROR, error })
        ])
    }
}

function* watcher() {
    yield all([
        takeLatest(TYPE.ADMINDATA.REQUEST, getDataSaga),
        takeLatest(TYPE.ADMINDATA.REQUEST, getOrderCountSaga),
        takeLatest(TYPE.ADMINDATA.REQUEST, getBillCountSaga),
    ])
}

export default watcher