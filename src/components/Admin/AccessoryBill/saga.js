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

import * as api from '../../../apis/AccessoryBill'

function* getListSaga(action) {
    try {
        const { params } = action
        const response = yield call(api.getListAdmin, params)
        if (response.status==='success') {
            yield all([
                put({ type: TYPE.ACCESSORYBILLADMIN.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.ACCESSORYBILLADMIN.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.ACCESSORYBILLADMIN.ERROR, error })
        ])
    }
}

function* CreateSaga(action) {
    try {
        const { params } = action
        let data = params
        const response = yield call(api.create, data)
        if (response.status==='success') {
            yield all([
                put({ type: TYPE.CREATE.SUCCESS, ...response }),
                put({ type: TYPE.ACCESSORYBILLADMIN.REQUEST, params: { status: 1 } })
            ])
        } else {
            yield put({ type: TYPE.CREATE.ERROR, error: response })
        }
    } catch (error) {
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
            yield all([
                put({ type: TYPE.UPDATE.SUCCESS, ...response }),
                put({ type: TYPE.ACCESSORYBILLADMIN.REQUEST, params: { status: 1 } })
            ])
        } else {
            yield put({ type: TYPE.UPDATE.ERROR, error: response })
        }
    } catch (error) {
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
            yield all([
                put({ type: TYPE.DELETE.SUCCESS, ...response }),
                put({ type: TYPE.ACCESSORYBILLADMIN.REQUEST, params: { status: 1 } }),
            ])
        } else {
            yield put({ type: TYPE.DELETE.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.DELETE.ERROR, error })
        ])
    }
}


function* watcher() {
    yield all([
        takeLatest(TYPE.ACCESSORYBILLADMIN.REQUEST, getListSaga),
        takeLatest(TYPE.CREATE.REQUEST, CreateSaga),
        takeLatest(TYPE.UPDATE.REQUEST, UpdateSaga),
        takeLatest(TYPE.DELETE.REQUEST, DeleteSaga),
    ])
}

export default watcher