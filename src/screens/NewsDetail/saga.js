import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'

import * as apiPost from '../../apis/Post'


function* getPostSaga(action) {
    try {
        const { params } = action
        let code = params
        const response = yield call(apiPost.getDetailByCode, code)
        if (response.status==='success') {
            yield all([
                put({ type: TYPE.GETPOST.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.GETPOST.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.GETPOST.ERROR, error })
        ])
    }
}



function* watcher() {
    yield all([
        takeLatest(TYPE.GETPOST.REQUEST, getPostSaga)
    ])
}

export default watcher