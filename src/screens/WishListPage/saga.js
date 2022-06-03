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
import {message} from "antd"
function* getListCartSaga(action) {
    try {
        const { params } = action
        const response = (yield call(api.getMe, params))
        if (response.status==='success') {
            yield all([
                put({ type: TYPE.GETUSER.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.GETUSER.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.GETUSER.ERROR, error })
        ])
    }
}

function* deleteWishListSaga(action) {
    try {
        const { params } = action
        const response = yield call(api.updateWishlist, params)
        if(response.status==="success"){
            message.success("Xóa thành công")
                yield all([
                    put({type: TYPE.DELETEWISHLIST.SUCCESS, ...response}),
                    put({type: TYPE.GETUSER.REQUEST, params})
                ])
        }else{
          yield put({type: TYPE.DELETEWISHLIST.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.DELETEWISHLIST.ERROR, error})
        ])
    }
}


function* watcher() {
    yield all([
        takeLatest(TYPE.GETUSER.REQUEST, getListCartSaga),
        takeLatest(TYPE.DELETEWISHLIST.REQUEST, deleteWishListSaga)
    ])
}

export default watcher