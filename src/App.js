import React from "react";
import Navibar from "./Navibar";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <Navibar></Navibar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
