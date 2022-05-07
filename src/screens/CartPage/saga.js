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

function* getListCartSaga(action) {
    try {
        const { params } = action
        const response = (yield call(api.getCart, params))
        if (response.status) {
            yield all([
                put({ type: TYPE.GETCART.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.GETCART.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.GETCART.ERROR, error })
        ])
    }
}

function* watcher() {
    yield all([
        takeLatest(TYPE.GETCART.REQUEST, getListCartSaga)
    ])
}

export default watcher