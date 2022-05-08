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
          if(response.status==='success'){
                  yield all([
                      put({type: TYPE.POSTADMIN.SUCCESS, ...response}),
                  ])
          }else{
            yield put({type: TYPE.POSTADMIN.ERROR, error: response})
          }
      } catch (error) {
          yield all([
              put({type: TYPE.POSTADMIN.ERROR, error})
          ])
      }
  }
  
  function* CreateSaga(action) {
    try {
        const { params } = action
        let data = params
        const response = yield call(api.create, data)
        if(response.status==='success'){
                yield all([
                    put({type: TYPE.CREATE.SUCCESS, ...response}),
                    put({type: TYPE.POSTADMIN.REQUEST, params:{status:1}})
                ])
                message.success('Tạo post thành công')
                message.success('Hãy thêm ảnh cho post!!!')
        }else{
          yield put({type: TYPE.CREATE.ERROR, error: response})
          message.error('Tạo bài viết thất bại')

        }
    } catch (error) {
        yield all([
            put({type: TYPE.CREATE.ERROR, error})
        ])
    }
}

function* UpdateSaga(action) {
    try {
        const { id, params } = action
        const response = yield call(api.update, id, params)
        if(response.status==='success'){
                yield all([
                    put({type: TYPE.UPDATE.SUCCESS, ...response}),
                    put({type: TYPE.POSTADMIN.REQUEST, params:{status:1}})
                ])
                message.success('Sửa thông tin bài viết thành công')

        }else{
          yield put({type: TYPE.UPDATE.ERROR, error: response})
          message.error('Sửa thông tin bài viết thất bại')

        }
    } catch (error) {
        yield all([
            put({type: TYPE.UPDATE.ERROR, error})
        ])
        message.error('Sửa thông tin bài viết thất bại')

    }
}

function* DeleteSaga(action) {
    try {
        console.log(action)
        const { id } = action
        const response = yield call(api.destroy, id)
        console.log(response)
        if(response.status==='success'){
                yield all([
                    put({type: TYPE.DELETE.SUCCESS, ...response}),
                    put({type: TYPE.POSTADMIN.REQUEST, params:{status:1}}),
                ])
        message.success('Xóa bài viết thành công')

        }else{
          yield put({type: TYPE.DELETE.ERROR, error: response})
        message.success('Xóa bài viết thất bại')

        }
    } catch (error) {
        yield all([
            put({type: TYPE.DELETE.ERROR, error})
        ])
        message.success('Xóa bài viếtthất bại')
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