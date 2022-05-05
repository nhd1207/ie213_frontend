import { all } from 'redux-saga/effects'
import loginSaga from "./screens/LoginPage/saga"
import signupSaga from "./screens/SignupPage/saga"
import homeSaga from "./screens/HomePage/saga"
import userSaga from "./screens/UserPage/saga"
import postSaga from "./screens/NewsPage/saga"
const Saga = function* (){
    yield all([
      loginSaga(),
      signupSaga(),
      homeSaga(),
      userSaga(),
      postSaga()
    ])
  }
  
  export default Saga