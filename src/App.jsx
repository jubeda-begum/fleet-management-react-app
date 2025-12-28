import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProtectedRoute from "./ProtectedRoute";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root route - shows Login page */}
        <Route path="/" element={<Login />} />
        {/* Login route */}
        <Route path="/login" element={<Login />} />
        {/* Protected admin route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
