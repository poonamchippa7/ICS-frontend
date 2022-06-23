import StepBarComp from "./components/StepBarComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import ICSFarmApplication from "./components/ICSApplicationForm_Farmer/ICSFarmApplication";
import "./App.css";
import 'flowbite'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Login from "./components/Login"
import Register from "./components/Register"
import AllRequiredForms from "./components/allRedquiredForms/AllRequiredForms";
import ICSAdminComp from "./components/ICSAdmin/ICSAdminComp";
import Navbar from "./components/Navbar";
import HomeComponent from "./components/HomeComponent";
import Footer from './components/Footer/Footer'
import FARMER_CONTRACT_WITH_ICS from "./components/ICSApplicationForm_Farmer/FARMER_CONTRACT_WITH_ICS";
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        {/* <Route path="/" element={<HomeComponent/>}/> */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="icsfarmApplication" element={<ICSFarmApplication />} />
        <Route path="user" element={<ICSAdminComp />} />
        <Route path="farmerContract" element={<FARMER_CONTRACT_WITH_ICS/>}/>
        <Route path="allforms" element={<AllRequiredForms/>} />     
      </Routes>
    </BrowserRouter>
  );
}
  
export default App;

