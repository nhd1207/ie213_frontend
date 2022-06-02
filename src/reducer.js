import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";
import login from "./screens/LoginPage/reducer";
import signup from "./screens/SignupPage/reducer";
import home from "./screens/HomePage/reducer";
import user from "./screens/UserPage/reducer";
import cart from "./screens/CartPage/reducer";
import admin from "./screens/AdminPage/reducer";
import adminData from "./components/Admin/AdminHome/reducer";
import userAdmin from "./components/Admin/User/reducer";
import car from "./components/Admin/Car/reducer";
import accessory from "./components/Admin/Accessory/reducer";
import accessoryBill from "./components/Admin/AccessoryBill/reducer";
import postAdmin from "./components/Admin/Post/reducer";
import carOrder from "./components/Admin/CarOrder/reducer";
import showroomAdmin from "./components/Admin/Showroom/reducer";
import accessoryPage from "./screens/AccessoryPage/reducer";
import accessoryDetailPage from "./screens/AccessoryDetailPage/reducer";
import news from "./screens/NewsPage/reducer";
import newDetail from "./screens/NewsDetail/reducer";
import wishList from "./screens/WishListPage/reducer";
import carDetail from "./screens/CarDetailPage/reducer";
import carList from "./screens/CarPage/reducer";
import carOrderPage from "./screens/CarOrder/reducer";
import compare from "./screens/ComparePage/reducer";
import isLoggedIn from "./components/reducer";
import carsHistory from "./screens/CarOrderHistory/reducer";
import showroom from "./screens/ShowroomPage/reducer"
import accessoriesHistory from "./screens/AccessoryOrderHistory/reducer";
import OrderResult from "./screens/OrderResult/reducer"
const Reducer = (history) =>
  combineReducers({
    form: formReducer,
    router: connectRouter(history),
    login,
    signup,
    home,
    user,
    cart,
    admin,
    userAdmin,
    car,
    accessory,
    postAdmin,
    accessoryBill,
    carOrder,
    showroomAdmin,
    accessoryPage,
    accessoryDetailPage,
    news,
    newDetail,
    wishList,
    carList,
    carDetail,
    carOrderPage,
    compare,
    isLoggedIn,
    adminData,
    carsHistory,
    showroom,
    accessoriesHistory,
    OrderResult
  });
  
export default Reducer
