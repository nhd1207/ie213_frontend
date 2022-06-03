import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'

import * as api from '../../apis/User'
import * as apiBill from '../../apis/AccessoryBill'
import { message } from 'antd'

function* getListCartSaga(action) {
    try {
        const { params } = action
        const response = (yield call(api.getCart, params))
        if (response.status === "success") {
            yield all([
                put({ type: TYPE.GETCART.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.GETCART.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.GETCART.ERROR, error })
        ])
    }
}

function* updateCartSaga(action) {
    try {
        const { params } = action
        const response = yield call(api.updateCart, params)
        if (response.status === "success") {
            yield all([
                put({ type: TYPE.UPDATECART.SUCCESS, ...response }),
                put({ type: TYPE.GETCART.REQUEST, params })
            ])
        } else {
            message.error(`Cập nhập đơn hàng thất bại \n lỗi: ${response.message}`)
            yield put({ type: TYPE.UPDATECART.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.UPDATECART.ERROR, error })
        ])
    }
}

function* createBillSaga(action) {
    try {
        const { params } = action
        //console.log('params:', params);
        const response = yield call(apiBill.create, params)
        if (response.status === "success") {
            message.success('Tạo đơn hàng thành công')
            yield all([
                put({ type: TYPE.CREATEBILL.SUCCESS, ...response }),
                put({ type: TYPE.GETCART.REQUEST, params })
            ])
        } else {
            message.error(`Tạo đơn hàng thất bại \n lỗi: ${response.message}`)
            yield put({ type: TYPE.CREATEBILL.ERROR, error: response })
        }
    } catch (error) {
        message.error(`Tạo đơn hàng thất bại \n lỗi:${error}`)
        yield all([
            put({ type: TYPE.CREATEBILL.ERROR, error })
        ])
    }
}

function* getMeSaga(action) {
    try {
        const response = yield call(api.getMe)
        if (response.status === "success") {
            yield all([
                put({ type: TYPE.GETMEFORCART.SUCCESS, ...response })
            ])
        } else {
            message.error('Có lỗi khi lấy thông tin người dùng')
            yield put({ type: TYPE.GETMEFORCART.ERROR, error: response })
        }
    } catch (error) {
        message.error('Có lỗi khi lấy thông tin người dùng')
        yield all([
            put({ type: TYPE.GETMEFORCART.ERROR, error })
        ])
    }
}

function* watcher() {
    yield all([
        takeLatest(TYPE.GETCART.REQUEST, getListCartSaga),
        takeLatest(TYPE.UPDATECART.REQUEST, updateCartSaga),
        takeLatest(TYPE.CREATEBILL.REQUEST, createBillSaga),
        takeLatest(TYPE.GETMEFORCART.REQUEST, getMeSaga)
    ])
}

export default watcher