import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'

import * as api from '../../../apis/Showroom'
import { message } from 'antd'

function* getListSaga(action) {
    try {
        const { params } = action
        const response = yield call(api.getList, params)
        if (response.status === 'success') {
            yield all([
                put({ type: TYPE.SHOWROOM.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.SHOWROOM.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.SHOWROOM.ERROR, error })
        ])
    }
}

function* CreateSaga(action) {
    try {
        const { params } = action
        let data = params
        const response = yield call(api.create, data)
        if (response.status === 'success') {
            message.success('Tạo showroom thành công')
            message.success('Hãy thêm ảnh cho showrom!!!')
            yield all([
                put({ type: TYPE.CREATE.SUCCESS, ...response }),
                put({ type: TYPE.SHOWROOM.REQUEST, params: { status: 1 } })
            ])
        } else {
            message.error('Tạo showroom thất bại')
            yield put({ type: TYPE.CREATE.ERROR, error: response })
        }
    } catch (error) {
        message.error('Xảy ra lỗi trong quá trình tạo showroom')
        yield all([
            put({ type: TYPE.CREATE.ERROR, error })
        ])
    }
}

function* UpdateSaga(action) {
    try {
        const { id, params } = action
        const response = yield call(api.update, id, params)
        if (response.status === 'success') {
            message.success('Sửa thông tin showroom thành công')
            yield all([
                put({ type: TYPE.UPDATE.SUCCESS, ...response }),
                put({ type: TYPE.SHOWROOM.REQUEST, params: { status: 1 } })
            ])
        } else {
            message.error('Sửa thông tin showroom thất bại')
            yield put({ type: TYPE.UPDATE.ERROR, error: response })
        }
    } catch (error) {
        message.error('Sửa thông tin showroom thất bại')
        yield all([
            put({ type: TYPE.UPDATE.ERROR, error })
        ])
    }
}

function* DeleteSaga(action) {
    try {
        const { id } = action
        const response = yield call(api.destroy, id)
        if (response.status === 'success') {
            message.success('Xóa showroom thành công')
            yield all([
                put({ type: TYPE.DELETE.SUCCESS, ...response }),
                put({ type: TYPE.SHOWROOM.REQUEST, params: { status: 1 } }),
            ])
        } else {
            message.success('Xóa showroom thất bại')
            yield put({ type: TYPE.DELETE.ERROR, error: response })
        }
    } catch (error) {
        message.success('Xóa showroom thất bại')
        yield all([
            put({ type: TYPE.DELETE.ERROR, error })
        ])
    }
}

function* watcher() {
    yield all([
        takeLatest(TYPE.SHOWROOM.REQUEST, getListSaga),
        takeLatest(TYPE.CREATE.REQUEST, CreateSaga),
        takeLatest(TYPE.UPDATE.REQUEST, UpdateSaga),
        takeLatest(TYPE.DELETE.REQUEST, DeleteSaga),
    ])
}

export default watcher