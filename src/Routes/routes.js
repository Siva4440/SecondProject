import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/login";
import Registration from "../Pages/Registration/registration";
import Products from "../Pages/Products/products";
import Profile from "../Pages/Profile/profile";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Login/>}></Route>
        <Route path="/login" element={< Login/>}></Route>
        <Route path="/registration" element={< Registration/>}></Route>
        <Route path="/products" element={< Products/>}></Route>
        <Route path="/profile" element={< Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
