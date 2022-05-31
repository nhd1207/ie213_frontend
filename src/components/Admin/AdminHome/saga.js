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

function* watcher() {
    yield all([
        takeLatest(TYPE.ADMINDATA.REQUEST, getDataSaga),
    ])
}

export default watcher