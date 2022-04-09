import { 
    takeLatest, 
    call, 
    put, 
    all,
  } from 'redux-saga/effects'
import {
      action_type as TYPE
  } from './action'  
   
import * as apiNew from '../../../apis/New'
import * as apiCar from '../../../apis/Car'

function* getListCarSaga(action) {
    try {
        const { params } = action
        const response = yield call(apiCar.getListCar, params)
        if(response.status){
                yield all([
                    put({type: TYPE.GETCAR.SUCCESS, ...response}),
                ])
        }else{
          yield put({type: TYPE.GETCAR.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.GETCAR.ERROR, error})
        ])
    }
}

function* getListNewSaga(action) {
      try {
          const { params } = action
          const response = yield call(apiNew.getListNew, params)
          if(response.status){
                  yield all([
                      put({type: TYPE.GETLISTNEW.SUCCESS, ...response}),
                  ])
          }else{
            yield put({type: TYPE.GETLISTNEW.ERROR, error: response})
          }
      } catch (error) {
          yield all([
              put({type: TYPE.GETLISTNEW.ERROR, error})
          ])
      }
  }
  


  function* watcher() {
      yield all([
          takeLatest(TYPE.GETNEW.REQUEST, getListNewSaga),
          takeLatest(TYPE.GETCAR.REQUEST, getListCarSaga)
      ])
  }
  
  export default watcher