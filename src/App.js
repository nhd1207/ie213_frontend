import React from 'react'
import ReactDOM from 'react-dom'
import Login from "./screens/LoginPage/Login";
import SignUp from "./screens/SignupPage/SignUp";
import "./App.css";
import Home from "./screens/HomePage/Home";
import Showroom from "./screens/ShowroomPage/Showroom";
import NewsPage from "./screens/NewsPage/NewsPage";
import User from "./screens/UserPage/User";
import Car from "./screens/CarPage/Car"
import Cart from "./screens/CartPage/Cart"
import NewsDetail from "./screens/NewsDetail/NewsDetail"
import Admin from "./screens/AdminPage/AdminPage"
import CarAdmin from "./components/Admin/Car";
import AccAdmin from "./components/Admin/Accessory";
import AccBillAdmin from "./components/Admin/AccessoryBill";
import UserAdmin from "./components/Admin/User";
import News from "./screens/NewsPage/NewsPage"
import CarOrder from "./components/Admin/CarOrder";
import Accessory from "./screens/AccessoryPage/Accessory"
import AccessoryDetail from "./screens/AccessoryDetailPage/AccessoryDetail"
import NewsDetail from "./screens/NewsDetail/NewsDetail"
import Error404 from "./screens/ErrorPage/Error404"
import WishList from './screens/WishListPage/WishList';
import CarDetail from './screens/CarDetailPage/CarDetail'
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { verify } from "./apis/Auth";
import {useEffect} from 'react'
import Cookies from "js-cookie";
import { connect } from "react-redux";

function App() {
  useEffect(() => {
    document.title = "Seven"
 }, []);
 
  return (
    <div>
      <Switch>
        {/* <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/user" component={User} /> */}
        <Route path="/showroom" component={Showroom}/>
        <Route path="/news" component={NewsPage}/>
        <Route path="/user" component={User} />
        <Route exact path="/car" component={Car}/>
        <Route path="/car/:id" component={CarDetail}></Route>
        <Route path="/cart" component={Cart}/>
        <Route path="/showroom" component={Showroom}/>
        <Route path="/admin/car-order" component={CarOrder}/>
        <Route path="/admin/accessory-bill" component={AccBillAdmin}/>
        <Route path="/admin/car" component={CarAdmin}/>
        <Route path="/admin/accessory" component={AccAdmin}/>
        <Route path="/admin/user" component={UserAdmin}/>
        <Route path="/admin" component={CarOrder}/> 
        <Route exact path="/news" component={News}/> 
        <Route path="/news/:id" component={NewsDetail}/> 
        <Route exact path="/accessory" component={Accessory}/>
        <Route path="/accessory/:id" component={AccessoryDetail}></Route> 
        <Route path="/wishlist" component={WishList}></Route>
        <Route exact path="/" component={Home} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
