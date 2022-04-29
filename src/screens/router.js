import Login from "../screens/LoginPage"
import Signup from "../screens/SignupPage"
import Home from "../screens/HomePage"
import User from "../screens/UserPage"
import Car from "../screens/CarPage"
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
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/car',
        component: Car
    }
]
