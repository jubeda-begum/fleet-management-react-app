// Import Navigate for redirect
import { Navigate } from "react-router-dom";

// Import auth object
import { auth } from "./auth";

// Protect routes based on login status
export default function ProtectedRoute({ children }) {
  // If authenticated show page else redirect to login
  return auth.isAuth ? children : <Navigate to="/login" />;
}