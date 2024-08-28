import React from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const PrivateRouter = () => {
  const { user } = useSelector((state) => state.auth);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
