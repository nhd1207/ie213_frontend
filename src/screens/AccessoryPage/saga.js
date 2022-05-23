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
import * as apiUser from '../../apis/User'

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
        console.log(data1);
        const response = yield call(apiUser.addItemToWishlist, data1)
        if (response.status === 'success')
            yield all([put({ type: TYPE.ADDACCESSORYTOWISHLIST.SUCCESS, ...response })])
        else {
            yield put({ type: TYPE.ADDACCESSORYTOWISHLIST.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.ADDACCESSORYTOWISHLIST.ERROR, error })
        ])
    }
}

function* searchAccessorySaga(action) {
    try {
        const { data } = action
        const response = yield call(api.search, data)
        if (response.status === 'success')
            yield all([put({ type: TYPE.SEARCH.SUCCESS, ...response })])
        else {
            yield put({ type: TYPE.SEARCH.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.SEARCH.ERROR, error })
        ])
    }
}


function* watcher() {
    yield all([
        takeLatest(TYPE.GETACCESSORY.REQUEST, getListAccessorySaga),
        takeLatest(TYPE.ADDACCESSORYTOWISHLIST.REQUEST, addAccessoryToWishlistSaga),
        takeLatest(TYPE.SEARCH.REQUEST, searchAccessorySaga),
    ])
}

export default watcher