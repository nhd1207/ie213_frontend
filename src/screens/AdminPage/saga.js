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
import { push } from "react-router-redux";
import * as api from '../../apis/Auth'
import Cookies from "js-cookie";
import { message } from 'antd'


function* verifyAdminSaga(action) {
    try {
        const { params } = action
        const response = yield call(api.verifyAdmin, params)
        if (response.status === 'success' && response.user.role==='admin') {
            yield all([
                put({ type: TYPE.VERIFY.SUCCESS, ...response }),
            ])
            message.success(`Chào mừng ${response.user.name} đến với trang admin`)
        } else {
            yield put({ type: TYPE.VERIFY.ERROR, error: response })
            message.error('Bạn không phải admin')
            //Cookies.set("web_token", null);
            yield put(push("/login"));
            window.location.reload();
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.VERIFY.ERROR, error })
        ])
        message.error('Bạn không phải admin')
        //Cookies.set("web_token", null);
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