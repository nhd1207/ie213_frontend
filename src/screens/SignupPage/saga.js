import { 
    takeLatest, 
    call, 
    put, 
    all,
    delay,
    select
  } from 'redux-saga/effects'
import {
      action_type as TYPE
  } from './action'
import { push } from 'react-router-redux';    
import * as api from '../../apis/Auth'
  
function* getListSaga(action) {
      try {
          const { params } = action
          let data = params
          const response = yield call(api.signup, data)
          if(response.status){
                  yield all([
                      put({type: TYPE.SIGNUP.SUCCESS, ...response}),
                  ])
                  yield delay(1000)
                  yield put(push('/login'));
          }else{
            yield put({type: TYPE.SIGNUP.ERROR, error: response})
          }
      } catch (error) {
          yield all([
              put({type: TYPE.SIGNUP.ERROR, error})
          ])
      }
  }

  function* watcher() {
      yield all([
          takeLatest(TYPE.SIGNUP.REQUEST, getListSaga),          
      ])
  }
  
  export default watcher