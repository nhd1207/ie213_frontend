import Login from "./screens/LoginPage/Login";
import SignUp from "./screens/SignupPage/SignUp";
import "./App.css";
import Home from "./screens/HomePage/Home";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
