import LoginForm from "./components/Authentication/Login/LoginForm";
import "./App.css";
import AdminPage from "./screens/AdminPage/AdminPage";
import LayoutAdmin from "./components/Admin/LayoutAdmin/LayoutAdmin";
import CarTable from "./components/Admin/CarTable/CarTable";

function App() {
  return (
    <div className="App">
     {/* <LayoutAdmin></LayoutAdmin> */}
     <CarTable></CarTable>
    </div>
  );
}

export default App;
