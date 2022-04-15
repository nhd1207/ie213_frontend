import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'
import login from "./screens/LoginPage/reducer"
import signup from "./screens/SignupPage/reducer"
import home from "./screens/HomePage/reducer"
import showroom from "./screens/ShowroomPage/reducer"

const reducer = (history) => combineReducers({    
    form: formReducer,
    router: connectRouter(history),
    login,
    signup,
    home,
    showroom
  })
  
export default reducer