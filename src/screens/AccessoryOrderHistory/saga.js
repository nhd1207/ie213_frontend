import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'

import * as apiBill from '../../apis/AccessoryBill'

function* getAccessoryHistorySaga(action) {
    try {
        const { params } = action
        const response = (yield call(apiBill.getList, params))
        if (response.status) {
            yield all([
                put({ type: TYPE.GETACCESSORYHISTORY.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.GETACCESSORYHISTORY.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.GETACCESSORYHISTORY.ERROR, error })
        ])
    }
}

function* watcher() {
    yield all([
        takeLatest(TYPE.GETACCESSORYHISTORY.REQUEST, getAccessoryHistorySaga),
    ])
}

export default watcher