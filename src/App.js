//import React from "react";
// import "./App.css";
import StepBarComp from "./components/StepBarComp";
// export default function App() {
//   return (
//     <div className="App">
//       <StepBarComp />
//     </div>
//   );
// }

import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Login from "./components/Login"
import Register from "./components/Register"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<StepBarComp />} />
      
      </Routes>
    </BrowserRouter>
  );
}
  
export default App;

