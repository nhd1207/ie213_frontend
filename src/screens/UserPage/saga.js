import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'

import * as api from '../../apis/User'

function* getUserSaga(action) {
    try {
        const { params } = action
        const response = (yield call(api.getMe, params))
        if (response.status) {
            yield all([
                put({ type: TYPE.GETUSER.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.GETUSER.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.GETUSER.ERROR, error })
        ])
    }
}

function* watcher() {
    yield all([
        takeLatest(TYPE.GETUSER.REQUEST, getUserSaga)
    ])
}

export default watcher