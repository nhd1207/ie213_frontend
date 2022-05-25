import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'

import * as api from '../../apis/Car'
import * as apiUser from '../../apis/User'

function* getListCarSaga(action) {
    try {
        const { params } = action
        const response = (yield call(api.getList, params))
        if (response.status==='success') {
            yield all([
                put({ type: TYPE.GETLISTCAR.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.GETLISTCAR.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.GETLISTCAR.ERROR, error })
        ])
    }
}

function* filterAndSearchCarSaga(action) {
    try {
        const { params } = action
        const response = (yield call(api.filter, params))
        console.log('response',response)
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


function* addCarToWishlistSaga(action) {
    try {
        const { data } = action
        let data1 = {
            ...data,
            type: "car"
        }
        console.log(data1);
        const response = yield call(apiUser.addItemToWishlist, data1)
        if(response.status==='success')
                yield all([put({type: TYPE.ADDCARTOWISHLIST.SUCCESS, ...response})])
        else{
          yield put({type: TYPE.ADDCARTOWISHLIST.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.ADDCARTOWISHLIST.ERROR, error})
        ])
    }
}


function* watcher() {
    yield all([
        takeLatest(TYPE.GETLISTCAR.REQUEST, getListCarSaga),
        takeLatest(TYPE.FILTER.REQUEST, filterAndSearchCarSaga),
        takeLatest(TYPE.ADDCARTOWISHLIST.REQUEST, addCarToWishlistSaga)
    ])
}

export default watcher