import React from "react";

import { Route, Routes } from 'react-router-dom';
import Navibar from "./Navibar";
import Home from "./Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./context/Login";
import Signup from "./context/Signup";
import Account from "./context/Account";
function App() {
  return (
    <div>
      <AuthContextProvider></AuthContextProvider>
      <Navibar></Navibar>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path="/Account" element={<Account />}></Route>
      </Routes>
    </div>
  )
}

export default App;
