import Login from "./screens/LoginPage/Login";
import SignUp from "./screens/SignupPage/SignUp";
import "./App.css";
import Home from "./screens/HomePage/Home";
import User from "./screens/UserPage/User";
import Car from "./screens/CarPage/Car"
import Admin from "./screens/AdminPage/AdminPage"
import Usertest from "./components/Admin/User";
import Car2 from "./components/Admin/Car";
import Acc from "./components/Admin/Accessory";
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
        <Route path="/admin" component={Acc}/>
      </Switch>
    </div>
  );
}

export default App;
