import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'
import login from "./screens/LoginPage/reducer"
import signup from "./screens/SignupPage/reducer"
import home from "./screens/HomePage/reducer"
import user from "./screens/UserPage/reducer"
import car from './components/Admin/Car/reducer'

const Reducer = (history) => combineReducers({    
    form: formReducer,
    router: connectRouter(history),
    login,
    signup,
    home,
    user,
    car
  })
  
export default Reducer