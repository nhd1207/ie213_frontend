import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'
import { push } from "react-router-redux";
import * as apiUser from '../../apis/User'

function* updateUserSaga(action) {
    try {
        const { params } = action
        const response = (yield call(apiUser.updateInfo, params))
        if (response.status==="success") {
            yield all([
                put({ type: TYPE.UPDATEUSER.SUCCESS, ...response })
            ]);
            yield put(push("/user"));
            window.location.reload();
        } else {
            yield put({ type: TYPE.UPDATEUSER.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.UPDATEUSER.ERROR, error })
        ])
    }
}

function* watcher() {
    yield all([
        takeLatest(TYPE.UPDATEUSER.REQUEST, updateUserSaga)
    ])
}

export default watcher