import { all } from 'redux-saga/effects'
import loginSaga from "./screens/LoginPage/saga"
import signupSaga from "./screens/SignupPage/saga"
import homeSaga from "./screens/HomePage/saga"
import userSaga from "./screens/UserPage/saga"
import cartSaga from "./screens/CartPage/saga"
import userAdminSaga from './components/Admin/User/saga'
import carAdminSaga from './components/Admin/Car/saga'
import accessoryAdminSaga from './components/Admin/Accessory/saga'
import postAdminSaga from './components/Admin/Post/saga'
import accessoryBillAdminSaga from './components/Admin/AccessoryBill/saga'
import carOrderAdminSaga from './components/Admin/CarOrder/saga'
import accessorySaga from './screens/AccessoryPage/saga'
import accessoryDetailSaga from './screens/AccessoryDetailPage/saga'
import newSaga from './screens/NewsPage/saga'
import newDetailSaga from './screens/NewsDetail/saga'
import wishListSaga from './screens/WishListPage/saga'
const Saga = function* (){
    yield all([
      loginSaga(),
      signupSaga(),
      homeSaga(),
      userSaga(),
      cartSaga(),
      userAdminSaga(),
      carAdminSaga(),
      accessoryAdminSaga(),
      postAdminSaga(),
      accessoryBillAdminSaga(),
      carOrderAdminSaga(),
      accessorySaga(),
      accessoryDetailSaga(),
      newSaga(),
      newDetailSaga(),
      // wishListSaga()
    ])
  }
  
  export default Saga