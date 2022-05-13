import {
    takeLatest,
    call,
    put,
    all,
    take,
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'

import * as api from '../../apis/User'

function* getListCartSaga(action) {
    try {
        const { params } = action
        const response = (yield call(api.getCart, params))
        if (response.status) {
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
        console.log('params:', params);
        const response = yield call(api.updateCart, params)
        if(response.status==="success"){
                yield all([
                    put({type: TYPE.UPDATECART.SUCCESS, ...response}),
                    put({type: TYPE.GETCART.REQUEST, params})
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
        takeLatest(TYPE.GETCART.REQUEST, getListCartSaga),
        takeLatest(TYPE.UPDATECART.REQUEST, updateCartSaga)
    ])
}

export default watcher