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
import * as api from '../../apis/Auth'
import { message } from 'antd'


function* verifyAdminSaga(action) {
    try {
        const { params } = action
        const response = yield call(api.verifyAdmin, params)
        if ((response.status === 'success' && response.user.role === 'admin') || (response.status === 'success' && response.user.role === 'manager')) {
            message.success(`Chào mừng ${response.user.name} đến với trang admin`)
            yield all([
                put({ type: TYPE.VERIFY.SUCCESS, ...response }),
            ])
        } else {
            message.error('Bạn không có quyền')
            yield put({ type: TYPE.VERIFY.ERROR, error: response })
            yield put(push("/login"));
            window.location.reload();
        }
    } catch (error) {
        message.error('Bạn không không có quyền')
        yield all([
            put({ type: TYPE.VERIFY.ERROR, error })
        ])
        yield put(push("/login"));
        window.location.reload();
    }
}


function* watcher() {
    yield all([
        takeLatest(TYPE.VERIFY.REQUEST, verifyAdminSaga)
    ])
}

export default watcher