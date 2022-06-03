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

import * as api from '../../../apis/Accessory'
import { message } from 'antd'

function* getListSaga(action) {
    try {
        const { params } = action
        const response = yield call(api.getList, params)
        if (response.status==='success') {
            yield all([
                put({ type: TYPE.ACCESSORYADMIN.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.ACCESSORYADMIN.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.ACCESSORYADMIN.ERROR, error })
        ])
    }
}

function* CreateSaga(action) {
    try {
        const { params } = action
        let data = params
        const response = yield call(api.create, data)
        if (response.status==='success') {
            message.success('Tạo phụ kiện thành công')
            yield all([
                put({ type: TYPE.CREATE.SUCCESS, ...response }),
                put({ type: TYPE.ACCESSORYADMIN.REQUEST, params: { status: 1 } })
            ])
        } else {
            message.error('Tạo phụ kiện thất bại\n',response.message)
            yield put({ type: TYPE.CREATE.ERROR, error: response })
        }
    } catch (error) {
        message.error('Tạo phụ kiện thất bại\n',error.message)
        yield all([
            put({ type: TYPE.CREATE.ERROR, error })
        ])
    }
}

function* UpdateSaga(action) {
    try {
        const { id, params } = action
        const response = yield call(api.update, id, params)
        if (response.status==='success') {
            message.success('Cập nhật phụ kiện thành công')
            yield all([
                put({ type: TYPE.UPDATE.SUCCESS, ...response }),
                put({ type: TYPE.ACCESSORYADMIN.REQUEST, params: { status: 1 } })
            ])
        } else {
            message.error('Cập nhật phụ kiện thất bại\n',response.message)
            yield put({ type: TYPE.UPDATE.ERROR, error: response })
        }
    } catch (error) {
        message.error('Cập nhật phụ kiện thất bại\n',error.message)
        yield all([
            put({ type: TYPE.UPDATE.ERROR, error })
        ])
    }
}

function* DeleteSaga(action) {
    try {
        const { id } = action
        const response = yield call(api.destroy, id)
        if (response.status==='success') {
            message.success('Xóa phụ kiện thành công')
            yield all([
                put({ type: TYPE.DELETE.SUCCESS, ...response }),
                put({ type: TYPE.ACCESSORYADMIN.REQUEST, params: { status: 1 } }),
            ])
        } else {
            message.error('Xóa phụ kiện thất bại\n',response.message)
            yield put({ type: TYPE.DELETE.ERROR, error: response })
        }
    } catch (error) {
        message.error('Xóa phụ kiện thất bại\n',error.message)
        yield all([
            put({ type: TYPE.DELETE.ERROR, error })
        ])
    }
}


function* watcher() {
    yield all([
        takeLatest(TYPE.ACCESSORYADMIN.REQUEST, getListSaga),
        takeLatest(TYPE.CREATE.REQUEST, CreateSaga),
        takeLatest(TYPE.UPDATE.REQUEST, UpdateSaga),
        takeLatest(TYPE.DELETE.REQUEST, DeleteSaga),
    ])
}

export default watcher