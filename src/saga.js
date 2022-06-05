import { all } from 'redux-saga/effects'
import loginSaga from "./screens/LoginPage/saga"
import signupSaga from "./screens/SignupPage/saga"
import homeSaga from "./screens/HomePage/saga"
import userSaga from "./screens/UserPage/saga"
import postSaga from "./screens/NewsPage/saga"
import cartSaga from "./screens/CartPage/saga"
import userAdminSaga from './components/Admin/User/saga'
import showroomAdminSaga from './components/Admin/Showroom/saga'
import carAdminSaga from './components/Admin/Car/saga'
import accessoryAdminSaga from './components/Admin/Accessory/saga'
import postAdminSaga from './components/Admin/Post/saga'
import accessoryBillAdminSaga from './components/Admin/AccessoryBill/saga'
import carOrderAdminSaga from './components/Admin/CarOrder/saga'
import AdminSaga from './screens/AdminPage/saga'
import AdminHomeSaga from './components/Admin/AdminHome/saga'
import accessorySaga from './screens/AccessoryPage/saga'
import accessoryDetailSaga from './screens/AccessoryDetailPage/saga'
import newSaga from './screens/NewsPage/saga'
import newDetailSaga from './screens/NewsDetail/saga'
import wishListSaga from './screens/WishListPage/saga'
import carListSaga from './screens/CarPage/saga'
import getListCarByIDSaga from "./screens/CarDetailPage/saga"
import carOrderSaga from "./screens/CarOrder/saga"
import compareSaga from "./screens/ComparePage/saga"
import carHistorySaga from "./screens/CarOrderHistory/saga";
import showroomSaga from './screens/ShowroomPage/saga'
import accessoryHistorySaga from './screens/AccessoryOrderHistory/saga'
import cancelOrder from "./screens/OrderResult/saga"
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
      postAdminSaga(),
      accessoryBillAdminSaga(),
      carOrderAdminSaga(),
      showroomAdminSaga(),
      AdminSaga(),
      accessorySaga(),
      accessoryDetailSaga(),
      newSaga(),
      newDetailSaga(),
      wishListSaga(),
      carListSaga(),
      getListCarByIDSaga(),
      carOrderSaga(),
      compareSaga(),
      AdminHomeSaga(),
      carHistorySaga(),
      showroomSaga(),
      accessoryHistorySaga(),
      cancelOrder()
    ])
  }
  
  export default Saga