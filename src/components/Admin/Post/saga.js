import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'

import * as api from '../../../apis/Post'
import { message } from 'antd'

function* getListSaga(action) {
    try {
        const { params } = action
        const response = yield call(api.getList, params)
        if (response.status === 'success') {
            yield all([
                put({ type: TYPE.POSTADMIN.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.POSTADMIN.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.POSTADMIN.ERROR, error })
        ])
    }
}

function* CreateSaga(action) {
    try {
        const { params } = action
        let data = params
        const response = yield call(api.create, data)
        if (response.status === 'success') {
            message.success('Tạo post thành công')
            message.success('Hãy thêm ảnh cho post!!!')
            yield all([
                put({ type: TYPE.CREATE.SUCCESS, ...response }),
                put({ type: TYPE.POSTADMIN.REQUEST, params: { status: 1 } })
            ])
        } else {
            message.error('Tạo bài viết thất bại')
            yield put({ type: TYPE.CREATE.ERROR, error: response })
        }
    } catch (error) {
        message.error('Xảy ra lỗi trong quá trình tạo bài viết')
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
            message.success('Sửa thông tin bài viết thành công')
            yield all([
                put({ type: TYPE.UPDATE.SUCCESS, ...response }),
                put({ type: TYPE.POSTADMIN.REQUEST, params: { status: 1 } })
            ])
        } else {
            message.error('Sửa thông tin bài viết thất bại')
            yield put({ type: TYPE.UPDATE.ERROR, error: response })
        }
    } catch (error) {
        message.error('Sửa thông tin bài viết thất bại')
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
            message.success('Xóa bài viết thành công')
            yield all([
                put({ type: TYPE.DELETE.SUCCESS, ...response }),
                put({ type: TYPE.POSTADMIN.REQUEST, params: { status: 1 } }),
            ])
        } else {
            message.success('Xóa bài viết thất bại')
            yield put({ type: TYPE.DELETE.ERROR, error: response })
        }
    } catch (error) {
        message.success('Xóa bài viết thất bại')
        yield all([
            put({ type: TYPE.DELETE.ERROR, error })
        ])
    }
}

function* watcher() {
    yield all([
        takeLatest(TYPE.POSTADMIN.REQUEST, getListSaga),
        takeLatest(TYPE.CREATE.REQUEST, CreateSaga),
        takeLatest(TYPE.UPDATE.REQUEST, UpdateSaga),
        takeLatest(TYPE.DELETE.REQUEST, DeleteSaga),
    ])
}

export default watcher