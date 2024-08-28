import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/NavBar.jsx";
import News from "../pages/News.jsx";
import Login from "../pages/Login.jsx";
import PrivateRouter from "./PrivateRouter.jsx";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateRouter />}>
            <Route path="" element={<News />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
