import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'

import * as api from '../../../apis/User'

function* getDataSaga(action) {
    try {
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

function* getPostSaga(action) {
    try {
        const { params } = action
        const response = yield call(api.getListPost, params)
        if (response.status === 'success') {
            yield all([
                put({ type: TYPE.POSTADMIN.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.POSTADMIN.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.POSTADMIN.ERROR, error })
        ])
    }
}
function* watcher() {
    yield all([
        takeLatest(TYPE.ADMINDATA.REQUEST, getDataSaga),
        takeLatest(TYPE.ADMINDATA.REQUEST, getOrderCountSaga),
        takeLatest(TYPE.ADMINDATA.REQUEST, getBillCountSaga),
        takeLatest(TYPE.ADMINDATA.REQUEST, getPostSaga),
    ])
}

export default watcher