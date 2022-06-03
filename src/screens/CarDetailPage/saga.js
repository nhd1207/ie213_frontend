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

function* getListCarByIDSaga(action) {
    try {
        const { params } = action
        const response = (yield call(api.getDetailByCode, params))
        if (response.status) {
            yield all([
                put({ type: TYPE.GETCARBYID.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.GETCARBYID.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.GETCARBYID.ERROR, error })
        ])
    }
}

function* watcher() {
    yield all([
        takeLatest(TYPE.GETCARBYID.REQUEST, getListCarByIDSaga),
    ])
}

export default watcher