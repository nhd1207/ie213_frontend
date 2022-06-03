import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'
import { message } from 'antd'
import * as api from '../../apis/Accessory'
import * as apiUser from '../../apis/User'
import {
    action_type as TYPEUSER
} from '../WishListPage/action'

function* getListAccessorySaga(action) {
    try {
        const { params } = action
        const response = (yield call(api.getList, params))
        if (response.status) {
            yield all([
                put({ type: TYPE.GETACCESSORY.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.GETACCESSORY.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.GETACCESSORY.ERROR, error })
        ])
    }
}

function* addAccessoryToWishlistSaga(action) {
    try {
        const { data } = action
        let data1 = {
            ...data,
            type: "accessory"
        }
        const response = yield call(apiUser.addItemToWishlist, data1)
        if (response.status === 'success'){
            message.success("Chúc mừng, bạn đã thêm phụ kiện vào danh sách yêu thích thành công!")
            yield all([
            put({ type: TYPE.ADDACCESSORYTOWISHLIST.SUCCESS, ...response }),
            put({type: TYPEUSER.GETUSER.REQUEST, ...response})])
        }
        else {
            message.error("Đã có lỗi xảy ra: " + response)
            yield put({ type: TYPE.ADDACCESSORYTOWISHLIST.ERROR, error: response })
        }
    } catch (error) {
        message.error("Đã có lỗi xảy ra: " + error)
        yield all([
            put({ type: TYPE.ADDACCESSORYTOWISHLIST.ERROR, error })
        ])
    }
}


function* filterAndSearchAcessorySaga(action) {
    try {
        const { params } = action
        const response = (yield call(api.filter, params))
        if (response.status=='success') {
            yield all([ 
                put({ type: TYPE.FILTER.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.FILTER.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.FILTER.ERROR, error })
        ])
    }
}


function* watcher() {
    yield all([
        takeLatest(TYPE.GETACCESSORY.REQUEST, getListAccessorySaga),
        takeLatest(TYPE.ADDACCESSORYTOWISHLIST.REQUEST, addAccessoryToWishlistSaga),
        takeLatest(TYPE.FILTER.REQUEST, filterAndSearchAcessorySaga),
    ])
}

export default watcher