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
import * as apiCar from '../../apis/Car'

function* getListCarSaga(action) {
    try {
        const { params } = action
        const response = (yield call(apiCar.getList, params))
        if (response.status) {
            yield all([
                put({ type: TYPE.GETCAR.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.GETCAR.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.GETCAR.ERROR, error })
        ])
    }
}

function* getListPostSaga(action) {
    try {
        const { params } = action
        const response = yield call(apiPost.getList, params)
        if (response.status) {
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
        takeLatest(TYPE.GETPOST.REQUEST, getListPostSaga),
        takeLatest(TYPE.GETCAR.REQUEST, getListCarSaga)
    ])
}

export default watcher