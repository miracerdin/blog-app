import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetail from "../pages/BlogDetail";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="register" element={<Register />} />
        <Route path="/blogcard/:id" element={<PrivateRouter />}>
          <Route path="" element={<BlogDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
