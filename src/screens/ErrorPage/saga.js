import { put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux';  
import { notification, Modal } from 'antd';
function* alertWatcher(){
  yield takeEvery('*', function* logger({response, error, ...props}) {

    if( response ){
      if( response.status && response.message){
        notification['success']({
          message: response.message,
        });
      }else if( !response.status && response.message){// if(response.code === 401){
        yield put({type: 'SHARE.ALERT.ERROR', data_response: response})
        notification['error']({
          message: response.message,
        });
      }
    }else
     if(error){
      yield put({type: 'SHARE.ALERT.ERROR', data_error: error})
      if(typeof error === 'string'){
        notification['error']({
          message: 'ERROR',
        });
      }else if(error.message){
        if(error?.type === 'modal'){
          Modal.error({
            title: error.message
          });
        }else{
          notification['error']({
            message: error.message,
          });
        }
        if(error.message == 'Unauthenticated.') yield put(push('/login'))
      }
    }
  })
}

export default alertWatcher