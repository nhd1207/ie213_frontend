import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects'
import {
    action_type as TYPE
} from './action'

import * as api from '../../../apis/CarOrder'
import { message } from 'antd'

function* getListSaga(action) {
    try {
        const { params } = action
        const response = yield call(api.getListAdmin, params)
        if (response.status==='success') {
            yield all([
                put({ type: TYPE.CARORDERADMIN.SUCCESS, ...response }),
            ])
        } else {
            yield put({ type: TYPE.CARORDERADMIN.ERROR, error: response })
        }
    } catch (error) {
        yield all([
            put({ type: TYPE.CARORDERADMIN.ERROR, error })
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
                put({ type: TYPE.CARORDERADMIN.REQUEST, params: { status: 1 } })
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
            switch(params.status){
                case 'Cancelled':
                    message.success('Hủy đơn thành công')
                break;
                case 'Accepted':
                    message.success('Duyệt đơn thành công')
                break;
                case 'Success':
                    message.success('Xác nhận đơn được giao thành công')
                break;
                default:break;
            }
            yield all([
                put({ type: TYPE.UPDATE.SUCCESS, ...response }),
                put({ type: TYPE.CARORDERADMIN.REQUEST, params: { status: 1 } })
            ])
        } else {
            switch(params.status){
                case 'Cancelled':
                    message.error('Hủy đơn thất bại')
                break;
                case 'Accepted':
                    message.error('Duyệt đơn thất bại')
                break;
                case 'Success':
                    message.error('Xác nhận đơn được giao thất bại')
                break;
                default:break;
            }
            yield put({ type: TYPE.UPDATE.ERROR, error: response })
        }
    } catch (error) {
        const { id, params } = action
        switch(params.status){
            case 'Cancelled':
                message.error('Hủy đơn thất bại')
            break;
            case 'Accepted':
                message.error('Duyệt đơn thất bại')
            break;
            case 'Success':
                message.error('Xác nhận đơn được giao thất bại')
            break;
            default:break;
        }
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
                put({ type: TYPE.CARORDERADMIN.REQUEST, params: { status: 1 } }),
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
        takeLatest(TYPE.CARORDERADMIN.REQUEST, getListSaga),
        takeLatest(TYPE.CREATE.REQUEST, CreateSaga),
        takeLatest(TYPE.UPDATE.REQUEST, UpdateSaga),
        takeLatest(TYPE.DELETE.REQUEST, DeleteSaga),
    ])
}

export default watcher