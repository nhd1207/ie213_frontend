import React from 'react'
import ReactDOM from 'react-dom'
import Login from "./screens/LoginPage/Login";
import SignUp from "./screens/SignupPage/SignUp";
import "./App.css";
import Home from "./screens/HomePage/Home";
import User from "./screens/UserPage/User";
import Car from "./screens/CarPage/Car"
import Cart from "./screens/CartPage/Cart"
import Showroom from "./screens/ShowroomPage/Showroom"
import Admin from "./screens/AdminPage/AdminPage"
import CarAdmin from "./components/Admin/Car";
import AccAdmin from "./components/Admin/Accessory";
import AccBillAdmin from "./components/Admin/AccessoryBill";
import UserAdmin from "./components/Admin/User";
import CarOrder from "./components/Admin/CarOrder";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { verify } from "./apis/Auth";
import {useEffect} from 'react'
import Cookies from "js-cookie";
import { connect } from "react-redux";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/user" component={User} />
        <Route path="/car" component={Car}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/showroom" component={Showroom}/>
        <Route path="/admin/car-order" component={CarOrder}/>
        <Route path="/admin/accessory-bill" component={AccBillAdmin}/>
        <Route path="/admin/car" component={CarAdmin}/>
        <Route path="/admin/accessory" component={AccAdmin}/>
        <Route path="/admin/user" component={UserAdmin}/>
        <Route path="/admin" component={CarOrder}/>
      </Switch>
    </div>
  );
}

export default App;
