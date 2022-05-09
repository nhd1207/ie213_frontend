import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'
import login from "./screens/LoginPage/reducer"
import signup from "./screens/SignupPage/reducer"
import home from "./screens/HomePage/reducer"
import user from "./screens/UserPage/reducer"
import cart from "./screens/CartPage/reducer"
import admin from "./screens/AdminPage/reducer"
import userAdmin from './components/Admin/User/reducer'
import car from './components/Admin/Car/reducer'
import accessory from './components/Admin/Accessory/reducer'
import accessoryBill from './components/Admin/AccessoryBill/reducer'
import postAdmin from './components/Admin/Post/reducer'
import carOrder from './components/Admin/CarOrder/reducer'
import accessoryPage from './screens/AccessoryPage/reducer'
import accessoryDetailPage from './screens/AccessoryDetailPage/reducer'
const Reducer = (history) => combineReducers({    
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
    accessoryPage,
    accessoryDetailPage
  })
  
export default Reducer