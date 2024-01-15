import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const { isAuthed, role } = useContext(AuthContext);
  return !isAuthed ? (
    children
  ) : role === 1 ? (
    <Navigate to="/admin" />
  ) : (
    <Navigate to="/" />
  );
};

export default AuthRoute;
