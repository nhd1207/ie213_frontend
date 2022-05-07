import { all } from 'redux-saga/effects'
import loginSaga from "./screens/LoginPage/saga"
import signupSaga from "./screens/SignupPage/saga"
import homeSaga from "./screens/HomePage/saga"
import userSaga from "./screens/UserPage/saga"
import postSaga from "./screens/NewsPage/saga"
import cartSaga from "./screens/CartPage/saga"
import newsDetailSaga from './screens/NewsDetail/saga'
import userAdminSaga from './components/Admin/User/saga'
import carAdminSaga from './components/Admin/Car/saga'
import accessoryAdminSaga from './components/Admin/Accessory/saga'
import accessoryBillAdminSaga from './components/Admin/AccessoryBill/saga'
import carOrderAdminSaga from './components/Admin/CarOrder/saga'

const Saga = function* (){
    yield all([
      loginSaga(),
      signupSaga(),
      homeSaga(),
      userSaga(),
      postSaga(),
      cartSaga(),
      userAdminSaga(),
      carAdminSaga(),
      accessoryAdminSaga(),
      accessoryBillAdminSaga(),
      carOrderAdminSaga(),
      newsDetailSaga()
    ])
  }
  
  export default Saga