import { Navigate } from "react-router-dom";
import { auth } from "./auth";
export default function ProtectedRoute({ children }) {
  return auth.isAuth ? children : <Navigate to="/login" />;
}
