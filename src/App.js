import Login from "./screens/LoginPage/Login";
import SignUp from "./screens/SignupPage/SignUp";
import "./App.css";
import Home from "./screens/HomePage/Home";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { verify } from "./apis/Auth";
import {useEffect} from 'react'
import Cookies from "js-cookie";
import { connect } from "react-redux";
import Showroom from "./screens/ShowroomPage/Showroom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/showroom" component={Showroom} />
      </Switch>
    </div>
  );
}

export default App;
