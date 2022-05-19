import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'

import * as api from '../../apis/Car'

function* getListCarSaga(action) {
    try {
        const { params } = action
        const response = (yield call(api.getList, params))
        if (response.status==="success") {
            yield all([
                put({ type: TYPE.GETLISTCOMPARE.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.GETLISTCOMPARE.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.GETLISTCOMPARE.ERROR, error })
        ])
    }
}

function* compareCarSaga(action) {
    try {
        const { params } = action
        const response = (yield call(api.compareTwoCars, params))
        if (response.status==="success") {
            yield all([
                put({ type: TYPE.COMPARETWOCAR.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.COMPARETWOCAR.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.COMPARETWOCAR.ERROR, error })
        ])
    }
}


function* watcher() {
    yield all([
        takeLatest(TYPE.GETLISTCOMPARE.REQUEST, getListCarSaga),
        takeLatest(TYPE.COMPARETWOCAR.REQUEST, compareCarSaga)
    ])
}

export default watcher