import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = localStorage.getItem("user");
  const accessToken = user ? JSON.parse(user).accessToken : null;
  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
