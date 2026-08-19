import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  if (user) {
    return children;
  } else {
    return <Navigate to="login" />;
  }
};

export default ProtectedRoutes;
