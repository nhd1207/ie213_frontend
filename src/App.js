import Login from "./screens/LoginPage/Login";
import "./App.css";
import AdminPage from "./screens/AdminPage/AdminPage";
import LayoutAdmin from "./components/Admin/LayoutAdmin/LayoutAdmin";
import CarTable from "./components/Admin/CarTable/CarTable";
import DataTable from "./components/Admin/CarTable/DataTable";

function App() {
  return (
    <div className="App">
     <LayoutAdmin></LayoutAdmin>
     {/* <CarTable></CarTable> */}
     {/* <DataTable
            dataSource={ []}
            //loading={props.city.loading}
            updateCar={''}
        /> */}
    </div>
  );
}

export default App;
