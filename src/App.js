import React from 'react'
import Login from "./screens/LoginPage/Login";
import SignUp from "./screens/SignupPage/SignUp";
import "./App.css";
import Home from "./screens/HomePage/Home";
import User from "./screens/UserPage/User";
import Car from "./screens/CarPage/Car"
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
      <Route path="/" exact>
        <Redirect to="/home"></Redirect>
      </Route>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/user" component={User} />
        <Route path="/car" component={Car}/>
      </Switch>
    </div>
  );
}

export default App;
