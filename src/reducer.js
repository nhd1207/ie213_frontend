import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'
import login from "./screens/LoginPage/reducer"
import signup from "./screens/SignupPage/reducer"
import home from "./screens/HomePage/reducer"
import user from "./screens/UserPage/reducer"
import post from "./screens/NewsPage/reducer"
import cart from "./screens/CartPage/reducer"
import newsdetail from "./screens/NewsDetail/reducer"
import userAdmin from './components/Admin/User/reducer'
import car from './components/Admin/Car/reducer'
import accessory from './components/Admin/Accessory/reducer'
import accessoryBill from './components/Admin/AccessoryBill/reducer'
import carOrder from './components/Admin/CarOrder/reducer'
import accessoryPage from './screens/AccessoryPage/reducer'
import accessoryDetailPage from './screens/AccessoryDetailPage/reducer'
import news from './screens/NewsPage/reducer'
import newDetail from './screens/NewsDetail/reducer'
import wishList from './screens/WishListPage/reducer'
const Reducer = (history) => combineReducers({    
    form: formReducer,
    router: connectRouter(history),
    login,
    signup,
    home,
    user,
    post,
    cart,
    userAdmin,
    car,
    accessory,
    accessoryBill,
    carOrder,
    accessoryPage,
    accessoryDetailPage,
    news,
    newDetail,
    // wishList
  })
  
export default Reducer