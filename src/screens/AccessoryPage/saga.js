import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'

import * as api from '../../apis/Accessory'

function* getListAccessorySaga(action) {
    try {
        const { params } = action
        const response = (yield call(api.getList, params))
        if (response.status) {
            yield all([
                put({ type: TYPE.GETACCESSORY.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.GETACCESSORY.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.GETACCESSORY.ERROR, error })
        ])
    }
}

function* watcher() {
    yield all([
        takeLatest(TYPE.GETACCESSORY.REQUEST, getListAccessorySaga)
    ])
}

export default watcher