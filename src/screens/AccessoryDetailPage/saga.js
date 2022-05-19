import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'

import * as api from '../../apis/Accessory'
import * as apiCart from '../../apis/User'
import {message} from 'antd';

function* getDetailAccessorySaga(action) {
    try {
        const { params } = action
        let code = params
        const response = (yield call(api.getDetailByCode, code))
        if (response.status==='success') {
            yield all([
                put({ type: TYPE.GETDETAILACCESSORY.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.GETDETAILACCESSORY.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.GETDETAILACCESSORY.ERROR, error })
        ])
    }
}

function* updateCartSaga(action) {
    try {
        const { data } = action
        const response = yield call(apiCart.addItemToCart, data)
        if(response.status==='success'){
            message.success('Đã thêm thành công')
                yield all([
                    put({type: TYPE.UPDATECART.SUCCESS, ...response}),
                ])
        }else{
          yield put({type: TYPE.UPDATECART.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.UPDATECART.ERROR, error})
        ])
    }
}

function* watcher() {
    yield all([
        takeLatest(TYPE.GETDETAILACCESSORY.REQUEST, getDetailAccessorySaga),
        takeLatest(TYPE.UPDATECART.REQUEST, updateCartSaga),
    ])
}

export default watcher