import React from 'react'
import Login from "./screens/LoginPage/Login";
import SignUp from "./screens/SignupPage/SignUp";
import "./App.css";
import Home from "./screens/HomePage/Home";
import User from "./screens/UserPage/User";
import Car from "./screens/CarPage/Car"
import Cart from "./screens/CartPage/Cart"
import Showroom from "./screens/ShowroomPage/Showroom"
// import Admin from "./screens/AdminPage/AdminPage"
// import CarAdmin from "./components/Admin/Car";
// import AccAdmin from "./components/Admin/Accessory";
// import postAdmin from "./components/Admin/Post";
// import AccBillAdmin from "./components/Admin/AccessoryBill";
// import UserAdmin from "./components/Admin/User";
import CarOrder from "./components/Admin/CarOrder";
import RenderImage from './components/Share/RenderImage'
import News from "./screens/NewsPage/NewsPage"
import Accessory from "./screens/AccessoryPage/Accessory"
import AccessoryDetail from "./screens/AccessoryDetailPage/AccessoryDetail"
import NewsDetail from "./screens/NewsDetail/NewsDetail"
import Error404 from "./screens/ErrorPage/Error404"
import WishList from './screens/WishListPage/WishList';
import CarDetail from './screens/CarDetailPage/CarDetail'
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { verify } from "./apis/Auth";
import {useEffect} from 'react'
import Cookies from "js-cookie";
import { connect } from "react-redux";
import AdminPage from './screens/AdminPage/AdminPage';
import AboutUs from './screens/AboutUsPage/AboutUs';
import Support from './screens/SupportPage/Support'
import Compare from "./screens/ComparePage/Compare"

function App() {
  useEffect(() => {
    document.title = "Seven"
 }, []);
 
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
        <Route exact path="/car" component={Car}/>
        <Route path="/car/:id" component={CarDetail}></Route>
        <Route path="/cart" component={Cart}/>
        <Route path="/showroom" component={Showroom}/>
        <Route path="/admin" component={AdminPage}/> 
        <Route exact path="/news" component={News}/> 
        <Route path="/news/:id" component={NewsDetail}/> 
        <Route exact path="/accessory" component={Accessory}/>
        <Route path="/accessory/:id" component={AccessoryDetail}></Route> 
        <Route path="/wishlist" component={WishList}></Route>
        <Route path="/about_us" component={AboutUs}></Route>
        <Route path="/support" component={Support}></Route>
        <Route path="/compare" >
          <Compare />
        </Route>
        <Route exact path="/" component={Home} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
