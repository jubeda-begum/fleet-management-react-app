// Import routing components from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Login from "./pages/Login";
import Admin from "./pages/Admin";

// Import protected route wrapper
import ProtectedRoute from "./ProtectedRoute";

// Main App component
export default function App() {
  return (
    // BrowserRouter enables routing
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