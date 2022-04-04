// import Login from "./Login";
import Signup from "./Signup";
import Error from "./Error404";
export default [
    // {
    //     path: '/login',
    //     component: Login
    // },
    {
        path: '/signup',
        component: Signup
    },
    {
        path: '/errors/404',
        component: Error
    }
]