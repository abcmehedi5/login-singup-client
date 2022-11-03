import logo from "./logo.svg";
import "./App.css";
import Singup from "./Componets/Auth/Registration/Singup";
import AllUser from "./Componets/Auth/AllUser/AllUser";
import Navbar from "./Componets/Navbar/Navbar";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Login from "./Componets/Auth/Login/Login";
import { createContext, useState } from "react";
import PrivateRoter from "./Componets/PrivetRouter/PrivateRoter";
import ForgetPassword from "./Componets/Auth/ForgetPassword/ForgetPassword";
export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUsr] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUsr]}>
      <h4>{loggedInUser.email}</h4>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Singup />} />
          <Route path="/" element={<Singup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword/>} />
          <Route
            path="/admin"
            element={
              <PrivateRoter>
                <AllUser />
              </PrivateRoter>
            }
          />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
