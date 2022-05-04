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
import { push } from 'react-router-redux';   
   
import * as api from '../../../apis/User'
import * as apiAuth from '../../../apis/Auth'
  
function* getListSaga(action) {
      try {
          console.log('getListSaga')
          //const { params } = action
          const response = yield call(api.getList)//, params)
          if(response.status==='success'){
                  yield all([
                      put({type: TYPE.USER.SUCCESS, ...response}),
                  ])
          }else{
            yield put({type: TYPE.USER.ERROR, error: response})
          }
      } catch (error) {
          yield all([
              put({type: TYPE.USER.ERROR, error})
          ])
      }
  }
  
//   function* CreateSaga(action) {
//     try {
//         const { params } = action
//         let data = params
//         const response = yield call(api.create, data)
//         if(response.status){
//                 yield all([
//                     put({type: TYPE.CREATE.SUCCESS, ...response}),
//                     put({type: TYPE.USER.REQUEST, params:{status:1}})
//                 ])
//         }else{
//           yield put({type: TYPE.CREATE.ERROR, error: response})
//         }
//     } catch (error) {
//         yield all([
//             put({type: TYPE.CREATE.ERROR, error})
//         ])
//     }
// }

function* UpdateSaga(action) {
    try {
        const { id, params} = action
        const response = yield call(api.updateInfo, id, params)
        if(response.status==='success'){
                yield all([
                    put({type: TYPE.UPDATE.SUCCESS, ...response}),
                    put({type: TYPE.USER.REQUEST, params:{status:1}})
                ])
        }else{
          yield put({type: TYPE.UPDATE.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.UPDATE.ERROR, error})
        ])
    }
}

function* DeleteSaga(action) {
    try {
        const { id } = action
        console.log(id);
        const response = yield call(apiAuth.toggleUser, id)  // chua co ham xoa nguoi dung
        if(response.status){
                yield all([
                    put({type: TYPE.DELETE.SUCCESS, ...response}),
                    put({type: TYPE.USER.REQUEST, params:{status:1}}),
                ])
        }else{
          yield put({type: TYPE.DELETE.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.DELETE.ERROR, error})
        ])
    }
}


  function* watcher() {
      yield all([
          takeLatest(TYPE.USER.REQUEST, getListSaga),
          //takeLatest(TYPE.CREATE.REQUEST, CreateSaga),
          takeLatest(TYPE.UPDATE.REQUEST, UpdateSaga),
          takeLatest(TYPE.DELETE.REQUEST, DeleteSaga),
      ])
  }
  
  export default watcher