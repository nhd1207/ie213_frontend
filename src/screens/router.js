import Login from "../screens/LoginPage"
import Signup from "../screens/SignupPage"
import Home from "../screens/HomePage"

export default [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup
    },
    {
        path: '/errors/404',
        component: Error
    }
]
