import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'
import login from "./screens/LoginPage/reducer"
import signup from "./screens/SignupPage/reducer"
import home from "./screens/HomePage/reducer"
import user from "./screens/UserPage/reducer"
import post from "./screens/NewsPage/reducer"
import cart from "./screens/CartPage/reducer"
import userAdmin from './components/Admin/User/reducer'
import car from './components/Admin/Car/reducer'
import accessory from './components/Admin/Accessory/reducer'
import accessoryBill from './components/Admin/AccessoryBill/reducer'
import carOrder from './components/Admin/CarOrder/reducer'

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
    carOrder
  })
  
export default Reducer