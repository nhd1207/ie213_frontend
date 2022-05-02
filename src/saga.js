import { all } from 'redux-saga/effects'
import loginSaga from "./screens/LoginPage/saga"
import signupSaga from "./screens/SignupPage/saga"
import homeSaga from "./screens/HomePage/saga"
import userSaga from "./screens/UserPage/saga"
import carAdminSaga from './components/Admin/Car/saga'
import accessoryAdminSaga from './components/Admin/Accessory/saga'

const Saga = function* (){
    yield all([
      loginSaga(),
      signupSaga(),
      homeSaga(),
      userSaga(),
      carAdminSaga(),
      accessoryAdminSaga()
    ])
  }
  
  export default Saga