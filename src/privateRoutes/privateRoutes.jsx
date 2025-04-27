import Cookies from "js-cookie";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const token = Cookies.get("token");

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
