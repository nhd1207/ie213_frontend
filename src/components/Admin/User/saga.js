import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'

import * as api from '../../../apis/User'
import * as apiAuth from '../../../apis/Auth'
import { message } from 'antd';

function* getListSaga(action) {
    try {
        const response = yield call(api.getList)//, params)
        if (response.status === 'success') {
            yield all([
                put({ type: TYPE.USERADMIN.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.USERADMIN.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.USERADMIN.ERROR, error })
        ])
    }
}

function* UpdateSaga(action) {
    try {
        const { id, params } = action
        const response = yield call(api.updateInfo, id, params)
        if (response.status === 'success') {
            yield all([
                put({ type: TYPE.UPDATE.SUCCESS, ...response }),
                put({ type: TYPE.USERADMIN.REQUEST, params: { status: 1 } })
            ])
        } else {
            yield put({ type: TYPE.UPDATE.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.UPDATE.ERROR, error })
        ])
    }
}

function* DeleteSaga(action) {
    try {
        const { id } = action
        const response = yield call(apiAuth.toggleUser, id)  // chua co ham xoa nguoi dung
        if (response.status === 'success') {
            message.success('Thay đổi trạng thái người dùng người dùng thành công')
            yield all([
                put({ type: TYPE.DELETE.SUCCESS, ...response }),
                put({ type: TYPE.USERADMIN.REQUEST, params: { status: 1 } }),
            ])
        } else {
            message.error('Thay đổi trạng thái người dùng người dùng thất bại\n',response.message)
            yield put({ type: TYPE.DELETE.ERROR, error: response })
        }
    } catch (error) {
        message.error('Thay đổi trạng thái người dùng người dùng thất bại\n',error.message)
        yield all([
            put({ type: TYPE.DELETE.ERROR, error })
        ])
    }
}


function* watcher() {
    yield all([
        takeLatest(TYPE.USERADMIN.REQUEST, getListSaga),
        takeLatest(TYPE.UPDATE.REQUEST, UpdateSaga),
        takeLatest(TYPE.DELETE.REQUEST, DeleteSaga),
    ])
}

export default watcher