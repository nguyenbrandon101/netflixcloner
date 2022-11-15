import React from "react";
import Navibar from "./Navibar";
import Home from "./Home";
import {Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./context/Login";
import Signup from "./context/Signup";
import Account from "./context/Account";
export default function App() {
  return (
    <div>
      <AuthContextProvider></AuthContextProvider>
      <Navibar></Navibar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Account" element={<Account />}></Route>
      </Routes>
    </div>
  )
}
