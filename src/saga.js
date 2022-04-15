import { all } from 'redux-saga/effects'
import loginSaga from "./screens/LoginPage/saga"
import signupSaga from "./screens/SignupPage/saga"
import homeSaga from "./screens/HomePage/saga"
import showroomSaga from "./screens/ShowroomPage/saga"

const Saga = function* (){
    yield all([
      loginSaga(),
      signupSaga(),
      homeSaga(),
      showroomSaga()
    ])
  }
  
  export default Saga